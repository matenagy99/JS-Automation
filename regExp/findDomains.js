/*
https://www.hackerrank.com/challenges/detect-the-domain-name/problem?isFullScreen=true
*/

function processData(input) {
    //Enter your code here
    let domains = input.match(/(www\.|http[s]?:\/\/)([a-z0-9]*\.?)*?\.[a-z]{2,3}/g);
    const formattedDomains = domains.map(domain => {
        if(domain.slice(0, 12) === "https://www.") {
            return domain.slice(12);
        }
        if(domain.slice(0, 11) === "http://www.") {
            return domain.slice(11);
        }
        if (domain.slice(0, 4) === "www."){
            return domain.slice(4);
        }
        if (domain.slice(0, 6) === "https:"){
            return domain.slice(8);
        } 
        if (domain.slice(0, 5) === "http:"){
            return domain.slice(7);
        }
    });
    const uniqueDomains = new Set(formattedDomains.sort());
    let output = "";
    uniqueDomains.forEach(domain => {
        output += `${domain};`;
    })
    console.log(output.slice(0, output.length - 1));
} 