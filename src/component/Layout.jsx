import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";


export default function Layout() {
  return (
    <div className="dark:bg-dark-primary bg-light-primary-100 min-h-screen md:px-8 p-4 transition-colors duration-500 ease-infocus:outline-none flex flex-col">
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}
