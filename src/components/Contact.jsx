import React from 'react'
import githubIcon from '../assets/github-icon.svg'
import twitterIcon from '../assets/twitter-icon.svg'
import unknownIcon from '../assets/unknown-icon.svg'
import manWithBag from '../assets/man-with-bag.svg'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'


export default function Contact() {
    return (
        <main className='contactMain'>
            <div className="contactInfo">
                <h1 className="header">You can reach me any time🙂</h1>
                <div className="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.
                    <br /><br />
                    <a href="http://twitter.com">Twitter: amirhwsin</a>
                    <br /><br />
                    <a href="http://github.com">Github: amireshoon</a>
                    <br /><br />
                    <a href="http://dribble.com">Dribble: amireshoon</a>
                    <br /><br />
                    <a href="http://telegram.org">Telegram: GeekDreamer</a>
                    <br /><br />
                    <a href="mailto:amirhwsin@outlook.com">Email: amirhwsin@outlook.com</a>
                </div>
                <div className="linkBtns">
                    <Link to='/about'>About me</Link>
                    <Link to='/portfolios'>😮 Let's see portfolios</Link>
                </div>
            </div>
            <div className="exportLinks">
                <a href="http://github.com"><img src={githubIcon} alt="githubIcon" /></a>
                <a href="http://twitter.com"><img src={twitterIcon} alt="twitterIcon" /></a>
                <a href="http://google.com"><img src={unknownIcon} alt="unknownIcon" /></a>

            </div>
            <div className="copyrightSection">Copyright © 2021 All rights reserved.</div>
            <img src={manWithBag} alt="man-with-bag.svg" />
        </main>
    )
}
