import React, { Component } from 'react';
import FormInput from '../FormInput/formInput';
import CustomButton from '../Custom-Button/customButton';

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
          <>
          <h2>I already have an account</h2>
          <span>Sign in with your email and password</span>
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
            <CustomButton type='submit'> Sign in</CustomButton>
        </form>
        </>
      )
  }
}
export default Login