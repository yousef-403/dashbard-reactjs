import {getdata} from '../../api/getData'
import Table from 'react-bootstrap/Table';
import './Appoinment.css'
import { useEffect, useState } from 'react';
import ReactWhatsapp from 'react-whatsapp';
import { FaWhatsapp } from "react-icons/fa";
import axios from 'axios';

export default function Appointment() {
  const [items,setItems] = useState([]);
  useEffect(()=>{
const runData =async ()=>{setItems(await getdata());}

  runData() 
  
  
  },[])
  console.log(items.length);
  const editHandle = (id) =>{
    let url = `http://localhost:3000/appiontment/${id}`

    axios.get(url).then(res => {
      const del = items.filter(ele => id !== ele.id)
      setItems(del)
      console.log(res.data);
    
  })
  }
 

  return (
    <div className='container px-5 '>
      <h1>Appointments</h1>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Doctor</th>
          <th>Phone-Number</th>
          <th>Date</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
      {
        items.map((item)=>{
        return <tr key={item.id}>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.doctor}</td>
        <td>{item.number}</td>
        <td>{item.start}</td>
        <td>
        <button className='btn btn-primary me-3' onClick={() => editHandle(item.id)}>Cancel</button>
        <ReactWhatsapp number={item.number} message="" className='border-0 text-primary' > <FaWhatsapp  className='fs-3 text-primary bg-transparent  border-0'/> </ReactWhatsapp>
        </td>
        
      </tr>
      })}
       
      </tbody>
    </Table>
      
    </div>
  )
}
