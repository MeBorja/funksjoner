//Oppgave 1
//Function er laget for at vi kan forkorte linjer med koder og vi kan bruke linjene i functionen hvor enn vi vil.

//Oppgave 2
// A)
function helloWrld () {
    // function navn (parametere)
    console.log("Hello World!")
}
// B)

// C)
helloWrld();

//Oppgave 3
// Parameter er et variabel som blir laget i funksjonen og dør i funksjonet
function param (a, b) {
    console.log("Svaret blir ", a + b)
}

param(2, 5);

//Oppgave 4
function idk (d) {
    console.log("Min parameter er ", d)
}
idk("bla bla");

//Oppgave 5
function FUNK(D, e) {
    console.log("Jeg er to parametere ", D, "og ", e)
}
FUNK("123", "abc");

//Oppgave 6
//The return statement ends function execution and specifies a value to be returned to the function caller. 
//src: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return

//Oppgave 7
let x = return2(2, 5);
function return2 (tall1, tall2) {
    return tall1 * tall2;
}
return2();

//Oppgave 8
let tall3 = prompt("How many names are you going to write down?");
for (let i = 0; i < tall3; i++) {
    let person = prompt("Please enter your name.");
    console.log(person);
  }