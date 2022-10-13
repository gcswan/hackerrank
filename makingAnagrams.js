function makeAnagram(a, b) {
    let freqs = {};
    a.split('').forEach(char => freqs[char] = (freqs[char] || 0) + 1); // increment
    b.split('').forEach(char => freqs[char] = (freqs[char] || 0) - 1); // decrement
    return Object.keys(freqs).reduce((sum, key) => sum + Math.abs(freqs[key]), 0);
}

let a1 = 'abc';
let b1 = 'dce';

console.log(makeAnagram(a1, b1));