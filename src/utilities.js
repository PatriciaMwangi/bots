export  function enlist(id){
    fetch(`http://localhost:3001/bots/${id}`)
    .then((res)=>res.json())}
export function get(){
    fetch("http://localhost:3001/bots")
.then((res)=>res.json())}