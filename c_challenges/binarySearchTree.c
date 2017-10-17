/*
  binarySearchTree.c

  Implement a binary search tree with the following methods:

  -- newNode: Creates a new binary search tree node
  -- insert: Inserts a new node in the binary search tree
  -- printInOrder: Given a root node,  print the root node's value and
     all of  its children's  values in  ascending order.  For example,
     given the tree

         10
       /   \
      7     19
    /  \   /  \
   6   9  11   20

  printInOrder should print: 6  7  9  10  11  19  20

*/

#include <stdio.h>
#include <stdlib.h>

struct node {
  int value;
  struct node* leftNode;
  struct node* rightNode;
};

struct node* newNode(int item)
{
  struct node* newNode = malloc(sizeof(struct node));
  newNode->value = item;
  newNode->leftNode = NULL;
  newNode->rightNode = NULL;
  return newNode;
}

void printInOrder(struct node *root)
{
  if (root == NULL) return;
  if (root->leftNode != NULL)
    printInOrder(root->leftNode);
  printf("%d ", root->value);
  if (root->rightNode != NULL)
    printInOrder(root->rightNode);
}

struct node* insert(struct node* node, int item)
{
  if (node == NULL)
    node = newNode(item);

  if (item < node->value)
    node->leftNode = insert(node->leftNode, item);
  else if (item > node->value)
    node->rightNode = insert(node->rightNode, item);
  return node;
}

int main(int argc, char* argv[])
{
  struct node *root = NULL;
  root = insert(root, 50);
  insert(root, 30);
  insert(root, 20);
  insert(root, 40);
  insert(root, 70);
  insert(root, 60);
  insert(root, 80);
  
  printInOrder(root);
  putchar('\n');
  return 0;
}
