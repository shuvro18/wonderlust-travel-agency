import { revalidatePath } from "next/cache";

//Create New user
export const createDestination = async(formData) =>{
    "use server"
    const newDestination = Object.fromEntries(formData.entries());
    const res = await fetch("http://localhost:5000/destination", {
        method: 'POST',
        headers:{
            'content-type': 'application/json'
        },
        body: JSON.stringify(newDestination)
    })
    const data = await res.json()
    if(data.insertedId){
        revalidatePath("/")
        
    }
    return data
}