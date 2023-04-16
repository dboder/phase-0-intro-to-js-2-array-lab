// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name) // Append To back
}

function destructivelyPrependCat(name) {
    cats.unshift(name) // Append To Front
}

function destructivelyRemoveLastCat() {
    cats.pop() // Remove To Front
}

function destructivelyRemoveFirstCat() {
    cats.shift() // Remove To Front
}

function appendCat (name){
    return [...cats,name];
}

function prependCat (name){
    return [name, ...cats];
}

function removeLastCat() {
    return cats.slice(0, cats.length-1)
}

function removeFirstCat() {
    return cats.slice(1)
}