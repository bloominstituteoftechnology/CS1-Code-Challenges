/* nthFib.c
 * 
 * Write a  program that  reads an  integer from  stdin and  uses that
 * integer  N to  calculate  the Nth  Fibonacci  number. Your  program
 * should print out  your answer in the form of  "Nth Fibonacci number
 * is [YOUR ANSWER]".

 * Your program should prompt the user with "Enter an integer:". */

#include <stdio.h>
#include <assert.h>

struct prior {
  long n_1;
  long n_2;
};

long fib(int num) {
  if (num <= 0)
    return 0;
  
 if (num <= 2)
    return 1;

 struct prior priorstr = {1, 1};

 for (int i = 3; i <= num; i++) {
   long n = priorstr.n_2 + priorstr.n_1;
   priorstr.n_2 = priorstr.n_1;
   priorstr.n_1 = n;
  }

  return priorstr.n_1;
}

int main(int argc, char* argv[])
{
  int num = 0;
  printf("Enter an integer: ");
  scanf("%d", &num);

  printf("Nth Fibonacci number is %ld\n", fib(num));

  return 0;
}
 
