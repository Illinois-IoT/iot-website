import * as React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "../templates/navigation/navigation"
import { PageHero } from "../templates/hero/hero"

import about_hero from "../images/about_hero.png"
import texture from "../images/texture.jpeg"
import { CircleWithTextTable } from "../templates/table/circletable";
import Footer from "../templates/footer/footer";
import { Paragraph } from "../templates/paragraph/Paragraph";
import { ContactUsForm } from "../templates/forms/forms";

import { Helmet } from "react-helmet"
import favicon from '../images/block-i.png';

const ConnectPage = () => {
  return (
    <body>
      <Helmet
        title="IoT@Illinois - Connect With Us"
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
        <PageHero texture_img={texture} hero_img={about_hero} title={"CONNECT"} subtitle={"Contact us for any inquiries"}/>      
        <Paragraph heading="GET IN TOUCH WITH US" subheading="Fill out the contact form or use any of the following methods of communication" />
        <CircleWithTextTable 
              items={[
                {heading: "Office", text: "3118 Siebel Center for Comp Science"},
                {heading: "Email", text: "caesar[at]illinois.edu"},
                {heading: "Phone", text: "(847) 323-2968"}
              ]}/>
        <ContactUsForm />
        <Footer />
      </div>
    </body>
  )
}

export default ConnectPage
