import React, { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'

const Header = () => {

    const [isOpen, setIsOpen] = useState(false);

    const Navigate = useNavigate();

    let handlerLogout = () => {
        localStorage.removeItem("Login")
        Navigate('/login')
        setIsOpen(!isOpen)
    }

    const Btns = () => {
        if (JSON.parse(localStorage.getItem("Login")) === true) {
            return <button
                className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                type='button'
                onClick={handlerLogout}
            >
                Logout
            </button >
        }
        else {
            return <div className="flex justify-center items-center lg:order-2">
                <Link
                    to="/login"
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                >
                    Log in
                </Link>
                <Link
                    to="/signUp"
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                >
                    Get started
                </Link>
            </div>
        }
    }

    return (
        <>
            <header className="shadow sticky z-50 top-0">
                <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                        <Link to="/" className="flex justify-center items-center">
                            <img
                                src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                                className="mr-3 h-12"
                                alt="Logo"
                            />
                        </Link>

                        <div className="block lg:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
                            >
                                <svg
                                    className={`fill-current h-5 w-5 ${isOpen ? "hidden" : "block"} `}
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                                </svg>
                                <svg
                                    className={`fill-current h-5 w-5 ${isOpen ? "block" : "hidden"} `}
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
                                </svg>
                            </button>
                        </div>

                        <div
                            className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${isOpen ? "block" : "hidden"} `}
                        >
                            <ul className="flex justify-center flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 lg:flex-grow">
                                <li className='block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4'>
                                    <NavLink
                                        to="/"
                                        onClick={() => setIsOpen(!isOpen)}
                                        className={({ isActive }) =>
                                            `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-grey-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                        }
                                    >
                                        Home
                                    </NavLink>
                                </li>
                                <li className='block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4'>
                                    <NavLink
                                        to="/about"
                                        onClick={() => setIsOpen(!isOpen)}
                                        className={({ isActive }) =>
                                            `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-grey-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                        }
                                    >
                                        About
                                    </NavLink>
                                </li>
                                <li className='block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4'>
                                    <NavLink
                                        to="/contact"
                                        onClick={() => setIsOpen(!isOpen)}
                                        className={({ isActive }) =>
                                            `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-grey-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                        }
                                    >
                                        Contact
                                    </NavLink>
                                </li>
                                <li className='block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4'>
                                    <NavLink
                                        to="/github"
                                        onClick={() => setIsOpen(!isOpen)}
                                        className={({ isActive }) =>
                                            `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-grey-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                        }
                                    >
                                        GitHub
                                    </NavLink>
                                </li>
                            </ul>
                            {Btns()}
                        </div>
                    </div>
                </nav >
            </header >
        </>
    )
}

export default Header
