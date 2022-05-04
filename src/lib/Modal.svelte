<script>
	export let message= ['A,B,C,D'];

    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    function close() {
		dispatch('close');
	}

    function randomize(){
        message=[message[Math.floor(Math.random()*message.length)]]
    }
</script>

<div class="modal-background">
    <div class="modal-box [max-height: calc(100vh - 4rem)] flex">
        <div class="close-button" on:click={close}></div>
        <!-- {message} -->

        <ul class="w-1/2">
        {#each message as item}
            <li>{item.toString().replace(/,/g,` > `)}</li>
        {/each}
        </ul>

        {#if message.length>1 }
        <div class="text-center mt-4">
            <p>The result is irresolute. Shall we tie break randomly?</p>
            <button class="btn-orange drop-shadow-md py-2 mt-4
            hover:-translate-y-0.5 active:scale-100 hover:scale-110 hover:drop-shadow-lg md:w-48"
            on:click={randomize}
            >Yes</button>
        </div>
        {/if}
    </div>
</div>