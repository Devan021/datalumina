"use strict";(()=>{var e={};e.id=80,e.ids=[80],e.modules={1287:e=>{e.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},5923:(e,r,t)=>{t.r(r),t.d(r,{config:()=>d,default:()=>u,routeModule:()=>p});var o={};t.r(o),t.d(o,{default:()=>handler});var s=t(1802),a=t(7153),n=t(6249);let i=process.env.VOICEFLOW_API_KEY,l=process.env.VOICEFLOW_VERSION_ID||"production",c=process.env.VOICEFLOW_PROJECT_ID;async function handler(e,r){if("POST"!==e.method)return r.status(405).json({error:"Method Not Allowed"});if(!i||!c)return r.status(500).json({error:"Voiceflow API key or Project ID is not configured"});try{let e=await fetch("https://general-runtime.voiceflow.com/state/user/start",{method:"POST",headers:{"Content-Type":"application/json",Authorization:i},body:JSON.stringify({versionID:l,projectID:c})});if(!e.ok){let t=await e.json().catch(()=>({}));return console.error("Voiceflow API error:",e.status,t),r.status(e.status).json({error:"Failed to initialize chat",details:t})}let t=await e.json();r.status(200).json(t)}catch(e){console.error("Error in /api/voiceflow/start:",e),r.status(500).json({error:"Internal Server Error",message:e instanceof Error?e.message:"Unknown error"})}}let u=(0,n.l)(o,"default"),d=(0,n.l)(o,"config"),p=new s.PagesAPIRouteModule({definition:{kind:a.x.PAGES_API,page:"/api/voiceflow/start",pathname:"/api/voiceflow/start",bundlePath:"",filename:""},userland:o})}};var r=require("../../../webpack-api-runtime.js");r.C(e);var __webpack_exec__=e=>r(r.s=e),t=r.X(0,[222],()=>__webpack_exec__(5923));module.exports=t})();