import React, { useState} from "react";

export default function Button({ selectBot }) {
    const[postedCategories,setPostedCategories]=useState({})

   const enlisted = (id) => {
          
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
                } else {
                    console.error("Failed to enlist bot:", res.statusText);
                }
            })
            .then((dta)=>setPostedCategories(dta))
            .catch((error) => console.error("Error enlisting bot:", error));
       
    };
    
    

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
            <button className='btn btn m-3 p-3' onClick={() => enlisted()}>Enlist to your API</button>
            <button className='btn btn m-3 p-3' onClick={()=>discharged(selectBot.id)}>Permanently Discharge</button>
        </>
    );
}
