import { useState } from "react"
import './Dashboard.css'

import {myApi} from '../../api/confige.js'
export default function Form() {
const [name,setName] = useState('') 
const [doctor,setDoctor] = useState('') 
const [number,setNumber] = useState('') 
const [start,setStart] = useState('') 
const [end,setEnd] = useState('') 
const  [adress ,setAdress] = useState('')
const [age,setAge] = useState('')

let DATA = {
  name,doctor,number,start,end
}
let PatientData ={
  name,doctor,number,adress,age
}
const postData = async()=>{await myApi.post('/appiontment',DATA)

}
const postPatient = async()=> {await myApi.post('/patients' ,PatientData)}

const onSubmitAppontment =(e)=>{
  e. preventDefault()
  postData()
  alert("Appontment added")
}

const onSubmitPatients =(e)=>{
  e. preventDefault()
  postPatient()
  alert("patient added")
}

  return (
    <>
    <div className="d-flex justify-content-between gap-4 flex-wrap">
    <form className=" shadow p-4 rounded-2  " onSubmit={onSubmitAppontment}>
    <h2 className="text-center">Add new appointment</h2>
    
   <div className="form  mt-4">
  
    <div className="form-floating mb-3 ">
    <input type="name" className="form-control" id="floatingInput" placeholder="name@example.com" value={name} onChange={(e)=>setName(e.target.value)}/>
    <label htmlFor="floatingInput">Name</label>
  </div>
<div className="form-floating mb-3">
<input type="name" className="form-control" id="floatingInput" placeholder="name@example.com" value = {doctor} onChange={(e)=>setDoctor(e.target.value)}/>
<label htmlFor="floatingInput">Doctor</label>
</div>
 <div className="form-floating mb-3">
<input type="number" className="form-control" id="floatingInput" placeholder="name@example.com" value ={number} onChange={(e)=>setNumber(e.target.value)}/>
<label htmlFor="floatingInput">Number</label>
</div>
<div className="form-floating mb-3">
<input type="datetime-local" className="form-control" id="floatingInput" placeholder="name@example.com" value={start} onChange={(e)=>setStart(e.target.value)}/>
<label htmlFor="floatingInput">Date && time</label>
</div>
<div className="form-floating mb-3">
<input type="datetime-local" className="form-control" id="floatingInput" placeholder="name@example.com" value={end} onChange={(e)=>setEnd(e.target.value)}/>
<label htmlFor="floatingInput">Time Out</label>
</div>
</div>
    <button className='btn btn-primary'>Add appointment</button>

    </form>
    <form className="  shadow p-4 rounded-2  " onSubmit={onSubmitPatients}>
    <h2 className="text-center">Add Patient</h2>
    
   <div className="form  mt-4">
  
    <div className="form-floating mb-3 ">
    <input type="name" className="form-control" id="floatingInput" placeholder="name@example.com" value={name} onChange={(e)=>setName(e.target.value)}/>
    <label htmlFor="floatingInput">Name</label>
  </div>
<div className="form-floating mb-3">
<input type="name" className="form-control" id="floatingInput" placeholder="name@example.com" value = {doctor} onChange={(e)=>setDoctor(e.target.value)}/>
<label htmlFor="floatingInput">Doctor</label>
</div>
 <div className="form-floating mb-3">
<input type="number" className="form-control" id="floatingInput" placeholder="name@example.com" value ={number} onChange={(e)=>setNumber(e.target.value)}/>
<label htmlFor="floatingInput">Number</label>
</div>
<div className="form-floating mb-3">
<input type="address" className="form-control" id="floatingInput" placeholder="name@example.com" value = {adress} onChange={(e)=>setAdress(e.target.value)}/>
<label htmlFor="floatingInput">Adress</label>
</div>
<div className="form-floating mb-3">
<input type="number" className="form-control" id="floatingInput" placeholder="name@example.com" value ={age} onChange={(e)=>setAge(e.target.value)}/>
<label htmlFor="floatingInput">Age</label>
</div>
</div>
    <button className='btn btn-primary'>Add Patient</button>

    </form>
    </div>
   
    </>
  )
}
