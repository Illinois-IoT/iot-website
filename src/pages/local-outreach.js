import * as React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "../templates/navigation/navigation"
import { SubPageHero } from "../templates/hero/hero"

import about_hero from "../images/about_hero.png"
import texture from "../images/texture.jpeg"

const SupportPage = () => {
  return (
    <body>
      <title>Local Outreach</title>
      <Navigation />
      <SubPageHero texture_img={texture} hero_img={about_hero}  title={"Local Outreach"} subtitle={"Giving back to the Urbana-Champaign community"}/>      
    </body>
  )
}

export default SupportPage
