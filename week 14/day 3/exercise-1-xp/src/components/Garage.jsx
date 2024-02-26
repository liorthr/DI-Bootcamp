const Garage = (props) => {
    const size = {
        s: "small",
        m: "medium",
        l: "large",
        xl: "extra-large"
    }

    const sizeGargae = props.sizegarage

    return (
        <>
        <h3> Who lives in my {size[sizeGargae]} Garage?</h3>
        </>
    )
}

export default Garage