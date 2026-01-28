import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './Layout/Root.jsx';
import Home from './Pages/Home/Home.jsx';
import CallLogs from './Pages/CallLogs/CallLogs.jsx';
import Appointments from './Pages/Appointments/Appointments.jsx';
import Settings from './Pages/Settings/Settings.jsx';
import { UserProvider } from './Context/UserContext.jsx';
import EditeProfile from './Pages/Settings/EditeProfile.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        index: true,
        element:<Home></Home>
      },
       {
        path:'/call-logs',
        element: <CallLogs></CallLogs>
      },
       {
        path:'/appointments',
        element: <Appointments></Appointments>
      },
       {
        path:'/settings',
        element: <Settings></Settings>
      },
       {
        path:'/edite',
        element: <EditeProfile></EditeProfile>
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
    <RouterProvider router={router} />
    </UserProvider>
  </StrictMode>,
)
