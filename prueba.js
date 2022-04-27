/* 


let frutas = [1,2,3,4,5];
frutas.forEach(function(elemento, indice, array) {
  console.log("["+indice+"]= ",elemento);
    array[indice]=frutas[indice]*2;
    console.log(array);

})


function bob2(b){

  return b+100;

}
console.log(bob2(2));


let bob = a => a + 100;
console.log(bob(2));

 */




let array = [];


for (var i = 0; i < 5; i++) {
  var a = parseInt(Math.random() * 100);
  array[i] = a;
}
console.log(array);
console.log(array.length)

array.forEach(function(value,index,array2){
  console.log("["+index+"]="+value);
  array2[index]=array[index];
  console.log(array2);
})
console.log("____________________");


