function compareToTen(num){
    return new Promise((resolve, reject) => {
        if(num <= 10){
            resolve()
        }else{
            reject()
        }
    })
}

console.log(compareToTen(15)
  .then(result => console.log(result))
  .catch(error => console.log(error)))