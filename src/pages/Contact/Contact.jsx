import TopHeader from '../../components/TopHeader/TopHeader'
import NavBar2 from '../../components/Navbar/Navbar2'
import Image from '../../assets/BackgroundContact.png';
import "./contactpage.css"
import Footer2 from '../../components/Footer/Footer2';
import { useFormik } from 'formik';
import React from 'react';






const Contact = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const formik = useFormik({
    initialValues: {
      from_name: '', //user name
      to_name: '', //email id of the admin
      subject: '', // subject of email
      reply_to: '',
      form_company: '', // user email
      message: '',// message of email
      form_phone: '',
    },
  });

  return (

    <div className='relative overflow-hidden'>
      <TopHeader />
      <div className="bg-white">
        <div className="sm:mx-auto sm:w-[1280px]">
          <NavBar2 />
          </div>
        </div>
      <header className='headerContact overflow-hidden sm:pt-0 pt-14'>
        <div className="upper sm:h-[416px] h-[393px] rounded-b-[12px] sm:rounded-b-[20px]" style={{ backgroundImage: `url(${Image})` }}>
          <div className=' p-5 sm:p-8 '>
            <h1 className='text-white font-semibold leading-[32px] text-[20px] sm:text-[32px] mt-6 headerContact w-auto sm:w-[703px] mx-auto  text-center' >
              Get in touch & let us know how we can help</h1>
          </div>
          <div className="socioIcon flex  flex-col-reverse justify-center sm:flex sm:flex-row w-auto sm:w-[754px] mx-auto ">
            <div className="whatsapp flex flex-wrap mr-10">
              <img className='sm:h-[28px] mt-1 sm:w-[28px] h-[20px] w-[20px] hidden sm:block ' src="./Vector.svg" alt="logo" />
              <p className='text-white font-medium  ml-4 hidden sm:block text-[16px] sm:text-[18px] underline underline-offset-8' style={{ lineHeight: "30.3px" }}><a href="http://wa.me/919560190710" target="_blank" rel="noreferrer">Chat with us</a></p>
            </div>
            <div className="phone  mx-auto sm:mx-0   flex flex-wrap ">
              <i className="fa fa-mobile fa-2x text-white" aria-hidden="true"></i>
              <p className='text-white font-medium  ml-3 mx-auto mr-10 text-[16px] sm:text-[18px]' style={{ lineHeight: "33.3px" }}> +91 9560190710</p>
            </div>
            <div className="mail flex mx-auto sm:mx-0 mb-5">
              <img className='sm:mb-1 mb-0 mt-2 sm:mt-0 sm:h-[36px] sm:w-[26px] h-[20px] w-[20px]' src="./Vector (2).svg" alt="logo" />
              <p className='text-white ml-4 font-medium  text-[16px] sm:text-[18px]' style={{ lineHeight: "33.3px" }}>info@molequle.biz</p>
            </div>
          </div>
        </div>
      </header>
      <div className='sm:h-[28rem] h-screen  sm:mb-64 mb-56'></div>
      <Footer2 />
      <div>

        <form className='absolute z-0 left-0 right-0 mx-auto sm:top-80 top-[320px] sm:mt-6 mt-0 sm:w-[1198px] w-[343px] h-auto   bg-white rounded-xl shadow' action="https://fabform.io/f/IycCbfB" method="post">
          <div className="text-gray-700" >
            <div className="container px-5 sm:px-12 py-12  mx-auto" >
              <div className=" mx-auto">
                <div className="flex flex-wrap -m-2">
                  <div className="p-2 w-auto sm:w-1/2 " >
                    <div className="relative " >
                      <div className='flex'>
                        <label htmlFor="form_name" className="leading-7  text-sm text-black font-bold ">
                          Full Name*
                        </label>
                      </div>
                      <input
                        id="username"
                        onChange={formik.handleChange}
                        value={formik.values.from_name}
                        type="text"
                        name="from_name"
                        placeholder='full name'
                        required
                        className="sm:w-full sm:mt-5 mt-2 rounded-[8px] h-16 border font-normal border-gray-300 focus:border-purple-500 text-base outline-none text-gray-700 py-2 px-5 leading-8 transition-colors duration-200 ease-in-out w-[300px]"
                      />
                    </div>
                  </div>
                  <div className="p-2 sm:w-1/2 w-auto">
                    <div className="relative">
                      <div className='flex'>
                        <label
                          htmlFor="to_name"
                          className="leading-7 text-sm text-gray-600 font-bold"
                        >
                          Email*
                        </label>
                      </div>
                      <input
                        onChange={formik.handleChange}
                        value={formik.values.to_name}
                        type="email"
                        id="to_name"
                        name="to_name"
                        placeholder='example@youremail.com'
                        required
                        className="sm:w-full sm:mt-5 mt-2 rounded-[8px] h-16 border font-normal border-gray-300 focus:border-purple-500 text-base outline-none text-gray-700 py-2 px-5 leading-8 transition-colors duration-200 ease-in-out w-[300px]"
                      />
                    </div>
                  </div>
                  <div className="p-2 w-auto sm:w-1/2 sm:mt-5">
                    <div className="relative">
                      <div className='flex'>
                        <label htmlFor="Phone_NUmber" className="leading-7 text-sm font-bold text-gray-600">
                          Phone Number*
                        </label>
                      </div>
                      <input
                        onChange={formik.handleChange}
                        value={formik.values.form_phone}
                        type="number"
                        id="form_phone"
                        name="form_phone"
                        placeholder='your phone number'
                        required
                        className="sm:w-full sm:mt-5 mt-2 h-16 rounded-[8px] font-normal border border-gray-300 focus:border-purple-500 text-base outline-none text-gray-700 py-2 px-5 leading-8 transition-colors duration-200 ease-in-out w-[300px]"
                      />
                    </div>
                  </div>
                  <div className="p-2  w-auto sm:w-1/2  sm:mt-5">
                    <div className="relative">
                      <div className='flex'>
                        <label
                          htmlFor="subject"
                          className="leading-7 text-sm font-bold text-gray-600"
                        >
                          Company Name*
                        </label>
                      </div>
                      <input
                        onChange={formik.handleChange}
                        value={formik.values.subject}
                        type="Text"
                        id="subject"
                        name="subject"
                        placeholder='your company name'
                        required
                        className="sm:w-full sm:mt-5 mt-2 h-16 font-normal rounded-[8px] border border-gray-300 focus:border-purple-500 text-base outline-none text-gray-700 py-1 px-5 leading-8 transition-colors duration-200 ease-in-out w-[300px]"
                      />
                    </div>
                  </div>
                  <div className="p-2 w-full sm:mt-5">
                    <div className="relative">
                      <div className='flex'>
                        <label
                          htmlFor="Messages"
                          className="leading-7 text-sm font-bold text-gray-600"
                        >
                          Message*
                        </label>
                      </div>
                      <textarea
                        autoComplete="off"
                        onChange={formik.handleChange}
                        value={formik.values.message}
                        id="message"
                        name="message"
                        placeholder='Message'
                        required
                        className="w-full sm:mt-5 mt-2 h-64 rounded-[8px] border border-gray-300 focus:border-purple-500  text-base outline-none font-normal text-gray-700 py-5 px-6 resize-none leading-6 transition-colors duration-200 ease-in-out"
                      ></textarea>
                    </div>
                  </div>
                  <div className="p-2">
                    <button type="submit" className="mt-4 text-white bg-purple-600 border-0 text-sm  py-2 px-[1rem] sm:px-8 focus:outline-none hover:bg-purple-800 sm:h-[68.59px]  sm:text-base rounded-lg font-medium float-left sm:w-[195px] w-[141px] h-[56px]">
                      Send Message
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>

  )
}

export default Contact