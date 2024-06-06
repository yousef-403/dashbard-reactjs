
import {myApi} from "./confige"
export const getdata = async ()=>{
    const data = await myApi("/appiontment")
    return data.data 
    
}