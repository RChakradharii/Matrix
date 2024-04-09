

/*Write a program to subtract two matrices and store them in a separate matrix.*/


const matrixA = [
    [11,12,13],
    [14,15,16],
    [17,18,19]
  ];
  
  const matrixB = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
  ];
  
  const myMatrix = [];
  
  for (let i = 0; i < matrixA.length; i++) {
    myMatrix[i] = [];
    for (let j = 0; j < matrixA[i].length; j++) {
      myMatrix[i][j] = matrixA[i][j] - matrixB[i][j];
    }
  }
  

  console.log("My Matrix:");
  for (let i = 0; i < myMatrix.length; i++) {
    console.log(myMatrix[i].join(' '));
  }
  