function getNthFib(n) {
  let fibs = [0,1]
	
	if (n === 1) return fibs[0]
	else if (n === 2) return fibs[1]; 
	
	while (fibs.length < n) {
		fibs.push(fibs[fibs.length - 1] + fibs[fibs.length - 2])
	}
	
	return fibs[n - 1];
}