import * as React from "react"

import "../theme.css"
import 'bootstrap/dist/css/bootstrap.min.css';

import { Helmet } from "react-helmet"
import favicon from '../images/block-i.png';

import { SubPageHero } from "../templates/hero/hero";
import hero from "../images/hero.jpg"

import Collapsible from "../templates/collapsible/collapsible";

import { Paragraph } from "../templates/paragraph/Paragraph";
import { ButtonContainer } from "../templates/buttons/buttons";

import ReactGoogleSlides from "react-google-slides";
import { PeopleTable } from "../templates/people/people";

import caesar from "../images/caesar2.png"
import keshav_shivam from "../images/camp/keshav_shivam.jpeg"
import yan_chen from "../images/camp/yan_chen.jpeg"

// If you want to delete them, go ahead and delete them
// import camille_cobb from "../images/camp/camille_cobb.jpeg"
// import melissa_chen from "../images/camp/melissa_chen.jpeg"
// import lucas_flygare from "../images/camp/lucas_flygare.jpeg"
// import morgan_fong from "../images/camp/morgan_fong.jpeg"
// import anthony_leapo from "../images/camp/anthony_leapo.jpeg"
// import erin_wang from "../images/camp/erin_wang.jpeg"
// import snehal_pachingar from "../images/camp/snehal_pachingar.jpeg"
// import nathan_handler from "../images/camp/nathan_handler.jpeg"
// import calina_shaw from "../images/camp/calina_shaw.jpeg"
// import arnav_mishra from "../images/camp/arnav_mishra.jpeg"

const people_arr = [
    {name:"Matthew Caesar", bio:"Professor", involvement:"caesar@illinois.edu", img: caesar, linkedin: "https://www.linkedin.com/in/matthew-caesar/"},
    {name:"Yan Chen", bio:"Professor", involvement:"ychen@northwestern.edu", img: yan_chen, linkedin:"https://www.linkedin.com/in/yan-chen-057b123/"},
    {name:"Keshav Shivam", bio:"Software Engineer, Google", involvement:"keshavshivam18@gmail.com", img: keshav_shivam, linkedin:"https://www.linkedin.com/in/keshav-shivam-684717100/"},
]

const CampPage = () => {
  return (
    <body>
        <Helmet
            title="IoT@Illinois - Camp"
            meta={[
                { name: 'description', content: 'The official website for The Illinois Center for Internet of Things.' },
                { name: 'keywords', content: 'Illinois IoT' },
            ]}
            link={[
                { rel: 'shortcut icon', type: 'image/png', href: `${favicon}` }
            ]}
        />
        <div className="flex-parent" style={{display:"flex", flexDirection:"column", alignItems:"center", width: "100vw", padding:"0vw"}}>
            <SubPageHero no_margin={true} hero_img={hero}  title={"Welcome to IoT@Illinois"} subtitle={"2023 Camp Material"}/>
            <div style={{width:"100vw", display:"flex", flexDirection:"column", gap:"20px"}}>
            <div style={{display:"flex", flexDirection:"column", gap:"20px", padding: "40px 10vw"}}>
                    <Paragraph heading={"DAY 0"} />
                    <ButtonContainer 
                        items={[
                        {name: "Intro Survey", href: "https://docs.google.com/forms/d/e/1FAIpQLSd4ouO8wi-FJrkPHfxpwtGgQGV9FFgEpCmBtAhQ1xQMa4PEJg/viewform", new_tab:true},
                        {name:"EWS Credentials", href:"/camp/ews-credentials", new_tab:true},
                        {name:"Guest Wi-Fi Credentials", href:"/camp/guest-wifi-credentials", new_tab:true},
                        {name:"Camp Schedule", href:"/camp/camp-schedule", new_tab:true}]}/>
            </div>
            
            <div className="lightblue-div" style={{display:"flex", flexDirection:"column", gap:"20px"}}>
                <Paragraph heading={"DAY 1"} />
                <Collapsible 
                    header_light={true}
                    header={"Lecture Slides"}
                    detail={
                    <div style={{display:"flex", flexDirection:"column", gap:"20px"}}>
                        <ReactGoogleSlides
                            height="400px"
                            width="100%"
                            slidesLink="https://docs.google.com/presentation/d/1XPEDcmMltW_LmqjJhc9jmPweZdwmQTG7/edit?usp=sharing&ouid=115923064281253178961&rtpof=true&sd=true"
                            slideDuration={5}
                            showControls
                            loop
                        />
                        <ButtonContainer 
                            items={[
                            {name: "Python Tutorial", href: "https://colab.research.google.com/drive/1oZvhzrTAjKOv22QqjFwyuMJ0pywzK5Pb?usp=sharing"}
                            ]}/>
                    </div>}
                />
                <Collapsible 
                    header_light={true}
                    header={"Mini Lab Slides"}
                    detail={
                        <div>
                        <ReactGoogleSlides
                            height="400px"
                            width="100%"
                            slidesLink="https://docs.google.com/presentation/d/1DRGr_CLwFjSJYmwI-ZF_b0CHsFFnbP_j8MT_Nc_SoZE/edit?usp=sharing"
                            slideDuration={5}
                            showControls
                            loop
                        />
                    </div>}
                />
                <Collapsible 
                    header_light={true}
                    header={"Speaker Slides"}
                    detail={
                        <div>
                        <ReactGoogleSlides
                            height="400px"
                            width="100%"
                            slidesLink="https://docs.google.com/presentation/d/10t0y1wtVo_1InOhNjRJ3gQwd9fJCcw5O/edit?usp=sharing&ouid=115923064281253178961&rtpof=true&sd=true"
                            slideDuration={5}
                            showControls
                            loop
                        />
                    </div>}
                />
                <ButtonContainer 
                    items={[
                    {name: "Project Documentation", href: "/camp/day1"}
                    ]}/>
            </div>

            <div style={{display:"flex", flexDirection:"column", gap:"20px", padding: "40px 10vw"}}>
                <Paragraph heading={"DAY 2"} />
                <Collapsible 
                    header={"Lecture Slides"}
                    detail={
                    <div>
                        <ReactGoogleSlides
                            height="400px"
                            width="100%"
                            slidesLink="https://docs.google.com/presentation/d/1zZUseqV5Te6cyWiUASziMwi7BQOQWuP8/edit?usp=sharing&ouid=115923064281253178961&rtpof=true&sd=true"
                            slideDuration={5}
                            showControls
                            loop
                        />
                    </div>}
                />
                <Collapsible 
                    header={"Mini Lab Slides"}
                    detail={
                        <div>
                        <ReactGoogleSlides
                            height="400px"
                            width="100%"
                            slidesLink="https://docs.google.com/presentation/d/1Ndy1pxWrA8abEsNsLol_7eREYb43GXQdqYPws-ntsO0/edit?usp=sharing"
                            slideDuration={5}
                            showControls
                            loop
                        />
                    </div>}
                />
                <Collapsible 
                    header={"Speaker Slides"}
                    detail={
                        <div>
                        <ReactGoogleSlides
                            height="400px"
                            width="100%"
                            slidesLink="https://docs.google.com/presentation/d/1XeQZSNK3e7uTCk9ioEWZffup5gKqqfj6/edit?usp=sharing&ouid=115923064281253178961&rtpof=true&sd=true"
                            slideDuration={5}
                            showControls
                            loop
                        />
                    </div>}
                />
                <ButtonContainer 
                    items={[
                    {name: "Project Documentation", href: "https://colab.research.google.com/drive/1BPWM5vd7DAHiVtBY5D_yrY4u_D0njd_1?usp=sharing"}
                    ]}/>
            </div>

            

            <div className="lightblue-div" style={{display:"flex", flexDirection:"column", gap:"20px"}}>
                <Paragraph heading={"DAY 3"} />
                <Collapsible 
                    header_light={true}
                    header={"Lecture Slides"}
                    detail={
                    <div>
                        <ReactGoogleSlides
                            height="400px"
                            width="100%"
                            slidesLink="https://docs.google.com/presentation/d/1NPFkR9vfGw0gxU3Jr-4HoCo5rlcg4JD-/edit?usp=sharing&ouid=115923064281253178961&rtpof=true&sd=true"
                            slideDuration={5}
                            showControls
                            loop
                        />
                    </div>}
                />
                <Collapsible 
                    header_light={true}
                    header={"Mini Lab Slides"}
                    detail={
                        <div>
                        <ReactGoogleSlides
                            height="400px"
                            width="100%"
                            slidesLink="https://docs.google.com/presentation/d/1tNtvQ8F9R1-71sDQC2QSeybqRUdqJGT5WHKioMPCYbs/edit?usp=sharing"
                            slideDuration={5}
                            showControls
                            loop
                        />
                    </div>}
                />
                <ButtonContainer 
                    items={[
                    {name: "Project Documentation", href: "/camp/day3"}
                    ]}/>
            </div>
            
            <div style={{display:"flex", flexDirection:"column", gap:"20px", padding: "40px 10vw"}}>
                <Paragraph heading={"DAY 4"} />
                <Collapsible 
                    header={"Lecture Slides"}
                    detail={
                    <div>
                        <ReactGoogleSlides
                            height="400px"
                            width="100%"
                            slidesLink="https://docs.google.com/presentation/d/1Zc_tQ3liWj7LHjZ7qVZ9vsjlFnihcsaj/edit?usp=sharing&ouid=115923064281253178961&rtpof=true&sd=true"
                            slideDuration={5}
                            showControls
                            loop
                        />
                    </div>}
                />
                <Collapsible 
                    header={"Mini Lab Slides"}
                    detail={
                        <div>
                        <ReactGoogleSlides
                            height="400px"
                            width="100%"
                            slidesLink="https://docs.google.com/presentation/d/1kjoMQowrxY6plJxlY_2RcjpgJtdzzVomDhv86vIQc3Y/edit?usp=sharing"
                            slideDuration={5}
                            showControls
                            loop
                        />
                    </div>}
                />
                <ButtonContainer 
                    items={[
                    {name: "Project Documentation", href: "/camp/day4"}
                    ]}/>
                <ButtonContainer 
                    items={[
                    {name: "Resume Template (Word)", href:"https://docs.google.com/document/d/1wHvnxUcmGbjS8MenNsxd0wOnYmgZPsy3/edit?usp=sharing&ouid=115923064281253178961&rtpof=true&sd=true", new_tab:true},
                    {name: "Resume Template (Google Doc)", href:"https://docs.google.com/document/d/1QANkJZoyQGQ5QAzApE2vUN2YBzMlGxCguAlL-pkdVc0/edit?usp=sharing", new_tab:true}
                    ]}/>
                <ButtonContainer 
                    items={[
                    {name: "Kush's Example Resume", href:"https://drive.google.com/file/d/1W7TYpmjWPYByR4moFsKwMx2W4n9LpQgO/view?usp=sharing", new_tab:true},
                    {name: "Lily's Example Resume", href:"https://drive.google.com/file/d/1lW9ZR_UYNecvNqI33ay8RYw4KVHWDIww/view?usp=sharing", new_tab:true}
                    ]}/>
            </div>
            <div className="lightblue-div" style={{display:"flex", flexDirection:"column", gap:"20px"}}>
                <Paragraph heading={"DAY 5"} />
                <Collapsible 
                    header_light={true}
                    header={"Lecture Slides"}
                    detail={
                    <div>
                        <ReactGoogleSlides
                            height="400px"
                            width="100%"
                            slidesLink="https://docs.google.com/presentation/d/1n5AIgXRRHqZ-qdDdZs8J4UWr90vOQQLe/edit?usp=sharing&ouid=115923064281253178961&rtpof=true&sd=true"
                            slideDuration={5}
                            showControls
                            loop
                        />
                    </div>}
                />
                <Collapsible 
                    header_light={true}
                    header={"Mini Lab Slides"}
                    detail={
                        <div>
                        <ReactGoogleSlides
                            height="400px"
                            width="100%"
                            slidesLink="https://docs.google.com/presentation/d/1DrropJwo9KCWSrPL4OshorrOC0fuaHnmI2FIMfYO4kE/edit?usp=sharing"
                            slideDuration={5}
                            showControls
                            loop
                        />
                    </div>}
                />
                <ButtonContainer 
                    items={[
                    {name: "Project Documentation", href: "/camp/day5"}
                    ]}/>
            </div>
            <div className="lightblue-div" style={{display:"flex", flexDirection:"column", gap:"20px"}}>
                <Paragraph heading={"Speaker Contact Info"} 
                    subheading={"When emailing, you MUST CC Xinyi (xwei16@illinois.edu) & Lara (lhebert2@illinois.edu)"} />
                <PeopleTable people={people_arr}/>
            </div>
            </div>
        </div>
    </body>
  )
}

export default CampPage
