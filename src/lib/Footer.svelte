<footer>
    {#if !isTurkish }
    <span>
        Made with &#129504; by <a href="https://emrergin.github.io/personalpage/" target="_blank">Emre Ergin</a>, 
    using <a href="https://svelte.dev/" target="_blank">Svelte</a> and <a href="https://tailwindcss.com/" target="_blank">Tailwind CSS</a>.
    </span>
    {:else}
    <span>
        <a href="https://emrergin.github.io/personalpage/" target="_blank">Emre Ergin</a> tarafından, &#129504; gücüyle , 
    <a href="https://svelte.dev/" target="_blank">Svelte</a> ve <a href="https://tailwindcss.com/" target="_blank">Tailwind CSS</a> 
    kullanılarak yapılmıştır.
    </span>
    {/if}
</footer>

<script>

export let isTurkish= false;
</script>