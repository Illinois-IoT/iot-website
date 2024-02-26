import * as React from "react"

import "../theme.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "../templates/navigation/navigation"
import { MainHero } from "../templates/hero/hero"

import main_hero from "../images/hero1.jpeg"
import Footer from "../templates/footer/footer";
import { Paragraph } from "../templates/paragraph/Paragraph";
import { ButtonContainer } from "../templates/buttons/buttons";
import { CircleTable } from "../templates/table/circletable";
import Slides from "../templates/carousel/carousel";
import {TableRowCircleImg} from "../templates/table/tablerow";
import wirelessviz from "../videos/WirelessSimulation.mp4"

import slide1 from "../images/slide1.jpeg";
import slide2 from "../images/slide2.jpeg";
import CaesarProfile from "../images/caesar2.png" 

import { Helmet } from "react-helmet"
import favicon from '../images/block-i.png';

const IndexPage = () => {
  return (
    <body>
      <Helmet
        title="IoT@Illinois"
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
      <MainHero video={wirelessviz}/>
        <div style={{display:"flex", flexDirection:"column", alignItems:"center", width: "100%", gap: "20px"}}>
          <Paragraph heading="HERE AT ILLINOIS CENTER FOR IOT" subheading="We are the IoT research lab at University of Illinois" 
                  paragraphs={[
                    "At Illinois Internet of Things, we are passionate about the technology of tomorrow. Our research and outreach efforts are focused on fundamentally accelerating the development of this Internet of Things. Our mission is to build platforms with strong and rigorous guarantees, with high performance and service quality, that are practically useful and remain resilient in the face of adversaries and unreliable conditions, and that serve to meet societal and ethical principles while advancing equality and viability of our society.",
                    "Our three main focuses are research, innovation, and outreach. Our experts in systems, networking, artificial intelligence, and data sciences coming together are developing algorithms, platforms, and methodologies that provide new ways to collect and digest data at scale, leveraging artificially intelligent network and device infrastructures. To cultivate innovation, we are establishing an IoT Makerspace. Here, students get a chance to explore the ins and outs of IoT through hands-on experience. Furthermore, we also routinely provide educational opportunities to our local community of Urbana-Champaign and to K-12 students around the world."
                    ]}/>
          <ButtonContainer 
            items={[
              {name: "Makerspace", href: "/makerspace"},
              {name: "Outreach", href: "/outreach"}
            ]}/>
        </div>
      </div>
      <TableRowCircleImg 
          img_src={CaesarProfile}
          header={<h5>Hi there!</h5>}
          detail={<p>I am Matthew Caesar, a Professor in the Department of Computer Science at UIUC. Here at the Illinois Center for IoT, we are embarking on an exploration of a new world, one which we are building ourselves, and learning more about every day. What we will create, and what we will discover, will be an adventure unlike anything humanity has done before. Here, we are developing foundational technologies to fundamentally accelerate the development of this Internet of Things. Our mission is to build platforms with strong and rigorous guarantees, with high performance and service quality, that are practically useful and remain resilient in the face of adversaries and unreliable conditions, and that serve to meet societal and ethical principles while advancing equality and viability of our society. I hope you will join us!</p>}
          blue_background={true}
        />
      <Footer />
    </body>
  )
}

export default IndexPage
