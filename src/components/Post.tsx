import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import sanityClient from "../client"

const Post = () => {

    const [postData, setPostData] = useState<any>(null)

    useEffect(() => {
        sanityClient.fetch(`*[_type == "post"]{
    title,
    slug,
    mainImage{
        asset->{
            _id,
            url
        },
        alt
    }
}`).then((data) => setPostData(data))
            .catch(console.error)
    }, [])
    return (
        <main className='bg-gray-100 min-h-screen p-12'>
            <section className='container mx-auto '>
                <h1 className='text-5xl flex justify-center cursive'>Blog Post Page </h1>
                <h2 className='text-lg text-gray-600 flex justify-center mb-12'>Welcome to my page of blog posts</h2>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {postData && postData.map((post: any, index: number) => {
                        return <article>
                            <Link to={"/post/" + post.slug.current} key={post.slug.current}>
                                <span className='block h-64 relative rounded shadow leading-snug bg-white border-l-8 border-gray-400' key={index}>
                                    <img src={post.mainImage.asset.url} alt={post.mainImage.alt} className="w-full h-full rounded-r object-cover absolute" />
                                    <span className='block relative h-ful flex justify-end items-end pr-4 pb-4'>
                                        <h3 className='text-gray-800 text-lg font-bold px-3 py-3 bg-red-700 bg-opacity-75 rounded'>{post.title}</h3>
                                    </span>
                                </span>
                            </Link>
                        </article>
                    })}
                </div>
            </section>
        </main>
    )
}

export default Post