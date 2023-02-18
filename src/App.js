import "./App.css";
import { Home } from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Shop } from "./pages/Shop/Shop";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <>Error 404, This page is under Development.</>,
    },
    {
      path: "/shop",
      element: <Shop />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
