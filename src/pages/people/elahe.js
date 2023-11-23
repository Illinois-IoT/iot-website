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
        <div className="lists-div">
            <List
              listHeader={<h5>Honors:</h5>}
              listItems={[
                "Named one of the 10 N2Women Rising Star Women Worldwide (2021)",
                "Recipient of ACM SIGMOBILE Dissertation Award (2020)",
                "EECS Rising Stars (2019)"
              ]}
            />
            <List 
              listHeader={<h5>Academic Positions:</h5>}
              listItems={[
                "Assistant Professor, University of Illinois Urbana-Champaign, Computer Science and Electrical and Computer Engineering, 2021-Present",
                "NCSA Fellow, University of Illinois Urbana-Champaign, 2022-Present",
                "Postdoctoral Researcher, Carnegie Mellon University, Pittsburgh, 2019-2021"
              ]}
            />
            <List 
              listHeader={<h5>Research Interests:</h5>}
              listItems={[
                "Wireless Sensing and Communication",
                "Wireless Embedded Systems",
                "Cyber-Physical Systems",
              ]}
            />
            <List
              listHeader={<h5>Research Area:</h5>}
              listItems={[
                <a href="https://cs.illinois.edu/research/areas/systems-and-networking" target="_blank">Systems and Networking</a>
              ]}
            />
            <List
              listHeader={<h5>Recent Courses Taught:</h5>}
              listItems={[
                "CS 437: Topics in Internet of Things [Fall'23]",
                "CS 598: Smart Cities, Homes, Phones, and Beyond (Smart-X) [Spring'22] [Fall'22]"
              ]}
            />
            <CustomList
              listHeader={<h5>Recent Publications:</h5>}
              listItems={
                <div>
                  <p className="list-item">&#x2212; T. King, J. He, C. Yao, A. Prabhakara, M. Alipour, S. Kumar, A. Rowe, E. Soltanaghai, <strong>Enabling Long-range Sub-mm Micro-Displacement Sensing with Passive Tags as Phase Carriers</strong>, 2023 <a href="https://dl.acm.org/doi/abs/10.1145/3583120.3586965" target="_blank">[Paper]</a></p>
                  <p className="list-item">&#x2212; A. Prabhakara, T. Jin, A. Das, G. Bhatt, L. Kumari, E. Soltanaghai, J. Bilmes, S. Kumar, A. Rowe, <strong>High Resolution Point Clouds from mmWave Radar</strong>, 2023 <a href="https://arxiv.org/abs/2206.09273" target="_blank">[Paper]</a></p>
                  <p className="list-item">&#x2212; E. Soltanaghai (Invited paper), <strong>Perceiving the World with Pervasive Wireless Communication Infrastructures</strong>, 2022 <a href="https://ieeexplore.ieee.org/abstract/document/9668394" target="_blank">[Paper]</a></p>
                  <p className="list-item">&#x2212; J. Zhang, E. Soltanaghaei, A. Balanuta, R. Grimsley, S. Kumar, A. Rowe, <strong>PLatter: On the Feasibility of Building-scale Power Line Backscatter</strong>, 2022 <a href="https://www.usenix.org/system/files/nsdi22-paper-zhang_junbo.pdf" target="_blank">[Paper]</a></p>
                  <p className="list-item">&#x2212; J Miller, E. Soltanaghai, J. Chen, V. Bhat, R. Duvall, N. Pereira, A. Rowe, <strong>Cappella: Establishing Multi-User Augmented Reality Sessions Using Inertial Estimates and Peer-to-Peer Ranging</strong>, <a href="https://conferences.computer.org/cpsiot/pdfs/IPSN2022-6R1M30NXCSXmbVKUqzz1Of/962400a416/962400a416.pdf" target="_blank">[Paper]</a></p>
                </div>
              }
            />
            <p className='list-item'>For more publications, see <a href="https://elahe.web.illinois.edu/#Publications" target="_blank">Professor Soltanaghai's personal website</a></p>
        </div>
      </div>
      <Footer />
    </body>
  )
}

export default ElahePage
