import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const GetStarted = () => {

    const Navigate = useNavigate();
    const [input, setInput] = useState({
        Name: "",
        Email: "",
        Pass: "",
        conPass: ""
    });

    const handlerSubmit = (e) => {
        e.preventDefault();
        // console.log(input)
        if (input.Pass === input.conPass) {
            localStorage.setItem("user", JSON.stringify(input))
            Navigate('/login');
        } else {
            alert("Conform password doesn't match");
            document.getElementById('conPass').focus();
        }
    }

    return (
        <>
            <div className="bg-grey-lighter min-h-screen flex flex-col">
                <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                    <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                        <h1 className="mb-8 text-3xl text-center">Sign up</h1>

                        <form method='GET' onSubmit={handlerSubmit} >
                            <input
                                value={input.Name}
                                onChange={e => setInput({
                                    ...input,
                                    [e.target.name]: e.target.value
                                })}
                                type="text"
                                required
                                className="block border border-grey-light w-full p-3 rounded mb-4 focus:border-orange-500 focus:outline-none"
                                name="Name"
                                placeholder="Full Name" />

                            <input
                                onChange={e => setInput({
                                    ...input,
                                    [e.target.name]: e.target.value
                                })}
                                type="email"
                                value={input.Email}
                                required
                                className="block border border-grey-light w-full p-3 rounded mb-4 focus:border-orange-500 focus:outline-none"
                                name="Email"
                                placeholder="Email" />

                            <input
                                onChange={e => setInput({
                                    ...input,
                                    [e.target.name]: e.target.value,
                                })}
                                value={input.Pass}
                                type="password"
                                required
                                className="block border border-grey-light w-full p-3 rounded mb-4 focus:border-orange-500 focus:outline-none"
                                name="Pass"
                                placeholder="Password" />
                            <input
                                onChange={e => setInput({
                                    ...input,
                                    [e.target.name]: e.target.value,
                                })}
                                value={input.conPass}
                                type="password"
                                id='conPass'
                                required
                                className="block border border-grey-light w-full p-3 rounded mb-4 focus:border-orange-500 focus:outline-none"
                                name="conPass"
                                placeholder="Confirm Password" />

                            <button
                                type="submit"
                                className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                            >Create Account</button>
                        </form>

                        <div className="text-center text-sm text-grey-dark mt-4">
                            By signing up, you agree to the
                            <p className='no-underline border-b border-grey-dark text-grey-dark'>Terms of Service and Privacy Policy</p>
                        </div>
                    </div>

                    <div className="text-grey-dark mt-6">
                        Already have an account?
                        <NavLink className="text-gray-800 hover:bg-gray-100  font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 " to="/login">
                            Log in
                        </NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GetStarted