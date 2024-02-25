const Hello = () =>{

    const tabl = [
        {name: "Jhon", age:22, sexe:"Male"},
        {name: "Poulet", age:30, sexe:"Male"},
        {name: "Conco", age:32, sexe:"Male"},
        {name: "Shanna", age:21, sexe:"Femelle"},
    ]
    return (
        <>
        <h1>List of name</h1>
        {
            tabl.map((item)=>{
                return <> {item.name} à {item.age} ans.</>
            })
        }
        </>
    )
}

export default Hello