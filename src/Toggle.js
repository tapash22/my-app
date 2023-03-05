import React from "react";

class Toggle extends React.Component {
    constructor() {
      super();
      this.state = {isToggleOn: true};
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick() {
      this.setState(i => ({
        isToggleOn: !i.isToggleOn
      }));
    }
  
    render() {
      return (
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>
      );
    }
  }

  export default Toggle;