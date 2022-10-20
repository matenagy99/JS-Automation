function diagonalDifference(arr) {
    // Write your code here
    let primary_d = 0;
    let secondary_d = 0;
    
    for (let row = 0; row < arr.length; row++){
        for (let column = 0; column < arr[row].length; column++){
            if (row == column){
                primary_d += arr[row][column];
            }
            if (row + column == arr.length - 1) {
                secondary_d += arr[row][column];
            }
        }
    }
    
    return Math.abs(primary_d - secondary_d);
}

const arr = [[11, 2, 4], 
             [4, 5, 6], 
             [10, 8, -12]];

// console.log(diagonalDifference(arr));
