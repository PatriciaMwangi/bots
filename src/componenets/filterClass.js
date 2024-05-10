import { useState } from "react"
import { Link } from "react-router-dom"
export default function Class({bots}){
const [classs,setClasss]=useState({bots})

function debounce(func,delay){
    let timeout;
    return function(...args){
        clearTimeout(timeout);
        timeout=setTimeout(()=>{
            func.apply(this,args);
        },delay)
        }
    }


let category=debounce((className)=>{
    if(className===classs){
        setClasss(true)
    }else{
        setClasss(className)
    }
},100)

let filtered=bots.filter((b)=>{
    return classs===null||b.bot_class===classs
})
   
    return(
        <>
        <h1>Filter by class,double click to return to original state</h1>
            <button className='btn btn m-3 p-3' onClick={()=>category("Witch")} >Witch</button>
            <button className='btn btn m-3 p-3' onClick={()=>category("Medic")}>Medic</button>
            <button className='btn btn m-3 p-3' onClick={()=>category('Support')}>Support</button>
            <button className='btn btn m-3 p-3' onClick={()=>category('Assault')}>Assault</button>
            <button className='btn btn m-3 p-3' onClick={()=>category('Defender')}>Defender</button>

<ul>
    {filtered.map((m)=>(
        <li>
            <Link to={`/bots/}`}>
            <img src={m.avatar_url} alt={m.name}/>
            </Link>
           Class: {m.bot_class}
        </li>
    ))}
</ul>

        </>
    )
}