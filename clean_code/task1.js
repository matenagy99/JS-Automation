let fruits = 'Banana Apple';

function splitArrayBy(array, separator) {
    return array.split(separator);
}

fruits = splitArrayBy(fruits, " ");

console.log(fruits);