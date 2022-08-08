
import {permutator, pairs, pairsString, setDifference,checkIfLastAddedPairBreaksTransitivity} from './social_tools';

function prepareInput(inputArray){
	return inputArray.map(a=>a.split(`,`));	 
}

function kemenyRule(ranks){
	ranks=prepareInput(ranks);
	let distances=[];
	const allRanks=permutator(ranks[0]);

	for (let ruler of allRanks){
		let pairs1=pairsString(ruler);
		let singleDistance=0;
		for (let voter of ranks){
			let pairs2=pairsString(voter);
			singleDistance+=setDifference(pairs1,pairs2);
		}
		distances.push({ruler:ruler,uzaklik:singleDistance});
	}
	
	let minimumUzaklik=Math.min(...distances.map(a=>a.uzaklik));
	return(distances.filter(a=>a.uzaklik===minimumUzaklik).map(a=>a.ruler));
}

function tournament(ranks,readytoCalculate=true,returnScores=false){
	readytoCalculate? ``: ranks=prepareInput(ranks);
	let allPairs = pairs(ranks[0]);
	let pairsAndScores={};
	for (let pair of allPairs){
		let numberOfWins=0;
		for (let voter of ranks){
			if (voter.indexOf(pair[0])<voter.indexOf(pair[1])){
				numberOfWins++;
			}
			else{
				numberOfWins--;
			}
		}
		if (numberOfWins<0){
			pair=pair.reverse();
		}
		pairsAndScores[pair]=Math.abs(numberOfWins);					
	}
	if (returnScores){
		return pairsAndScores;
	}
	else{
		return (Object.getOwnPropertyNames(pairsAndScores).filter(a=>pairsAndScores[a]!==0).map(a=>a.split(`,`)))
	}
}

function slaterRule(ranks){
	ranks=prepareInput(ranks);	
	let tur= tournament(ranks).map(a=>`${a}`);

	const allRanks=permutator(ranks[0]);
	let distances=[];
	
	for (let ruler of allRanks){
		let pairs1=pairsString(ruler);
		let distance=setDifference(pairs1,tur);
		distances.push({ruler,distance});		
	}
	
	let minimumDistance=Math.min(...distances.map(a=>a.distance));
	return(distances.filter(a=>a.distance===minimumDistance).map(a=>a.ruler));
}

function tidemanRule(ranks){
	ranks=prepareInput(ranks);
	let pairsAndScores = tournament(ranks,true,true);

	let allPairs = Object.getOwnPropertyNames(pairsAndScores);
	let allPairsOfPairs = pairs(allPairs);
	console.log(pairsAndScores);
	let allPermutationsOfRanks=permutator(allPairs);

	let probablePermutations=[];

	loop1: for (let order of allPermutationsOfRanks){
		for (let pairOfPair of allPairsOfPairs){
			const i1=order.indexOf(pairOfPair[0]);
			const i2=order.indexOf(pairOfPair[1]);
			const score1=pairsAndScores[pairOfPair[0]];
			const score2=pairsAndScores[pairOfPair[1]];
					
			if ((((i1>i2)&&(score1>score2))||((i1<i2)&&(score1<score2)))){
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

	let candidates=[];
	const allRanks=permutator(ranks[0]);

	loop1: for (let ruler of allRanks){
		for (let pairsFound of allListsOfPairs){					
			if (pairs(ruler).sort().join(`,`)===pairsFound.sort().join(`,`)){
				candidates.push(ruler);
				continue loop1;
			}			
		}				
	}
	return(candidates);	
}

function schulzeRule(ranks){
	let numberOfVoters=ranks.length;
	ranks=prepareInput(ranks);
	let pairsAndScores = tournament(ranks,true,true);
	let directPaths={};
	for (let pairOfPair in pairsAndScores){
		let margin=pairsAndScores[pairOfPair];
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

	let candidates=[];
	const allRanks=permutator(ranks[0]);

	loop1: for (let ruler of allRanks){
		for (let pairsFound of pathWins){	
			let sepPairs=pairsFound.split(`,`);		
			if (ruler.indexOf(sepPairs[0])>ruler.indexOf(sepPairs[1])){
				continue loop1;
			}			
		}		
		candidates.push(ruler);		
	}
	return(candidates);
}

let condorcetCache=new Map([]);

function dodgsonScoreLike(ranks,onlyFirst=false){
	//named as such since does not return the accurate score for the last alternative(s).
	let deepness=0;
	let queue=[ranks];
	let queue2=[];
	let output={};
	let alreadyChecked=new Set([convertProfileToString(ranks)]);
	
	let m=ranks[0].length;
	let n=ranks.length;
	let limit= onlyFirst? 1:m-1;

	loop1: while(Object.keys(output).length<m){
		if (queue.length>1500){
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
			let adjacentProfile = swapFinder(pro);
			for (let eachSwap of adjacentProfile){
				let trial=eachSwap.map(a=>a.join(`,`));
				trial=trial.sort().toString();
				if (!(alreadyChecked.has(trial))){
					queue2.push(eachSwap);
					alreadyChecked.add(convertProfileToString(eachSwap));
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
		if (condorcetCache[convertProfileToString(ranks)]!==undefined){
			return condorcetCache[convertProfileToString(ranks)];
		}
		let result = tournament(ranks).map(a=>a[0]).reduce(function (acc, curr) {
			return acc[curr] ? ++acc[curr] : acc[curr] = 1, acc
		  }, {});
		result = Object.entries(result).filter(a=>a[1]===ranks[0].length-1);		
		if (result.length) {
			condorcetCache[convertProfileToString(ranks)]=result[0][0];
			return(result[0][0]);
		}
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
		let record=voters.map(a=>a.join(`,`));
		record=record.sort().toString();
		return record;
	}
}

function copelandScore(ranks){
	let result = tournament(ranks).map(a=>a[0]).reduce(function (acc, curr) {
		return acc[curr] ? ++acc[curr] : acc[curr] = 1, acc
	  }, {});

	for (let alternative of ranks[0]){
		if(!result.hasOwnProperty(alternative)){
			result[alternative]=0;
		}
	}

	return result;
}

function bordaScore(ranks){
	let length=ranks[0].length;
	let nObj={};
	
	for (let alternative of ranks[0]){
		let score=0;
		for (let voter of ranks){
			score+=length-voter.indexOf(alternative);
		}
		nObj[alternative]=score;
	}
	return nObj;
}

function minMaxScore(ranks){
	let nObj={};
	
	for (let alternative1 of ranks[0]){
		let score=0;
		for (let alternative2 of ranks[0]){
			let numberOfWins=0;
			for (let voter of ranks){
				if (voter.indexOf(alternative2)<voter.indexOf(alternative1)){
					numberOfWins++;
				}
			}
			if (numberOfWins>score){score=numberOfWins;}
		}
		nObj[alternative1]=-score;
	}

	return nObj;
}


function scoreWRule(ranks,functionToUse){
	ranks=prepareInput(ranks);	
	const nObj=functionToUse(ranks);
	if (typeof nObj === "string")	{
		return [nObj];
	}

	let candidates=[];
	const allRanks=permutator(ranks[0]);
	const allPairs = pairs(ranks[0]);
	loop1: for (let ruler of allRanks){
		for (let pair of allPairs){
			const i1=ruler.indexOf(pair[0]);
			const i2=ruler.indexOf(pair[1]);
			const score1=nObj[pair[0]];
			const score2=nObj[pair[1]];			
			if (((i1>i2)&&(score1>score2))||((i1<i2)&&(score1<score2))){
				continue loop1;
			}			
		}
		candidates.push(ruler);		
	}

	return(candidates);
}

function scoreCRule(ranks,functionToUse){
	ranks=prepareInput(ranks);	
	const nObj=functionToUse(ranks);
	if (typeof nObj === "string")	{
		return [nObj];
	}
	let candidates=[];

	let arr = Object.values(nObj);
	let max = Math.max(...arr);

	Object.keys(nObj).forEach(key => {
		if (nObj[key]===max){
			candidates.push(key);
		}
	})
	return candidates;
}


export {kemenyRule, bordaScore,minMaxScore, dodgsonScoreLike, scoreWRule, scoreCRule
	,slaterRule ,tidemanRule , schulzeRule, copelandScore ,tournament};