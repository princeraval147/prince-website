import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {

    const data = useLoaderData()

    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/princeraval147')
    //         .then(Response => Response.json())
    //         .then(data => {
    //             setData(data)
    //             console.log(data)
    //         })
    // }, [])

    return (
        <>
            <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
                Github Followers : {data.followers}
                <img src={data.avatar_url} alt="Git picture" width={300} className='my-3' />
                <a
                    target='_blank'
                    href="https://github.com/princeraval147"
                    className='hover:border-b'
                >GitHub Link</a>
            </div>
        </>
    )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/princeraval147')
    return response.json()
}