import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Col} from 'react-bootstrap'
import {Link, useLocation, useNavigate} from 'react-router-dom'
import { useContext} from 'react';
import {AuthContext} from '../../context/AuthProvider'


const SignUp = () => {

 

  const {createUser}=useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleRegister = (e)=>{
    e.preventDefault();
    const userData = e.target;
    const email = userData.email.value;
    const password = userData.password.value;
    createUser(email,password).then((result)=>{
      const user = result.user;
      alert("Account created successfully");
      
      navigate(from,{replace:true})
    }).catch(alert("faild Register Account"))
  }

  return (
    <div className='login '>
      <div className='row login-container'>
        <Col className='login-thumb' sm={8}>
          <div className='image'> 
            <img src='../src/assets/pexels-daniel-frank-353551.jpg'/>
          </div>
        </Col>

       <Col>
       
          <div className='login-form d-flex justify-content-center flex-column  align-items-center '>
          
           <Form className='login-form-content' onSubmit={handleRegister}>
           <h1 className='login-title text-info '>Register</h1>
               
           <Form.Group className="mb-3" >
             
              <Form.Control type="text" name='name' id='name' placeholder="Enter User Name" className='bg-info border-0 w-75' />
           </Form.Group>

            <Form.Group className="mb-3" >
             
              <Form.Control type="email" name='email' id='email' placeholder="Enter email" className='bg-info border-0 w-75' />
           </Form.Group>
 
          <Form.Group className="mb-3">
           
            <Form.Control type="password" name='password' id='password' placeholder="Password"  className='w-75 bg-info border-0 ' />
         </Form.Group>
         
          <Button variant="info" type="submit" className='login-btn'>
           Register
          </Button> 
         <Link to='/login'>
         <Button variant="primary" type="submit" className='login-btn mx-4'>
         Login
      </Button>
         </Link>
        </Form>
       </div>
    </Col>
      </div>
    </div>
  )
}

export default SignUp