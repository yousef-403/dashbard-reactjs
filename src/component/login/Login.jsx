
import {Col} from 'react-bootstrap'
import './Login.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Link, useLocation, useNavigate} from 'react-router-dom'
import { useContext } from 'react';
import {AuthContext} from '../../context/AuthProvider'


const Login = () => {

  const {login}=useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (e)=>{
    e.preventDefault();
    const userData = e.target;
   const email = userData.email.value;
   const password = userData.password.value;
   login(email,password).then((result)=>{
    const user = result.user;
    alert("Login Successfull");
    navigate(from,{replace:true})
   }).catch(()=>{
    alert("please provide valid email & password");
   })
  }

  return (
    <div className='login  '>
      <div className='row login-container'>
        <Col className='login-thumb' sm={8}>
          <div className='image'> 
            <img src='../src/assets/pexels-daniel-frank-353551.jpg'/>
          </div>
        </Col>

       <Col>
       
          <div className='login-form d-flex justify-content-center flex-column  align-items-center '>
          
           <Form className='login-form-content' onSubmit={handleSubmit}>
           <h1 className='login-title text-info '>Login</h1>
            <Form.Group className="mb-3" >
             
              <Form.Control type="email" name='email' id='email' placeholder="Enter email" className='bg-info border-0 ' />
           </Form.Group>
 
          <Form.Group className="mb-3" >
           
            <Form.Control type="password" name='password' id='password' placeholder="Password"  className='w-75 bg-info border-0 ' />
            </Form.Group>
         
         
        <Button variant="info" type="submit" className='login-btn'>
           Sign In
        </Button>
      <Link to='/signUp'>
      <Button variant="primary" type="submit" className='register-btn mx-4'>
      Create Account
   </Button>
      </Link> 
        </Form>
       </div>
    </Col>
      </div>
    </div>
  )
}

export default Login