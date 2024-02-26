import { useState } from 'react'

function App() {
  const [languages, setLanguages] = useState([
    {name: "Php", votes: 0},
    {name: "Python", votes: 0},
    {name: "JavaSript", votes: 0},
    {name: "Java", votes: 0}
  ])

  const handleVote = (index) => {
    // Create a copy of the languages array to avoid mutating the state directly
    const newLanguages = [...languages];
    // Increment the votes for the selected language
    newLanguages[index].votes++;
    // Update the state with the new array
    setLanguages(newLanguages);
  };

  return (
    <div>
      {languages.map((language, index) => (
        <button style={
          {
            display: "flex",
            margin: "10px",
            padding: "20px",
            backgroundColor: "orange"
          }
        } key={index} onClick={() => handleVote(index)}>
          {language.name} - Score: {language.votes}
        </button>
      ))}
    </div>
  );
}

export default App
