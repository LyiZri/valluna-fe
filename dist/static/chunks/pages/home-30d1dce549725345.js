(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[229],{7183:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/home",function(){return s(8820)}])},2713:function(e,t,s){"use strict";s.d(t,{Z:function(){return Z}});var l,n,a=s(5893),r=s(1953),i=s(7294),o=s(5675),c=s.n(o),d=s(8010),u=s.n(d);let h={logo:{src:"/_next/static/media/logo.38f01520.svg",height:40,width:140},title:"Klick",name:"klick",theme:u().theme},x=h.theme.extend.colors;var g=s(1007);function f(){return(0,a.jsxs)(r.Z,{className:"bg-cardbg",children:[(0,a.jsxs)(r.Z,{className:"px-content py-16 ",children:[(0,a.jsxs)(r.Z,{className:"flex justify-between",children:[(0,a.jsx)(c(),{width:104,height:30,alt:"",src:h.logo}),(0,a.jsx)(r.Z,{className:"flex justify-end",children:[{type:"icon-a-facebook1",url:""},{type:"icon-a-twitter2",url:""},{type:"icon-discord",url:""}].map((e,t)=>(0,a.jsx)(r.Z,{className:"ml-8 w-7 h-7 text-white text-center rounded-full bg-tagbg",children:(0,a.jsx)(g.Z,{className:"text-sm -mt-0.5 leading-7 block",type:e.type},t)},t))})]}),(0,a.jsx)("p",{className:"pt-4",children:"A one stop destination for web3 gaming."})]}),(0,a.jsx)(r.Z,{className:"pb-8 border-t border-black text-center",children:(0,a.jsx)("p",{className:"text-weight-line text-xs pt-4",children:" Copyright \xa9 2022 Klick. Co., Ltd. All Rights Reserved."})})]})}var p=s(7074),b=s(6473),m=s(8661);let j=(0,p.ZP)(e=>(0,a.jsx)(b.Z,{...e,TabIndicatorProps:{children:(0,a.jsx)("span",{className:"MuiTabs-indicatorSpan hover:text-white"})}}))(e=>{let{theme:t}=e;return{color:x["sec-stress"],width:"100%",padding:"0px 50px 0px 50px","& .MuiTabs-indicator":{display:"flex",justifyContent:"center",backgroundColor:"transparent"},"& .MuiTabs-indicatorSpan":{maxWidth:60,width:"100%",backgroundColor:x["yellow-6"]},"& .Mui-selected":{lineHeight:"32px",color:x["yellow-6"]+" !important"}}}),w=(0,p.ZP)(e=>(0,a.jsx)(m.Z,{disableRipple:!0,...e}))(e=>{let{theme:t}=e;return{textTransform:"none",width:"33%",color:"rgba(255, 255, 255, 0.7)","&.Mui-selected":{color:"#fff"},"&.Mui-focusVisible":{backgroundColor:"rgba(100, 95, 228, 0.32)"},":hover":{color:"#fff"}}}),y=e=>(0,a.jsx)("input",{type:"text",...e,className:"bg-transparent font-mulish focus-visible:ring-0 focus-visible:outline-none text-white ".concat(e.className)});var v=s(1163);function N(){let[e,t]=(0,i.useState)(0),s=(0,v.useRouter)();(0,i.useEffect)(()=>{console.log(s),(null==s?void 0:s.route)==n.HOME?t(0):(null==s?void 0:s.route)==n.ALL_GAMES?t(1):(null==s?void 0:s.route)==n.ARTICLES&&t(2)},[null==s?void 0:s.route]);let l=(e,t)=>{0==t?s.push(n.HOME):1==t?s.push(n.ALL_GAMES):2==t&&s.push(n.ARTICLES)};return(0,a.jsx)(r.Z,{className:"bg-cardbg",children:(0,a.jsxs)(r.Z,{className:"mx-auto w-content flex justify-between",children:[(0,a.jsx)(r.Z,{className:"mt-3",children:(0,a.jsx)(c(),{width:139,height:40,alt:"",src:h.logo})}),(0,a.jsxs)(j,{value:e,onChange:l,"aria-label":"basic tabs example",children:[(0,a.jsx)(w,{label:"Home",value:0}),(0,a.jsx)(w,{label:"All games",value:1}),(0,a.jsx)(w,{label:"Articles",value:2})]}),(0,a.jsx)(r.Z,{className:"my-2",children:(0,a.jsxs)(r.Z,{className:"bg-cardbg-hover rounded-3xl px-4 flex justify-between",children:[(0,a.jsx)(y,{placeholder:"Search...",className:"h-8"}),(0,a.jsx)(g.Z,{className:"cursor-pointer block leading-8",type:"icon-Navicon_search"})]})})]})})}function Z(e){let{children:t}=e;return(0,a.jsxs)(r.Z,{className:"min-h-screen flex flex-col justify-between bg-pagebg",children:[(0,a.jsx)(N,{}),(0,a.jsx)(r.Z,{className:" w-8/12 mx-auto",children:t}),(0,a.jsx)(f,{})]})}(l=n||(n={})).HOME="/home",l.ALL_GAMES="/all-games",l.ARTICLES="/articles"},1007:function(e,t,s){"use strict";var l=s(4924);let n=(0,l.Z)({scriptUrl:"//at.alicdn.com/t/c/font_3777499_fcgn5rii5k4.js"});t.Z=n},9899:function(e,t,s){"use strict";s.d(t,{W:function(){return a}});var l=s(594);let n=e=>({data:JSON.stringify(e)}),a=async function(e,t){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"post";return console.log(e),(await l.Z[s](e,n(t),{headers:{"Content-Type":"multipart/form-data"}})).data}},8820:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return x}});var l=s(5893),n=s(2713),a=s(9899);let r=async e=>(0,a.W)("/api/homepage/bannerlist",e);var i=s(1953),o=s(7294),c=s(6066),d=s(5675),u=s.n(d);let h=()=>{let[e,t]=(0,o.useState)(),[s,n]=(0,o.useState)(!0),a=async()=>{n(!0);let{data:e}=await r({token:"92fb5f84cbcd1d9aa8a5dcc57e9faf9f"});t(e),n(!1)};return(0,o.useEffect)(()=>{a()},[]),(0,l.jsx)(i.Z,{children:(0,l.jsx)(c.Z,{dots:!0,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,arrows:!1,children:!s&&e.map((e,t)=>(0,l.jsx)(i.Z,{className:"cursor-pointer shadow-inner",children:(0,l.jsx)(u(),{src:e.file,width:1400,height:280,className:"max-w-full max-h-[280px]",alt:""})},t))})})};function x(){return(0,l.jsx)(n.Z,{children:(0,l.jsx)("header",{children:(0,l.jsx)(h,{})})})}},8010:function(e,t,s){"use strict";let l=s(2502);e.exports={purge:["./src/pages/**/*.{js,ts,jsx,tsx}","./src/components/**/*.{js,ts,jsx,tsx}"],darkMode:!1,theme:{extend:{padding:{content:"260px"},colors:{pagebg:"#13141B",cardbg:"#23232F","cardbg-hover":"#393944",tagbg:"#616169",disable:"#424349","weight-line":"rgba(255,255,255,.6)","hover-line":"rgba(255,255,255,.4)","simple-line":"rgba(255,255,255,.2)","light-line":"rgba(255,255,255,.08)",stress:"#fff","sec-stress":"rgba(255,255,255,.6)",second:"rgba(255,255,255,.4)",placeholder:"rgba(255,255,255,.2)","yellow-6":"#F1DC4A","yellow-5":"#EED106","yellow-4":"#9B8213","yellow-3":"rgba(145,130,19,.5)","yellow-2":"rgba(145,130,19,.15)","yellow-hover":"rgba(240,208,64,.05)","pink-6":"#FC476D","pink-5":"#FF557E","pink-4":"#AB1A3D","green-6":"#62CDC9","green-5":"#A7EFEC","green-4":"#A7EFEC","green-3":"#1B9691","green-2":"rgba(98, 205, 201, 0.05)"},width:{content:"66.6%"},fontFamily:{mulish:"Mulish"}}},plugins:[s(4270),l(function(e){let{addUtilities:t}=e;t({".scrollbar-hide":{"-ms-overflow-style":"none","scrollbar-width":"none","&::-webkit-scrollbar":{display:"none"}},".rotate-y-360":{transform:"rotateY(360deg)"}})})],variants:{extend:{}}}}},function(e){e.O(0,[783,594,66,774,888,179],function(){return e(e.s=7183)}),_N_E=e.O()}]);