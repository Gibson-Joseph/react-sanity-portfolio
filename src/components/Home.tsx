import React from 'react'
import webImg from "../assets/web.jpg"
const Home = () => {
    return (
        <main>
            <img src={webImg} alt="web img" className='absolute object-cover w-full h-full'/>
            <section className='relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8'>
                <h1 className='text-6xl text-gray-100 font-bold cursive leading-none lg:leading-snug home-name'>Hello, I'm Gibson.</h1>
            </section>
        </main>
    )
}

export default Home