import * as React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "../templates/navigation/navigation"
import { SubPageHero } from "../templates/hero/hero"

import hero from "../images/hero.jpg"

import { Helmet } from "react-helmet"
import favicon from '../images/block-i.png';

const SupportPage = () => {
  return (
    <body>
      <Helmet
        title="IoT@Illinois - Autonomy Research"
        meta={[
            { name: 'description', content: 'The official website for The Illinois Center for Internet of Things.' },
            { name: 'keywords', content: 'Illinois IoT' },
        ]}
        link={[
            { rel: 'shortcut icon', type: 'image/png', href: `${favicon}` }
        ]}
      />
      <Navigation />
      <SubPageHero hero_img={hero}  title={"Autonomy Research"} subtitle={"Insert problem statement of project"}/>      
    </body>
  )
}

export default SupportPage
