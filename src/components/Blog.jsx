import React, { useContext } from 'react'
import ContextApi from '../ContextApi'

export default function Blog() {

    const {blog} = useContext(ContextApi).data



  return (
    <main className='blogMain'>
      <div className="flexContainer">
        {blog.length && blog.map((e,i)=>{
          return (
            <div className='cards' key={e.id}>
              <img src={e.src} alt="blogE.svg" />
              <div className="title">{e.header}</div>
              <div className="description">{e.description}</div>
              <a href="http://github.com">Read more</a>
            </div>
          )
        })}
      </div>
    </main>
  )
}
