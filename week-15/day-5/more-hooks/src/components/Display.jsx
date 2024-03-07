import ShowCounter from "./ShowCounter";

const Display = (props) => {
    return(
        <>
        <h2>Display</h2>
        <ShowCounter countDisplay={props.countApp}/>
        </>
    )
}
export default Display;