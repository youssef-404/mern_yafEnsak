import { useState } from "react"



export default function ParticiperForm({setFormIsOpen}) {
    
  return (
    <div 
        className=" bg-black/50 flex overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full h-full"
        >
        <div className="relative p-4 w-full max-w-md max-h-full">
        
            <div className="relative bg-white rounded-lg shadow dark:bg-dark-primary">
            
                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                    <h3 className="text-lg capitalize font-semibold text-gray-900 dark:text-white">
                        ajouter un document
                    </h3>
                    <button 
                        type="button"
                        className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" 
                        onClick={()=>setFormIsOpen(false)}
                        >
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                        </svg>
                    </button>
                </div>
        
                <form className="p-4 md:p-5">
                    <div className="grid gap-4 mb-4 grid-cols-2">
                        <div className="col-span-2">
                            <label 
                                htmlFor="nom"
                                className="block mb-2 text-sm capitalize font-medium text-gray-900 dark:text-white"
                                >nom
                            </label>
                            <input 
                                type="text"
                                name="nom"
                                id="prenom"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                placeholder="entrez votre nom"
                                required=""/>
                        </div>
                        <div className="col-span-2">
                            <label 
                                htmlFor="prenom"
                                className="block mb-2 text-sm capitalize font-medium text-gray-900 dark:text-white"
                                >prénom
                            </label>
                            <input 
                                type="text"
                                name="prenom"
                                id="prenom"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                placeholder="entrez votre nom"
                                required=""/>
                        </div>
                        
                        <div className="col-span-2">
                            <label 
                                htmlFor="document"
                                className="block mb-2 text-sm capitalize font-medium text-gray-900 dark:text-white"
                                >document
                            </label>
                            <input 
                                type="file"
                                name="document"
                                id="document"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                required=""/>
                        </div>
                        <div className="col-span-2">
                            <label 
                                htmlFor="description" 
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Description du document
                            </label>
                            <textarea 
                                id="description" 
                                rows="4" 
                                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Écrivez la description du document ici"
                            ></textarea>                    
                        </div>
                    </div>
                    <button 
                        type="submit" 
                        className="text-white inline-flex items-center bg-light-text-color hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-dark-text-color dark:text-black dark:hover:bg-dark-text-color/80 dark:focus:ring-blue-800"
                        >
                        <svg className="me-1 -ms-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd"></path></svg>
                        Ajouter le document
                    </button>
                </form>
            </div>
        </div>
    </div> 
  )
}
