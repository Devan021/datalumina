exports.id=516,exports.ids=[516],exports.modules={8626:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});var n=r(3528);let s=(0,n.Z)("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]])},542:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});var n=r(3528);let s=(0,n.Z)("Quote",[["path",{d:"M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z",key:"4rm80e"}],["path",{d:"M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z",key:"10za9r"}]])},4901:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});var n=r(3528);let s=(0,n.Z)("Shield",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",key:"1irkt0"}]])},696:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});var n=r(3528);let s=(0,n.Z)("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]])},434:e=>{e.exports={style:{fontFamily:"'__Kanit_bffd4c', '__Kanit_Fallback_bffd4c'",fontWeight:200,fontStyle:"normal"},className:"__className_bffd4c"}},5434:(e,t,r)=>{r(8027);var n=r(9885),s=function(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}(n);function _defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var i="undefined"!=typeof process&&process.env&&!0,isString=function(e){return"[object String]"===Object.prototype.toString.call(e)},o=function(){function StyleSheet(e){var t=void 0===e?{}:e,r=t.name,n=void 0===r?"stylesheet":r,s=t.optimizeForSpeed,o=void 0===s?i:s;invariant$1(isString(n),"`name` must be a string"),this._name=n,this._deletedRulePlaceholder="#"+n+"-deleted-rule____{}",invariant$1("boolean"==typeof o,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=o,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0,this._nonce=null}var e,t=StyleSheet.prototype;return t.setOptimizeForSpeed=function(e){invariant$1("boolean"==typeof e,"`setOptimizeForSpeed` accepts a boolean"),invariant$1(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()},t.isOptimizeForSpeed=function(){return this._optimizeForSpeed},t.inject=function(){var e=this;invariant$1(!this._injected,"sheet already injected"),this._injected=!0,this._serverSheet={cssRules:[],insertRule:function(t,r){return"number"==typeof r?e._serverSheet.cssRules[r]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),r},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}},t.getSheetForTag=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]},t.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},t.insertRule=function(e,t){return invariant$1(isString(e),"`insertRule` accepts only strings"),"number"!=typeof t&&(t=this._serverSheet.cssRules.length),this._serverSheet.insertRule(e,t),this._rulesCount++},t.replaceRule=function(e,t){this._optimizeForSpeed;var r=this._serverSheet;if(t.trim()||(t=this._deletedRulePlaceholder),!r.cssRules[e])return e;r.deleteRule(e);try{r.insertRule(t,e)}catch(n){i||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),r.insertRule(this._deletedRulePlaceholder,e)}return e},t.deleteRule=function(e){this._serverSheet.deleteRule(e)},t.flush=function(){this._injected=!1,this._rulesCount=0,this._serverSheet.cssRules=[]},t.cssRules=function(){return this._serverSheet.cssRules},t.makeStyleTag=function(e,t,r){t&&invariant$1(isString(t),"makeStyleTag accepts only strings as second parameter");var n=document.createElement("style");this._nonce&&n.setAttribute("nonce",this._nonce),n.type="text/css",n.setAttribute("data-"+e,""),t&&n.appendChild(document.createTextNode(t));var s=document.head||document.getElementsByTagName("head")[0];return r?s.insertBefore(n,r):s.appendChild(n),n},_defineProperties(StyleSheet.prototype,[{key:"length",get:function(){return this._rulesCount}}]),e&&_defineProperties(StyleSheet,e),StyleSheet}();function invariant$1(e,t){if(!e)throw Error("StyleSheet: "+t+".")}var stringHash=function(e){for(var t=5381,r=e.length;r;)t=33*t^e.charCodeAt(--r);return t>>>0},a={};function computeId(e,t){if(!t)return"jsx-"+e;var r=String(t),n=e+r;return a[n]||(a[n]="jsx-"+stringHash(e+"-"+r)),a[n]}function computeSelector(e,t){var r=e+(t=t.replace(/\/style/gi,"\\/style"));return a[r]||(a[r]=t.replace(/__jsx-style-dynamic-selector/g,e)),a[r]}var l=n.createContext(null);l.displayName="StyleSheetContext",s.default.useInsertionEffect||s.default.useLayoutEffect;var c=void 0;function JSXStyle(e){var t=c||n.useContext(l);return t&&t.add(e),null}JSXStyle.dynamic=function(e){return e.map(function(e){return computeId(e[0],e[1])}).join(" ")},t.style=JSXStyle},3745:(e,t,r)=>{"use strict";e.exports=r(5434).style},8027:()=>{},8255:(e,t,r)=>{"use strict";r.d(t,{_:()=>useAnimation});var n=r(7664),s=r(9658),i=r(3080);function setVariants(e,t){let r=[...t].reverse();r.forEach(r=>{let n=e.getVariant(r);n&&(0,s.C)(e,n),e.variantChildren&&e.variantChildren.forEach(e=>{setVariants(e,t)})})}function animationControls(){let e=!1,t=new Set,r={subscribe:e=>(t.add(e),()=>void t.delete(e)),start(r,s){(0,n.k)(e,"controls.start() should only be called after a component has mounted. Consider calling within a useEffect hook.");let o=[];return t.forEach(e=>{o.push((0,i.d)(e,r,{transitionOverride:s}))}),Promise.all(o)},set:r=>((0,n.k)(e,"controls.set() should only be called after a component has mounted. Consider calling within a useEffect hook."),t.forEach(e=>{Array.isArray(r)?setVariants(e,r):"string"==typeof r?setVariants(e,[r]):(0,s.C)(e,r)})),stop(){t.forEach(e=>{!function(e){e.values.forEach(e=>e.stop())}(e)})},mount:()=>(e=!0,()=>{e=!1,r.stop()})};return r}var o=r(4349),a=r(381);let useAnimation=function(){let e=(0,o.h)(animationControls);return(0,a.L)(e.mount,[]),e}}};