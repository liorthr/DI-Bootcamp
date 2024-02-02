// async function displayGif(){
//     const apiKey = 'hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My';
//     const url = `https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=${apiKey}`;
//     try {
//         const response = await
//         fetch(url,{
//             method : "GET",
            
//         })
        
//     } catch (error) {
        
//     }
// }

// fetch('https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My')
//    .then(res=>{
//     if(res.ok){
//      return res.json()
//    }})
//    .then(data=>console.log(data))
//    .catch(error=>console.error("Error",error))


//SOLUTION->



// async function fetchRandomGif() {
//     const searchQuery = document.getElementById("searchQuery").value.trim();
//     if (!searchQuery) {
//         console.error('Search query is empty or undefined.');
//         return; // Exit function if searchQuery is empty or undefined
//     }

//     const apiKey = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My"; 
//     const endpoint = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=${searchQuery}&rating=g`;

//     try {
//         const response = await fetch(endpoint);
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         const data = await response.json();
//         const gifContainer = document.getElementById("gifContainer");
//         gifContainer.innerHTML = `<img src="${data.data.image_original_url}" alt="${data.data.title}">`;
//     } catch (error) {
//         console.error('There was a problem with the fetch operation:', error);
//     }
// }


