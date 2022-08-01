function funnyString(s) {

    const c = s.split("").reverse().join("");
    let oArray = [];
    let cArray = [];

    for (let i = 0; i < s.length; i++) {
        oArray.push(s.charCodeAt(i));
        cArray.push(c.charCodeAt(i));
    }

    let oResult = [];
    let cResult = [];

    for (let idx = 0; idx < oArray.length - 1; idx++) {
        oResult.push(Math.abs(oArray[idx]-oArray[idx + 1]));
        cResult.push(Math.abs(cArray[idx]-cArray[idx + 1]));
    }

    for (let idx = 0; idx < oResult.length - 1; idx++) {
        if (oResult[idx] !== cResult[idx]) {
            return "Not Funny"
        }
    }

    return "Funny";
    //return JSON.stringify(oResult) === JSON.stringify(cResult) ? "Funny": "Not Funny";
}