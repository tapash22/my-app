import React from "react";
class Reservation extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        username: '',
        name:'',
        email:''
      };
  
      this.handleInputChange = this.handleInputChange.bind(this);
    }
  
    handleInputChange(event) {
      const target = event.target;
      const value = target.value;
      const name = target.name;
  
      this.setState({
        [name]: value
      });
    }

    // handleSubmit(e){
    //     e.preventDefault();
    //     console.log(this.setState);
    // }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
            <label>
            User name
            <input
              name="username"
              type="text"
              value={this.state.username}
              onChange={this.handleInputChange} />
          </label>
          <label>
            Name
            <input
              name="name"
              type="text"
              value={this.state.name}
              onChange={this.handleInputChange} />
          </label>
          <br />
          <label>
            email
            <input
              name="email"
              type="email"
              value={this.state.email}
              onChange={this.handleInputChange} />
          </label>

          <button type="submit">submit</button>
        </form>
      );
    }
  }
  

  export default Reservation;