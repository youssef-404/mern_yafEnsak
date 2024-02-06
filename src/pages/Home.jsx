import { Link } from "react-router-dom"
import darkVector from '../assets/homeVectorDark.png'
import lightVector from '../assets/homeVectorLight.png'
import { useEffect, useState } from "react"

export default function Home() {
  const [randomQuote,setRandomQuote] = useState(
    {
      "content": "Opportunities don't happen. You create them.",
      "author": "Chris Grosser"
    }
  )
  useEffect(()=>{
    const getData = async () =>{
      const res = await fetch('https://api.quotable.io/quotes/random?tags=success,famous-quotes')
      const data = await res.json()
      setRandomQuote(data[0])
    }
    getData()
  },[])
  return (
    <main className="pt-12 md:h-screen flex flex-col justify-around gap-12 md:gap-0 items-center md:pt-0">
      <section className="flex justify-center items-center">
        <div className="flex flex-col items-center md:items-start gap-8 md:max-w-3xl">
          <h1 className="text-center md:text-left text-light-text-color dark:text-dark-text-color capitalize font-extrabold text-3xl md:text-6xl">
            bienvenue chers <br /> ensakistes
          </h1>
          <p className="text-center text-zinc-900 text-pretty dark:text-white text-sm md:text-left md:text-base">
            Ici vous trouverez les cours, les travaux dirigés et les contrôles-examens qui vont vous faciliter le travail pour accéder aux informations de votre besoin.
            <br />
            L’équipe du Code breakers vous souhaite bonne chance !
          </p>

          <Link 
            to='formation'
            className="text-gray-900 uppercase hover:text-white border border-gray-800 hover:bg-light-text-color focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-sm text-md px-6 py-3 text-center dark:border-white dark:text-white dark:hover:text-black dark:hover:bg-white dark:focus:ring-gray-800 transition-colors duration-500 ease-infocus:outline-none ">
            commencer
          </Link>
        </div>
        <div className="hidden md:block max-w-lg">
          <img className="hidden dark:block" src={darkVector} />
          <img className="block dark:hidden" src={lightVector} />
        </div>
      </section>
       
      <section className="dark:text-white text-black text-center flex flex-col gap-1">
        <h1 className="font-black uppercase text-xl">quotes of the day </h1>
        <p>&quot;{randomQuote.content}&quot;</p>
        <p className="">-- {randomQuote.author}!</p>
      </section>
    </main>
  )
}
