// Author: Connor Wilkins
// Version: 1.0.0
// Date: 2025-11-21
// Fileoverview: This program will take the users 
// input and display the correct change from toonies, dollars. quarters, dimes, 
// nickles and then cents

//variables
let centS: string;


// getting the user input

centS = prompt("Enter the amount of change in cents: ") || "no number entered";

let cents: number = parseInt(centS);

// Count denominations

const toonies: number = Math.floor(cents / 200);
cents = cents % 200;

const dollars: number = Math.floor(cents / 100);
cents = cents % 100;

const quarters: number = Math.floor(cents / 25);
cents = cents % 25;

const dimes: number = Math.floor(cents / 10);
cents = cents % 10;

const nickels: number = Math.floor(cents / 5);
cents = cents % 5;

const pennies: number = cents;

// displaying results
console.log(
  `Your change is: ${toonies} toonies, ${dollars} dollars, ${quarters} quarters, ${dimes} dimes, ${nickels} nickels and ${pennies} cents.`
);

