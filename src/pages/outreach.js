import * as React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "../templates/navigation/navigation"
import { PageHero } from "../templates/hero/hero"

import about_hero from "../images/about_hero.png"
import texture from "../images/texture.jpeg"

const OutreachPage = () => {
  return (
    <body>
      <title>About Us</title>
      <Navigation />
      <PageHero texture_img={texture} hero_img={about_hero} title={"OUTREACH"} subtitle={"See how we give back to our community"}/>      
    </body>
  )
}

export default OutreachPage
