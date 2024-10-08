import * as React from "react"

import "../../theme.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "../../templates/navigation/navigation"
import { SubPageHero } from "../../templates/hero/hero"
import { ButtonContainer, BasicButton } from "../../templates/buttons/buttons";

import hero from "../../images/hero.jpg"

import summerCampLogo from "../../images/summer-camp-logo.png"
import { Paragraph, List } from "../../templates/paragraph/Paragraph";
import Collapsible from "../../templates/collapsible/collapsible";
import Footer from "../../templates/footer/footer";
import {TableRowDefaultImg} from "../../templates/table/tablerow";

import { Helmet } from "react-helmet"
import favicon from '../../images/block-i.png';

const SummerCampPage = () => {
  return (
    <body>
      <Helmet
        title="IoT@Illinois - Illinois of Things Summer Camp"
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
        <SubPageHero hero_img={hero}  title={"IoT Summer Camp"} subtitle={"Educating high school students on the basics of IoT Development"}/>      
        <TableRowDefaultImg 
          img_src={summerCampLogo}
          circle_img={false}
          detail={<div>
            <p>Introducing...</p>
            <Paragraph heading="ILLINOIS OF THINGS SUMMER CAMP" subheading="Organized by The Illinois Center for Internet of Things" 
                    paragraphs={[
                      "Introducing our first IoT Summer Camp for high school students! During the Summer of 2022, we will be hosting a week-long IoT-focused summer camp on the UofI campus. This camp is established in collaboration with WYSE. Campers will be able to spend a week on UofI campus, living in the dorms and learning about IoT development!"
                      ]}/>
          </div>}
          blue_background={false}
        />
        <div className="lightblue-div">
          <Paragraph heading={"SUMMER CAMP DETAILS"} />
          <h5>Who?</h5>
          <p>Calling all high school students interested in programming and the internet of things!</p>
          
          <h5>What?</h5>
          <p>The IoT Summer Camp is an residential, week-long camp where high school students learn the basics of IoT development. Campers will be introduced to the processes and architecture of IoT development, as well as applications for IoT. Throughout the week, they will be working on a culminating project, where they will apply the concepts being taught in a hands-on environment. There will also be guest speakers from the university and within the industry to give talks on their field of expertise.</p>
          <p>Campers will also get a feel for college life by living in a campus dorm for the duration of the camp. There will also be group activities/outings on and around campus (see the schedule below for details).</p>
          <p>At the end of the week, campers will have completed a culminating IoT project using a Raspberry Pi and several sensors. Each camp will be able to take these projects home to show off!</p>
          
          <h5>When?</h5>
          <p>6/19-6/25</p>

          <h5>Where?</h5>
          <p>The University of Illinois at Urbana-Champaign</p>

          <h5>How?</h5>
          <BasicButton new_tab={true} name={"Apply Here"} href={"https://enroll.illinois.edu/register/?id=02b43cb4-e3be-45f7-9f7c-315eb8bf8780"}/>
        </div>
        <div style={{width:"100%", display:"flex", flexDirection:"column", gap:"20px"}}>
          <Paragraph heading={"FREQUENTLY ASKED QUESTIONS"} />
          <Collapsible 
            header={"How much will the camp cost?"}
            detail={<div><p><b>Residential:</b> $1,000</p><p><b>Commuter:</b> $600</p></div>}
          />
          <Collapsible 
            header={"What is included in the tuition?"}
            detail={<List listItems={["Cost of living: housing, food", "Camp materials: IoT/electrical components", "Staffing: camp counselors and instructors"]}/>}
          />
          <Collapsible 
            header={"What/who is WYSE?"}
            detail={
            <div>
              <p>WYSE (Worldwide Youth in Science and Engineering Program) is a department in the Grainger College of Engineering. Their purpose is to introduce talented and diverse pre-college students to active college students, and together they explore engineering and the sciences through hands-on, minds-on activities. WYSE collaborates with departments across campus, with corporations and foundations, and with in- and out-of-school learning partners across the state, the WYSE program offers multiple out-of-school learning opportunities for K-12 students in Illinois, the nation, and the world.</p>
              <ButtonContainer 
              items={[
                {name: "WYSE Website", href: "https://wyse.engineering.illinois.edu/summer-camps/", new_tab:true}
              ]}/>
            </div>}
          />
          <Collapsible 
            header={"Why is the summer camp in collaboration with WYSE?"}
            detail={<p>Illinois IoT (Illinois Center for the Internet of Things) is Professor Caesar’s research group. While we are apt at IoT research, we are not equipped to organize a stand-alone summer camp without the help of WYSE. WYSE provides us with additional resources that we do not have, like overnight staff, knowledge on how to teach/interact with minors, etc.</p>}
          />
          <Collapsible 
            header={"Does my student live on campus for the camp?"}
            detail={<p>Yes! They will get to experience college life by living in one of the dorms on campus.</p>}
          />
          <Collapsible 
            header={"Will there be full-time camp counselors present?"}
            detail={<p>Yes! WYSE will provide staffing at the dormitory who will live with the students. Students in Illinois IoT and Professor Caesar will be present during the day to teach the course content and lead campers through the project.</p>}
          />
          <Collapsible 
            header={"Are there scholarships available?"}
            detail={
              <div style={{display:"flex", flexDirection:"column", alignItems:"flex-start", justifyContent:"flex-start", gap:"20px"}}>
                <p>Yes, definitely!</p>
                <p>WYSE offers the Trail Blazer Scholarship (from the WYSE website):</p>
                <div style={{width:"85%", padding: "40px", backgroundColor:"var(--cloud-darkest)", alignSelf:"center"}}>
                  <p>We offer the Trail Blazer Scholarship to make WYSE Engineering Summer Camps at the Grainger College of Engineering available to all youth by encouraging the participation of ALL students. This scholarship is available to any applicants who meet one OR more of the following criteria:</p>
                  <List listItems={["The applicant is a member of a group that is under-represented in the field of their chosen camp, such as women or gender non-binary individuals; students with a disability; students from underrepresented racial and ethnic minorities",
                    "The applicant will be the first among their immediate family members to earn a degree from a 4-year college or university",
                    "Applicant demonstrates leadership and civic responsibility through community impact work or entrepreneurship",
                    "Applicant demonstrates financial need based on household income and the number of members in the household"
                    ]}/>
                  <p>Applicants must meet the eligibility requirements for attendance at the WYSE Engineering Summer Camps in the same year that they are applying for the scholarship. The Trail Blazer Scholarship application is embedded in the overall camp application process, and it includes a brief essay written by the applicant and a statement of financial need completed by a parent or guardian.</p>
                  <p>Partial (50%) and full-scholarships are available. Over $30,000 from generous gift donations supported students and families during the 2020 camp season.</p>
                </div>
                <p>Illinois IoT understands that not all students and families can afford the tuition. Along with WYSE’s scholarships, we are also hoping to provide scholarships or stipends for motivated students who are unable to afford the tuition. More details to come.</p>
              </div>
            }
          />
          <Collapsible 
            header={"More questions?"}
            detail={
            <div>
              <p>Check out the Frequently Asked Questions page on WYSE’s website.</p>
              <ButtonContainer 
              items={[
                {name: "WYSE FAQ", href: "https://wyse.engineering.illinois.edu/faqs/", new_tab:true}
              ]}/>
            </div>}
          />
        </div>
      </div>
      <Footer />
    </body>
  )
}

export default SummerCampPage
