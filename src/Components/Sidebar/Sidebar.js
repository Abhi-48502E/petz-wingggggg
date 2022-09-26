import React from 'react'
import { GiSniffingDog } from 'react-icons/gi';
import { BsFillChatRightFill } from 'react-icons/bs';
import { BiMoviePlay } from 'react-icons/bi';
import { CgDetailsMore } from 'react-icons/cg';
import { BsFillBookmarkStarFill } from 'react-icons/bs';
import { BsInfoSquareFill } from 'react-icons/bs';
import { BsFillQuestionSquareFill } from 'react-icons/bs';
import { GiStickSplitting } from 'react-icons/gi';
import CarouselResponsive from '../CarouselBS/CarouselResponsive'


import './Sidebar.css'
import { Link } from 'react-router-dom';

function Sidebar() {
    return (
        <div className="mainsidebar-top">
            <h1 className='App-name'>CONNECT-PETZ</h1>
            <p className='parahh'>Are You Looking For Pet Shops Near You? Call Us - 7597972222,

                If you are searching for cute dogs to buy in India then you come to <br /> the right  place! We provide KCI-certified puppies in India for sale at <br /> an affordable cost near you.
                We connect India's best dog breeders and provide healthy and purebred puppies online in India with complete <br /> health check-ups and vaccinations.
                Mr n Mrs Pet is India's most ethical place to buy and sell dogs and puppies near you.
                Most popular free <br /> pet advertising and the number one source of information for pets lovers in India.</p>

            <img className='side-imagee' src='assets/carousel/8.jpg' alt="" />

            <hr className='sidebarHr' />

            <CarouselResponsive />

            <div className='sidebar'>

                <div className="sideWrapper">
                    <ul className="sidebarlist">
                        <li className="sidebarListItem">
                            <GiSniffingDog className='sidebarIcon' />
                            <span className="sideBarListItemText">Dogs</span>
                        </li>
                        <li className="sidebarListItem">
                            <Link to="#"> <BiMoviePlay className='sidebarIcon' />
                                <span className="sideBarListItemText">Connect-Moviez</span></Link>

                        </li>
                        <li className="sidebarListItem">
                            <BsFillChatRightFill className='sidebarIcon' />
                            <span className="sideBarListItemText">Chat</span>
                        </li>
                        <li className="sidebarListItem">
                            <CgDetailsMore className='sidebarIcon' />
                            <span className="sideBarListItemText">Details</span>
                        </li>
                        <li className="sidebarListItem">
                            <BsFillBookmarkStarFill className='sidebarIcon' />
                            <span className="sideBarListItemText">Bookmarks</span>
                        </li>
                        <li className="sidebarListItem">
                            <BsInfoSquareFill className='sidebarIcon' />
                            <span className="sideBarListItemText">About</span>
                        </li>
                        <li className="sidebarListItem">
                            <BsFillQuestionSquareFill className='sidebarIcon' />
                            <span className="sideBarListItemText">Ask a question</span>
                        </li>
                        <li className="sidebarListItem">
                            <GiStickSplitting className='sidebarIcon' />
                            <span className="sideBarListItemText">Events</span>
                        </li>
                    </ul>
                    <hr className='sidebarHr' />
                    <ul className='sidebarFriendList'>

                    </ul>
                    {/* <vr /> */}
                </div>
            </div>
        </div>
    )
}

export default Sidebar