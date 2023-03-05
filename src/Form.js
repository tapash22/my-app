import React from "react";

class Form extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: '',value1:''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(e) {
      this.setState({value: e.target.value, value1:e.target.value1});
    }
  
    handleSubmit(e) {
      alert('A name was submitted: ' + this.state.value +'text'+this.state.value1);
      e.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:</label><br/>
            <input type="text" value={this.state.value} onChange={this.handleChange} />

            <label>Message</label><br/>
            <textarea value={this.state.value1} onChange={this.handleChange}>
                <br/>
            </textarea>
          <br/>
          <button type="submit" >submit</button>
        </form>
      );
    }
  }

  export default Form;