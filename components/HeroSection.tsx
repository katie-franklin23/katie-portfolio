import React from 'react'
import Image from 'next/image'

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
        </div>
      </div>
    </section>
  )
}

export default HeroSection
