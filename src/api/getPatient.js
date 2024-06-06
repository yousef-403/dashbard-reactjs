import {myApi} from "./confige"
export const getPatient = async ()=>{
    const data = await myApi("/patients")
    return data.data 
    
}