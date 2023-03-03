const getPathFromSourceToTarget = (graph) => {
	const n = graph.length - 1;
	const result = [];
	const path = [];
  
	const dfs = (position) => {
		path.push(position);
	
		if (position === n) {
			result.push([...path]);
		}
	
		const nextnodes = graph[position];
		for (let i = 0; i < nextnodes.length; i++) {
			dfs(nextnodes[i]);
		}
	
		path.pop();
	};
  
	dfs(0);
	return result;
};
  

console.log(getPathFromSourceToTarget([[1,2],[3],[3],[]])); 
// [ [ 0, 1, 3 ], [ 0, 2, 3 ] ]

console.log(getPathFromSourceToTarget([[4,3,1],[3,2,4],[3],[4],[]])); 
// [
//   [ 0, 4 ],
//   [ 0, 3, 4 ],
//   [ 0, 1, 3, 4 ],
//   [ 0, 1, 2, 3, 4 ],
//   [ 0, 1, 4 ]
// ]
