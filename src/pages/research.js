import * as React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "../templates/navigation/navigation"
import { PageHero } from "../templates/hero/hero"

import about_hero from "../images/about_hero.png"
import texture from "../images/texture.jpeg"
import FlipCards from "../templates/flipcards/flipcards";
import flipcard from "../images/flipcard.jpeg"
import Footer from "../templates/footer/footer";

const CaesarPage = () => {
  const cards = [{primary:"3", secondary:"years old", img: flipcard}, 
    {primary:"100+", secondary:"undergraduate students", img: flipcard}, 
    {primary:"10",secondary:"graduate/Ph.D. students", img: flipcard}, 
    {primary:"4",secondary:"current projects", img: flipcard}, 
    {primary:"18",secondary:"past projects", img: flipcard}]

  return (
    <body>
      <title>Research Overview</title>
      <Navigation />
      <div className="flex-parent" style={{display:"flex", flexDirection:"column", alignItems:"center", width: "100vw", padding:"0vw 10vw"}}>
        <PageHero texture_img={texture} hero_img={about_hero} title={"Research"} subtitle={"Learn more about all current and past projects"}/>      
        <FlipCards items={cards}/>
        <Footer />
      </div>
    </body>
  )
}

export default CaesarPage