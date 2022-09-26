import React, { useEffect, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Post.css';
import { FirebaseContext } from '../store/Context'
import { PostContext } from '../store/PostContext';
function Posts() {
  const { setPostDetails } = useContext(PostContext)
  const { firebase } = useContext(FirebaseContext)
  const navigation = useNavigate()
  const [pets, setPets] = useState([])
  useEffect(() => {
    firebase.firestore().collection('pets').get().then((snapshot) => {
      const allPost = snapshot.docs.map((pet) => {
        return {
          ...pet.data(),
          id: pet.id
        }
      })
      setPets(allPost)
    })

  }, [])


  return (
    <div className="main-divvvv-post">
      <div className="moreView">
        <div className="heading">
          <span className='hed'>PETS FOR SALE</span>
        </div>
        <div className="cards">
          {pets.map(pet => {
            return <div onClick={() => {
              setPostDetails(pet)
              navigation('/viewpost')
            }} className="card">
              <div className="favorite">
              </div>
              <div className="image">
                <img src={pet.url} alt="" />

              </div>

              <div className="content">
                <p className="name">Name:{pet.name}</p>
                <p className="rate">Price:&#x20B9;{pet.price}</p>
                <span className="sex">sex:{pet.sex}</span><br />
                <span className="sex">location:{pet.location}</span><br />
                <span className="sex">breed:{pet.category}</span>

              </div>
              <div className="date">
                <span className='crdate'>{pet.createdAt}</span>
              </div>
            </div>

          })}
        </div>
      </div>

    </div>
  );
}

export default Posts;
