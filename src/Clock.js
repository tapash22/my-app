import React from "react";
import Form from "./Form";
import Tick from "./Tick";
// import Reservation from "./Reservation";
// import LoginControl from "./LoginController";
// import Numberlist from "./NumberList";
// import Tick from "./Tick";
// import Toggle from "./Toggle";
// import Blog from "./Blog";


// const numbers = [1,2,3,4,5,];
// const posts = [
//     {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
//     {id: 2, title: 'Installation', content: 'You can install React from npm.'}
//   ];

class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state = { date: new Date()}
    }


    componentDidMount(){
        this.timerId = setInterval(()=> this.tick(),1000);
    }

    componentWillUnmount(){
        clearInterval(this.timerId);
    }

    tick(){
        this.setState({
            date: new Date()
        })
    }

    render(h) {
        return(
            <div className="cock">
                <h1>Hi</h1>
                <h2>this is my time zone { this.state.date.toLocaleTimeString()}</h2>
                <Tick />
                <Form />

                
            </div>
        );
    }
}

export default Clock;
