
import{Calendar,momentLocalizer} from 'react-big-calendar'
import "react-big-calendar/lib/css/react-big-calendar.css"
import moment from 'moment'

import { useState } from 'react'
import { useEffect } from 'react'
import{getdata} from '../../api/getData'



const localizer = momentLocalizer(moment)
export default function CalenderApp() {

  const[dateCalender,setdateCalender]=useState([]);
  useEffect(()=>{
    const ranDateData = async()=>{ setdateCalender(await getdata())}
    ranDateData()
  },[])
  const events = dateCalender.map(event=>{
    return {
      
title :event.name,
start :new Date(event.start),
end :new Date(event.end),


    }
  })
  return (
    <>
<div className='calender p-2 '>
<Calendar
localizer={localizer}
startAccessor={"start"}
events={events}
endAccessor={"end"}
style={{
  height:"42rem",
  padding:"2rem"
}}


/>
</div>

    </>
  )
}
