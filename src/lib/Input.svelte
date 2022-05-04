<script>
    import { onMount } from 'svelte';
    import { kemenyRule,skorWRule,bordaSkor,minMaxSkor, skorCRule
    ,slaterRule, tidemanRule ,copelandSkor ,tournament} from '../modules/fonksiyonlar';
    import { isPermutationArray } from '../modules/social_tools';
    import { fade, fly } from 'svelte/transition';
    import Modal from './Modal.svelte'

    let ornek =``;
    let voters=[``];
    let valid=true;
    let adaylar=``;
    let modal=false;
    let modalMessage=``;

	onMount(()=>{
        voters=
        [
            "Alastair,Brian,Chris",
            "Chris,Brian,Alastair",
            "Chris,Brian,Alastair"
        ];
        
        ornek = voters.join("\n");
        auto_grow(document.getElementById(`votesInput`));
    }
    );


    $: {adaylar=voters[0].split(`,`).sort();
        if (adaylar[0]===``){adaylar.shift();}
    }
  

    function auto_grow(element) {
        element.value=ornek;
        element.focus(); 
        element.style.height = "5px";
        element.style.height = (element.scrollHeight)+10+"px";
        element.scrollTop = element.scrollHeight;    
    }

    function adayDugme(){
        if (voters[voters.length-1]===``){
            voters[voters.length-1]=`${event.target.textContent}`
            ornek = voters.join("\n"); 
            return false;
        }
        let geriyeKalanSayisi=voters[0].split(`,`).length-voters[voters.length-1].split(`,`).length;
        if(geriyeKalanSayisi===0){
            voters=[...voters, event.target.textContent];
        }
        else{
            voters[voters.length-1]+=`,${event.target.textContent}`
        }      
        ornek = voters.join("\n");  
        auto_grow(document.getElementById(`votesInput`));
    }

    function checkValidity(array){
        valid=isPermutationArray(array);
    }

    function callModal(message){
        modalMessage=message;
        modal=true;
    }

    function closeModel(event){
        modal=false;
    }

</script>
{#if modal }
    <Modal message={modalMessage} on:close={closeModel}/>
{/if}
<div id="input" class="flex flex-col justify-center items-center px-4 gap-4">
<p class="text-center">Please enter ranked votes for each alternative, separated by comma.</p>
<p class="text-center">Each row must include the same alternatives.</p>
<textarea value={ornek} id="votesInput"
    class="{valid ? 'border-2 border-blue-800' : 'border-4 border-red-500'} 
    resize-none justify-self-center w-11/12 overflow-auto 
    md:w-96"  
    on:input={event=> {
        let oncekiDeger=voters;
        ornek=event.target.value;
        // https://stackoverflow.com/questions/39704104/remove-white-spaces-from-string-between-comma-and-any-letter
        voters=event.target.value.replace(/  +/ig, ' ').replace(/(\t| )*,(\t| )*/ig, ',').split(`\n`).map(a=>a.trim());
        checkValidity(voters);
        if (!valid){
            voters= oncekiDeger;
        }
        auto_grow(document.getElementById(`votesInput`));
    }}
  />
</div>
<div id="output" class="flex flex-col justify-center items-center px-4 gap-4">
    <p><b>Candidates</b>: 
        {#if (voters.length>1 || (ornek.endsWith(`\n`))) }
            {#each adaylar as aday}
                    <button class="kucukDugme btn-orange px-1 py-1 disabled:invisible" 
                    disabled={voters[voters.length-1].includes(aday)&&
                    voters[0].split(`,`).length!==voters[voters.length-1].split(`,`).length}
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
class="grid-component md:col-start-2 self-start md:row-start-1">
<h3>Social Welfare Rules</h3>
    <button class="btn-orange w-full drop-shadow-md py-4  hover:-translate-y-0.5 active:scale-100 hover:scale-110 hover:drop-shadow-lg  md:w-48" 
    on:click={valid? callModal(kemenyRule(voters)): false}>
        Kemeny
    </button>

    <button class="btn-orange w-full drop-shadow-md py-4  hover:-translate-y-0.5 active:scale-100 hover:scale-110 hover:drop-shadow-lg md:w-48" 
    on:click={valid? callModal(skorWRule(voters,bordaSkor)): false}>
        Borda
    </button>

    <button class="btn-orange w-full drop-shadow-md py-4  hover:-translate-y-0.5 active:scale-100 hover:scale-110 hover:drop-shadow-lg md:w-48" 
    on:click={valid? callModal(skorWRule(voters,minMaxSkor)): false}>
        Min-Max
    </button>

    <button class="btn-orange w-full drop-shadow-md py-4  hover:-translate-y-0.5 active:scale-100 hover:scale-110 hover:drop-shadow-lg md:w-48" 
    on:click={valid?  callModal(slaterRule(voters)): false}>
        Slater
    </button>

    <button class="btn-orange w-full drop-shadow-md py-4  hover:-translate-y-0.5 active:scale-100 hover:scale-110 hover:drop-shadow-lg md:w-48" 
    on:click={valid?  callModal(skorWRule(voters,copelandSkor)): false}>
        Copeland
    </button>

    <button class="btn-orange w-full drop-shadow-md py-4  hover:-translate-y-0.5 active:scale-100 hover:scale-110 hover:drop-shadow-lg md:w-48" 
    on:click={valid?  callModal(tidemanRule(voters)): false}>
        Tideman
    </button>

    <h3>Social Choice Rules</h3>

    <button class="btn-orange w-full drop-shadow-md py-4  hover:-translate-y-0.5 active:scale-100 hover:scale-110 hover:drop-shadow-lg md:w-48" 
    on:click={valid? callModal(skorCRule(voters,bordaSkor)): false}>
        Borda
    </button>

    <button class="btn-orange w-full drop-shadow-md py-4  hover:-translate-y-0.5 active:scale-100 hover:scale-110 hover:drop-shadow-lg md:w-48" 
    on:click={valid? callModal(skorCRule(voters,minMaxSkor)): false}>
        Min-Max
    </button>

    <button class="btn-orange w-full drop-shadow-md py-4  hover:-translate-y-0.5 active:scale-100 hover:scale-110 hover:drop-shadow-lg md:w-48" 
    on:click={valid?  callModal(skorCRule(voters,copelandSkor)): false}>
        Copeland
    </button>



    <!-- <button on:click={tournament(voters,false)}>
        Tournament
    </button> -->



</div>