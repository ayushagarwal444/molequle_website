import { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css"

export default function NavBar() {
    const [navbar, setNavbar] = useState(false);
    document.getElementsByClassName('.mega-menu').onClick = (e) => {
        e.stopPropagation();
    }

    return (
        <nav className="w-auto text-black shadow">
            <div className="sm:px-0  px-4 mx-auto  md:items-center md:flex pr-[6%] 2xl:pl-[8%] xl:pl-[6%] sm:pl-[6%] ">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <Link to="/">
                            <img className="w-[123px] h-[15.86px] sm:h-auto sm:w-auto" src="Group 48702.svg" alt="" />
                        </Link>
                        <div className="md:hidden">
                            <button
                                className="p-2 h-248px text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-black"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-black"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={` pb-3 z-40 mt-0 h-screen sm:h-auto sm:ml-56 ml-0 md:block md:pb-0 md:mt-0 leading-7 ${navbar ? "block" : "hidden"
                            }`}
                    >
                        <ul className="items-center  justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                            <div className="w-full ">
                                <div className="flex flex-col sm:flex-row justify-center w-auto ">
                                    <a className="flex items-center   sm:mb-0 sm:text-base text-[18px] font-medium hover:text-purple-600 link link-underline link-underline-black  text-purple-700 sm:text-black">
                                        <Link to='/'>Home</Link>
                                    </a>
                                    
                                    <button className=" flex flex-col items-center group mega-menu " >
                                        <div className="my-auto sm:my-0 mr-auto sm:text-base text-[18px] sm:ml-2  font-medium hover:text-purple-600 link link-underline link-underline-black text-purple-700 sm:text-black "  >
                                            Products
                                        </div>
                                        <div className="absolute sm:ml-32  z-30 hidden w-screen   mt-[5.6rem] bg-white border  shadow-lg group-focus:visible" >
                                            <div className=" flex flex-row  sm:flex ">
                                                <div className="w-60 h-auto ml-44 mt-10 hidden sm:block">
                                                  </div>

                                                {/*================================= grid ==================*/}
                                                <div className=" p-8">
                                                    <div className="block sm:hidden ">
                                                        <div className="flex">
                                                            <button className="bg-purple-600 drop-shadow-lg text-white rounded-full px-3 text-base ">
                                                                <Link to='/industry'>Industries</Link>
                                                            </button>
                                                            <button className="p-2  drop-shadow-md bg-gray-200 rounded-full px-5 ml-4 text-base">ALL</button>
                                                        </div>
                                                    </div>
                                                    <ul className="grid sm:grid-cols-2 grid-cols-1 gap-10">
                                                        <li></li>
                                                        <li>
                                                            
                                                        </li>
                                                        <li>
                                                            
                                                        </li>
                                                        <li>
                                                            
                                                        </li>
                                                        <li>
                                                            
                                                        </li>
                                                        <li>

                                                            
                                                        </li>
                                                    </ul>





                                                </div>
                                            </div>
                                        </div>

                                    </button>
                                    <a className="flex items-center   sm:mb-0 sm:text-base text-[18px] font-medium hover:text-purple-600 link link-underline link-underline-black  text-purple-700 sm:text-black">
                                        <Link to="/about">About</Link></a>
                                    <li className=" hover:text-purple-600 ml-0 sm:ml-2 font-medium sm:text-base text-[18px] link link-underline link-underline-black  text-purple-700 sm:text-black">
                                        <Link to="/contact">Contact</Link>
                                    </li>
                                </div>
                            </div>
                        </ul>
                        
                    </div>
                </div>
            </div>
            <a className=" fixed overflow-hidden  flex items-center justify-center   h-8 pr-2 pl-1 bg-[#F9F5FD] rounded-full sm:bottom-[13.5rem] sm:top-auto top-[330px] sm:right-14 right-6  mr-4 mb-4 border border-[#E1B9FD]  text-purple-800 hover:bg-purple-100 z-30" href="http://wa.me/918010150164" target="_blank" rel="noreferrer">
                                <div className=" rounded-full">
                                    <img className="rounded-full" src="/Vector4.svg" alt="logo" />
                                </div>
                                <span className="text-sm  p-1 leading-none">Chat</span>
                            </a>
        </nav>
    );
}