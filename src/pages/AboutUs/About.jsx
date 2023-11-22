import TopHeader from '../../components/TopHeader/TopHeader'
import NavBar2 from '../../components/Navbar/Navbar2'
import ImageBackGround from '../../assets/Background.png'
import CountUp from 'react-countup';
import Footer2 from '../../components/Footer/Footer2';
import React from 'react';

const About = () => {
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div>
            <TopHeader />
            <div className="bg-white">
        <div className="sm:mx-auto sm:w-[1280px]">
          <NavBar2 />
          </div>
        </div>
            <div >
                <header className='headerAbout sm:pt-0 pt-14'>
                    <div className="w-auto sm:h-[195px] h-[168px] sm:bg-repeat-round rounded-b-[20px] " style={{ backgroundImage: `url(${ImageBackGround})` }}>
                        <div className=' pt-5 sm:pt-8 '>
                            <h1 className='text-white font-semibold text-[20px] sm:text-[32px] mt-4 sm:mt-8  w-auto  mx-auto flex justify-center' >Molequle:
                            </h1>
                        </div>
                        <p className='font-[500] text-[16px] sm:text-[20px] mx-auto text-white w-auto flex justify-center mt-2 sm:mt-2 text-center sm:mb-0 mb-4' style={{ lineHeight: "32px", letterSpacing: "2%" }}>Trusted Supplier of Pharma Intermediates and Excipients for top Indian Manufactures </p>

                    </div>
                </header>
                <div >
                    <div className="child1">
                        <div className="mission mx-auto sm:w-[1198px] w-[343px] flex sm:flex-row flex-col-reverse mt-5 sm:mt-20">
                            <div className="lefts sm:w-[504px] w-[343px] max-w-[100%] mx-auto">
                                <h1 className='text-black font-semibold text-[20px] sm:text-[28px]' style={{ lineHeight: "31px" }}>Our Mission </h1>
                                <p className='font-normal text-[14px] sm:text-[17px] text-[#808080] mt-5' style={{ lineHeight: "26px" }}>Molequle is your trusted partner in the world of specialty chemicals. With a global reach and a commitment to excellence, we're here to simplify your chemical sourcing and supply needs.</p>
                                <div className='flex mt-5'>
                                    <img src="./Tick.svg" alt="tick" />
                                    <p className='font-normal text-black text-[12px] sm:text-[17px] ml-5' style={{ lineHeight: "26px" }}>Assured Quality, Competitive Pricing</p>
                                </div>
                                <div className='flex mt-5'>
                                    <img src="./Tick.svg" alt="tick" />
                                    <p className='font-normal text-black text-[12px] sm:text-[17px] ml-5' style={{ lineHeight: "26px" }}>Directly from top manufacturers across Globe</p>
                                </div>
                                <div className='flex mt-5'>
                                    <img src="./Tick.svg" alt="tick" />
                                    <p className='font-normal text-black text-[12px] sm:text-[17px] ml-5' style={{ lineHeight: "26px" }}>Robust Supply Chain</p>
                                </div>
                            </div>
                            <div className="sm:w-auto w-[343px] mx-auto sm:mt-0 mt-10">
                                <img src="./Image.svg" alt="persons" />
                            </div>
                        </div>

                        <div className="sm:w-[1198px] w-[343px] max-w-[100%]  flex-col text-black font-semibold text-[20px] sm:text-[36px] sm:mt-20 mt-10  flex justify-center mx-auto  ">
                            <div className=' sm:w-[848px] w-[343px] mx-auto flex flex-col'>
                                <h1 className='sm:w-[848px] w-[334px] text-center max-w-[100%] font-[600] text-[18px] sm:text-[36px] ' style={{ lineHeight: "47px", letterSpacing: "2%" }}>Businesses all over the world trust
                                </h1>
                                <h1 className='text-center text-[18px] sm:text-[36px]'>Buffer to build their brand</h1></div>
                            <div className='sm:mt-16 mt-4 grid grid-cols-2 md:grid-cols-4 sm:w-[1198px] w-[318px] max-w-[100%] mx-auto '>
                                <div className='sm:w-[60px] w-[151px] h-[92px] mx-auto'>
                                    <CountUp
                                        className="font-[mulish] years font-[700] text-[22px] sm:text-[50px] font-mulish flex justify-center mx-auto text-center text-[#8D2ED1]"
                                        start={0}
                                        end={10}
                                        duration={2.75}
                                        useEasing={true}

                                    />
                                    <p className='font-[mulish] text-[#808080] font-[400] text-[14px] sm:text-[20px] flex justify-center' style={{ lineHeight: "30px" }}>Countries </p>
                                </div>
                                <div className='sm:w-[205px] w-[151px] h-[92px] mx-auto'>
                                    <CountUp
                                        className="font-[mulish] years font-[700] text-[22px] sm:text-[50px] font-mulish flex justify-center mx-auto text-center text-[#8D2ED1]"
                                        start={0}
                                        end={50}
                                        duration={5.75}
                                        useEasing={true}
                                        suffix='+'

                                    />
                                    <p className='font-[mulish] text-[#808080] font-[400] sm:w-[205px] max-w-[100%] sm:text-[20px] text-[14px] text-center flex justify-center mx-auto' style={{ lineHeight: "30px" }}>Suppliers </p>
                                </div>
                                <div className='sm:w-[205px] w-[151px] h-[92px] mx-auto'>
                                    <CountUp
                                        className="font-[mulish] years font-[700] text-[22px] sm:text-[50px] font-mulish text-center flex justify-center mx-auto text-[#8D2ED1]"
                                        start={0}
                                        end={200}
                                        duration={5.75}
                                        useEasing={true}
                                        suffix='+'

                                    />
                                    <p className='font-[mulish] text-[#808080] font-[400] sm:w-[215px] max-w-[100%] sm:text-[18px] text-[12px] text-center' style={{ lineHeight: "30px" }}>Chemicals</p>
                                </div>
                                <div className='sm:w-[316px] w-[151px] h-[92px] mx-auto'>
                                    <CountUp
                                        className="font-[mulish] years font-[700] text-[22px] sm:text-[50px] font-mulish flex justify-center mx-auto w-[90px] sm:w-[205px] text-[#8D2ED1]"
                                        start={0}
                                        end={5000}
                                        duration={5.75}
                                        useEasing={true}
                                        suffix='+'
                                        

                                    />
                                    <p className='font-[mulish] text-[#808080] font-[400] text-[12px] sm:text-[20px] flex justify-center' style={{ lineHeight: "30px" }}>Combined Capacity(MTPA)</p>
                                </div>
                            </div>
                        </div>
                        {/*=================== values========================= */}
                        <div className='sm:w-[1199px] w-[318px] max-w-[100%] sm:h-[652px] h-auto mx-auto  sm:mt-20 mt-8 sm:mb-0 mb-20'>
                            <h1 className='flex justify-center font-semibold text-[18px] sm:text-[36px] text-black'>Our Values</h1>
                            <div className='w-[1199px] max-w-[100%] grid grid-cols-2 sm:gap-x-20 gap-x-10 md:grid-cols-3 auto-rows-auto'>
                                <div className='sm:h-[326px] h-auto max-w-[100%]  hover:border hover:rounded-xl hover:border-[#DCDCDC]'>
                                    <img className=' sm:h-auto sm:w-auto h-[30px] w-[30px] flex justify-center mt-10 mx-auto' src="./Icon.svg" alt="icon" />
                                    <h1 className='sm:w-[300px] mx-auto sm:mt-5 mt-1 sm:mb-5 mb-1 flex  justify-center font-[600] text-[12.5px] sm:text-[26px] ' style={{ lineHeight: "12px" }}>Innovation</h1>
                                    <p className='sm:w-[300px] font-[400] mx-auto text-center text-[8.38px] sm:text-[17.18px] sm:leading-[25.85px] leading-3 text-[#808080] font-[Mulish] '>Innovation propels us to explore new horizons and reimagine possibilities in the world of specialty chemicals</p>
                                </div>
                                <div className='sm:h-[326px] h-auto max-w-[100%] hover:border hover:rounded-xl hover:border-[#DCDCDC]'>
                                    <img className='sm:h-auto sm:w-auto h-[30px] w-[30px] flex justify-center mx-auto mt-10' src="./Icon (1).svg" alt="icon" />
                                    <h1 className=' mx-auto sm:mt-5 mt-1 sm:mb-5 mb-1 flex  justify-center font-[600] text-[12.5px] sm:text-[26px]' style={{ lineHeight: "12px" }}>Growth</h1>
                                    <p className='sm:w-[300px] font-[400] mx-auto text-center text-[8.38px] sm:text-[17.18px] sm:leading-[25.85px] leading-3 text-[#808080] font-[Mulish]'>We are committed to fostering growth, for our clients as we journey toward success together</p>
                                </div>
                                <div className='sm:h-[326px] h-auto max-w-[100%] hover:border hover:rounded-xl hover:border-[#DCDCDC]'>
                                    <img className='sm:h-auto sm:w-auto h-[30px] w-[30px] flex justify-center mx-auto mt-10' src="./Icon (2).svg" alt="icon" />
                                    <h1 className=' mx-auto sm:mt-5 mt-1 sm:mb-5 mb-1 flex  justify-center font-[600] text-[12.5px] sm:text-[26px]' style={{ lineHeight: "12px" }}>Ownership</h1>
                                    <p className='sm:w-[300px] font-[400] mx-auto text-center text-[8.38px] sm:text-[17.18px] sm:leading-[25.85px] leading-3 text-[#808080] font-[Mulish]'>We take pride in every action and decision, owning our commitments and driving excellence at every step</p>
                                </div>
                                
                                <div className='sm:h-[326px] h-auto max-w-[100%]  hover:border hover:rounded-xl hover:border-[#DCDCDC]'>
                                    <img className='sm:h-auto sm:w-auto h-[30px] w-[30px] flex justify-center mx-auto mt-10' src="./Icon (3).svg" alt="icon" />
                                    <h1 className=' mx-auto sm:mt-5 mt-1 sm:mb-5 mb-1 flex  justify-center font-[600] text-[12.5px] sm:text-[26px]' style={{ lineHeight: "12px" }}>Team Work</h1>
                                    <p className='sm:w-[300px] font-[400] mx-auto text-center text-[8.38px] sm:text-[17.18px] sm:leading-[25.85px] leading-3 text-[#808080] font-[Mulish]'>By Collaborating seamlessly, we achieve remarkable outcomes and build lasting relationships</p>
                                </div>
                                <div className='sm:h-[326px] h-auto max-w-[100%]  hover:border hover:rounded-xl hover:border-[#DCDCDC]'>
                                    <img className='sm:h-auto sm:w-auto h-[30px] w-[30px] flex justify-center mx-auto mt-10' src="./Icon (4).svg" alt="icon" />
                                    <h1 className=' mx-auto sm:mt-5 mt-1 sm:mb-5 mb-1 flex  justify-center font-[600] text-[12.5px] sm:text-[26px]' style={{ lineHeight: "12px" }}>Commitment</h1>
                                    <p className='sm:w-[300px] font-[400] mx-auto text-center text-[8.38px] sm:text-[17.18px] sm:leading-[25.85px] leading-3 text-[#808080] font-[Mulish]'>Commitment is the bedrock of our actions, an unwavering promise to prioritize excellence in all endeavours</p>
                                </div>
                                <div className='sm:h-[326px] h-auto max-w-[100%]  hover:border hover:rounded-xl hover:border-[#DCDCDC]'>
                                    <img className='sm:h-auto sm:w-auto h-[30px] w-[30px] flex justify-center mx-auto mt-10' src="./Icon (5).svg" alt="icon" />
                                    <h1 className=' mx-auto sm:mt-5 mt-1 sm:mb-5 mb-1 flex  justify-center font-[600] text-[12.5px] sm:text-[26px]' style={{ lineHeight: "12px" }}>Sustainability</h1>
                                    <p className='sm:w-[300px] font-[400] mx-auto text-center text-[8.38px] sm:text-[17.18px] sm:leading-[25.85px] leading-3 text-[#808080] font-[Mulish]'>Demonstrating responsibility towards the enviroment and society, striving for sustainable and eco-friendly practices.</p>
                                </div>
                                
                            </div>
                            </div>
                            
                               
                           
                      
                    </div>
                    <div className="child2">
                        <div className='sm:w-[1198px] w-[343px] max-w-[100%] mx-auto sm:mt-20 mt-8 sm:mb-28 mb-14'>
                            <h1 className='sm:text-[28px] text-[18.3px] font-[600] text-[#2F2F2F] font-[Poppins]' style={{ lineHeight: "31px" }}>Committed to Excellence... 
</h1>
                            <p className='font-[400] sm:text-[20px] text-[14px] text-[#808080] sm:mt-10 mt-3' style={{ lineHeight: "30px" }}>Our strength lies in the strong and direct relationships we have cultivated with manufacturers. By eliminating intermediaries, we ensure a seamless supply chain, resulting in uninterrupted access to high-quality chemicals at competitive prices.
                            
                            </p>
                            <p className='font-[400] sm:text-[20px] text-[14px] text-[#808080] sm:mt-10 mt-3' style={{ lineHeight: "31px" }}>
                            We don't just stop at sourcing chemicals. Our expertise in the chemical industry allows us to work closely with clients in product development, application enhancement, and improving overall product quality and cost efficiency. We provide strategic guidance on the optimal timing for chemical procurement, considering pricing forecasts and market dynamics.
                            </p>
                            <p className='font-[400] sm:text-[20px] text-[14px] text-[#808080] mt-3 sm:mt-10' style={{ lineHeight: "31px" }}>   
                                Our vast network of suppliers and long-standing relations enable us to offer a wide range of products with a ready inventory, ensuring timely deliveries to clients nationwide. <br />
                                We aim to be your strategic partner, dedicated to your success and satisfaction, providing the highest quality chemicals, expert guidance, and unparalleled service as we journey towards success together.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer2 />
        </div>
    )
}

export default About