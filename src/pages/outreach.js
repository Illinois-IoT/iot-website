import * as React from "react"

import "../theme.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "../templates/navigation/navigation"
import { PageHero } from "../templates/hero/hero"

import about_hero from "../images/hero1.png"
import texture from "../images/texture.jpeg"
import GridTable from "../templates/table/gridtable";
import { Paragraph } from "../templates/paragraph/Paragraph";
import Footer from "../templates/footer/footer";

import { Helmet } from "react-helmet"
import favicon from '../images/block-i.png';

const OutreachPage = () => {
  return (
    <body>
      <Helmet
        title="IoT@Illinois - Outreach Overview"
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
        <PageHero texture_img={texture} hero_img={about_hero} title={"OUTREACH"} subtitle={"See how we give back to our community"}/>      
        <Paragraph heading={"OUR OUTREACH PROGRAMS"} subheading={"Learn more about how we are giving back to the community"} />
        <GridTable items={[
            {header: "Urbana-Champaign Outreach", 
            text:"We are dedicated to giving back to our local community. For students living in or near the Urbana-Champaign area, keep up to date with our future workshops when they are announced! Our local outreach program is focused on introducing the concept of IoT to K-12 students and exposing them to the field. You do not need any prior experience or knowledge to attend one of our workshops!",
            buttons: [
              {name: "Local Workshops", href: "/local-outreach"}
            ]},
            {header: "Illinois of Things Summer Camp", 
            text:"Calling all high school students interested in programming and the Internet of Things! We are organizing a week-long summer camp on the UofI campus this summer. Students will get a chance to learn about the field of IoT, and progress through a week-long hands-on project to show off their newfound knowledge!",
            buttons: [
              {name: "Summer Camp", href: "/summer-camp"}
            ]}
            ]}/>
      </div>
      <Footer />
    </body>
  )
}

export default OutreachPage
