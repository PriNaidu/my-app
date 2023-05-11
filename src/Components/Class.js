import React , { Component } from 'react'

class Class extends Component{
   render(){
    return(
  <>
        <h1> Hii {this.props.name} and aslo {this.props.heroName}</h1>
        {this.props.children}
  </>
    )
} 
}
export default Class