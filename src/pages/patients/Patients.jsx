import {Table} from 'react-bootstrap'
import { useState ,useEffect} from 'react';
import {getPatient} from '../../api/getPatient'
import axios from 'axios';
import ReactWhatsapp from 'react-whatsapp';
import { FaWhatsapp } from "react-icons/fa";

const Patients = () => {
  const [patients,setPatients] = useState([]);
  
useEffect(()=>{
  const runPatient = async ()=>{setPatients(await getPatient());}
    runPatient()
  
},[])

const deletePatient = (id) =>{
  let url = `http://localhost:3000/patients/${id}`

  axios.get(url).then(res => {
    const del = patients.filter(ele => id !== ele.id)
    setPatients(del)
    console.log(res.data);
  
})
}
 console.log(patients);

  return (
    <div className='container px-5'>
    <h1>Patients</h1>
    <Table striped bordered hover>
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Adress</th>
        <th>Age</th>
        <th>Doctor</th>
        <th>Phone-Number</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
    {
    patients.map((patient)=>{
      return <tr key={patient.id}>
      <td>{patient.id}</td>
      <td>{patient.name}</td>
      <td>{patient.adress}</td>
      <td>{patient.age}</td>
      <td>{patient.doctor}</td>
      <td>{patient.number}</td>
      <td>
      <button className='btn btn-primary me-3' onClick={() => deletePatient(patient.id)}>Cancel</button>
      <ReactWhatsapp number={patient.number} message="" className='border-0 text-primary' > <FaWhatsapp  className='fs-3 text-primary bg-transparent  border-0'/> </ReactWhatsapp>
      </td>
      </tr>
    })
    }
    </tbody>
    </Table>
    </div>
  )
}

export default Patients