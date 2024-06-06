import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link} from 'react-router-dom'
import { useContext } from 'react';
import {AuthContext} from '../../context/AuthProvider'


const NavBar = () => {
  const {user,logOut} = useContext(AuthContext);
  console.log(user);
     return (
    <>
    <div className='bg-light'>
    <div className="upperNav d-flex justify-content-between container px-5 pt-2  py-3 align-items-center">
    <div className="titleApp">
      <h1 className='fs-3'>Med APP</h1>
    </div>

<div className='links '>
<Link to='/'>Home</Link>
<Link className='mx-4' to='/Appiontment'>Appointment</Link>
<Link to='/Patients' className='me-4'>Patients</Link>
<Link to='/calender'>Calender</Link>
<Link to='/doctors' className='mx-4'>Doctors</Link>
</div>

    <div className='d-flex flex-column '>
          {
            user.email
          }
       <button className='btn btn-info' onClick={logOut}>LogOut</button>
      
    

    </div>
  </div>
    </div>
    </>
  )
}

export default NavBar