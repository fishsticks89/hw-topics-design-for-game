import { browser } from "$app/environment";
import { onDestroy, onMount } from "svelte";

export function flashscreen() {
    if (!browser) return;
    let timeout: number;
    onMount(() => {
        timeout = setInterval(() => {
            // random hsl color
            const color = `hsl(${Math.random() * 360}, 100%, 50%)`;
            [...document.getElementsByClassName("container")].forEach(e => {
                (e as HTMLElement).style.backgroundColor = color;
            });
        }, 50);
    });

    onDestroy(() => {
        clearTimeout(timeout);
    });
}