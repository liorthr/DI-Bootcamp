// EXERCISE 1
// ------1------
// const fruits = ["apple", "orange"];
// const vegetables = ["carrot", "potato"];

// const result = ['bread', ...vegetables, 'chicken', ...fruits];
// console.log(result);

//outpout: [result,carrot,potato,chicken,apple,orange]

// ------2------
// const country = "USA";
// console.log([...country]);

//outpout: USA

// ------Bonus------
// let newArray = [...[,,]];
// console.log(newArray);

//outpout: []

//-----------------------------------

//EXERCISE 2

// const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
//              { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
//              { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
//              { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
//              { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
//              { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
//              { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];
    
//part 1
// const welcomeStudents = users.map((element)=>{
//     return "Hello " + element.firstName
// })
// console.log(welcomeStudents)

//part 2
//(classic function)
// const onlyFullStackResidents = users.filter(checkResident);
// function checkResident(user){
//     return user.role === "Full Stack Resident"
// }
// console.log(onlyFullStackResidents) 

//(one line function)
// const onlyFullStackResidents = users.filter((element)=>{return element.role === "Full Stack Resident"})
// console.log(onlyFullStackResidents)

//-----------------------------------

//EXERCISE 3


// const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

// let singleString = '';
// singleString = epic.reduce((a,b)=> {return a + " " + b});
// console.log(singleString)

//-----------------------------------

//EXERCISE 4

// const students = [{name: "Ray", course: "Computer Science", isPassed: true}, 
//                {name: "Liam", course: "Computer Science", isPassed: false}, 
//                {name: "Jenner", course: "Information Technology", isPassed: true}, 
//                {name: "Marco", course: "Robotics", isPassed: true}, 
//                {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
//                {name: "Jamie", course: "Big Data", isPassed: false}];

//Part 1
// let passedStudents = [];
// passedStudents = students.filter((student)=>{return student.isPassed === true})
// console.log(passedStudents)

//Part 2
// let messageToStudents = [];
// messageToStudents=students.filter((student)=>{return student.isPassed === true})
// messageToStudents.forEach((student) => {
//     return messageToStudents.push(`Good Job ${student.name} you passed the course in ${student.course}`)
    
// });
// console.log(messageToStudents)
 
