const prompt = require("prompt-sync")({sigint:true});

let adj1 = ["Grey", "Pink", "Blue", "Green", "Red", "Super Rare", "Rare", "Scaly", "Slimy", "Big"];
let adj2 = ["Bottom-dwelling", "Big mouthed", "Splippery", "Shiny", "Luminescent", "Fat", "Smelly", "Deepsea", "White-bellied", "Saltwater"];
let fish = ["Grouper", "Swordfish", "Angler", "Bass", "Salmon", "Tuna", "Snapper", "Cod", "Mackerel", "Eel"];

let fishArray = [];
let bucket = [];


console.log("\nYou've gone fishing!\n");
console.log("Try to maximize the value of your caught fish.");
console.log("You can fish for six hours (till 12:00pm) and can catch at most 10 lbs of fish.\n");

console.log("=================================================\n");

console.log("Do you want to start fishing?\n");

let start = prompt("[Y]es or [N]o >");

if (start !== "Y" && start !== "y"){
    console.log("\n=================================================\n");
    console.log("~Goodbye~\n");
} else {
    console.log("\n=================================================\n");
    console.log("The time is 6:00am. So far you've caught:\n");
    console.log("0 fish, 0 lbs, $0.00\n");
    let ans = prompt("Go fishing? [Y]es or [N]o >");
    if (ans !== "Y" && ans !== "y"){
        console.log("\n=================================================\n");
        console.log("~Goodbye~\n");
    } else {          
            console.log("\n* * *\n");
            
            console.log(fishList());
            

            for (let count = 0; count < 6; count++){
                console.log(`You caught a ${fishArray[count].name} weighing ${fishArray[count].weight}lbs with the value of $${fishArray[count].value}!`);

                //prompt()

            }

            // console.log(`You caught a ${fishArray[0].name} weighing ${fishArray[0].weight}lbs with the value of $${fishArray[0].value}!`);
            
            //let action =  prompt("Do you want to [k]eep or [r]elease?");
        }
    }







//functions:
// function weight(){
//     let random = (Math.random()*1000)/100;
//     let weight = Number(random.toFixed(2));
//     return weight;
// }

// function value(){
//     let random = (Math.random()*1000)/100;
//     let value = Number(random.toFixed(2));
//     return value;
// 

function fishList(){
    for(let count = 0; count < 6; count++){
        let randomiser = Math.floor(Math.random() * 10);
        let random = (Math.random()*1000)/300;
        let random2 = (Math.random()*1000)/300;
        let weight = Number(random.toFixed(2));
        let value = Number(random2.toFixed(2));

        let fishcount = {
            name: `${adj1[randomiser]} ${adj2[randomiser]} ${fish[randomiser]}`,
            weight: weight,
            value: value
        }

        fishArray.push(fishcount);
    }
    
    return fishArray;
}

//console.log(fishList());