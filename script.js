//Prompt the user for the pet's name.
let petName = prompt("Name your pet");

//Create variables. Happiness and energy start out at zero
let happiness = 0;
let energy = 0;

//set loop to run 6 times 
for (let i = 0; i <6; i++) {
    //prompt the user for an action: feed, pet, walk.
    let choices = prompt("feed, pet, or walk?");

//keep track of happiness and energy levels. 
    if (choices == "feed") {
        energy+=2;
    } else if (choices=="pet") {
        happiness+=1;
    } else if (choices == "walk" && energy ==0) {
        alert("Not enough energy to enjoy a walk");  
    } else {
        happiness += 2;energy -= 1
    }
}
//At the end, after the six actions, log the pet's name, happiness, and energy level to console
console.log(petName + ' has ' + happiness + ' happiness and ' + energy + ' energy.');

/* The feed option increases energy by 2 .
The pet option increases happiness by 1 .
The walk option increases happiness by 2 but decreases energy by 1 .
If the user chooses "walk" but the energy level is currently at zero, do not increase happiness
or decrease energy. Instead, alert the following message: "Not enough energy to enjoy a
walk."*/

