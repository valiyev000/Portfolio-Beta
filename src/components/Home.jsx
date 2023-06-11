import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import githubIcon from '../assets/github-icon.svg'
import twitterIcon from '../assets/twitter-icon.svg'
import unknownIcon from '../assets/unknown-icon.svg'
import withHeadphone from '../assets/manWithHeadphone.svg'
import handImg from '../assets/hand.svg'

export default function Home() {
    return (
        <main className='homeMain'>
            <div className="header">Hey there 👋 <br /><span>I</span> am Amirhossein</div>
            <div className="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
            <div className="linkBtns">
                <Link to="/about">About me</Link>
                <Link to="/portfolios">😮 Let's see portfolios</Link>
            </div>
            <div className="copyrightSection">Copyright © 2021 All rights reserved.</div>
            <img src={withHeadphone} alt="withHeadphone.svg" id='withHeadphone' />
            <img src={handImg} alt="hand.svg" id='handImg' />
            <div className="exportLinks">
                <a href="http://github.com"><img src={githubIcon} alt="githubIcon" /></a>
                <a href="http://twitter.com"><img src={twitterIcon} alt="twitterIcon" /></a>
                <a href="http://google.com"><img src={unknownIcon} alt="unknownIcon" /></a>
            </div>
        </main>
    )
}
