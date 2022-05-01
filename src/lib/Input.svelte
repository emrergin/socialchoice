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
[
    "Alastair,Brian,Chris",
    "Chris,Brian,Alastair",
    "Chris,Brian,Alastair"
];

    let valid=true;
    let adaylar=``;

    $: ornek=voters.join("\n");
    $: adaylar=voters[0].split(`,`).sort();

    function auto_grow(element) {
        element.style.height = "5px";
        element.style.height = (element.scrollHeight)+"px";
    }

    function adayDugme(){
       document.getElementById(`votesInput`).value+=event.target.textContent;
       auto_grow(document.getElementById(`votesInput`));
       event.target.disabled=true;
    }
</script>
<div id="input" class="flex flex-col justify-center items-center px-4 gap-4">
<p>Please enter ranked votes for each alternative, separated by comma.</p>
<p>Each row must include the same alternatives.</p>
<textarea value={ornek} id="votesInput"
    class="{valid ? 'border-2 border-blue-800' : 'border-4 border-red-500'} 
    resize-none justify-self-center w-96"   
    
    on:input={event=> {
        let gecici=event.target.value.replace(/\s\s+/g, ' ').trim();
        gecici = gecici.replace(/ \,/g, ',');
        gecici = gecici.replace(/\, /g, ',');
        gecici=gecici.split("\n");
        // console.log(gecici);
        if (isPermutationArray(gecici)){
            voters=gecici;
            valid=true;
        }else{
            valid=false;
        }
        auto_grow(event.target);
    }} />
</div>
<div id="output" class="flex flex-col justify-center items-center px-4 gap-4">
    <p><b>Candidates</b>: 
        {#if (voters.length>1 || (ornek.endsWith(`\n`))) }
            {#each adaylar as aday}
                <button class="btn-orange disabled:invisible px-1 py-1" on:click={adayDugme}>
                    {aday}
                </button>
            {/each}
        {:else}
            {adaylar}
        {/if}
    </p>
    <h3 class="hidden md:block"> Votes</h3>
    <ul class="hidden md:block">
        {#each voters as voter}
            <li>{voter.replace(/,/g,` > `)}</li>
        {/each}
    </ul>

</div>    


<div id="sonuclar"
class="grid-component md:col-start-2 md:row-start-1">
<h3>Social Welfare Rules</h3>
    <button class="btn-orange  w-48 drop-shadow-md py-4 " on:click={valid? alert(kemenyRule(voters).join('\r\n')): false}>
        Kemeny
    </button>

    <button class="btn-orange w-48 drop-shadow-md py-4 " on:click={valid? alert(skorWRule(voters,bordaSkor).join('\r\n')): false}>
        Borda
    </button>

    <button class="btn-orange w-48 drop-shadow-md py-4 " on:click={valid? alert(skorWRule(voters,minMaxSkor).join('\r\n')): false}>
        Min-Max
    </button>

    <button class="btn-orange w-48 drop-shadow-md py-4 " on:click={valid?  alert(slaterRule(voters).join('\r\n')): false}>
        Slater
    </button>

    <button class="btn-orange w-48 drop-shadow-md py-4 " on:click={valid?  alert(skorWRule(voters,copelandSkor).join('\r\n')): false}>
        Copeland
    </button>

    <h3>Social Choice Rules</h3>

    <button class="btn-orange w-48 drop-shadow-md py-4" on:click={valid? alert(skorCRule(voters,bordaSkor).join('\r\n')): false}>
        Borda
    </button>

    <button class="btn-orange w-48 drop-shadow-md py-4" on:click={valid? alert(skorCRule(voters,minMaxSkor).join('\r\n')): false}>
        Min-Max
    </button>

    <button class="btn-orange w-48 drop-shadow-md py-4" on:click={valid?  alert(skorCRule(voters,copelandSkor).join('\r\n')): false}>
        Copeland
    </button>

    <!-- <button on:click={valid?  alert(tournament(voters,false).join('\r\n')): false}>
        Tournament
    </button> -->



</div>