"use strict";(()=>{var e={};e.id=711,e.ids=[711],e.modules={145:e=>{e.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},6249:(e,t)=>{Object.defineProperty(t,"l",{enumerable:!0,get:function(){return function e(t,r){return r in t?t[r]:"then"in t&&"function"==typeof t.then?t.then(t=>e(t,r)):"function"==typeof t&&"default"===r?t:void 0}}})},6405:(e,t,r)=>{r.r(t),r.d(t,{config:()=>f,default:()=>d,routeModule:()=>P});var o={};r.r(o),r.d(o,{default:()=>l});var n=r(1802),i=r(7153),a=r(6249);let s=process.env.VOICEFLOW_API_KEY,u=process.env.VOICEFLOW_VERSION_ID||"production",c=process.env.VOICEFLOW_PROJECT_ID;async function l(e,t){if("POST"!==e.method)return t.status(405).json({error:"Method Not Allowed"});if(!s||!c)return t.status(500).json({error:"Voiceflow API key or Project ID is not configured"});let{message:r}=e.body;if(!r)return t.status(400).json({error:"Message is required"});try{let e=await fetch("https://general-runtime.voiceflow.com/state/user/interact",{method:"POST",headers:{"Content-Type":"application/json",Authorization:s},body:JSON.stringify({versionID:u,projectID:c,action:{type:"text",payload:r}})});if(!e.ok){let r=await e.json().catch(()=>({}));return console.error("Voiceflow API error:",e.status,r),t.status(e.status).json({error:"Failed to interact with chat",details:r})}let o=await e.json();t.status(200).json(o)}catch(e){console.error("Error in /api/voiceflow/interact:",e),t.status(500).json({error:"Internal Server Error",message:e instanceof Error?e.message:"Unknown error"})}}let d=(0,a.l)(o,"default"),f=(0,a.l)(o,"config"),P=new n.PagesAPIRouteModule({definition:{kind:i.x.PAGES_API,page:"/api/voiceflow/interact",pathname:"/api/voiceflow/interact",bundlePath:"",filename:""},userland:o})},7153:(e,t)=>{var r;Object.defineProperty(t,"x",{enumerable:!0,get:function(){return r}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(r||(r={}))},1802:(e,t,r)=>{e.exports=r(145)}};var t=require("../../../webpack-api-runtime.js");t.C(e);var r=t(t.s=6405);module.exports=r})();