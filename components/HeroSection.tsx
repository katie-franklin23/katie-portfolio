'use client'
import React from 'react'
import Image from 'next/image'
import { Link } from 'react-scroll/modules'

const HeroSection = () => {
  return (
    <section id="home">
      <div>
        <div>
          <Image src="/headshotKT.JPG" alt="" width={300} height={300} />
        </div>
        <div>
          <h1>Hi, I&#39;m Katie!</h1>
          <p>
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
