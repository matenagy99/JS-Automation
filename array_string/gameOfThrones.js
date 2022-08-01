function gameOfThrones(s) {
    
    let chars = {};

    for (let i = 0; i < s.length; i++) {
        if (chars.hasOwnProperty(s[i])) {
            chars[s[i]] += 1;
        } else {
            chars[s[i]] = 1
        }
    }
    
    let even = 0;
    let odd = 0

    for (const char in chars) {
        if (chars[char] % 2 === 0) {
            even += chars[char];
        } else {
            odd += chars[char];
        }
    }

    if (even === 0) {
        return "NO";
    }

    if (s.length === even && s.length % 2 === 0) {
        return "YES";
    }

    if (s.length - even === odd && s.length % 2 !== 0) {
        return "YES"
    }

    return "NO";
}

console.log(gameOfThrones("cdefghmnopqrstuvw"));