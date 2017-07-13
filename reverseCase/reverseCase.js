<<<<<<< HEAD
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
=======
/*
 * Write a function that reverses the case of each letter in the strings that it receives.
 * Example: 'Hello World' -> 'hELLO wORLD'
 * Assume that each string will contain only spaces and letters.
 */
>>>>>>> 16c30f05fda2a6621522f580bcc60d0ea35e639e
