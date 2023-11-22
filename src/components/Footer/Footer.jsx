import { Link } from "react-router-dom"


const Footer = () => {
  return (
    <div className="bg-purple-50  pl-5 sm:pl-0 overflow-hidden">
      <hr className="border sm:w-[1280px]   w-[380px] max-w-[100%] sm:mt-0 mt-10 mx-auto   "></hr>
      <div className="flex flex-col justify-between pb-[4rem]   bg-purple-50   sm:w-[1280px] m-auto w-[375px] max-w-[100%]  sm:flex sm:flex-row  ">
        <div className="w-auto ">
          <div className="flex flex-start ">
            <div className="grid grid-cols-4 text-[14px] sm:text-[16px]  sm:grid-cols-4 mt-10 sm:mt-10 font-medium leading-7 text-gray-400 ">
              <Link to='/'><div>Home</div></Link>
              <Link to='/industry'><div>Products</div></Link>
              <Link to='/about'><div className="ml-4">About</div></Link>
              <Link to='/contact'><div className="ml-4">Contact</div></Link>

            </div>
          </div>
          <div className="flex flex-col text-[14px] sm:text-[16px] sm:w-[850px] sm:max-w-[100%] sm:flex-row sm:flex justify-between mt-8 font-medium text-gray-400">
            <div className="flex mr-8">
            <Link to = '/pharma'><div className="mr-8"  >Pharma</div></Link>
            <Link to = '/nutrition'><div className="  sm:mt-0">Nutraceuticals</div></Link>
                      
            </div>
          </div>
        </div>

        {/* =====================-right-=============== */}

        <div className="right mt-8 flex justify-start flex-col overflow-hidden">
          <div className="socioicon flex sm:flex place-content-start sm:place-content-end">
            
            <a href="https://www.linkedin.com/company/molequle/" className="linkdin mr-5" target="_blank" rel="noreferrer">
              <img src="./Linkdin.svg" alt="linkdin" />
            </a>
            <a className="whastaap sm:h-auto" href="http://wa.me/919560190710" target="_blank" rel="noreferrer">
              <img src="./Group 38548.svg" alt="tweeter" />
            </a>
          </div>
          <p className="mt-6 font-medium text-[14px] sm:text-[16px] text-gray-600">Elara Technology Private Limited</p>
        </div>
      </div>
    </div>
  )
}

export default Footer