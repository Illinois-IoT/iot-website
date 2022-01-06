import * as React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "../templates/navigation/navigation"
import { SubPageHero } from "../templates/hero/hero"

import about_hero from "../images/about_hero.png"
import texture from "../images/texture.jpeg"
import {Paragraph, List} from "../templates/paragraph/Paragraph";

const SupportPage = () => {
  return (
    <body>
      <title>Support Us</title>
      <Navigation />
      <div className="flex-parent" style={{display:"flex", flexDirection:"column", alignItems:"center", width: "100vw", padding:"0vw 10vw"}}>
        <SubPageHero texture_img={texture} hero_img={about_hero}  title={"Support Us"} subtitle={"Support our endeavors through donating or volunteering"}/>      
        <Paragraph heading="Donate towards our mission"
              paragraphs={[
                  "We need your help! Our research projects and the Makerspace are not successful without generous donations from people like you!",
                  "Donations can be monetary or in the form of supplies, equipment, or machines.",
                  "We are currently looking for monetary donations to help in the creation of our first IoT summer camp [link to camp]! Your donation will go towards scholarships for students who are unable to pay the tuition. It would also help subsidize the cost of materials. If you are interested in this opportunity, we would love to work with you and name the scholarship after you or your company.",
                  ]}
              list={<List 
                listHeader={"Currently, we are seeking donations of:"}
                listItems={[
                  "Microcontrollers: Raspberry Pi, Arduino, Feather M0",
                  "3D printers",
                  "IoT sensors: GPS, ultrasonic, Infrared, etc.",
                  "General electrical supplies: wires, breadboards, etc.",
                  "Technologies: computers, monitors, etc.",
                  "$$$ (scholarships for the summer camp!)"
                ]}
                />}
              />
      </div>
    </body>
  )
}

export default SupportPage
