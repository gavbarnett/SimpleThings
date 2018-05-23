/* 
Concepts:

Joseph Campbell's - Hero Journey
    0. Ordinary World
    1. Call to Adventure
    2. Assistance
    3. Departure
    -------------
    4. Trials
    5. Approach
    6. Crisis
    7. Treasure
    8. Result
    -------------
    9. Return
    10. New life
    11. Resolution
    12 --> 0

*/
var thestory = new Story();

function Story () {
    //model of the world
    this.JC_value = 0; //Joseph Campbell value
    this.choices = ["Open your eyes"]
    this.location = "Forest"
    this.weather = "Sunny"
    var itemCount = 3;
    this.items = [];
    for (i = 0; i<itemCount; i++){
        this.items.push(randItem())
    } 
    this.money = Math.round(Math.random()*100)
    this.nextline = function (decision) {
        if (!decision) {
            appendParagraphs ("Whether you shall turn out to be the hero of your life, or whether that station will be held by anybody else, these pages must show."); //Thank you David Copperfield
            appendChoice (this.choices)
        } else {
            appendParagraphs("You look around. You are lost in this " + this.location + ".")
            appendChoice (this.choices)  
        }
        
    }
}

function randItem () {
    var itemArray = [];
    itemArray.push({
        name: "bread",
        edible: true,
        energy: 20+Math.floor(Math.random()*10),
        weight: 500+Math.floor(Math.random()*100),
        strength: 5+Math.floor(Math.random()*5)
    });
    itemArray.push({
        name: "stick",
        edible: false,
        energy: 0,
        weight: 400+Math.floor(Math.random()*200),
        strength: 50+Math.floor(Math.random()*100)
    });
    itemArray.push({
        name: "axe",
        edible: false,
        energy: 0,
        weight: 1000+Math.floor(Math.random()*700),
        strength: 300+Math.floor(Math.random()*200)
    });
    itemArray.push({
        name: "rope",
        edible: false,
        energy: 0,
        weight: 500+Math.floor(Math.random()*50),
        strength: 200+Math.floor(Math.random()*100)
    });

    return itemArray[Math.floor(Math.random()*itemArray.length)];
}