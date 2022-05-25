<script>
    import { onMount } from 'svelte';
    import { kemenyRule,skorWRule,bordaSkor,minMaxSkor, skorCRule, dodgsonSkorumsu, tournament
    ,slaterRule, tidemanRule , schulzeRule, copelandSkor } from '../modules/fonksiyonlar';
    import { minMaxProfile, slaterProfile, kemenyProfile, copelandProfile,
        tidemanProfile, schulzeProfile,dodgsonProfile } from '../modules/exampleProfiles';
    import { isPermutationArray } from '../modules/social_tools';
    // import { fade, fly } from 'svelte/transition';
    import Modal from './Modal.svelte'
    import Tournament from './Tournament.svelte'

    let ornek =``;
    let voters=[``];
    let valid=true;
    let adaylar=``;
    let modal=false;
    let modalMessage=``;
    let tournamentResult={};

	onMount(()=>{
        voters= 
        // slaterProfile;
        // tidemanProfile;
        [
            "Alastair,Brian,Chris",
            "Chris,Brian,Alastair",
            "Chris,Brian,Alastair",
            "Brian,Alastair,Chris"
        ];
        // schulzeProfile;
        // dodgsonProfile;
        // [
        //     "A,B,C",
        //     "A,B,C"
        // ];
        
        ornek = voters.join("\n");
        auto_grow(document.getElementById(`votesInput`));
        tournamentResult=tournament(voters,false,true);
        // console.log(tournamentResult);
    }
    );


    $: {adaylar=voters[0].split(`,`).sort();
        if (adaylar[0]===``){adaylar.shift();}
        let turRes=tournament(voters,false,true);
        tournamentResult = Object.keys(turRes)
            .filter(key => turRes[key]>0)
            .reduce((obj, key) => {
                obj[key] = turRes[key];
                return obj;
            }, {});
    }
  

    function auto_grow(element) {
        element.value=ornek;
        element.focus(); 
        element.style.height = "5px";
        element.style.height = (element.scrollHeight)+10+"px";
        element.scrollTop = element.scrollHeight;    
    }

    function adayDugme(){
        if (ornek.split(`\n`)[ornek.split(`\n`).length-1].length<ornek.split(`\n`)[ornek.split(`\n`).length-2].length){
            if (ornek.split(`\n`)[ornek.split(`\n`).length-1].length===0){
                ornek+= event.target.textContent;
            }
            else{
                ornek+= `,`+event.target.textContent;
            }
        }
        else{
            ornek+= `\n` +event.target.textContent;
        }

        auto_grow(document.getElementById(`votesInput`));

        let oncekiDeger=voters;
        voters=ornek.replace(/  +/ig, ' ').replace(/(\t| )*,(\t| )*/ig, ',').split(`\n`).map(a=>a.trim());
        checkValidity(voters);
        if (!valid){
            voters= oncekiDeger;
        }
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
    class="{valid ? 'border-8 border-blue-300' : 'border-8 border-red-500'} 
    resize-none justify-self-center w-11/12 overflow-auto box-content rounded-md
    shadow-none outline-none
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
        // console.log(voters);
        auto_grow(document.getElementById(`votesInput`));
    }}
  />
</div>
<div id="output" class="flex flex-col justify-center items-center px-4 gap-4">
    <p><b>Candidates</b>: 
        {#if (ornek.split(`\n`).length>1) }
            {#each adaylar as aday}
                    <button class="kucukDugme btn-orange px-1 py-1 disabled:invisible" 
                    disabled={
                        ornek.split(`\n`)[ornek.split(`\n`).length-1].split(`,`).includes(aday)
                        &&
                        voters[0].split(`,`).length!==                    
                        ornek.split(`\n`)[ornek.split(`\n`).length-1].split(`,`).length
                    }
                    on:click={adayDugme}
                    >{aday}</button>
            {/each}
        {:else}
            {adaylar}
        {/if}
    </p>
    <Tournament tournamentData={tournamentResult}/>
</div>    


<div id="sonuclar"
class="grid-component md:col-start-2 self-start md:row-start-1">
<h3>Social Welfare Rules</h3>
    <button class="btn-orange w-full drop-shadow-md py-4  hover:-translate-y-0.5 active:scale-100 hover:scale-110 hover:drop-shadow-lg md:w-48" 
    on:click={valid? callModal(kemenyRule(voters)): false}>
        Kemeny
    </button>

    <button class="btn-orange w-full drop-shadow-md py-4  hover:-translate-y-0.5 active:scale-100 hover:scale-110 hover:drop-shadow-lg md:w-48" 
    on:click={valid? callModal(skorWRule(voters,bordaSkor)): false}>
        Borda
    </button>

    <button class="btn-orange w-full drop-shadow-md py-4  hover:-translate-y-0.5 active:scale-100 hover:scale-110 hover:drop-shadow-lg md:w-48" 
    on:click={valid? callModal(skorWRule(voters,minMaxSkor)): false}>
        Minmax
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

    <button class="btn-orange w-full drop-shadow-md py-4  hover:-translate-y-0.5 active:scale-100 hover:scale-110 hover:drop-shadow-lg md:w-48" 
    on:click={valid?  callModal(schulzeRule(voters)): false}>
        Schulze
    </button>


    <button class="btn-orange w-full drop-shadow-md py-4  hover:-translate-y-0.5 active:scale-100 hover:scale-110 hover:drop-shadow-lg md:w-48" 
    on:click={valid?  callModal(skorWRule(voters,dodgsonSkorumsu)): false}>
        Dodgson
    </button>

    <h3>Social Choice Rules</h3>

    <button class="btn-orange w-full drop-shadow-md py-4  hover:-translate-y-0.5 active:scale-100 hover:scale-110 hover:drop-shadow-lg md:w-48" 
    on:click={valid? callModal(skorCRule(voters,bordaSkor)): false}>
        Borda
    </button>

    <button class="btn-orange w-full drop-shadow-md py-4  hover:-translate-y-0.5 active:scale-100 hover:scale-110 hover:drop-shadow-lg md:w-48" 
    on:click={valid? callModal(skorCRule(voters,minMaxSkor)): false}>
        Minmax
    </button>

    <button class="btn-orange w-full drop-shadow-md py-4  hover:-translate-y-0.5 active:scale-100 hover:scale-110 hover:drop-shadow-lg md:w-48" 
    on:click={valid?  callModal(skorCRule(voters,copelandSkor)): false}>
        Copeland
    </button>

    <button class="btn-orange w-full drop-shadow-md py-4  hover:-translate-y-0.5 active:scale-100 hover:scale-110 hover:drop-shadow-lg md:w-48" 
    on:click={valid?  callModal(skorCRule(voters,dodgsonSkorumsu,true)): false}>
        Dodgson
    </button>



</div>