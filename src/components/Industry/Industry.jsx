import "./Indusrty.css"
import { Link } from "react-router-dom"

const Industry = () => {
    return (
        <>  
            <div className="w-auto ">
                <h1 className="text-2xl mx-auto font-medium sm:text-3xl mt-[4%] mb-[1%]  sm:w-[auto]  w-[375px] max-w-[100%]" >Categories: </h1>
                <div className="grid sm:gap-x-6 gap-x-2 grid-cols-2 sm:grid-cols-6 sm:w-[fit-content]  w-[375px] max-w-[100%]  pt-5 ">
                    <div className="h-[158px] w-auto sm:w-auto sm:h-auto overflow-hidden hover:border-purple-700  border-transparent border-2 hover:border-current hover:rounded-[4px] sm:mb-0 mb-2">
                        <Link to='/pharma'>
                        <div className="containers">
                            <img className="mt-0 ml-0 mb-5 sm:w-[156px] object-none sm:h-[208px] mr-0 sm:m-0 image overflow-hidden" src="./Rectangle 28634.png" alt="img1" />
                            <div className="bottom-right sm:top-[173px] top-[123px]">Intermediates</div>
                        </div>
                        </Link>
                    </div>
                    <div className="h-[158px] w-[163px] sm:w-auto sm:h-auto overflow-hidden hover:border-purple-700  border-transparent border-2 hover:border-current hover:rounded-[4px] sm:mb-0 mb-2">
                        <div className="containers">
                            <img className="mt-0 ml-0  mr-0 sm:m-0 image" src="./Rectangle 28635.svg" alt="img2" />
                            <div className="bottom-right sm:top-[173px] top-[123px]">Excipients</div>
                        </div>
                    </div>
                    <div className="h-[158px] w-[163px] sm:w-auto sm:h-auto overflow-hidden hover:border-purple-700  border-transparent border-2 hover:border-current hover:rounded-[4px] sm:mb-0 mb-2">
                        <div className="containers">
                            <img className="m-0 sm:m-0 image" src="./Rectangle 28640.svg" alt="img3" />
                            <div className="bottom-right  sm:top-[173px] top-[123px]">Solvents</div>
                        </div>
                    </div>
                    <div className="h-[158px] w-[163px] sm:w-auto sm:h-auto overflow-hidden hover:border-purple-700  border-transparent border-2 hover:border-current hover:rounded-[4px] sm:mb-0 mb-2">
                        <div className="containers">
                            <img className="m-0 sm:m-0 image" src="./Rectangle 28637.svg" alt="img5" />
                            <div className="bottom-right sm:top-[173px] top-[123px]">Nutraceutical</div>
                        </div>
                    </div>
                   
                </div>
                {/* first =====================================>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/}

                <div className="flex justify-between  flex-col-reverse mt-20 sm:mt-20 sm:flex sm:flex-row  sm:w-[fit-content]  w-[375px] max-w-[100%] h-auto" >
                    <div className="left w-auto sm:w-[524px] sm:mr-16" >
                        <h2 className="text-xl font-medium sm:text-3xl sm:leading-relaxed mt-5 sm:mt-0  sm:ml-0">Diverse Range of Specialty Chemicals</h2>
                        <p className="font-medium text-sm sm:text-lg whitespace-pre-wrap text-gray-500  tracking-normal mt-4  leading-loose sm:leading-loose  sm:ml-0 sm:mr-0 mr-5">Explore Molequle`s <span className="text-purple-600 leading-loose ">vast product portfolio,</span>  of Intermediates & Excipients for various Pharma end products, encompassing a comprehensive range of industrial and specialty chemicals.  <br />
                            Our efficient <span className="text-purple-600 leading-loose"> in-house formulation & rapid sampling
                                process </span> ensures swift turnaround. Upholding top-notch quality and safety, our products come with essential certifications and compliances, such as USP, IP, and other global standards.</p>
                    </div>
                    <div className="right ">
                        <img className="sm:ml-8" src="./Group 48718.png" alt="industry" />
                        <img className="absolute hidden sm:block " src="./Group.svg" alt="png" style={{ left: "-1%", bottom: "-130%" }} />
                    </div>
                </div>

                {/* second  =================================================>>>>>>>>>>>>>>*/}

                <div className="flex justify-between  flex-col mt-20 sm:mt-20 sm:flex sm:flex-row  sm:w-[fit-content]  w-[375px] max-w-[100%] h-auto" >
                    <div className="left relative top-0 left-0 ">
                        <img className="z-40 relative" src="./Mask group.jpg" alt="mask group" />
                        <img className="absolute top-[316px] left-[-50px] z-0 hidden sm:block" src="./Group 48669.jpg" alt="bg-dot" />
                    </div>
                    <div className="right w-auto sm:w-[524px]  mt-10 sm:mt-1 sm:ml-16" >
                        <h2 className="text-xl font-medium sm:text-3xl sm:leading-relaxed mr-3 sm:mr-0 ">Reliable suppliers with consistent performance</h2>
                        <div className="flex flex-col sm:flex ">
                            <p className="font-medium text-sm sm:text-lg  text-gray-500  gap-3  mt-4 float-left leading-loose sm:leading-loose mr-5">Derisk your supply chain by leveraging our expertise in crossborder sourcing. Place your trust in Molequle to procure top-quality products from our esteemed network of suppliers.</p>
                            <ul className="grid grid-rows-4 sm:grid-rows-2 grid-flow-col text-gray-500 text-sm sm:ml-6 ml-[5%] font-medium gap-4 mt-6 list sm:text-lg">
                                <li>100% Quality Assurance</li>
                                <li> Competitive Pricing</li>
                                <li>Efficient lead times</li>
                                <li>Custom Manufacturing</li>
                            </ul>
                            <Link to='/industry'>
                            <button className="float-left text-white text-sm sm:font-medium sm:mt-5 mt-4  ml-1 sm:ml-2 w-[81px] h-[51px] sm:h-[50px] sm:w-[122px]" style={{ backgroundColor: "rgba(141, 46, 209, 1)", borderRadius: "5px" }}>Explore</button>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* third =======================================================*/}

                <div className="flex justify-between  flex-col-reverse mt-20 sm:mt-28 sm:flex sm:flex-row  sm:w-[fit-content]  w-[375px] max-w-[100%] h-auto " >
                    <div className="left w-auto sm:w-[524px] my-auto" >
                        <h2 className="text-xl  font-medium sm:text-3xl leading-relaxed sm:leading-relaxed sm:ml-0 mr-5 sm:mr-0">Credit support and post-sale service</h2>
                        <p className="font-medium text-sm sm:text-lg  whitespace-pre-wrap text-gray-500  gap-3 tracking-normal mt-4  sm:ml-0  sm:mr-0 leading-loose sm:leading-loose">Get <span className="text-purple-600">extended technical and non-technical support.</span>  Our post-sale service ensures all queries are promptly addressed by a dedicated team. Additionally, we offer reliable credit support options to facilitate seamless transactions and cultivate long-term partnerships.</p>
                    </div>
                    <div className="right">
                        <img className="sm:ml-20" src="./Group 48755.png" alt="industry" />
                        <img className="absolute hidden sm:block" src="./group1.png" alt="png" style={{
                            right: "-0%", bottom: "-210%",
                        }} />
                    </div>
                </div>
            </div>
            
           
           
            

          

        </>
    )
}

export default Industry