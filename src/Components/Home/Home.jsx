import React from 'react'
import Middlebar from '../Middle/Middlebar'
import Navbar from '../Navbar/Navbar'
import Posts from '../Posts/Posts'
import Adoption from '../Posts/Adoption'

import './Home.css'

function Home() {
    return (
        <div>
            <Navbar />
            <Middlebar />
            <Posts />
            <Adoption />
        </div>
    )
}

export default Home