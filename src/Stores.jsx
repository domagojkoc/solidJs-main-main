
import {createSignal} from "solid-js";

export default function Stores () {
    const [db1, setDb1] = createSignal ({
        name: "users" , 
        items: [
            {name:"Pero", surname:"Peric", bill:100},
            {name:"Ana", surname:"Anic", bill:150},
            {name:"Ivo", surname:"Ivic", bill:200},
        ]
    });
    function applayTax(){
        for 
    }

    return (
        <>
            <h1>Korisnik</h1>
            <For each={db1().items}>
                {item =>(
                    <div style="margin-bottom: 10px; padding: 10px; border:1px; solid grey;">
                        <div> Ime: {item.name}</div>
                        <div> Prezime: {item.prezime}</div>
                        <div> Račun: {item.bil} EUR</div>
                    </div>
                )}
            </For>
        </>
    )
}
