// Iteration 1: Names and Input

let hacker1 = 'Peter';

console.log(`The driver's name is ${hacker1}`);

let hacker2 = 'Jane';

console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if( hacker1.length < hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if(hacker1.length > hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length}+${hacker2.length} characters!`)
}

// Iteration 3: Loops
for(i = 0; i < hacker1.length; i++) {
    console.log(hacker1[i].toUpperCase())
}
// Iteration 3.1 'Name' to 'N A M E'
let spaceOut = "";
for(i = 0; i < hacker1.length; i++) {
    spaceOut = spaceOut.concat(hacker1[i]," ")
    spaceOut.trim()
}
console.log(spaceOut.toUpperCase());

// Iteration 3.2 'Name' to 'emaN'
let newString ="";
for(let i = hacker1.length - 1; i >= 0; i--){
    newString += hacker1[i];
}
console.log(newString);

// Iteration 3.3 Lexicographic order
if(hacker1 < hacker2){
    console.log(`The driver's name goes first.`)
} else if(hacker2 < hacker1){
    console.log(`Yo, the navigator goes first definitely.`)
} else{
    console.log(`What?! You both have the same name?`)
}

// Bonus 1: Palindromes


// Bonus 2: Lorem ipsum counter
