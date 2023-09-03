import "./header.css"
const Header = () => {
  return (
    <div className="main flex bg-slate-50">
        <div className="lefts">
            <h1 className="text-3xl font-bold heading sm:text-5xl sm:leading-loosen leading-relaxed ">Your Speciality chemicals 
                <span className="flex flex-col sm:leading-loose leading-relaxed">procuments partner</span>
            </h1>
            <p className="mt-4 para text-lg sm:text-2xl leading-loose font-normal">We Provide high quality chemicals with exceptional services & 
                <span className="flex flex-col leading-loose">competitive price</span>
            </p>
            <button className="mt-4  text-white button sm:mt-10">Browse Products</button>
        </div>
        <div className="rights float-right mt-10">
            <img className="h-auto w-auto float-right " src="\Group 48703.svg" alt="chemical-svg" />
        </div>
    </div>
  )
}

export default Header