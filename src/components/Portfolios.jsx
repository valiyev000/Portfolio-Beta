import React, { useContext } from 'react'
import ContextApi from '../ContextApi'

export default function Portfolios() {

    const { portfolios } = useContext(ContextApi).data
    console.log(portfolios);

    return (
        <main className='portfoliosMain'>
            <div className="flexContainer">
                {portfolios.length && portfolios.map((e, i) => {
                    return (
                        <div key={e.id} className='items'>
                            <div className="flexBox">
                                <img src={e.src} alt="portfolios-images" />
                                <div className="aside">
                                    <div className="header">{e.header}</div>
                                    <div className="description">{e.description}</div>
                                    <a href="http://github.com">Read more</a>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </main>
    )
}
