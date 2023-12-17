/*for (let i = 0; i < 15; i++) {
    if (i % 2 == 0){
        console.log(i + " is even")
    }else{
        console.log(i + " is odd")
    }
}*/

/*let colors = ["blue", "yellow", "red"];

for (let x in colors) {
   console.log(x); //0 1 2
   console.log(colors[x]) //blue yellow red
}*/

/*let food = { bassarie: "hamburger", bassari:"couscous", off:"crispy", halavi:"golda"}
for (let number in food){
    
    console.log(food[number]) 
}*/

let name = ["jhon", "david", 23, "Dan", 32]

for (let i of name){
    if(typeof name[i] !== "string" ){
        continue
    }else{
        if(name[i][0]==/*uppercase*/)
        continue
    }else{
        name[i][0].toUpperCase
    }
    
}