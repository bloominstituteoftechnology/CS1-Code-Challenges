/*****************************************************************************
 * totalAveragePercent.c
 * ---------------------
 *
 * Write a C program that takes in exactly 5 floats and calculates the
 * total, average, and percentage of those five floats.
 *
 * When your  program is executed,  it should look something  like the
 * following:
 *
 * Example Input:
 * Enter 5 floats: 95.2 76.6 85.4 90.0 89.1
 *
 * Output:
 * Total = 436.30
 * Average = 87.27
 * Percentage = 87.26 %
 *****************************************************************************/

#include <stdio.h>

int main(int argc, char* argv[]) {
  float n[5];
  float total, average, percentage;

  printf("Enter 5 floats: ");
  scanf("%f %f %f %f %f", &n[0], &n[1], &n[2], &n[3], &n[4]);
  for (int i = 0; i < 5; i++) {
    total += n[i];
  }
  average = total / 5;
  percentage = total / 500 * 100;

  printf("Total = %.2f\nAverage = %.2f\nPercentage = %.2f %%\n", total, average, percentage);

  return 0;
}
