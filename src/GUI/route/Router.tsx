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
            path: "edit",
            element: <EditProduct />,
          },
        ],
      },
    ],
  },
]);

export function MainRouter() {
  return <RouterProvider router={router} />;
}
