import "./Navbar2.css"
import { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css"

export default function NavBar2() {
    const [navbar, setNavbar] = useState(false);

    return (
        <nav className="w-auto text-black ">
            <div className="sm:px-0  px-[5%] mx-auto  md:items-center md:flex hh ">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <Link to="/">
                            <img className="w-[123px] h-[15.86px] sm:h-auto sm:w-auto" src="Group 48702.svg" alt="" />
                        </Link>
                        <div className="md:hidden">
                            <button
                                className="p-2 h-248px  rounded-md outline-none   z-30"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                   <img src = './Close.svg'/>
                                ) : (
                                    <img src= './Group 47789.svg'/>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={` pb-3 z-40 mt-0 h-screen sm:h-auto   sm:ml-[10rem] ml-0 md:block md:pb-0 md:mt-0 leading-7 ${navbar ? "block z-30" : "hidden z-30"
                            }`}
                    >
                        <ul className="items-center  justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                            <div className="w-full ">
                                <div className="flex flex-col  sm:flex-row justify-center w-auto ">
                                <Link className=" items-center" to='/'>
                                    <a className="flex   sm:pb-[26px] sm:mt-[30px] sm:mb-0 sm:text-base text-[18px] font-medium hover:text-purple-600 link link-underline link-underline-black  text-purple-700 sm:text-black pl-6 pr-6">
                                        Home
                                    </a>
                                    </Link>
                                    <Link className=" items-center" to='/industry'>
                                    <a className="flex   sm:pb-[26px] sm:mt-[30px] sm:mb-0 sm:text-base text-[18px] font-medium hover:text-purple-600 link link-underline link-underline-black  text-purple-700 sm:text-black pl-6 pr-4">
                                        Products
                                    </a>
                                    </Link>

                                    {/* drop down ++++++++++++++++++++=========== */}
                                    {/* <div className="dropdown">
                                        <button className="dropbtn  sm:my-0 mr-auto sm:text-base text-[18px] sm:ml-8  font-medium hover:text-purple-600 link link-underline link-underline-black text-purple-700 sm:text-black sm:pb-[27px]  ml-[2px]">Products
                                            <i className="fa fa-caret-down ml-2"></i>
                                        </button>
                                        <div className="dropdown-content pb-10 w-[100vw]">
                                            <div className="row sm:pl-0 sm:pr-0  pr-[6%]">
                                                <div className="column sm:pl-[8%] flex flex-row sm:flex-col">
                                                <div className="flex sm:flex-col flex-row sm:mt-5">
                                                    <div className="block sm:hidden h-[35px] text-center pt-2
                                                     font-[400] rounded-full w-[96px] bg-[#8D2ED1] text-white leading-[21px] text-[14px]">Industries</div>
                                                        <div className="sm:block hidden">
                                                                    <Link to='/industry'>
                                                                        <p className="font-semibold text-[14px] sm:text-lg flex sm:mt-[20px]">
                                                                            Industries
                                                                            </p>
                                                                        
                                                                    </Link>
                                                                
                                                        </div>

                                                        <p className="text-gray-500 leading-5 text-sm font-normal  mt-3  sm:w-[231px]  w-[177px] text-left sm:block hidden">Customized products to match industry specific needs & use cases </p>
                                                    </div>
                                                    <Link to= "/industry">
                                                    <button className="sm:mt-10 sm:float-left  sm:font-medium text-[14px] w-[122px] h-[35px] bg-[#EDEDED] sm:bg-transparent sm:text-xl sm:text-left rounded-full sm:ml-0 ml-5">All Products</button></Link>
                                                </div>
                                               
                                               
                                                <div className="column sm:mt-5">
                                                    <Link to="/pharma">
                                                            <a className="flex sm:pt-[20px] sm:pb-[10px]">
                                                                <span className="flex-shrink-0">
                                                                    <img src=".\Frame 551.svg " alt="first" />
                                                                </span>
                                                                <div className="flex flex-col ml-4 ">
                                                                    <span className="text-left sm:font-medium font-[400]  leading-none sm:text-lg text-[14px]">Pharma</span>
                                                                    <span className="text-left  sm:text-sm text-[11px] font-normal text-gray-500 sm:w-[231px] sm:leading-[18.3px] leading-[14.3px] w-[177px] sm:mt-1 mt-2">APIs, Intermediates, Excipients & more</span>
                                                                </div>
                                                            </a>
                                                        </Link>
                                                        <a className="flex sm:pt-[20px] pt-5 pb-2 sm:pb-[10px]" href="/industry">
                                                                <span className="flex-shrink-0">
                                                                    <img src=".\Group 1000003216.svg " alt="second" />
                                                                </span>
                                                                <div className="flex flex-col ml-4">
                                                                    <span className="text-left sm:font-medium font-[400]  leading-none sm:text-lg text-[14px] ">Agro Chemicals</span>
                                                                    <span className="text-left  sm:text-sm text-[11px] font-normal text-gray-500 sm:w-[231px] sm:leading-[18.3px] leading-[14.3px] w-[177px] sm:mt-1 mt-2">Range of actives, extracts, oils & surfactants</span>
                                                                </div>
                                                            </a>
                                                            
                                                </div>
                                                <div className="column sm:mt-5">
                                                    <a className="flex sm:pt-[20px] sm:pb-[10px]" href="/industry">
                                                                <span className="flex-shrink-0">
                                                                    <img src=".\Group 1000003218.svg " alt="Fourth" />
                                                                </span>
                                                                <div className="flex flex-col ml-4">
                                                                    <span className="text-left sm:font-medium font-[400]  leading-none sm:text-lg text-[14px]">Nutrition & Supplements</span>
                                                                    <span className="text-left  sm:text-sm text-[11px] font-normal text-gray-500 sm:w-[231px] sm:leading-[18.3px] leading-[14.3px] w-[177px] sm:mt-1 mt-2">Crop protection, plant nutrition, & soil health solutions</span>
                                                                </div>
                                                            </a>
                                                            <a className="flex  sm:pt-[20px] sm:pb-[10px] sm:mt-0 mt-5" href="/indusrty">
                                                            <span className="flex-shrink-0 ">
                                                                    <img src=".\Group 1000003217.svg " alt="third" />
                                                                </span>
                                                                <div className="flex flex-col ml-4">
                                                                    <span className="text-left sm:font-medium font-[400]  leading-none sm:text-lg text-[14px] ">Cosmetics & Personal Care</span>
                                                                    <span className="text-left  sm:text-sm text-[11px] font-normal text-gray-500 sm:w-[231px] sm:leading-[18.3px] leading-[14.3px] w-[177px] sm:mt-1 mt-2">Resins, pigments, & other plastic additives</span>
                                                                </div>
                                                            </a>
                                                            
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}
                                {/* dropdown end  =======================================================                             */}
                                <Link to="/about">
                                <a className="flex sm:pb-[26px] sm:mt-[30px] items-center sm:ml-2  sm:mb-0 sm:text-base text-[18px] font-medium hover:text-purple-600 link link-underline link-underline-black  text-purple-700 sm:text-black pl-6 pr-6">
                                    About</a></Link>
                                    <Link to="/contact">
                                <li className=" hover:text-purple-600 ml-1 sm:pb-[26px] sm:mt-[30px] sm:ml-2 font-medium sm:text-base text-[18px] link link-underline link-underline-black  text-purple-700 sm:text-black   sm:w-28 sm:text-center ">
                                    Contact
                                </li>
                                </Link>
                            </div>
                    </div>
                </ul>

            </div>
        </div>
            </div >
        <a className=" fixed overflow-hidden  flex items-center justify-center   h-8 pr-2 pl-1 bg-[#F9F5FD] rounded-full sm:bottom-[2.5rem] sm:top-auto top-[670px] sm:right-14 right-6  mr-4 mb-4 border border-[#E1B9FD]  text-purple-800 hover:bg-purple-100 z-50" href="http://wa.me/919560190710" target="_blank" rel="noreferrer">
            <div className=" rounded-full">
                <img className="rounded-full" src="/Vector4.svg" alt="logo" />
            </div>
            <span className="text-sm  p-1 leading-none">Chat</span>
        </a>
        </nav >
    );
}