/**Node JS system - share js files 
 * 1.Create a module and to share 
 * 2. NPM - Node Package Manager
 * 3. Core Modules - NodeJS installation
 * 
*/

const hello = (name)=>{
    console.log(`Hello ${name}`)
}

const sayAge = (age)=>{
    console.log(`i am ${age} and im a devlopper`)
}

// module.exports = {
//     a:hello,
//     b:sayAge
// }
module.exports = {
    hello,
    sayAge
}
