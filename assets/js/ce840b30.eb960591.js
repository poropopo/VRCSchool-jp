"use strict";(self.webpackChunkvrc_school=self.webpackChunkvrc_school||[]).push([[5149],{5984:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>r,toc:()=>h});var a=n(5893),s=n(1151);const i={title:"Hand Gestures/Facial Expressions",sidebar_position:6,slug:"Gestures",last_edited:new Date("2024-03-31T08:54:00.000Z"),contributors:"[Jellejurre](https://jellejurre.dev/), [JustSleightly](https://vrc.sleightly.dev/)"},o="Hand Gestures/Facial Expressions {#5783634f5f91468f8409b1206010953c}",r={id:"Avatars/Gestures",title:"Hand Gestures/Facial Expressions",description:"Contributors: Jellejurre, JustSleightly",source:"@site/docs/Avatars/Gestures.md",sourceDirName:"Avatars",slug:"/Avatars/Gestures",permalink:"/docs/Avatars/Gestures",draft:!1,unlisted:!1,editUrl:"https://github.com/VRLabs/VRCSchool/tree/main/docs/Avatars/Gestures.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Hand Gestures/Facial Expressions",sidebar_position:6,slug:"Gestures",last_edited:"2024-03-31T08:54:00.000Z",contributors:"[Jellejurre](https://jellejurre.dev/), [JustSleightly](https://vrc.sleightly.dev/)"},sidebar:"sideBar",previous:{title:"Expressions Menu and Parameters",permalink:"/docs/Avatars/Expressions-Menu-Params"},next:{title:"Toggles",permalink:"/docs/Avatars/Toggles"}},l={},h=[{value:"Hand Gestures",id:"fed71700785b413eb7339bfbc4685022",level:2},{value:"Facial Expressions",id:"9c999dd0c6074612aeb58eb63d003d73",level:2},{value:"Animating Facial Expressions with WD Off",id:"fe3179c3c7364871bbb1e61a3d426224",level:3}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",p:"p",ul:"ul",...(0,s.a)(),...e.components},{GreyItalicText:i,RightAlignedText:o}=t;return i||u("GreyItalicText",!0),o||u("RightAlignedText",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:["Contributors: ",(0,a.jsx)(t.a,{href:"https://jellejurre.dev/",children:"Jellejurre"}),", ",(0,a.jsx)(t.a,{href:"https://vrc.sleightly.dev/",children:"JustSleightly"})]}),"\n",(0,a.jsx)(t.h1,{id:"5783634f5f91468f8409b1206010953c",children:"Hand Gestures/Facial Expressions"}),"\n",(0,a.jsx)(t.h2,{id:"fed71700785b413eb7339bfbc4685022",children:"Hand Gestures"}),"\n",(0,a.jsxs)("div",{class:"notion-row",children:[(0,a.jsxs)("div",{class:"notion-column",style:{width:"calc((100% - (min(32px, 4vw) * 1)) * 0.5)"},children:[(0,a.jsxs)(t.p,{children:["Hand Gestures are done on your average avatar by animating the humanoid bones on the Gesture Playable Layer. Generally, it is done by copying (",(0,a.jsx)(t.code,{children:"Ctrl+D"}),") the vrc_AvatarV3HandsLayer (or vrc_AvatarV3HandsLayer2) controller from the samples, and editing it by putting the desired animations in the right slots."]}),(0,a.jsx)(t.p,{children:"The difference between the two sample controllers is that they have slightly different idle animations."}),(0,a.jsx)(t.admonition,{type:"note",children:(0,a.jsx)(t.p,{children:"These Animator Controllers use Proxy animations. That is, animations that don\u2019t contain the full data in Unity, but get swapped out at runtime with the full ones. So making copies and editing them is futile."})}),(0,a.jsx)(t.p,{children:"If you look at the animations, you\u2019ll see that both hands have animations for both hands, so you would expect both layers to affect both hands, however, that is not the case."}),(0,a.jsxs)(t.p,{children:["This is because of the masks used on the layers. The mask on the top layer applies to the whole animator, and the masks on the other layers apply on a layer by layer basis. More information can be found on the ",(0,a.jsx)(t.a,{href:"/docs/Avatars/Avatar-Masks",children:"Avatar Masks"})," page, but the main point is that the Left Hand layer is only allowed to interact with the left hand humanoid bones, and the Right Hand layer is only allowed to interact with the right hand humanoid bones."]}),(0,a.jsxs)(t.p,{children:["On Index Controllers, the Animation State of the hands is set to Tracking by default, which means that any animation affecting the hand gets overwritten by the tracking of the Index Controllers. If you want animations to control the hands on Index Controllers, you have to set the Tracking Control of Left Fingers or Right Fingers to Animated with a Animator Tracking Control. More information can be found on the ",(0,a.jsx)(t.a,{href:"/docs/Avatars/State-Behaviours",children:"VRC State Behaviours"})," page."]})]}),(0,a.jsx)("div",{className:"notion-spacer"}),(0,a.jsx)("div",{class:"notion-column",style:{width:"calc((100% - (min(32px, 4vw) * 1)) * 0.5)"},children:(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.img,{alt:"The default VRChat Hands layer 1.",src:n(9011).Z+"",width:"1341",height:"764"}),(0,a.jsx)("br",{}),(0,a.jsx)(i,{children:"The default VRChat Hands layer 1."})]})}),(0,a.jsx)("div",{className:"notion-spacer"})]}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"9c999dd0c6074612aeb58eb63d003d73",children:"Facial Expressions"}),"\n",(0,a.jsxs)(t.p,{children:["Many avatar creators copy the Gesture layer, creating ",(0,a.jsx)(t.a,{href:"/docs/Unity-Animations/Animation-Clips",children:"Animation Clips"})," for facial animations, and slot it into the FX layer."]}),"\n",(0,a.jsx)(t.p,{children:"This, however, is sadly not ideal."}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"First of all, the remaining Hands masks can interfere with WD off Transform animations on the FX Layer, and should be removed."}),"\n",(0,a.jsx)(t.li,{children:"Second of all, since both hands control the face, you can have animations merging together. (Say for example you have an animation playing on the Left Hand layer that raises an eyebrow, and another on the Right Hand layer that closes the eyes, then one eye will be both closed and raised, causing weird effects)."}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"There are three fixes for this:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Always animating every blendshape at every animation, so setting unused blendshapes to 0, with the idle animation containing a buffer animation (an animation which animates a non-existing GameObject)"}),"\n",(0,a.jsx)(t.li,{children:"Adding logic to your Animator Controller to let one hand take control over the other (so make it so Right Hand can only get out of Idle when the Left Hand is idle)"}),"\n",(0,a.jsxs)(t.li,{children:["Using a tool like ",(0,a.jsx)(t.a,{href:"https://hai-vr.github.io/combo-gesture-expressions-av3/",children:"Hai\u2019s ComboGestureExpressions"})," to explicitly decide which animations get played with which hand combination"]}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"Note: The first 2 make it so one hand always takes priority over the other, unless it is idle, then the other hand takes over."}),"\n",(0,a.jsx)(t.h3,{id:"fe3179c3c7364871bbb1e61a3d426224",children:"Animating Facial Expressions with WD Off"}),"\n",(0,a.jsxs)("div",{class:"notion-row",children:[(0,a.jsxs)("div",{class:"notion-column",style:{width:"calc((100% - (min(32px, 4vw) * 1)) * 0.5)"},children:[(0,a.jsx)(t.p,{children:"Using WD off, facial expressions can be animated in a few ways, but here are some pointers:"}),(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Have a reset layer which is positioned above the two face layers, and is constantly playing an animation which sets all blendshapes to 0"}),"\n",(0,a.jsx)(t.li,{children:"Have the idle state animate a buffer animation, (an animation which animates a non-existing GameObject)"}),"\n"]}),(0,a.jsx)(t.p,{children:"If you follow these tips, along with one of the solutions in the above paragraph, every blendshape will either:"}),(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Be animated to 0 by the reset layer"}),"\n"]}),(0,a.jsx)(t.p,{children:"OR"}),(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Be animated to the required value by one of the face layers"}),"\n"]})]}),(0,a.jsx)("div",{className:"notion-spacer"}),(0,a.jsx)("div",{class:"notion-column",style:{width:"calc((100% - (min(32px, 4vw) * 1)) * 0.5)"},children:(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.img,{alt:"An example Buffer Animation Clip",src:n(2686).Z+"",width:"735",height:"146"}),(0,a.jsx)("br",{}),(0,a.jsx)(i,{children:"An example Buffer Animation Clip"})]})}),(0,a.jsx)("div",{className:"notion-spacer"})]}),"\n",(0,a.jsxs)(t.p,{children:["Therefore you should never have facial animations getting \u201cstuck\u201d, a.k.a. not resetting back to 0 when they are done playing. This can also be caused by mixed write defaults, since they generally behave like WD off. More information can be found on the ",(0,a.jsx)(t.a,{href:"/docs/Unity-Animations/Write-Defaults",children:"Write Defaults"})," page."]}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(o,{children:"Last Updated: 31 March 2024 08:54:00"})]})}function c(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}function u(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},9011:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Gestures.2f5f8933-7315-4978-85bd-eee6172a84b8-37e3ccd1a2c3945e155de89a576ed678.png"},2686:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Gestures.8b2646ec-a40a-43c7-9d31-087ec3bca853-baa40158a9b491b1705a5bbe23a7b371.png"},1151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>o});var a=n(7294);const s={},i=a.createContext(s);function o(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);