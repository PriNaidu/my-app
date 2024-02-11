import { useState, react } from "react"

export const Greet = (props) => {

    const [input, setInput] = useState();

    const { name, heroName } = props
    // console.log(props)
    return (
        <>
            {/* <p>Props </p> */}
            {/* <h1>Functional Component</h1> */}
            {/* <h2>Hiii {name} and also {heroName}</h2> */}
            <input type="text">
                <div>
                    Example of props
                </div>
            </input>
        </>


    )
}

export default Greet