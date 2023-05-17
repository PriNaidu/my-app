import React , { Component } from 'react'

class Class extends Component{
   render(){

    const {name , heroName} = this.props
    return(
  <>
        <h1> Hii {name} and aslo {heroName}</h1>
        {this.props.children}
    </>
    )
} 
}
export default Class