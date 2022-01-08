import * as React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "../templates/navigation/navigation"
import { PageHero } from "../templates/hero/hero"

import about_hero from "../images/about_hero.png"
import texture from "../images/texture.jpeg"
import { CircleWithTextTable } from "../templates/table/circletable";
import Footer from "../templates/footer/footer";

const ConnectPage = () => {
  return (
    <body>
      <title>Connect With Us</title>
      <Navigation />
      <div className="flex-parent" style={{display:"flex", flexDirection:"column", alignItems:"center", width: "100vw", padding:"0vw 10vw"}}>
        <PageHero texture_img={texture} hero_img={about_hero} title={"CONNECT"} subtitle={"Contact us for any inquiries"}/>      
        <CircleWithTextTable 
              items={[
                {heading: "Office", text: "3118 Siebel Center for Comp Science"},
                {heading: "Email", text: "caesar[at]illinois.edu"},
                {heading: "Phone", text: "(847) 323-2968"}
              ]}/>
        <Footer />
      </div>
    </body>
  )
}

export default ConnectPage
