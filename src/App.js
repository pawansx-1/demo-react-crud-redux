import React, { Component } from 'react';

class App extends Component {

    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            name: ''
        }
    }

    handleChange(e){
        this.setState({
            name: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(this.state.name);
    }

    render () {
        let name;
        return (
            <div>
                <h1>Clientside Contacts App</h1>
                <hr />

                <div>
                    <h3>Add Contact Form</h3>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" onChange={this.handleChange} />
                        <input type="submit" />
                    </form>
                </div>
            
            </div>
        )
    }
}

export default App;