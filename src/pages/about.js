import * as React from "react"

import "../theme.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "../templates/navigation/navigation"
import { PageHero } from "../templates/hero/hero"

import texture from "../images/texture.jpeg"
import { Paragraph } from "../templates/paragraph/Paragraph";
import GridTable from "../templates/table/gridtable";
import Footer from "../templates/footer/footer";

import { Helmet } from "react-helmet"
import favicon from '../images/block-i.png';

const AboutPage = () => {
  return (
    <body>
      <Helmet
        title="IoT@Illinois - About Us"
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
        <PageHero texture_img={texture} title={"ABOUT US"}/>   
        <Paragraph heading={"MAIN FOCUSES"} subheading={"What we concentrate our efforts on, here at Illinois Center for IoT"} />
        <GridTable items={[
          {header: "Research", 
          text:"Illinois Center for IoT is focused on progressing IoT-related research. Our students range from the undergraduate level to graduate and PhD students, who are passionate about the technology of tomorrow. Innovative design, analysis, and implementation of IoT and distributed systems are the core of our research projects.",
          buttons: [
            {name: "Research Overview", href: "/research"}
          ]},
          {header: "Innovation", 
          text:"With the introduction of of the IoT Makerspace in room 1129 (Siebel Center for Computer Science), we encourage all students to explore the field of IoT. This makerspace has adequate resources for students to build IoT-related projects and learn more about the field.",
          buttons: [
            {name: "IoT Makerspace", href: "/makerspace"}
          ]},
          {header:"Outreach",
          text:"Starting Spring of 2022, we are incorporating outreach activities into our mission. We are focused on introducing the next generation of innovators to the field of IoT and its applications. We hope to inspire more students to have passion for this field by hosting local workshops and the Illinois of Things Summer Camp.",
          buttons: [
            {name: "Outreach Events", href:"/outreach"}
          ]}
          ]}/>
      </div>
      <Footer />
    </body>
  )
}

export default AboutPage
