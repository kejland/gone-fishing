const prompt = require("prompt-sync")({sigint:true});

let adj1 = ["Grey", "Pink", "Blue", "Green", "Red", "Super Rare", "Rare", "Scaly", "Slimy", "Big"];
let adj2 = ["Bottom-dwelling", "Big mouthed", "Splippery", "Shiny", "Luminescent", "Fat", "Smelly", "Deepsea", "White-bellied", "Saltwater"];
let fish = ["Grouper", "Swordfish", "Angler", "Bass", "Salmon", "Tuna", "Snapper", "Cod", "Mackerel", "Eel"];

let fishArray = [];
let bucket = [];
let totalWeight = 0;
let totalValue = 0;

let count = 0;

console.log("\nYou've gone fishing!\n");
console.log("Try to maximize the value of your caught fish.");
console.log("You can fish for six hours (till 12:00pm) and can catch at most 10 lbs of fish.\n");

console.log("=================================================\n");



function beginning(){
    console.log("Do you want to start fishing?\n");
    let start = prompt("[Y]es or [N]o >"); 

    if (start === "N" || start === "n"){
        //ending();
    } else if (start === "Y" || start === "y"){
        fishList();
        //console.log(fishList());

        let exitLoop = false;
        while (count < 6){

            console.log("\n=================================================\n");
            console.log(`The time is ${count + 6}:00am. So far you've caught:\n`);
            console.log(`${bucket.length} fish, ${totalWeight} lbs, $${totalValue} \n`);
            

            goFishing();

            function goFishing(){
                let ans = prompt("Go fishing? [Y]es or [N]o >");

                if (ans === "N" || ans === "n"){
                    exitLoop = true;

                } else if (ans === "Y" || ans === "y"){          
                    console.log("\n* * *\n");
        
                    console.log(`You caught a ${fishArray[count].name} weighing ${fishArray[count].weight}lbs with the value of $${fishArray[count].value}!`);
        
                    if (totalWeight + fishArray[count].weight > 10){
                        console.log("This fish would put you over 10 lbs, so you release it.\nPress [enter] to continue.\n>")
                    } else {
                        keepCatch();
        
                    }
        
                } else {
                    console.log("\n***\n");
                    console.log("You have entered an invalid input\nPlease try again\n");
                    goFishing();
                }
                return choice;
            }
            
            count++;
            
            if (exitLoop === true){
                break;
            }
        } 
    } else {
        console.log("\n***\n");
        console.log("You have entered an invalid input\nPlease try again\n");
        beginning();
    }
    
}

beginning();

ending();

function ending(){
    if (count < 6){
        console.log("\n=================================================\n");
        console.log(`\nYou caught a total of: ${bucket.length} fish\n`);
        for (let i = 0; i < bucket.length; i++){
            console.log(`* ${bucket[i].name}, ${bucket[i].weight}, ${bucket[i].value}`)
        }
        console.log(`\nTotal Weight: ${totalWeight} \nTotal Value: ${totalValue}`);
        
        console.log("\n***\n");
        console.log("~Goodbye~\n");
    } else {
        console.log("\n=================================================\n");
        console.log("The time is 12:00pm. Times up!")
        console.log(`\nYou caught a total of: ${bucket.length} fish\n`);
        for (let i = 0; i < bucket.length; i++){
            console.log(`* ${bucket[i].name}, ${bucket[i].weight}, ${bucket[i].value}`)
        }
        console.log(`\nTotal Weight: ${totalWeight} \nTotal Value: ${totalValue}`);
        console.log("\n***\n");
        console.log("~Goodbye~\n");     
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

function keepCatch(choice){
    let action =  prompt("Do you want to [k]eep or [r]elease? >");

    if (action === "k" || action === "K"){
        bucket.push(fishArray[count]);

        // totalWeight += fishArray[count].weight;
        // totalWeight.toFixed(2);

        // totalValue += fishArray[count].value;
        // totalWeight.toFixed(2);

        //I keep get lots of decimals with the above for some reason...

        totalWeight = 0;
        totalValue = 0;

        for (let i = 0; i < bucket.length; i++){ 
            totalWeight += bucket[i].weight;
        }

        for (let i = 0; i < bucket.length; i++){
            totalValue += bucket[i].value;
        }

        totalWeight.toFixed(2);
        totalValue.toFixed(2);

        console.log(`\n You chose to put this fish in your bucket`);
    } else if (action === "r" || action === "R"){
        console.log(`\n You chose to release this fish`)
    } else {
        console.log("You have entered an invalid option\n\nPlease choose again");
        keepCatch();
    }

    return choice;
}