// opdracht A

// const superheroes = [
//     {name: "Batman", alter_ego: "Bruce Wayne"}, 
//     {name: "Superman", alter_ego: "Clark Kent"}, 
//     {name: "Spiderman", alter_ego: "Peter Parker"}]

// function findSpiderMan (array){
//     return array.name === 'Spiderman';
// }

// console.log(superheroes.find(findSpiderMan));





// opdracht B; In een array met integers. Zorg dat je een array returned met de integers verdubbeld. Gebruik de .forEach method of, een level hoger: de .map method.



// const doubleArrayValues = function(array){
//     let newArray = [];
//     array.forEach (number => {
//         newArray.push(number*2);
//     });
//     return newArray;
// };

// var numbers = [1,2,3]

// const doubleArrayValues = numbers.map (function (num){
//     return num * 2;
// });

// console.log(doubleArrayValues);






// opdracht C:  In een array met integers. Schrijf een JavaScript functie die checkt of er een nummer (integer) in de array aanwezig is dat groter is dan 10.


// const containsNumberBiggerThan10 = function (array){
//     return array.some (number => {
//         return number > 10;
//     });
// };

// console.log(containsNumberBiggerThan10([1, 4, 3, 6, 9, 7, 11]));
// console.log(containsNumberBiggerThan10([1, 2, 1, 2, 1, 2]))






// D: In een array met strings. Schrijf een JavaScript functie die kijkt of er een bepaalde string: "Italy" in de array aanwezig is.

// const isItalyInTheGreat7 = function (array){
//     return array.includes ("Italy");
// }

// console.log (isItalyInTheGreat7(['Canada', 'France','Germany','Italy','Japan','United Kingdom','United States'])); 





// E: In een array met integers. Schrijf een JavaScript functie die elke integer vertienvoudigt. Gebruik .forEach.

// const tenfold = function (array){
//     let newArray = [];
//     array.forEach (number => {
//         newArray.push (number * 10);
//     });
//     return newArray;
// }


// console.log(tenfold([1, 4, 3, 6, 9, 7, 11]));





// //F: In een array met integers. Schrijf een JavaScript functie die checkt of alle waardes in de array onder de 100 zijn, en true or false retourneert.

// const isBelow100 = function (array){
//     return array.every (number => {
//         return number < 100;
//     });
// };


// console.log(isBelow100([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98 ]));





// G: Bonus! Deze laatste is wat extra uitdagend. We hopen dat jullie deze challenge accepteren. Gebruik Google en wees een beetje baldadig (gebruik wellicht een klein stukje code die je kopieert).
// In een array met integers. Schrijf een JavaScript functie die alle waardes in de array bij elkaar optelt en het totaal van de som retourneert. Gebruik de .reduce method. En echt, gebruik Google.

const bigSum = function (array){
    return array.reduce (( acc, number ) => {
        return acc + number
    });
};


console.log(bigSum([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234]))
