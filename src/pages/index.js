import * as React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "../templates/navigation/navigation"
import { MainHero } from "../templates/hero/hero"

import main_hero from "../images/main_hero.jpeg"
import Footer from "../templates/footer/footer";
import { Paragraph } from "../templates/paragraph/Paragraph";
import { ButtonContainer } from "../templates/buttons/buttons";
import { CircleTable } from "../templates/table/circletable";
import Slides from "../templates/carousel/carousel";

import slide1 from "../images/slide1.jpeg";
import slide2 from "../images/slide2.jpeg";
import CaesarProfile from "../images/caesar2.png" 

const IndexPage = () => {
  return (
    <body>
      <title>IoT@Illinois</title>
      <Navigation />
      <div className="flex-parent" style={{display:"flex", flexDirection:"column", alignItems:"center", width: "100vw", padding:"0vw 10vw"}}>
      <MainHero hero_img={main_hero}/>
        <div>
          <Paragraph heading="HERE AT ILLINOIS CENTER FOR IOT" subheading="We are the IoT research lab at University of Illinois" 
                  paragraphs={[
                    "At The Illinois Center For IoT, we are passionate about the technology of tomorrow. Our research and outreach efforts are focused on fundamentally accelerating the development of this Internet of Things. Our mission is to build platforms with strong and rigorous guarantees, with high performance and service quality, that are practically useful and remain resilient in the face of adversaries and unreliable conditions, and that serve to meet societal and ethical principles while advancing equality and viability of our society.",
                    "Our two main focuses are research and outreach. Our experts in systems, networking, artificial intelligence, and data sciences coming together are developing algorithms, platforms, and methodologies that provide new ways to collect and digest data at scale, leveraging artificially intelligent network and device infrastructures. We also routinely provide educational opportunities to our local community of Urbana-Champaign and to K-12 students around the world."
                    ]}/>
          <ButtonContainer 
            items={[
              {name: "Current Research", href: "/research"},
              {name: "Outreach Events", href: "/outreach"}
            ]}/>
        </div>
        <Slides items={[
          {background_img:slide1, title:"MISSION", description:"At Illinois, we are developing foundational technologies to fundamentally accelerate the development of this Internet of Things. Our experts in systems, networking, artificial intelligence, and data sciences coming together are developing algorithms, platforms, and methodologies that provide new ways to collect and digest data at scale, leveraging artificially intelligent network and device infrastructures. Our mission is to build platforms with strong and rigorous guarantees, with high performance and service quality, that are practically useful and remain resilient in the face of adversaries and unreliable conditions, and that serve to meet societal and ethical principles while advancing equality and viability of our society."}, 
          {background_img:slide2, title:"IOT MAKERSPACE", description:"TODO"},
          {background_img:slide1, title:"RESEARCH", description:"TODO"},
          {background_img:slide2, title:"OUTREACH", description:"TODO"}
        ]}/>
        <div>
          <Paragraph heading={"CURRENT RESEARCH PROJECTS"} />
          <CircleTable 
            items={[
              {heading: "Autonomy", href: "/autonomy"},
              {heading: "IoT Simulation", href: "iot-simulation"},
              {heading: "AI Drone", href: "ai-drone"},
              {heading: "IoT Verification", href: "iot-verification"}
            ]}/>
        </div>
        <div className="lightblue-div">
          <div className="flex-row">
            <img src={CaesarProfile} className="circle-div" style={{width:"35%"}}/>
            <div style={{width:"60%"}}>
              <h5>Hi there!</h5>
              <p>I am a Professor in the Department of Computer Science at UIUC. I am also an Affiliate Professor in the Department of Electrical and Computer Engineering, an Affiliate Research Professor in the Coordinated Science Laboratory, Affiliate Professor in the School of Information Sciences, and a member of the Information Trust Institute. I currently serve as the Vice Chair of ACM SIGCOMM. I previously served as the Chief Science Officer of Veriflow (sold to VMware in 2019). I received my Ph.D. in Computer Science from UC Berkeley.</p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </body>
  )
}

export default IndexPage
