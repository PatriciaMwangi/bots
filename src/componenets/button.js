//import React, { useState} from "react";

export default function Button({ selectBot }) {
 //const[postedCategories,setPostedCategories]=useState(null)
 //const[disable,setDisable]=useState(false)

   /*const enlisted = (id) => {
          setDisable(true)
            fetch(`http://localhost:3001/yourbotarmy/`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(selectBot)
            })
            .then((res) => {
                if (res.ok) {
                    console.log("Bot enlisted successfully");
                    return res.json()
                } else {
                    console.error("Failed to enlist bot:", res.statusText);
                }
            })
            .then((dta)=>setPostedCategories(dta))
            .catch((error) => console.error("Error enlisting bot:", error))
            .finally(()=>setDisable(false))//resets it even when the function fails
       
    };*/
    
    

    const discharged = (id) => {
        fetch(`https://json-server-sg8o.onrender.com/bots/${id}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(selectBot)
        })
        .then((res) => {
            if (res.ok) {
                console.log("Bot deleted from /bots successfully");
            } else {
                console.error("Failed to delete bot from /bots:", res.statusText);
            }
        })
        .catch((error) => console.error("Error deleting bot from /bots:", error));
    };

    return (
        <>
            <button className='btn btn m-3 p-3' onClick={()=>discharged(selectBot.id)}>Permanently Discharge</button>
        </>
    );
}
