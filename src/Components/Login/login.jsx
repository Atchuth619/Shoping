import React, { Component } from 'react';
import FormInput from '../FormInput/formInput';

class Login extends Component {
  constructor(props) {
    super(props);
      this.state = {
        email: '',
        password: ''
      }
  }
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
        [name]: value
    })
  }
  handleSave = (event) => {
    event.preventDefault();
      this.setState({ email: '', password: '' })
  }
  render() {
    const { email, password } = this.state;
      return (
        <form onSubmit={this.handleSave}>
          <FormInput 
            name="email"
            type="email"
            value={email}
            label="email"
            required
            handleChange={this.handleChange} 
          />
          <FormInput 
            name="password"
            type="password"
            value={password}
            label="password"
            handleChange={this.handleChange}
            required 
          />
            <button> Save</button>
        </form>
      )
  }
}
export default Login