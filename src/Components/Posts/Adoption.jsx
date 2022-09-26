import React, { useEffect, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Post.css';
import { FirebaseContext } from '../store/Context'
function Posts() {
    const { firebase } = useContext(FirebaseContext)
    const navigation = useNavigate()
    const [adoptpets, setadoptPets] = useState([])
    useEffect(() => {
        firebase.firestore().collection('adoptpets').get().then((snapshot) => {
            const allPost = snapshot.docs.map((adoptpet) => {
                return {
                    ...adoptpet.data(),
                    id: adoptpet.id
                }
            })
            setadoptPets(allPost)
        })

    }, [])


    return (
        <div className="main-divvvv-post">
            <div className="moreView">
                <div className="heading">
                    <span className='hed'>PETS FOR ADOPTION</span>
                </div>
                <div className="cards">
                    {adoptpets.map(adoptpet => {
                        return <div className="card">
                            <div className="favorite">
                            </div>
                            <div className="image">
                                <img src={adoptpet.url} alt="" />

                            </div>

                            <div className="content">
                                <p className="name">Name:{adoptpet.names}</p>
                                <span className="sex">sex:{adoptpet.sexs}</span><br />
                                <span className="sex">location:{adoptpet.locations}</span><br />
                                <span className="sex">breed:{adoptpet.categorys}</span>

                            </div>
                            <div className="date">
                                <span className='crdate'>{adoptpet.createdAt}</span>
                            </div>
                        </div>

                    })}


                </div>
            </div>

        </div>
    );
}

export default Posts;
