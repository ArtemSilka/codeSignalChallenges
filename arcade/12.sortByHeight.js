function sortByHeight(a) {
    let heightsOnly = [];
    
    for (let i = 0; i < a.length; i++) {
        if (a[i] > -1) {
            heightsOnly.push(a[i]);
        }
    }
    
    let sorted = heightsOnly.sort((a, b) => a - b);
    
    for (let j = 0; j < a.length; j++) {
        if (a[j] !== -1) {
            a[j] = sorted.shift();
        }
    }
    
    return a;
}
