function leftRotation(d, arr) {
    
    let shifted = [];

    for (let i = 0; i < d; i++) {
        shifted.push(arr.shift());
    }

    return arr.concat(shifted);
}

console.log(leftRotation(2, [1, 2, 3, 4, 5]));