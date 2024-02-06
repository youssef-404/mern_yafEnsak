import { useState } from "react";
import { MdOutlineKeyboardArrowDown,MdOutlineKeyboardArrowUp } from "react-icons/md";


export default function Faq({question,answer}) {
    const [isOpen,setIsOpen] = useState(false)
  return (
    <div className="max-w-lg">
        <button 
            className={`w-full flex justify-between items-center font-semibold text-gray-600 dark:text-gray-400  py-2 border-b border-gray-300/80 gap-2`}
            onClick={()=>setIsOpen(prev=>!prev)}
            >
            <p className={`${isOpen? 'text-gray-900 dark:text-gray-300':''}`}>
                {question}
            </p>
            {
                isOpen ?
                <MdOutlineKeyboardArrowUp className="text-black dark:text-white"/>:
                <MdOutlineKeyboardArrowDown/>
            }
        </button>
        <div className={`px-1 text-gray-800 dark:text-gray-300 text-sm text-justify ${isOpen? ' max-h-fit opacity-100' : ''} opacity-0 overflow-hidden max-h-0 duration-500 transition-all`}>
            <p>{answer}</p>
        </div>
    </div>
  )
}
