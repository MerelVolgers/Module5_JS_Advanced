// Opdracht deel 1: Wanneer ik als gebruiker op een button van één van de Big 5 klik, wil ik dat die verschijnt in mijn lijstje met "animals spotted".

// maak een event-listener vast aan de buttons
// maak een functie die gecalled wordt op het moment dat er op 1 van de buttons wordt geklikt. check dit met een console log
// zorg dat het click event wordt doorgegeven aan deze functie
// zorg dat je toegang hebt tot de waarde (value) van de button waar op is geklikt in deze functie. check dit met een console log. De uitkomst die je wilt zien wanneer je klikt is Leopard / Lion / Elephant / Rhino of Buffalo
// creer een nieuw list-item met JS in de bovenstaande waarde(het dier waar je op hebt geklikt)
// selecteer het parent-element waar je dit nieuwe list-item aan wilt vastmaken (de spotted animals list)
// maak het nieuwe list-item vast aan het parent-element

const bigFiveButtons = document.getElementsByClassName ("big-five-button");
const spottedAnimal = document.getElementById ("spotted-animals-list");

// console.log(bigFiveButtons[0].innerHTML);
// console.log(bigFiveButtons[3]);

Array.from(bigFiveButtons).forEach((button) => {
    button.addEventListener ("click", function (event) {
        // console.log(button.innerHTML)
        let nameAnimal = event.srcElement.innerHTML;
        const newLi = document.createElement("li");
        newLi.appendChild(document.createTextNode(spottedAnimal));
        newLi.innerHTML= nameAnimal;
        spottedAnimal.appendChild(newLi);
    })
});



// Opdracht deel 2: element verwijderen uit de DOM.

// Opdracht: Wanneer ik als gebruiker op de "remove the first item" knop klik wordt de eend die ik op mijn tocht naar het vliegveld heb gespot verwijderd (het is toch een beetje een vreemde eend in dit lijstje van de big five). De gebruiker kan op deze knop blijven klikken, telkens wordt het eerste item verwijderd.

// Todo list:

// Maak een eventlistener vast aan de button
// Maak een functie vast aan de eventlistener
// In de functie: selecteer de eend (het element)
// selecteer ook de parent
// gebruik parent.removeChild(child).
// Alternatief: Verwijder het element met ChildNode.remove() 

let removeFirstAnimal = () => {
    spottedAnimal.removeChild(spottedAnimal.children[0]);
}

let removeFirstItem = document.getElementById ("remove-first-item-button").addEventListener ("click", removeFirstAnimal);


// Deel 3 - Meerdere element verwijderen uit de DOM
// Opdracht: Wanneer ik als gebruiker op de "remove all spotted animals" knop klik worden alle dieren die ik heb gespot verwijderd.

// Todolist:

// Maak een eventlistener vast aan de button
// Maak een functie vast aan de eventlistener
// In de functie: selecteer de parent
// Verwijder alle kinderen van de parent 
//  De simpele manier: set de innerHTML van de parent naar een empty string 
//  De chique manier: selecteer de parent en gebruik een loop om elk element 1 voor 1 te verwijderen met .remove() of met .removeChild()

let removeAllAnimals = () =>{
    spottedAnimal.innerHTML = "";
}

let removeAllItems = document.getElementById ("remove-all-button").addEventListener ("click", removeAllAnimals);

