"use strict";(self.webpackChunkvrc_school=self.webpackChunkvrc_school||[]).push([[2948],{1480:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var t=i(5893),a=i(1151);const s={title:"Animated Animator Parameters (AAP)",sidebar_position:5,slug:"AAPs",last_edited:new Date("2024-03-31T08:54:00.000Z"),contributors:"[Jellejurre](https://jellejurre.dev/), [JustSleightly](https://vrc.sleightly.dev/)"},l="Animated Animator Parameters (AAP) {#29202baa8599482bb4812ef57156a0cd}",r={id:"Other/AAPs",title:"Animated Animator Parameters (AAP)",description:"Contributors: Jellejurre, JustSleightly",source:"@site/docs/Other/AAPs.md",sourceDirName:"Other",slug:"/Other/AAPs",permalink:"/docs/Other/AAPs",draft:!1,unlisted:!1,editUrl:"https://github.com/VRLabs/VRCSchool/tree/main/docs/Other/AAPs.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Animated Animator Parameters (AAP)",sidebar_position:5,slug:"AAPs",last_edited:"2024-03-31T08:54:00.000Z",contributors:"[Jellejurre](https://jellejurre.dev/), [JustSleightly](https://vrc.sleightly.dev/)"},sidebar:"sideBar",previous:{title:"Advanced Blend Tree Techniques",permalink:"/docs/Other/Advanced-BlendTrees"},next:{title:"Designing Scale-Friendly Systems",permalink:"/docs/Other/Scale-Friendly"}},o={},c=[{value:"What is an AAP?",id:"f715f5bee65e4b8585ee85496e3f5bda",level:2},{value:"How to make an AAP",id:"f1083e72cb064e90be5ccef09746889a",level:2},{value:"How to save an AAP",id:"4ef7702be77c4f8d86251862d6e0cc3b",level:2},{value:"Animation Clip Motion Time",id:"6a109e7b82ec4c4f907362e28c4c3dae",level:3},{value:"Direct Blend Tree",id:"9730068c176e46029b8142d99210456f",level:3},{value:"1D Blend Tree",id:"522ecf59f2234b8ba7c09f458f328b61",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.a)(),...e.components},{GreyItalicText:s,RightAlignedText:l}=n;return s||m("GreyItalicText",!0),l||m("RightAlignedText",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["Contributors: ",(0,t.jsx)(n.a,{href:"https://jellejurre.dev/",children:"Jellejurre"}),", ",(0,t.jsx)(n.a,{href:"https://vrc.sleightly.dev/",children:"JustSleightly"})]}),"\n",(0,t.jsx)(n.h1,{id:"29202baa8599482bb4812ef57156a0cd",children:"Animated Animator Parameters (AAP)"}),"\n",(0,t.jsx)(n.h2,{id:"f715f5bee65e4b8585ee85496e3f5bda",children:"What is an AAP?"}),"\n",(0,t.jsxs)(n.p,{children:["Animated Animator Parameters (AAPs) are Animator Controller Float Parameters that can be modified by animation clips in that same Animator Controller. This allows logic that isn\u2019t possible without them. This article will go in depth on how to make and save AAPs, while their advanced uses will be explored more in the ",(0,t.jsx)(n.a,{href:"/docs/Other/Advanced-BlendTrees",children:"Advanced Blend Tree Techniques"})," page."]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"f1083e72cb064e90be5ccef09746889a",children:"How to make an AAP"}),"\n",(0,t.jsxs)("div",{class:"notion-row",children:[(0,t.jsxs)("div",{class:"notion-column",style:{width:"calc((100% - (min(32px, 4vw) * 1)) * 0.5)"},children:[(0,t.jsx)(n.p,{children:"To make an Animated Animator Parameter:"}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Create a Float parameter in the Animator Controller you want to make the AAP in"}),"\n",(0,t.jsx)(n.li,{children:"Create an Animation Clip and put it in the Animator Controller"}),"\n",(0,t.jsx)(n.li,{children:"Place the Animator Controller in the Animator of a GameObject so the Animation Clip becomes editable"}),"\n",(0,t.jsxs)(n.li,{children:["Select your GameObject so you can edit the animation, then click ",(0,t.jsx)(n.code,{children:"Add Property"})," \u2192 ",(0,t.jsx)(n.code,{children:"Animator"})," \u2192 ",(0,t.jsx)(n.code,{children:"[Name OF Your AAP]"})," in the animation window"]}),"\n"]})]}),(0,t.jsx)("div",{className:"notion-spacer"}),(0,t.jsx)("div",{class:"notion-column",style:{width:"calc((100% - (min(32px, 4vw) * 1)) * 0.5)"},children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.img,{alt:"How to add an AAP for the Example AAP Float to the ExampleAAPAnimation clip",src:i(3e3).Z+"",width:"637",height:"151"}),(0,t.jsx)("br",{}),(0,t.jsx)(s,{children:"How to add an AAP for the Example AAP Float to the ExampleAAPAnimation clip"})]})}),(0,t.jsx)("div",{className:"notion-spacer"})]}),"\n",(0,t.jsxs)("div",{class:"notion-row",children:[(0,t.jsx)("div",{class:"notion-column",style:{width:"calc((100% - (min(32px, 4vw) * 1)) * 0.5)"},children:(0,t.jsxs)(n.p,{children:["From here on, it behaves just like any other animated property, ",(0,t.jsx)(n.strong,{children:"except"})," for that it always reverts back to the default value when not animated, and you\u2019re not able to change the value by hand as long as an AAP animation exists in the controller."]})}),(0,t.jsx)("div",{className:"notion-spacer"}),(0,t.jsx)("div",{class:"notion-column",style:{width:"calc((100% - (min(32px, 4vw) * 1)) * 0.5)"},children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.img,{alt:"In play mode, AAPs are greyed out and can\u2019t be changed except for being animated, and therefore won\u2019t be affected by PhysBones, Contact Receivers, or your Expressions Menus.",src:i(2091).Z+"",width:"509",height:"29"}),(0,t.jsx)("br",{}),(0,t.jsx)(s,{children:"In play mode, AAPs are greyed out and can\u2019t be changed except for being animated, and therefore won\u2019t be affected by PhysBones, Contact Receivers, or your Expressions Menus."})]})}),(0,t.jsx)("div",{className:"notion-spacer"})]}),"\n",(0,t.jsx)(n.p,{children:"There are some problems with AAPs:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"AAPs only animate the value of the parameter value of the controller they are on, and do not affect other Animator Controllers such as other playable layer controllers"}),"\n",(0,t.jsx)(n.li,{children:"AAPs are only affected by animations and cannot be set by Parameter Drivers"}),"\n",(0,t.jsxs)(n.li,{children:["Parameter Drivers cannot copy values from AAPs","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"If you want to copy their value to sync over the network, you will need to animate the distance between a Contact Sender and a Contact Receiver using the AAP and read out that value"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"4ef7702be77c4f8d86251862d6e0cc3b",children:"How to save an AAP"}),"\n",(0,t.jsx)(n.p,{children:"AAPs get reset to their default value when not actively animated."}),"\n",(0,t.jsx)(n.p,{children:"However, there are multiple ways to save an AAP after leaving the animating state, which are outlined below:"}),"\n",(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsx)(n.p,{children:"These layers have to be put above the other layers animating the AAP, otherwise it will overwrite the animations changing it"})}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"By using an animation which animates a different AAP, these methods can be used to copy AAPs too"})}),"\n",(0,t.jsx)(n.h3,{id:"6a109e7b82ec4c4f907362e28c4c3dae",children:"Animation Clip Motion Time"}),"\n",(0,t.jsxs)("div",{class:"notion-row",children:[(0,t.jsxs)("div",{class:"notion-column",style:{width:"calc((100% - (min(32px, 4vw) * 1)) * 1)"},children:[(0,t.jsxs)(n.p,{children:["Since AAPs are floats, they can be used as Motion Time parameters. Make an animation that sets an AAP from 0 to 1 over time, and set both tangents to ",(0,t.jsx)(n.code,{children:"Linear"}),". By having a layer containing a single state with this animation clip, with the motion time set to the AAP\u2019s float, the AAP will be re-animated every frame and saved."]}),(0,t.jsx)(n.p,{children:"For example, if the parameter value is 0.5, it will play the middle of the animation clip setting the value to 0.5, reinforcing the parameter by continually animating the AAP."})]}),(0,t.jsx)("div",{className:"notion-spacer"}),(0,t.jsx)("div",{class:"notion-column",style:{width:"calc((100% - (min(32px, 4vw) * 1)) * 0.9375)"},children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.img,{alt:"An example of saving an AAP using a Motion Time animation clip",src:i(3488).Z+"",width:"2052",height:"552"}),(0,t.jsx)("br",{}),(0,t.jsx)(s,{children:"An example of saving an AAP using a Motion Time animation clip"})]})}),(0,t.jsx)("div",{className:"notion-spacer"})]}),"\n",(0,t.jsxs)("div",{class:"notion-row",children:[(0,t.jsxs)("div",{class:"notion-column",style:{width:"calc((100% - (min(32px, 4vw) * 1)) * 0.5)"},children:[(0,t.jsx)(n.p,{children:"Pros:"}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Doesn\u2019t rely on default value"}),"\n",(0,t.jsx)(n.li,{children:"Precise"}),"\n"]})]}),(0,t.jsx)("div",{className:"notion-spacer"}),(0,t.jsxs)("div",{class:"notion-column",style:{width:"calc((100% - (min(32px, 4vw) * 1)) * 0.5)"},children:[(0,t.jsx)(n.p,{children:"Cons:"}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Only works on values between 0 and 1"}),"\n",(0,t.jsx)(n.li,{children:"Needs its own layer"}),"\n"]})]}),(0,t.jsx)("div",{className:"notion-spacer"})]}),"\n",(0,t.jsx)(n.h3,{id:"9730068c176e46029b8142d99210456f",children:"Direct Blend Tree"}),"\n",(0,t.jsxs)("div",{class:"notion-row",children:[(0,t.jsxs)("div",{class:"notion-column",style:{width:"calc((100% - (min(32px, 4vw) * 1)) * 1.0625)"},children:[(0,t.jsx)(n.p,{children:"Since AAPs are floats, they can be used as blend parameters in Blend Trees. Add the AAP to a Direct Blend Tree as a Blend Parameter animating an animation clip that sets its own AAP value to 1. The AAP needs to have a value of 0 by default, otherwise the animating won\u2019t work for values below 1."}),(0,t.jsx)(n.p,{children:"For example, if the parameter value is 2, it will play the animation clip that sets the AAP to 1, with a weight of 2. The result is a multiple of the value and the weight, with a final value of 2, reinforcing the parameter by continually animating the AAP."}),(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsx)(n.p,{children:"As this uses Direct Blend Trees, don\u2019t forget to make the state Write Defaults enabled, and mark the state with (WD ON) in the name."})})]}),(0,t.jsx)("div",{className:"notion-spacer"}),(0,t.jsx)("div",{class:"notion-column",style:{width:"calc((100% - (min(32px, 4vw) * 1)) * 0.9375)"},children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.img,{alt:"An example of saving an AAP using a Direct Blend Tree",src:i(3641).Z+"",width:"2055",height:"526"}),(0,t.jsx)("br",{}),(0,t.jsx)(s,{children:"An example of saving an AAP using a Direct Blend Tree"})]})}),(0,t.jsx)("div",{className:"notion-spacer"})]}),"\n",(0,t.jsxs)("div",{class:"notion-row",children:[(0,t.jsxs)("div",{class:"notion-column",style:{width:"calc((100% - (min(32px, 4vw) * 1)) * 0.5)"},children:[(0,t.jsx)(n.p,{children:"Pros:"}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Precise"}),"\n",(0,t.jsx)(n.li,{children:"Works for values above 1"}),"\n",(0,t.jsx)(n.li,{children:"Can be put in a big DBT"}),"\n"]})]}),(0,t.jsx)("div",{className:"notion-spacer"}),(0,t.jsxs)("div",{class:"notion-column",style:{width:"calc((100% - (min(32px, 4vw) * 1)) * 0.5)"},children:[(0,t.jsx)(n.p,{children:"Cons:"}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Doesn\u2019t work for negative values"}),"\n",(0,t.jsx)(n.li,{children:"Relies on default value"}),"\n"]})]}),(0,t.jsx)("div",{className:"notion-spacer"})]}),"\n",(0,t.jsx)(n.h3,{id:"522ecf59f2234b8ba7c09f458f328b61",children:"1D Blend Tree"}),"\n",(0,t.jsxs)("div",{class:"notion-row",children:[(0,t.jsxs)("div",{class:"notion-column",style:{width:"calc((100% - (min(32px, 4vw) * 1)) * 1)"},children:[(0,t.jsx)(n.p,{children:"Make two animation clips, one setting the AAP to (for example) -100, and the other setting it to 100. Then, make a 1D Blend Tree with these animations at the thresholds -100 and 100 using the AAP as the parameter."}),(0,t.jsx)(n.p,{children:"These values decide the range your AAP will work at; the bigger the range the smaller the accuracy. You can have about 7 digits of accuracy total. If your range is -1000 to 1000, you have an accuracy of approximately 0.001."}),(0,t.jsx)(n.p,{children:"In the example on the right, if the parameter value is 0, it will play the average of both animations, resulting in a value of 0."})]}),(0,t.jsx)("div",{className:"notion-spacer"}),(0,t.jsx)("div",{class:"notion-column",style:{width:"calc((100% - (min(32px, 4vw) * 1)) * 1)"},children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.img,{alt:"An example of saving an AAP using a 1D Blend Tree",src:i(3117).Z+"",width:"2058",height:"547"}),(0,t.jsx)("br",{}),(0,t.jsx)(s,{children:"An example of saving an AAP using a 1D Blend Tree"})]})}),(0,t.jsx)("div",{className:"notion-spacer"})]}),"\n",(0,t.jsxs)("div",{class:"notion-row",children:[(0,t.jsxs)("div",{class:"notion-column",style:{width:"calc((100% - (min(32px, 4vw) * 1)) * 0.5)"},children:[(0,t.jsx)(n.p,{children:"Pros:"}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Works for any value, even ranges not centered around 0"}),"\n",(0,t.jsx)(n.li,{children:"Can be put in a big DBT (as a child)"}),"\n",(0,t.jsx)(n.li,{children:"Doesn\u2019t rely on default value"}),"\n"]})]}),(0,t.jsx)("div",{className:"notion-spacer"}),(0,t.jsxs)("div",{class:"notion-column",style:{width:"calc((100% - (min(32px, 4vw) * 1)) * 0.5)"},children:[(0,t.jsx)(n.p,{children:"Cons:"}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Limited accuracy"}),"\n"]})]}),(0,t.jsx)("div",{className:"notion-spacer"})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(l,{children:"Last Updated: 31 March 2024 08:54:00"})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}function m(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},3e3:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/1763506886-63deafe9f2c085677e2cf112e73b0d5b.png"},3488:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/1968578658-2de70b0dd14706c48983d037df61a157.png"},3641:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/1978833943-d00ea914774176edabbe34da1f10ca95.png"},3117:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/394012831-160e943827f475ca964c729d6204bc62.png"},2091:(e,n,i)=>{i.d(n,{Z:()=>t});const t="data:image/png;base64,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"},1151:(e,n,i)=>{i.d(n,{Z:()=>r,a:()=>l});var t=i(7294);const a={},s=t.createContext(a);function l(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);