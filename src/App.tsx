
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import RoutesManager from "@/Routes";

const router = createBrowserRouter([
  {
    path: "*",
    element: <RoutesManager/>,
  }
]);

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
