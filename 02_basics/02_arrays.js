// Arrays part 2

const marvel_heroes = ["thor", "ironman", "vision", "spiderman"];

const dc_heroes = ["superman", "wonder woman", "batman"];

let heroes = [];
// Push complete array as an object
// instead of pushing every element from input param arraya s a new object in output array
heroes.push(marvel_heroes);
heroes.push(dc_heroes);

console.log(heroes);
console.log(heroes[0][1]);

// adds idividual element

heroes = [];
heroes.concat(marvel_heroes);
console.log(heroes);

// Spread operator , use instad of concat
// ' ... '
const all_new_heroes = [...marvel_heroes, ...dc_heroes];
console.log(all_new_heroes);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [10, 11]]];

console.log(another_array);
// breaks array inside an array and aall recursive arrays to just one array
// accepts depth level

const real_another_array = another_array.flat(Infinity);

console.log(real_another_array);

console.log(Array.isArray("RITESH"));

console.log(Array.from("RITESH"));
// Cannot convert this , need to specify to conert it from keys or values
console.log(Array.from({ firstname: "RITESH" }));

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));
