import "./contact.css"

const Contact = () => {
  return (
        <div className="contact_us_green">
  <div className="responsive-container-block big-container">
    <div className="responsive-container-block container">
      <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-7 wk-ipadp-10 line" id="i69b-2">
        <form className="form-box">
          <div className="container-block form-wrapper">
            <h1 className="text-2xl font-semibold">We are here to help</h1>
              <p className="text-base contactus-subhead mt-8 font-medium text-gray-500 sm:mt-6">Get in touch & let us know how we can help</p>
            <div className="responsive-container-block">
              <div className="responsive-cell-block wk-ipadp-6 wk-tab-12 wk-mobile-12 wk-desk-6" id="i10mt-6">
                <input className="input" id="ijowk-6" placeholder="Full Name" name="FirstName"/>
              </div>
              <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                <input className="input" id="indfi-4" placeholder="Company Name" name="Company Name"/>
              </div>
              <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                <input className="input" placeholder="Your Email" id="ipmgh-6" name="Email"/>
              </div>
              <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                <input className="input" id="imgis-5" name="PhoneNumber" placeholder="Phone number"/>
              </div>
              <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12 buttonIn" id="i634i-6">
                <textarea className="textinput" id="i5vyy-6" placeholder="Please enter query..."></textarea>
                <button className="submit-btn font-normal rounded-tl-lg rounded-br-lg">
                 Submit Message
              </button>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-5 wk-ipadp-10" id="ifgi">
        <div className="container-box">
          <div className="float-none sm:float-right">
            <img src="./Group 48702.svg" alt="logo" />
          </div>
          <div className="workik-contact-bigbox mt-8 sm:mt-24">
            <h1 className="text-content text-2xl font-semibold mb-5"> contact us</h1>
            <div className="workik-contact-box">
              <div className="flex mb-5">
                <img className="contact-svg" src="./Group 48772.svg"/>
                <p className="contact-text ">
                  Chat With Us
                </p>
                </div>
                <div className="flex mb-5">
                <img className="contact-svg" src="./Group 48735.svg"/>
                <p className="contact-text ">
                +91 9876543210
                </p>
                </div>
                <div className="flex mb-5">
                <img className="contact-svg" src="./Group 48736.svg"/>
                <p className="contact-text ">
                Ayush@molequle.biz
                </p>
                </div>
                <div className="flex">
                <img className="contact-svg" src="./Group 9044.svg"/>
                <p className="contact-text ">
                BPTP Centra One, Sector 61, Gurgaon, Haryana - 122001
                </p>
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