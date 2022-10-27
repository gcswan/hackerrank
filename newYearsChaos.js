function minimumBribes(q) {
    // Write your code here
    let bribes = 0;
    for (let i = 0; i < q.length; i++) {
				// console.log({i, 'val:': q[i]})
				let o = q[i] - 1;
				if (o - i > 2) console.log('Too Chaotic')
				
				for (let j = q[i] - 2; j < i; j++) { 
				    // console.log({'j: ': j})
            if (q[j] > q[i]) { 
				      bribes++ 
				      // console.log('bribed')
				    }
        }
				// console.log('-----------------------------------')
    }
    console.log(bribes);
}


console.log(minimumBribes([1, 2, 5, 3, 7, 8, 6, 4]))
// console.log(minimumBribes([1, 5, 2, 3, 4])) 
