function minimumAbsoluteDifference(arr) {
    let minDiff = Number.MAX_SAFE_INTEGER;
    let s = arr.sort()
    for (let i = 0; i < s.length; i++) {
        let diff = Math.abs(s[i] - s[i+1]);
        if (!minDiff || diff < minDiff) minDiff = diff;
        console.log({i: s[i], j: s[i+1], diff, minDiff });
    }
    return minDiff;
}

console.log(minimumAbsoluteDifference([1,-3,71,68,17]));
console.log(minimumAbsoluteDifference([1,2,3,4,5]));




