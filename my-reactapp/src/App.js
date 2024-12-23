import User from "./getuser/User";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddUser from "./adduser/AddUser";
import Update from "./updateuser/Update";
import Test from "./components/test"; // Ensure "test" is renamed to "Test" in the file as well


function App() {
  const route = createBrowserRouter([
    {
      path: "/", 
      element: <User />,
    },
    {
      path: "/add", 
      element: <AddUser />,
    },
    {
      path: "/update/:id", 
      element: <Update/>,
    },
    {
      path: "/test", 
      element: <Test />,
    },
  ]);

  return (
    <div className="App">
      {/* Use "router" instead of "route" */}
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
