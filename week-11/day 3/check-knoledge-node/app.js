const axios = require('axios')

async function getUser() {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      console.log(response.data.forEach(element => {
        console.log(element.name)
      }));
    } catch (error) {
      console.error(error);
    }
  }
getUser()