import React, { Component } from 'react'
import SectionIntro from './components/SectionIntro';
import Section from './components/Section'
import Experience from './components/Experience';



export default class AboutPage extends Component {
  render() {
    return (
      <div className="content">
        <div className="first-section">
          <SectionIntro className="section-intro" text="Professional" />
          <div className="content-container">
            <Section
              text="When it comes to my professional career I have been building things since I was a kid. It started out with physical items, from a wall for a room partition, a house and eventually oil refineries. In the past couple years I have transitioned from building, buildings to building software"
            />
            <Section
              text="The transition has not been without obstacles. I have spent almost everyday off I have had over the past few years learning something new, building some new small feature, and reading blogs realted to software development. I focus mainly on rails applications but, recently I have expanded to React apps as well."
            />
            <Section
            text="I take great pride in bringing craftsmanship to software engineering. If you would like to know more about me or you have a project you need help on, let's talk!"
            button={true}
            />
          </div>
        </div>
        <SectionIntro className="section-intro" text="Personal" />
        <div className="content-container">
          <Section
            text="I became a father in 2015 and she has been the kick that really spurred me to better myself and get away from all the relentless travel I had to do for work. Raising my daughter and helping her to discover the world and teach her how to live has been amazing and has humbled me in so many ways."
          />
          <Section
            text="When i'm not working I like to spend my time doing a variety of different activities. I enjoy skiing and snowboarding, hiking, and searching out new experiences."
          />
          <Section
            text="One thing i find i'm always doing is learning, I can't stop trying to improve myself. I seem to have some compulsion to understand how everything works and to learn something new everyday."
          />
        </div>
        <SectionIntro className="section-intro" text="Experience" />
        <div className="content-container">
          <Experience
            company="Touts"
            title="Full Stack Developer"
            time="October 2018 - Present"
          />
          <Experience
            company="Digital Bright-Side LLC"
            title="Full Stack Developer"
            time="September 2018 - Present"
          />
          <Experience
            company="Le Wagon"
            title="Teaching Assistant"
            time="October 2018 - November 2018"
          />
          <Experience
            company="Sabic"
            title="Quality Control"
            time="May 2017 - June 2018"
          />
        </div>

      </div>
    )
  }
}
