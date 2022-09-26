import React from 'react'
import { useState, useContext } from 'react'
import { FirebaseContext } from '../store/Context';
import './Signup.css'
import { Link, useNavigate } from 'react-router-dom'

function SignUp() {

    const navigate = useNavigate()
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const { firebase } = useContext(FirebaseContext)
    const handleSubmit = (e) => {
        e.preventDefault()

        firebase.auth().createUserWithEmailAndPassword(email, password).then((result) => {
            result.user.updateProfile({ displayName: username }).then(() => {
                firebase.firestore().collection('users').add({
                    id: result.user.uid,
                    username: username,
                    phone: phone
                }).then(navigate("/login"));
            })
        })
    }

    return (
        <div className="wrapper">
            <div className="container">
                <div className="col-left">
                    <div className="login-text">
                        <h2>PETS-WING</h2>
                        <p>Need to find the perfect pet for you and your family? Login to explore..!!
                        </p>
                        <Link className='btn' to="#">Read More</Link>
                        {/* <a className="btn" href="">Read More</a> */}
                    </div>
                </div>
                <div className="col-right">
                    <div className="login-form">
                        <h2>Sign-Up</h2>
                        <form onSubmit={handleSubmit} >
                            <input
                                className="input"
                                type="text"
                                placeholder='Enter your Name'
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                name="name"
                            />
                            <br />
                            <input
                                className="input"
                                type="email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder='Enter your Email'
                            />
                            <br />
                            <input
                                className="input"
                                type="number"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                placeholder='Enter your Contact number'
                                name="phone"
                            />
                            <br />
                            <input
                                className="input"
                                type="password"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder='Enter your Password'
                            />
                            <br />
                            <button className='login-btnz'>SignUp</button>
                            <br />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp