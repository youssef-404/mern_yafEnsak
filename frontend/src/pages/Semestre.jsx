import { useParams } from "react-router-dom"
import ModuleCard from "../component/ModuleCard"

export default function Semestre() {
    const {nv,sem} = useParams()
    const data= {
        semestre:'semestre 1',
        modules:[
            {
                name:'algebre de base',
            },
            {
                name: 'analyse de base 1'
            },
            {
                name:'analyse de base 2'
            },
            {
                name:'mecanique du point materiel'
            },{
                name:'tec:francais'
            }
        ]
    }
  return (
    <main  className="pt-12 md:min-h-screen flex flex-col items-center">
        <section>
            <h2 className="text-center md:text-left mb-6 text-light-text-color dark:text-dark-text-color capitalize font-extrabold text-xl md:text-3xl">
                {data.semestre}
            </h2>
            <div className="flex px-4 flex-col justify-center items-center sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {data.modules.map((module,i) => <ModuleCard key={i} module={module}/> )}
            </div>
        </section>
    </main>
  )
}
