import MUIDataTable from "mui-datatables";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { productData } from "../../../BLL/type";
import { useEffect, useState } from "react";
import { deleteProduct, getAllProducts } from "../../../DAL/productDataAccess";
import { NavLink, useNavigate } from "react-router-dom";
import { toHaveDisplayValue } from "@testing-library/jest-dom/matchers";

const columns = [
  {
    name: "id",
    label: "ID",
  },
  {
    name: "image",
    labl: "Image",
    options: {
      customBodyRender: (value: string) => (
        <img src={value} alt="pic" className="img-fluid w-50" />
      ),
    },
  },
  {
    name: "name",
    lavel: "Name",
  },
  {
    name: "category",
    label: "Categoty",
  },
  {
    name: "price",
    label: "Price",
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
  const response = deleteProduct(id);
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

export default function ManageProduct() {
  const [products, setProducts] = useState<productData[]>([]);

  useEffect(() => {
    getAllProducts().then((data) => {
      setProducts(data);
    });
  }, []);

  return (
    <>
      <div className="mt-2">
        <NavLink to={"add"} type="button" className="btn btn-success m-3">
          ++ Add new product
        </NavLink>
        <ThemeProvider theme={getMUITheme()}>
          <MUIDataTable
            title={"Product List"}
            data={products}
            columns={columns}
            options={options}
          />
        </ThemeProvider>
      </div>
    </>
  );
}
