import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const Login = () => {

    const [input, setInput] = useState({
        Email: "",
        Pass: ""
    });

    const Navigate = useNavigate();

    const handlerLogin = (e) => {
        e.preventDefault();
        if (localStorage.getItem("user") == null) {
            alert("Plase Create Account For Login");
            Navigate('/signUp')
        }
        else {
            const loginUser = JSON.parse(localStorage.getItem("user"));
            if (input.Email === loginUser.Email && input.Pass === loginUser.Pass) {
                localStorage.setItem("Login", true);
                Navigate('/')
            } else {
                alert("Invalid Email Or Password");
                document.getElementById("Email").focus();
            }
        }
    }

    return (
        <>
            <div className="login">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 ">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="mb-8 text-3xl text-center">
                                Sign in to your account
                            </h1>
                            <form
                                onSubmit={handlerLogin}
                                className="space-y-4 md:space-y-6"
                                action="#">
                                <div>
                                    <label htmlFor="Email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                                    <input
                                        id='Email'
                                        name="Email"
                                        onChange={e => setInput({
                                            ...input,
                                            [e.target.name]: e.target.value
                                        })}
                                        type="email"
                                        value={input.Email}
                                        className="bg-gray-50 block border border-grey-light w-full p-3 rounded mb-4 focus:border-orange-500 focus:outline-none" placeholder="Enter Email"
                                        required=""
                                    />
                                </div>
                                <div>
                                    <label htmlFor="Pass" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                                    <input
                                        onChange={e => setInput({
                                            ...input,
                                            [e.target.name]: e.target.value,
                                        })}
                                        value={input.Pass}
                                        type="password"
                                        name="Pass"
                                        id="Pass"
                                        placeholder="••••••••"
                                        className="bg-gray-50 block border border-grey-light w-full p-3 rounded mb-4 focus:border-orange-500 focus:outline-none" required=""
                                    />

                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                            <input
                                                id="remember"
                                                aria-describedby="remember"
                                                type="checkbox"
                                                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"
                                                required="" />
                                        </div>
                                        <div className="ml-3 text-sm">
                                            <label htmlFor="remember" className="text-gray-500">Remember me</label>
                                        </div>
                                    </div>
                                    <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                                </div>
                                <button type="submit" className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none">Sign in</button>
                                <p className="text-grey-dark mt-6   ">
                                    Don't have an account yet?
                                    <NavLink to='/signUp' className='font-medium text-primary-600 hover:underline dark:text-primary-500 px-2'> Sign Up</NavLink>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
