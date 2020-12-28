function isLeap(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return true;
            }
            return false;
        }
        return true
    } 
    return false;
}

// console.log(isLeap(2000));//true
// console.log(isLeap(2004));//true
// console.log(isLeap(1700));//false
// console.log(isLeap(1800));//false
// console.log(isLeap(2008));//true
// console.log(isLeap(2400));//true
// console.log(isLeap(1989));//false
// console.log(isLeap(4));//false
