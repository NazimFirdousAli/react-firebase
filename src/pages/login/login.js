import React from 'react'
import { useState } from 'react'
import adduser from '../../firebase'
import firebaseInstance from '../../firebase'
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from "react-router-dom";

import './login.css'



import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const initialState = {
    email: '',
    password: ''
}
function Login() {

    const [formValue, setFormValue] = useState(initialState)
    const history = useHistory()
    const onHandleChange = (e) => {
        setFormValue({ ...formValue, [e.target.name]: e.target.value })

    }

    const onFormSubmit = async (event) => {
        event.preventDefault()
        try {
            const a = await firebaseInstance.login(formValue)
            toast.success("Login Successfully")
            console.log(localStorage.getItem("token"))
            // setTimeout(() => {
            //     if (a && localStorage.getItem("token")) {
            //         history.push('/posts')
            //     }
            // }, 5000);
        }
        catch (err) {
            console.log(err)
            toast.error("Login Failed")
        }

    }
    return (
        <div className="Auth-form-container">
            <ToastContainer />

            <form onSubmit={onFormSubmit} className="Auth-form">
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Sign In</h3>
                    <div className="form-group mt-3">
                        <label>Email address</label>
                        <input
                            type="email"
                            className="form-control mt-1"
                            placeholder="Enter email"
                            name='email'
                            onChange={onHandleChange}

                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Password</label>
                        <input
                            type="password"
                            name='password'
                            onChange={onHandleChange}
                            className="form-control mt-1"
                            placeholder="Enter password"
                        />
                    </div>
                    <div className="d-grid gap-2 mt-3">
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </div>
                    <p className="forgot-password  mt-2">
                        Have no account? <a href="/signup">Signup</a>
                    </p>
                </div>
            </form>
        </div>
    )
}

export default Login