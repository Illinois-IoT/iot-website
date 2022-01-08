import * as React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "../templates/navigation/navigation"
import { SubPageHero } from "../templates/hero/hero"

import about_hero from "../images/about_hero.png"
import texture from "../images/texture.jpeg"
import {Paragraph} from "../templates/paragraph/Paragraph"
import Footer from "../templates/footer/footer";

import { Helmet } from "react-helmet"
import favicon from '../images/block-i.png';

const WelcomePage = () => {
  return (
    <body>
      <Helmet
        title="IoT@Illinois - Welcome"
        meta={[
            { name: 'description', content: 'The official website for The Illinois Center for Internet of Things.' },
            { name: 'keywords', content: 'Illinois IoT' },
        ]}
        link={[
            { rel: 'shortcut icon', type: 'image/png', href: `${favicon}` }
        ]}
      />
      <Navigation />
      <div className="flex-parent" style={{display:"flex", flexDirection:"column", alignItems:"center", width: "100vw", padding:"0vw 10vw"}}>
      <SubPageHero texture_img={texture} hero_img={about_hero}  title={"Welcome to IoT@Illinois"} subtitle={"Letter from Professor Caesar"}/>      
        <Paragraph heading="A LETTER OF WELCOME" subheading="The heart behind Professor Caesar" 
              paragraphs={[
                  "When I was a child, I used to watch movies by Disney and Pixar, and see dancing teacups and talking cars. Today my children grow up in a world where intelligent machines are no longer a fantasy, but part of our daily lives. As we are increasingly surrounded by non-human intelligence, it becomes ever more critical for us to not only understand how they work, but to think deeply about how they should be designed.",
                  "Comprising vast arrays of systems and protocols distributed over data centers, edge computers, and billions of sensing and actuating devices, the Internet of Things is enabling humanity to achieve greater heights, allowing us new weapons to fight disease and hunger, protect cities from attack, accelerate economies, journey to other planets, and so much more. Fundamental to this fight is knowledge, and at Illinois our goal is to train the scientists, developers, and leaders working on IoT to learn, build, and invent with purpose, skill, and confidence.",
                  "We are embarking on an exploration of a new world, one which we are building ourselves, and learning more about every day. What we will create, and what we will discover, will be an adventure unlike anything humanity has done before.",
                  "I hope you will join us,"]}/>
        <div style={{width:"100%", textAlign:"left !important"}}>
          <h6 style={{textAlign:"left"}}>Matthew Caesar</h6>
          <p>Director, Illinois Center for IoT</p>
          </div> 
        <Footer />
      </div>
    </body>
  )
}

export default WelcomePage
