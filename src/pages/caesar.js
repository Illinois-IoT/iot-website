import * as React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "../templates/navigation/navigation"
import { PageHero } from "../templates/hero/hero"

import about_hero from "../images/about_hero.png"
import texture from "../images/texture.jpeg"

const CaesarPage = () => {
  return (
    <body>
      <title>Professor Caesar</title>
      <Navigation />
      <PageHero texture_img={texture} hero_img={about_hero} title={"Professor Caesar"} subtitle={"Read more about the professor"}/>      
    </body>
  )
}

export default CaesarPage
