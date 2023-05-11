import react, {Component} from 'react'

class Message extends Component{
    constructor(){
        super() 
            this.state = {
          
            message: "Welcome Visitor"
        }
    }
    changeMessage(){
       this.setState({
        message: "Its changed"
       } )
    }

    render(){
        return(
            <>
            <h1 >{this.state.message}</h1>
            <button onClick={() => this.changeMessage()}>Click me</button>
            </>
        )
    }
}
export default Message