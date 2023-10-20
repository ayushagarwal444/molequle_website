import "./contact.css"

const Contact = () => {
  return (
        <div className="contact_us_green overflow-hidden">
  <div className="responsive-container-block big-container mt-[30px]">
    <div className="responsive-container-block container">
      <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-7 wk-ipadp-10 line" id="i69b-2">
        <form className="form-box  sm:w-[auto] m-auto w-[375px] max-w-[100%] mt-20">
          <div className="container-block form-wrapper  2xl:pl-[6%] xl:pl-[2%] sm:pl-[6%]">
            <h1 className="text-2xl font-semibold text-black flex flex-initial">We are here to help</h1>
              <h3 className="font-normal leading-7 tracking-[2%] text-[15px] text-[#6A6A6A]  sm:text-lg whitespace-pre-wrap  gap-3  mt-2">Get in touch & let us know how we can help</h3>
            <div className="responsive-container-block ">
              <div className="responsive-cell-block wk-ipadp-6 wk-tab-12 wk-mobile-12 wk-desk-6" id="i10mt-6">
                <input className="input" id="ijowk-6" placeholder="Full Name" name="FirstName" required/>
              </div>
              <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                <input className="input" id="indfi-4" placeholder="Company Name" name="Company Name" required/>
              </div>
              <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                <input className="input" type="email" placeholder="Your Email" id="ipmgh-6" name="Email" required/>
              </div>
              <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                <input className="input" id="imgis-5" name="PhoneNumber" placeholder="Phone number" required/>
              </div>
              <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12 buttonIn" id="i634i-6">
                <textarea className="textinput" id="i5vyy-6" placeholder="Please enter query..." required></textarea>
                <button className="submit-btn font-normal sm:rounded-tl-lg sm:rounded-br-lg rounded">
                 Submit Message
              </button>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-5 wk-ipadp-10" id="ifgi">
        <div className="container-box">
          <div className="float-none sm:float-right ml-10">
            <img className="sm:block hidden" src="./Group 48702.svg" alt="logo" />
          </div>
          <div className="workik-contact-bigbox mt-8 sm:mt-24">
            <h1 className="text-content text-2xl font-semibold mb-5"> contact us</h1>
            <div className="workik-contact-box">
              <div className="flex mb-5">
                <img className="contact-svg  mr-5 sm:h-[28px] sm:w-[28px] h-[24px] w-[24px]" src="./Group 48772.svg"/>
                <a className="contact-text underline font-medium" href="http://wa.me/918010150164" target="_blank" rel="noreferrer">
                  Chat With Us
                </a>
                </div>
                <div className="flex mb-5">
                <img className="contact-svg  mr-5 sm:h-auto sm:w-auto h-[24px] w-[24px]" src="./Group 48735.svg"/>
                <p className="contact-text font-medium ">
                +91 9560190710
                </p>
                </div>
                <div className="flex mb-5">
                <img className="contact-svg  mr-5 sm:h-auto sm:w-auto h-[24px] w-[24px]" src="./Group 48736.svg"/>
                <p className="contact-text font-medium">
                  
                utpal@molequle.biz
                </p>
                </div>
                <div className="flex">
                <img className="contact-svg  mr-5 sm:h-auto sm:w-auto h-[24px] w-[24px]" src="./Group 9044.svg"/>
                <a className="contact-text font-medium" href="https://maps.app.goo.gl/ew4BKbf9ZwWxu3qK6" target="_blank" rel="noreferrer">
                BPTP Centra One, Sector 61, Gurgaon, Haryana - 122001
                </a>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default Contact