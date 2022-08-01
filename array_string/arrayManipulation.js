function arrayManipulation(n, queries) {
    
    let m = queries.length;
    let result = new Array(n).fill(0);

    let updates = 0;

    while (updates < m) {

        // let aIndex = queries[updates][0];
        //let bIndex = queries[updates][1];
        // let k = 

        for (let i = queries[updates][0] - 1; i < queries[updates][1]; i++) {
            result[i] += queries[updates][2];; 
        }

        updates++;
    }

    return Math.max.apply(null, result);
}

const queries = [[1, 2, 100], [2, 5, 100], [3, 4, 100]];

console.log(arrayManipulation(5, queries));