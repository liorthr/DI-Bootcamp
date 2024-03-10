const Article = (props) => {
    console.log(props)
    return (
        <>
        <h1>{props.title}</h1>
        <p>{props.children}</p>
        </>
    )
}

export default Article;