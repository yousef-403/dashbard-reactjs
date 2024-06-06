import { useEffect, useState } from 'react';
import {getdata}from '../../api/getData'
import {getPatient} from '../../api/getPatient.js'
import Card from 'react-bootstrap/Card';
import {FaBriefcaseMedical} from 'react-icons/fa6'

export default function NoteCards() {
  const [item,setItem] = useState([]);
  const [Patients,setPatients] = useState([])
  useEffect(()=>{
    const appointments = async ()=> { setItem( await getdata())}
    const PatientList = async ()=> { setPatients( await getPatient())}
    appointments()
    PatientList()
  },[])

 
  return (
    <>
    <div className=" py-4 d-flex gap-3 flex-wrap justify-content-center container ">
        <div className="itemNote">
        {[
        'Light'].map((variant) => (
        <Card 
          
          key={variant}
          text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
          style={{ width: '18rem' }}
          className="mb-2 border-0 shadow rounded-4"
        >
          
          <Card.Body className='d-flex  justify-content-center gap-3 align-items-lg-center py-4'>
            <Card.Title className='text-info fs-1'> <FaBriefcaseMedical/></Card.Title>
            <Card.Text className='text-center'>
             Appoinments <br />
            <span>{item.length}</span> 
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
        </div>
        <div className="itemNote">
        {[
        'Light'].map((variant) => (
        <Card 
          
          key={variant}
          text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
          style={{ width: '18rem' }}
          className="mb-2 border-0 shadow rounded-4"
        >
          
          <Card.Body className='d-flex  justify-content-center gap-3 align-items-lg-center py-4'>
            <Card.Title className='text-info fs-1'> <FaBriefcaseMedical/></Card.Title>
            <Card.Text className='text-center'>
             Patients <br />
             <span>{Patients.length}</span>
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
        </div>
        <div className="itemNote">
        {[
        'Light'].map((variant) => (
        <Card 
          
          key={variant}
          text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
          style={{ width: '18rem' }}
          className="mb-2 border-0 shadow rounded-4"
        >
          
          <Card.Body className='d-flex  justify-content-center gap-3 align-items-lg-center py-4'>
            <Card.Title className='text-info fs-1'> <FaBriefcaseMedical/></Card.Title>
            <Card.Text>
             Doctors <br />
             6
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
        </div>
        
    </div>
    </>
  )
}
