import React, {useState} from "react";
import {Button, Form} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
//Login Form
const Login = (props) => {
    const [userName, setUserName] = useState(null);
    const [userPassword, setUserPassword] = useState(null);

    const updateUserName = (evt) => {
        const user = evt.target.value;
        setUserName(user);
    }

    const updatePassword = (evt) => {
        const pass = evt.target.value;
        setUserPassword(pass);
    }
    const  submitForm = () => {
        setUserName()
        if(userName && userPassword && userName === 'as4432' && userPassword === '1234') {
            props.isLoginSuccess();
        }
    }
    return(
        <div className="Auth-form-container">
            <form className="Auth-form">
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Sign In (Demo)</h3>
                    <div className="form-group mt-3">
                        <label>Email address</label>
                        <input
                            type="email"
                            className="form-control mt-1"
                            placeholder="Enter email"
                            value={userName}
                            onChange={evt => updateUserName(evt)}
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Password</label>
                        <input
                            type="password"
                            className="form-control mt-1"
                            placeholder="Enter password"
                            value={userPassword}
                            onChange={evt => updatePassword(evt)}
                        />
                    </div>
                    <div className="d-grid gap-2 mt-3">
                        <button type="submit" className="btn btn-primary" onClick={submitForm}>
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Login;