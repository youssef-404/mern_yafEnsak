import { Link } from "react-router-dom";


export default function NvCard({niveau,description}) {
    
  return (
    <div className="flex flex-col max-w-80 group select-none ">
        <div className="bg-white border border-gray-200 justify-center items-center  w-full h-40 z-10 flex translate-y-20 group-hover:translate-y-0 group-hover:bg-light-text-color group-hover:dark:bg-dark-text-color  transition-all duration-500 ease-in-out shadow-xl ">
            <p
                className="text-5xl font-extrabold uppercase text-black group-hover:text-white"
                >
                {niveau}
            </p>
        </div>
        <div className=" flex flex-col px-4 justify-center gap-4 items-center border border-gray-200  bg-white w-full h-40 -translate-y-20 group-hover:translate-y-0 transition-all duration-500 ease-in-out  ">
            <p className="text-center"> 
                {description}
            </p>
            <div className="flex justify-around w-full">
                <Link
                    className="hover:text-light-text-color font-bold"
                    to={`${niveau}/s1`}
                >semestre 1</Link>
                <Link
                    className="hover:text-light-text-color font-bold"
                    to={`${niveau}/s2`}
                >semestre 2</Link>
            </div>
        </div>
    </div>
  )
}
