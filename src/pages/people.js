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
import {TableRowCircleImg} from "../templates/table/tablerow";

import { Helmet } from "react-helmet"
import favicon from '../images/block-i.png';

import CaesarProfile from "../images/caesar.jpeg"
import ElaheProfile from "../images/elahe.jpeg"


import lily_li from "../images/people/lily_li.jpeg"
import daniel_abdoue from "../images/people/daniel_abdoue.png"
import milind_sagaram from "../images/people/milind_sagaram.jpeg"
import rishabh_bassi from "../images/people/rishabh_bassi.jpeg"
import shrirang_bagdi from "../images/people/shrirang_bagdi.jpeg"
import max_fan from "../images/people/max_fan.jpeg"
import sushruth_booma from "../images/people/sushruth_booma.jpg"
import alec_zhang from "../images/people/alec_zhang.jpeg"
import aryaman_dwivedi from "../images/people/aryamandwivedi.jpeg"
import nikunj_tyagi from "../images/people/nikunjt2.jpg"
import gabriella_xue from "../images/people/gabriella_xue.jpeg"
import shadman_eusuf from "../images/people/shadman_eusuf.jpeg"
import avery_plote from "../images/people/avery_plote.jpeg"
import hanbo_guo from "../images/people/hanbo_guo.png"
import prithvi_balaji from "../images/people/prithvi_balaji.png"
import brian_kao from "../images/people/brian_kao.png"

const people_arr = [
    {name: "Aryaman Dwivedi", bio: "BS Computer Science 2025", involvement:"CS 598 CA, IoT Makerspace Assistant, Research", img: aryaman_dwivedi},
    {name: "Nikunj Tyagi", bio: "BS Computer Science 2026", involvement:"IoT Makerspace Assistant", img: nikunj_tyagi},
    {name: "Hanbo Guo", bio: "BS Computer Science 2024", involvement:"CS 598 CA", img: hanbo_guo},
    {name: "Prithvi Balaji", bio: "BS Computer Science 2024", involvement:"CS 598 CA", img: prithvi_balaji},
    {name: "Brian Kao", bio: "PhD Computer Science 2024", involvement:"CS 598 Lead TA", img: brian_kao},
    {name: "Gabriella Xue", bio: "PhD Computer Science 2028", involvement:"IoT Systems Research Group", img: gabriella_xue},
    {name: "Shadman Saqib Eusuf", bio: "PhD Computer Science 2028", involvement:"IoT Graduate Research Assistant", img: shadman_eusuf},
    {name: "Avery Plote", bio: "BS Computer Science + Crop Science 2024", involvement:"IoT Forest Soil Moisture Research Assistant", img: avery_plote}
]

const alumni_arr = [
    {name:"Milind Sagaram", bio:"BS Computer Engineering, 2025", involvement:"Illinois of Things, AI Drone Research", img: milind_sagaram},
    {name:"Rishabh Bassi", bio:"BS Computer Science, 2019", involvement:"Explain Net, NLP in Network systems", img: rishabh_bassi},
    {name:"Lily Li", bio:"BS Computer Science, 2022", involvement:"Website Manager, Illinois of Things Coordinator", img: lily_li},
    {name:"Daniel Abdoue", bio:"BS Computer Engineering, 2022", involvement:"mmWave Research", img: daniel_abdoue},
    {name:"Max Fan", bio:"BS CS + Philosophy, 2024", involvement:"IoT security", img:max_fan},
    {name: "Sushruth Booma", bio:"BS Mathematics & Computer Science, 2024", involvement:"ML-Algorithms", img: sushruth_booma},
    {name:"Shrirang Bagdi", bio:"BS Statistics & Computer Science , 2023", involvement:"ML-algorithms", img: shrirang_bagdi},
    {name:"Alec Zhang", bio:"BS Computer Science, 2022", involvement:"Illinois of Things", img: alec_zhang}
]

const staff_arr = [
  {name:"Professor Elahé Soltanaghai", bio:"Ph.D., Computer Science, University of Virginia, 2019", img: ElaheProfile, link:"elahe"},
  {name:"Professor Matthew Caesar", bio:"Ph.D., Computer Science, University of California, Berkeley, 2007", img: CaesarProfile, link:"caesar"}
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
        <Paragraph heading="STAFF" subheading="The co-directors of IoT@Illinois" />
        <PeopleTable people={staff_arr} large={true}/>
        <div className="lightblue-div">
          <Paragraph heading="STUDENTS" subheading="Meet some of the undergraduate, graduate, and PhD students at IoT@Illinois" />
          <PeopleTable people={people_arr}/>
        </div>
        <div className="white-div">
          <Paragraph heading="ALUMNI" subheading="Past students who have helped make IoT@Illinois into what it is today!" />
          <PeopleTable people={alumni_arr}/>
        </div>
      </div>
      <Footer />
    </body>
  )
}

export default ConnectPage

