import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import { AuthContext, FirebaseContext } from '../store/Context'
import './Create.css'

function Create() {

    const Navigation = useNavigate()
    const { firebase } = useContext(FirebaseContext)
    const { user } = useContext(AuthContext)
    const [name, setName] = useState('')
    const [category, setCategory] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [image, setImage] = useState('')
    const [sex, setSex] = useState('')
    const [location, setLocation] = useState('')

    const date = new Date()



    const handleSubmit = () => {
        firebase.storage().ref(`/image/${image.name}`).put(image).then(({ ref }) => {
            ref.getDownloadURL().then((url) => {
                console.log(url)
                firebase.firestore().collection('pets').add({
                    name,
                    category,
                    price,
                    sex,
                    location,
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
                        value={name}
                        onChange={(e) => setName(e.target.value)}
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
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        id="fname"
                        name="category"
                        placeholder='Category or breed'
                    />

                    <br />

                    <br />
                    <input
                        className="inputzz"
                        type="text"
                        value={sex}
                        onChange={(e) => setSex(e.target.value)}
                        id="fname"
                        name="category"
                        placeholder='Male or Female'
                    />
                    <br />
                    <br />
                    <input
                        className="inputzz"
                        type="sex"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        id="fname"
                        name="category"
                        placeholder='your location'
                    />

                    <br />

                    <br />
                    <input
                        className="inputzz"
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        id="fname"
                        name="description"
                        placeholder='describe about your pet details'
                    />

                    <br />

                    <br />
                    <input className="inputzz"
                        type="number"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        id="fname"
                        placeholder='Price'
                        name="Price" />
                    <br />
                    <br />
                    <img alt="Posts" width="200px" height="200px" src={image ? URL.createObjectURL(image) : ''}></img>
                    <br />
                    <input onChange={(e) => {
                        setImage(e.target.files[0])
                    }} type="file" />
                    <br />
                    <button className="uploadBtn" onClick={handleSubmit}>Upload</button>
                </div>
            </card>
        </div>
    )
}

export default Create