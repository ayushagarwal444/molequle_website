import Navbar2 from "../../components/Navbar/Navbar2";
import TopHeader from "../../components/TopHeader/TopHeader";
import Header from "../../components/Header/Header";
import Contact from "../../components/Contact/Contact";
import Industry from "../../components/Industry/Industry";
import Testimonial from "../../components/Testimonials/Testimonial";
import Footer from "../../components/Footer/Footer";
import React from "react";
const Home = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
        <TopHeader/>
        <Navbar2/>
        <Header/>
        <Industry/>
        <Testimonial/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Home


