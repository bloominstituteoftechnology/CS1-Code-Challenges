//An Armstrong number is an n-digit number that is equal to the sum of the n'th powers of its digits. Determine if the input numbers are Armstrong numbers.  Return either true or false .

// For example with the number 153 there are 3 digits so you would add together the cubed values of all the digits like this: 1^3 + 5^3 + 3^3 === 153

function isArmstrongNumber(n){
  const arr = n.toString().split('');
  let acc = 0;
  for (let i = 0; i < arr.length; i++) {
    acc = Math.pow(Number(arr[i]), arr.length) + acc;
  }
  if (acc === n) {
    return true;
  }
  return false;
}
