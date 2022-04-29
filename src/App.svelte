<script>
  import Input from './lib/Input.svelte'
  import Footer from './lib/Footer.svelte'
</script>

<main> 

  <Input />
  <Footer />

</main>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  main {
    text-align: center;
    padding: 1em;
    margin: 0 auto;
    display: grid;
    align-items: start;
    /* grid: 1fr 1fr / 1fr 1fr / 1fr 1fr ; */
    grid-template-areas: 
    "input r1"
    "output r1";
    /* row-gap:2vmin; */
    height:94vh;

  }
  :global(body){
    border:0px;
    margin:0px;
  }

  @media(max-width: 800px) {
  main {
    grid-template-areas: 
    "input"
    "output"
    "r1"
    "r1";
    padding:0px 0px 50px 0px;
    width:100vw;
    align-items:center;
    height:auto;
    margin:0;
  }
}

</style>