import { createSignal, Match, Switch } from "solid-js";

export default function Menu() {
    const [x, setX] = createSignal(7);

    return (
        < Switch >
            <Match when={x() > 10}>
                <p> X je veći od 10</p>
            </Match>
            <Match when={x() < 5}>
                <p> X je manji od 5</p>
            </Match>
        </Switch >
    );

}