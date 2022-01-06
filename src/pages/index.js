import * as React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "../templates/navigation/navigation"
import { MainHero } from "../templates/hero/hero"

import main_hero from "../images/main_hero.jpeg"
import Footer from "../templates/footer/footer";

const IndexPage = () => {
  return (
    <body>
      <title>IoT@Illinois</title>
      <Navigation />
      <MainHero hero_img={main_hero}/>
      <Footer />
    </body>
  )
}

export default IndexPage
