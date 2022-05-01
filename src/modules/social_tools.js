let pairs = (arr) => {
  return arr.map( (v, i) => arr.slice(i + 1).map(w => [v, w]) ).flat();
} 

let pairsString = (arr) => {
  return arr.map( (v, i) => arr.slice(i + 1).map(w => `${v},${w}`) ).flat();
} 

const permutator = (inputArr) => {
  let result = [];

  const permute = (arr, m = []) => {
    if (arr.length === 0) {
      result.push(m)
    } else {
      for (let i = 0; i < arr.length; i++) {
        let curr = arr.slice();
        let next = curr.splice(i, 1);
        permute(curr.slice(), m.concat(next))
      }
    }
  }

  permute(inputArr);

  return result;
}

function isPermutation(s1, s2) {

  if(s1.length !== s2.length) {
    return false;
  }

  // console.log(s1.split("").sort().toString(),s2.split("").sort().toString())
  return s1.split("").sort().toString() === s2.split("").sort().toString();
}

function isPermutationArray(inputArray){
  if (inputArray[0].split(`,`).length!== [...new Set(inputArray[0].split(`,`))].length){
    return false;
  }

  for (let i = inputArray.length-1; i > 1; i--) {
    if (!isPermutation(inputArray[0],inputArray[i])){
      return false;
    }
  }
  return true;
}


function setDifference(A, B) {
  let result=[];
  const setA = new Set(A);
  const setB = new Set(B);

  for (const v of setB.values()) {
    if (!setA.delete(v)) {
        result.push(v);
    }
  }

  for (const v of setA.values()) {
    result.push(v);
  }
  return result.length;
}


export { permutator, pairs, pairsString, isPermutationArray, setDifference };
