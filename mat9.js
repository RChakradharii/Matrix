

// SNAKE PATTERN

const input = require("readline-sync");

let rows = input.questionInt("Enter the number :)");
let column = input.questionInt("Enter the number:)");

let snakepattern = [];

for(let i = 0; i<rows; i++)
{
   snakepattern[i] = [];
   for(let j = 0; j<column; j++) 
   {
    if(i%2 == 0) 
    {
        snakepattern[i][j] = i*column + j + 1;
    } else 
    {
         snakepattern[i][column - j -1] = i*column + j +1;
    }
   }
}
for(let i = 0; i<rows; i++)
{
    console.log(snakepattern[i]);
}