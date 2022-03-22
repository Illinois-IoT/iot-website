import * as React from "react"

import "../../theme.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "../../templates/navigation/navigation"
import { PageHero } from "../../templates/hero/hero"

import about_hero from "../../images/hero4.png"
import texture from "../../images/texture.jpeg"
import { List, CustomList } from "../../templates/paragraph/Paragraph";
import Footer from "../../templates/footer/footer";
import {TableRowCircleImg} from "../../templates/table/tablerow";

import { Helmet } from "react-helmet"
import favicon from '../../images/block-i.png';
import ElaheProfile from "../../images/elahe.jpeg"

const ElahePage = () => {
  return (
    <body>
      <Helmet
        title="IoT@Illinois - Professor Elahe"
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
        <PageHero texture_img={texture} hero_img={about_hero} title={"Professor Elahe"} subtitle={"Read more about the professor"}/>      
        <TableRowCircleImg 
          img_src={ElaheProfile}
          header={<h5>Professor Elahé Soltanaghai</h5>}
          detail={<div>
            <p><b>Education:</b> Ph.D., Computer Science, University of Virginia, 2019</p>
            <p><b>Email:</b> elahe[at]illinois.edu</p>
            <p><b>Office:</b> 3108 Siebel Center for Comp Science</p>
          </div>}
          blue_background={false}
        />
      </div>
      <Footer />
    </body>
  )
}

export default ElahePage
