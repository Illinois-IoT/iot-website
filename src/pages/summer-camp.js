import * as React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "../templates/navigation/navigation"
import { SubPageHero } from "../templates/hero/hero"

import about_hero from "../images/about_hero.png"
import texture from "../images/texture.jpeg"

const SupportPage = () => {
  return (
    <body>
      <title>Summer Camp</title>
      <Navigation />
      <SubPageHero texture_img={texture} hero_img={about_hero}  title={"IoT Summer Camp"} subtitle={"Educating high school students on the basics of IoT Development"}/>      
    </body>
  )
}

export default SupportPage
