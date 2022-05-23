<script>
    import { onMount } from 'svelte';

    export let tournamentData= {"A,B":1, "B,C":1};
    let candidates=[];

    let radius=170;
    let centerX=200;
    let centerY=200;
    let headlen=20;

    function draw(candidates) {
        if (document.getElementById(`canvas`)){
            let angle=(2*Math.PI)/candidates.length;
            // let maximumCharacter = candidates.reduce(
            //     function (a, b) {
            //         return a.length > b.length ? a : b;
            //     }
            // ).length;

            let candidateLocations=[];
            for (let i = 0; i < candidates.length; i++) {
                candidateLocations.push({
                    name: candidates[i],
                    loc_x:centerX+ radius * Math.cos(i*angle),
                    loc_y:centerY+ radius * Math.sin(i*angle)
                })
            }        
            var ctx = document.getElementById('canvas').getContext('2d');
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            //Write alternative names.
            ctx.font = `40px sans-serif`;  
            ctx.fillStyle = "#2563eb";
            ctx.textBaseline = 'middle';
            ctx.textAlign="center";     
            for (let i = 0; i < candidates.length; i++) {
                ctx.fillText(candidateLocations[i].name, candidateLocations[i].loc_x, candidateLocations[i].loc_y,50);
            }
            
            ctx.beginPath();
            ctx.strokeStyle=`#ea580c`;
            ctx.lineWidth = 2;
            ctx.font = '24px sans-serif'; 
            for (let data in tournamentData){
                //Draw tournament lines.
                let baslangicNoktasi=data.split(`,`)[0];
                let bitisNoktasi=data.split(`,`)[1];
                let baslangicAlternative = candidateLocations.filter(a=>a.name===baslangicNoktasi)[0];
                let bitisAlternative = candidateLocations.filter(a=>a.name===bitisNoktasi)[0];
                let x1=baslangicAlternative.loc_x;
                let y1=baslangicAlternative.loc_y;
                let x2=bitisAlternative.loc_x;
                let y2=bitisAlternative.loc_y;
                let rot = Math.atan2(y2-y1,x2-x1);

                //Write tournament margins.
                ctx.fillText(tournamentData[data],(x1+2*x2)/3, (y1+2*y2)/3);

                ctx.moveTo(x1, y1);
                ctx.lineTo(x2, y2);
                ctx.stroke();
                //Draw tournament arrows.
                ctx.moveTo(x2, y2);
                ctx.lineTo(x2-headlen*Math.cos(rot-Math.PI/7),y2-headlen*Math.sin(rot-Math.PI/7));            
                //path from the side point of the arrow, to the other side point
                ctx.lineTo(x2-headlen*Math.cos(rot+Math.PI/7),y2-headlen*Math.sin(rot+Math.PI/7));            
                //path from the side point back to the tip of the arrow, and then again to the opposite side point
                ctx.lineTo(x2, y2);
                ctx.lineTo(x2-headlen*Math.cos(rot-Math.PI/7),y2-headlen*Math.sin(rot-Math.PI/7));
                ctx.stroke();
                ctx.fillStyle = "#2563eb";
                ctx.fill();
            }    
        }
                  
    }

    $: {
        candidates=Array.from(new Set([...Object.getOwnPropertyNames(tournamentData).flatMap(a=>a.split(`,`))]));
        draw(candidates);
    }
</script>


<canvas  width="400" height="400" class="bg-orange-50 mb-4 border-2 border-blue-400 rounded" id="canvas">
</canvas>

<!-- <p>{candidates}</p> -->
