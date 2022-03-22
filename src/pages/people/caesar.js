import * as React from "react"

import "../../theme.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "../../templates/navigation/navigation"
import { PageHero } from "../../templates/hero/hero"

import about_hero from "../../images/hero4.png"
import texture from "../../images/texture.jpeg"
import { List, CustomList } from "../../templates/paragraph/Paragraph";
import CaesarProfile from "../../images/caesar.jpeg"
import Footer from "../../templates/footer/footer";
import {TableRowCircleImg} from "../../templates/table/tablerow";

import { Helmet } from "react-helmet"
import favicon from '../../images/block-i.png';

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
        <TableRowCircleImg 
          img_src={CaesarProfile}
          header={<h5>Professor Matthew Caesar</h5>}
          detail={<div>
            <p><b>Education:</b> Ph.D., Computer Science, University of California, Berkeley, 2007</p>
            <p><b>Email:</b> caesar[at]illinois.edu</p>
            <p><b>Office:</b> 3118 Siebel Center for Comp Science</p>
          </div>}
          blue_background={false}
        />
        <div className="lists-div">
          <List 
              listHeader={<h5>Affiliations:</h5>}
              listItems={[
                "Professor in the Department of Computer Science at UIUC",
                "Affiliate Professor in the Department of Electrical and Computer Engineering",
                "Affiliate Research Professor in the Coordinated Science Laboratory",
                "Affiliate Professor in the School of Information Sciences",
                "Member of the Information Trust Institute",
                "Vice-Chair of ACM SIGCOMM",
                "Previously served as the Chief Science Officer of Veriflow (sold to VMware in 2019)"
              ]}
              />
          <List 
              listHeader={<h5>Research Interests:</h5>}
              listItems={[
                "Simplifying management and improving the reliability of distributed systems and networks through principles of self-organization and self-diagnosis, with an emphasis on wide-area networks and networked systems.",
                "Design, analysis, and implementation of distributed systems and networks on an extremely large scale, with an emphasis on network operations, measurement, and availability. Particularly interested in improving the availability and performance of the Internet infrastructure, including routing, DNS, and data centers."
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
          <CustomList 
              listHeader={<h5>Recent Publications:</h5>}
              listItems={
                <div>
                <p className='list-item'>&#x2212; Otto Piramuthu, Matthew Caesar, <strong>Towards a Lightweight VANET Authentication Protocol, ACM SIGAPP Symposium on Applied Computing</strong>, April 2022</p>
                <p className='list-item'>&#x2212; Otto Piramuthu, Matthew Caesar, <strong>How Effective are Identification Technologies in Autonomous Self-Driving Vehicles?</strong>, IEEE CommNet, December 2021</p>
                <p className='list-item'>&#x2212; Bingzhe Liu, Kuan-Yen Chou, Pramod Jamkhedkar, Bilal Anwer, Rakesh Sinha, Kostas Oikonomou, Matthew Caesar, Brighten Godfrey, <strong>Practical Automation for Management Planes of Service Provider Infrastructure</strong>, ACM SIGCOMM Workshop on Flexible Networks (FlexNets), August 2021 <a href="http://caesar.cs.illinois.edu/papers/strategy-flexnets21.pdf" target="_blank">[pdf]</a></p>
                <p className='list-item'>&#x2212; Aniket Shirke, Rebecca Golden, Mrinal Gautam, Angela Green-Miller, Matthew Caesar, Ryan N. Dilger, <strong>Vision-based Behavioral Recognition of Novelty Preference in Pigs</strong>, CVPR CV4Animals Workshop, July 2021 <a href="http://caesar.cs.illinois.edu/papers/behavior-cvpr21.pdf" target="_blank">[pdf]</a></p>
                <p className='list-item'>&#x2212; Isabella Lee, Vignesh Babu, Matthew Caesar, David Nicol, <strong>Deep Reinforcement Learning for UAV-Assisted Emergency Response, Mobiquitous</strong>, December 2020 <a href="http://caesar.cs.illinois.edu/papers/drone-mobi20.pdf" target="_blank">[pdf]</a></p>
                <p className='list-item'>&#x2212; Santhosh Prabhu, Kuan Yen Chou, Ali Kheradmand, Brighten Godfrey, Matthew Caesar, <strong>Plankton: Scalable Network Configuration Verification Through Model Checking</strong>, NSDI, February 2020 <a href="http://caesar.cs.illinois.edu/papers/plankton-nsdi20.pdf" target="_blank">[pdf]</a></p>
                <p className='list-item'>&#x2212; Jason Croft, Ratul Mahajan, Matthew Caesar, Madan Musuvathi, <strong>Systematically Exploring the Behavior of Control Programs</strong>, USENIX Annual Technical Conference, July 2015 <a href="http://caesar.cs.illinois.edu/papers/delorean-atc15.pdf" target="_blank">[pdf]</a></p>
                </div>
              }
              />
          <p className='list-item'>For more publications, see <a href="http://caesar.cs.illinois.edu/pubs.html" target="_blank">Professor Caesar's personal website</a></p>
        </div>
      </div>
      <Footer />
    </body>
  )
}

export default CaesarPage
