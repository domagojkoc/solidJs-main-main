export default function Events(){

   function handleEvent1(event){
    console.log (event.client, eventclientY);
   }
    
    return (
        <div>
            <div onMouseMove={handleEvent1}>Test</div>
            <button onClick={()=> {alert ("Gumb je kliknut!")}}>Klikni me</button>
        </div>
    )
}