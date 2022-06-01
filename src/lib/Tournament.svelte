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

            ctx.globalCompositeOperation = 'destination-over';         

            let candidatePoints={locations:candidateLocations, context:ctx,pointPercentage:0,pointPercentage2:0}
            drawPoints(candidatePoints);                     
        }                  
    }

    function drawPoints(points){

        points.context.clearRect(0, 0, canvas.width, canvas.height); 
        points.context.font = `40px sans-serif`;  
        
        points.context.textBaseline = 'middle';
        points.context.textAlign="center";    

        for (let i = 0; i < points.pointPercentage/20; i++) {
            points.context.fillStyle = `rgba(37, 99, 235,${(points.pointPercentage-(i*20))/(i+1)})`;
            points.context.fillText(points.locations[i].name, points.locations[i].loc_x, points.locations[i].loc_y,50);
        }
        if (points.pointPercentage<points.locations.length*20){
            requestAnimationFrame(function () {
                drawPoints(points);
                    });
            points.pointPercentage++;
        }
        else{
            drawArrows(points);
            // console.log(points.pointPercentage,points.pointPercentage2);
        }
    }

    function drawArrows(points){

        points.context.lineWidth = 2;
        points.context.font = '24px sans-serif'; 
        for (let data in tournamentData){

            let baslangicNoktasi=data.split(`,`)[0];
            let bitisNoktasi=data.split(`,`)[1];
            let baslangicAlternative = points.locations.filter(a=>a.name===baslangicNoktasi)[0];
            let bitisAlternative = points.locations.filter(a=>a.name===bitisNoktasi)[0];
            let x1=0;
            try{
                x1=baslangicAlternative.loc_x;
            }
            catch{
                console.log(data);
            }
            let y1=baslangicAlternative.loc_y;            
            let x2=(bitisAlternative.loc_x*points.pointPercentage2/100)+x1*(1-points.pointPercentage2/100);
            let y2=(bitisAlternative.loc_y*points.pointPercentage2/100)+y1*(1-points.pointPercentage2/100);
            let rot = Math.atan2(y2-y1,x2-x1);            
            
            //Write tournament margins.
            points.context.fillStyle = `rgba(37, 99, 235,${tournamentData[data]/Math.max(...Object.values(tournamentData))})`;
            points.context.fillText(tournamentData[data],(3*x1+2*x2)/5, (2*y1+3*y2)/5);

            //Draw tournament lines.            
            points.context.beginPath();
            points.context.moveTo(x1, y1);
            points.context.lineTo(x2, y2);
            points.context.strokeStyle=`rgba(234, 88, 12,${tournamentData[data]/Math.max(...Object.values(tournamentData))})`;
            points.context.stroke();
            //Draw tournament arrows.
            points.context.moveTo(x2, y2);
            points.context.lineTo(x2-headlen*Math.cos(rot-Math.PI/7),y2-headlen*Math.sin(rot-Math.PI/7));            
            //path from the side point of the arrow, to the other side point
            points.context.lineTo(x2-headlen*Math.cos(rot+Math.PI/7),y2-headlen*Math.sin(rot+Math.PI/7));            
            //path from the side point back to the tip of the arrow, and then again to the opposite side point
            points.context.lineTo(x2, y2);
            points.context.lineTo(x2-headlen*Math.cos(rot-Math.PI/7),y2-headlen*Math.sin(rot-Math.PI/7));
            points.context.closePath();
            points.context.stroke();
            points.context.fillStyle = "#93c5fd";
            points.context.fill();
        }   
        if (points.pointPercentage2<95){
            requestAnimationFrame(function () {
                drawPoints(points);
                });
                points.pointPercentage2++;
        }
    }

    $: {
        candidates=Array.from(new Set([...Object.getOwnPropertyNames(tournamentData).flatMap(a=>a.split(`,`))]));
        draw(candidates);
    }
</script>


<canvas  width="400" height="400" class="bg-orange-50 mb-4 border-2 border-blue-400 rounded w-11/12 md:w-96" id="canvas">
</canvas>
