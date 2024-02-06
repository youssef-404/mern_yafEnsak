import { useState } from "react";
import NvCard from "../component/NvCard";
import Faq from "../component/Faq";
import darkVector from '../assets/faqVectorDark.png';
import lightVector from '../assets/faqVectorLight.png';

export default function Formation() {
    const [formationData,setFormationData] = useState({
        nvs:
            [{
                niveau:'cp1',
                description:'la première année des classes préparatoires'
            },
            {
                niveau:'cp2',
                description:'La deuxième année des classes préparatoires'
            },
            {
                niveau:'gi1',
                description:'La première année de la filière Génie informatique'
            },
            {
                niveau:'gi2',
                description:'La deuxième année de la filière Génie informatique'
            },
            {
                niveau:'meca1',
                description:'La première année de la filière Génie mécatronique'
            }],
        faqs:[
            {
                question:"C'est quoi l'objectif de la formation en Génie informatique ?",
                answer:"La formation permettra aux lauréats une insertion rapide dans le milieu professionnel et les prépare pour exercer divers métiers dans les domaines du génie logiciel, de la gestion et la sécurité des systèmes informatiques, du management informatique, de l’administration système et réseau, du conseil en informatique… L’objectif principal visé par l’équipe pédagogique est de former de véritables professionnels polyvalents maîtrisant les techniques informatiques d’aujourd’hui et aptes à assimiler celles de demain. Deux options sont disponibles: «Génie Logiciel et développement mobile » et « Sécurité Informatique »."
            },
            {
                question:"C'est quoi l'objectif de la formation en Génie industriel ?",
                answer:"La filière d’ingénierie en génie industriel, option logistique a pour but de former des ingénieurs capables d’optimiser l’ensemble de la chaîne logistique du point de vue stratégique (sélection des fournisseurs, ouverture/fermeture de site, localisation d’entrepôts, mise en place de systèmes d’information, création du réseau de distribution…) au point de vue opérationnel (gestion des approvisionnements, gestion de la qualité, des ateliers, de la distribution…)."
            },
            {
               question:"C'est quoi l'objectif de la formation en Génie électrique ?",
               answer:"La filière du Génie Electrique, prodigue aux élèves ingénieurs les fondements scientifiques du Génie Electrique appuyés sur ses bases dans l’électronique, l’automatisme, l’électrotechnique, l’électronique de puissance, l’informatique industrielle, l’automatique, … sans négliger les modules permettant une insertion dans l’environnement socio-économique : Techniques d’expression et de communication et Management. La formation se caractérise également par une grande dimension pratique à travers les activités pratiques, les stages et les projets réalisés en partenariat avec le milieu socio-économique."
            }
        ]
    })
  return (
    <main className="pt-12 md:min-h-screen flex flex-col items-center">
        <section>
            <h2 className="text-center md:text-left mb-2 text-light-text-color dark:text-dark-text-color capitalize font-extrabold text-xl md:text-3xl">
                Veuillez choisir votre niveau</h2>
            <div className="flex flex-col justify-center items-center sm:grid sm:grid-cols-2 md:grid-cols-3 gap-2">
                {formationData.nvs.map((nv,i) => <NvCard key={i} {...nv} />)}
            </div>
        </section>
        <section className="flex w-full justify-around items-center gap-2">
            <div>
                <h1 className="text-center mb-8 text-light-text-color dark:text-dark-text-color capitalize font-extrabold text-xl md:text-2xl">
                    questions fréquemment posées
                </h1>
                {formationData.faqs.map((faq,i) => <Faq key={i} {...faq} /> ) }
            </div>

            <div className="hidden md:block max-w-lg">
                <img className="hidden dark:block" src={darkVector} />
                <img className="block dark:hidden" src={lightVector} />
            </div>
        </section>
    </main>
  )
}
