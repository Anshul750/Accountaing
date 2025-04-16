import {createBrowserRouter} from "react-router-dom";
import Signup from './Signup';

export const router = createBrowserRouter([
    { path: "/", element: <App /> },
    { path: "/signup", element: <Signup /> },
    // { path: "/signin", element: <Signin /> },
    // {
    //   path: "/dash",
    //   element: (
    //     <PrivateRoute>
    //       <Dash />
    //     </PrivateRoute>
    //   ),
    // },
  ]);