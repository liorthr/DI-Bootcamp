/**
 * 1. simulateAsyncOperation function return a Promise with data as
 * Array of objects from server as json
  const arr = [
         { username: "aaa", email: "aaa@gmail.com" },
         { username: "bbb", email: "bbb@gmail.com" },
         { username: "ccc", email: "ccc@gmail.com" },
       ];
 * Simulate successful completion after 2 seconds
 * 2. Call this function and log the data as an Array datatype
 * 3. Simulate an error
 * 4. return to step 2, and create render function that will di
display the users on the page
*/

const arr = [
    { username: "aaa", email: "aaa@gmail.com" },
    { username: "bbb", email: "bbb@gmail.com" },
    { username: "ccc", email: "ccc@gmail.com" },
  ];

//1
function simulateAsyncOperation(){
    return new Promise((resolve, reject) => {
        
    })
}

simulateAsyncOperation()