import * as React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "../templates/navigation/navigation"
import { PageHero } from "../templates/hero/hero"

import about_hero from "../images/about_hero.png"
import texture from "../images/texture.jpeg"

const AboutPage = () => {
  return (
    <body>
      <title>About Us</title>
      <Navigation />
      <PageHero texture_img={texture} hero_img={about_hero} title={"CONNECT"} subtitle={"Contact us for any inquiries"}/>      
    </body>
  )
}

export default AboutPage
