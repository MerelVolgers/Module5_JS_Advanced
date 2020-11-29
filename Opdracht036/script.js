// // oprdacht A

// const addTheWordCool = function(array){
//     array.push("cool");
//     return array;
// }

// console.log("Add cool:", addTheWordCool(["nice", "awesome", "tof"]));
// // resultaat: ["nice", "awesome", "tof", "cool"]





// // opdracht B
// const amountOfElementsInAnArray = function (array) {
//     return array.length;
// }

// console.log(amountOfElementsInAnArray(['appels', 'peren', 'citroenen']));




// // Opdracht C

// const selectBelgiumFromBenelux = function (array){
//     return array[0]
// }

// console.log(selectBelgiumFromBenelux(["Belgie", "Nederland", "Luxemburg"])); 




// //  Opdracht D
// const lastElementInArray = function (array){
//     return array[array.length-1]
// }

// console.log(lastElementInArray(["Haas", "Cavia", "Kip", "Schildpad"])); 








//Opdracht E Schrijf een JavaScript functie om het eerste element uit een array te halen en het restant te retourneren . Gebruik .slice én de alternatieve optie .splice. Wat is het verschil tussen deze functies? Hint: mutability.

// const presidents = ["Trump", "Obama", "Bush", "Clinton"] 

// // const impeachTrumpSlice = function(array) {
// //     const newArray = array.slice(1,4);
// //     return newArray;
// // }

// const impeachTrumpSplice = function(array) {
//     const removeTrump = array.splice (0,1);
//     return array;
// }

// // console.log(impeachTrumpSlice(presidents)); 
// console.log(impeachTrumpSplice(presidents)); 



// opdracht F ; Write a simple JavaScript program to join all elements of the following array into a string (with spaces). ps: deze opdracht hebben we in het Engels gelaten omdat er een dikke tip in zit over welke array method je gaat gebruiken.

const stringsTogether = function (array) {
    return array.join (" ");
}

console.log(stringsTogether(['Winc', 'Academy', 'is', 'leuk', ';-}'])) 




// opdracht G: Schrijf een functie die 2 arrays ['array 1'] ['array2'] combineert tot 1 array ['array1', 'array2']

const combineArrays = function (array1, array2){
    return array1.concat(array2);
};

console.log (combineArrays([1,2,3], [4,5,6]) );
