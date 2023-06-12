import React from 'react'
import walkingGirl from '../assets/walking-girl.svg'

export default function Journey() {
  return (
    <main className='journeyMain'>
        <div className="flexContainer">
            <div className="mainSide">
                <div className="mainSideTop">
                    <img src={walkingGirl} alt="walking-girl.svg" />
                </div>
            </div>
            <div className="timeLine"></div>
        </div>
    </main>
  )
}
