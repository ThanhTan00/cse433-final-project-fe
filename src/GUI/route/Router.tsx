import { RouterProvider, createBrowserRouter } from "react-router-dom";
import UserLayout from "../user/UserLayout";
import HomePage from "../user/homePage/HomePage";
import ProductPage from "../user/productPage/ProductPage";

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
    ],
  },
]);

export function MainRouter() {
  return <RouterProvider router={router} />;
}
