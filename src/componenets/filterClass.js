import { useState } from "react"
import { Link } from "react-router-dom"
export default function Class({bots,enlistBot}){
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
        <h1>Filter by class,click twice to return to original state</h1>
            <button className='btn btn m-3 p-3' onClick={()=>category("Witch")} >Witch</button>
            <button className='btn btn m-3 p-3' onClick={()=>category("Medic")}>Medic</button>
            <button className='btn btn m-3 p-3' onClick={()=>category('Support')}>Support</button>
            <button className='btn btn m-3 p-3' onClick={()=>category('Assault')}>Assault</button>
            <button className='btn btn m-3 p-3' onClick={()=>category('Defender')}>Defender</button>

<ul>
<div className='d-flex justify-content-center flex-wrap' >

    {filtered.map((m)=>(
        <div className='card' key ={m.id}>
            <Link to={`/bots/}`}>
            <img src={m.avatar_url} alt={m.name} className="card-img-top"/>
            </Link>
           <h2 className="card-text">{m.bot_class}</h2>
           <p className="card-text"> &#128158;{m.health } &#x1F4A5;{m.damage} &#128737; {m.armor}</p>

           <button className='btn btn m-3 p-3' onClick={()=>enlistBot(m)}>Add me to your army</button>
        </div>
    ))}
    </div>
</ul>


        </>
    )
}