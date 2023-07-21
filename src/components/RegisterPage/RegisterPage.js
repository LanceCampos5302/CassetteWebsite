import { Component } from 'react';
import './RegisterPage.css';

class RegisterPage extends Component {
    render() {
        return (
            <div className='RegisterBackground'>
                <div className='RegisterBox'>
                <div className='RegisterPageTitle'>Register</div>
                    <div className='RegisterBoxContent'>
                        <div className='RegisterPageInputs'>
                            <div className='RegisterPageInputTitle'>Username</div>
                            <input className='RegisterPageInput' type="text" name="Username" placeholder="Username"/>
                            <div className='RegisterPageInputTitle'>Email Address</div>
                            <input className='RegisterPageInput' type="text" name="Email" placeholder="Email"/>
                            <div className='RegisterPageInputTitle'>Password</div>
                            <input className='RegisterPageInput' type="text" name="Password" placeholder="Password"/>
                            <div className='RegisterPageInputTitle'>Confirm Password</div>
                            <input style={{marginBottom: '2vh'}} className='RegisterPageInput' type="text" name="Confirm Password" placeholder="Confirm Password"/>
                        </div>
                        <button className='RegisterButton RegisterPageInput'>Create Account</button>
                        <a className='RegisterPageLink' href="/Login">Already have an account?</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default RegisterPage;