/*
 * Write a function that accepts an array of strings.
 * Return the longest string in the array.
 */
const longestString = (string) => {
    const sorted = string.sort(function(a, b) {
        b - a;
    });
    return sorted.pop();
}