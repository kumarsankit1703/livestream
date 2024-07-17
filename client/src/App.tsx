import CreateUser from "./pages/CreateUser";
import Nav from "./component/Nav";
import HomePage from "./pages/HomePage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import UpdateUser from "./pages/UpdateUser";

const router = createBrowserRouter([
  {
    path : '/',
    element: <Nav />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path:'/createuser',
        element : <CreateUser />
      },
      {
        path:'/updateuser',
        element : <UpdateUser />
      }
    ]
  }
])

function App() {
  
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
