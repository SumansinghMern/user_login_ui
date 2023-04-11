import { useState,useEffect } from "react";



import Input from '../../components/Input/Input'

const Login = (props) => {

    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');

    let inputChangeHandler = (input,value) => {
        console.log(input,value,"ppppppp")
        switch (input) {
            case 'email':
                setEmail(value)
                break;
            case 'password':
                setPassword(value)
                break;
        
            default:
                break;
        }
    }

    return (
        <form
          onSubmit={e =>
            props.onLogin(e, {
              email: email,
              password: password
            })
          }
        >
          <Input
            id="email"
            label="Your E-Mail"
            type="email"
            control="input"
            onChange={inputChangeHandler}
            value={email}
            // valid={this.state.loginForm['email'].valid}
            // touched={this.state.loginForm['email'].touched}
          />
          <Input
            id="password"
            label="Password"
            type="password"
            control="input"
            onChange={inputChangeHandler}
            // onBlur={this.inputBlurHandler.bind(this, 'password')}
            value={password}
            // valid={this.state.loginForm['password'].valid}
            // touched={this.state.loginForm['password'].touched}
          />

          {/* <Button design="raised" type="submit" loading={this.props.loading}>
            Login
          </Button> */}
        </form>
    )
}

export default Login