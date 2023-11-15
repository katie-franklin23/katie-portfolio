'use client'
import React from 'react'
import Image from 'next/image'
import { Link } from 'react-scroll/modules'

const HeroSection = () => {
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center my-10 py-16">
        <div>
          <Image
            className="rounded-full shadow-2xl"
            src="/headshotKT.JPG"
            alt=""
            width={300}
            height={300}
          />
        </div>
        <div>
          <h1 className="text-4xl font-bold mt-6">Hi, I&#39;m Katie!</h1>
          <p className="text-lg mt-4 mb-6">
            Based in Auckland, New Zealand. Looking for a Junior Developer role.
            Passionate towards developing software solutions that enhance and
            simplify life, adding depth and significance to everyday
            experiences.
          </p>
          <Link
            to="projects"
            className="text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Projects
          </Link>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
