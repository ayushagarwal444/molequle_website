const Industry = () => {
  return (
    <>
    
    <h1 className="text-2xl font-medium sm:text-3xl" style={{margin:"4% 0 1% 10%"}} >Industry </h1>
    <div className="grid grid-cols-2 sm:grid-cols-6  mr-5 sm:mr-60 ml-1 sm:ml-32">
        <img className="m-4" src="./Group 48745.svg" alt="img1" />
        <img className="m-4" src="./Group 48744.svg" alt="img2" />
        <img className="m-4" src="./Group 48742.svg" alt="img3" />
        <img className="m-4" src="./Group 48748.svg" alt="img5" />
        <img className="m-4" src="./Group 48746.svg" alt="img6" />
    </div>
    {/* first =====================================>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/}

    <div className="flex flex-col-reverse mt-5 sm:mt-6 sm:flex sm:flex-row md:ml-40 sm:ml-40 h-auto" >
        <div className="left w-auto sm:w-2/5" >
            <h2 className="text-xl font-medium sm:text-3xl sm:leading-relaxed  ml-5 sm:ml-0">Diverse Range of Specialty Chemicals</h2>
            <p className="font-medium text-sm sm:text-lg whitespace-pre-wrap text-gray-500   gap-3 tracking-normal mt-4 float-left leading-loose sm:leading-loose ml-5 sm:ml-0 sm:mr-0 mr-5">Explore Molequle`s <span className="text-purple-600 leading-loose ">vast product portfolio,</span> ranging from APIs & Excipients in Pharma to Polymers in Plastics, encompassing a comprehensive range of industrial and specialty chemicals. <br />
            Our efficient <span className="text-purple-600 leading-loose"> in-house formulation & rapid sampling
            process </span> ensures swift turnaround. Upholding top-notch quality and safety, our products come with essential certifications and compliances, such as USP, IP, and other global standards.</p>
        </div>
        <div className="right ml-6  sm:ml-20">
            <img  src="./Group 48718.png" alt="industry"  />
            <img className="absolute" src="./Group.svg" alt="png" style={{left:"-1%" , bottom:"-100%"}} />
        </div>
    </div>

    {/* second  =================================================>>>>>>>>>>>>>>*/}

    <div className="flex flex-col mt-20 sm:flex sm:flex-row md:ml-40 sm:ml-40 h-auto" >
    <div className="left  mr-8 sm:ml-0 ml-5">
            <img  src="./Mask group.jpg" alt="mask group"  />
        </div>
        <div className="right w-auto sm:w-2/5 ml-6 mt-10 sm:mt-1" >
            <h2 className="text-xl font-medium sm:text-3xl sm:leading-relaxed ">Reliable suppliers with consistent performance</h2>
            <div className="flex flex-col sm:flex ">
            <p className="font-medium text-sm sm:text-lg  text-gray-500  gap-3  mt-4 float-left leading-loose sm:leading-loose mr-5">Derisk your supply chain by leveraging our expertise in crossborder sourcing. Place your trust in Molequle to procure top-quality products from our esteemed network of suppliers.</p>
            <ul className="grid grid-rows-4 sm:grid-rows-2 grid-flow-col text-gray-500 text-sm ml-6 font-medium gap-4 mt-6 list-disc sm:text-lg">
              <li>100% Quality Assurance</li>
              <li> Competitive Pricing</li>
              <li>Efficient lead times</li>
              <li>Custom Manufacturing</li>
            </ul>
            <button className="float-left text-white font-medium mt-5 ml-2" style={{height:"50px", width:"122px" , backgroundColor:"rgba(141, 46, 209, 1)", borderRadius:"5px"}}>Explore</button>
            </div>
        </div>
    </div>

    {/* third =======================================================*/}

    <div className="flex flex-col-reverse  sm:mt-28 sm:flex sm:flex-row md:ml-40 sm:ml-40 h-auto mt-20" >
        <div className="left w-auto sm:w-2/5" >
            <h2 className="text-xl mt-10 sm:mt-20 font-medium sm:text-3xl leading-relaxed sm:leading-relaxed ml-5 sm:ml-0 mr-5 sm:mr-0">Credit support and post-sale service</h2>
            <p className="font-medium text-sm sm:text-lg  whitespace-pre-wrap text-gray-500  gap-3 tracking-normal mt-4 ml-5 sm:ml-0 mr-5 sm:mr-0 leading-loose sm:leading-loose">Get <span className="text-purple-600">extended technical and non-technical support.</span>  Our post-sale service ensures all queries are promptly addressed by a dedicated team. Additionally, we offer reliable credit support options to facilitate seamless transactions and cultivate long-term partnerships.</p>
        </div>
        <div className="right ml-4 sm:ml-14">
            <img src="./Group 48755.png" alt="industry"  />
            <img className="absolute " src="./group1.png" alt="png" style={{right:"-0%" , bottom:"-180%",
          }} />
        </div>
    </div>
    {/* value chain ======================>>>>>>>>>>>>>>>>>>>>>>>>>> */}
    <div className="w-auto bg-purple-50 mt-20 h-auto" style={{ padding:"3% 10% 4% 10% ", height:"auto"}}>
        <h1 className="text-xl font-medium sm:text-3xl">Redefining Speciality Chemicals value chain!</h1>
        <p className="font-medium text-sm sm:text-lg whitespace-pre-wrap text-gray-600  gap-3 tracking-normal mt-4">Molequle is your trusted gateway to best manufacturers from China, India, and beyond to fulfill all your chemical needs. We provide innovative and market driven products across industries with end-to-end logistics support.</p>

        <div className="grid grid-cols-1 sm:grid-cols-4 mt-10">
            {/* value chain first  card*/}
            <div className="first w-auto sm:w-[265px]" style={{height:"236px"}}>
                <img src="./Group 487366.svg" alt="first" />
                <h2 className="text-base sm:text-xl font-medium mt-5">Formulation</h2>
                <p className="font-normal text-sm sm:text-lg  text-gray-600 tracking-normal mt-2 float-left"> In-house formulation to ensure equivalent grades compatible to current process</p>
            </div>
            {/* value chain second card */}
            <div className="second w-auto sm:w-[265px]" style={{height:"236px"}}>
            <img src="./Group 48733.svg" alt="second" />
                <h2 className="text-base sm:text-xl font-medium mt-5">Production testing</h2>
                <p className="font-normal text-sm sm:text-lg whitespace-pre-wrap text-gray-600  gap-3 tracking-normal mt-2 float-left">100% quality assurance via our 3 step production & post-production testing</p>
            </div>
            {/* value chain third card */}
            <div className="third w-auto sm:w-[265px]"style={{height:"236px"}}>
            <img src="./Group 48738.svg" alt="Third" />
                <h2 className="text-base sm:text-xl font-medium mt-5">Logistics</h2>
                <p className="font-normal text-sm sm:text-lg whitespace-pre-wrap text-gray-600  gap-3 tracking-normal mt-2 float-left">Efficient & Cost-effective logistics for fast turnaround time </p>
            </div>
            {/* value chain fourth card */}
            <div className="fourth w-auto sm:w-[265px]"style={{height:"236px"}}>
            <img src="./Group 48739.svg" alt="fourth" />
                <h2 className="text-base sm:text-xl font-medium mt-5">Payment</h2>
                <p className="font-normal text-sm sm:text-lg whitespace-pre-wrap text-gray-600  gap-3 tracking-normal mt-2 float-left">Best payment terms along with Credit support for your growth. </p>
            </div>
        </div>
    </div>
    <div style={{margin:"5% 10% 2% 10%"} }>
        <h1 className="text-xl sm:text-3xl font-medium">Uncompromising quality with right compliances...</h1>
        <p className="font-medium text-sm sm:text-lg whitespace-pre-wrap text-gray-600  gap-3 tracking-normal mt-4">From Indian & US Pharmacopoeia to Reach & Toy Safety, our vast suppliers network meets highly rigid and extensive regulatory compliances.  </p>
        <div className="grid grid-cols-3 gap-x-3 gap-y-3 sm:grid-cols-5 mt-10 sm:mt-10 mb-5 ">
        <img src="./Group 48681.svg" alt="first" />
        <img src="./Group 48682.svg" alt="secind" />
        <img src="./Group 48683.svg" alt="thirs" />
        <img src="./Group 48684.svg" alt="fourth" />
        <img src="./Group 48685.svg" alt="fourth" />
    </div>
    </div>
   
    
    </>
  )
}

export default Industry