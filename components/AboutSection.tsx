import React from 'react'
import Image from 'next/image'

const skills = [
  { skill: 'HTML5' },
  { skill: 'CSS' },
  { skill: 'JavaScript' },
  { skill: 'TypeScript' },
  { skill: 'React' },
  { skill: 'Agile Environment' },
  { skill: 'Teamwork' },
  { skill: 'Git' },
  { skill: 'GitHub' },
  { skill: 'SQLite' },
]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              Hi, my name is Katie and I am a{' '}
              <span className="font-bold">{'highly ambitious'}</span>,
              <span className="font-bold">{' self-motivated'}</span>, and
              <span className="font-bold">{' driven'}</span> Full Stack
              Developer based in Auckland, New Zealand.
            </p>
            <br />
            <p>
              I graduated from Dev Academy Aotearoa, in October 2023 with a New
              Zealand Certificate in Applied Software Development (Level 6) and
              am looking for my first Junior Developer role.
            </p>
            <br />
            <p>
              I have a wide range of hobbies and passions that keep me busy.
              From going to concerts, traveling, daily walks and brunch catch
              ups with friends. I am always seeking new experiences and love to
              keep myself engaged and learning new things.
            </p>
            <br />
            <p>
              I hold the belief that one should{' '}
              <span className="font-bold text-teal-500">
                consistently embrace growth
              </span>{' '}
              a principle I actively pursue. Fueled by a passion for technology,
              I am driven to continuously challenge the boundaries of what can
              be achieved. I eagerly anticipate the unfolding of my career
              journey and remain eager to new opportunities. 🙂
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
            <Image
              src="/hero-image.png"
              alt=""
              width={325}
              height={325}
              className="hidden md:block md:relative md:bottom-4 md:left-32 md:z-0"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
