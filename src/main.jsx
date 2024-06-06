
import ReactDOM from 'react-dom/client'
import Dashbard from './pages/Dashboard/Dashboard.jsx'
import Appionment from './pages/Appoinment/Appoinment.jsx'
import Login from './component/login/Login.jsx'
import SignUp from './component/SignUp/SignUp.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import AuthProvider from './context/AuthProvider.jsx'
import PriviteRoutes from './context/PriviteRoutes.jsx'
import Layout from './pages/layout/Layout.jsx'
import Calender from './pages/calender/Calender.jsx'
import Patients from './pages/patients/Patients.jsx'
import Doctors from './pages/Doctors/Doctors.jsx'



const router = createBrowserRouter([
  
 
      {
        path:"/",
        element:<PriviteRoutes>
            <Layout/>
        </PriviteRoutes>,
        children:[
          {
            path:'/',
            element:<Dashbard/>
          },
          {
            path:'/Appiontment',
            element:<Appionment/>
          },
          {
            path:'/calender',
            element:<Calender/>
          },
          {
            path:'/Patients',
            element:<Patients/>
          },{
            path:'/doctors',
            element:<Doctors/>
          }
        ]
      },
      {
        path:"login",
        element:<Login/>
      },
      {
        path:"signUp",
        element:<SignUp/>
      }

  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
 <AuthProvider>
 <RouterProvider router={router} />
 </AuthProvider>

)
