(self.webpackChunkaltair=self.webpackChunkaltair||[]).push([[521],{14477:C=>{function u(r){this.ms=(r=r||{}).min||100,this.max=r.max||1e4,this.factor=r.factor||2,this.jitter=r.jitter>0&&r.jitter<=1?r.jitter:0,this.attempts=0}C.exports=u,u.prototype.duration=function(){var r=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var o=Math.random(),O=Math.floor(o*this.jitter*r);r=1&Math.floor(10*o)?r+O:r-O}return 0|Math.min(r,this.max)},u.prototype.reset=function(){this.attempts=0},u.prototype.setMin=function(r){this.ms=r},u.prototype.setMax=function(r){this.max=r},u.prototype.setJitter=function(r){this.jitter=r}},62590:function(C,u,r){"use strict";var o=this&&this.__assign||function(){return o=Object.assign||function(c){for(var t,e=1,n=arguments.length;e<n;e++)for(var s in t=arguments[e])Object.prototype.hasOwnProperty.call(t,s)&&(c[s]=t[s]);return c},o.apply(this,arguments)},O=this&&this.__awaiter||function(c,t,e,n){return new(e||(e=Promise))(function(i,v){function E(m){try{f(n.next(m))}catch(R){v(R)}}function N(m){try{f(n.throw(m))}catch(R){v(R)}}function f(m){m.done?i(m.value):function s(i){return i instanceof e?i:new e(function(v){v(i)})}(m.value).then(E,N)}f((n=n.apply(c,t||[])).next())})},A=this&&this.__generator||function(c,t){var n,s,i,v,e={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return v={next:E(0),throw:E(1),return:E(2)},"function"==typeof Symbol&&(v[Symbol.iterator]=function(){return this}),v;function E(f){return function(m){return function N(f){if(n)throw new TypeError("Generator is already executing.");for(;e;)try{if(n=1,s&&(i=2&f[0]?s.return:f[0]?s.throw||((i=s.return)&&i.call(s),0):s.next)&&!(i=i.call(s,f[1])).done)return i;switch(s=0,i&&(f=[2&f[0],i.value]),f[0]){case 0:case 1:i=f;break;case 4:return e.label++,{value:f[1],done:!1};case 5:e.label++,s=f[1],f=[0];continue;case 7:f=e.ops.pop(),e.trys.pop();continue;default:if(!(i=(i=e.trys).length>0&&i[i.length-1])&&(6===f[0]||2===f[0])){e=0;continue}if(3===f[0]&&(!i||f[1]>i[0]&&f[1]<i[3])){e.label=f[1];break}if(6===f[0]&&e.label<i[1]){e.label=i[1],i=f;break}if(i&&e.label<i[2]){e.label=i[2],e.ops.push(f);break}i[2]&&e.ops.pop(),e.trys.pop();continue}f=t.call(c,e)}catch(m){f=[6,m],s=0}finally{n=i=0}if(5&f[0])throw f[1];return{value:f[0]?f[1]:void 0,done:!0}}([f,m])}}},w=this&&this.__spreadArrays||function(){for(var c=0,t=0,e=arguments.length;t<e;t++)c+=arguments[t].length;var n=Array(c),s=0;for(t=0;t<e;t++)for(var i=arguments[t],v=0,E=i.length;v<E;v++,s++)n[s]=i[v];return n};Object.defineProperty(u,"__esModule",{value:!0}),u.SubscriptionClient=void 0;var y=typeof global<"u"?global:typeof window<"u"?window:{},d=y.WebSocket||y.MozWebSocket,a=r(14477),l=r(58895),p=r(81449),I=r(37206),g=r(94140),b=r(86992),M=r(47604),h=r(75977),S=r(18303),_=r(69773),T=function(){function c(t,e,n,s){var i=e||{},v=i.connectionCallback,E=void 0===v?void 0:v,N=i.connectionParams,f=void 0===N?{}:N,m=i.minTimeout,R=void 0===m?S.MIN_WS_TIMEOUT:m,P=i.timeout,U=void 0===P?S.WS_TIMEOUT:P,L=i.reconnect,j=void 0!==L&&L,k=i.reconnectionAttempts,W=void 0===k?1/0:k,x=i.lazy,B=void 0!==x&&x,G=i.inactivityTimeout,D=void 0===G?0:G,Q=i.wsOptionArguments,K=void 0===Q?[]:Q;if(this.wsImpl=n||d,!this.wsImpl)throw new Error("Unable to find native implementation, or alternative implementation for WebSocket!");this.wsProtocols=s||h.GRAPHQL_WS,this.connectionCallback=E,this.url=t,this.operations={},this.nextOperationId=0,this.minWsTimeout=R,this.wsTimeout=U,this.unsentMessagesQueue=[],this.reconnect=j,this.reconnecting=!1,this.reconnectionAttempts=W,this.lazy=!!B,this.inactivityTimeout=D,this.closedByUser=!1,this.backoff=new a({jitter:.5}),this.eventEmitter=new l.EventEmitter,this.middlewares=[],this.client=null,this.maxConnectTimeGenerator=this.createMaxConnectTimeGenerator(),this.connectionParams=this.getConnectionParams(f),this.wsOptionArguments=K,this.lazy||this.connect()}return Object.defineProperty(c.prototype,"status",{get:function(){return null===this.client?this.wsImpl.CLOSED:this.client.readyState},enumerable:!1,configurable:!0}),c.prototype.close=function(t,e){void 0===t&&(t=!0),void 0===e&&(e=!0),this.clearInactivityTimeout(),null!==this.client&&(this.closedByUser=e,t&&(this.clearCheckConnectionInterval(),this.clearMaxConnectTimeout(),this.clearTryReconnectTimeout(),this.unsubscribeAll(),this.sendMessage(void 0,_.default.GQL_CONNECTION_TERMINATE,null)),this.client.close(),this.client.onopen=null,this.client.onclose=null,this.client.onerror=null,this.client.onmessage=null,this.client=null,this.eventEmitter.emit("disconnected"),t||this.tryReconnect())},c.prototype.request=function(t){var e,v,n=this.getObserver.bind(this),s=this.executeOperation.bind(this),i=this.unsubscribe.bind(this);return this.clearInactivityTimeout(),(e={})[M.default]=function(){return this},e.subscribe=function(E,N,f){var m=n(E,N,f);return v=s(t,function(R,P){null===R&&null===P?m.complete&&m.complete():R?m.error&&m.error(R[0]):m.next&&m.next(P)}),{unsubscribe:function(){v&&(i(v),v=null)}}},e},c.prototype.on=function(t,e,n){var s=this.eventEmitter.on(t,e,n);return function(){s.off(t,e,n)}},c.prototype.onConnected=function(t,e){return this.on("connected",t,e)},c.prototype.onConnecting=function(t,e){return this.on("connecting",t,e)},c.prototype.onDisconnected=function(t,e){return this.on("disconnected",t,e)},c.prototype.onReconnected=function(t,e){return this.on("reconnected",t,e)},c.prototype.onReconnecting=function(t,e){return this.on("reconnecting",t,e)},c.prototype.onError=function(t,e){return this.on("error",t,e)},c.prototype.unsubscribeAll=function(){var t=this;Object.keys(this.operations).forEach(function(e){t.unsubscribe(e)})},c.prototype.applyMiddlewares=function(t){var e=this;return new Promise(function(n,s){var v,E,N;v=w(e.middlewares),E=e,(N=function(f){if(f)s(f);else if(v.length>0){var m=v.shift();m&&m.applyMiddleware.apply(E,[t,N])}else n(t)})()})},c.prototype.use=function(t){var e=this;return t.map(function(n){if("function"!=typeof n.applyMiddleware)throw new Error("Middleware must implement the applyMiddleware function.");e.middlewares.push(n)}),this},c.prototype.getConnectionParams=function(t){return function(){return new Promise(function(e,n){if("function"==typeof t)try{return e(t.call(null))}catch(s){return n(s)}e(t)})}},c.prototype.executeOperation=function(t,e){var n=this;null===this.client&&this.connect();var s=this.generateOperationId();return this.operations[s]={options:t,handler:e},this.applyMiddlewares(t).then(function(i){n.checkOperationOptions(i,e),n.operations[s]&&(n.operations[s]={options:i,handler:e},n.sendMessage(s,_.default.GQL_START,i))}).catch(function(i){n.unsubscribe(s),e(n.formatErrors(i))}),s},c.prototype.getObserver=function(t,e,n){return"function"==typeof t?{next:function(s){return t(s)},error:function(s){return e&&e(s)},complete:function(){return n&&n()}}:t},c.prototype.createMaxConnectTimeGenerator=function(){return new a({min:this.minWsTimeout,max:this.wsTimeout,factor:1.2})},c.prototype.clearCheckConnectionInterval=function(){this.checkConnectionIntervalId&&(clearInterval(this.checkConnectionIntervalId),this.checkConnectionIntervalId=null)},c.prototype.clearMaxConnectTimeout=function(){this.maxConnectTimeoutId&&(clearTimeout(this.maxConnectTimeoutId),this.maxConnectTimeoutId=null)},c.prototype.clearTryReconnectTimeout=function(){this.tryReconnectTimeoutId&&(clearTimeout(this.tryReconnectTimeoutId),this.tryReconnectTimeoutId=null)},c.prototype.clearInactivityTimeout=function(){this.inactivityTimeoutId&&(clearTimeout(this.inactivityTimeoutId),this.inactivityTimeoutId=null)},c.prototype.setInactivityTimeout=function(){var t=this;this.inactivityTimeout>0&&0===Object.keys(this.operations).length&&(this.inactivityTimeoutId=setTimeout(function(){0===Object.keys(t.operations).length&&t.close()},this.inactivityTimeout))},c.prototype.checkOperationOptions=function(t,e){var n=t.query,s=t.variables,i=t.operationName;if(!n)throw new Error("Must provide a query.");if(!e)throw new Error("Must provide an handler.");if(!p.default(n)&&!b.getOperationAST(n,i)||i&&!p.default(i)||s&&!I.default(s))throw new Error("Incorrect option types. query must be a string or a document,`operationName` must be a string, and `variables` must be an object.")},c.prototype.buildMessage=function(t,e,n){return{id:t,type:e,payload:n&&n.query?o(o({},n),{query:"string"==typeof n.query?n.query:g.print(n.query)}):n}},c.prototype.formatErrors=function(t){return Array.isArray(t)?t:t&&t.errors?this.formatErrors(t.errors):t&&t.message?[t]:[{name:"FormatedError",message:"Unknown error",originalError:t}]},c.prototype.sendMessage=function(t,e,n){this.sendMessageRaw(this.buildMessage(t,e,n))},c.prototype.sendMessageRaw=function(t){switch(this.status){case this.wsImpl.OPEN:var e=JSON.stringify(t);try{JSON.parse(e)}catch{this.eventEmitter.emit("error",new Error("Message must be JSON-serializable. Got: "+t))}this.client.send(e);break;case this.wsImpl.CONNECTING:this.unsentMessagesQueue.push(t);break;default:this.reconnecting||this.eventEmitter.emit("error",new Error("A message was not sent because socket is not connected, is closing or is already closed. Message was: "+JSON.stringify(t)))}},c.prototype.generateOperationId=function(){return String(++this.nextOperationId)},c.prototype.tryReconnect=function(){var t=this;if(this.reconnect&&!(this.backoff.attempts>=this.reconnectionAttempts)){this.reconnecting||(Object.keys(this.operations).forEach(function(n){t.unsentMessagesQueue.push(t.buildMessage(n,_.default.GQL_START,t.operations[n].options))}),this.reconnecting=!0),this.clearTryReconnectTimeout();var e=this.backoff.duration();this.tryReconnectTimeoutId=setTimeout(function(){t.connect()},e)}},c.prototype.flushUnsentMessagesQueue=function(){var t=this;this.unsentMessagesQueue.forEach(function(e){t.sendMessageRaw(e)}),this.unsentMessagesQueue=[]},c.prototype.checkConnection=function(){this.wasKeepAliveReceived?this.wasKeepAliveReceived=!1:this.reconnecting||this.close(!1,!0)},c.prototype.checkMaxConnectTimeout=function(){var t=this;this.clearMaxConnectTimeout(),this.maxConnectTimeoutId=setTimeout(function(){t.status!==t.wsImpl.OPEN&&(t.reconnecting=!0,t.close(!1,!0))},this.maxConnectTimeGenerator.duration())},c.prototype.connect=function(){var t,e=this;this.client=new((t=this.wsImpl).bind.apply(t,w([void 0,this.url,this.wsProtocols],this.wsOptionArguments))),this.checkMaxConnectTimeout(),this.client.onopen=function(){return O(e,void 0,void 0,function(){var n,s;return A(this,function(i){switch(i.label){case 0:if(this.status!==this.wsImpl.OPEN)return[3,4];this.clearMaxConnectTimeout(),this.closedByUser=!1,this.eventEmitter.emit(this.reconnecting?"reconnecting":"connecting"),i.label=1;case 1:return i.trys.push([1,3,,4]),[4,this.connectionParams()];case 2:return n=i.sent(),this.sendMessage(void 0,_.default.GQL_CONNECTION_INIT,n),this.flushUnsentMessagesQueue(),[3,4];case 3:return s=i.sent(),this.sendMessage(void 0,_.default.GQL_CONNECTION_ERROR,s),this.flushUnsentMessagesQueue(),[3,4];case 4:return[2]}})})},this.client.onclose=function(){e.closedByUser||e.close(!1,!1)},this.client.onerror=function(n){e.eventEmitter.emit("error",n)},this.client.onmessage=function(n){e.processReceivedData(n.data)}},c.prototype.processReceivedData=function(t){var e,n;try{n=(e=JSON.parse(t)).id}catch{throw new Error("Message must be JSON-parseable. Got: "+t)}if(-1===[_.default.GQL_DATA,_.default.GQL_COMPLETE,_.default.GQL_ERROR].indexOf(e.type)||this.operations[n])switch(e.type){case _.default.GQL_CONNECTION_ERROR:this.connectionCallback&&this.connectionCallback(e.payload);break;case _.default.GQL_CONNECTION_ACK:this.eventEmitter.emit(this.reconnecting?"reconnected":"connected",e.payload),this.reconnecting=!1,this.backoff.reset(),this.maxConnectTimeGenerator.reset(),this.connectionCallback&&this.connectionCallback();break;case _.default.GQL_COMPLETE:var s=this.operations[n].handler;delete this.operations[n],s.call(this,null,null);break;case _.default.GQL_ERROR:this.operations[n].handler(this.formatErrors(e.payload),null),delete this.operations[n];break;case _.default.GQL_DATA:var i=e.payload.errors?o(o({},e.payload),{errors:this.formatErrors(e.payload.errors)}):e.payload;this.operations[n].handler(null,i);break;case _.default.GQL_CONNECTION_KEEP_ALIVE:var v=typeof this.wasKeepAliveReceived>"u";this.wasKeepAliveReceived=!0,v&&this.checkConnection(),this.checkConnectionIntervalId&&(clearInterval(this.checkConnectionIntervalId),this.checkConnection()),this.checkConnectionIntervalId=setInterval(this.checkConnection.bind(this),this.wsTimeout);break;default:throw new Error("Invalid message type!")}else this.unsubscribe(n)},c.prototype.unsubscribe=function(t){this.operations[t]&&(delete this.operations[t],this.setInactivityTimeout(),this.sendMessage(t,_.default.GQL_STOP,void 0))},c}();u.SubscriptionClient=T},18303:(C,u)=>{"use strict";Object.defineProperty(u,"__esModule",{value:!0}),u.WS_TIMEOUT=u.MIN_WS_TIMEOUT=void 0,u.MIN_WS_TIMEOUT=1e3,u.WS_TIMEOUT=3e4},69773:(C,u)=>{"use strict";Object.defineProperty(u,"__esModule",{value:!0});var r=function(){function o(){throw new Error("Static Class")}return o.GQL_CONNECTION_INIT="connection_init",o.GQL_CONNECTION_ACK="connection_ack",o.GQL_CONNECTION_ERROR="connection_error",o.GQL_CONNECTION_KEEP_ALIVE="ka",o.GQL_CONNECTION_TERMINATE="connection_terminate",o.GQL_START="start",o.GQL_DATA="data",o.GQL_ERROR="error",o.GQL_COMPLETE="complete",o.GQL_STOP="stop",o.SUBSCRIPTION_START="subscription_start",o.SUBSCRIPTION_DATA="subscription_data",o.SUBSCRIPTION_SUCCESS="subscription_success",o.SUBSCRIPTION_FAIL="subscription_fail",o.SUBSCRIPTION_END="subscription_end",o.INIT="init",o.INIT_SUCCESS="init_success",o.INIT_FAIL="init_fail",o.KEEP_ALIVE="keepalive",o}();u.default=r},75977:(C,u)=>{"use strict";Object.defineProperty(u,"__esModule",{value:!0}),u.GRAPHQL_SUBSCRIPTIONS=u.GRAPHQL_WS=void 0,u.GRAPHQL_WS="graphql-ws",u.GRAPHQL_SUBSCRIPTIONS="graphql-subscriptions"},37206:(C,u)=>{"use strict";Object.defineProperty(u,"__esModule",{value:!0}),u.default=function r(o){return null!==o&&"object"==typeof o}},81449:(C,u)=>{"use strict";Object.defineProperty(u,"__esModule",{value:!0}),u.default=function r(o){return"string"==typeof o}},58895:C=>{"use strict";var u=Object.prototype.hasOwnProperty,r="~";function o(){}function O(d,a,l){this.fn=d,this.context=a,this.once=l||!1}function A(d,a,l,p,I){if("function"!=typeof l)throw new TypeError("The listener must be a function");var g=new O(l,p||d,I),b=r?r+a:a;return d._events[b]?d._events[b].fn?d._events[b]=[d._events[b],g]:d._events[b].push(g):(d._events[b]=g,d._eventsCount++),d}function w(d,a){0==--d._eventsCount?d._events=new o:delete d._events[a]}function y(){this._events=new o,this._eventsCount=0}Object.create&&(o.prototype=Object.create(null),(new o).__proto__||(r=!1)),y.prototype.eventNames=function(){var l,p,a=[];if(0===this._eventsCount)return a;for(p in l=this._events)u.call(l,p)&&a.push(r?p.slice(1):p);return Object.getOwnPropertySymbols?a.concat(Object.getOwnPropertySymbols(l)):a},y.prototype.listeners=function(a){var p=this._events[r?r+a:a];if(!p)return[];if(p.fn)return[p.fn];for(var I=0,g=p.length,b=new Array(g);I<g;I++)b[I]=p[I].fn;return b},y.prototype.listenerCount=function(a){var p=this._events[r?r+a:a];return p?p.fn?1:p.length:0},y.prototype.emit=function(a,l,p,I,g,b){var M=r?r+a:a;if(!this._events[M])return!1;var _,T,h=this._events[M],S=arguments.length;if(h.fn){switch(h.once&&this.removeListener(a,h.fn,void 0,!0),S){case 1:return h.fn.call(h.context),!0;case 2:return h.fn.call(h.context,l),!0;case 3:return h.fn.call(h.context,l,p),!0;case 4:return h.fn.call(h.context,l,p,I),!0;case 5:return h.fn.call(h.context,l,p,I,g),!0;case 6:return h.fn.call(h.context,l,p,I,g,b),!0}for(T=1,_=new Array(S-1);T<S;T++)_[T-1]=arguments[T];h.fn.apply(h.context,_)}else{var t,c=h.length;for(T=0;T<c;T++)switch(h[T].once&&this.removeListener(a,h[T].fn,void 0,!0),S){case 1:h[T].fn.call(h[T].context);break;case 2:h[T].fn.call(h[T].context,l);break;case 3:h[T].fn.call(h[T].context,l,p);break;case 4:h[T].fn.call(h[T].context,l,p,I);break;default:if(!_)for(t=1,_=new Array(S-1);t<S;t++)_[t-1]=arguments[t];h[T].fn.apply(h[T].context,_)}}return!0},y.prototype.on=function(a,l,p){return A(this,a,l,p,!1)},y.prototype.once=function(a,l,p){return A(this,a,l,p,!0)},y.prototype.removeListener=function(a,l,p,I){var g=r?r+a:a;if(!this._events[g])return this;if(!l)return w(this,g),this;var b=this._events[g];if(b.fn)b.fn===l&&(!I||b.once)&&(!p||b.context===p)&&w(this,g);else{for(var M=0,h=[],S=b.length;M<S;M++)(b[M].fn!==l||I&&!b[M].once||p&&b[M].context!==p)&&h.push(b[M]);h.length?this._events[g]=1===h.length?h[0]:h:w(this,g)}return this},y.prototype.removeAllListeners=function(a){var l;return a?this._events[l=r?r+a:a]&&w(this,l):(this._events=new o,this._eventsCount=0),this},y.prototype.off=y.prototype.removeListener,y.prototype.addListener=y.prototype.on,y.prefixed=r,y.EventEmitter=y,C.exports=y},47604:(C,u,r)=>{"use strict";r.r(u),r.d(u,{default:()=>w}),C=r.hmd(C);const w=function o(y){var d,a=y.Symbol;return"function"==typeof a?a.observable?d=a.observable:(d=a("observable"),a.observable=d):d="@@observable",d}(typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:C)},97521:(C,u,r)=>{"use strict";r.r(u),r.d(u,{WebsocketSubscriptionProvider:()=>y});var o=r(43588),O=r(62590),w=r(62503);class y extends o.q{createClient(){this.client=new O.SubscriptionClient(this.subscriptionUrl,{reconnect:!0,connectionParams:this.connectionParams,connectionCallback:this.extraOptions?.onConnected})}execute(a){if(this.createClient(),!this.client)throw new Error("Could not create subscription client!");return new w.y(l=>{const p=this.client.request({query:a.query,variables:a.variables,operationName:a.operationName}).subscribe({next:(...I)=>l.next(...I),error:(...I)=>l.error(...I),complete:()=>l.complete()});this.cleanup=p.unsubscribe})}close(){this.cleanup?.(),this.cleanup=void 0,this.client?.unsubscribeAll(),this.client?.close(),this.client=void 0}}}}]);