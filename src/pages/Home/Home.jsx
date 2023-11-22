import Navbar2 from "../../components/Navbar/Navbar2";
import Header from "../../components/Header/Header";
import Contact from "../../components/Contact/Contact";
import Industry from "../../components/Industry/Industry";
import Testimonial from "../../components/Testimonials/Testimonial";
import Footer from "../../components/Footer/Footer";
import React from "react";
import Valuechain from "../../components/ValueChain/Valuechain";
const Home = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
     
     
        <div className="bg-white">
        <div className="sm:mx-auto sm:w-[1280px]">
          <Navbar2 />
          </div>
        </div>

        <div className="bg-[#FBFBFB]  sm:pt-4 backgroundMain" >
        <div className="mx-auto sm:w-[1280px] w-[360px] sm:pb-[20px] pb-[10px]">
          <Header />
          </div>
        </div>

        <div className="mx-auto sm:w-[1280px] w-[350px]">
        <Industry />
        </div>

        <div className="bg-[#F9F5FD]">
        <div className="mx-auto sm:w-[1280px] w-[350px]">
          <Valuechain />
          </div>
        </div>
        <div className="mx-auto sm:w-[1280px]">
        <Testimonial />
      </div>
  
      <div className="bg-purple-50 mt-20">
        <div className="sm:mx-auto sm:w-[1280px]">
          <Contact />
          <Footer />
        </div>
      </div>

    </div >
  )
}

export default Home


