import React from 'react'
import '../index.css'

const Home = () => {

    const userName = JSON.parse(localStorage.getItem('user'));

    return (
        <>

            <div className="mx-auto w-full max-w-7xl">
                <aside id='Home' className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
                    <div id="Img" className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full ">
                        <img className="w-96" src="https://i.ibb.co/5BCcDYB/Remote2.png" alt="image1" />
                    </div>
                    <div id='HomeText' className="relative z-10 max-w-screen-xl px-4 pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                        <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
                            <h2 className="text-4xl font-bold sm:text-5xl">
                                Hello, What's Up
                                <span className="hidden sm:block text-4xl">Lorem Ipsum</span>
                            </h2>
                            {
                                localStorage.getItem('Login') === null ? <h1 className='text-4xl'>Welcome To Our Website</h1> : <h1 className='text-4xl'>Welcome {userName.Name}</h1>
                            }
                        </div>
                    </div>
                </aside>

                <div className="grid  place-items-center sm:mt-20">
                    <img className="sm:w-96 w-48" src="https://i.ibb.co/2M7rtLk/Remote1.png" alt="image2" />
                </div>
                <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium">Lorem Ipsum Yojo</h1>
            </div>
        </>
    )
}

export default Home