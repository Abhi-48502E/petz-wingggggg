import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import { AuthContext, FirebaseContext } from '../store/Context'
import './Create.css'

function Create() {

    const Navigation = useNavigate()
    const { firebase } = useContext(FirebaseContext)
    const { user } = useContext(AuthContext)
    const [names, setNames] = useState('')
    const [categorys, setCategorys] = useState('')
    const [descriptions, setDescriptions] = useState('')
    const [images, setImages] = useState('')
    const [sexs, setSexs] = useState('')
    const [locations, setLocations] = useState('')

    const date = new Date()



    const handleSubmit = () => {
        firebase.storage().ref(`/imagesAdoption/${images.name}`).put(images).then(({ ref }) => {
            ref.getDownloadURL().then((url) => {
                console.log(url)
                firebase.firestore().collection('adoptpets').add({
                    names,
                    categorys,
                    sexs,
                    locations,
                    url,
                    userId: user.uid,
                    createdAt: date.toDateString()
                })
                Navigation('/')
            })
        })



    }


    return (
        <div className='cr-div'>
            <Navbar />

            <img className='dog-bg' src="/assets/dog.jpg" alt="" />

            <card>
                <div className="centerDiv">
                    <br />
                    <input
                        className="inputzz"
                        value={names}
                        onChange={(e) => setNames(e.target.value)}
                        type="text"
                        placeholder='Name'
                        id="fname"
                        name="Name"
                    />
                    <br />
                    <br />
                    <input
                        className="inputzz"
                        type="text"
                        value={categorys}
                        onChange={(e) => setCategorys(e.target.value)}
                        id="fname"
                        name="category"
                        placeholder='Category or breed'
                    />

                    <br />

                    <br />
                    <input
                        className="inputzz"
                        type="text"
                        value={sexs}
                        onChange={(e) => setSexs(e.target.value)}
                        id="fname"
                        name="category"
                        placeholder='Male or Female'
                    />
                    <br />
                    <br />
                    <input
                        className="inputzz"
                        type="sex"
                        value={locations}
                        onChange={(e) => setLocations(e.target.value)}
                        id="fname"
                        name="category"
                        placeholder='your location'
                    />

                    <br />

                    <br />
                    <input
                        className="inputzz"
                        type="text"
                        value={descriptions}
                        onChange={(e) => setDescriptions(e.target.value)}
                        id="fname"
                        name="description"
                        placeholder='describe about your pet details'
                    />


                    <br />
                    <br />
                    <img alt="Posts" width="200px" height="200px" src={images ? URL.createObjectURL(images) : ''}></img>
                    <br />
                    <input onChange={(e) => {
                        setImages(e.target.files[0])
                    }} type="file" />
                    <br />
                    <button className="uploadBtn" onClick={handleSubmit}>Upload</button>
                </div>
            </card>
        </div>
    )
}

export default Create