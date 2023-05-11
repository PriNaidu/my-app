import react from 'react'

export const Greet = (props) =>{
    // console.log(props)
     return(
    <>
        {/* <h1>Functional Component</h1> */}
        <h2>Hiii {props.name} and also {props.heroName}</h2>
        {props.children}
    </>

       
     )
}

export default Greet