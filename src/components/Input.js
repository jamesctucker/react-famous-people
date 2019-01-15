import React, { Component } from 'react';

class Input extends Component {
        constructor(props) {
          super(props);
          this.state = {name: '', role: ''};
        }
    nameChange = (event) => {
        console.log(event.target.value);
        this.setState({name: event.target.value});
    }
    roleChange = (event) => {
        console.log(event.target.value);
        this.setState({role: event.target.value});
    }

    submit = (event) => {
        console.log(`name: ${this.state.name}, role: ${this.state.role}`)
    }

    render() {
		return (
            <div>
			<input onChange={this.nameChange} placeholder="Name"/>
            <input onChange={this.roleChange} placeholder="Role"/>  
            <button onClick={this.submit}>Submit</button>
            <p> {this.state.name} is famous for {this.state.role}</p>
            </div>
        )                     
	}
}

export default Input;
