"use strict";(self.webpackChunkaltair=self.webpackChunkaltair||[]).push([[364],{38364:(pe,j,I)=>{I.r(j),I.d(j,{GraphQLWsSubscriptionProvider:()=>ae});var g=I(15861),Y=I(69972),_=I(16922);const R=Object.prototype.hasOwnProperty;function x(e){return"object"==typeof e&&null!==e}function O(e,n){return R.call(e,n)}function W(e,n){return R.call(e,n)&&x(e[n])}function w(e,n){return R.call(e,n)&&"string"==typeof e[n]}function H(e,n){return e.length<124?e:n}const ne="graphql-transport-ws";var p=(()=>{return(e=p||(p={}))[e.InternalServerError=4500]="InternalServerError",e[e.InternalClientError=4005]="InternalClientError",e[e.BadRequest=4400]="BadRequest",e[e.BadResponse=4004]="BadResponse",e[e.Unauthorized=4401]="Unauthorized",e[e.Forbidden=4403]="Forbidden",e[e.SubprotocolNotAcceptable=4406]="SubprotocolNotAcceptable",e[e.ConnectionInitialisationTimeout=4408]="ConnectionInitialisationTimeout",e[e.ConnectionAcknowledgementTimeout=4504]="ConnectionAcknowledgementTimeout",e[e.SubscriberAlreadyExists=4409]="SubscriberAlreadyExists",e[e.TooManyInitialisationRequests=4429]="TooManyInitialisationRequests",p;var e})(),c=(()=>{return(e=c||(c={})).ConnectionInit="connection_init",e.ConnectionAck="connection_ack",e.Ping="ping",e.Pong="pong",e.Subscribe="subscribe",e.Next="next",e.Error="error",e.Complete="complete",c;var e})();function v(e){if(x(e)){if(!w(e,"type"))return!1;switch(e.type){case c.ConnectionInit:case c.ConnectionAck:case c.Ping:case c.Pong:return!O(e,"payload")||void 0===e.payload||x(e.payload);case c.Subscribe:return w(e,"id")&&W(e,"payload")&&(!O(e.payload,"operationName")||null==e.payload.operationName||"string"==typeof e.payload.operationName)&&w(e.payload,"query")&&(!O(e.payload,"variables")||null==e.payload.variables||W(e.payload,"variables"))&&(!O(e.payload,"extensions")||null==e.payload.extensions||W(e.payload,"extensions"));case c.Next:return w(e,"id")&&W(e,"payload");case c.Error:return w(e,"id")&&function ee(e){return Array.isArray(e)&&e.length>0&&e.every(n=>"message"in n)}(e.payload);case c.Complete:return w(e,"id");default:return!1}}return!1}function te(e,n){if(v(e))return e;if("string"!=typeof e)throw new Error("Message not parsable");const y=JSON.parse(e,n);if(!v(y))throw new Error("Invalid message");return y}function N(e,n){if(!v(e))throw new Error("Cannot stringify invalid message");return JSON.stringify(e,n)}function L(e){return x(e)&&"code"in e&&"reason"in e}class ae extends Y.q{createClient(){this.client=function re(e){const{url:n,connectionParams:y,lazy:A=!0,onNonLazyError:z=console.error,lazyCloseTimeout:B=0,keepAlive:M=0,disablePong:se,connectionAckWaitTimeout:F=0,retryAttempts:J=5,retryWait:ce=function(){var t=(0,g.Z)(function*(s){let o=1e3;for(let a=0;a<s;a++)o*=2;yield new Promise(a=>setTimeout(a,o+Math.floor(2700*Math.random()+300)))});return function l(s){return t.apply(this,arguments)}}(),shouldRetry:le=L,isFatalConnectionProblem:Z,on:r,webSocketImpl:C,generateID:ue=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,l=>{const s=16*Math.random()|0;return("x"==l?s:3&s|8).toString(16)})},jsonMessageReplacer:D,jsonMessageReviver:de}=e;let S;if(C){if(!function ie(e){return"function"==typeof e&&"constructor"in e&&"CLOSED"in e&&"CLOSING"in e&&"CONNECTING"in e&&"OPEN"in e}(C))throw new Error("Invalid WebSocket implementation provided");S=C}else typeof WebSocket<"u"?S=WebSocket:typeof global<"u"?S=global.WebSocket||global.MozWebSocket:typeof window<"u"&&(S=window.WebSocket||window.MozWebSocket);if(!S)throw new Error("WebSocket implementation missing; on Node you can `import WebSocket from 'ws';` and pass `webSocketImpl: WebSocket` to `createClient`");const P=S,f=(()=>{const t=(()=>{const s={};return{on:(o,a)=>(s[o]=a,()=>{delete s[o]}),emit(o){var a;"id"in o&&(null===(a=s[o.id])||void 0===a||a.call(s,o))}}})(),l={connecting:r?.connecting?[r.connecting]:[],opened:r?.opened?[r.opened]:[],connected:r?.connected?[r.connected]:[],ping:r?.ping?[r.ping]:[],pong:r?.pong?[r.pong]:[],message:r?.message?[t.emit,r.message]:[t.emit],closed:r?.closed?[r.closed]:[],error:r?.error?[r.error]:[]};return{onMessage:t.on,on(s,o){const a=l[s];return a.push(o),()=>{a.splice(a.indexOf(o),1)}},emit(s,...o){for(const a of[...l[s]])a(...o)}}})();function $(t){const l=[f.on("error",s=>{l.forEach(o=>o()),t(s)}),f.on("closed",s=>{l.forEach(o=>o()),t(s)})]}let m,h=0,U=!1,G=0,K=!1;function V(){return Q.apply(this,arguments)}function Q(){return(Q=(0,g.Z)(function*(){const[t,l]=yield m??(m=new Promise((a,b)=>(0,g.Z)(function*(){if(U){if(yield ce(G),!h)return m=void 0,b({code:1e3,reason:"All Subscriptions Gone"});G++}f.emit("connecting");const i=new P("function"==typeof n?yield n():n,ne);let E,T;function q(){isFinite(M)&&M>0&&(clearTimeout(T),T=setTimeout(()=>{i.readyState===P.OPEN&&(i.send(N({type:c.Ping})),f.emit("ping",!1,void 0))},M))}$(u=>{m=void 0,clearTimeout(E),clearTimeout(T),b(u),L(u)&&4499===u.code&&(i.close(4499,"Terminated"),i.onerror=null,i.onclose=null)}),i.onerror=u=>f.emit("error",u),i.onclose=u=>f.emit("closed",u),i.onopen=(0,g.Z)(function*(){try{f.emit("opened",i);const u="function"==typeof y?yield y():y;if(i.readyState!==P.OPEN)return;i.send(N(u?{type:c.ConnectionInit,payload:u}:{type:c.ConnectionInit},D)),isFinite(F)&&F>0&&(E=setTimeout(()=>{i.close(p.ConnectionAcknowledgementTimeout,"Connection acknowledgement timeout")},F)),q()}catch(u){f.emit("error",u),i.close(p.InternalClientError,H(u instanceof Error?u.message:new Error(u).message,"Internal client error"))}});let k=!1;i.onmessage=({data:u})=>{try{const d=te(u,de);if(f.emit("message",d),"ping"===d.type||"pong"===d.type)return f.emit(d.type,!0,d.payload),void("pong"===d.type?q():se||(i.send(N(d.payload?{type:c.Pong,payload:d.payload}:{type:c.Pong})),f.emit("pong",!1,d.payload)));if(k)return;if(d.type!==c.ConnectionAck)throw new Error(`First message cannot be of type ${d.type}`);clearTimeout(E),k=!0,f.emit("connected",i,d.payload),U=!1,G=0,a([i,new Promise((be,fe)=>$(fe))])}catch(d){i.onmessage=null,f.emit("error",d),i.close(p.BadResponse,H(d instanceof Error?d.message:new Error(d).message,"Bad response"))}}})()));t.readyState===P.CLOSING&&(yield l);let s=()=>{};const o=new Promise(a=>s=a);return[t,s,Promise.race([o.then(()=>{if(!h){const a=()=>t.close(1e3,"Normal Closure");isFinite(B)&&B>0?setTimeout(()=>{!h&&t.readyState===P.OPEN&&a()},B):a()}}),l])]})).apply(this,arguments)}function X(t){if(L(t)&&(function oe(e){return![1e3,1001,1006,1005,1012,1013,1013].includes(e)&&e>=1e3&&e<=1999}(t.code)||[p.InternalServerError,p.InternalClientError,p.BadRequest,p.BadResponse,p.Unauthorized,p.SubprotocolNotAcceptable,p.SubscriberAlreadyExists,p.TooManyInitialisationRequests].includes(t.code)))throw t;if(K)return!1;if(L(t)&&1e3===t.code)return h>0;if(!J||G>=J||!le(t)||Z?.(t))throw t;return U=!0}return A||(0,g.Z)(function*(){for(h++;;)try{const[,,t]=yield V();yield t}catch(t){try{if(!X(t))return}catch(l){return z?.(l)}}})(),{on:f.on,subscribe(t,l){const s=ue();let o=!1,a=!1,b=()=>{h--,o=!0};return(0,g.Z)(function*(){for(h++;;)try{const[i,E,T]=yield V();if(o)return E();const q=f.onMessage(s,k=>{switch(k.type){case c.Next:return void l.next(k.payload);case c.Error:return a=!0,o=!0,l.error(k.payload),void b();case c.Complete:return o=!0,void b()}});return i.send(N({id:s,type:c.Subscribe,payload:t},D)),b=()=>{!o&&i.readyState===P.OPEN&&i.send(N({id:s,type:c.Complete},D)),h--,o=!0,E()},void(yield T.finally(q))}catch(i){if(!X(i))return}})().then(()=>{a||l.complete()}).catch(i=>{l.error(i)}),()=>{o||b()}},dispose:()=>(0,g.Z)(function*(){if(K=!0,m){const[t]=yield m;t.close(1e3,"Normal Closure")}})(),terminate(){m&&f.emit("closed",{code:4499,reason:"Terminated",wasClean:!1})}}}({url:this.subscriptionUrl,connectionParams:this.connectionParams,lazy:!1,onNonLazyError:n=>{this.extraOptions?.onConnected?.(n,void 0)},on:{connected:()=>{this.extraOptions?.onConnected?.(void 0,void 0)},error:n=>{this.extraOptions?.onConnected?.(n,void 0)}}})}execute(n){if(this.createClient(),!this.client)throw new Error("Could not create subscription client!");return new _.y(y=>{this.cleanup=this.client.subscribe({query:n.query,variables:n.variables,operationName:n.operationName},{next:(...A)=>y.next(...A),error:(...A)=>y.error(...A),complete:()=>y.complete()})})}close(){var n=this;return(0,g.Z)(function*(){try{n.cleanup?.(),n.cleanup=void 0,yield n.client?.dispose(),n.client=void 0}catch(y){console.error(y)}})()}}}}]);