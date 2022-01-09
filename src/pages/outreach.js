import * as React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "../templates/navigation/navigation"
import { PageHero } from "../templates/hero/hero"

import about_hero from "../images/hero1.png"
import texture from "../images/texture.jpeg"

import { Helmet } from "react-helmet"
import favicon from '../images/block-i.png';

const OutreachPage = () => {
  return (
    <body>
      <Helmet
        title="IoT@Illinois - Outreach Overview"
        meta={[
            { name: 'description', content: 'The official website for The Illinois Center for Internet of Things.' },
            { name: 'keywords', content: 'Illinois IoT' },
        ]}
        link={[
            { rel: 'shortcut icon', type: 'image/png', href: `${favicon}` }
        ]}
      />
      <Navigation />
      <PageHero texture_img={texture} hero_img={about_hero} title={"OUTREACH"} subtitle={"See how we give back to our community"}/>      
    </body>
  )
}

export default OutreachPage
