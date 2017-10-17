/*
 * quicksort.c
 * 2017-10-17
 */

/*
 Implement the quick  sort sorting algorithm. Assume the  input is an
 array of integers.

 If you need  to refresh your memory on the  quick sort algorithm, feel
 free to reference your old  JavaScript implementation, as well as the
 following links:

 https://en.wikipedia.org/wiki/Quicksort
 https://www.khanacademy.org/computing/computer-science/algorithms#quick-sort 
*/

#include <stdio.h>

void print_array(int[], int);
int partition(int[], int, int);
void swap(int[], int, int);

void quick_sort(int arr[], int low, int high)
{
  static int count = 0;

  if (low < high) {
    int p = partition(arr, low, high);
    quick_sort(arr, low, p);
    quick_sort(arr, p+1, high);
  }
}

int partition(int arr[], int lo, int hi) {
  int pivot = arr[lo];
  int i = lo - 1;
  int j = hi + 1;

  while(1) {
    while (arr[++i] < pivot)
      ;
    
    while (arr[--j] > pivot)
      ;

    if (i >= j)
      return j;

    swap(arr, i, j);
  }
  return 0;
}

void swap(int arr[], int i, int j){
  int temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

void print_array(int arr[], int size)
{
  for (int i = 0; i < size; i++) {
    printf("%3d ", arr[i]);
  }
  putchar('\n');
}

int main(int argc, char* argv[])
{
  int arr[] = {100, 55, 4, 98, 10, 18, 90, 95, 43, 11, 47, 67, 89, 42, 49, 79};
  int n = sizeof(arr) / sizeof(arr[0]);
  print_array(arr, n);
  quick_sort(arr, 0, n-1);
  print_array(arr, n);
  return 0;
}
