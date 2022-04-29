<script>
    import { onMount } from 'svelte';
    import { kemenyRule,skorWRule,bordaSkor,minMaxSkor, skorCRule
    ,slaterRule ,copelandSkor ,tournament} from '../modules/fonksiyonlar';
    import { isPermutationArray } from '../modules/social_tools';

	onMount(()=>{
        auto_grow(document.getElementById(`votesInput`));
    }
    );

    let ornek = ``;
    let voters=
// [
//     "D,A,B,C",
//     "D,A,B,C",
//     "D,A,C,B",
//     "A,D,C,B",
//     "C,A,B,D",
//     "C,A,B,D",
//     "A,B,D,C",
//     "B,C,D,A",
//     "B,C,D,A",
//     "B,C,D,A",
//     "B,C,A,D"
// ];
[
    "Alastair,Brian,Chris",
    "Chris,Brian,Alastair",
    "Chris,Brian,Alastair"
];
// [
//     "A,B,C,D",
//     "A,B,C,D",
//     "A,B,C,D",
//     "D,C,A,B",
//     "D,C,A,B",
//     "A,D,B,C",
//     "A,D,B,C",
//     "C,B,A,D",
//     "C,B,A,D",
//     "B,D,A,C",
//     "B,D,A,C",
//     "C,A,B,D",
//     "C,A,B,D",
//     "D,C,A,B",
//     "D,C,A,B",
//     "B,A,D,C",
//     "B,A,D,C"
// ]
// [
//     "A,B,C,D",
//     "D,C,A,B",
//     "B,C,A,D",
//     "D,A,B,C",
//     "D,A,B,C",
//     "C,B,D,A",
//     "A,C,B,D",
//     "D,B,A,C",
//     "B,D,A,C",
//     "C,A,B,D"
// ];
// [
//     "A,D,B,C",
//     "A,D,B,C",
//     "A,D,B,C",
//     "A,D,C,B",
//     "A,D,C,B",
//     "A,D,C,B",
//     "B,C,A,D",
//     "B,C,A,D",
//     "B,C,A,D",
//     "B,C,A,D",
//     "D,B,C,A",
//     "D,B,C,A",
//     "D,B,C,A",
//     "D,B,C,A",
//     "D,B,C,A",
//     "B,D,A,C",
//     "B,D,A,C",
//     "B,D,A,C",
//     "B,D,A,C",
//     "B,D,A,C",
//     "B,D,A,C",
// ]
    let valid=true;
    let adaylar=``;

    $: ornek=voters.join("\n");
    $: adaylar=voters[0].split(`,`).sort();

    function auto_grow(element) {
        element.style.height = "5px";
        element.style.height = (element.scrollHeight)+"px";
    }
</script>
<div id="input">
<p>Please enter ranked votes for each alternative, separated by comma.</p>
<p>Each row must include the same alternatives.</p>
<textarea value={ornek} id="votesInput"
    class="{valid ? 'valid' : 'invalid'}"
    on:input={event=> {
        let gecici=event.target.value.split("\n");
        if (isPermutationArray(gecici)){
            voters=gecici;
            valid=true;
        }else{
            valid=false;
        }
        auto_grow(event.target);
    }} />
</div>
<div id="output">
    <p><b>Candidates</b>: {adaylar}</p>
    <h3> Votes</h3>
    <ul >
        {#each voters as voter}
            <li>{voter.replace(/,/g,` > `)}</li>
        {/each}
    </ul>
</div>    


<div id="sonuclar">
<h3>Social Welfare Rules</h3>
    <button on:click={valid? alert(kemenyRule(voters).join('\r\n')): false}>
        Kemeny
    </button>

    <button on:click={valid? alert(skorWRule(voters,bordaSkor).join('\r\n')): false}>
        Borda
    </button>

    <button on:click={valid? alert(skorWRule(voters,minMaxSkor).join('\r\n')): false}>
        Min-Max
    </button>

    <button on:click={valid?  alert(slaterRule(voters).join('\r\n')): false}>
        Slater
    </button>

    <button on:click={valid?  alert(skorWRule(voters,copelandSkor).join('\r\n')): false}>
        Copeland
    </button>

    <h3>Social Choice Rules</h3>

    <button on:click={valid? alert(skorCRule(voters,bordaSkor).join('\r\n')): false}>
        Borda
    </button>

    <button on:click={valid? alert(skorCRule(voters,minMaxSkor).join('\r\n')): false}>
        Min-Max
    </button>

    <button on:click={valid?  alert(skorCRule(voters,copelandSkor).join('\r\n')): false}>
        Copeland
    </button>

    <!-- <button on:click={valid?  alert(tournament(voters,false).join('\r\n')): false}>
        Tournament
    </button> -->



</div>
  
<style>
#input{
    grid-area: input;
}
#votesInput{    
    justify-self : center;
    width: min(400px,80vw);
}
#sonuclar{
    grid-area:r1;
    display:grid;
    justify-items: center;
    align-items: center;
    row-gap:3vmin;
    column-gap: 1vmin;
    justify-self: center;
}

#sonuclar>h3{
    grid-column: span 2;
}
#output{
    grid-area:output;
    overflow-y:auto;
    height:100%;
}

.invalid{
    border: 2px solid red;
}

button {
    font-family: inherit;
    font-size: inherit;
    padding: 1em 2em;
    color: #ff3e00;
    background-color: rgba(255, 62, 0, 0.1);
    border-radius: 2em;
    border: 2px solid rgba(255, 62, 0, 0);
    outline: none;
    width: min(200px,40vw);
    font-variant-numeric: tabular-nums;
    cursor: pointer;
  }

  button:hover{
    background-color: rgba(255, 62, 0, 0.3);
    border: 2px solid #ff3e00;
  }

  @media(max-width: 800px) {
  #output {
    display:none;
  }}
</style>
  