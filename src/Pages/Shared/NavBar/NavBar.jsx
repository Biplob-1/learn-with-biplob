import { FiAlignLeft, FiSun, FiMoon, FiShoppingCart } from "react-icons/fi";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    const [darkMode, setDarkMode] = useState(false);

    const navLinks = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/about'}>About</NavLink></li>
        <li><NavLink to={'/blog'}>Blog</NavLink></li>
    </>

    // Toggle dark mode
    const handleToggle = () => {
        setDarkMode(!darkMode);
        document.documentElement.classList.toggle('dark', !darkMode);
    };

    useEffect(() => {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setDarkMode(true);
            document.documentElement.classList.add('dark');
        }
    }, []);

    return (
        <div>
            <div className="navbar bg-base-100 dark:bg-gray-800 text-black dark:text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <FiAlignLeft />
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 dark:bg-gray-700 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                        >
                            {
                                navLinks
                            }
                        </ul>
                    </div>
                    <div className="flex">
                        <a href="">Learn <br /> with Biplob</a>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            navLinks
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    <FiShoppingCart></FiShoppingCart>
                    <button onClick={handleToggle} className="btn btn-ghost">
                        {darkMode ? <FiSun className="text-yellow-500" /> : <FiMoon className="text-gray-400" />}
                    </button>
                    <NavLink to={'/register'} className='btn'>Signup</NavLink>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
