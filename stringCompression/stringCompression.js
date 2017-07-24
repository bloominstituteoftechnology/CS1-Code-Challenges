// String Compression: Implement a method to perform basic string compression using
// the counts of repeated characters.
// For example, the string aabcccccaaa would become a2b1c5a3.
// If the "compressed" string would not become smaller than the original string,
// your method should return the original string.
// You can assume the string has only uppercase and lowercase letters (a - z).

const stringCompression = (str) => {
  const arr = str.split("");
  const seti = new Set(arr);
  const arr2 = [];
  seti.forEach((value) => {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      if (value == arr[i]) count++;
    }
    const info = value + count;
    arr2.push(info);
    })
  const str2 = arr2.join("");
  return str2;
}