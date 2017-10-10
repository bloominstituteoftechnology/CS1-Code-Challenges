// https://repl.it/student/assignments/466973/model_solution?fromSubmissionId=1773343
//

#include <stdio.h>
#include <assert.h>

int main(int argc, char* argv[])
{
  int prevPrev, prev, current, n;
  size_t i;

  printf("Enter an integer: \n");
  scanf("%d", &n);

  assert(n >= 0);
  if (n == 0 || n == 1) {
    printf("Nth Fibonacci number is %d\n", n);
    return 0;
  }

  prevPrev = 0;
  prev = 1;
  current = 0;

  for (i = 1; i < n; i++) {
    current = prev + prevPrev;
    prevPrev = prev;
    prev = current;
  }

  printf("Nth Fibonacci number is %d\n", current);

  return 0;
}
