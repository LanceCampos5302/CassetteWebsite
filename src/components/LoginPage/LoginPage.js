import React, { Component } from 'react';
import './LoginPage.css';

class LoginPage extends Component {
    render() {
        return (
            <div className='LoginBackground'>
                <div className='LoginBox'>
                <div className='LoginPageTitle'>Login</div>
                    <div className='LoginBoxContent'>
                        <div className='LoginPageInputs'>
                            <div className='LoginPageInputTitle'>Email Address</div>
                            <input className='LoginPageInput' type="text" name="Email" placeholder="Email"/>
                            <div className='LoginPageInputTitle'>Password</div>
                            <input className='LoginPageInput' type="text" name="Password" placeholder="Password"/>
                            <div className='LoginPageInput'>
                                <input className='RememberCheck' style={{marginRight: '0.35vw'}} type="checkbox" id="RememberCheckbox" name="RememberCheckbox" value="checkboxValue"/>
                                <label for="myCheckbox">Remember Me</label>
                            </div>
                        </div>
                        <button className='LoginButton LoginPageInput'>Login</button>
                        <a className='LoginPageLink' style={{marginBottom: '1vh'}} href="/ForgotPassword">Forgot Password</a>
                        <a className='LoginPageLink' href="/Register">Create Account</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginPage;