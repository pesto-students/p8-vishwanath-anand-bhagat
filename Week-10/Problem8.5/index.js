const findJudge = (n, trust) => {
	const trusted = new Array(n + 1).fill(0);
  
	for (let [i, j] of trust) {
		trusted[i]--;
		trusted[j]++;
	}
  
	for (let i = 1; i < trusted.length; i++) {
		if (n - 1 === trusted[i]) {
			return i;
	  	}
	}
	return -1;
};
  

console.log(findJudge(2, [[1,2]])); // 2
console.log(findJudge(3,  [[1,3],[2,3]])); // 3
console.log(findJudge(3,  [[1,3],[2,3],[3,1]])); // -1
