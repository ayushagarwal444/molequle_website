

const Valuechain = () => {
  return (
    <div className="w-auto bg-purple-50 mt-10 sm:mt-28 h-auto pt-10  sm:pb-10 pb-5 overflow-hidden" style={{ height: "auto" }}>
    <div className=" sm:w-[auto] m-auto w-[375px] max-w-[100%]">
        <h1 className="text-xl font-medium sm:text-3xl sm:w-auto w-[375px] leading-[27px]">Redefining <span className="underline-text">Speciality  Chemicals</span>  value chain!</h1>
        <p className="font-normal leading-7 tracking-[1%] text-[16px]  text-[#6A6A6A] mr-0 sm:mr-[4rem] sm:text-lg whitespace-pre-wrap  gap-3  mt-3 " >Molequle is your trusted gateway to best manufacturers from China, India, and beyond to fulfill all your chemical needs. We provide innovative and market driven products across industries with end-to-end logistics support.</p>

        <div className="grid grid-cols-1 sm:grid-cols-4 mt-10 mr-0 sm:mr-14">
            {/* value chain first  card*/}
            <div className="first w-auto sm:w-[265px] sm:h-[236px] h-[215px]" >
                <img className="sm:h-auto sm:w-auto h-[46px] w-[46px]" src="./Group 487366.svg" alt="first" />
                <h2 className="text-base sm:text-xl font-medium mt-5">Formulation</h2>
                <p className="font-normal leading-7 tracking-[1%] text-[16px] text-black sm:mr-4 sm:text-lg    mt-2 "> In-house formulation to ensure equivalent grades compatible to current process</p>
            </div>
            {/* value chain second card */}
            <div className="second w-auto sm:w-[265px] sm:h-[236px] h-[215px]" >
                <img className="sm:h-auto sm:w-auto h-[46px] w-[46px]" src="./Group 48733.svg" alt="second" />
                <h2 className="text-base sm:text-xl font-medium mt-5">Production testing</h2>
                <p className="font-normal leading-7 tracking-[1%] text-[16px] text-black sm:mr-4 sm:text-lg   mt-2 ">100% quality assurance via our 3 step production & post-production testing</p>
            </div>
            {/* value chain third card */}
            <div className="third w-auto sm:w-[265px] sm:h-[236px] h-[205px]" >
                <img className="sm:h-auto sm:w-auto h-[46px] w-[46px]" src="./Group 48738.svg" alt="Third" />
                <h2 className="text-base sm:text-xl font-medium mt-5">Logistics</h2>
                <p className="font-normal leading-7 tracking-[1%] text-[16px] text-black sm:mr-4 sm:text-lg   mt-2 ">Efficient & Cost-effective logistics for fast turnaround time </p>
            </div>
            {/* value chain fourth card */}
            <div className="fourth w-auto sm:w-[265px] sm:h-[236px] h-[215px]" >
                <img className="sm:h-auto sm:w-auto h-[46px] w-[46px]" src="./Group 48739.svg" alt="fourth" />
                <h2 className="text-base sm:text-xl font-medium mt-5">Payment</h2>
                <p className="font-normal leading-7 tracking-[1%] text-[16px] text-black sm:mr-4 sm:text-lg  mt-2 ">Best payment terms along with Credit support for your growth. </p>
            </div>
        </div>
    </div>
</div>
  )
}

export default Valuechain