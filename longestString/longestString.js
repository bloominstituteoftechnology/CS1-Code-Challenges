/*
 * Write a function that accepts an array of strings.
 * Return the longest string in the array.
 */

const longestString = (stringArray) => {
	let currentLongest = stringArray[0];
		for(strings of stringArray) {
			if(strings.length > currentLongest.length) {
				currentLongest = strings;
			}
		}
	return currentLongest
}

const array = ['gorm', 'grim', 'grum', 'gram'];
console.log(longestString(array));