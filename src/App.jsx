import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Home from "./components/Home";
import Sidebar from "./components/Sidebar";
import RootLayout from "./components/RootLayout";
import RegisterForm from "./components/register-form";
import Backup from "./components/Backup";

const router = createBrowserRouter([
  {
    path: "/", 
    children: [
      { index: true, element: <Signin />},
      {path: "signup", element: <Signup />}
    ],
  },
  {
    path: "/dashboard",
    element: <RootLayout />,
    children: [
      {index: true, element: <Home />},
      {path: "register", element: <RegisterForm />},
      {path: "backup", element: <Backup />}
    ]
  }
]);

function App() {
  return <RouterProvider router={router}/>
}

export default App;
