<script>
  import Input from './lib/Input.svelte'
  import Footer from './lib/Footer.svelte'

  let isTurkish=navigator.language===`tr-TR`;
</script>

<div id="everything" class="min-h-screen min-w-screen bg-gradient-to-tr from-teal-50 to-zinc-200">
  <main class="grid-component font-sans"> 

    <Input isTurkish />
    <Footer isTurkish />
  
  </main>
</div>