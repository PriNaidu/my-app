import react from 'react'

export const Greet = (props) =>{
    const {name, heroName} = props
    // console.log(props)
     return(
    <>
        {/* <h1>Functional Component</h1> */}
        <h2>Hiii {name} and also {heroName}</h2>

    </>

       
     )
}

export default Greet