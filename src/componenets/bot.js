import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
//import YourBotArmy from './YourBotArmy'
//import { setBots } from './BotCollection'
import Button from './button'

export default function Bot(){ 
const {id}=useParams()
const [selectBot,setSelectBot]=useState({})
 function Enlist(id){
   useEffect(()=>{
       fetch(`https://json-server-sg8o.onrender.com/bots/${id}`)
    .then((res)=>res.json())
    .then((data)=>setSelectBot({...data}))
   },[id])
   console.log(selectBot,'set')
   }
  Enlist(id)
   return(
    <>
  
   <ul>
     
              <li>ID: {selectBot.id}</li>
                        <li>Name: {selectBot.name}</li>
                        <li>Health: {selectBot.health}</li>
                        <li>Damage: {selectBot.damage}</li>
                        <li>Armor: {selectBot.armor}</li>
                        <li>Class: {selectBot.bot_class}</li>
                        <li>Catchphrase: {selectBot.catchphrase}</li>
                        
                        <img  
                         style={{cursor : "pointer"}}
                         src={selectBot.avatar_url} alt="Bot Avatar" />
                         
                        <li>Created At: {selectBot.created_at}</li>
                        <li>Updated At: {selectBot.updated_at}</li>
                        <div className="btn-group-vertical" role="group" aria-label="Vertical button group">
                         <a className='btn btn m-3 p-3' href='/'>Go back</a>
                         <Button selectBot={selectBot}/>
                         </div>
    </ul>
    </>
   )
}
export function setPost(){}