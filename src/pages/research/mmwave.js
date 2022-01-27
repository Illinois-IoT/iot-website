import * as React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "../../templates/navigation/navigation"
import { SubPageHero } from "../../templates/hero/hero"
import { Paragraph } from "../../templates/paragraph/Paragraph";
import Footer from "../../templates/footer/footer";

import hero from "../../images/hero.jpg"

import { Helmet } from "react-helmet"
import favicon from '../../images/block-i.png';

const IotVerificationPage = () => {
  return (
    <body>
      <Helmet
        title="IoT@Illinois - mmWave Research"
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
        <SubPageHero hero_img={hero}  title={"mmWave Applications"} subtitle={"To explore possible applications of millimeter wave sensors"}/>   
        <Paragraph 
            heading={"ABOUT MMWAVE RESEARCH"} subheading={"Using mmWave sensors in the context of IoT."}
            paragraphs={["The potential applications for mmWave sensors seem next to limitless, from reducing the number of sensors needed to gather data, long range data measurement, to even allowing for molecular level observations of the world around us.  Our goal is to explore mmWave and its potential applications, working with the sensor hardware, writing firmware, performing data analysis and applying machine learning, and deploying these devices in various fields. We are currently in the research stage, learning what can be done with the technology, studying datasets, and beginning to write firmware to interface with the sensor. With a dedicated team of students experienced in a variety of disciplines, we hope to make significant contributions to the world of IoT."]}
        />
      </div>
      <Footer />
    </body>
  )
}

export default IotVerificationPage;
