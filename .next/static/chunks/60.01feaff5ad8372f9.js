"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[60],{5060:function(e,t,a){a.r(t),a.d(t,{default:function(){return I}});var s=a(7437),l=a(2265),r=a(2167),i=a(3336),n=a(7158),o=a(6643),d=a(2549),c=a(3611),m=a(5831),u=a(9598),x=a(1465),p=a(1539),f=a(3523),h=a(9224),y=a(2442),j=a(1628);let g=p.fC;p.ZA;let N=p.B4,w=l.forwardRef((e,t)=>{let{className:a,children:l,...r}=e;return(0,s.jsxs)(p.xz,{ref:t,className:(0,j.cn)("flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",a),...r,children:[l,(0,s.jsx)(p.JO,{asChild:!0,children:(0,s.jsx)(f.Z,{className:"h-4 w-4 opacity-50"})})]})});w.displayName=p.xz.displayName;let b=l.forwardRef((e,t)=>{let{className:a,...l}=e;return(0,s.jsx)(p.u_,{ref:t,className:(0,j.cn)("flex cursor-default items-center justify-center py-1",a),...l,children:(0,s.jsx)(h.Z,{className:"h-4 w-4"})})});b.displayName=p.u_.displayName;let v=l.forwardRef((e,t)=>{let{className:a,...l}=e;return(0,s.jsx)(p.$G,{ref:t,className:(0,j.cn)("flex cursor-default items-center justify-center py-1",a),...l,children:(0,s.jsx)(f.Z,{className:"h-4 w-4"})})});v.displayName=p.$G.displayName;let z=l.forwardRef((e,t)=>{let{className:a,children:l,position:r="popper",...i}=e;return(0,s.jsx)(p.h_,{children:(0,s.jsxs)(p.VY,{ref:t,className:(0,j.cn)("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2","popper"===r&&"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",a),position:r,...i,children:[(0,s.jsx)(b,{}),(0,s.jsx)(p.l_,{className:(0,j.cn)("p-1","popper"===r&&"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),children:l}),(0,s.jsx)(v,{})]})})});z.displayName=p.VY.displayName;let C=l.forwardRef((e,t)=>{let{className:a,...l}=e;return(0,s.jsx)(p.__,{ref:t,className:(0,j.cn)("px-2 py-1.5 text-sm font-semibold",a),...l})});C.displayName=p.__.displayName;let S=l.forwardRef((e,t)=>{let{className:a,children:l,...r}=e;return(0,s.jsxs)(p.ck,{ref:t,className:(0,j.cn)("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",a),...r,children:[(0,s.jsx)("span",{className:"absolute right-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,s.jsx)(p.wU,{children:(0,s.jsx)(y.Z,{className:"h-4 w-4"})})}),(0,s.jsx)(p.eT,{children:l})]})});S.displayName=p.ck.displayName;let k=l.forwardRef((e,t)=>{let{className:a,...l}=e;return(0,s.jsx)(p.Z0,{ref:t,className:(0,j.cn)("-mx-1 my-1 h-px bg-muted",a),...l})});k.displayName=p.Z0.displayName;var Z=a(8811),_=a.n(Z);let R=_()(()=>a.e(393).then(a.t.bind(a,6393,23)),{loadableGenerated:{webpack:()=>[6393]},ssr:!1}),E=l.memo(()=>{let[e,t]=(0,l.useState)(!1),[a,p]=(0,l.useState)(1),[f,h]=(0,l.useState)({email:"",companySize:"",interest:""}),[y,j]=(0,l.useState)(!1),[b,v]=(0,l.useState)({width:0,height:0}),[C,k]=(0,l.useState)({});(0,l.useEffect)(()=>{let e=setTimeout(()=>{localStorage.getItem("leadCaptured")||t(!0)},5e3),a=()=>{v({width:window.innerWidth,height:window.innerHeight})};return a(),window.addEventListener("resize",a),()=>{clearTimeout(e),window.removeEventListener("resize",a)}},[]);let Z=e=>/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(String(e).toLowerCase()),_=(0,l.useCallback)(e=>{e.preventDefault();let s={};if(1!==a||Z(f.email)?2!==a||f.companySize?3!==a||f.interest||(s.interest="Please select your primary interest"):s.companySize="Please select your company size":s.email="Please enter a valid email address",Object.keys(s).length>0){k(s);return}k({}),a<3?p(a+1):(console.log("Lead details captured:",f),localStorage.setItem("leadCaptured","true"),j(!0),setTimeout(()=>{j(!1),t(!1)},5e3))},[a,f]),E=(0,l.useCallback)(()=>{t(!1)},[]),I=(0,l.useCallback)((e,t)=>{h(a=>({...a,[e]:t})),k(t=>({...t,[e]:void 0}))},[]),A=(0,l.useCallback)(()=>{switch(a){case 1:return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(u.Ol,{className:"pb-3",children:(0,s.jsx)(u.ll,{className:"text-lg font-semibold",children:"Unlock Exclusive AI Insights!"})}),(0,s.jsxs)(u.aY,{children:[(0,s.jsx)("p",{className:"text-sm text-gray-600 mb-4",children:"Join our community of innovators and get a free AI strategy guide. Your journey to AI-powered growth starts here!"}),(0,s.jsxs)("form",{onSubmit:_,className:"space-y-4",children:[(0,s.jsxs)("div",{className:"space-y-2",children:[(0,s.jsx)(x._,{htmlFor:"email",children:"Email"}),(0,s.jsx)(m.I,{id:"email",type:"email",placeholder:"you@example.com",value:f.email,onChange:e=>I("email",e.target.value),required:!0,className:"w-full"}),C.email&&(0,s.jsx)("p",{className:"text-red-500 text-xs mt-1",children:C.email})]}),(0,s.jsxs)(c.z,{type:"submit",className:"w-full",children:["Get My Free Guide ",(0,s.jsx)(n.Z,{className:"ml-2 h-4 w-4"})]})]})]})]});case 2:return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(u.Ol,{className:"pb-3",children:(0,s.jsx)(u.ll,{className:"text-lg font-semibold",children:"Customize Your AI Experience"})}),(0,s.jsxs)(u.aY,{children:[(0,s.jsx)("p",{className:"text-sm text-gray-600 mb-4",children:"Help us tailor our solutions to your needs. It'll only take a moment!"}),(0,s.jsxs)("form",{onSubmit:_,className:"space-y-4",children:[(0,s.jsxs)("div",{className:"space-y-2",children:[(0,s.jsx)(x._,{htmlFor:"companySize",children:"Company Size"}),(0,s.jsxs)(g,{value:f.companySize,onValueChange:e=>I("companySize",e),children:[(0,s.jsx)(w,{children:(0,s.jsx)(N,{placeholder:"Select company size"})}),(0,s.jsxs)(z,{children:[(0,s.jsx)(S,{value:"1-10",children:"1-10 employees"}),(0,s.jsx)(S,{value:"11-50",children:"11-50 employees"}),(0,s.jsx)(S,{value:"51-200",children:"51-200 employees"}),(0,s.jsx)(S,{value:"201+",children:"201+ employees"})]})]}),C.companySize&&(0,s.jsx)("p",{className:"text-red-500 text-xs mt-1",children:C.companySize})]}),(0,s.jsxs)(c.z,{type:"submit",className:"w-full",children:["Continue ",(0,s.jsx)(n.Z,{className:"ml-2 h-4 w-4"})]})]})]})]});case 3:return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(u.Ol,{className:"pb-3",children:(0,s.jsx)(u.ll,{className:"text-lg font-semibold",children:"Last Step: Claim Your Bonus!"})}),(0,s.jsxs)(u.aY,{children:[(0,s.jsx)("p",{className:"text-sm text-gray-600 mb-4",children:"You're almost there! Tell us what interests you most and we'll throw in a special bonus."}),(0,s.jsxs)("form",{onSubmit:_,className:"space-y-4",children:[(0,s.jsxs)("div",{className:"space-y-2",children:[(0,s.jsx)(x._,{htmlFor:"interest",children:"Primary Interest"}),(0,s.jsxs)(g,{value:f.interest,onValueChange:e=>I("interest",e),children:[(0,s.jsx)(w,{children:(0,s.jsx)(N,{placeholder:"Select your primary interest"})}),(0,s.jsxs)(z,{children:[(0,s.jsx)(S,{value:"chatbots",children:"AI Chatbots"}),(0,s.jsx)(S,{value:"automation",children:"Business Automation"}),(0,s.jsx)(S,{value:"analytics",children:"Predictive Analytics"}),(0,s.jsx)(S,{value:"other",children:"Other AI Solutions"})]})]}),C.interest&&(0,s.jsx)("p",{className:"text-red-500 text-xs mt-1",children:C.interest})]}),(0,s.jsxs)(c.z,{type:"submit",className:"w-full",children:["Claim My Bonus ",(0,s.jsx)(o.Z,{className:"ml-2 h-4 w-4"})]})]})]})]})}},[a,f,C,_,I]);return(0,s.jsxs)(s.Fragment,{children:[y&&(0,s.jsx)(R,{width:b.width,height:b.height,recycle:!1,numberOfPieces:200,colors:["#3b82f6"]}),(0,s.jsx)(r.M,{children:e&&(0,s.jsx)(i.E.div,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},exit:{opacity:0,y:50},className:"fixed bottom-4 right-4 left-4 md:left-auto z-50 md:max-w-md w-auto",children:(0,s.jsxs)(u.Zb,{className:"bg-white shadow-lg overflow-hidden relative",children:[(0,s.jsx)(c.z,{variant:"ghost",size:"icon",className:"absolute top-2 right-2 text-blue-600 hover:text-blue-800 z-10",onClick:E,children:(0,s.jsx)(d.Z,{className:"h-4 w-4"})}),A(),(0,s.jsx)(u.eW,{className:"pt-0",children:(0,s.jsx)("p",{className:"text-xs text-gray-500",children:"By continuing, you agree to our privacy policy and terms of service."})})]})})}),(0,s.jsx)(r.M,{children:y&&(0,s.jsx)(i.E.div,{initial:{opacity:0,scale:.5,rotate:-10},animate:{opacity:1,scale:1,rotate:0},exit:{opacity:0,scale:.5,rotate:10},transition:{type:"spring",stiffness:300,damping:20},className:"fixed inset-0 flex items-center justify-center z-50 pointer-events-none",children:(0,s.jsxs)(i.E.div,{className:"bg-white p-4 sm:p-8 rounded-lg shadow-xl text-center",initial:{y:-50},animate:{y:0},transition:{type:"spring",stiffness:300,damping:20,delay:.2},children:[(0,s.jsx)(i.E.h2,{className:"text-2xl sm:text-3xl font-bold mb-2 sm:mb-4 text-gradient animate-gradient",initial:{opacity:0},animate:{opacity:1},transition:{delay:.4},children:"Congratulations!"}),(0,s.jsx)(i.E.p,{className:"text-lg sm:text-xl",initial:{opacity:0},animate:{opacity:1},transition:{delay:.6},children:"Your bonus is on its way to your inbox!"}),(0,s.jsx)(i.E.div,{className:"mt-4",initial:{scale:0},animate:{scale:1},transition:{type:"spring",stiffness:300,damping:10,delay:.8},children:(0,s.jsx)(o.Z,{className:"w-12 h-12 sm:w-16 sm:h-16 text-blue-600 mx-auto"})})]})})})]})});E.displayName="CookiePopup";var I=E},9598:function(e,t,a){a.d(t,{Ol:function(){return n},Zb:function(){return i},aY:function(){return c},eW:function(){return m},ll:function(){return o}});var s=a(7437),l=a(2265),r=a(1628);let i=l.forwardRef((e,t)=>{let{className:a,...l}=e;return(0,s.jsx)("div",{ref:t,className:(0,r.cn)("rounded-xl border bg-card text-card-foreground shadow",a),...l})});i.displayName="Card";let n=l.forwardRef((e,t)=>{let{className:a,...l}=e;return(0,s.jsx)("div",{ref:t,className:(0,r.cn)("flex flex-col space-y-1.5 p-6",a),...l})});n.displayName="CardHeader";let o=l.forwardRef((e,t)=>{let{className:a,...l}=e;return(0,s.jsx)("div",{ref:t,className:(0,r.cn)("font-semibold leading-none tracking-tight",a),...l})});o.displayName="CardTitle";let d=l.forwardRef((e,t)=>{let{className:a,...l}=e;return(0,s.jsx)("div",{ref:t,className:(0,r.cn)("text-sm text-muted-foreground",a),...l})});d.displayName="CardDescription";let c=l.forwardRef((e,t)=>{let{className:a,...l}=e;return(0,s.jsx)("div",{ref:t,className:(0,r.cn)("p-6 pt-0",a),...l})});c.displayName="CardContent";let m=l.forwardRef((e,t)=>{let{className:a,...l}=e;return(0,s.jsx)("div",{ref:t,className:(0,r.cn)("flex items-center p-6 pt-0",a),...l})});m.displayName="CardFooter"},5831:function(e,t,a){a.d(t,{I:function(){return i}});var s=a(7437),l=a(2265),r=a(1628);let i=l.forwardRef((e,t)=>{let{className:a,type:l,...i}=e;return(0,s.jsx)("input",{type:l,className:(0,r.cn)("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",a),ref:t,...i})});i.displayName="Input"},1465:function(e,t,a){a.d(t,{_:function(){return d}});var s=a(7437),l=a(2265),r=a(6743),i=a(6061),n=a(1628);let o=(0,i.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),d=l.forwardRef((e,t)=>{let{className:a,...l}=e;return(0,s.jsx)(r.f,{ref:t,className:(0,n.cn)(o(),a),...l})});d.displayName=r.f.displayName}}]);