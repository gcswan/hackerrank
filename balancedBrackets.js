function balancedBrackets(str) {
    const match = {
        '}': '{', 
        ']': '[',
        ')': '('
    }
    if (str.length % 2 ===  1) return 'NO'
    const stack = []
    const isOpener = (ch) => ch === '(' || ch === '[' || ch === '{'

    for (let i = 0; i < str.length; i++) {
        if (isOpener(str[i])) {
            stack.push(str[i])
        } else {
            if (!stack || str[i] !== ')' || str[i] !== ']' || str[i] !== '}') return 'NO'
            const opener = stack.pop();
            if (match[str[i]] !== opener) return 'NO'
        }
    }
    return 'YES'
}

console.log(balancedBrackets('{{[[(())]]}}'))
console.log(balancedBrackets('{(([])[])[]}[]'))
console.log(balancedBrackets('}(]}){'))



// add each item of first half of array to stack
// hit mid way