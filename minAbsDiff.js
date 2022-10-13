function minimumAbsoluteDifference(arr) {
    let minDiff = Number.MAX_SAFE_INTEGER;
    let s = arr.sort()
    // let s = arr;
    for (let i = 0; i < s.length; i++) {
        // for(let j = i+1; j < s.length; j++) {
            let diff = Math.abs(s[i] - s[i+1]);
            if (!minDiff || diff < minDiff) minDiff = diff;
            console.log({i: s[i], j: s[i+1], diff, minDiff });
        // }
    }
    return minDiff;
}

console.log(minimumAbsoluteDifference([1,-3,71,68,17]));

console.log(minimumAbsoluteDifference([1,2,3,4,5]));




