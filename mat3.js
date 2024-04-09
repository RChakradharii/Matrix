/*Write a program to transpose matrix A. Store the result in a separate matrix.*/

let matrixA = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let myMatrix = [];

for (let i = 0; i < matrixA[0].length; i++) {
    myMatrix[i] = [];
}

for (let i = 0; i < matrixA.length; i++) {
    for (let j = 0; j < matrixA[i].length; j++) {
        myMatrix[j][i] = matrixA[i][j];
    }
}

console.log("Original Matrix A:");
for (let i = 0; i < matrixA.length; i++) {
    console.log(matrixA[i]);
}

console.log("Transposed Matrix:");
for (let i = 0; i < myMatrix.length; i++) {
    console.log(myMatrix[i]);
}



// const input = require("readline-sync");

// let n = input.questionInt("Enter the number of rows:");
// let m = input.questionInt("Enter the number of columns:");

// let r = [];
// let i = 0;

// while (i < n)
// {
//     let j = 0;
//     let s = [];
//     while (j < m)
//     {
//         let f = input.questionInt("Enter the 1 element for matrix r((i)][(j)]:");
//         s.push(f);
//         j++;
//     }
//     r.push(s);
//     i++;
// }

// // Transpose matrix A (r)
// let transposedMatrix = [];
// for (let j = 0; j < m; j++)
// {
//     let row = [];
//     for (let i = 0; i < n; i++) 
//     {
//         row.push(r[i][j]);
//     }
//     transposedMatrix.push(row);
// }

// // Display transposed matrix
// console.log("Transposed Matrix:");
// for (let i = 0; i < m; i++) 
// {
//     console.log(transposedMatrix[i]);
// }
