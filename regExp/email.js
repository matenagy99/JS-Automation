/*
https://www.hackerrank.com/challenges/detect-the-email-addresses/problem?isFullScreen=true 
*/

function processData(input) {
    //Enter your code here
    let emails = input.match(/[a-zA-Z0-9\_\.]+\@[a-z\.]+\.[a-z]+/g);
    let uniqueEmails = new Set(emails.sort());
    let output = "";
    uniqueEmails.forEach(email => {
       output += `${email};`; 
    });
    console.log(output.slice(0,output.length - 1));   
}