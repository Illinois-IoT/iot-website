"use strict";(self.webpackChunkiot_website=self.webpackChunkiot_website||[]).push([[236],{7418:function(e,t,i){var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,i=1,r=arguments.length;i<r;i++)for(var n in t=arguments[i])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},r.apply(this,arguments)},n=this&&this.__createBinding||(Object.create?function(e,t,i,r){void 0===r&&(r=i),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[i]}})}:function(e,t,i,r){void 0===r&&(r=i),e[r]=t[i]}),a=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),l=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)"default"!==i&&Object.hasOwnProperty.call(e,i)&&n(t,e,i);return a(t,e),t};Object.defineProperty(t,"__esModule",{value:!0});var c=l(i(7294)),o=i(7294),s=function(e){var t=e.cardStyles,i=t.back,n=t.front,a=e.cardZIndex,l=e.containerStyle,s=e.containerClassName,d=e.flipDirection,u=e.flipSpeedFrontToBack,m=e.flipSpeedBackToFront,f=e.infinite,p=o.useState(e.isFlipped),h=p[0],g=p[1],v=o.useState(0),y=v[0],b=v[1];o.useEffect((function(){e.isFlipped!==h&&(g(e.isFlipped),b((function(e){return e+180})))}),[e.isFlipped]);var E=o.useMemo((function(){var e="react-card-flip";return s&&(e+=" "+s),e}),[s]),k=function(t){if(2!==e.children.length)throw new Error("Component ReactCardFlip requires 2 children to function");return e.children[t]},x="rotateY("+(f?y:h?180:0)+"deg)",S="rotateX("+(f?y:h?180:0)+"deg)",w={back:r({WebkitBackfaceVisibility:"hidden",backfaceVisibility:"hidden",height:"100%",left:"0",position:h?"relative":"absolute",top:"0",transform:"horizontal"===d?"rotateY("+(f?y+180:h?0:-180)+"deg)":"rotateX("+(f?y+180:h?0:-180)+"deg)",transformStyle:"preserve-3d",transition:u+"s",width:"100%"},i),container:{perspective:"1000px",zIndex:""+a},flipper:{height:"100%",position:"relative",width:"100%"},front:r({WebkitBackfaceVisibility:"hidden",backfaceVisibility:"hidden",height:"100%",left:"0",position:h?"absolute":"relative",top:"0",transform:"horizontal"===d?x:S,transformStyle:"preserve-3d",transition:m+"s",width:"100%",zIndex:"2"},n)};return c.createElement("div",{className:E,style:r(r({},w.container),l)},c.createElement("div",{className:"react-card-flipper",style:w.flipper},c.createElement("div",{className:"react-card-front",style:w.front},k(0)),c.createElement("div",{className:"react-card-back",style:w.back},k(1))))};s.defaultProps={cardStyles:{back:{},front:{}},cardZIndex:"auto",containerStyle:{},flipDirection:"horizontal",flipSpeedBackToFront:.6,flipSpeedFrontToBack:.6,infinite:!1,isFlipped:!1},t.default=s},7372:function(e,t,i){i.r(t),i.d(t,{default:function(){return b}});var r=i(7294),n=i(9547),a=i(7546),l=i(3360),c=i(1981),o=i(7418),s=i.n(o),d=i(2525);function u(e){var t=[];for(var i in e.items)t.push(r.createElement(m,{primary:e.items[i].primary,secondary:e.items[i].secondary,img:e.items[i].img}));return r.createElement("div",{className:"cards-div"},t)}function m(e){var t=(0,r.useState)(!1),i=t[0],n=t[1];return r.createElement(d.E.div,{animate:{scale:[.9,1]},transition:{duration:.5}},r.createElement(s(),{isFlipped:i,flipDirection:"horizontal",flipSpeedFrontToBack:.5,flipSpeedBackToFront:.5},r.createElement("div",{id:"flip-card",onMouseEnter:function(){return n(!0)}},r.createElement("img",{src:e.img,id:"flip-background-img"}),r.createElement("h1",{className:"flip-item-text",style:{fontSize:"50px",color:"white"}},e.primary)),r.createElement("div",{id:"flip-card",onMouseLeave:function(){return n(!1)},style:{backgroundColor:"white"}},r.createElement("img",{src:e.img,id:"flip-background-img"}),r.createElement("h6",{className:"flip-item-text",id:"secondary"},e.secondary))))}var f=i.p+"static/flipcard-65bc79136639f1e88f0b466e682ff56e.jpeg",p=i(5988),h=i(7770),g=i(9022),v=i(5414),y=i(7804),b=function(){var e=[{primary:"3",secondary:"years old",img:f},{primary:"100+",secondary:"undergraduate students",img:f},{primary:"10",secondary:"graduate/Ph.D. students",img:f},{primary:"4",secondary:"current projects",img:f},{primary:"18",secondary:"past projects",img:f}];return r.createElement("body",null,r.createElement(v.q,{title:"IoT@Illinois - Research Overview",meta:[{name:"description",content:"The official website for The Illinois Center for Internet of Things."},{name:"keywords",content:"Illinois IoT"}],link:[{rel:"shortcut icon",type:"image/png",href:""+y.Z}]}),r.createElement(n.Z,null),r.createElement("div",{className:"flex-parent",style:{display:"flex",flexDirection:"column",alignItems:"center",width:"100vw",padding:"0vw 10vw"}},r.createElement(a.cq,{texture_img:c.Z,hero_img:l.Z,title:"Research",subtitle:"Learn more about all current and past projects"}),r.createElement(h.n,{heading:"ABOUT OUR RESEARCH",subheading:"Some statistics about research at Illinois Center for IoT"}),r.createElement(u,{items:e}),r.createElement("div",{className:"lightblue-div"},r.createElement(h.n,{heading:"CURRENT RESEARCH PROJECTS"}),r.createElement(g.Bl,{items:[{heading:"Autonomy",href:"autonomy"},{heading:"IoT Simulation",href:"iot-simulation"},{heading:"AI Drone",href:"ai-drone"},{heading:"IoT Verification",href:"iot-verification"}]}))),r.createElement(p.Z,null))}},9022:function(e,t,i){i.d(t,{Bl:function(){return l},g0:function(){return o}});var r=i(7294),n=i(2525);function a(e){return r.createElement(n.E.div,{animate:{scale:[.9,1]},transition:{duration:.5}},r.createElement("a",{href:e.href},r.createElement("div",{id:"circle",style:e.style},r.createElement("h5",{style:{marginTop:"10px",textAlign:"center",lineHeight:"0.9em",color:"var(--cloud)"}},e.heading))))}function l(e){var t=[];for(var i in e.items)i%2==0?t.push(r.createElement(a,{style:{backgroundColor:"var(--illini-blue)"},href:e.items[i].href,heading:e.items[i].heading,text:e.items[i].text})):t.push(r.createElement(a,{style:{backgroundColor:"var(--illini-orange)"},href:e.items[i].href,heading:e.items[i].heading,text:e.items[i].text}));return r.createElement(n.E.div,{animate:{scale:[.9,1]},transition:{duration:.5}},r.createElement("div",{className:"circle-div"},t))}function c(e){return r.createElement(n.E.div,{animate:{scale:[.9,1]},transition:{duration:.5}},r.createElement("div",{id:"circle",style:e.style},r.createElement("h5",{className:"medium-header",style:{textAlign:"center",color:"var(--darkblue)"}},e.heading),e.text&&r.createElement("p",{className:"paragraph",style:{textAlign:"center",color:"var(--darkblue)"}},e.text)))}function o(e){var t=[];for(var i in e.items)0==i?t.push(r.createElement(c,{style:{backgroundColor:"var(--illini-blue)",color:"var(--cloud)"},heading:e.items[i].heading,text:e.items[i].text})):1==i?t.push(r.createElement(c,{style:{backgroundColor:"var(--cloud-dark)",color:"var(--illini-blue"},heading:e.items[i].heading,text:e.items[i].text})):t.push(r.createElement(c,{style:{backgroundColor:"var(--illini-orange)"},heading:e.items[i].heading,text:e.items[i].text}));return r.createElement(n.E.div,{animate:{scale:[.9,1]},transition:{duration:.5}},r.createElement("div",{className:"circle-div"},t))}},3360:function(e,t,i){t.Z=i.p+"static/hero2-9e8c4ca45b04457e008fbb66a91a893e.jpeg"},1981:function(e,t,i){t.Z=i.p+"static/texture-1c89b03b9d49eff824388baab1ecffff.jpeg"}}]);
//# sourceMappingURL=component---src-pages-research-js-8e11d49392678e9b11d0.js.map