import * as React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "../templates/navigation/navigation"
import { MainHero } from "../templates/hero/hero"

import main_hero from "../images/main_hero.jpeg"

const IndexPage = () => {
  return (
    <body>
      <title>IoT@Illinois</title>
      <Navigation />
      <MainHero hero_img={main_hero}/>
      <MainHero hero_img={main_hero}/>
    </body>
  )
}

export default IndexPage
