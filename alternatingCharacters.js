function alternatingCharacters(s) {
    let last = s[0];
    let del = 0;
    for (let i = 1; i < s.length; i++) {
        if (s[i] !== last) {
            console.log('found alt', s[i]);
            last = s[i];
        } else {
            del++;
        }
    }
    return del;
}

console.log(alternatingCharacters('AABAABA'));
