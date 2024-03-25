import * as React from "react"

import "../theme.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "../templates/navigation/navigation"
import { MainHero, SubPageHero } from "../templates/hero/hero"

import main_hero from "../images/hero1.jpeg"
import Footer from "../templates/footer/footer";
import { Paragraph } from "../templates/paragraph/Paragraph";
import { ButtonContainer } from "../templates/buttons/buttons";
import { CircleTable } from "../templates/table/circletable";
import Slides from "../templates/carousel/carousel";
import {TableRowCircleImg} from "../templates/table/tablerow";
import wirelessviz from "../videos/WirelessSimulation.mp4"
import texture from "../images/illinois.png"

import slide1 from "../images/slide1.jpeg";
import slide2 from "../images/slide2.jpeg";
import CaesarProfile from "../images/caesar2.png" 

import { Helmet } from "react-helmet"
import favicon from '../images/block-i.png';
// import video1 from "../videos/video1.mp4";
// import video2 from "../videos/video2.mp4";
// import video3 from "../videos/video3.mp4";

// const VideoStrip = () => {
//     return (
//         <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "20px" }}>
//             <video src={video1} controls style={{ margin: "0 10px" }} />
//             <video src={video2} controls style={{ margin: "0 10px" }} />
//             <video src={video3} controls style={{ margin: "0 10px" }} />
//         </div>
//     );
// }

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
      <SubPageHero hero_img={texture} title={"University of Illinois Urbana Champaign"} subtitle={"Internet of Things"}/>
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
      <div className="flex-parent" style={{display:"flex", flexDirection:"column", alignItems:"center", width: "100vw", height: "100vh", padding:"10vh 10vw"}}>
        <h4 style={{paddingLeft:"20px",paddingRight:"20px"}}>SEE WHAT WE ARE UP TO</h4>
        <iframe width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/videoseries?si=eC8TNLbZvwg1lTe7&amp;list=PLX5OEonfMsZr1u8KjgrY1cMp8poRRv-LF" 
                title="YouTube video player" 
                frameborder="1" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen>
        </iframe>
      </div>
      <Footer />
    </body>
  )
}

export default IndexPage
