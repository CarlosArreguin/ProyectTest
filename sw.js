if(!self.define){let e,i={};const n=(n,r)=>(n=new URL(n+".js",r).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,o)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let t={};const c=e=>n(e,s),f={module:{uri:s},exports:t,require:c};i[s]=Promise.all(r.map((e=>f[e]||c(e)))).then((e=>(o(...e),t)))}}define(["./workbox-1a1983e6"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"icono.png",revision:"4d28db9f07aa3046b851798b7e08df23"},{url:"index.html",revision:"50b07f25f1ea1dabb23dcb98b96f4fd5"},{url:"index.js",revision:"549fa73960eae691284c125fa86c5209"},{url:"manifest.json",revision:"5577bc44ba6e5b0712bc137992ced28a"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map