import * as React from "react"

import "../theme.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "../templates/navigation/navigation"
import { PageHero } from "../templates/hero/hero"

import about_hero from "../images/hero2.jpeg"
import texture from "../images/texture.jpeg"
import FlipCards from "../templates/flipcards/flipcards";
import flipcard from "../images/flipcard.jpeg"
import Footer from "../templates/footer/footer";
import { Paragraph } from "../templates/paragraph/Paragraph";
import { CircleTable } from "../templates/table/circletable";

import Slides from "../templates/carousel/carousel";

import { Helmet } from "react-helmet"
import favicon from '../images/block-i.png';

const CaesarPage = () => {
  const cards = [{primary:"10+", secondary:"years old", img: flipcard}, 
    {primary:"30", secondary:"undergraduate students", img: flipcard}, 
    {primary:"10",secondary:"graduate/Ph.D. students", img: flipcard}, 
    {primary:"4",secondary:"current projects", img: flipcard}, 
    {primary:"25",secondary:"past projects", img: flipcard}]

  return (
    <body>
      <Helmet
        title="IoT@Illinois - Research Overview"
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
        <PageHero texture_img={texture} hero_img={about_hero} title={"Research"} subtitle={"Learn more about all current and past projects"}/>      
        <Paragraph heading={"ABOUT OUR RESEARCH"} subheading={"Some statistics about research at Illinois Center for IoT"} />
        <FlipCards items={cards}/>
        <Slides items={[
          {title:"AUTONOMY", slide_href: "autonomy", description:"TODO"}, 
          {title:"IOT SIMULATION", slide_href: "iot-simulation", description:"TODO"},
          {title:"AI DRONE", slide_href: "autonomy", description:"TODO"},
          {title:"IOT VERIFICATION", slide_href: "iot-verification", description:"'Virtualization' is a concept that has revolutionized computing, from virtual machines to virtual networks. Our team is bringing the concept of virtualization to IoT, enabling device intelligence and functionality to seamlessly migrate, manage, and secure IoT functions at the edge and cloud. Our distributed software layer stands to revolutionize the way that users and operators interact with and operate IoT."},
          {title: "MMWAVE APPLICATIONS", slide_href: "mmwave", description:"The potential applications for mmWave sensors seem next to limitless, from reducing the number of sensors needed to gather data, long range data measurement, to even allowing for molecular level observations of the world around us.  Our goal is to explore mmWave and its potential applications, working with the sensor hardware, writing firmware, performing data analysis and applying machine learning, and deploying these devices in various fields. We are currently in the research stage, learning what can be done with the technology, studying datasets, and beginning to write firmware to interface with the sensor. With a dedicated team of students experienced in a variety of disciplines, we hope to make significant contributions to the world of IoT."}
        ]}/>
      </div>
      <Footer />
    </body>
  )
}

export default CaesarPage
