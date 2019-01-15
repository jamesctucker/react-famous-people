import React, { Component } from 'react';

class Famous extends Component {
    constructor(props) {
      super(props);
      this.state = {name: '', role: ''};
    }
    render() {
      return ( <div>
        <p>Famous Person: {this.state.name} {this.state.role}</p>
      </div> ) ;
    }
  }

  export default Famous;