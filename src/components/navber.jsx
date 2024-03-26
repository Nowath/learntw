import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import logo from "../assets/nowathlogo.png";

function navber() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="sticky top-4 h-[5vh] bg-white/30 border-2 border-white/20 backdrop-blur-xl  rounded-xl z-10">
            <nav className="flex h-full justify-around items-center relative">
                <div className="logo flex items-center gap-2">
                    <img className="w-10 rounded-full" src={logo} alt="logo" />
                    <p className="text-xl">Nowath</p>
                </div>
                <ul className="hidden sm:flex gap-4">
                    <li>
                        <a
                            className="transition-all duration-300 hover:text-blue-600"
                            href="https://www.facebook.com/nano.ugridsiri.5/"
                        >
                            Facebook
                        </a>
                    </li>
                    <li>
                        <a
                            className="transition-all duration-300 hover:text-purple-600"
                            href="https://github.com/Nowath"
                        >
                            Github
                        </a>
                    </li>
                    <li>
                        <a className="hover:" href="https://dev.to/nowath">
                            DEV
                        </a>
                    </li>
                    <li>
                        <a
                            className="transition-all duration-300 hover:text-pink-600"
                            href="https://www.instagram.com/nanougridsiri/"
                        >
                            Instragram
                        </a>
                    </li>
                </ul>
                <div className="hamburger relative sm:hidden">
                    <RxHamburgerMenu
                        className=""
                        size={30}
                        onClick={() => {
                            setIsMenuOpen(!isMenuOpen);
                        }}
                    />
                    <ul
                        className={`${
                            isMenuOpen ? "block" : "hidden"
                        } transition-all  border-2 border-white rounded-lg absolute w-[8rem] right-[-50px] top-9 bg-blue-300`}
                    >
                        <li className="flex items-center justify-center p-2">
                            <a href="https://www.facebook.com/nano.ugridsiri.5/">
                                Facebook
                            </a>
                        </li>
                        <hr />
                        <li className="flex items-center justify-center p-2">
                            <a href="https://github.com/Nowath">Github</a>
                        </li>
                        <hr />
                        <li className="flex items-center justify-center p-2">
                            <a href="https://dev.to/nowath">DEV</a>
                        </li>
                        <hr />
                        <li className="flex items-center justify-center p-2">
                            <a href="https://www.instagram.com/nanougridsiri/">
                                Instragram
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default navber;
