
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
		if(zaferSayisi!==0){
			ciftlerVeSkorlar[cift]=Math.abs(zaferSayisi);					
		}
	}
	// console.log(ciftlerVeSkorlar);
	if (returnScores){
		return ciftlerVeSkorlar;
	}
	else{
		// return Object.getOwnPropertyNames(ciftlerVeSkorlar).map(a=>a.split(`,`));
		return (Object.getOwnPropertyNames(ciftlerVeSkorlar).map(a=>a.split(`,`)))
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
	let allPairsOfPairs=pairs(allPairs);
	let allPermutationsOfRanks=permutator(allPairs);

	let probablePermutations=[];

	loop1: for (let order of allPermutationsOfRanks){
		for (let pairOfPair of allPairsOfPairs){
			const i1=order.indexOf(pairOfPair[0]);
			const i2=order.indexOf(pairOfPair[1]);
			const skor1=ciftlerVeSkorlar[pairOfPair[0]];
			const skor2=ciftlerVeSkorlar[pairOfPair[1]];
					
			if (((i1>i2)&&(skor1>skor2))||((i1<i2)&&(skor1<skor2))){
				continue loop1;
			}			
		}
		probablePermutations.push(order);		
	}

	let allListsOfPairs=[];

	for (let probablePermutation of probablePermutations){
		console.log(probablePermutation);
		let result=[];
		for (let pair of probablePermutation){
			pair=pair.split(`,`);
			console.log(result)
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
	// ranks=prepareInput(ranks);
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
	// console.log(nObj);
}


function skorWRule(ranks,fonksiyon){
	ranks=prepareInput(ranks);	
	const nObj=fonksiyon(ranks);	

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

export {kemenyRule, bordaSkor,minMaxSkor, skorWRule, skorCRule
	,slaterRule ,tidemanRule ,copelandSkor
,tournament};