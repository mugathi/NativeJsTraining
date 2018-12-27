function basicOp(operation, value1, value2) {
	let solution=0;
	switch(operation){
		case '+':solution = value1 + value2; break;
		case '-':solution = value1 - value2; break;
		case '*':solution = value1 * value2; break;
		case '/':solution = value1 / value2; break;
	}
    return solution;
}