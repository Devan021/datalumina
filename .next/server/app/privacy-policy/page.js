(()=>{var e={};e.id=310,e.ids=[310],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},5282:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>n.a,__next_app__:()=>u,originalPathname:()=>h,pages:()=>d,routeModule:()=>x,tree:()=>c});var r=s(7096),i=s(6132),a=s(7284),n=s.n(a),o=s(2564),l={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);s.d(t,l);let c=["",{children:["privacy-policy",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,9077)),"/home/devan/hinge/app/privacy-policy/page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(s.bind(s,5345)),"/home/devan/hinge/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,9291,23)),"next/dist/client/components/not-found-error"]}],d=["/home/devan/hinge/app/privacy-policy/page.tsx"],h="/privacy-policy/page",u={require:s,loadChunk:()=>Promise.resolve()},x=new r.AppPageRouteModule({definition:{kind:i.x.APP_PAGE,page:"/privacy-policy/page",pathname:"/privacy-policy",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},3850:(e,t,s)=>{Promise.resolve().then(s.bind(s,6449))},2911:(e,t,s)=>{Promise.resolve().then(s.bind(s,7948))},3683:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,3579,23)),Promise.resolve().then(s.t.bind(s,619,23)),Promise.resolve().then(s.t.bind(s,1459,23)),Promise.resolve().then(s.t.bind(s,3456,23)),Promise.resolve().then(s.t.bind(s,847,23)),Promise.resolve().then(s.t.bind(s,7303,23))},6449:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>g});var r=s(3854),i=s(4260),a=s.n(i);s(4047);var n=s(4218),o=s(5548),l=s.n(o),c=s(3260),d=s(7857),h=s(1559),u=s(1018);function x(){let[e,t]=(0,n.useState)(!1),{handleNavigation:s}=function(){let e=(0,u.useRouter)(),t=e=>{let t=document.getElementById(e);t&&t.scrollIntoView({behavior:"smooth"})};return{handleNavigation:s=>{if(s.startsWith("/#")){let r=s.substring(2);"/"===window.location.pathname?t(r):(e.push("/"),setTimeout(()=>t(r),100))}else e.push(s)}}}(),i=(e,r)=>{e.preventDefault(),s(r),t(!1)};return r.jsx("header",{className:"bg-white shadow-md sticky top-0 z-50",children:(0,r.jsxs)("div",{className:"container mx-auto flex justify-between items-center py-4 px-6",children:[r.jsx(l(),{href:"/",className:"text-2xl font-bold holler-labs-font",children:"hlabs"}),(0,r.jsxs)("nav",{className:`md:flex ${e?"flex":"hidden"} flex-col md:flex-row absolute md:relative top-full left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none`,children:[r.jsx(l(),{href:"/#services",className:"px-4 py-2 hover:text-blue-600 transition-colors",onClick:e=>i(e,"/#services"),children:"Services"}),r.jsx(l(),{href:"/#ai-agents",className:"px-4 py-2 hover:text-blue-600 transition-colors",onClick:e=>i(e,"/#ai-agents"),children:"AI Agents"}),r.jsx(l(),{href:"/#faq",className:"px-4 py-2 hover:text-blue-600 transition-colors",onClick:e=>i(e,"/#faq"),children:"FAQ"}),r.jsx(l(),{href:"/pricing",className:"px-4 py-2 hover:text-blue-600 transition-colors",onClick:e=>i(e,"/pricing"),children:"Pricing"})]}),(0,r.jsxs)("div",{className:"flex items-center",children:[r.jsx(c.E.div,{whileHover:{scale:1.05},whileTap:{scale:.95},children:r.jsx(d.z,{className:"hidden md:inline-flex",onClick:e=>i(e,"/#book-your-free-discovery-call"),children:"Book Free AI Strategy Call"})}),r.jsx(d.z,{variant:"ghost",size:"icon",className:"md:hidden",onClick:()=>t(!e),children:r.jsx(h.Z,{className:"h-6 w-6"})})]})]})})}function m(){let e=(0,u.usePathname)(),t="/"===e;return r.jsx("footer",{className:`bg-gray-900 text-white ${t?"py-12":"py-6"}`,children:(0,r.jsxs)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[(0,r.jsxs)("div",{className:`grid grid-cols-1 ${t?"md:grid-cols-3 gap-8":"md:grid-cols-2 gap-4"}`,children:[(0,r.jsxs)("div",{children:[r.jsx("h3",{className:"text-lg font-bold mb-4 holler-labs-font",children:"HOLLER LABS"}),r.jsx("p",{className:"text-gray-400",children:"Automating your business growth"})]}),t&&(0,r.jsxs)("div",{children:[r.jsx("h4",{className:"text-lg font-semibold mb-4",children:"Quick Links"}),(0,r.jsxs)("ul",{className:"space-y-2",children:[r.jsx("li",{children:r.jsx(l(),{href:"#services",className:"text-gray-400 hover:text-white transition-colors",children:"Services"})}),r.jsx("li",{children:r.jsx(l(),{href:"/pricing",className:"text-gray-400 hover:text-white transition-colors",children:"Pricing"})}),r.jsx("li",{children:r.jsx(l(),{href:"/contact",className:"text-gray-400 hover:text-white transition-colors",children:"Contact Us"})})]})]}),(0,r.jsxs)("div",{children:[r.jsx("h4",{className:"text-lg font-semibold mb-4",children:"Legal"}),(0,r.jsxs)("ul",{className:"space-y-2",children:[r.jsx("li",{children:r.jsx(l(),{href:"/privacy-policy",className:"text-gray-400 hover:text-white transition-colors",children:"Privacy Policy"})}),r.jsx("li",{children:r.jsx(l(),{href:"/termsofservice",className:"text-gray-400 hover:text-white transition-colors",children:"Terms of Service"})})]})]})]}),r.jsx("div",{className:`${t?"mt-8 pt-8 border-t border-gray-800":"mt-4"} text-center`,children:r.jsx("p",{className:"text-gray-400",children:"\xa9 2024 HOLLER LABS. All rights reserved."})})]})})}var p=s(283),v=s.n(p);function g({children:e}){return(0,r.jsxs)("html",{lang:"en",className:"scroll-smooth",children:[(0,r.jsxs)("head",{children:[r.jsx("link",{href:"https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700&display=swap",rel:"stylesheet"}),r.jsx("link",{href:"https://fonts.cdnfonts.com/css/lequire-rounded",rel:"stylesheet"})]}),(0,r.jsxs)("body",{className:`${a().className} bg-gray-50 text-gray-900 antialiased`,children:[r.jsx(x,{}),r.jsx("main",{className:"relative z-20 min-h-screen",children:e}),r.jsx(m,{}),r.jsx(v(),{id:"voiceflow-widget",strategy:"afterInteractive",children:`
            (function(d, t) {
              var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
              v.onload = function() {
                window.voiceflow.chat.load({
                  verify: { projectID: '672ce34be13b9a0cd7eb8848' },
                  url: 'https://general-runtime.voiceflow.com',
                  versionID: 'production'
                });
              }
              v.src = "https://cdn.voiceflow.com/widget/bundle.mjs"; v.type = "text/javascript"; s.parentNode.insertBefore(v, s);
            })(document, 'script');
          `})]})]})}},7948:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>c});var r=s(3854),i=s(3260),a=s(5548),n=s.n(a);let o={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1}}},l={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.5}}};function c(){return(0,r.jsxs)(i.E.div,{initial:"hidden",animate:"visible",variants:o,className:"max-w-4xl mx-auto px-4 py-12",children:[r.jsx(i.E.h1,{variants:l,className:"text-4xl font-bold mb-8",children:"Privacy Policy"}),(0,r.jsxs)(i.E.div,{variants:l,className:"prose prose-gray max-w-none space-y-6",children:[(0,r.jsxs)("p",{children:["Last updated: ",new Date().toLocaleDateString()]}),(0,r.jsxs)("section",{children:[r.jsx("h2",{className:"text-2xl font-semibold mb-4",children:"1. Introduction"}),r.jsx("p",{children:"Welcome to AI Automation Agency. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you."})]}),(0,r.jsxs)("section",{children:[r.jsx("h2",{className:"text-2xl font-semibold mb-4",children:"2. Data We Collect"}),r.jsx("p",{children:"We may collect, use, store and transfer different kinds of personal data about you, including:"}),(0,r.jsxs)("ul",{className:"list-disc pl-6",children:[r.jsx("li",{children:"Identity Data (name, username)"}),r.jsx("li",{children:"Contact Data (email address, phone number)"}),r.jsx("li",{children:"Technical Data (IP address, browser type, device information)"}),r.jsx("li",{children:"Usage Data (how you use our website and services)"})]})]}),(0,r.jsxs)("section",{children:[r.jsx("h2",{className:"text-2xl font-semibold mb-4",children:"3. How We Use Your Data"}),r.jsx("p",{children:"We use your data to:"}),(0,r.jsxs)("ul",{className:"list-disc pl-6",children:[r.jsx("li",{children:"Provide and improve our AI automation services"}),r.jsx("li",{children:"Communicate with you about our services"}),r.jsx("li",{children:"Analyze and improve our website performance"}),r.jsx("li",{children:"Comply with legal obligations"})]})]}),(0,r.jsxs)("section",{children:[r.jsx("h2",{className:"text-2xl font-semibold mb-4",children:"4. Data Security"}),r.jsx("p",{children:"We have implemented appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way. We limit access to your personal data to those employees, agents, contractors, and other third parties who have a business need to know."})]}),(0,r.jsxs)("section",{children:[r.jsx("h2",{className:"text-2xl font-semibold mb-4",children:"5. Your Rights"}),r.jsx("p",{children:"Under certain circumstances, you have rights under data protection laws in relation to your personal data, including:"}),(0,r.jsxs)("ul",{className:"list-disc pl-6",children:[r.jsx("li",{children:"The right to access your personal data"}),r.jsx("li",{children:"The right to correct your personal data"}),r.jsx("li",{children:"The right to erase your personal data"}),r.jsx("li",{children:"The right to object to processing of your personal data"})]})]}),r.jsx(i.E.div,{variants:l,className:"mt-8",children:r.jsx(n(),{href:"/terms",className:"text-primary hover:underline",children:"View Terms of Service"})})]})]})}},7857:(e,t,s)=>{"use strict";s.d(t,{z:()=>c});var r=s(3854),i=s(4218),a=s(5001),n=s(2457),o=s(6370);let l=(0,n.j)("inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-blue-600 text-white hover:bg-blue-700 shadow-[0_0_15px_rgba(59,130,246,0.5)]",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-blue-100 hover:text-blue-600",secondary:"bg-blue-200 text-blue-800 hover:bg-blue-300",ghost:"hover:bg-blue-100 hover:text-blue-600",link:"text-blue-600 underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),c=i.forwardRef(({className:e,variant:t,size:s,asChild:i=!1,...n},c)=>{let d=i?a.g7:"button";return r.jsx(d,{className:(0,o.cn)(l({variant:t,size:s,className:e})),ref:c,...n})});c.displayName="Button"},6370:(e,t,s)=>{"use strict";s.d(t,{cn:()=>a});var r=s(9395),i=s(1088);function a(...e){return(0,i.m6)((0,r.W)(e))}},5345:(e,t,s)=>{"use strict";s.r(t),s.d(t,{$$typeof:()=>n,__esModule:()=>a,default:()=>l});var r=s(5153);let i=(0,r.createProxy)(String.raw`/home/devan/hinge/app/layout.tsx`),{__esModule:a,$$typeof:n}=i,o=i.default,l=o},9077:(e,t,s)=>{"use strict";s.r(t),s.d(t,{$$typeof:()=>n,__esModule:()=>a,default:()=>l});var r=s(5153);let i=(0,r.createProxy)(String.raw`/home/devan/hinge/app/privacy-policy/page.tsx`),{__esModule:a,$$typeof:n}=i,o=i.default,l=o},4047:()=>{}};var t=require("../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),r=t.X(0,[125],()=>s(5282));module.exports=r})();