import * as React from "react"

import "../../theme.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "../../templates/navigation/navigation"
import { PageHero } from "../../templates/hero/hero"
import { Paragraph, List } from "../../templates/paragraph/Paragraph";
import Footer from "../../templates/footer/footer";
import { ButtonContainer } from "../../templates/buttons/buttons";

import texture from "../../images/texture.jpeg"

import { LabAssistantApplicationForm } from "../../templates/forms/forms";

import { Helmet } from "react-helmet"
import favicon from '../../images/block-i.png';

const LabAssistantApplicationPage = () => {
  return (
    <body>
      <Helmet
        title="IoT@Illinois - Lab Assistant Application"
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
        <PageHero texture_img={texture} title={"LAB ASSISTANT"}/>   
        <div style={{display:"flex", flexDirection:"column", alignItems:"center", gap:"20px"}}>
        <Paragraph heading="About Illinois of Things" subheading="The first IoT-focused summer camp for high school students at U of I" 
              paragraphs={[
                  "We are IoT@Illinois, the IoT Research Lab at U of I. We are organizing a summer camp for high school students during summer 2022 and we need your help!"
              ]}
              list={<List 
                listHeader={<p>Summer Camp Information</p>}
                listItems={[
                  "WHEN: 6/19-6/25",
                  "WHO: high school students going into 10-12th grade",
                  "WHERE: U of I campus",
                  "WHY: to introduce the field of IoT to the next generation of innovators",
                ]}
                />}/>
        <ButtonContainer 
            items={[
              {name: "More Information", href: "/outreach/summer-camp"}
            ]}/>
        </div>
        <div>
        <Paragraph heading="Summer Camp Lab Assistant Position Overview" subheading="Learn more about who we are looking for" 
            paragraphs={[
                "Thank you for your interest in becoming a Lab Assistant for our camp! Please ensure that you will be available during 6/19 (Sunday) afternoon til 6/25 (Saturday) morning, and are physically present on campus. You will be compensated $15/hr for your assistance."
            ]} />
        <List 
            listHeader={<p>What you will do:</p>}
            listItems={[
                "Be available during 6/19 (Sunday) afternoon til 6/25 (Saturday) morning",
                "Be available for any training sessions/workshops prior to the camp (ie during the semester)",
                "Assist campers in their project",
                "Answer any questions related to engineering at U of I",
                "Answer any technical questions related to IoT and programmiing",
                "Interact with the campers during lecture activities"
            ]}
            />
        <List 
            listHeader={<p>Position Qualifications</p>}
            listItems={[
                "Be available during 6/19 (Sunday) afternoon til 6/25 (Saturday) morning",
                "General programming experience (python preferred)",
                "Knowledge or interest in IoT",
                "Preferably have taken CS437 (Topics in Internet of Things)",
                "Aptitude at interacting with minors"
            ]}
            />
        </div>
        <LabAssistantApplicationForm />
      </div>
      <Footer />
    </body>
  )
}

export default LabAssistantApplicationPage
