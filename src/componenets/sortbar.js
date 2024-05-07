import { useState } from "react"
import { Link } from "react-router-dom"
export default function Sort({bots}){
    const [sorted,setSorted]=useState({bots})
    function change(e){
 setSorted(e.target.value)
    }

    
 const filtered=Array.isArray(bots) &&
    bots.filter((b)=>{
    if(sorted=== 'all'){
        return true
    }
   return b[sorted] 
 })
 filtered.sort((b,a)=>b[sorted]-a[sorted]).reverse()



    return(
        <>

<select id="cars" name="categories" onChange={change}>
  <option value="al">Choose a Filter</option>
  <option value="health">Health</option>
  <option value="armor">Armor</option>
  <option value="damage">Damage</option>
</select>
<ul>
    {filtered.map((b)=>(
        <li key={b.id} >
           <Link to={`/bots/${b.id}`} >
        <img src={b.avatar_url} alt={b.name}/>
        </Link>
        {sorted}:{b[sorted]}
                </li>
    ))}
</ul>

        </>
    )
}