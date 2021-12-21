/*
 * navigation.js
 * Author: Lily Li
 */

import React from 'react';
import { Navbar,Nav, NavDropdown} from 'react-bootstrap';
import './navigation.css';
import logo from '../../images/sample_logo.jpeg'

export default class Navigation extends React.Component {
    constructor(props) {
        super(props);
        // binds open() function
        this.open = this.open.bind(this);
        //sets scroll listeners 
        this.listener = null;
        this.state = {
          expanded: null,
          navbarClass: "navbar-primary",
          navbarItems: null
        };
      }
    
    //opens url
    open(url) {
        var win = window.location.replace(url);
    }

    //ran when page loads
    componentDidMount() {
        //adds scroll listener
        this.listener = document.addEventListener("scroll", e => {
          this.renameNavbarClassName();
        });
        this.listener = document.addEventListener("resize", e => {

          this.renameNavbarClassName();
          this.addNavbar();
        });

        if(window.innerWidth > 425){
          this.setState({ navbarClass: "navbar-primary" });
        }
        else{
          this.setState({ navbarClass: "navbar-not-expanded" });
        }
        this.addNavbar();
    }

    renameNavbarClassName(){
      var scrolled = document.scrollingElement.scrollTop;
      if(window.innerWidth >= 10000){
        if (scrolled >= 120) {
          this.setState({ navbarClass: "navbar-secondary" });
        }
        else{
          this.setState({ navbarClass: "navbar-primary" });
        }
      }
      else{
        if(this.state.expanded){
          this.setState({ navbarClass: "navbar-expanded" });
        }
        else if(scrolled >= 120){
          this.setState({ navbarClass: "navbar-secondary" });
        }
        else{
          this.setState({ navbarClass: "navbar-primary" });
        }
      }
      this.addNavbar();
      console.log("navbarClass: " + this.state.navbarClass);
    }

    addNavbar(){
      var navLinks = []
      if(window.innerWidth > 600 || (window.innerWidth >= 10000 && this.state.navbarClass==="navbar-primary") || this.state.navbarClass==="navbar-expanded"){
      } else {
            navLinks.push(
                <Nav.Link href="/about" style={{backgroundColor:"black"}}><h5 id="navbar-item" className="subscript">About</h5></Nav.Link>
            );
            navLinks.push(
                <NavDropdown.Item  href="/welcome" id="navbar-item"><h5 id="navbar-item" className="subscript">&ndash; Welcome</h5></NavDropdown.Item>
            );
            navLinks.push(
                <NavDropdown.Item href="/mission"><h5 id="navbar-item" className="subscript">&ndash; Mission</h5></NavDropdown.Item>
            );
            navLinks.push(
                <NavDropdown.Item href="/support"><h5 id="navbar-item" className="subscript">&ndash; Support Us</h5></NavDropdown.Item>
            );
            navLinks.push(
                <Nav.Link href="/caesar"><h5 id="navbar-item" className="subscript">Professor Caesar</h5></Nav.Link>
            );
            navLinks.push(
                <Nav.Link href="/research"><h5 id="navbar-item" className="subscript">Research</h5></Nav.Link>
            );
            navLinks.push(
                <NavDropdown.Item href="/iot-simulation"><h5 id="navbar-item" className="subscript">&ndash; IoT Simulation</h5></NavDropdown.Item>
            );
            navLinks.push(
                <NavDropdown.Item href="/autonomy"><h5 id="navbar-item" className="subscript">&ndash; Autonomy Research</h5></NavDropdown.Item>
            );
            navLinks.push(
                <Nav.Link href="/outreach"><h5 id="navbar-item" className="subscript">Outreach</h5></Nav.Link>
            );
            navLinks.push(
                <NavDropdown.Item href="/local-outreach"><h5 id="navbar-item" className="subscript">&ndash; Local Outreach</h5></NavDropdown.Item>
            );
            navLinks.push(
                <NavDropdown.Item href="/summer-camp"><h5 id="navbar-item" className="subscript">&ndash; Summer Camp</h5></NavDropdown.Item>
            );
            navLinks.push(
                <Nav.Link href="/connect"><h5 id="navbar-item" className="subscript">Connect</h5></Nav.Link>
            );
        }
        this.setState({
            navbarItems: navLinks,
        });
    }
    
    //remove scroll listener
    componentDidUpdate() {
        document.removeEventListener("scroll", this.listener);
        document.removeEventListener("resize", this.listener);
    }

    toggleExpand(){
      if(this.state.expanded == null) { 
        this.setState({ expanded: true}, () => {
          this.renameNavbarClassName();
        }); 
      }
      else { 
        this.setState({ expanded: !this.state.expanded}, () => {
          this.renameNavbarClassName();
        }); 
      }
      this.addNavbar();
    }
    render() {
        return(
            <div className={this.state.navbarClass}>
              <a href="/"><img  id="logo-img" src={logo} alt="i-Jet logo" style={{...this.state.navbarClass=== "navbar-expanded" ? {visibility: "hidden"} : {visibility: "visible"}}}/></a>
              <Navbar collapseOnSelect expand='sm' className="navbar" onToggle={()=> this.toggleExpand()} id={this.state.navbarClass === "navbar-primary" ? "box-shadow" : ""}>
                  <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                  <Navbar.Collapse id="responsive-navbar-nav"> {/*navbar background*/}
                      <Nav className="mr-auto" id="nav"> {/*actual navbar*/}
                          <NavDropdown onClick={()=>this.open("/about")} href="/about" id="nav-dropdown" style={{whiteSpace:"nowrap"}} title={<p id="navbar-item">About &#11022;</p>} renderMenuOnMount={true} style={{...this.state.navbarClass=== "navbar-expanded" ? {visibility: "hidden"} : {visibility: "visible"}}}>
                              <NavDropdown.Item  href="/welcome" className="dropdown-item"><p>Welcome</p></NavDropdown.Item>
                              <NavDropdown.Item href="/mission" className="dropdown-item"><p>Mission</p></NavDropdown.Item>
                              <NavDropdown.Item href="/support" className="dropdown-item"><p>Support Us</p></NavDropdown.Item>
                          </NavDropdown>
                          <Nav.Link href="/caesar" style={{...this.state.navbarClass=== "navbar-expanded" ? {visibility: "hidden"} : {visibility: "visible"}}}><p id="navbar-item">Professor Caesar</p></Nav.Link>
                          <NavDropdown onClick={()=>this.open("/research")} href="/research" id="nav-dropdown" style={{whiteSpace:"nowrap"}} title={<p id="navbar-item">Research &#11022;</p>} renderMenuOnMount={true} style={{...this.state.navbarClass=== "navbar-expanded" ? {visibility: "hidden"} : {visibility: "visible"}}}>
                              <NavDropdown.Item  href="/iot-simulation" className="dropdown-item"><p>IoT Simulation</p></NavDropdown.Item>
                              <NavDropdown.Item href="/autonomy" className="dropdown-item"><p>Automony Research</p></NavDropdown.Item>
                          </NavDropdown>
                          <NavDropdown onClick={()=>this.open("/outreach")} href="/outreach" id="nav-dropdown" style={{whiteSpace:"nowrap"}} title={<p id="navbar-item">Outreach &#11022;</p>} renderMenuOnMount={true} style={{...this.state.navbarClass=== "navbar-expanded" ? {visibility: "hidden"} : {visibility: "visible"}}}>
                              <NavDropdown.Item  href="/local-outreach" className="dropdown-item"><p>Local Outreach</p></NavDropdown.Item>
                              <NavDropdown.Item href="/summer-camp" className="dropdown-item"><p>Summer Camp</p></NavDropdown.Item>
                          </NavDropdown>
                          <Nav.Link href="/connect" style={{...this.state.navbarClass=== "navbar-expanded" ? {visibility: "hidden"} : {visibility: "visible"}}}><p id="navbar-item">Connect</p></Nav.Link>
                          {this.state.navbarItems}
                      </Nav>
                  </Navbar.Collapse>
              </Navbar>
            </div>
        );  
    }
}