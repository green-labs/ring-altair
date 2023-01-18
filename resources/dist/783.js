(self.webpackChunkaltair=self.webpackChunkaltair||[]).push([[783],{16202:function(m,v,f){var g,b;(function(){(function(){(function(){var l=[].slice;this.ActionCable={INTERNAL:{message_types:{welcome:"welcome",ping:"ping",confirmation:"confirm_subscription",rejection:"reject_subscription"},default_mount_path:"/cable",protocols:["actioncable-v1-json","actioncable-unsupported"]},WebSocket:window.WebSocket,logger:window.console,createConsumer:function(i){var t;return null==i&&(i=null!=(t=this.getConfig("url"))?t:this.INTERNAL.default_mount_path),new s.Consumer(this.createWebSocketURL(i))},getConfig:function(i){return document.head.querySelector("meta[name='action-cable-"+i+"']")?.getAttribute("content")},createWebSocketURL:function(i){var t;return i&&!/^wss?:/i.test(i)?((t=document.createElement("a")).href=i,t.href=t.href,t.protocol=t.protocol.replace("http","ws"),t.href):i},startDebugging:function(){return this.debugging=!0},stopDebugging:function(){return this.debugging=null},log:function(){var i,t;if(i=1<=arguments.length?l.call(arguments,0):[],this.debugging)return i.push(Date.now()),(t=this.logger).log.apply(t,["[ActionCable]"].concat(l.call(i)))}}}).call(this)}).call(this);var s=this.ActionCable;(function(){(function(){s.ConnectionMonitor=function(){var i,t,o;function n(e){this.connection=e,this.visibilityDidChange=function(i,t){return function(){return i.apply(t,arguments)}}(this.visibilityDidChange,this),this.reconnectAttempts=0}return n.pollInterval={min:3,max:30},n.staleThreshold=6,n.prototype.start=function(){if(!this.isRunning())return this.startedAt=t(),delete this.stoppedAt,this.startPolling(),document.addEventListener("visibilitychange",this.visibilityDidChange),s.log("ConnectionMonitor started. pollInterval = "+this.getPollInterval()+" ms")},n.prototype.stop=function(){if(this.isRunning())return this.stoppedAt=t(),this.stopPolling(),document.removeEventListener("visibilitychange",this.visibilityDidChange),s.log("ConnectionMonitor stopped")},n.prototype.isRunning=function(){return null!=this.startedAt&&null==this.stoppedAt},n.prototype.recordPing=function(){return this.pingedAt=t()},n.prototype.recordConnect=function(){return this.reconnectAttempts=0,this.recordPing(),delete this.disconnectedAt,s.log("ConnectionMonitor recorded connect")},n.prototype.recordDisconnect=function(){return this.disconnectedAt=t(),s.log("ConnectionMonitor recorded disconnect")},n.prototype.startPolling=function(){return this.stopPolling(),this.poll()},n.prototype.stopPolling=function(){return clearTimeout(this.pollTimeout)},n.prototype.poll=function(){return this.pollTimeout=setTimeout((e=this,function(){return e.reconnectIfStale(),e.poll()}),this.getPollInterval());var e},n.prototype.getPollInterval=function(){var e,c,u,h;return u=(h=this.constructor.pollInterval).min,c=h.max,e=5*Math.log(this.reconnectAttempts+1),Math.round(1e3*i(e,u,c))},n.prototype.reconnectIfStale=function(){if(this.connectionIsStale())return s.log("ConnectionMonitor detected stale connection. reconnectAttempts = "+this.reconnectAttempts+", pollInterval = "+this.getPollInterval()+" ms, time disconnected = "+o(this.disconnectedAt)+" s, stale threshold = "+this.constructor.staleThreshold+" s"),this.reconnectAttempts++,this.disconnectedRecently()?s.log("ConnectionMonitor skipping reopening recent disconnect"):(s.log("ConnectionMonitor reopening"),this.connection.reopen())},n.prototype.connectionIsStale=function(){var e;return o(null!=(e=this.pingedAt)?e:this.startedAt)>this.constructor.staleThreshold},n.prototype.disconnectedRecently=function(){return this.disconnectedAt&&o(this.disconnectedAt)<this.constructor.staleThreshold},n.prototype.visibilityDidChange=function(){if("visible"===document.visibilityState)return setTimeout((e=this,function(){if(e.connectionIsStale()||!e.connection.isOpen())return s.log("ConnectionMonitor reopening stale connection on visibilitychange. visbilityState = "+document.visibilityState),e.connection.reopen()}),200);var e},t=function(){return(new Date).getTime()},o=function(e){return(t()-e)/1e3},i=function(e,c,u){return Math.max(c,Math.min(u,e))},n}()}).call(this),function(){var i,t,o,n,c=[].slice,h=[].indexOf||function(p){for(var r=0,a=this.length;r<a;r++)if(r in this&&this[r]===p)return r;return-1};i=(o=s.INTERNAL).message_types,n=2<=(t=o.protocols).length?c.call(t,0,t.length-1):(0,[]),s.Connection=function(){function p(r){this.consumer=r,this.open=function(p,r){return function(){return p.apply(r,arguments)}}(this.open,this),this.subscriptions=this.consumer.subscriptions,this.monitor=new s.ConnectionMonitor(this),this.disconnected=!0}return p.reopenDelay=500,p.prototype.send=function(r){return!!this.isOpen()&&(this.webSocket.send(JSON.stringify(r)),!0)},p.prototype.open=function(){return this.isActive()?(s.log("Attempted to open WebSocket, but existing socket is "+this.getState()),!1):(s.log("Opening WebSocket, current state is "+this.getState()+", subprotocols: "+t),null!=this.webSocket&&this.uninstallEventHandlers(),this.webSocket=new s.WebSocket(this.consumer.url,t),this.installEventHandlers(),this.monitor.start(),!0)},p.prototype.close=function(r){var d;if((r??{allowReconnect:!0}).allowReconnect||this.monitor.stop(),this.isActive())return null!=(d=this.webSocket)?d.close():void 0},p.prototype.reopen=function(){if(s.log("Reopening WebSocket, current state is "+this.getState()),!this.isActive())return this.open();try{return this.close()}catch(a){return s.log("Failed to reopen WebSocket",a)}finally{s.log("Reopening WebSocket in "+this.constructor.reopenDelay+"ms"),setTimeout(this.open,this.constructor.reopenDelay)}},p.prototype.getProtocol=function(){var r;return null!=(r=this.webSocket)?r.protocol:void 0},p.prototype.isOpen=function(){return this.isState("open")},p.prototype.isActive=function(){return this.isState("open","connecting")},p.prototype.isProtocolSupported=function(){var r;return r=this.getProtocol(),h.call(n,r)>=0},p.prototype.isState=function(){var r,a;return a=1<=arguments.length?c.call(arguments,0):[],r=this.getState(),h.call(a,r)>=0},p.prototype.getState=function(){var r,a;for(a in WebSocket)if(WebSocket[a]===(null!=(r=this.webSocket)?r.readyState:void 0))return a.toLowerCase();return null},p.prototype.installEventHandlers=function(){var r,a;for(r in this.events)a=this.events[r].bind(this),this.webSocket["on"+r]=a},p.prototype.uninstallEventHandlers=function(){var r;for(r in this.events)this.webSocket["on"+r]=function(){}},p.prototype.events={message:function(r){var a,d,S,A;if(this.isProtocolSupported())switch(S=JSON.parse(r.data),a=S.identifier,d=S.message,A=S.type,A){case i.welcome:return this.monitor.recordConnect(),this.subscriptions.reload();case i.ping:return this.monitor.recordPing();case i.confirmation:return this.subscriptions.notify(a,"connected");case i.rejection:return this.subscriptions.reject(a);default:return this.subscriptions.notify(a,"received",d)}},open:function(){if(s.log("WebSocket onopen event, using '"+this.getProtocol()+"' subprotocol"),this.disconnected=!1,!this.isProtocolSupported())return s.log("Protocol is unsupported. Stopping monitor and disconnecting."),this.close({allowReconnect:!1})},close:function(r){if(s.log("WebSocket onclose event"),!this.disconnected)return this.disconnected=!0,this.monitor.recordDisconnect(),this.subscriptions.notifyAll("disconnected",{willAttemptReconnect:this.monitor.isRunning()})},error:function(){return s.log("WebSocket onerror event")}},p}()}.call(this),function(){var l=[].slice;s.Subscriptions=function(){function i(t){this.consumer=t,this.subscriptions=[]}return i.prototype.create=function(t,o){var n,c;return c=new s.Subscription(this.consumer,"object"==typeof(n=t)?n:{channel:n},o),this.add(c)},i.prototype.add=function(t){return this.subscriptions.push(t),this.consumer.ensureActiveConnection(),this.notify(t,"initialized"),this.sendCommand(t,"subscribe"),t},i.prototype.remove=function(t){return this.forget(t),this.findAll(t.identifier).length||this.sendCommand(t,"unsubscribe"),t},i.prototype.reject=function(t){var o,n,e,c,u;for(c=[],o=0,n=(e=this.findAll(t)).length;o<n;o++)this.forget(u=e[o]),this.notify(u,"rejected"),c.push(u);return c},i.prototype.forget=function(t){var o;return this.subscriptions=function(){var n,e,c,u;for(u=[],n=0,e=(c=this.subscriptions).length;n<e;n++)(o=c[n])!==t&&u.push(o);return u}.call(this),t},i.prototype.findAll=function(t){var o,n,e,c,u;for(c=[],o=0,n=(e=this.subscriptions).length;o<n;o++)(u=e[o]).identifier===t&&c.push(u);return c},i.prototype.reload=function(){var t,o,n,e;for(e=[],t=0,o=(n=this.subscriptions).length;t<o;t++)e.push(this.sendCommand(n[t],"subscribe"));return e},i.prototype.notifyAll=function(){var t,o,n,e,c,u;for(o=arguments[0],t=2<=arguments.length?l.call(arguments,1):[],u=[],n=0,e=(c=this.subscriptions).length;n<e;n++)u.push(this.notify.apply(this,[c[n],o].concat(l.call(t))));return u},i.prototype.notify=function(){var t,o,n,e,c,u,h;for(u=arguments[0],o=arguments[1],t=3<=arguments.length?l.call(arguments,2):[],c=[],n=0,e=(h="string"==typeof u?this.findAll(u):[u]).length;n<e;n++)c.push("function"==typeof(u=h[n])[o]?u[o].apply(u,t):void 0);return c},i.prototype.sendCommand=function(t,o){return this.consumer.send({command:o,identifier:t.identifier})},i}()}.call(this),function(){s.Subscription=function(){var l;function i(t,o,n){this.consumer=t,null==o&&(o={}),this.identifier=JSON.stringify(o),l(this,n)}return i.prototype.perform=function(t,o){return null==o&&(o={}),o.action=t,this.send(o)},i.prototype.send=function(t){return this.consumer.send({command:"message",identifier:this.identifier,data:JSON.stringify(t)})},i.prototype.unsubscribe=function(){return this.consumer.subscriptions.remove(this)},l=function(t,o){var n;if(null!=o)for(n in o)t[n]=o[n];return t},i}()}.call(this),function(){s.Consumer=function(){function l(i){this.url=i,this.subscriptions=new s.Subscriptions(this),this.connection=new s.Connection(this)}return l.prototype.send=function(i){return this.connection.send(i)},l.prototype.connect=function(){return this.connection.open()},l.prototype.disconnect=function(){return this.connection.close({allowReconnect:!1})},l.prototype.ensureActiveConnection=function(){if(!this.connection.isActive())return this.connection.open()},l}()}.call(this)}).call(this),m.exports?m.exports=s:void 0!==(b="function"==typeof(g=s)?g.call(v,f,v,m):g)&&(m.exports=b)}).call(this)},64783:(m,v,f)=>{"use strict";f.r(v),f.d(v,{ActionCableSubscriptionProvider:()=>l});var g=f(69972),b=f(16922),y=f(16202),s=f.n(y);class l extends g.q{execute(t){const o=s().createConsumer(this.subscriptionUrl);return new b.y(n=>{this.subscription=o.subscriptions.create(Object.assign({},{channel:this.connectionParams.channel||"GraphqlChannel",channelId:Math.round(Date.now()+1e5*Math.random()).toString(16)},{}),{connected:function(){this.perform("execute",t)},received:function(e){(e.result.data||e.result.errors)&&n.next(e.result),e.more||n.complete()}})})}close(){this.subscription?.unsubscribe()}}}}]);