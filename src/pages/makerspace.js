import * as React from "react"

import "../theme.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "../templates/navigation/navigation"
import { PageHero } from "../templates/hero/hero"

import about_hero from "../images/hero2.jpeg"
import texture from "../images/iotlabpano.png"
import labimg1 from "../images/labimg1.png"
import labimg2 from "../images/labimg2.png"
import makerspace_map from "../images/iot-makerspace-map.jpg"
import makerspace_printers from "../images/makerspace-3d-printers.jpg"
import makerspace_busy from "../images/makerspace-busy.jpg"
import makerspace_wideshot from "../images/makerspace-wideshot.jpg"
import makerspace_workbench from "../images/makerspace-workbench.jpg"

import Footer from "../templates/footer/footer";
import { List, Paragraph } from "../templates/paragraph/Paragraph";
import { MakerspaceAccessRequestForm } from "../templates/forms/forms";

import { Helmet } from "react-helmet"
import favicon from '../images/block-i.png';

const MakerspacePage = () => {
  return (
    <body>
      <Helmet
        title="IoT@Illinois - Makerspace"
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
        <PageHero texture_img={texture} hero_img={about_hero} title={"MAKERSPACE"} subtitle={"Fill out this form to request access!"} subtitleLink={"https://forms.gle/BKq6QW5Y7QVYF6jy9"} />
        <div style={{ overflowX: "scroll", whiteSpace: "nowrap", width: "100%", maxWidth: "100vw" }}>
          <div style={{ display: "inline-block", marginRight: "10px" }}>
              <img style={{ width: "500px", height: "auto" }} src={makerspace_busy} alt="Makerspace Busy" />
          </div>
          <div style={{ display: "inline-block", marginRight: "10px" }}>
              <img style={{ width: "500px", height: "auto" }} src={labimg2} alt="Lab 2" />
          </div>
          <div style={{ display: "inline-block", marginRight: "10px" }}>
              <img style={{ width: "500px", height: "auto" }} src={makerspace_printers} alt="Makerspace Printers" />
          </div>
          <div style={{ display: "inline-block", marginRight: "10px" }}>
              <img style={{ width: "500px", height: "auto" }} src={makerspace_wideshot} alt="Makerspace Wideshot" />
          </div>
          <div style={{ display: "inline-block", marginRight: "10px" }}>
              <img style={{ width: "500px", height: "auto" }} src={labimg1} alt="Lab 1" />
          </div>
          <div style={{ display: "inline-block", marginRight: "10px" }}>
              <img style={{ width: "500px", height: "auto" }} src={makerspace_workbench} alt="Makerspace Workbench" />
          </div>
      </div>
        <Paragraph 
            heading="SIEBEL ROOM 1109" 
            subheading="A place in the Siebel Center for Comp Science to explore"
            paragraphs={[
                "Come check out Room 1109 in the Siebel Center for Comp Science! In collaboration with ACM, we are creating a space for students to create and explore IoT-related technology.",
            ]}
            list={<List 
                listHeader={<p>Currently, we are have the following equipment:</p>}
                listItems={[
                  "3D printer",
                  "Wireless transmitters (of various types)",
                  "Wireless base stations",
                  "Network routing equipment",
                  "High gain wireless antennas",
                  "Networking equipment",
                  "Various cables",
                  "Analyzers and other troubleshooting equipment",
                  "Microscope",
                  "Electronic building equipment (soldering, wiring, etc.)",
                  "Multimeters",
                  "Books (networking, security, IoT, wireless security, foundational algorithms/math/theory, networking theory, ML, data mining) for checkout"
                ]}
                />}
            />
        <Paragraph 
            heading="NORMS & GUIDELINES" 
            subheading="Please read the following before requesting access"
            paragraphs={[
                "To access the Makerspace, we need to provide access via your i-Card. If you want to request access, please read the following in full before filling out the form.",
                "The Makerspace is a shared lab with valuable equipment in it, so we all need to work together to make sure the room is protected.  We are not going to be super uptight, and in fact, we do want you to mess around and experiment with the space, so please don't feel constrained. But with that being said, we do have the following norms and guidelines we want everyone to follow:",
                "1. You will keep the door closed and locked if no one is in the room. If you are the last one to leave, please make sure the door is shut and locked behind you. This will help prevent theft. In my experience, UIUC students don't steal things but sometimes non-students enter Siebel so we need to keep the door locked to be safe.",
                "2. We keep screws and cables and items out in the open to make them easy to access. Please help us by putting things back where you found them when you are done. This will help other people find things when they need them.",
                "3. If you find out we are short on any items please let us know right away. This will help us replenish as fast as possible. Also, if you have spare items at the end of the semester feel free to donate them to us by leaving them in 1109!",
                "4. You'll be careful with equipment, and avoid accidentally damaging other students’ projects.",
                "5. You are allowed to bring friends and colleagues into the lab but try to make sure they're careful and follow these rules too."
            ]}
        />
        <div className="lightblue-div img-div">
            <Paragraph 
                heading="LOCATION" 
                subheading="Find Room 1109 in the North-East corner of the Siebel Center for Comp Science" />
            <img src={makerspace_map}/>
            <div style={{ marginTop: "20px", textAlign: "center" }}>
                <a href="https://forms.gle/BKq6QW5Y7QVYF6jy9" style={{ textDecoration: "underline", color: "#007bff", fontSize: "18px", fontWeight: "bold" }}>Request Access Here!</a>
            </div>
        </div>
        <Paragraph 
            heading="ACCESS PROCEDURE" 
            subheading="Timeline for access and steps to take"
            paragraphs={[
                "First fill out the form above. In the form there is a link to a training document that outlines the lab equipments and related safety information. Please read this document and watch the linked videos before filling out the form, as you will be asked some questions on it.",
                "After reading through the lab policies and agreeing to them, you will be asked to choose a time for the lab orientation. This orientation will be held in the Makerspace (Siebel 1109) every Saturday and will take about 30 minutes. During this orientation, we will go over the lab policies and procedures. We will also go over the equipment in the lab and how to use it. After the orientation, you will be given access to the lab."
              ]}
        />
      </div>
      <Footer />
    </body>
  )
}

export default MakerspacePage