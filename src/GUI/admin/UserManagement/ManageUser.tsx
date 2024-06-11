import MUIDataTable from "mui-datatables";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { productData, UserData } from "../../../BLL/type";
import { useEffect, useState } from "react";
import { deleteProduct, getAllProducts } from "../../../DAL/productDataAccess";
import { NavLink, useNavigate } from "react-router-dom";
import { toHaveDisplayValue } from "@testing-library/jest-dom/matchers";
import { deleteUser, getAllUsers } from "../../../DAL/UserDataAccess";

const columns = [
  {
    name: "id",
    label: "ID",
  },
  {
    name: "username",
    lavel: "Name",
  },
  {
    name: "email",
    label: "Email",
  },
  {
    name: "id",
    label: "Custom",
    options: {
      customBodyRender: (value: number) => (
        <>
          <NavLink
            to={`edit/${value}`}
            type="button"
            className="btn btn-primary mr-2"
          >
            Edit
          </NavLink>
          <div
            onClick={() => handleDelete(value)}
            typeof="button"
            className="btn btn-primary"
          >
            Delete
          </div>
        </>
      ),
    },
  },
];

async function handleDelete(id: number) {
  console.log(id);
  const response = deleteUser(id);
}

const options = {
  selectableRow: false,
  elevation: 0,
  rowsPerPage: 5,
  rowsPerPageOptions: [2, 5, 10, 30, 50],
};

const getMUITheme = () =>
  createTheme({
    components: {
      MUIDataTableBodyCell: {
        styleOverrides: {
          root: {
            width: "150px",
            height: "90px",
            textAlign: "center",
            backgroundColor: "white",
            fontSize: "15px",
          },
        },
      },
    },
  });

export default function ManageUser() {
  const [users, setUsers] = useState<UserData[]>([]);

  useEffect(() => {
    getAllUsers().then((data) => {
      setUsers(data);
    });
  }, []);

  return (
    <>
      <div className="mt-2">
        <NavLink to={"add"} type="button" className="btn btn-success m-3">
          ++ Add new User
        </NavLink>
        <ThemeProvider theme={getMUITheme()}>
          <MUIDataTable
            title={"Product List"}
            data={users}
            columns={columns}
            options={options}
          />
        </ThemeProvider>
      </div>
    </>
  );
}
