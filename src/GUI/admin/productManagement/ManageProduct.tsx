import MUIDataTable from "mui-datatables";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { productData } from "../../../BLL/type";
import { useEffect, useState } from "react";
import { getAllProducts } from "../../../DAL/productDataAccess";
import { NavLink } from "react-router-dom";

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
    name: "Custom",
    options: {
      customBodyRender: () => (
        <>
          <NavLink to={"edit"} type="button" className="btn btn-primary mr-2">
            Edit
          </NavLink>
          <button
            data-toggle="modal"
            data-target="#deleteConfirmModal"
            type="button"
            className="btn btn-primary"
          >
            Delete
          </button>
        </>
      ),
    },
  },
];

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
