(this["webpackJsonpmy-contact01-app"]=this["webpackJsonpmy-contact01-app"]||[]).push([[0],{22:function(n,e,t){"use strict";t.r(e);var o,r,i,a,s,c,d,l,b,m,p=t(1),f=t.n(p),h=t(8),j=t.n(h),x=t(2),u=t(3),g=Object(u.a)(o||(o=Object(x.a)(["\n    *,\n    ::after,\n    ::before {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n    body {\n        background-color: #17223B;\n        margin: 0;\n        padding: 0;\n        font-family: \"Space Mono\", monospace;\n        /* font-family: 'Roboto Mono', monospace; */\n    }\n    ul {\n        list-style-type: none;\n    }\n    a {\n    text-decoration: none;\n    }\n"]))),O=u.b.div(r||(r=Object(x.a)(["\n  height: 100vh;\n"]))),y=t(12),w=t(0),v=u.b.div(i||(i=Object(x.a)(["\n  padding: 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  /* transition: all 0.3s linear; */\n  background-color: #fefbf3;\n"]))),k=u.b.div(a||(a=Object(x.a)(["\n  font-size: 1.5rem;\n  padding: 1rem 1.5rem;\n  display: none;\n  flex-direction: column;\n  color: #1597bb;\n  background: transparent;\n  border-color: transparent;\n  transition: all 0.3s linear;\n  cursor: pointer;\n\n  &:hover {\n    color: #1597bb;\n    font-size: 1.5rem;\n    transform: rotate(90deg);\n  }\n  span {\n    height: 2px;\n    width: 25px;\n    background-color: #17223b;\n    margin-bottom: 4px;\n    border-radius: 5px;\n  }\n\n  @media (max-width: 768px) {\n    display: flex;\n  }\n"]))),N=u.b.a(s||(s=Object(x.a)(["\n  padding: 1rem 2rem;\n  cursor: pointer;\n  text-align: center;\n  text-decoration: none;\n  color: #17223b;\n  transition: all 0.5s linear;\n  font-size: 0.8rem;\n\n  &:hover {\n    color: #1597bb;\n    transition: all 0.5s linear;\n  }\n  @media (max-width: 768px) {\n    padding: 0.5rem 0;\n    &:hover {\n      color: #fefbf3;\n      background-color: #1597bb;\n      width: 100%;\n      padding-left: 1.5rem;\n    }\n  }\n"]))),z=u.b.div(c||(c=Object(x.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  position: relative;\n\n  @media (max-width: 768px) {\n    overflow: hidden;\n    flex-direction: column;\n    color: black;\n    width: 100%;\n    max-height: ",";\n    transition: max-height 0.5s linear;\n  }\n"])),(function(n){return n.isOpen?"300px":"0"})),M=u.b.a(d||(d=Object(x.a)(['\n  padding: 1rem 1.5rem;\n  color: #17223b;\n  text-decoration: none;\n  font-weight: bold;\n  font-size: 1.5rem;\n  /* font-family: "Roboto Mono", monospace; */\n  font-family: "Montserrat", sans-serif;\n\n  span {\n    font-weight: 300;\n    font-size: 1.3rem;\n  }\n']))),S=function(){var n=Object(p.useState)(!1),e=Object(y.a)(n,2),t=e[0],o=e[1];return Object(w.jsxs)(v,{children:[Object(w.jsx)(M,{href:"",children:"Gaspar"}),Object(w.jsxs)(k,{onClick:function(){return o(!t)},children:[Object(w.jsx)("span",{}),Object(w.jsx)("span",{}),Object(w.jsx)("span",{})]}),Object(w.jsxs)(z,{isOpen:t,children:[Object(w.jsx)(N,{href:"",children:"Home"}),Object(w.jsx)(N,{href:"",children:"Company"}),Object(w.jsx)(N,{href:"",children:"Solutions"}),Object(w.jsx)(N,{href:"",children:"Contact Us"})]})]})},C=u.b.div(l||(l=Object(x.a)(['\n  display: flex;\n  margin: 7rem 5rem;\n  padding: 0 3rem;\n  gap: 5rem;\n  /* font-family: "Space Mono", monospace; */\n  font-family: "Noto Sans", sans-serif;\n  color: #a6a9b6;\n\n  @media (max-width: 768px) {\n    display: block;\n    margin: 4rem 0;\n    width: 100%;\n    padding: 0 1rem;\n  }\n']))),P=u.b.div(b||(b=Object(x.a)(['\n  width: 50%;\n  h2 {\n    margin-top: 4rem;\n    margin-bottom: 2rem;\n    font-family: "Montserrat", sans-serif;\n    color: #f1f7e7;\n    font-size: 2.5rem;\n  }\n  h4 {\n    text-transform: uppercase;\n    letter-spacing: 0.1rem;\n  }\n  p {\n    width: 90%;\n  }\n  @media (max-width: 768px) {\n    width: 90%;\n    margin: 4rem 0;\n\n    h2 {\n      font-size: 2rem;\n      line-height: 3rem;\n    }\n  }\n']))),T=u.b.div(m||(m=Object(x.a)(['\n  background-color: #fdf6f0;\n  border-radius: 10px;\n  width: 50%;\n  height: auto;\n  padding: 3.5rem 3rem;\n  color: #17223b;\n\n  @media (max-width: 768px) {\n    width: 100%;\n    padding: 2rem 1.5rem;\n    margin: 0 auto;\n  }\n\n  .form-field {\n    padding: 0.5rem 0;\n    font-size: 1.5rem;\n    input {\n      border: 1px solid #9d9d9d;\n      border-radius: 10px;\n      outline: none;\n      background: transparent;\n      height: 50px;\n      padding: 0 15px;\n      width: 100%;\n      font-family: "PT Mono", monospace;\n      color: #17223b;\n      ::placeholder {\n        color: #17223b;\n      }\n    }\n  }\n\n  .textarea {\n    background-color: transparent;\n    border: 1px solid #9d9d9d;\n    border-radius: 10px;\n    width: 100%;\n    outline: none;\n    font-family: "PT Mono", monospace;\n    color: #17223b;\n    padding: 0.8rem 1rem;\n    ::placeholder {\n      color: #17223b;\n    }\n  }\n  .f-button {\n    width: 100%;\n    background-color: #17223b;\n    text-align: center;\n    padding: 1.2rem 2.5rem;\n    color: white;\n    cursor: pointer;\n    border-radius: 10px;\n    display: inline-block;\n    font-size: inherit;\n    text-transform: uppercase;\n    position: relative;\n    transition: all 0.4s ease-in-out;\n    input {\n      font-family: "PT Mono", monospace;\n      background-color: transparent;\n      color: #fdf6f0;\n      border: none;\n      font-size: 0.9rem;\n    }\n    &::after {\n      content: "";\n      position: absolute;\n      width: 0;\n      height: 0.2rem;\n      transition: all 0.4s ease-in-out;\n      left: 0;\n      bottom: 0;\n      opacity: 0.7;\n    }\n    &:hover::after {\n      width: 100%;\n      background-color: var(--white-color);\n    }\n  }\n']))),F=function(){return Object(w.jsxs)(C,{children:[Object(w.jsxs)(P,{children:[Object(w.jsx)("h4",{children:"Contact Us"}),Object(w.jsx)("h2",{children:"Work for yourself, not by yourself, with Gaspar insurance"}),Object(w.jsx)("p",{children:"Send us a message and we'll get your questions answered as soon as possible"})]}),Object(w.jsx)(T,{children:Object(w.jsxs)("form",{className:"form",children:[Object(w.jsx)("div",{className:"form-field",children:Object(w.jsx)("input",{type:"text",id:"name",placeholder:"First Name*"})}),Object(w.jsx)("div",{className:"form-field",children:Object(w.jsx)("input",{type:"text",id:"name",placeholder:"Last Name*"})}),Object(w.jsx)("div",{className:"form-field",children:Object(w.jsx)("input",{type:"email",id:"email",placeholder:"Email Address*"})}),Object(w.jsx)("div",{className:"form-field",children:Object(w.jsx)("input",{type:"number",id:"email",placeholder:"Phone Number*"})}),Object(w.jsx)("div",{className:"form-field",children:Object(w.jsx)("input",{type:"text",id:"subject",placeholder:"Best Time to Contact You?"})}),Object(w.jsx)("div",{className:"form-field",children:Object(w.jsx)("input",{type:"text",id:"subject",placeholder:"What's your preferred method of contact?"})}),Object(w.jsx)("div",{className:"form-field",children:Object(w.jsx)("textarea",{name:"textarea",className:"textarea",id:"textarea",cols:"30",rows:"10",placeholder:"Do you have any additional information?"})}),Object(w.jsx)("div",{className:"f-button",children:Object(w.jsx)("input",{type:"submit",value:"Submit your message"})})]})})]})};var B=function(){return Object(w.jsxs)(O,{children:[Object(w.jsx)(g,{}),Object(w.jsx)(S,{}),Object(w.jsx)(F,{})]})},L=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,23)).then((function(e){var t=e.getCLS,o=e.getFID,r=e.getFCP,i=e.getLCP,a=e.getTTFB;t(n),o(n),r(n),i(n),a(n)}))};j.a.render(Object(w.jsx)(f.a.StrictMode,{children:Object(w.jsx)(B,{})}),document.getElementById("root")),L()}},[[22,1,2]]]);
//# sourceMappingURL=main.a86c40b4.chunk.js.map