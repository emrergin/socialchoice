
import {permutator, pairs, pairsString, setDifference,checkIfLastAddedPairBreaksTransitivity} from './social_tools';

function prepareInput(inputArray){
	return inputArray.map(a=>a.split(`,`));	 
}

function kemenyRule(ranks){
	ranks=prepareInput(ranks);
	let uzakliklar=[];
	const butunRanklar=permutator(ranks[0]);

	for (let ruler of butunRanklar){
		let pairs1=pairsString(ruler);
		let singleDistance=0;
		for (let voter of ranks){
			let pairs2=pairsString(voter);
			singleDistance+=setDifference(pairs1,pairs2);
		}
		uzakliklar.push({ruler:ruler,uzaklik:singleDistance});
	}
	
	let minimumUzaklik=Math.min(...uzakliklar.map(a=>a.uzaklik));
	return(uzakliklar.filter(a=>a.uzaklik===minimumUzaklik).map(a=>a.ruler));
}

function tournament(ranks,readytoCalculate=true,returnScores=false){
	readytoCalculate? ``: ranks=prepareInput(ranks);
	let butunCiftler = pairs(ranks[0]);
	let ciftlerVeSkorlar={};
	for (let cift of butunCiftler){
		let zaferSayisi=0;
		for (let voter of ranks){
			if (voter.indexOf(cift[0])<voter.indexOf(cift[1])){
				zaferSayisi++;
			}
			else{
				zaferSayisi--;
			}
		}
		if (zaferSayisi<0){
			cift=cift.reverse();
		}
		ciftlerVeSkorlar[cift]=Math.abs(zaferSayisi);					
	}
	if (returnScores){
		return ciftlerVeSkorlar;
	}
	else{
		return (Object.getOwnPropertyNames(ciftlerVeSkorlar).filter(a=>ciftlerVeSkorlar[a]!==0).map(a=>a.split(`,`)))
	}
}

function slaterRule(ranks){
	ranks=prepareInput(ranks);	
	let tur= tournament(ranks).map(a=>`${a}`);

	const butunRanklar=permutator(ranks[0]);
	let uzakliklar=[];
	
	for (let ruler of butunRanklar){
		let pairs1=pairsString(ruler);
		let uzaklik=setDifference(pairs1,tur);
		uzakliklar.push({ruler:ruler,uzaklik:uzaklik});		
	}
	
	let minimumUzaklik=Math.min(...uzakliklar.map(a=>a.uzaklik));
	return(uzakliklar.filter(a=>a.uzaklik===minimumUzaklik).map(a=>a.ruler));
}

function tidemanRule(ranks){
	ranks=prepareInput(ranks);
	let ciftlerVeSkorlar = tournament(ranks,true,true);

	let allPairs = Object.getOwnPropertyNames(ciftlerVeSkorlar);
	let allPairsOfPairs = pairs(allPairs);
	console.log(ciftlerVeSkorlar);
	let allPermutationsOfRanks=permutator(allPairs);

	let probablePermutations=[];

	loop1: for (let order of allPermutationsOfRanks){
		for (let pairOfPair of allPairsOfPairs){
			const i1=order.indexOf(pairOfPair[0]);
			const i2=order.indexOf(pairOfPair[1]);
			const skor1=ciftlerVeSkorlar[pairOfPair[0]];
			const skor2=ciftlerVeSkorlar[pairOfPair[1]];
					
			if ((((i1>i2)&&(skor1>skor2))||((i1<i2)&&(skor1<skor2)))){
				continue loop1;
			}	
		}
			
		probablePermutations.push(order);		
	}

	let allListsOfPairs=[];

	for (let probablePermutation of probablePermutations){
		let result=[];
		for (let pair of probablePermutation){
			pair=pair.split(`,`);
			if (!checkIfLastAddedPairBreaksTransitivity(result,pair)){
				result.push(pair);
			}
			else{
				result.push(pair.reverse());
			}
		}
		allListsOfPairs.push(result)
	}

	let adaylar=[];
	const butunRanklar=permutator(ranks[0]);

	loop1: for (let ruler of butunRanklar){
		for (let pairsFound of allListsOfPairs){					
			if (pairs(ruler).sort().join(`,`)===pairsFound.sort().join(`,`)){
				adaylar.push(ruler);
				continue loop1;
			}			
		}				
	}
	return(adaylar);	
}

function schulzeRule(ranks){
	let numberOfVoters=ranks.length;
	ranks=prepareInput(ranks);
	let ciftlerVeSkorlar = tournament(ranks,true,true);
	let directPaths={};
	for (let pairOfPair in ciftlerVeSkorlar){
		let margin=ciftlerVeSkorlar[pairOfPair];
		let lesserVotes=(numberOfVoters-margin)/2;
		let greaterVotes=lesserVotes+margin;
		directPaths[`${pairOfPair.split(`,`)}`]=greaterVotes;
		directPaths[`${pairOfPair.split(`,`).reverse()}`]=lesserVotes;
	}
	
	let pathsObject={};
	for (let alternative1 of ranks[0]){
		for (let alternative2 of ranks[0]){
			if (alternative1!==alternative2){
				if (directPaths[`${alternative1},${alternative2}`]>directPaths[`${alternative2},${alternative1}`]){
					pathsObject[`${alternative1},${alternative2}`]=directPaths[`${alternative1},${alternative2}`];
				}
				else{
					pathsObject[`${alternative1},${alternative2}`]=0;
				}
			}
		}
	}

	for (let alternative1 of ranks[0]){
		for (let alternative2 of ranks[0]){
			if (alternative1!==alternative2){
				for (let alternative3 of ranks[0]){
					if (alternative1!==alternative3 && alternative2!==alternative3){
						pathsObject[`${alternative2},${alternative3}`]=
						Math.max(pathsObject[`${alternative2},${alternative3}`],
							Math.min(pathsObject[`${alternative2},${alternative1}`],
								pathsObject[`${alternative1},${alternative3}`]
							)
							)
					}
				}
			}
		}
	}

	let pathWins=[];
	for (let pair in pathsObject){
		if (pathsObject[pair]>pathsObject[`${pair.split(`,`).reverse()}`]){
			pathWins.push(pair);
		}
	}

	let adaylar=[];
	const butunRanklar=permutator(ranks[0]);

	loop1: for (let ruler of butunRanklar){
		for (let pairsFound of pathWins){	
			let sepPairs=pairsFound.split(`,`);		
			if (ruler.indexOf(sepPairs[0])>ruler.indexOf(sepPairs[1])){
				continue loop1;
			}			
		}		
		adaylar.push(ruler);		
	}
	return(adaylar);
}

function dodgsonSkorumsu(ranks,onlyFirst=false){
	//named as such since does not return the accurate score for the last alternative(s).
	let deepness=0;
	let queue=[ranks];
	let queue2=[];
	let output={};
	let alreadyChecked=[convertProfileToString(ranks)];
	let m=ranks[0].length;
	let n=ranks.length;
	let limit= onlyFirst? 1:m-1;

	loop1: while(Object.keys(output).length<m){
		if (queue.length>1000){
			return (`ComplexityError`);
		}

		for (let profile of queue){
			if (condorcetWinner(profile)){
				if (!(condorcetWinner(profile) in output))
				{
					output[condorcetWinner(profile)]=deepness;
				}
			}
			if (Object.keys(output).length>=m){
				break loop1;
			}
		}

		deepness++;
		queue2=[];

		if (Object.keys(output).length=== limit){
			for (let j = 0; j < m; j++) {
				if (!(ranks[0][j] in output))
				{
					output[ranks[0][j]]=deepness;
				}
			}
			break loop1;
		}		

		for (let pro of queue){				
			let yakindakiler = swapFinder(pro);
			for (let eachSwap of yakindakiler){
				let deneme=eachSwap.map(a=>a.join(`,`));
				deneme=deneme.sort().toString();
				if (!(alreadyChecked.includes(deneme))){
					queue2.push(eachSwap);
					alreadyChecked.push(convertProfileToString(eachSwap));
				}
			}
		}
		queue=queue2;
	}

	for (let key in output) {
		output[key] *= -1;
	}

	return output;

	function condorcetWinner(ranks){
		let result = tournament(ranks).map(a=>a[0]).reduce(function (acc, curr) {
			return acc[curr] ? ++acc[curr] : acc[curr] = 1, acc
		  }, {});
		result = Object.entries(result).filter(a=>a[1]===ranks[0].length-1);		
		if (result.length) {return(result[0][0]);}
		else{return null;}	
	}
	function swapFinder(voters){
		let result=[];
		for (let i = 0; i < n; i++) {
			for (let j = 0; j < m-1; j++) {
				let swappedProfile = structuredClone(voters);
				let newVoter=structuredClone(voters[i]);
				newVoter[j]=voters[i][j+1];
				newVoter[j+1]=voters[i][j];
				swappedProfile[i]=newVoter;
				result.push(swappedProfile);
			}
		}	
		return result;
	}

	function convertProfileToString(voters){
		let kayit=voters.map(a=>a.join(`,`));
		kayit=kayit.sort().toString();
		return kayit;
	}
}

function copelandSkor(ranks){
	let result = tournament(ranks).map(a=>a[0]).reduce(function (acc, curr) {
		return acc[curr] ? ++acc[curr] : acc[curr] = 1, acc
	  }, {});

	for (let eleman of ranks[0]){
		if(!result.hasOwnProperty(eleman)){
			result[eleman]=0;
		}
	}

	return result;
}

function bordaSkor(ranks){
	let uzunluk=ranks[0].length;
	let nObj={};
	
	for (let eleman of ranks[0]){
		let skor=0;
		for (let voter of ranks){
			skor+=uzunluk-voter.indexOf(eleman);
		}
		nObj[eleman]=skor;
	}
	return nObj;
}

function minMaxSkor(ranks){
	let nObj={};
	
	for (let eleman1 of ranks[0]){
		let skor=0;
		for (let eleman2 of ranks[0]){
			let zaferSayisi=0;
			for (let voter of ranks){
				if (voter.indexOf(eleman2)<voter.indexOf(eleman1)){
					zaferSayisi++;
				}
			}
			if (zaferSayisi>skor){skor=zaferSayisi;}
		}
		nObj[eleman1]=-skor;
	}

	return nObj;
}


function skorWRule(ranks,fonksiyon){
	ranks=prepareInput(ranks);	
	const nObj=fonksiyon(ranks);
	if (typeof nObj === "string")	{
		return [nObj];
	}

	let adaylar=[];
	const butunRanklar=permutator(ranks[0]);
	const butunCiftler = pairs(ranks[0]);
	loop1: for (let ruler of butunRanklar){
		for (let cift of butunCiftler){
			const i1=ruler.indexOf(cift[0]);
			const i2=ruler.indexOf(cift[1]);
			const skor1=nObj[cift[0]];
			const skor2=nObj[cift[1]];			
			if (((i1>i2)&&(skor1>skor2))||((i1<i2)&&(skor1<skor2))){
				continue loop1;
			}			
		}
		adaylar.push(ruler);		
	}

	return(adaylar);
}

function skorCRule(ranks,fonksiyon){
	ranks=prepareInput(ranks);	
	const nObj=fonksiyon(ranks);
	if (typeof nObj === "string")	{
		return [nObj];
	}
	let adaylar=[];

	let arr = Object.values(nObj);
	let max = Math.max(...arr);

	Object.keys(nObj).forEach(key => {
		if (nObj[key]===max){
			adaylar.push(key);
		}
	})
	return adaylar;
}


export {kemenyRule, bordaSkor,minMaxSkor, dodgsonSkorumsu, skorWRule, skorCRule
	,slaterRule ,tidemanRule , schulzeRule, copelandSkor ,tournament};