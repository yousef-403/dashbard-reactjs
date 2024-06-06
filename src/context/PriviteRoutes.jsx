/* eslint-disable react/prop-types */
import { useContext } from "react"
import { AuthContext } from "./AuthProvider"
import { Navigate, useLocation } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';


const PriviteRoutes = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const location = useLocation();
    if(loading){
      return(
          <div className="w-100 h-100vh">
          <Button variant="primary" disabled>
          <Spinner
            as="span"
            animation="border"
            size="sm"
            role="status"
            aria-hidden="true"
          />
          <span className="visually-hidden">Loading...</span>
        </Button>{' '}
        <Button variant="primary" disabled>
          <Spinner
            as="span"
            animation="grow"
            size="sm"
            role="status"
            aria-hidden="true"
          />
          Loading...
        </Button>
          </div>
      )
  }
  if(user){
        return children;
    }
  return (
  <Navigate to="/login" state={{from:location}} replace></Navigate>
  )
}

export default PriviteRoutes