import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import SlideUp from './SlideUp'
import { BsGithub, BsArrowUpRightSquare } from 'react-icons/bs'

const projects = [
  {
    name: 'To Do App',
    description:
      'This is a Todos Full-Stack application I built with TypeScript, React, JavaScript, HTML, and CSS. It lets users create and manage their to-do lists, enabling the addition of tasks and also allows users to delete tasks.',
    image: '/to-do-image.png',
    github: 'https://github.com/katie-franklin23/to-do',
    link: 'http://katie-franklin-todo.devacademy.nz/',
  },
  {
    name: 'Charlottes Web Log',
    description:
      'This application, developed during a Dev Academy project, showcases my proficiency in utilizing TypeScript, React, HTML, and CSS.',
    image: '/charlottes-web.png',
    github: 'https://github.com/katie-franklin23/charlottes-web',
    link: 'https://charlottes-web.vercel.app/',
  },
  {
    name: 'Book-Keepers Website',
    description:
      'The project, a collaborative effort during a Dev Academy group project, involves the development of a React-based application. The main functionality allows users to contribute book recommendations based on selected genres.',
    image: '/book-keepers.png',
    github: 'https://github.com/katie-franklin23/book-keepers',
    link: 'http://book-keepers.devacademy.nz/',
  },
  {
    name: 'Book-Keepers test',
    description:
      'The project, a collaborative effort during a Dev Academy group project, involves the development of a React-based application. The main functionality allows users to contribute book recommendations based on selected genres.',
    image: '/book-keepers.png',
    github: 'https://github.com/katie-franklin23/book-keepers',
    link: 'http://book-keepers.devacademy.nz/',
  },
]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default ProjectsSection
