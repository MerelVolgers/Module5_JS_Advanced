
const superheroes =  [
    {
    name: "Batman",
    publisher: "DC Comics",
    alter_ego: "Bruce Wayne",
    first_appearance: "Detective Comics #27",
    weight: "210"
    },
    {
    name: "Superman",
    publisher: "DC Comics",
    alter_ego: "Kal-El",
    first_appearance: "Action Comics #1",
    weight: "220"
    },
    {
    name: "Flash",
    publisher: "DC Comics",
    alter_ego: "Jay Garrick",
    first_appearance: "Flash Comics #1",
    weight: "195"
    },
    {
    name: "Green Lantern",
    publisher: "DC Comics",
    alter_ego: "Alan Scott",
    first_appearance: "All-American Comics #16",
    weight: "186"
    },
    {
    name: "Green Arrow",
    publisher: "DC Comics",
    alter_ego: "Oliver Queen",
    first_appearance: "All-American Comics #16",
    weight: "195"
    },
    {
    name: "Wonder Woman",
    publisher: "DC Comics",
    alter_ego: "Princess Diana",
    first_appearance: "The Incredible Hulk #180",
    weight: "165"
    },
    {
    name: "Blue Beetle",
    publisher: "DC Comics",
    alter_ego: "Dan Garret",
    first_appearance: "Mystery Men Comics #1",
    weight: "145"
    },
    {
    name: "Spider Man",
    publisher: "Marvel Comics",
    alter_ego: "Peter Parker",
    first_appearance: "Amazing Fantasy #15",
    weight: "167"
    },
    {
    name: "Captain America",
    publisher: "Marvel Comics",
    alter_ego: "Steve Rogers",
    first_appearance: "Captain America Comics #1",
    weight: "220"
    },
    {
    name: "Iron Man",
    publisher: "Marvel Comics",
    alter_ego: "Tony Stark",
    first_appearance: "Tales of Suspense #39",
    weight: "250"
    },
    {
    name: "Thor",
    publisher: "Marvel Comics",
    alter_ego: "Thor Odinson",
    first_appearance: "Journey into Myster #83",
    weight: "200"
    },
    {
    name: "Hulk",
    publisher: "Marvel Comics",
    alter_ego: "Bruce Banner",
    first_appearance: "The Incredible Hulk #1",
    weight: "1400"
    },
    {
    name: "Wolverine",
    publisher: "Marvel Comics",
    alter_ego: "James Howlett",
    first_appearance: "The Incredible Hulk #180",
    weight: "200"
    },
    {
    name: "Daredevil",
    publisher: "Marvel Comics",
    alter_ego: "Matthew Michael Murdock",
    first_appearance: "Daredevil #1",
    weight: "200"
    },
    {
    name: "Silver Surfer",
    publisher: "Marvel Comics",
    alter_ego: "Norrin Radd",
    first_appearance: "The Fantastic Four #48",
    weight: "unknown"
    }
    ]

// 1. Maak een array van alle superhelden namen:

let superheroesNamesList = superheroes.map (superhero => {
    return superhero.name;
});

console.log("These are the superheroes names:" , superheroesNamesList);


// 2. Maak een array van alle "lichte" superhelden (< 190 pounds):

let lightSuperheroesList = superheroes.filter (superhero => {
    return superhero.weight < 190;
});

console.log("These are the 'light' superheroes", lightSuperheroesList);

// 3. Maak een array met de namen vn die superhelden die 200 pounds wegen:

let heavySuperheroesList = superheroes.filter (superhero => {
    return superhero.weight == 200;
    }).map (superhero =>{
    return superhero.name;
});

/* Dit is de korte versie van bovenstaande functie!!!:::::

    let heavySuperheroesList = superheroes
       .filter(superhero=> superhero.weight == 200)
       .map(superhero=> superhero.name);
*/

console.log("These are the names of the heavy superheroes:", heavySuperheroesList);



// 4. Maak een array met alle comics waar de superhelden hun "first appearances" hebben gehad:

let firstAppearance = superheroes.map (superhero => superhero.first_appearance);

console.log("This is a list of first appearances:", firstAppearance);

// 5. Maak een array met alle superhelden van DC Comics. en maak dan ook een array met alle superhelden van Marvel Comics

let superheroesDCcomics = superheroes.filter (superhero => superhero.publisher == "DC Comics");
let superheroesMarvel = superheroes.filter (superhero => superhero.publisher == "Marvel Comics");


console.log("These are the superheroes by DC Comics:", superheroesDCcomics);
console.log("These are the superheroes by Marvel:", superheroesMarvel);

// 6. Tel het gewicht van alle superhelden van DC Comics bij elkaar op. 

const DCcomicsWeight = superheroesDCcomics.map (superhero => {
    if (superhero.weight !== "unknown" ) {
        return parseInt (superhero.weight, 10);
    } else {
        return 0;
    }
});

const DCcomicsTotalWeight = DCcomicsWeight.reduce ((weight1, weight2) => {
    return weight1+weight2;
});

console.log("This is the total weight of the DCcomics heroes:", DCcomicsWeight, DCcomicsTotalWeight);


// 7. doe hetzelfde met alle superhelden van Marvel Comics

const MarvelWeight = superheroesMarvel.map (superhero => {
    if (superhero.weight !== "unknown" ) {
        return parseInt (superhero.weight, 10);
    } else {
        return 0;
    }
});

const MarvelTotalWeight = MarvelWeight.reduce ((weight1, weight2) => {
    return weight1+weight2;
});

console.log("This is the total weight of the Marvel heroes:", MarvelWeight, MarvelTotalWeight);



// 8. bonus. Zoek de zwaarste superheld!

// const HeaviestSuperhero = superheroes.filter (superhero => superhero.weight); ???????

console.log("This is the heaviest superhero:", HeaviestSuperhero);