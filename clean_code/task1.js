let fruits = 'Banana Apple';

function splitArray(array, token) {
    return array.split(token);
}

fruits = splitArray(fruits, " ");

console.log(fruits);