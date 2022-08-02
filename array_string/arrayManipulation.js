function arrayManipulation(n, queries) {
    
    let m = queries.length;
    let result = new Array(n).fill(0);

    for (let update = 0; update < m; update++) {
        for (let i = queries[update][0] - 1; i < queries[update][1]; i++) {
            result[i] += queries[update][2];; 
        }
        
    }

    return Math.max.apply(null, result);
}