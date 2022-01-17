import * as React from "react"

import "../theme.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "../templates/navigation/navigation"
import { SubPageHero } from "../templates/hero/hero"

import hero from "../images/hero.jpg"
import {Paragraph, List} from "../templates/paragraph/Paragraph";
import Footer from "../templates/footer/footer";
import { SupportUsForm } from "../templates/forms/forms";

import { Helmet } from "react-helmet"
import favicon from '../images/block-i.png';

const SupportPage = () => {
  return (
    <body>
      <Helmet
        title="IoT@Illinois - Support Us"
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
        <SubPageHero hero_img={hero}  title={"Support Us"} subtitle={"Support our endeavors through donating or volunteering"}/>      
        <Paragraph heading="DONATE TOWARDS OUR MISSION"
              subheading="Invest in the technologies and innovators of tomorrow"
              paragraphs={[
                  "We need your help! Our research projects and the Makerspace are not successful without generous donations from people like you!",
                  "Donations can be monetary or in the form of supplies, equipment, or machines.",
                  "We are currently looking for monetary donations to help in the creation of our first IoT summer camp! Your donation will go towards scholarships for students who are unable to pay the tuition. It would also help subsidize the cost of materials. If you are interested in this opportunity, we would love to work with you and name the scholarship after you or your company.",
                  ]}
              list={<List 
                listHeader={<p>Currently, we are seeking donations of:</p>}
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
        <SupportUsForm />
      </div>
      <Footer />
    </body>
  )
}

export default SupportPage
