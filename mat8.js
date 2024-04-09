/*
Write a program to take the input from the user and print the following pattern according to the input.

For example for n = 3 print the following pattern  
        1 2 3
        8 9 4
        7 6 5
For n = 4 print the following pattern
          1    2    3  4 
         12   13   14  5
         11   16   15  6
         10    9   8   7 
*/



const input = require("readline-sync");
const n = input.questionInt("Enter the value of n: ");

let mat = [];
for (let i = 0; i < n; i++) 
{
    let row = [];
    for (let j = 0; j < n; j++) 
    {
        row.push(0);
    }
    mat.push(row);
}

let num = 1;
let top = 0;
let bottom = n - 1;
let left = 0;
let right = n - 1;

while (num <= n * n) 
{

    for (let i = left; i <= right; i++)
    {
        mat[top][i] = num++;
    }
     top++;


    for (let i = top; i <= bottom; i++) 
    {
        mat[i][right] = num++;
    }
    right--;

    for (let i = right; i >= left; i--) 
    {
        mat[bottom][i] = num++;
    }
    bottom--;

    for (let i = bottom; i >= top; i--) 
    {
        mat[i][left] = num++;
    }
    left++;
}

for (let i = 0; i < n; i++) 
{
    console.log(mat[i].join(' '));
}