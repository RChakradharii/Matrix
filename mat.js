//////////////MAKING AN MATRIX//////////////////
let arr = []
const input=require("readline-sync")
let n = input.questionInt("Enter the number:")
let m = input.questionInt("Enter the number:")
let i = 0;
while (i<n) {
     let j = 0
     let s=[]
     while (j<m) {
           let p = input.questionInt(`enter ${j+1} number:`)
           s.push(p)
           j++
         
        }
    arr.push(s)
    i++
}
console.log(arr);





/////////ADDITION/////////////
// a = [[1,2],[3,4]]
// b = [[5,6],[7,8]]
// c = [[0,0],[0,0]]

// let i =0
// while (i<2) {
//      let j = 0
//      while (j<2) {
//         c[i][j]=a[i][j]+b[i][j]
//           j++
//      }
//      i++    
// }
// console.log("Matrix",c);




/////////////PRINT ALL///////////////
// let a = [[1, 2],[3, 4],[5, 6],[8,9,10],[11,12,13,14],15];
// let b = [];

// for (let i = 0; i < a.length; i++) {
//     if (Array.isArray(a[i])) {
//         for (let j = 0; j < a[i].length; j++) {
//             b.push(a[i][j]);
//         }
//     } else {
//         b.push(a[i]);
//     }
// }

// console.log(b);



