"use strict";(self.webpackChunkaltair_app=self.webpackChunkaltair_app||[]).push([[934],{17934:(u,l,o)=>{const i=o(90787),e=o(90349);u.exports={atob:i,btoa:e}},90787:u=>{function i(e){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".indexOf(e);return t<0?void 0:t}u.exports=function(e){if((e=(e=`${e}`).replace(/[ \t\n\f\r]/g,"")).length%4==0&&(e=e.replace(/==?$/,"")),e.length%4==1||/[^+/0-9A-Za-z]/.test(e))return null;let t="",n=0,r=0;for(let f=0;f<e.length;f++)n<<=6,n|=i(e[f]),r+=6,24===r&&(t+=String.fromCharCode((16711680&n)>>16),t+=String.fromCharCode((65280&n)>>8),t+=String.fromCharCode(255&n),n=r=0);return 12===r?(n>>=4,t+=String.fromCharCode(n)):18===r&&(n>>=2,t+=String.fromCharCode((65280&n)>>8),t+=String.fromCharCode(255&n)),t}},90349:u=>{function i(e){if(e>=0&&e<64)return"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[e]}u.exports=function(e){let t;for(e=`${e}`,t=0;t<e.length;t++)if(e.charCodeAt(t)>255)return null;let n="";for(t=0;t<e.length;t+=3){const r=[void 0,void 0,void 0,void 0];r[0]=e.charCodeAt(t)>>2,r[1]=(3&e.charCodeAt(t))<<4,e.length>t+1&&(r[1]|=e.charCodeAt(t+1)>>4,r[2]=(15&e.charCodeAt(t+1))<<2),e.length>t+2&&(r[2]|=e.charCodeAt(t+2)>>6,r[3]=63&e.charCodeAt(t+2));for(let f=0;f<r.length;f++)n+=void 0===r[f]?"=":i(r[f])}return n}}}]);