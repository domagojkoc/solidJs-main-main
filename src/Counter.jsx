import { createEffect, createSignal } from "solid-js"

export default function Counter (){
    const[count,setCount] = createSignal(0); 
    const doubleCount = () => count() *2;

    createEffect(()=>{

        if (count() % 2 == 0){
            console.log(count() + "je djeljiv s dva");
        }
    });

    setInterval(() => {
        setCount(count() + 1);
    }, 1000);

    return(
        <div>
            Brojač: {count()}
             <br/>
            Dupli brojač: {doubleCount()}
        </div>
    )
}