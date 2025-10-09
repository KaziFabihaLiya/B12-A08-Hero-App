import { Github } from 'lucide';
import React from 'react';

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><a>Home</a></li>
                        <li>
                        <a>Apps</a>
                        </li>
                        <li><a>Installation</a></li>
                    </ul>
                    </div>
                    <img src="/logo.png" className='w-[3.5rem] pl-[20px]' alt="" />
                    <a className="btn btn-ghost font-bold pl-1 bg-clip-text text-transparent text-base bg-gradient-to-r from-[#632EE3] to-[#9F62F2]">HERO.IO</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                    <li>
                        <a><span className='font-medium bg-clip-text text-transparent bg-gradient-to-r from-[#632EE3] to-[#9F62F2]'>Home</span></a>
                    </li>
                    <li>
                        <a>Apps</a>
                    </li>
                    <li>
                        <a>Installation</a>
                    </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    
                    <a className="mr-20 btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white "><img src="/github-mark-white.png" className='w-[30px] ' alt="" /> Contribute</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;