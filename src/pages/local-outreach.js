import * as React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "../templates/navigation/navigation"
import { SubPageHero } from "../templates/hero/hero"
import { Paragraph, List } from "../templates/paragraph/Paragraph";

import hero from "../images/hero.png"

import { LocalOutreachInterestForm } from "../templates/forms/forms";

import { Helmet } from "react-helmet"
import favicon from '../images/block-i.png';

const SupportPage = () => {
  return (
    <body>
      <Helmet
        title="IoT@Illinois - Local Outreach"
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
        <SubPageHero hero_img={hero}  title={"Local Outreach"} subtitle={"Giving back to the Urbana-Champaign community"}/>      
        <Paragraph heading="IOT WORKSHOPS" subheading="Learn about the field of IoT and the basics of IoT development" 
              list={<List 
                listHeader={<p>Spring of 2022, we will be hosting IoT workshops for middle and high school students in the Urbana-Champaign area. Our workshops will cover</p>}
                listItems={[
                  "What is IoT",
                  "Applications/importance of IoT",
                  "Basics of IoT development",
                  "Programming Arduinos",
                  "Sensor connectivity"
                ]}
                />}/>
        <LocalOutreachInterestForm />
      </div>
    </body>
  )
}

export default SupportPage
