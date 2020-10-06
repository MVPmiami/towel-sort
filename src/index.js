module.exports = function towelSort (matrix) {
  let matrixArray =[];
  let reverseArray = [];
 
 if(arguments.length){
   for(let i = 0; i < matrix.length; i++){
     if(i % 2 === 0) {
       reverseArray.push(matrix[i]);
     }else{
       reverseArray.push(matrix[i].reverse());
     }
   }
   matrixArray = reverseArray.flat(reverseArray.length);
   return matrixArray;
 }else{
   return matrixArray;
 }
}
