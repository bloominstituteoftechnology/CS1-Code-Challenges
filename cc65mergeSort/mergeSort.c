/* cc65 mergeSort https://repl.it/student/submissions/1824513

*/

#include <stdio.h>
#include <stdio.h>

void merge(int arr[], int left, int mid, int right)
{

}

void mergesort(int arr[], int left, int right)
{

}

void print_array(int arr[], int size)
{
  for (int i = 0; i < size; i++) {
    printf("%d\n", arr[i]);
  }
}

int main(int argc, char* argv[])
{
  int arr[] = {90, 98, 14, 57, 30, 10, 59, 81, 12, 11, 13, 5, 69, 13, 6, 7};
  int arr_size = sizeof(arr)/sizeof(arr[0]);

  printf("Given array is \n");
  print_array(arr, arr_size);

  mergesort(arr, 0, arr_size - 1);

  printf("\nSorted array is \n");
  print_array(arr, arr_size);
  return 0;
}
