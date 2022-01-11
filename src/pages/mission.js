import * as React from "react"

import "../theme.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "../templates/navigation/navigation"
import { SubPageHero } from "../templates/hero/hero"

import hero from "../images/hero.png"
import {Paragraph} from "../templates/paragraph/Paragraph";
import Footer from "../templates/footer/footer";

import { Helmet } from "react-helmet"
import favicon from '../images/block-i.png';

const MissionPage = () => {
  return (
    <body>
      <Helmet
        title="IoT@Illinois - Mission"
        meta={[
            { name: 'description', content: 'The official website for The Illinois Center for Internet of Things.' },
            { name: 'keywords', content: 'Illinois IoT' },
        ]}
        link={[
            { rel: 'shortcut icon', type: 'image/png', href: `${favicon}` }
        ]}
      />
      <Navigation />
      <div className="flex-parent" style={{display:"flex", flexDirection:"column", alignItems:"center", width: "100vw", padding:"0vw 10vw"}}>
        <SubPageHero hero_img={hero}  title={"Mission & Vision"} subtitle={"Our aspirations for innovation"}/>      
        <Paragraph heading="MISSION FOR THE FUTURE" subheading="Our vision for the technology of tomorrow" 
              paragraphs={[
                  "All around us, things are becoming alive. From smart watches, self-driving cars, appliances and phones, devices all around us are beginning to think, to understand, and to communicate with us as never before. But what we don't see is the vast revolution going on in all aspects of our society, from the revolution in healthcare, wearables and medical equipment enabling new ways to detect disease and save lives; smart agriculture helping farmers to grow food more efficiently to end hunger; intelligent power grids that save energy and protect critical infrastructure during outages; emergency response, tracking firefighters when they enter a burning building, smart cities, and so much more.",
                  "At Illinois, we are developing foundational technologies to fundamentally accelerate the development of this Internet of Things. Our experts in systems, networking, artificial intelligence, and data sciences coming together are developing algorithms, platforms, and methodologies that provide new ways to collect and digest data at scale, leverating artificially intelligent network and device infrastructures. Our mission is to build platforms with strong and rigorous guarantees, with high performance and service quality, that are practically useful and remain resilient in the face of adversaries and unreliable conditions, and that serve to meet societal and ethical principles while advancing the equality and viability of our society.",
                ]}/>
      </div>
      <Footer />
    </body>
  )
}

export default MissionPage
