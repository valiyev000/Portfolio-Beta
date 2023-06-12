import React, { useContext } from 'react'
import walkingGirl from '../assets/walking-girl.svg'
import ContextApi from '../ContextApi'

export default function Journey() {

    const { timeline } = useContext(ContextApi).data

    return (
        <main className='journeyMain'>
            <div className="flexContainer">
                <div className="mainSide">
                    <div className="mainSideTop">
                        <img src={walkingGirl} alt="walking-girl.svg" />
                        <div className="mainSideTopAside">
                            <div className="header">The resolution, What am I gonna do?</div>
                            <div className="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</div>
                        </div>
                    </div>
                    <div className="mainSideBottom">
                        <b>The standard Lorem Ipsum passage, used since the 1500s</b>
                        <br /><br />
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                        <br /><br />
                        Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC
                        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
                        <br /><br />
                        1914 translation by H. Rackham
                        "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone
                    </div>
                </div>
                <div className="timeLine">
                    <h1 className="header">Time line</h1>
                    <div className="cardBox">
                        {timeline.length && timeline.map((e, i) => {
                            return (
                                <div key={e.id} className='cards'>
                                    <div className="date">{e.date}</div>
                                    <div className="title">{e.title}</div>
                                    <div className="description">{e.description}</div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </main>
    )
}
