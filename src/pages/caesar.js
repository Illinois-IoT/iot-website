import * as React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "../templates/navigation/navigation"
import { PageHero } from "../templates/hero/hero"

import about_hero from "../images/hero4.png"
import texture from "../images/texture.jpeg"
import { Paragraph, List } from "../templates/paragraph/Paragraph";
import CaesarProfile from "../images/caesar.jpeg"
import Footer from "../templates/footer/footer";

import { Helmet } from "react-helmet"
import favicon from '../images/block-i.png';

const CaesarPage = () => {
  return (
    <body>
      <Helmet
        title="IoT@Illinois - Professor Caesar"
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
        <PageHero texture_img={texture} hero_img={about_hero} title={"Professor Caesar"} subtitle={"Read more about the professor"}/>      
        <div className="flex-row">
          <img src={CaesarProfile} className="circle-div" style={{width:"35%"}}/>
          <div>
            <h5>Professor Matthew Caesar</h5>
            <p><b>Education:</b> Ph.D., Computer Science, University of California, Berkeley, 2007</p>
            <p><b>Email:</b> caesar[at]illinois.edu</p>
            <p><b>Office:</b> 3118 Siebel Center for Comp Science</p>
          </div> 
        </div>
        <List 
            listHeader={<h5>Research Interests:</h5>}
            listItems={[
              "Simplifying management and improving reliability of distributed systems and networks through principles of self-organization and self-diagnosis, with an emphasis on wide-area networks and networked systems.",
              "My research focuses on the design, analysis, and implementation of distributed systems and networks on the extremely large scale, with an emphasis on network operations, measurement, and availability. I am particularly interested in improving availability and performance of the Internet infrastructure, including routing, DNS, and data centers."
            ]}
            />
        <List 
            listHeader={<h5>Research Area:</h5>}
            listItems={[
              "Security and Privacy",
              "Systems and Networking"
            ]}
            />
        <List 
            listHeader={<h5>Recent Courses Taught:</h5>}
            listItems={[
              "Topics in Internet of Things",
              "Internet of Things",
              "Computer Networking Laboratory"
            ]}
            />
        <Footer />
      </div>
    </body>
  )
}

export default CaesarPage
