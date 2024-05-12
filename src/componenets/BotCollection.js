import { Link } from 'react-router-dom'



export default function Botcollection({bots,enlistBot}){

return(
    <>

    <ul>
    <div className='d-flex justify-content-center flex-wrap ' style={{gap:'1rem'}} >

      {Array.isArray(bots) && bots.map((bot,index)=>(
              <div key={bot.id} className="card" style={{width: '18rem'}}>

            <li 
            
            style={{ float: 'left', marginRight: '10px' }}
            key={index}  > 
             
                        <Link to={`/bots/${bot.id}`} >
                        <img  
                         style={{cursor : "pointer"}}
                         src={bot.avatar_url} alt="Bot Avatar"
                         className='card-img-top' />
                         </Link>
                        <p className='card-text'>{bot.name}</p>
                        <p className='card-text'> {bot.catchphrase}</p>

                        <p className="card-text"> &#128158;{bot.health } &#x1F4A5;{bot.damage} &#128737; {bot.armor}</p>

                        <button onClick={()=>enlistBot(bot)}>Add me to your army</button></li>
                        </div>

            ))}
          
      </div>
    </ul>
    </>
)
}
export function setBots(){}