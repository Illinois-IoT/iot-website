"use strict";(self.webpackChunkiot_website=self.webpackChunkiot_website||[]).push([[678],{1503:function(e,t,n){n.r(t),n.d(t,{default:function(){return Q}});var r=n(7294),a=n(9547),i=n(7546),o=n.p+"static/hero1-932d69ac7a891a2f3c4af74eaca1250d.jpeg",c=n(5988),l=n(7770),s=n(9441),u=n(9022),d=n(7462),m=n(3366),f=n(5655);var v=function(e,t){var n=(0,r.useRef)(!0);(0,r.useEffect)((function(){if(!n.current)return e();n.current=!1}),t)},h=n(9424),g=n(6400);function p(e){var t,n,a=(t=e,(n=(0,r.useRef)(t)).current=t,n);(0,r.useEffect)((function(){return function(){return a.current()}}),[])}var E=Math.pow(2,31)-1;function b(e,t,n){var r=n-Date.now();e.current=r<=E?setTimeout(t,r):setTimeout((function(){return b(e,t,n)}),E)}function y(){var e=(0,g.Z)(),t=(0,r.useRef)();return p((function(){return clearTimeout(t.current)})),(0,r.useMemo)((function(){var n=function(){return clearTimeout(t.current)};return{set:function(r,a){void 0===a&&(a=0),e()&&(n(),a<=E?t.current=setTimeout(r,a):b(t,r,Date.now()+a))},clear:n}}),[])}var x=n(5900),I=n.n(x),w=n(5160),k=n(5697),C=n.n(k),N=n(5513),T=(0,n(8870).Z)("carousel-caption"),S=n(9541),O=["as","bsPrefix","children","className"],R=r.forwardRef((function(e,t){var n=e.as,a=void 0===n?"div":n,i=e.bsPrefix,o=e.children,c=e.className,l=(0,m.Z)(e,O),s=I()(c,(0,S.vE)(i,"carousel-item"));return r.createElement(a,(0,d.Z)({ref:t},l,{className:s}),o)}));R.displayName="CarouselItem";var A=R;function Z(e,t){var n=0;return r.Children.map(e,(function(e){return r.isValidElement(e)?t(e,n++):e}))}var M=n(6306),_=n(1831),D=n(9059),P=["as","bsPrefix","slide","fade","controls","indicators","activeIndex","onSelect","onSlide","onSlid","interval","keyboard","onKeyDown","pause","onMouseOver","onMouseOut","wrap","touch","onTouchStart","onTouchMove","onTouchEnd","prevIcon","prevLabel","nextIcon","nextLabel","className","children"],L={bsPrefix:C().string,as:C().elementType,slide:C().bool,fade:C().bool,controls:C().bool,indicators:C().bool,activeIndex:C().number,onSelect:C().func,onSlide:C().func,onSlid:C().func,interval:C().number,keyboard:C().bool,pause:C().oneOf(["hover",!1]),wrap:C().bool,touch:C().bool,prevIcon:C().node,prevLabel:C().string,nextIcon:C().node,nextLabel:C().string},q={slide:!0,fade:!1,controls:!0,indicators:!0,defaultActiveIndex:0,interval:5e3,keyboard:!0,pause:"hover",wrap:!0,touch:!0,prevIcon:r.createElement("span",{"aria-hidden":"true",className:"carousel-control-prev-icon"}),prevLabel:"Previous",nextIcon:r.createElement("span",{"aria-hidden":"true",className:"carousel-control-next-icon"}),nextLabel:"Next"};function H(e,t){var n=(0,N.Ch)(e,{activeIndex:"onSelect"}),a=n.as,i=void 0===a?"div":a,o=n.bsPrefix,c=n.slide,l=n.fade,s=n.controls,u=n.indicators,g=n.activeIndex,p=n.onSelect,E=n.onSlide,b=n.onSlid,x=n.interval,k=n.keyboard,C=n.onKeyDown,T=n.pause,O=n.onMouseOver,R=n.onMouseOut,A=n.wrap,L=n.touch,q=n.onTouchStart,H=n.onTouchMove,U=n.onTouchEnd,V=n.prevIcon,K=n.prevLabel,j=n.nextIcon,B=n.nextLabel,F=n.className,W=n.children,X=(0,m.Z)(n,P),G=(0,S.vE)(o,"carousel"),J=(0,r.useRef)(null),z=(0,r.useState)("next"),Q=z[0],Y=z[1],$=(0,r.useState)(!1),ee=$[0],te=$[1],ne=(0,r.useState)(!1),re=ne[0],ae=ne[1],ie=(0,r.useState)(g||0),oe=ie[0],ce=ie[1];re||g===oe||(J.current?Y(J.current):Y((g||0)>oe?"next":"prev"),c&&ae(!0),ce(g||0)),(0,r.useEffect)((function(){J.current&&(J.current=null)}));var le,se=0;!function(e,t){var n=0;r.Children.forEach(e,(function(e){r.isValidElement(e)&&t(e,n++)}))}(W,(function(e,t){++se,t===g&&(le=e.props.interval)}));var ue=(0,h.Z)(le),de=(0,r.useCallback)((function(e){if(!re){var t=oe-1;if(t<0){if(!A)return;t=se-1}J.current="prev",p&&p(t,e)}}),[re,oe,p,A,se]),me=(0,f.Z)((function(e){if(!re){var t=oe+1;if(t>=se){if(!A)return;t=0}J.current="next",p&&p(t,e)}})),fe=(0,r.useRef)();(0,r.useImperativeHandle)(t,(function(){return{element:fe.current,prev:de,next:me}}));var ve=(0,f.Z)((function(){!document.hidden&&function(e){if(!(e&&e.style&&e.parentNode&&e.parentNode.style))return!1;var t=getComputedStyle(e);return"none"!==t.display&&"hidden"!==t.visibility&&"none"!==getComputedStyle(e.parentNode).display}(fe.current)&&me()})),he="next"===Q?"left":"right";v((function(){c||(E&&E(oe,he),b&&b(oe,he))}),[oe]);var ge=G+"-item-"+Q,pe=G+"-item-"+he,Ee=(0,r.useCallback)((function(e){(0,D.Z)(e),E&&E(oe,he)}),[E,oe,he]),be=(0,r.useCallback)((function(){ae(!1),b&&b(oe,he)}),[b,oe,he]),ye=(0,r.useCallback)((function(e){if(k&&!/input|textarea/i.test(e.target.tagName))switch(e.key){case"ArrowLeft":return e.preventDefault(),void de(e);case"ArrowRight":return e.preventDefault(),void me(e)}C&&C(e)}),[k,C,de,me]),xe=(0,r.useCallback)((function(e){"hover"===T&&te(!0),O&&O(e)}),[T,O]),Ie=(0,r.useCallback)((function(e){te(!1),R&&R(e)}),[R]),we=(0,r.useRef)(0),ke=(0,r.useRef)(0),Ce=y(),Ne=(0,r.useCallback)((function(e){we.current=e.touches[0].clientX,ke.current=0,"hover"===T&&te(!0),q&&q(e)}),[T,q]),Te=(0,r.useCallback)((function(e){e.touches&&e.touches.length>1?ke.current=0:ke.current=e.touches[0].clientX-we.current,H&&H(e)}),[H]),Se=(0,r.useCallback)((function(e){if(L){var t=ke.current;Math.abs(t)>40&&(t>0?de(e):me(e))}"hover"===T&&Ce.set((function(){te(!1)}),x||void 0),U&&U(e)}),[L,T,de,me,Ce,x,U]),Oe=null!=x&&!ee&&!re,Re=(0,r.useRef)();(0,r.useEffect)((function(){var e,t;if(Oe)return Re.current=window.setInterval(document.visibilityState?ve:me,null!=(e=null!=(t=ue.current)?t:x)?e:void 0),function(){null!==Re.current&&clearInterval(Re.current)}}),[Oe,me,ue,x,ve]);var Ae=(0,r.useMemo)((function(){return u&&Array.from({length:se},(function(e,t){return function(e){p&&p(t,e)}}))}),[u,se,p]);return r.createElement(i,(0,d.Z)({ref:fe},X,{onKeyDown:ye,onMouseOver:xe,onMouseOut:Ie,onTouchStart:Ne,onTouchMove:Te,onTouchEnd:Se,className:I()(F,G,c&&"slide",l&&G+"-fade")}),u&&r.createElement("ol",{className:G+"-indicators"},Z(W,(function(e,t){return r.createElement("li",{key:t,className:t===oe?"active":void 0,onClick:Ae?Ae[t]:void 0})}))),r.createElement("div",{className:G+"-inner"},Z(W,(function(e,t){var n=t===oe;return c?r.createElement(w.ZP,{in:n,onEnter:n?Ee:void 0,onEntered:n?be:void 0,addEndListener:_.Z},(function(t){return r.cloneElement(e,{className:I()(e.props.className,n&&"entered"!==t&&ge,("entered"===t||"exiting"===t)&&"active",("entering"===t||"exiting"===t)&&pe)})})):r.cloneElement(e,{className:I()(e.props.className,n&&"active")})}))),s&&r.createElement(r.Fragment,null,(A||0!==g)&&r.createElement(M.Z,{className:G+"-control-prev",onClick:de},V,K&&r.createElement("span",{className:"sr-only"},K)),(A||g!==se-1)&&r.createElement(M.Z,{className:G+"-control-next",onClick:me},j,B&&r.createElement("span",{className:"sr-only"},B))))}var U=r.forwardRef(H);U.displayName="Carousel",U.propTypes=L,U.defaultProps=q,U.Caption=T,U.Item=A;var V=U;function K(e){return r.createElement("div",{className:"item-div"},r.createElement("img",{src:e.background_img,alt:"background image",className:"background_img"}),r.createElement("div",{className:"information"},r.createElement("h3",null,e.slide_title),r.createElement("p",null,e.slide_description)))}var j=n(2525);function B(e){var t=[];for(var n in e.items)console.log(e.items[n]),t.push(r.createElement(V.Item,null,r.createElement(K,{background_img:e.items[n].background_img,slide_title:e.items[n].title,slide_description:e.items[n].description})));return r.createElement(j.E.div,{x:"-100%",animate:{x:0},transition:{duration:.5}},r.createElement(V,{className:"carousel"},t))}var F=n(6478),W=n.p+"static/slide1-f7059bf1c9f098c23d85f39a2c8e1561.jpeg",X=n.p+"static/slide2-9588a185858e17adc3c7cca6a9c76109.jpeg",G=n.p+"static/caesar2-2d9ac74b1b7c810a320808edf4743bba.png",J=n(5414),z=n(7804),Q=function(){return r.createElement("body",null,r.createElement(J.q,{title:"IoT@Illinois",meta:[{name:"description",content:"The official website for The Illinois Center for Internet of Things."},{name:"keywords",content:"Illinois IoT"}],link:[{rel:"shortcut icon",type:"image/png",href:""+z.Z}]}),r.createElement(a.Z,null),r.createElement("div",{className:"flex-parent",style:{display:"flex",flexDirection:"column",alignItems:"center",width:"100vw",padding:"0vw 10vw"}},r.createElement(i.yV,{hero_img:o}),r.createElement("div",null,r.createElement(l.nv,{heading:"HERE AT ILLINOIS CENTER FOR IOT",subheading:"We are the IoT research lab at University of Illinois",paragraphs:["At The Illinois Center For IoT, we are passionate about the technology of tomorrow. Our research and outreach efforts are focused on fundamentally accelerating the development of this Internet of Things. Our mission is to build platforms with strong and rigorous guarantees, with high performance and service quality, that are practically useful and remain resilient in the face of adversaries and unreliable conditions, and that serve to meet societal and ethical principles while advancing equality and viability of our society.","Our two main focuses are research and outreach. Our experts in systems, networking, artificial intelligence, and data sciences coming together are developing algorithms, platforms, and methodologies that provide new ways to collect and digest data at scale, leveraging artificially intelligent network and device infrastructures. We also routinely provide educational opportunities to our local community of Urbana-Champaign and to K-12 students around the world."]}),r.createElement(s.q,{items:[{name:"Current Research",href:"/research"},{name:"Outreach Events",href:"/outreach"}]})),r.createElement(B,{items:[{background_img:W,title:"MISSION",description:"At Illinois, we are developing foundational technologies to fundamentally accelerate the development of this Internet of Things. Our experts in systems, networking, artificial intelligence, and data sciences coming together are developing algorithms, platforms, and methodologies that provide new ways to collect and digest data at scale, leveraging artificially intelligent network and device infrastructures. Our mission is to build platforms with strong and rigorous guarantees, with high performance and service quality, that are practically useful and remain resilient in the face of adversaries and unreliable conditions, and that serve to meet societal and ethical principles while advancing equality and viability of our society."},{background_img:X,title:"IOT MAKERSPACE",description:"TODO"},{background_img:W,title:"RESEARCH",description:"TODO"},{background_img:X,title:"OUTREACH",description:"TODO"}]}),r.createElement("div",null,r.createElement(l.nv,{heading:"CURRENT RESEARCH PROJECTS"}),r.createElement(u.Bl,{items:[{heading:"Autonomy",href:"research/autonomy"},{heading:"IoT Simulation",href:"research/iot-simulation"},{heading:"AI Drone",href:"research/ai-drone"},{heading:"IoT Verification",href:"research/iot-verification"}]})),r.createElement(F.Z,{img_src:G,header:r.createElement("h5",null,"Hi there!"),detail:r.createElement("p",null,"I am a Professor in the Department of Computer Science at UIUC. I am also an Affiliate Professor in the Department of Electrical and Computer Engineering, an Affiliate Research Professor in the Coordinated Science Laboratory, Affiliate Professor in the School of Information Sciences, and a member of the Information Trust Institute. I currently serve as the Vice Chair of ACM SIGCOMM. I previously served as the Chief Science Officer of Veriflow (sold to VMware in 2019). I received my Ph.D. in Computer Science from UC Berkeley."),blue_background:!0})),r.createElement(c.Z,null))}},9441:function(e,t,n){n.d(t,{q:function(){return c}});var r=n(7294),a=n(6594),i=n(2525);function o(e){return r.createElement(a.Z,{variant:"pill",href:e.href,id:"basic-button"},r.createElement("h7",{id:"basic-button-text"},e.name))}function c(e){var t=[];for(var n in e.items)t.push(r.createElement(o,{href:e.items[n].href,name:e.items[n].name}));return r.createElement(i.E.div,{x:"-100%",animate:{x:0},transition:{duration:.5}},r.createElement("div",{className:"button-section"},r.createElement("div",{className:"button-div"},t)))}},9022:function(e,t,n){n.d(t,{Bl:function(){return o},g0:function(){return l}});var r=n(7294),a=n(2525);function i(e){return r.createElement(a.E.div,{animate:{scale:[.9,1]},transition:{duration:.5}},r.createElement("a",{href:e.href},r.createElement("div",{id:"circle",style:e.style},r.createElement("h5",{style:{marginTop:"10px",textAlign:"center",lineHeight:"0.9em",color:"var(--cloud)"}},e.heading))))}function o(e){var t=[];for(var n in e.items)n%2==0?t.push(r.createElement(i,{style:{backgroundColor:"var(--illini-blue)"},href:e.items[n].href,heading:e.items[n].heading,text:e.items[n].text})):t.push(r.createElement(i,{style:{backgroundColor:"var(--illini-orange)"},href:e.items[n].href,heading:e.items[n].heading,text:e.items[n].text}));return r.createElement(a.E.div,{animate:{scale:[.9,1]},transition:{duration:.5}},r.createElement("div",{className:"circle-div"},t))}function c(e){return r.createElement(a.E.div,{animate:{scale:[.9,1]},transition:{duration:.5}},r.createElement("div",{id:"circle",style:e.style},r.createElement("h5",{className:"medium-header",style:{textAlign:"center",color:"var(--darkblue)"}},e.heading),e.text&&r.createElement("p",{className:"paragraph",style:{textAlign:"center",color:"var(--darkblue)"}},e.text)))}function l(e){var t=[];for(var n in e.items)0==n?t.push(r.createElement(c,{style:{backgroundColor:"var(--illini-blue)",color:"var(--cloud)"},heading:e.items[n].heading,text:e.items[n].text})):1==n?t.push(r.createElement(c,{style:{backgroundColor:"var(--cloud-dark)",color:"var(--illini-blue"},heading:e.items[n].heading,text:e.items[n].text})):t.push(r.createElement(c,{style:{backgroundColor:"var(--illini-orange)"},heading:e.items[n].heading,text:e.items[n].text}));return r.createElement(a.E.div,{animate:{scale:[.9,1]},transition:{duration:.5}},r.createElement("div",{className:"circle-div"},t))}},6478:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(7294);n(9441);function a(e){return r.createElement("div",{className:e.blue_background?"lightblue-div":""},r.createElement("div",{className:"tablerow-div"},r.createElement("img",{src:e.img_src,className:"circle-div tablerow-img"}),r.createElement("div",{className:"tablerow-detail"},e.header,e.detail)))}}}]);
//# sourceMappingURL=component---src-pages-index-js-657d19fb8bd5345c30a5.js.map