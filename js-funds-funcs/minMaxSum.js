function minMaxSum(arr) {
    
    let sums = Array(arr.length - 1);
    let i = 0;
    
    while (i < arr.length) {
        
        let missing = arr[i];
        sums[i] = 0; 

        for (let number = 0; number < arr.length; number++) {
            if (arr[number] !== missing) {
                sums[i] += arr[number];
            }else {
                missing = undefined;
            }
        }

        i++;
    }

    return `${Math.min.apply(null, sums)} ${Math.max.apply(null, sums)}`;
}

const arr = [5, 5, 5, 5, 5];

console.log(minMaxSum(arr));