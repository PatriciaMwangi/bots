import { Link } from 'react-router-dom'



export default function Botcollection({bots,enlistBot}){

return(
    <>
  
    <ul>
      {Array.isArray(bots) && bots.map((bot,index)=>(
            <li 
            
            style={{ float: 'left', marginRight: '10px' }}
            key={index}  > 
             
                        <Link to={`/bots/${bot.id}`} >
                        <img  
                         style={{cursor : "pointer"}}
                         src={bot.avatar_url} alt="Bot Avatar" />
                         </Link>
                        <p>Created At: {bot.created_at}</p>
                        <p>Updated At: {bot.updated_at}</p>
                        <button onClick={()=>enlistBot(bot)}>Add me to your army</button></li>
            ))}
      
    </ul>
    </>
)
}
export function setBots(){}