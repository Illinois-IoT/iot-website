/*
 * navigation.js
 * Author: Lily Li
 */

import React from 'react';
import { Navbar,Nav, NavDropdown} from 'react-bootstrap';
import './navigation.css';
import logo from '../../images/iot-logo.png'

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
          innerWidth: 0,
          mobile_expanded: false
        };
      }
    
    //opens url
    open(url) {
        var win = window.location.replace(url);
    }

    componentDidMount() {
        //adds scroll listener
        this.listener = document.addEventListener("scroll", e => {
          this.setState({
            innerWidth: window.innerWidth
          });
          this.renameNavbarClassName();
        });
        this.listener = document.addEventListener("resize", e => {

          this.renameNavbarClassName();
        });

        if(window.innerWidth > 425){
          this.setState({ navbarClass: "navbar-primary" });
        }
        else{
          this.setState({ navbarClass: "navbar-not-expanded" });
        }

        this.setState({
          innerWidth: window.innerWidth
        });
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
      console.log("navbarClass: " + this.state.navbarClass);
    }
    
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
    }

    render() {
        if (this.state.innerWidth > 600) {
        return(
            <div className={this.state.navbarClass}>
              <a href="/"><img  id="logo-img" src={logo} alt="logo" style={{...this.state.navbarClass=== "navbar-expanded" ? {visibility: "hidden"} : {visibility: "visible"}}}/></a>
              <Navbar collapseOnSelect expand='sm' className="navbar" onToggle={()=> this.toggleExpand()} id={this.state.navbarClass === "navbar-secondary" ? "box-shadow" : ""}>
                  <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                  <Navbar.Collapse id="responsive-navbar-nav"> {/*navbar background*/}
                      <Nav className="mr-auto" id="nav"> {/*actual navbar*/}
                          <NavDropdown onClick={()=>this.open("/about")} href="/about" id="nav-dropdown" style={{whiteSpace:"nowrap"}} title={<p id="navbar-item">About &#9660;</p>} renderMenuOnMount={true} style={{...this.state.navbarClass=== "navbar-expanded" ? {visibility: "hidden"} : {visibility: "visible"}}}>
                              <NavDropdown.Item href="/welcome" className="dropdown-item"><p>Welcome</p></NavDropdown.Item>
                              <NavDropdown.Item href="/mission" className="dropdown-item"><p>Mission</p></NavDropdown.Item>
                              <NavDropdown.Item href="/support" className="dropdown-item"><p>Support Us</p></NavDropdown.Item>
                          </NavDropdown>
                          <Nav.Link href="/people" style={{...this.state.navbarClass=== "navbar-expanded" ? {visibility: "hidden"} : {visibility: "visible"}}}><p id="navbar-item">People</p></Nav.Link>
                              {/* <NavDropdown.Item href="/people/caesar" className="dropdown-item"><p>Professor Caesar</p></NavDropdown.Item>
                              <NavDropdown.Item href="/people/elahe" className="dropdown-item"><p>Professor Elahe</p></NavDropdown.Item> */}
                          {/* </Nav></NavDropdown> */}
                          <Nav.Link href="/makerspace" style={{...this.state.navbarClass=== "navbar-expanded" ? {visibility: "hidden"} : {visibility: "visible"}}}><p id="navbar-item">Makerspace</p></Nav.Link>
                          <NavDropdown onClick={()=>this.open("/outreach")} href="/outreach" id="nav-dropdown" style={{whiteSpace:"nowrap"}} title={<p id="navbar-item">Outreach &#9660;</p>} renderMenuOnMount={true} style={{...this.state.navbarClass=== "navbar-expanded" ? {visibility: "hidden"} : {visibility: "visible"}}}>
                              <NavDropdown.Item href="/outreach/local-outreach" className="dropdown-item"><p>Local Outreach</p></NavDropdown.Item>
                              <NavDropdown.Item href="/outreach/summer-camp" className="dropdown-item"><p>Summer Camp</p></NavDropdown.Item>
                          </NavDropdown>
                          <Nav.Link href="/connect" style={{...this.state.navbarClass=== "navbar-expanded" ? {visibility: "hidden"} : {visibility: "visible"}}}><p id="navbar-item">Connect</p></Nav.Link>
                      </Nav>
                  </Navbar.Collapse>
              </Navbar>
            </div>
        );  
        } else {
          return (
            <div className={this.state.mobile_expanded ? 'navbar-div-mobile-expanded' : 'navbar-div-mobile'} id="box-shadow">
            <a href="/"><img  id="mobile-logo-img" src={logo} alt="logo"/></a>
            <Navbar collapseOnSelect expand='sm' expanded={this.state.mobile_expanded} className="navbar-mobile">
                  <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={() => this.setState({mobile_expanded: !this.state.mobile_expanded})} className='navbar-mobile-toggle'/>
                  <Navbar.Collapse id="responsive-navbar-nav"> {/*navbar background*/}
                      <Nav className="mr-auto" id="nav" justify-content-center> {/*actual navbar*/}
                        <Nav.Link href="/about" className='mobile-navlink'><h5 id="navbar-item" className="subscript">About</h5></Nav.Link>
                        <Nav.Link href="/welcome" className='mobile-navlink'><h5 id="navbar-item" className="subscript tab">&ndash; Welcome</h5></Nav.Link>
                        <Nav.Link href="/mission" className='mobile-navlink'><h5 id="navbar-item" className="subscript tab">&ndash; Mission</h5></Nav.Link>
                        <Nav.Link href="/support" className='mobile-navlink'><h5 id="navbar-item" className="subscript tab">&ndash; Support Us</h5></Nav.Link>
                        <Nav.Link href="/people" className='mobile-navlink'><h5 id="navbar-item" className="subscript">People</h5></Nav.Link>
                        <Nav.Link href="/people/caesar" className='mobile-navlink'><h5 id="navbar-item" className="subscript tab">&ndash; Professor Caesar</h5></Nav.Link>
                        <Nav.Link href="/people/elahe" className='mobile-navlink'><h5 id="navbar-item" className="subscript tab">&ndash; Professor Elahe</h5></Nav.Link>
                        <Nav.Link href="/makerspace" className='mobile-navlink'><h5 id="navbar-item" className="subscript">Makerspace</h5></Nav.Link>
                        <Nav.Link href="/research" className='mobile-navlink'><h5 id="navbar-item" className="subscript">Research</h5></Nav.Link>
                        <Nav.Link href="/research/autonomy" className='mobile-navlink'><h5 id="navbar-item" className="subscript tab">&ndash; Autonomy Research</h5></Nav.Link>
                        <Nav.Link href="/research/iot-simulation" className='mobile-navlink'><h5 id="navbar-item" className="subscript tab">&ndash; IoT Simulation</h5></Nav.Link>
                        <Nav.Link href="/research/ai-drone" className='mobile-navlink'><h5 id="navbar-item" className="subscript tab">&ndash; AI Drone Research</h5></Nav.Link>
                        <Nav.Link href="/research/iot-verification" className='mobile-navlink'><h5 id="navbar-item" className="subscript tab">&ndash; IoT Verification</h5></Nav.Link>
                        <Nav.Link href="/research/mmwave" className='mobile-navlink'><h5 id="navbar-item" className="subscript tab">&ndash; mmWave Research</h5></Nav.Link>
                        <Nav.Link href="/outreach" className='mobile-navlink'><h5 id="navbar-item" className="subscript">Outreach</h5></Nav.Link>
                        <Nav.Link href="/outreach/local-outreach" className='mobile-navlink'><h5 id="navbar-item" className="subscript tab">&ndash; Local Outreach</h5></Nav.Link>
                        <Nav.Link href="/outreach/summer-camp" className='mobile-navlink'><h5 id="navbar-item" className="subscript tab">&ndash; Summer Camp</h5></Nav.Link>
                        <Nav.Link href="/connect" className='mobile-navlink'><h5 id="navbar-item" className="subscript">Connect</h5></Nav.Link>
                      </Nav>
                  </Navbar.Collapse>
              </Navbar>
            </div>
          )
        }
    }
}