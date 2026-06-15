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



//update existing destination
export const updateDestination = async(formData, params) =>{
    "use server"
    const updateDestination = Object.fromEntries(formData.entries());
    const res = await fetch(`http://localhost:5000/destination/${params}`,{
        method: 'PATCH',
        headers:{
            'content-type': 'application/json'
        },
        body: JSON.stringify(updateDestination)
    })
    const data = await res.json()

    if(data.modifiedCount > 0){
        revalidatePath(`/destination/${params}`);
        
    }

    return data
}


//Delete 

export const deleteDestination = async(userId) => {
    "use server"
    const res = await fetch(`http://localhost:5000/destination/${userId}`,{
        method : 'DELETE'
    });
    const data = await res.json();

    // if(data.deletedCount > 0){
    //     revalidatePath("/destination")
    // }

    return data ;
}