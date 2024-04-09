/*Write a program to find the minimum element in the matrix.*/

let matrix = [
    [4, 9, 2],
    [7, 5, 1],
    [3, 8, 6]
  ];
  
  let min = matrix[0][0];
  
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] < min) {
        min = matrix[i][j];
      }
    }
  }
  
  console.log("Minimum element in the matrix:", min);
  
