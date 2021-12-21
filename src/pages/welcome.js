import * as React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "../templates/navigation/navigation"
import { SubPageHero } from "../templates/hero/hero"

import about_hero from "../images/about_hero.png"
import texture from "../images/texture.jpeg"

const WelcomePage = () => {
  return (
    <body>
      <title>Welcome</title>
      <Navigation />
      <SubPageHero texture_img={texture} hero_img={about_hero}  title={"Welcome to IoT@Illinois"} subtitle={"Letter from Professor Caesar"}/>      
    </body>
  )
}

export default WelcomePage
