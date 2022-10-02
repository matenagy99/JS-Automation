/* 
https://www.hackerrank.com/challenges/ide-identifying-comments/problem?isFullScreen=true
*/

function processData(input) {
    //Enter your code here
    const comments = input.match(/\/\/.*|\/\*+(.|[\r\n])*?\*+\//g);
    comments.forEach(comment => {
       console.log(comment);
    });
} 