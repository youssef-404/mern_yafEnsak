import { FaFacebook,FaInstagram,FaLinkedin,FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="flex flex-col justify-end items-center py-2 flex-1 mt-4 ">
        <h1 className=" font-bold uppercase text-light-text-color dark:text-dark-text-color">
            code breakers</h1>
        
        <ul className="flex capitalize text-black dark:text-white flex-col items-center py-2 font-medium md:font-bold md:space-x-8  md:flex-row ">
          <Link 
            to="formation"
            className='text-center py-1'>
            <li>formation</li>
          </Link>
          <Link 
            to=""
            className='text-center py-1'>
            <li>feedback</li>
          </Link>
          <Link 
            to="participer"
            className='text-center py-1'>
            <li>participer</li>
          </Link>
          <Link className=' text-center py-1'>
            <li>à propos</li>
          </Link>
          <Link className='text-center py-1'>
            <li>contact</li>
          </Link>
        </ul>
        
        <div className="flex justify-start items-center gap-3 dark:text-white text-black">
            <a href="">
              <FaFacebook className="w-5 h-5"/>
            </a>
            <a href="">
              <FaInstagram className="w-5 h-5"/>
            </a>
            <a href="">
              <FaLinkedin className="w-5 h-5"/>
            </a>
            <a href="">
              <FaTwitter className="w-5 h-5"/>
            </a>
        </div>
    </footer>
  )
}
