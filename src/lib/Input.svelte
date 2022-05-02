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
    $: {adaylar=voters[0].split(`,`).sort();
        if (adaylar[0]===``){adaylar.shift();}
    }
    

    function auto_grow(element) {
        element.scrollTop = element.scrollHeight;
        element.style.height = "5px";
        element.style.height = (element.scrollHeight)+"px";       
    }

    function adayDugme(){
        if (voters[voters.length-1]===``){
            voters[voters.length-1]=event.target.textContent;
        }
        else{
            let geriyeKalanSayisi=voters[0].split(`,`).length-voters[voters.length-1].split(`,`).length;
            if(geriyeKalanSayisi===0){
                voters=[...voters, event.target.textContent];
            }
            else{
                voters[voters.length-1]+=`,${event.target.textContent}`
                if (geriyeKalanSayisi===1){           
                    voters=[...voters,``];
                }
            }  
        }       
        isAlreadyIncluded(voters);
        auto_grow(document.getElementById(`votesInput`));
    }

    function checkValidity(inputElement){
        valid=isPermutationArray(inputElement.value.
            replace(/  +/ig, ' ')
            .replace(/(\t| )*,(\t| )*/ig, ',')
            .split("\n")
            .map(a=>a.trim()));
    }

    function isAlreadyIncluded(allInput){
        let kucukler=document.querySelectorAll(".kucukDugme");
        kucukler.forEach((kucuk) => {
            if (allInput[allInput.length-1].includes(kucuk.textContent)){
                kucuk.disabled=true;
            }
            else{
                kucuk.disabled=false;
            }
        });
    }
</script>
<div id="input" class="flex flex-col justify-center items-center px-4 gap-4">
<p class="text-center">Please enter ranked votes for each alternative, separated by comma.</p>
<p class="text-center">Each row must include the same alternatives.</p>
<textarea value={ornek} id="votesInput"
    class="{valid ? 'border-2 border-blue-800' : 'border-4 border-red-500'} 
    resize-none justify-self-center w-96"   
    
    on:input={event=> {
        checkValidity(event.target);
        if (valid){
            // https://stackoverflow.com/questions/39704104/remove-white-spaces-from-string-between-comma-and-any-letter
            let deger=event.target.value.replace(/  +/ig, ' ').replace(/(\t| )*,(\t| )*/ig, ',').split(`\n`).map(a=>a.trim());
            voters=deger;            
        }
        auto_grow(event.target);
        isAlreadyIncluded(voters);
    }} />
</div>
<div id="output" class="flex flex-col justify-center items-center px-4 gap-4">
    <p><b>Candidates</b>: 
        {#if (voters.length>1 || (ornek.endsWith(`\n`))) }
            {#each adaylar as aday}
                <button class="kucukDugme btn-orange disabled:invisible px-1 py-1" 
                on:click={adayDugme}
                >{aday}</button>
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