let client = "Betty";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "35$",
    other : {
        paid : false ,
        meansOfPayment : ["cash", "creditCard"]
    }
}

//--------------------------------------------//

let display = displayGroceries=>{
    groceries.fruits.forEach(element => {
        console.log(element)      
    });
}
//display()

function cloneGroceries(){
    let user = client
    //beacause it's a copy 
    //console.log(user + " and " + client)
    let shopping = {...groceries}
    console.log(JSON.stringify(shopping) + " and " + JSON.stringify(groceries) )
}
cloneGroceries()