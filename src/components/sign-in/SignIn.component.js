import React from 'react';

import FormInput from '../form-input/FormInput.component';
import CustomButton from '../custom-button/CustomButtonComponent';

import { signInWithGoogle } from '../../firebase/firebase.utils';

import './signIn.styles.scss';

class SignIn extends React.Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();

        this.setState({ email: '', password: '' })
    }

    handleChange = (event) => {
        const { value, name } = event.target;
        this.setState({ [name]: value })

    }

    render() {
        return (
            <div className="sign-in">
                <h2>I already have a account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name="email"
                        type="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                        label="email"
                        required />

                    <FormInput
                        name="password"
                        type="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        label="password"
                        required />
                    <div className="buttons">
                        <CustomButton type="submit" >
                            Sign in
                      </CustomButton>
                        <CustomButton isGoogleSignIn={true} onClick={signInWithGoogle} >
                            Sign in with Google
                    </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;