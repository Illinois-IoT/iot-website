import * as React from "react"

import "../theme.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "../templates/navigation/navigation"
import { PageHero } from "../templates/hero/hero"

import about_hero from "../images/hero2.jpeg"
import texture from "../images/texture.jpeg"
import Footer from "../templates/footer/footer";
import { Paragraph } from "../templates/paragraph/Paragraph";
import { PeopleTable } from "../templates/people/people";

import { Helmet } from "react-helmet"
import favicon from '../images/block-i.png';

import lily_li from "../images/people/lily_li.jpeg"
import daniel_abdoue from "../images/people/daniel_abdoue.png"
import milind_sagaram from "../images/people/milind_sagaram.jpeg"
import rishabh_bassi from "../images/people/rishabh_bassi.jpeg"
import shrirang_bagdi from "../images/people/shrirang_bagdi.jpeg"
import max_fan from "../images/people/max_fan.jpeg"
import sushruth_booma from "../images/people/sushruth_booma.jpg"
const people_arr = [
    {name:"Rishabh Bassi", bio:"BS Computer Science, 2019", involvement:"Explain Net, NLP in Network systems", img: rishabh_bassi},
    {name:"Daniel Abdoue", bio:"BS Computer Engineering, 2022", involvement:"mmWave Research", img: daniel_abdoue},
    {name:"Lily Li", bio:"BS Computer Science, 2022", involvement:"Website Manager, Illinois of Things Coordinator", img: lily_li},
    {name:"Shrirang Bagdi", bio:"BS Statistics & Computer Science , 2023", involvement:"ML-algorithms", img: shrirang_bagdi},
    {name:"Max Fan", bio:"BS CS + Philosophy, 2024", involvement:"IoT security", img:max_fan},
    {name: "Sushruth Booma", bio:"BS Mathematics & Computer Science, 2024", involvement:"ML-Algorithms", img: sushruth_booma},
    {name:"Milind Sagaram", bio:"BS Computer Engineering, 2025", involvement:"Illinois of Things, AI Drone Research", img: milind_sagaram},
]

const ConnectPage = () => {
  return (
    <body>
      <Helmet
        title="IoT@Illinois - People"
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
        <PageHero texture_img={texture} hero_img={about_hero} title={"PEOPLE"}/>      
        <Paragraph heading="THE RESEARCHERS" subheading="Meet some of the undergraduate, graduate, and PhD students at IoT@Illinois" />
        <PeopleTable people={people_arr}/>
      </div>
      <Footer />
    </body>
  )
}

export default ConnectPage
