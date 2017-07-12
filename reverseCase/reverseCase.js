const dumbStr = 'hELLO wORLD'
const reverseCase = (str) => {
	
	const awesome = str.split('');
	const awesome2 = [];

	for (let i = 0; i < awesome.length; i++) {
		if (awesome[i] === awesome[i].toLowerCase()) {
			awesome2.push(awesome[i].toUpperCase());
		}
		if (awesome[i] === awesome[i].toUpperCase()) {
			awesome2.push(awesome[i].toLowerCase())
		}
	}
	return awesome2.join('');
};


console.log(reverseCase(dumbStr));