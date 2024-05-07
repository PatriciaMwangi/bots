import React,{useState,useEffect} from 'react';
import './App.css';
import Botcollection from './componenets/BotCollection';
import YourBotArmy from './componenets/YourBotArmy';
import Sort from './componenets/sortbar';
import Class from './componenets/filterClass'


export function App() {
  const [botss, setBotss] = useState(['']);
  const [army, setArmy] = useState([]);
  console.log(army,'ar')
  const [bots,setBots]=useState([])
console.log(bots,'bu')

const enlistBot = (bot) => {
  setArmy([...army, bot]);
  console.log(bot,'arg')
  setBotss(botss.filter(b => b.id !== bot.id));
};
const releaseBot = (bot) => {
  setArmy(army.filter(b => b.id !== bot.id));
  setBotss([...botss, bot]);
};

  useEffect(
      ()=>{
        fetch("https://json-server-sg8o.onrender.com/bots")
  .then((res)=>res.json())
 
  .then((dta)=>{
    setBots(dta)
   console.log(dta,'d')
  })
 .catch((error)=>console.log(error,'error'))},[])
  
  return (
    <>
    
    <Sort bots={bots}/>
    <Class bots={bots}/>
    <h1>Bot army</h1>
  <YourBotArmy  releaseBot={releaseBot} army={army}/>

   <Botcollection bots={bots} enlistBot={enlistBot} />
   
    </>
    );
}

