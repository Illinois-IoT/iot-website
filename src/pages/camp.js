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
            <SubPageHero no_margin={true} hero_img={hero}  title={"Welcome to IoT@Illinois"} subtitle={"2022 Camp Material"}/>
            <div style={{width:"100vw", display:"flex", flexDirection:"column", gap:"20px"}}>
                <div style={{display:"flex", flexDirection:"column", gap:"20px"}}>
                    <Paragraph heading={"DAY 0"} />
                    <ButtonContainer 
                        items={[
                        {name: "Intro Survey", href: "https://forms.gle/BLQy9s1784JXq168A", new_tab:true}
                        ]}/>
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
                        header_light={true}
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
                        header_light={true}
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
            </div>
        </div>
    </body>
  )
}

export default CampPage
