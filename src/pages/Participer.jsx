import { Link } from "react-router-dom"
import darkVector from '../assets/participerVectorDark.png'
import lightVector from '../assets/participerVectorLight.png'
import { useState } from "react"
import ParticiperForm from "../component/ParticiperForm"

export default function Participer() {
    const [formIsOpen,setFormIsOpen] = useState(false)
  
  return (
    <main className="pt-12 md:h-screen flex flex-col justify-around gap-12 md:gap-0 items-center md:pt-0">
      <section className="flex justify-center items-center md:justify-around w-full">
        <div className="flex flex-col items-center md:items-start gap-8 md:max-w-3xl">
          <h1 className="text-center md:text-left text-light-text-color dark:text-dark-text-color capitalize font-extrabold text-3xl md:text-6xl">
            bibliothèque
          </h1>
          <p className="text-center text-zinc-900 text-pretty dark:text-white max-w-2xl text-sm md:text-left md:text-base">
            Merci de penser à nous aider à mieux vous aider ! <br />
            Si vous avez un fichier qu&apos;on peut ajouter au contenu de notre site 
            ou bien des idées bénéfiques pour les étudiants, n&apos;hésitez pas à cliquer sur
            le bouton ci-dessous.
          </p>

          <button 
            className="text-gray-900 uppercase hover:text-white border border-gray-800 hover:bg-light-text-color focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-sm text-md px-6 py-3 text-center dark:border-white dark:text-white dark:hover:text-black dark:hover:bg-white dark:focus:ring-gray-800 transition-colors duration-500 ease-infocus:outline-none "
            onClick={()=>setFormIsOpen(true)}
            >
            participer
          </button>
        </div>
        <div className="hidden md:block max-w-lg">
          <img className="hidden dark:block" src={darkVector} />
          <img className="block dark:hidden" src={lightVector} />
        </div>
      </section>

        {formIsOpen && <ParticiperForm setFormIsOpen={setFormIsOpen} />}
    </main>
  )
}
