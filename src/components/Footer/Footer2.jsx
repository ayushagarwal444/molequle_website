import { Link } from "react-router-dom"

const Footer2 = () => {
  return (
    <div className="bg-purple-50 pt-1 sm:pl-0 ">

      <img className="sm:block hidden p-10  sm:ml-auto xl:mr-[8%] 2xl:mr-[8%]" src="./Group 48702.svg" alt="logo" />
      <hr className="border sm:block hidden ml-[6%] sm:mr-[10%] 2xl:ml-[10%] xl:ml-[10%]  sm:ml-[6%] sm:w-[auto] m-auto w-[375px] max-w-[100%] " />
      <div className="flex flex-col justify-between pb-16 pl-[6%] sm:pr-[10%] 2xl:pl-[10%] xl:pl-[10%] sm:pl-[6%]  bg-purple-50   sm:w-[auto] m-auto w-[375px] max-w-[100%]  sm:flex sm:flex-row  ">
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
              <Link to='/pharma'><div className="mr-2"  >Pharma</div></Link>
              <Link to='/nutrition'><div className=" sm:ml-8 ml-5 sm:mt-0">Nutraceuticals</div></Link>


              
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

export default Footer2