import * as React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "../templates/navigation/navigation"
import { PageHero } from "../templates/hero/hero"

import about_hero from "../images/about_hero.png"
import texture from "../images/texture.jpeg"
import { Paragraph } from "../templates/paragraph/Paragraph";

const AboutPage = () => {
  return (
    <body>
      <title>About Us</title>
      <Navigation />
      <div className="flex-parent" style={{display:"flex", flexDirection:"column", alignItems:"center", width: "100vw", padding:"0vw 10vw"}}>
        <PageHero texture_img={texture} title={"ABOUT US"}/>    
      </div>
    </body>
  )
}

export default AboutPage
