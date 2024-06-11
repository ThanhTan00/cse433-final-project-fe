import { RouterProvider, createBrowserRouter } from "react-router-dom";
import UserLayout from "../user/UserLayout";
import HomePage from "../user/homePage/HomePage";
import ProductPage from "../user/productPage/ProductPage";
import ProductDetail from "../user/productDetaiPage/ProductDetail";
import Contact from "../user/contactPage/Contact";
import AdminLayout from "../admin/AdminLayout";
import Dashboard from "../admin/dashboardPage/Dashboard";
import ManageProduct from "../admin/productManagement/ManageProduct";
import AddProduct from "../admin/productManagement/AddProduct";
import EditProduct from "../admin/productManagement/EditProduct";
import ManageUser from "../admin/UserManagement/ManageUser";
import AddUser from "../admin/UserManagement/AddUser";

const router = createBrowserRouter([
  {
    path: "/",
    element: <UserLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/shop",
        element: <ProductPage />,
      },
      {
        path: "/shop/:id",
        element: <ProductDetail />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "product-management",
        children: [
          {
            index: true,
            element: <ManageProduct />,
          },
          {
            path: "add",
            element: <AddProduct />,
          },
          {
            path: "edit/:id",
            element: <EditProduct />,
          },
        ],
      },
      {
        path: "user-management",
        children: [
          {
            index: true,
            element: <ManageUser />
          },
          {
            path: "add",
            element: <AddUser />
          }
        ]
      },
    ],
  },
]);

export function MainRouter() {
  return <RouterProvider router={router} />;
}
