import React from 'react';
import Logo from './Logo';
import { FaGithub } from 'react-icons/fa';
import { useState } from 'react';
const nav_items = [
    {
        name: 'Home',
        path: '/'
    },
    
    {
        name: 'participate',
        path: '/app',
    },

    {
        name: 'App',
        path: '/app',
    },

];


export default function Navbar(props) {
    const [isOpen, setIsOpen] = useState('');

    const toggle = () => {
        setIsOpen(isOpen === '' ? 'hidden' : '');
    }
    return (
        <nav className=" sticky  top-0 z-50 px-2 sm:px-4 py-2.5 text-white bg-black">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <a href='/app' className="flex items-center">
                    <Logo/>
                </a>
                <button data-collapse-toggle="mobile-menu" type="button" onClick={() => toggle()} className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                    <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button>
                <div className={`${isOpen} w-full md:block md:w-auto items-center`} id="mobile-menu">
                    <ul className="flex flex-col items-center mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">

                        {nav_items.map((item, i) => (
                            <li className='block py-2 pr-4 pl-3 text-white hover:bg-white hover:text-blac rounded-lg' >
                                <a href={item.path} className=" ">{item.name}</a>
                            </li>
                        ))}
                        <h3>
                            <p className="text-white text-3xl p-2 m-3 rounded-xl hover:bg-white hover:text-blac ">
                        <FaGithub className=" hover:text-blac " />
                            </p>
                        </h3>
                        <a href="app">
                            <button className='bg-yellow1 m-2 hover:bg-white font-semibold hover:text-yellow1 text-xl text-white py-2 px-4 w-40 rounded-2xl'>
                                Connect
                            </button>
                        </a>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
