import * as React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "../templates/navigation/navigation"
import { MainHero } from "../templates/hero/hero"

import main_hero from "../images/main_hero.jpeg"
import Footer from "../templates/footer/footer";
import { Paragraph } from "../templates/paragraph/Paragraph";
import { ButtonContainer } from "../templates/buttons/buttons";
import { CircleTable } from "../templates/table/circletable";

const IndexPage = () => {
  return (
    <body>
      <title>IoT@Illinois</title>
      <Navigation />
      <div className="flex-parent" style={{display:"flex", flexDirection:"column", alignItems:"center", width: "100vw", padding:"0vw 10vw"}}>
      <MainHero hero_img={main_hero}/>
        <div>
          <Paragraph heading="WE ARE ILLINOIS INTERNET OF THINGS" subheading="The IoT research lab at University of Illinois" 
                  paragraphs={[
                    "At Illinois Internet of Things, we are passionate about the technology of tomorrow. Our research and outreach efforts are focused on fundamentally accelerating the development of this Internet of Things. Our mission is to build platforms with strong and rigorous guarantees, with high performance and service quality, that are practically useful and remain resilient in the face of adversaries and unreliable conditions, and that serve to meet societal and ethical principles while advancing equality and viability of our society.",
                    "Our two main focuses are research and outreach. Our experts in systems, networking, artificial intelligence, and data sciences coming together are developing algorithms, platforms, and methodologies that provide new ways to collect and digest data at scale, leveraging artificially intelligent network and device infrastructures. We also routinely provide educational opportunities to our local community of Urbana-Champaign and to K-12 students around the world."
                    ]}/>
          <ButtonContainer 
            items={[
              {name: "Current Research", href: "/research"},
              {name: "Outreach Events", href: "/outreach"}
            ]}/>
        </div>
        <div className="lightblue-div">
          <Paragraph heading={"CURRENT RESEARCH PROJECTS"} />
          <CircleTable 
            items={[
              {heading: "Autonomy", href: "/autonomy"},
              {heading: "IoT Simulation", href: "iot-simulation"},
              {heading: "AI Drone", href: "ai-drone"},
              {heading: "IoT Verification", href: "iot-verification"}
            ]}/>
        </div>
        <Footer />
      </div>
    </body>
  )
}

export default IndexPage
