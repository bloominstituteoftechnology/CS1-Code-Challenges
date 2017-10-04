/*
 * Write a function that returns the count of the total number of vowels in a string.
 * Example: 'Hello World!' -> 3
 */
 // const countVowelsOr = (string) => {
 //   let counter = 0;
 //   for (let i = 0; i < string.length; i++) {
 //     if (string[i] === 'a' ||string[i] === 'e'|| string[i] === 'i' || string[i] === 'o' || string[i] === 'u') {
 //       counter++;
 //     }
 //   }
 //   return counter;
 // }
 // 
 // const countVowelsIncludes = (string) => {
 //   let counter = 0;
 //   const vowels = ['a','e','i','o','u'];
 //   for (let i = 0; i < string.length; i++) {
 //      if (vowels.includes(string[i])) {
 //        counter++;
 //      }
 //   }
 //   return counter;
 // }
 //
 // const countVowelsSwitch = (string) => {
 //   let counter = 0;
 //   for (let i = 0; i < string.length; i++) {
 //     switch (string[i]) {
 //       case 'a':
 //         counter++;
 //         break;
 //       case 'e':
 //         counter++;
 //         break;
 //       case 'i':
 //         counter++;
 //         break;
 //       case 'o':
 //         counter++;
 //         break;
 //       case 'u':
 //         counter++;
 //     }
 //   }
 //
 //   return counter;
 // }

 const countVowelsRegex = (string) => {
   const re = /[aeiou]/gi
   const vowels = string.match(/[aeiou]/gi)
   return vowels.length;
 }


 const hello = 'Hello World!';

 console.log(countVowels(hello));
