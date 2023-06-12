import React, { useContext } from 'react'
import ContextApi from '../ContextApi'

export default function Blog() {

    const sample = useContext(ContextApi)

    console.log(sample);

  return (
    <main className='blogMain'>Blog</main>
  )
}
