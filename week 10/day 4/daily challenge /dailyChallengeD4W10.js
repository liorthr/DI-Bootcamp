async function displayGif(){
    const apiKey = 'hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My';
    const url = `https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=${apiKey}`;
    try {
        const response = await
        fetch(url,{
            method : "GET",
            
        })
        
    } catch (error) {
        
    }
}