
import {
  createHashRouter,
  RouterProvider,
} from "react-router";
import RoutesManager from "@/Routes";

const router = createHashRouter([
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
