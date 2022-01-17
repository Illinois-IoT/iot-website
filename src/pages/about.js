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
          text:"Illinois Center for IoT is focused on progressing IoT-related research. Our students range from the undergraduate level to graduate and Ph.D. students, who are passionate about the technology of tomorrow. Innovative design, analysis, and implementation of IoT and distributed systems are the core of our research projects. Currently, our main research projects explore IoT virtualization, autonomous vehicles, IoT verification, and AI drones. We are constantly looking for new students to join our research efforts! Whether you are an undergraduate, graduate, or Ph.D. student, if you are interested, please connect with us!",
          buttons: [
            {name: "Research Overview", href: "/research"}
          ]},
          {header: "Innovation", 
          text:"In collaboration with ACM, we are creating a space for students to create and explore IoT-related technology! In this space, there is a myriad of equipment and hardware for students to use: ranging from 3-D printers to networking equipment, to books about IoT and security. The IoT Makerspace is located in Room 1129 in the Siebel Center for Comp Science. To gain access to the Makerspace, please fill out the form on the Makerspace page (button below). Before requesting access, please read our Makerspace Norms carefully and remember to follow them!",
          buttons: [
            {name: "IoT Makerspace", href: "/makerspace"}
          ]},
          {header:"Outreach",
          text:"Reaching out to K-12 students is part of our mission. We are focused on introducing the next generation of innovators to the field of IoT and its applications. We hope to inspire more students to have passion for this field by hosting local workshops and the Illinois of Things Summer Camp. Our local workshops focus on the following: what is IoT, applications/importance of IoT, basics of IoT development, programming, and sensor connectivity.",
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
