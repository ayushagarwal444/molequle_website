import { Link } from "react-router-dom"
const TopHeader = () => {
  return (
    <div className="bg-black h-12  text-white hidden p-1 sm:flex">
        <div className="mx-auto flex my-auto"> 
        <p className="mx-5 text-gray-300"> Facing challenge with any procuments ?</p>
        <Link to= '/contact'><b className="underline text-gray-300"> Contact us Now</b> </Link>
        
        </div>
    </div>
  )
}

export default TopHeader