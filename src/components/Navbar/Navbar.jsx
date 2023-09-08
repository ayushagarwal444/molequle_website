import { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css"

export default function NavBar() {
    const [navbar, setNavbar] = useState(false);
    document.getElementsByClassName('.mega-menu').onClick = (e)=>{
        e.stopPropagation();
    }
    
    return (
        <nav className="w-auto text-black shadow">
            <div className="  px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <a href="/">
                            <img src="Group 48702.svg" alt="" />
                        </a>
                        <div className="md:hidden">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
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
                        className={` pb-3 mt-8 h-screen sm:h-auto sm:ml-56 ml-0 md:block md:pb-0 md:mt-0 leading-7 ${
                            navbar ? "block" : "hidden"
                        }`}
                    >
                        <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                        <div className="w-full ">
	<div className="flex flex-col sm:flex-row justify-center w-auto ">
		<a className="flex items-center h-16 mr-8 sm:hidden sm:text-xl text-2xl font-medium hover:text-purple-600 link link-underline link-underline-black  text-purple-700 sm:text-black">
            <Link to='/'>Home</Link>
            </a>
		<a className="flex items-center   sm:mb-0 sm:text-base text-2xl font-medium hover:text-purple-600 link link-underline link-underline-black  text-purple-700 sm:text-black">
            <Link to="/about">About</Link></a>
        
		<button className=" flex flex-col items-center group mega-menu " onClick={(e)=>{e.preventDefault()}}>
			<div className="my-auto sm:my-0 mr-auto sm:text-base text-2xl sm:ml-2  font-medium hover:text-purple-600 link link-underline link-underline-black text-purple-700 sm:text-black "  >
			Products	
			</div>
			<div className="absolute  hidden w-screen   mt-16 bg-white border  shadow-lg group-focus:visible" onClick={(e)=>{e.stopPropagation}}>
                <div className=" flex flex-row  sm:flex " onClick={(e)=>{e.stopPropagation}}>
                <div className="w-60 h-auto ml-44 mt-10 hidden sm:block">
                    <div className="flex flex-col">
                        <div className="flex">
                    <a className="font-semibold text-lg ">
                        <Link to='/industry'onClick={(e)=> {e.preventDefault()}} >Industries</Link>
                        </a>
                        <button className="rounded-full bg-green-100 p-2 drop-shadow-sm my-auto text-xs text-green-700 ml-5">PREMIUM</button>
                        </div>
                    <p className="text-gray-500 leading-5 text-sm font-normal w-full mt-3 ">Demo Description non deserunt ullamco est sit aliqua amet sint. </p>
                    </div>
                    <button className="mt-10 float-left ml-2 font-medium text-xl">All Products</button>
                </div>
				<div className="grid sm:grid-cols-2 grid-cols-1 gap-10 p-8">
                    <div className="block sm:hidden ">
                        <div className="flex">
                        <button className="bg-purple-600 drop-shadow-lg text-white rounded-full px-3 text-base " onClick={(e)=>{e.preventDefault()}}>
                            <Link to='/industry'>Industries</Link>
                            </button>
                        <button className="p-2  drop-shadow-md bg-gray-200 rounded-full px-5 ml-4 text-base">ALL</button>
                        </div>
                    </div>
					<a className="flex" href="/industry">
						<span className="flex-shrink-0">
                            <img src=".\Group 1000003216.svg " alt="first" />
                        </span>
						<div className="flex flex-col ml-4">
							<span className="text-left font-medium leading-none text-lg">Pharma</span>
							<span className="text-left mt-1 text-sm font-normal text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
						</div>
					</a>
					<a className="flex" href="/industry">
						<span className="flex-shrink-0">
                        <img src=".\Group 1000003216.svg " alt="second" />
                        </span>
						<div className="flex flex-col ml-4">
							<span className="text-left font-medium leading-none text-lg">Cosmetics & Personal Care</span>
							<span className="text-left mt-1 text-sm font-normal text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
						</div>
					</a>
					<a className="flex" href="/industry">
						<span className="flex-shrink-0 ">
                        <img src=".\Group 1000003217.svg " alt="third" />
                        </span>
						<div className="flex flex-col ml-4">
							<span className="text-left font-medium leading-none text-lg">Plastics & Polymers</span>
							<span className="text-left mt-1 text-sm font-normal text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing
								elit.</span>
						</div>
					</a>
					<a className="flex" href="/industry">
						<span className="flex-shrink-0">
                        <img src=".\Group 1000003218.svg " alt="Fourth" />
                        </span>
						<div className="flex flex-col ml-4">
							<span className="text-left font-medium leading-none text-lg">Agro Chemicals</span>
							<span className="text-left mt-1 text-sm font-normal text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing
								elit.</span>
						</div>
					</a>
                    <a className="flex" href="/indusrty">
						<span className="flex-shrink-0 ">
                        <img src=".\Group 1000003218.svg " alt="fifth" />
                        </span>
						<div className="flex flex-col ml-4">
							<span className="text-left font-medium leading-none texxt-lg">Nutrition & Supplements</span>
							<span className="text-left mt-1 text-sm font-normal text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
						</div>
					</a>
					<a className="flex" href="#">
						<span className="flex-shrink-0 ">
                        <img src=".\Group 1000003220.svg " alt="six" />
                        </span>
						<div className="flex flex-col ml-4">
							<span className="text-left font-medium  leading-none text-lg">Adhesives & Sealants</span>
							<span className="text-left mt-1 text-sm font-normal text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing
								elit.</span>
						</div>
					</a>
				</div>
                </div>
			</div>
            
		</button>
        <li className=" hover:text-purple-600 ml-0 sm:ml-2 font-medium sm:text-base text-2xl link link-underline link-underline-black  text-purple-700 sm:text-black">
                                <Link to="/contact">Contact</Link>
                            </li>
	</div>
</div>

<a className="fixed flex items-center justify-center drop-shadow-lg  h-8 pr-2 pl-1 bg-purple-200 rounded-full bottom-10 right-10 mr-4 mb-4 shadow-lg text-purple-800 hover:bg-purple-600" href="http://wa.me/918010150164" target="_top">
	<div className="flex items-center justify-center h-6 w-6 bg-purple-500 rounded-full">
	</div>
	<span className="text-sm ml-1 p-1 leading-none">Chat</span>
</a>
                            
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}