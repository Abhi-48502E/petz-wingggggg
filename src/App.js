import './App.css';
import React, { useEffect, useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './style.scss'
import { FirebaseContext, AuthContext } from './Components/store/Context';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import SignUp from './Components/Signup/SignUp';
import Create from './Components/Create/Create';
import AdoptionCreate from './Components/Create/AdoptionCreate';
import View from './Components/View';
import Post from '././Components/store/PostContext'


function App() {
  const { setUser } = useContext(AuthContext)
  const { firebase } = useContext(FirebaseContext)
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user)
    })
  })


  return (
    <Post>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/create" element={<Create />} />
          <Route path="/adopt-form" element={<AdoptionCreate />} />
          <Route path="/viewpost" element={<View />} />
        </Routes>
      </BrowserRouter>
    </Post>
  );
}
export default App;
