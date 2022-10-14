function whatFlavors(cost, money) {
    let n =  cost.length;
    for (let i = n-1; i >= 0; i--) {
        if (cost[i] < money) {
            for (let j = 0; j < i; j++) {
                let tmp = cost[i] + cost[j];
                // console.log('i:', cost[i], 'j:', cost[j])
                if (tmp === money) console.log(j+1, i+1);
            }
        }
    }
}
// ^^ this takes way too long O(n²)

function whatFlavorsBetter(cost, money) {
    // init m Map to store previously visit values
    const visited = new Map() 
    for (let i = 0; i < cost.length -1; i++) {
        // m = x + y
        // y = m - x 
        // everytime we visit a new x we know what y should be 
        // so we can check to see if we've visited it already
        let x = cost[i];
        let y = money - cost[i];
        // console.log({x, y, money})
        if (visited.has(y)) {
            return console.log(visited.get(y) + 1, i +1);
        } else {
            visited.set(x, i);
        }
    }
    // console.log(visited);
    // console.log(result)
} // O(n);


console.log(whatFlavorsBetter([1, 4, 5, 3, 2], 4)); // 1 4
console.log(whatFlavorsBetter([2, 2, 4, 3], 4)); // 1 2