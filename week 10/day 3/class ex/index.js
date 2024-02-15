// let newuser ={
//     name: "Lior",
//     email: "liorthr@",
//     username: "liorthr"
// }

// fetch('https://users-18kl.onrender.com/users')

const url = 'https://andruxnet-random-famous-quotes.p.rapidapi.com/?cat=movies&count=10';
const options = {
	method: 'POST',
	headers: {
		'X-RapidAPI-Key': 'db968b2843msha045305651672a8p106c75jsnf87bf1c8c53c',
		'X-RapidAPI-Host': 'andruxnet-random-famous-quotes.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
