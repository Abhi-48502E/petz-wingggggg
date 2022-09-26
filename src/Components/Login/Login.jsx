import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { FirebaseContext } from '../store/Context'
import './Login.css'

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { firebase } = useContext(FirebaseContext)
    const navigate = useNavigate()




    const handleLogin = (e) => {
        e.preventDefault()
        firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
            navigate('/')
        }).catch((error) => {
            alert(error.message)

        })

    }



    return (
        <div className="wrapper">
            <div className="container">
                <div className="col-left">
                    <div className="login-text">
                        <h2>Logo</h2>
                        <p>Need to find the perfect pet for you and your family? Login to explore..!!
                        </p>
                        <Link className='btn' to="">Read More</Link>
                        {/* <a className="btn" href="">Read More</a> */}
                    </div>
                </div>

                <div className="col-right">
                    <div className="login-form">
                        <h2>Login</h2>
                        <form onSubmit={handleLogin}>
                            <p>
                                <input type="text"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required />
                            </p>
                            <p>
                                <input type="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required />
                            </p>
                            <p>
                                <button className='login-btn'>SignIn</button>
                            </p>
                            <p>
                                <Link to="#">Forgot Password?</Link>
                                <Link to="/signup">Create an Account.</Link>
                                {/* <a>Forget password?</a>
                                <a>Create an account.</a> */}
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login