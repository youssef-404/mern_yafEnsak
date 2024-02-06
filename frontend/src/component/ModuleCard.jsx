import { Link } from "react-router-dom"
import icon from "./info.png"


export default function ModuleCard({module}) {
  
  return (
    <Link to="">
    <div className="flex flex-col gap-1 rounded-md bg-white max-w-60 w-full p-4 justify-center items-center h-28 shadow-xl">
      <div className="flex max-w-14">
        <img src={icon} alt="icon" />
      </div>
      <p className=" text-center font-semibold text-sm ">
        {module.name}</p>
    </div>
    </Link>
  )
}
