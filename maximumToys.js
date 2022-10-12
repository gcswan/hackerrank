function maximumToys(prices, k) {
    // Write your code here
    function quicksort(a) {
        if (a.length < 2) return a;
        else {
            let p = a[a.length - 1];
            let less = a.slice(0,-1).filter((i) => i <= p);
            let more = a.slice(0,-1).filter((i) => i > p);
            if (less.length && more.length) {
                return [...quicksort(less), p, ...quicksort(more)];
            } else if (less.length) {
                return [...quicksort(less), p];
            } else {
                return [p, ...quicksort(more)];
            }
        }
    }
    let sorted = quicksort(prices);
    let i = 0; 
    let spent = 0;

    while (spent <= Number(k)) {
        console.log({spent, k})
        spent += sorted[i];
        i++;
    }
    return i-1;
}