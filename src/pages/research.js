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

import { Helmet } from "react-helmet"
import favicon from '../images/block-i.png';

const CaesarPage = () => {
  const cards = [{primary:"3", secondary:"years old", img: flipcard}, 
    {primary:"100+", secondary:"undergraduate students", img: flipcard}, 
    {primary:"10",secondary:"graduate/Ph.D. students", img: flipcard}, 
    {primary:"4",secondary:"current projects", img: flipcard}, 
    {primary:"18",secondary:"past projects", img: flipcard}]

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
      </div>
      <Footer />
    </body>
  )
}

export default CaesarPage
