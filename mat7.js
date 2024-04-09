/*Write a program to find the sum of all diagonal elements of a matrix.*/


const input = require("readline-sync")
const rows = input.questionInt("Enter the number of rows: ");
const cols = input.questionInt("Enter the number of cols: ");

let mat = [];
for (i = 0; i < rows; i++)
{
    mat[i] = [];
    for (j = 0; j < cols; j++) 
    {
     mat[i][j] = input.questionInt(`Enter the value of mat [${i}][${j}]: `)
    }
}
let diagonalSum  = 0;
for (let i = 0; i < Math.min(rows, cols); i++)
{
    diagonalSum += mat[i][i];
}
console.log('Sum of diagonal element:',diagonalSum)