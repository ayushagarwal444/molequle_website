import TopHeader from '../../components/TopHeader/TopHeader'
import Footer2 from '../../components/Footer/Footer2';
import { Link } from "react-router-dom";
import NavBar2 from '../../components/Navbar/Navbar2';

const PageNot = () => {
    return (
        <>
            <TopHeader />
            <div className="bg-white">
        <div className="sm:mx-auto sm:w-[1280px]">
          <NavBar2 />
          </div>
        </div>
            <div>
                <div className='sm:w-[396px] w-[255px] mx-auto mt-10 sm:pt-0 pt-14'>
                    <img src="./404.svg" alt="404" />
                </div>
                <div className='mt-10 mb-20 sm:w-[748px] mx-auto sm:flex sm:flex-row justify-between flex-col'>
                    <div>
                        <p className='font-bold text-[16px] text-center sm:mb-0 mb-10 sm:text-[22px]' style={{ lineHeight: "32px" }}>This page doesnt exist or removed!
                           <br /> We suggest you back to home</p>
                    </div>
                    <div>
                        <Link to= '/'>
                        <button className='sm:w-[216px] w-[136px] h-[50px] text-center mx-auto flex justify-center sm:h-[80px] rounded-full bg-[#8A4BD3] text-white text-[12px] sm:text-[20px] sm:p-6 p-4'>Go to Home </button>
                        </Link>
                    </div>
                </div>
            </div>
            <Footer2 />
        </>
    )
}

export default PageNot