import React from 'react'
import './capstone-showcase.css'
import { useStaticQuery, graphql } from 'gatsby'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { Link } from 'gatsby'
import Navigation from "../templates/navigation/navigation"
import { PageHero } from "../templates/hero/hero"
import Footer from "../templates/footer/footer"
import { Helmet } from "react-helmet"
import favicon from '../images/block-i.png'
import about_hero from "../images/hero1.jpeg"
import texture from "../images/hero3.jpeg"

const CapstoneShowcase = () => {
  const capstone_data = useStaticQuery(graphql`
    query {
      allProjectsJson {
        edges {
          node {
            id
            title
            description
            demoVideo
            read_more
            teamMembers {
              name
              email
            }
          }
        }
      }
    }
  `)

  const getYouTubeEmbedUrl = (url) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    if (match && match[2].length === 11) {
      return `https://www.youtube.com/embed/${match[2]}`;
    }
    return url;
  }

  const projects = capstone_data.allProjectsJson.edges.map(edge => ({
    ...edge.node,
    demoVideo: getYouTubeEmbedUrl(edge.node.demoVideo)
  }))
  return (
    <body>
      <Helmet
        title="IoT@Illinois - Capstone Showcase"
        meta={[
          { name: 'description', content: 'Capstone Project Showcase for The Illinois Center for Internet of Things.' },
          { name: 'keywords', content: 'Illinois IoT Capstone Projects' },
        ]}
        link={[
          { rel: 'shortcut icon', type: 'image/png', href: `${favicon}` }
        ]}
      />
      <Navigation />
      <div className="flex-parent" style={{display:"flex", flexDirection:"column", alignItems:"center", width: "100vw", padding:"0vw 10vw"}}>
        <div className="capstone-hero-wrapper">
          <PageHero texture_img={texture} hero_img={about_hero} title="CAPSTONE SHOWCASE" subtitle="Explore innovative IoT projects by our students"/>
        </div>
        <Container fluid>
          <Row xs={1} md={2} lg={3} className="g-4 custom-row-spacing">
            {projects.map((project) => (
              <Col key={project.id}>
                <Card className="h-100">
                  <Card.Header>
                    <h3>{project.title}</h3>
                    <div className="team-members">
                      {project.teamMembers.map((member, index) => (
                        <a key={index} href={`mailto:${member.email}`} className="team-member-link">
                          {member.name}
                        </a>
                      ))}
                    </div>
                  </Card.Header>
                  <div className="embed-responsive embed-responsive-16by9">
                    <iframe
                      className="embed-responsive-item card-img-top"
                      src={project.demoVideo}
                      title={`${project.title} Demo Video`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <Card.Body>
                    <Card.Text>{project.description}</Card.Text>
                    {project.read_more && (
                      <a href={project.read_more} className="read-more-link" target="_blank" rel="noopener noreferrer">
                        Read More
                      </a>
                    )}
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
      <Footer />
    </body>
  )
}

export default CapstoneShowcase
