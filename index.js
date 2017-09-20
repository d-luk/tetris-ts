!function(t){function e(i){if(n[i])return n[i].exports;var r=n[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};e.m=t,e.c=n,e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=1)}([function(t,e){!function(t,e,n){function i(t,e){return typeof t===e}function r(){return"function"!=typeof e.createElement?e.createElement(arguments[0]):p?e.createElementNS.call(e,"http://www.w3.org/2000/svg",arguments[0]):e.createElement.apply(e,arguments)}function o(){var t=e.body;return t||(t=r(p?"svg":"body"),t.fake=!0),t}function s(t,n,i,s){var a,u,c,h,p="modernizr",f=r("div"),d=o();if(parseInt(i,10))for(;i--;)c=r("div"),c.id=s?s[i]:p+(i+1),f.appendChild(c);return a=r("style"),a.type="text/css",a.id="s"+p,(d.fake?d:f).appendChild(a),d.appendChild(f),a.styleSheet?a.styleSheet.cssText=t:a.appendChild(e.createTextNode(t)),f.id=p,d.fake&&(d.style.background="",d.style.overflow="hidden",h=l.style.overflow,l.style.overflow="hidden",l.appendChild(d)),u=n(f,t),d.fake?(d.parentNode.removeChild(d),l.style.overflow=h,l.offsetHeight):f.parentNode.removeChild(f),!!u}var a=[],u={_version:"3.5.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(t,e){var n=this;setTimeout(function(){e(n[t])},0)},addTest:function(t,e,n){a.push({name:t,fn:e,options:n})},addAsyncTest:function(t){a.push({name:null,fn:t})}},c=function(){};c.prototype=u,c=new c,c.addTest("serviceworker","serviceWorker"in navigator),c.addTest("localstorage",function(){var t="modernizr";try{return localStorage.setItem(t,t),localStorage.removeItem(t),!0}catch(t){return!1}}),c.addTest("sessionstorage",function(){var t="modernizr";try{return sessionStorage.setItem(t,t),sessionStorage.removeItem(t),!0}catch(t){return!1}});var h=[],l=e.documentElement,p="svg"===l.nodeName.toLowerCase();c.addTest("canvas",function(){var t=r("canvas");return!(!t.getContext||!t.getContext("2d"))}),c.addTest("webgl",function(){var e=r("canvas"),n="probablySupportsContext"in e?"probablySupportsContext":"supportsContext";return n in e?e[n]("webgl")||e[n]("experimental-webgl"):"WebGLRenderingContext"in t});var f=u._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];u._prefixes=f;var d=u.testStyles=s;c.addTest("touchevents",function(){var n;if("ontouchstart"in t||t.DocumentTouch&&e instanceof DocumentTouch)n=!0;else{var i=["@media (",f.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");d(i,function(t){n=9===t.offsetTop})}return n}),function(){var t,e,n,r,o,s,u;for(var l in a)if(a.hasOwnProperty(l)){if(t=[],e=a[l],e.name&&(t.push(e.name.toLowerCase()),e.options&&e.options.aliases&&e.options.aliases.length))for(n=0;n<e.options.aliases.length;n++)t.push(e.options.aliases[n].toLowerCase());for(r=i(e.fn,"function")?e.fn():e.fn,o=0;o<t.length;o++)s=t[o],u=s.split("."),1===u.length?c[u[0]]=r:(!c[u[0]]||c[u[0]]instanceof Boolean||(c[u[0]]=new Boolean(c[u[0]])),c[u[0]][u[1]]=r),h.push((r?"":"no-")+u.join("-"))}}(),delete u.addTest,delete u.addAsyncTest;for(var v=0;v<c._q.length;v++)c._q[v]();t.Modernizr=c}(window,document)},function(t,e,n){"use strict";function i(t,e){var n=Modernizr.localstorage;return n&&localStorage.setItem(t,e),n}function r(){return V}function o(t){V=t,i("highscore",V.toString())}function s(t){B+=t,B>r()&&o(B),c()}function a(){B=0,c()}function u(t,e){void 0===e&&(e=!1),G.push(t),e&&t(B)}function c(){G.forEach(function(t){return t(B)})}function h(t,e){var n={width:t.size.width/e.width,height:t.size.height/e.height},i=t.ctx;i.strokeStyle="#efefef",i.lineWidth=t.pixelRatio;for(var r=0;r<t.size.width;r+=n.width)i.beginPath(),i.moveTo(r,0),i.lineTo(r,t.size.height),i.stroke();for(var o=0;o<t.size.height;o+=n.height)i.beginPath(),i.moveTo(0,o),i.lineTo(t.size.width,o),i.stroke()}function l(t){switch(t){case 1:return"#ffeb3b";case 2:return"#03a9f4";case 3:return"#f44336";case 4:return"#4caf50";case 5:return"#ff9800";case 6:return"#fbafbc";case 7:return"#9c27b0";case 8:return"#e0e0e0";default:return"#000"}}function p(t,e){var n=t.ctx,i={width:t.size.width/e.length,height:t.size.height/e[0].length};e.forEach(function(t,e){return t.forEach(function(t,r){void 0!==t&&(J.debug.drawEmptyTiles||t)&&(n.fillStyle=t?l(t):K,n.fillRect(e*i.width|0,r*i.height|0,Math.ceil(i.width),Math.ceil(i.height)))})})}function f(t){return{x:t.x,y:t.y}}function d(t,e){return t.x===e.x&&t.y===e.y}function v(t,e){for(var n=0;n<t.length;n++)if(e(t[n],n))return n}function g(t,e){return void 0!==v(t,e)}function m(t){for(var e=[],n=0;n<t.width;n++)e[n]=new Array(t.height);return e}function y(t){return t.reduce(function(t,e,n){return t[n]=e.slice(),t},[])}function _(t){return{width:t.length,height:t[0].length}}function T(t,e){return t.length===e.length&&t[0].length===e[0].length&&!g(t,function(t,n){return g(t,function(t,i){return t!==e[n][i]})})}function b(t,e,n){void 0===n&&(n=y(t));for(var i=e.matrix,r=e.position,o=n,s=0;s<i.length;s++)for(var a=0;a<i[0].length;a++){var u=i[s][a];if(void 0!==u){var c=s+r.x,h=a+r.y;c>=0&&c<t.length&&h>=0&&h<t[0].length&&(u||!o[c][h])&&(o[c][h]=u)}}return o}function w(t){return x(t,!0).reduce(function(t,e,n){return t[n]=e.reverse(),t},[])}function x(t,e){void 0===e&&(e=!1);for(var n=t.length,i=m({width:n,height:n}),r=0;r<n;r++)for(var o=0;o<n;o++)i[r][o]=e?t[n-o-1][r]:t[o][n-r-1];return i}function E(t,e){for(var n=e.matrix,i=e.position,r=0;r<n.length;r++)for(var o=n[r],s=0;s<o.length;s++)if(o[s]){var a=r+i.x,u=s+i.y;if(a<0||a>=t.length||u<0||u>=t[0].length)return!1}return!0}function O(t,e){for(var n=e.matrix,i=e.position,r=0;r<n.length;r++)for(var o=0;o<n[0].length;o++)if(n[r][o]){var s=t[r+i.x];if(s&&s[o+i.y])return!0}return!1}function P(t,e){for(var n=t.matrix,i=t.position,r=Math.ceil(n.length/2),o=1;o<=r;o++){var s=f(i);if(s.y+=o,!e({matrix:n,position:s}))return s;if(s.y-=2*o,!e({matrix:n,position:s}))return s;if(s.y+=o,s.x+=o,!e({matrix:n,position:s}))return s;if(s.x-=2*o,!e({matrix:n,position:s}))return s;s.x+=o}return null}function A(){return new(0,Dt[Math.floor(Math.random()*Dt.length)])}function I(){Yt.clear(),Lt.reset(),a()}function C(t,e){var n=e.matrix,i=f(e.position),r=i.y;do{r++}while(!t.collides({matrix:n,position:{x:i.x,y:r}}));return i.y=r-1,{matrix:n.map(function(t){return t.map(function(t){if(t)return Ht})}),position:i}}function S(){var t={matrix:Lt.shape.blocks,position:Lt.position},e=C(Yt,t);return b(b(Yt.blocks,e),t).reduce(function(t,e){return t.push(e.slice(2)),t},[])}function k(){Yt.place(Lt.shape,Lt.position);var t=Yt.clearFullLines();t&&s(J.points.linesCleared[t]),Lt.reset();var e={matrix:Lt.shape.blocks,position:Lt.position};if(Yt.collides(e)){var n=P(e,Yt.collides.bind(Yt));n?Lt.position=n:I()}}function D(){Ut.stop()}function z(){var t={x:Lt.position.x,y:Lt.position.y+1};Yt.collides({matrix:Lt.shape.blocks,position:t})?Ut.start():Lt.position=t,Xt.draw(S())}function M(t){H=t,j(),z(),q=window.setInterval(function(){Ut.running||z()},1e3*t)}function R(){M(H)}function j(){window.clearInterval(q)}function N(t){var e=document.getElementById(t);if(!e)throw new ReferenceError("Element with ID "+t+" does not exist!");return e}function L(){j(),Bt.style.display="block",Ft.value=!0}function X(){R(),Bt.style.display="none",Ft.value=!1}function Y(t,e){var n=Xt.canvas.offsetWidth,i=n/Yt.size.width;(e||void 0===U)&&(U=Lt.position.x-t/i);var r=Math.floor(U+t/i);if(r!==U){var o=Lt.position.x-r;if(o>0)for(var s=0;s<o;s++)F("ArrowLeft",!1);else for(var s=0;s>o;s--)F("ArrowRight",!1)}}function F(t,e){if(Ft.value)return!1;var n={x:Lt.position.x,y:Lt.position.y},i=y(Lt.shape.blocks),r=!0,o=!1;switch(t){case"ArrowUp":if(e)return!0;Lt.shape.rotate();var a={matrix:Lt.shape.blocks,position:n};if(Yt.collides(a)){var u=P(a,Yt.collides.bind(Yt));u?n=u:Lt.shape.rotate(!0)}break;case"ArrowRight":n.x++;break;case"ArrowDown":n.y++;var c=J.points.softDrop;Lt.softDropPoints+=c,Lt.softDropPoints<J.points.softDropMax&&s(c);break;case"ArrowLeft":n.x--;break;case"Space":if(e)return!0;var h=n,l=0;do{h={x:h.x,y:h.y+1},l+=J.points.hardDrop}while(!Yt.collides({matrix:Lt.shape.blocks,position:h}));n={x:h.x,y:h.y-1},s(Math.min(l-J.points.hardDrop,J.points.hardDropMax)),o=!0;break;default:r=!1}var p=!d(Lt.position,n);if(p||o){var f={matrix:Lt.shape.blocks,position:n};Yt.collides(f)?p=!1:Lt.position=n,(o||"ArrowDown"===t&&Yt.collides(f))&&k()}var v=!T(Lt.shape.blocks,i);return(p||v)&&(D(),Xt.draw(S())),r}function W(){var t=window.navigator.userAgent,e=!!t.match(/iP(ad|od|hone)/i),n=!!t.match(/WebKit/i);return e&&n&&!t.match(/CriOS/i)&&!t.match(/OPiOS/i)}Object.defineProperty(e,"__esModule",{value:!0});var q,H,U,V=(n(0),parseInt(function(t){if(!Modernizr.localstorage)return null;var e=localStorage.getItem("highscore");return"false"===e&&(e=""),e}()||"",10)||0),B=0,G=[],Z={gameSpeed:.4,points:{linesCleared:{1:40,2:100,3:300,4:1200},softDrop:1,hardDrop:2,softDropMax:20,hardDropMax:40},placementTimeout:.5,debug:{drawEmptyTiles:!1,emptyTileColor:"#f1f1f1"}},J=Z,K=J.debug.emptyTileColor,$=function(){function t(t){var e=document.getElementById(t);this.pixelRatio=devicePixelRatio||1,this.size={width:parseInt(e.getAttribute("width"),10)*this.pixelRatio,height:parseInt(e.getAttribute("height"),10)*this.pixelRatio},this.size.width!==e.offsetWidth&&e.setAttribute("width",""+this.size.width),this.size.height!==e.offsetHeight&&e.setAttribute("height",""+this.size.height);var n=e.getContext("2d");if(!n)throw new Error("Context not found!");this.ctx=n,this.canvas=e}return t.prototype.draw=function(t){this.clear(),h(this,_(t)),p(this,t)},t.prototype.clear=function(){this.ctx.clearRect(0,0,this.size.width,this.size.height)},t}(),Q=$,tt=function(){function t(t){this.size=t,this.clear()}return Object.defineProperty(t.prototype,"blocks",{get:function(){return this._blocks},enumerable:!0,configurable:!0}),t.prototype.place=function(t,e){b(this.blocks,{matrix:t.blocks,position:e},this.blocks)},t.prototype.clearFullLines=function(){var t=this,e=this.getFullLines();return e.forEach(function(e){return t.deleteRow(e)}),e.length},t.prototype.getFullLines=function(){var t=this._blocks[0].length,e=new Array(t-1);t:for(var n=0;n<t;n++)for(var i=0,r=this._blocks;i<r.length;i++){var o=r[i];if(!o[n]){e[n]=!0;continue t}}for(var s=[],a=0;a<t;a++)e[a]||s.push(a);return s},t.prototype.deleteRow=function(t){this._blocks.forEach(function(e){e.splice(t,1),e.unshift(void 0)})},t.prototype.clear=function(){this._blocks=[];for(var t=0;t<this.size.width;t++)this._blocks[t]=new Array(this.size.height)},t.prototype.contains=function(t){return E(this._blocks,t)},t.prototype.collides=function(t){return!this.contains(t)||O(this.blocks,t)},t}(),et=tt,nt=function(){function t(t){this._blocks=t}return Object.defineProperty(t.prototype,"blocks",{get:function(){return this._blocks},enumerable:!0,configurable:!0}),t.prototype.rotate=function(t){void 0===t&&(t=!1),this._blocks=x(this._blocks,t)},t}(),it=nt,rt=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function i(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}}(),ot=2,st=function(t){function e(){return t.call(this,w([[0,0,0,0],[ot,ot,ot,ot],[0,0,0,0],[0,0,0,0]]))||this}return rt(e,t),e}(it),at=st,ut=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function i(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}}(),ct=6,ht=function(t){function e(){return t.call(this,w([[ct,0,0],[ct,ct,ct],[0,0,0]]))||this}return ut(e,t),e}(it),lt=ht,pt=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function i(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}}(),ft=5,dt=function(t){function e(){return t.call(this,w([[0,0,ft],[ft,ft,ft],[0,0,0]]))||this}return pt(e,t),e}(it),vt=dt,gt=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function i(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}}(),mt=1,yt=function(t){function e(){return t.call(this,w([[mt,mt],[mt,mt]]))||this}return gt(e,t),e}(it),_t=yt,Tt=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function i(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}}(),bt=3,wt=function(t){function e(){return t.call(this,w([[0,bt,bt],[bt,bt,0],[0,0,0]]))||this}return Tt(e,t),e}(it),xt=wt,Et=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function i(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}}(),Ot=7,Pt=function(t){function e(){return t.call(this,w([[Ot,Ot,Ot],[0,Ot,0],[0,0,0]]))||this}return Et(e,t),e}(it),At=Pt,It=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function i(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}}(),Ct=4,St=function(t){function e(){return t.call(this,w([[Ct,Ct,0],[0,Ct,Ct],[0,0,0]]))||this}return It(e,t),e}(it),kt=St,Dt=[at,lt,vt,_t,xt,At,kt],zt=function(){function t(t){this.softDropPoints=0,this._startingPos=t,this.reset()}return Object.defineProperty(t.prototype,"shape",{get:function(){return this._shape},enumerable:!0,configurable:!0}),t.prototype.reset=function(){this.position=f(this._startingPos),this._shape=A(),this.softDropPoints=0},t}(),Mt=zt,Rt=function(){function t(t){this._value=t}return Object.defineProperty(t.prototype,"value",{get:function(){return this._value},set:function(t){this._value=t},enumerable:!0,configurable:!0}),t}(),jt=Rt,Nt={width:10,height:22},Lt=new Mt({x:Nt.width/2-1,y:2}),Xt=new Q("game"),Yt=new et(Nt),Ft=new jt(!1),Wt=function(){function t(t,e,n){void 0===n&&(n=!0),this._running=!1,this._handler=t,this._interval=e,this._repeat=n}return Object.defineProperty(t.prototype,"running",{get:function(){return this._running},enumerable:!0,configurable:!0}),t.prototype.start=function(t){var e=this;void 0===t&&(t=!1),t&&(this._handler(),!this._repeat)||(this.stop(),this._handle=(this._repeat?setInterval:setTimeout)(function(){e._handler(),e._running=!1},this._interval),this._running=!0)},t.prototype.stop=function(){this._handle=(this._repeat?clearInterval:clearTimeout)(this._handle),this._running=!1},t}(),qt=Wt,Ht=8,Ut=new qt(k,1e3*J.placementTimeout,!1),Vt=n(2),Bt=N("pause-modal"),Gt=N("continue-btn"),Zt=function(){function t(){this._array=[]}return Object.defineProperty(t.prototype,"count",{get:function(){return this._array.length},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"values",{get:function(){return this._array},enumerable:!0,configurable:!0}),t.prototype.add=function(t){this.contains(t)||this._array.push(t)},t.prototype.remove=function(t){var e=this._array.indexOf(t);e>=0&&this._array.splice(e,1)},t.prototype.contains=function(t){return this._array.indexOf(t)>=0},t}(),Jt=Zt,Kt=new Jt,$t=new qt(function(){Kt.values.forEach(function(t){F(t,!0)})},90),Qt=new qt(function(){$t.start()},200,!1);!function(){if(Modernizr.touchevents){var t=document.getElementsByTagName("html")[0];t.classList.add("touch"),W()&&t.classList.add("ios-safari")}}(),M(J.gameSpeed),function(){if(document.addEventListener("keydown",function(t){if(!t.repeat){var e=t.code;F(e,!1)&&(t.preventDefault(),Kt.add(e),"ArrowLeft"===e||"ArrowRight"===e?($t.stop(),Qt.start()):$t.start()),Ft.value?"Escape"!==e&&"Space"!==e||X():"Escape"===e&&L()}}),document.addEventListener("keyup",function(t){Kt.contains(t.code)&&(Kt.remove(t.code),0===Kt.count&&(Qt.stop(),$t.stop()))}),Modernizr.touchevents){var t=new Vt.Manager(document.body);t.add(new Vt.Tap),t.add(new Vt.Swipe({direction:Vt.DIRECTION_DOWN})),t.add(new Vt.Pan({direction:Vt.DIRECTION_HORIZONTAL,threshold:20})),t.on("tap",function(){return F("ArrowUp",!1)}),t.on("swipedown",function(){return F("Space",!1)});var e=!0;t.on("panstart",function(){return e=!0}),t.on("panleft",function(t){Y(t.deltaX,e),e&&(e=!1)}),t.on("panright",function(t){Y(t.deltaX,e),e&&(e=!1)})}}(),function(){var t=document.getElementById("player-score"),e=document.getElementById("player-highscore");u(function(n){t.textContent=n.toLocaleString(),e.textContent=r().toLocaleString()},!0)}(),function(){addEventListener("blur",L),Gt.addEventListener("click",X)}()},function(t,e,n){var i;!function(r,o,s,a){"use strict";function u(t,e,n){return setTimeout(f(t,n),e)}function c(t,e,n){return!!Array.isArray(t)&&(h(t,n[e],n),!0)}function h(t,e,n){var i;if(t)if(t.forEach)t.forEach(e,n);else if(t.length!==a)for(i=0;i<t.length;)e.call(n,t[i],i,t),i++;else for(i in t)t.hasOwnProperty(i)&&e.call(n,t[i],i,t)}function l(t,e,n){var i="DEPRECATED METHOD: "+e+"\n"+n+" AT \n";return function(){var e=new Error("get-stack-trace"),n=e&&e.stack?e.stack.replace(/^[^\(]+?[\n$]/gm,"").replace(/^\s+at\s+/gm,"").replace(/^Object.<anonymous>\s*\(/gm,"{anonymous}()@"):"Unknown Stack Trace",o=r.console&&(r.console.warn||r.console.log);return o&&o.call(r.console,i,n),t.apply(this,arguments)}}function p(t,e,n){var i,r=e.prototype;i=t.prototype=Object.create(r),i.constructor=t,i._super=r,n&&dt(i,n)}function f(t,e){return function(){return t.apply(e,arguments)}}function d(t,e){return typeof t==mt?t.apply(e?e[0]||a:a,e):t}function v(t,e){return t===a?e:t}function g(t,e,n){h(T(e),function(e){t.addEventListener(e,n,!1)})}function m(t,e,n){h(T(e),function(e){t.removeEventListener(e,n,!1)})}function y(t,e){for(;t;){if(t==e)return!0;t=t.parentNode}return!1}function _(t,e){return t.indexOf(e)>-1}function T(t){return t.trim().split(/\s+/g)}function b(t,e,n){if(t.indexOf&&!n)return t.indexOf(e);for(var i=0;i<t.length;){if(n&&t[i][n]==e||!n&&t[i]===e)return i;i++}return-1}function w(t){return Array.prototype.slice.call(t,0)}function x(t,e,n){for(var i=[],r=[],o=0;o<t.length;){var s=e?t[o][e]:t[o];b(r,s)<0&&i.push(t[o]),r[o]=s,o++}return n&&(i=e?i.sort(function(t,n){return t[e]>n[e]}):i.sort()),i}function E(t,e){for(var n,i,r=e[0].toUpperCase()+e.slice(1),o=0;o<vt.length;){if(n=vt[o],(i=n?n+r:e)in t)return i;o++}return a}function O(){return xt++}function P(t){var e=t.ownerDocument||t;return e.defaultView||e.parentWindow||r}function A(t,e){var n=this;this.manager=t,this.callback=e,this.element=t.element,this.target=t.options.inputTarget,this.domHandler=function(e){d(t.options.enable,[t])&&n.handler(e)},this.init()}function I(t){return new(t.options.inputClass||(Pt?W:At?U:Ot?B:F))(t,C)}function C(t,e,n){var i=n.pointers.length,r=n.changedPointers.length,o=e&Ct&&i-r==0,s=e&(kt|Dt)&&i-r==0;n.isFirst=!!o,n.isFinal=!!s,o&&(t.session={}),n.eventType=e,S(t,n),t.emit("hammer.input",n),t.recognize(n),t.session.prevInput=n}function S(t,e){var n=t.session,i=e.pointers,r=i.length;n.firstInput||(n.firstInput=z(e)),r>1&&!n.firstMultiple?n.firstMultiple=z(e):1===r&&(n.firstMultiple=!1);var o=n.firstInput,s=n.firstMultiple,a=s?s.center:o.center,u=e.center=M(i);e.timeStamp=Tt(),e.deltaTime=e.timeStamp-o.timeStamp,e.angle=L(a,u),e.distance=N(a,u),k(n,e),e.offsetDirection=j(e.deltaX,e.deltaY);var c=R(e.deltaTime,e.deltaX,e.deltaY);e.overallVelocityX=c.x,e.overallVelocityY=c.y,e.overallVelocity=_t(c.x)>_t(c.y)?c.x:c.y,e.scale=s?Y(s.pointers,i):1,e.rotation=s?X(s.pointers,i):0,e.maxPointers=n.prevInput?e.pointers.length>n.prevInput.maxPointers?e.pointers.length:n.prevInput.maxPointers:e.pointers.length,D(n,e);var h=t.element;y(e.srcEvent.target,h)&&(h=e.srcEvent.target),e.target=h}function k(t,e){var n=e.center,i=t.offsetDelta||{},r=t.prevDelta||{},o=t.prevInput||{};e.eventType!==Ct&&o.eventType!==kt||(r=t.prevDelta={x:o.deltaX||0,y:o.deltaY||0},i=t.offsetDelta={x:n.x,y:n.y}),e.deltaX=r.x+(n.x-i.x),e.deltaY=r.y+(n.y-i.y)}function D(t,e){var n,i,r,o,s=t.lastInterval||e,u=e.timeStamp-s.timeStamp;if(e.eventType!=Dt&&(u>It||s.velocity===a)){var c=e.deltaX-s.deltaX,h=e.deltaY-s.deltaY,l=R(u,c,h);i=l.x,r=l.y,n=_t(l.x)>_t(l.y)?l.x:l.y,o=j(c,h),t.lastInterval=e}else n=s.velocity,i=s.velocityX,r=s.velocityY,o=s.direction;e.velocity=n,e.velocityX=i,e.velocityY=r,e.direction=o}function z(t){for(var e=[],n=0;n<t.pointers.length;)e[n]={clientX:yt(t.pointers[n].clientX),clientY:yt(t.pointers[n].clientY)},n++;return{timeStamp:Tt(),pointers:e,center:M(e),deltaX:t.deltaX,deltaY:t.deltaY}}function M(t){var e=t.length;if(1===e)return{x:yt(t[0].clientX),y:yt(t[0].clientY)};for(var n=0,i=0,r=0;r<e;)n+=t[r].clientX,i+=t[r].clientY,r++;return{x:yt(n/e),y:yt(i/e)}}function R(t,e,n){return{x:e/t||0,y:n/t||0}}function j(t,e){return t===e?zt:_t(t)>=_t(e)?t<0?Mt:Rt:e<0?jt:Nt}function N(t,e,n){n||(n=Ft);var i=e[n[0]]-t[n[0]],r=e[n[1]]-t[n[1]];return Math.sqrt(i*i+r*r)}function L(t,e,n){n||(n=Ft);var i=e[n[0]]-t[n[0]],r=e[n[1]]-t[n[1]];return 180*Math.atan2(r,i)/Math.PI}function X(t,e){return L(e[1],e[0],Wt)+L(t[1],t[0],Wt)}function Y(t,e){return N(e[0],e[1],Wt)/N(t[0],t[1],Wt)}function F(){this.evEl=Ht,this.evWin=Ut,this.pressed=!1,A.apply(this,arguments)}function W(){this.evEl=Gt,this.evWin=Zt,A.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}function q(){this.evTarget=Kt,this.evWin=$t,this.started=!1,A.apply(this,arguments)}function H(t,e){var n=w(t.touches),i=w(t.changedTouches);return e&(kt|Dt)&&(n=x(n.concat(i),"identifier",!0)),[n,i]}function U(){this.evTarget=te,this.targetIds={},A.apply(this,arguments)}function V(t,e){var n=w(t.touches),i=this.targetIds;if(e&(Ct|St)&&1===n.length)return i[n[0].identifier]=!0,[n,n];var r,o,s=w(t.changedTouches),a=[],u=this.target;if(o=n.filter(function(t){return y(t.target,u)}),e===Ct)for(r=0;r<o.length;)i[o[r].identifier]=!0,r++;for(r=0;r<s.length;)i[s[r].identifier]&&a.push(s[r]),e&(kt|Dt)&&delete i[s[r].identifier],r++;return a.length?[x(o.concat(a),"identifier",!0),a]:void 0}function B(){A.apply(this,arguments);var t=f(this.handler,this);this.touch=new U(this.manager,t),this.mouse=new F(this.manager,t),this.primaryTouch=null,this.lastTouches=[]}function G(t,e){t&Ct?(this.primaryTouch=e.changedPointers[0].identifier,Z.call(this,e)):t&(kt|Dt)&&Z.call(this,e)}function Z(t){var e=t.changedPointers[0];if(e.identifier===this.primaryTouch){var n={x:e.clientX,y:e.clientY};this.lastTouches.push(n);var i=this.lastTouches,r=function(){var t=i.indexOf(n);t>-1&&i.splice(t,1)};setTimeout(r,ee)}}function J(t){for(var e=t.srcEvent.clientX,n=t.srcEvent.clientY,i=0;i<this.lastTouches.length;i++){var r=this.lastTouches[i],o=Math.abs(e-r.x),s=Math.abs(n-r.y);if(o<=ne&&s<=ne)return!0}return!1}function K(t,e){this.manager=t,this.set(e)}function $(t){if(_(t,ae))return ae;var e=_(t,ue),n=_(t,ce);return e&&n?ae:e||n?e?ue:ce:_(t,se)?se:oe}function Q(t){this.options=dt({},this.defaults,t||{}),this.id=O(),this.manager=null,this.options.enable=v(this.options.enable,!0),this.state=le,this.simultaneous={},this.requireFail=[]}function tt(t){return t&ge?"cancel":t&de?"end":t&fe?"move":t&pe?"start":""}function et(t){return t==Nt?"down":t==jt?"up":t==Mt?"left":t==Rt?"right":""}function nt(t,e){var n=e.manager;return n?n.get(t):t}function it(){Q.apply(this,arguments)}function rt(){it.apply(this,arguments),this.pX=null,this.pY=null}function ot(){it.apply(this,arguments)}function st(){Q.apply(this,arguments),this._timer=null,this._input=null}function at(){it.apply(this,arguments)}function ut(){it.apply(this,arguments)}function ct(){Q.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}function ht(t,e){return e=e||{},e.recognizers=v(e.recognizers,ht.defaults.preset),new lt(t,e)}function lt(t,e){this.options=dt({},ht.defaults,e||{}),this.options.inputTarget=this.options.inputTarget||t,this.handlers={},this.session={},this.recognizers=[],this.oldCssProps={},this.element=t,this.input=I(this),this.touchAction=new K(this,this.options.touchAction),pt(this,!0),h(this.options.recognizers,function(t){var e=this.add(new t[0](t[1]));t[2]&&e.recognizeWith(t[2]),t[3]&&e.requireFailure(t[3])},this)}function pt(t,e){var n=t.element;if(n.style){var i;h(t.options.cssProps,function(r,o){i=E(n.style,o),e?(t.oldCssProps[i]=n.style[i],n.style[i]=r):n.style[i]=t.oldCssProps[i]||""}),e||(t.oldCssProps={})}}function ft(t,e){var n=o.createEvent("Event");n.initEvent(t,!0,!0),n.gesture=e,e.target.dispatchEvent(n)}var dt,vt=["","webkit","Moz","MS","ms","o"],gt=o.createElement("div"),mt="function",yt=Math.round,_t=Math.abs,Tt=Date.now;dt="function"!=typeof Object.assign?function(t){if(t===a||null===t)throw new TypeError("Cannot convert undefined or null to object");for(var e=Object(t),n=1;n<arguments.length;n++){var i=arguments[n];if(i!==a&&null!==i)for(var r in i)i.hasOwnProperty(r)&&(e[r]=i[r])}return e}:Object.assign;var bt=l(function(t,e,n){for(var i=Object.keys(e),r=0;r<i.length;)(!n||n&&t[i[r]]===a)&&(t[i[r]]=e[i[r]]),r++;return t},"extend","Use `assign`."),wt=l(function(t,e){return bt(t,e,!0)},"merge","Use `assign`."),xt=1,Et=/mobile|tablet|ip(ad|hone|od)|android/i,Ot="ontouchstart"in r,Pt=E(r,"PointerEvent")!==a,At=Ot&&Et.test(navigator.userAgent),It=25,Ct=1,St=2,kt=4,Dt=8,zt=1,Mt=2,Rt=4,jt=8,Nt=16,Lt=Mt|Rt,Xt=jt|Nt,Yt=Lt|Xt,Ft=["x","y"],Wt=["clientX","clientY"];A.prototype={handler:function(){},init:function(){this.evEl&&g(this.element,this.evEl,this.domHandler),this.evTarget&&g(this.target,this.evTarget,this.domHandler),this.evWin&&g(P(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&m(this.element,this.evEl,this.domHandler),this.evTarget&&m(this.target,this.evTarget,this.domHandler),this.evWin&&m(P(this.element),this.evWin,this.domHandler)}};var qt={mousedown:Ct,mousemove:St,mouseup:kt},Ht="mousedown",Ut="mousemove mouseup";p(F,A,{handler:function(t){var e=qt[t.type];e&Ct&&0===t.button&&(this.pressed=!0),e&St&&1!==t.which&&(e=kt),this.pressed&&(e&kt&&(this.pressed=!1),this.callback(this.manager,e,{pointers:[t],changedPointers:[t],pointerType:"mouse",srcEvent:t}))}});var Vt={pointerdown:Ct,pointermove:St,pointerup:kt,pointercancel:Dt,pointerout:Dt},Bt={2:"touch",3:"pen",4:"mouse",5:"kinect"},Gt="pointerdown",Zt="pointermove pointerup pointercancel";r.MSPointerEvent&&!r.PointerEvent&&(Gt="MSPointerDown",Zt="MSPointerMove MSPointerUp MSPointerCancel"),p(W,A,{handler:function(t){var e=this.store,n=!1,i=t.type.toLowerCase().replace("ms",""),r=Vt[i],o=Bt[t.pointerType]||t.pointerType,s="touch"==o,a=b(e,t.pointerId,"pointerId");r&Ct&&(0===t.button||s)?a<0&&(e.push(t),a=e.length-1):r&(kt|Dt)&&(n=!0),a<0||(e[a]=t,this.callback(this.manager,r,{pointers:e,changedPointers:[t],pointerType:o,srcEvent:t}),n&&e.splice(a,1))}});var Jt={touchstart:Ct,touchmove:St,touchend:kt,touchcancel:Dt},Kt="touchstart",$t="touchstart touchmove touchend touchcancel";p(q,A,{handler:function(t){var e=Jt[t.type];if(e===Ct&&(this.started=!0),this.started){var n=H.call(this,t,e);e&(kt|Dt)&&n[0].length-n[1].length==0&&(this.started=!1),this.callback(this.manager,e,{pointers:n[0],changedPointers:n[1],pointerType:"touch",srcEvent:t})}}});var Qt={touchstart:Ct,touchmove:St,touchend:kt,touchcancel:Dt},te="touchstart touchmove touchend touchcancel";p(U,A,{handler:function(t){var e=Qt[t.type],n=V.call(this,t,e);n&&this.callback(this.manager,e,{pointers:n[0],changedPointers:n[1],pointerType:"touch",srcEvent:t})}});var ee=2500,ne=25;p(B,A,{handler:function(t,e,n){var i="touch"==n.pointerType,r="mouse"==n.pointerType;if(!(r&&n.sourceCapabilities&&n.sourceCapabilities.firesTouchEvents)){if(i)G.call(this,e,n);else if(r&&J.call(this,n))return;this.callback(t,e,n)}},destroy:function(){this.touch.destroy(),this.mouse.destroy()}});var ie=E(gt.style,"touchAction"),re=ie!==a,oe="auto",se="manipulation",ae="none",ue="pan-x",ce="pan-y",he=function(){if(!re)return!1;var t={},e=r.CSS&&r.CSS.supports;return["auto","manipulation","pan-y","pan-x","pan-x pan-y","none"].forEach(function(n){t[n]=!e||r.CSS.supports("touch-action",n)}),t}();K.prototype={set:function(t){"compute"==t&&(t=this.compute()),re&&this.manager.element.style&&he[t]&&(this.manager.element.style[ie]=t),this.actions=t.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var t=[];return h(this.manager.recognizers,function(e){d(e.options.enable,[e])&&(t=t.concat(e.getTouchAction()))}),$(t.join(" "))},preventDefaults:function(t){var e=t.srcEvent,n=t.offsetDirection;if(this.manager.session.prevented)return void e.preventDefault();var i=this.actions,r=_(i,ae)&&!he[ae],o=_(i,ce)&&!he[ce],s=_(i,ue)&&!he[ue];if(r){var a=1===t.pointers.length,u=t.distance<2,c=t.deltaTime<250;if(a&&u&&c)return}return s&&o?void 0:r||o&&n&Lt||s&&n&Xt?this.preventSrc(e):void 0},preventSrc:function(t){this.manager.session.prevented=!0,t.preventDefault()}};var le=1,pe=2,fe=4,de=8,ve=de,ge=16;Q.prototype={defaults:{},set:function(t){return dt(this.options,t),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(t){if(c(t,"recognizeWith",this))return this;var e=this.simultaneous;return t=nt(t,this),e[t.id]||(e[t.id]=t,t.recognizeWith(this)),this},dropRecognizeWith:function(t){return c(t,"dropRecognizeWith",this)?this:(t=nt(t,this),delete this.simultaneous[t.id],this)},requireFailure:function(t){if(c(t,"requireFailure",this))return this;var e=this.requireFail;return t=nt(t,this),-1===b(e,t)&&(e.push(t),t.requireFailure(this)),this},dropRequireFailure:function(t){if(c(t,"dropRequireFailure",this))return this;t=nt(t,this);var e=b(this.requireFail,t);return e>-1&&this.requireFail.splice(e,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(t){return!!this.simultaneous[t.id]},emit:function(t){function e(e){n.manager.emit(e,t)}var n=this,i=this.state;i<de&&e(n.options.event+tt(i)),e(n.options.event),t.additionalEvent&&e(t.additionalEvent),i>=de&&e(n.options.event+tt(i))},tryEmit:function(t){if(this.canEmit())return this.emit(t);this.state=32},canEmit:function(){for(var t=0;t<this.requireFail.length;){if(!(this.requireFail[t].state&(32|le)))return!1;t++}return!0},recognize:function(t){var e=dt({},t);if(!d(this.options.enable,[this,e]))return this.reset(),void(this.state=32);this.state&(ve|ge|32)&&(this.state=le),this.state=this.process(e),this.state&(pe|fe|de|ge)&&this.tryEmit(e)},process:function(t){},getTouchAction:function(){},reset:function(){}},p(it,Q,{defaults:{pointers:1},attrTest:function(t){var e=this.options.pointers;return 0===e||t.pointers.length===e},process:function(t){var e=this.state,n=t.eventType,i=e&(pe|fe),r=this.attrTest(t);return i&&(n&Dt||!r)?e|ge:i||r?n&kt?e|de:e&pe?e|fe:pe:32}}),p(rt,it,{defaults:{event:"pan",threshold:10,pointers:1,direction:Yt},getTouchAction:function(){var t=this.options.direction,e=[];return t&Lt&&e.push(ce),t&Xt&&e.push(ue),e},directionTest:function(t){var e=this.options,n=!0,i=t.distance,r=t.direction,o=t.deltaX,s=t.deltaY;return r&e.direction||(e.direction&Lt?(r=0===o?zt:o<0?Mt:Rt,n=o!=this.pX,i=Math.abs(t.deltaX)):(r=0===s?zt:s<0?jt:Nt,n=s!=this.pY,i=Math.abs(t.deltaY))),t.direction=r,n&&i>e.threshold&&r&e.direction},attrTest:function(t){return it.prototype.attrTest.call(this,t)&&(this.state&pe||!(this.state&pe)&&this.directionTest(t))},emit:function(t){this.pX=t.deltaX,this.pY=t.deltaY;var e=et(t.direction);e&&(t.additionalEvent=this.options.event+e),this._super.emit.call(this,t)}}),p(ot,it,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[ae]},attrTest:function(t){return this._super.attrTest.call(this,t)&&(Math.abs(t.scale-1)>this.options.threshold||this.state&pe)},emit:function(t){if(1!==t.scale){var e=t.scale<1?"in":"out";t.additionalEvent=this.options.event+e}this._super.emit.call(this,t)}}),p(st,Q,{defaults:{event:"press",pointers:1,time:251,threshold:9},getTouchAction:function(){return[oe]},process:function(t){var e=this.options,n=t.pointers.length===e.pointers,i=t.distance<e.threshold,r=t.deltaTime>e.time;if(this._input=t,!i||!n||t.eventType&(kt|Dt)&&!r)this.reset();else if(t.eventType&Ct)this.reset(),this._timer=u(function(){this.state=ve,this.tryEmit()},e.time,this);else if(t.eventType&kt)return ve;return 32},reset:function(){clearTimeout(this._timer)},emit:function(t){this.state===ve&&(t&&t.eventType&kt?this.manager.emit(this.options.event+"up",t):(this._input.timeStamp=Tt(),this.manager.emit(this.options.event,this._input)))}}),p(at,it,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[ae]},attrTest:function(t){return this._super.attrTest.call(this,t)&&(Math.abs(t.rotation)>this.options.threshold||this.state&pe)}}),p(ut,it,{defaults:{event:"swipe",threshold:10,velocity:.3,direction:Lt|Xt,pointers:1},getTouchAction:function(){return rt.prototype.getTouchAction.call(this)},attrTest:function(t){var e,n=this.options.direction;return n&(Lt|Xt)?e=t.overallVelocity:n&Lt?e=t.overallVelocityX:n&Xt&&(e=t.overallVelocityY),this._super.attrTest.call(this,t)&&n&t.offsetDirection&&t.distance>this.options.threshold&&t.maxPointers==this.options.pointers&&_t(e)>this.options.velocity&&t.eventType&kt},emit:function(t){var e=et(t.offsetDirection);e&&this.manager.emit(this.options.event+e,t),this.manager.emit(this.options.event,t)}}),p(ct,Q,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:9,posThreshold:10},getTouchAction:function(){return[se]},process:function(t){var e=this.options,n=t.pointers.length===e.pointers,i=t.distance<e.threshold,r=t.deltaTime<e.time;if(this.reset(),t.eventType&Ct&&0===this.count)return this.failTimeout();if(i&&r&&n){if(t.eventType!=kt)return this.failTimeout();var o=!this.pTime||t.timeStamp-this.pTime<e.interval,s=!this.pCenter||N(this.pCenter,t.center)<e.posThreshold;if(this.pTime=t.timeStamp,this.pCenter=t.center,s&&o?this.count+=1:this.count=1,this._input=t,0==this.count%e.taps)return this.hasRequireFailures()?(this._timer=u(function(){this.state=ve,this.tryEmit()},e.interval,this),pe):ve}return 32},failTimeout:function(){return this._timer=u(function(){this.state=32},this.options.interval,this),32},reset:function(){clearTimeout(this._timer)},emit:function(){this.state==ve&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}}),ht.VERSION="2.0.7",ht.defaults={domEvents:!1,touchAction:"compute",enable:!0,inputTarget:null,inputClass:null,preset:[[at,{enable:!1}],[ot,{enable:!1},["rotate"]],[ut,{direction:Lt}],[rt,{direction:Lt},["swipe"]],[ct],[ct,{event:"doubletap",taps:2},["tap"]],[st]],cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}},lt.prototype={set:function(t){return dt(this.options,t),t.touchAction&&this.touchAction.update(),t.inputTarget&&(this.input.destroy(),this.input.target=t.inputTarget,this.input.init()),this},stop:function(t){this.session.stopped=t?2:1},recognize:function(t){var e=this.session;if(!e.stopped){this.touchAction.preventDefaults(t);var n,i=this.recognizers,r=e.curRecognizer;(!r||r&&r.state&ve)&&(r=e.curRecognizer=null);for(var o=0;o<i.length;)n=i[o],2===e.stopped||r&&n!=r&&!n.canRecognizeWith(r)?n.reset():n.recognize(t),!r&&n.state&(pe|fe|de)&&(r=e.curRecognizer=n),o++}},get:function(t){if(t instanceof Q)return t;for(var e=this.recognizers,n=0;n<e.length;n++)if(e[n].options.event==t)return e[n];return null},add:function(t){if(c(t,"add",this))return this;var e=this.get(t.options.event);return e&&this.remove(e),this.recognizers.push(t),t.manager=this,this.touchAction.update(),t},remove:function(t){if(c(t,"remove",this))return this;if(t=this.get(t)){var e=this.recognizers,n=b(e,t);-1!==n&&(e.splice(n,1),this.touchAction.update())}return this},on:function(t,e){if(t!==a&&e!==a){var n=this.handlers;return h(T(t),function(t){n[t]=n[t]||[],n[t].push(e)}),this}},off:function(t,e){if(t!==a){var n=this.handlers;return h(T(t),function(t){e?n[t]&&n[t].splice(b(n[t],e),1):delete n[t]}),this}},emit:function(t,e){this.options.domEvents&&ft(t,e);var n=this.handlers[t]&&this.handlers[t].slice();if(n&&n.length){e.type=t,e.preventDefault=function(){e.srcEvent.preventDefault()};for(var i=0;i<n.length;)n[i](e),i++}},destroy:function(){this.element&&pt(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}},dt(ht,{INPUT_START:Ct,INPUT_MOVE:St,INPUT_END:kt,INPUT_CANCEL:Dt,STATE_POSSIBLE:le,STATE_BEGAN:pe,STATE_CHANGED:fe,STATE_ENDED:de,STATE_RECOGNIZED:ve,STATE_CANCELLED:ge,STATE_FAILED:32,DIRECTION_NONE:zt,DIRECTION_LEFT:Mt,DIRECTION_RIGHT:Rt,DIRECTION_UP:jt,DIRECTION_DOWN:Nt,DIRECTION_HORIZONTAL:Lt,DIRECTION_VERTICAL:Xt,DIRECTION_ALL:Yt,Manager:lt,Input:A,TouchAction:K,TouchInput:U,MouseInput:F,PointerEventInput:W,TouchMouseInput:B,SingleTouchInput:q,Recognizer:Q,AttrRecognizer:it,Tap:ct,Pan:rt,Swipe:ut,Pinch:ot,Rotate:at,Press:st,on:g,off:m,each:h,merge:wt,extend:bt,assign:dt,inherit:p,bindFn:f,prefixed:E}),(void 0!==r?r:"undefined"!=typeof self?self:{}).Hammer=ht,(i=function(){return ht}.call(e,n,e,t))!==a&&(t.exports=i)}(window,document)}]);
//# sourceMappingURL=index.js.map