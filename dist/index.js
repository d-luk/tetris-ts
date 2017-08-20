!function(t){function e(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};e.m=t,e.c=n,e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=0)}([function(t,e,n){"use strict";function o(t){S+=t,s()}function r(){S=0,s()}function i(t,e){void 0===e&&(e=!1),E.push(t),e&&t(S)}function s(){E.forEach(function(t){return t(S)})}function c(t,e){var n={width:t.size.width/e.width,height:t.size.height/e.height},o=t.ctx;o.strokeStyle="#efefef",o.lineWidth=t.pixelRatio;for(var r=0;r<t.size.width;r+=n.width)o.beginPath(),o.moveTo(r,0),o.lineTo(r,t.size.height),o.stroke();for(var i=0;i<t.size.height;i+=n.height)o.beginPath(),o.moveTo(0,i),o.lineTo(t.size.width,i),o.stroke()}function a(t){switch(t){case 1:return"#ffeb3b";case 2:return"#03a9f4";case 3:return"#f44336";case 4:return"#4caf50";case 5:return"#ff9800";case 6:return"#fbafbc";case 7:return"#9c27b0";case 8:return"#e0e0e0";default:return"#000"}}function u(t,e){var n=t.ctx,o={width:t.size.width/e.length,height:t.size.height/e[0].length};e.forEach(function(t,e){return t.forEach(function(t,r){void 0!==t&&(I.drawEmptyTiles||t)&&(n.fillStyle=t?a(t):L,n.fillRect(e*o.width|0,r*o.height|0,Math.ceil(o.width),Math.ceil(o.height)))})})}function f(t){for(var e=[],n=0;n<t.width;n++)e[n]=new Array(t.height);return e}function h(t){return t.reduce(function(t,e,n){return t[n]=e.slice(),t},[])}function p(t){return{width:t.length,height:t[0].length}}function l(t,e,n){void 0===n&&(n=h(t));for(var o=e.matrix,r=e.position,i=n,s=0;s<o.length;s++)for(var c=0;c<o[0].length;c++){var a=o[s][c];if(void 0!==a){var u=s+r.x,f=c+r.y;u>=0&&u<t.length&&f>=0&&f<t[0].length&&(a||!i[u][f])&&(i[u][f]=a)}}return i}function d(t){return y(t).reduce(function(t,e,n){return t[n]=e.reverse(),t},[])}function y(t,e){void 0===e&&(e=!1);for(var n=t.length,o=f({width:n,height:n}),r=0;r<n;r++)for(var i=0;i<n;i++)o[r][i]=e?t[n-i-1][r]:t[i][n-r-1];return o}function v(t,e){for(var n=e.matrix,o=e.position,r=0;r<n.length;r++)for(var i=n[r],s=0;s<i.length;s++)if(i[s]){var c=r+o.x,a=s+o.y;if(c<0||c>=t.length||a<0||a>=t[0].length)return!1}return!0}function _(t,e){for(var n=e.matrix,o=e.position,r=0;r<n.length;r++)for(var i=0;i<n[0].length;i++)if(n[r][i]){var s=t[r+o.x];if(s&&s[i+o.y])return!0}return!1}function g(t){return{x:t.x,y:t.y}}function b(t,e){return t.x===e.x&&t.y===e.y}function w(t,e){for(var n=0;n<t.length;n++){if(e(t[n],n))return n}}function x(t,e){return void 0!==w(t,e)}function m(){return new(0,_t[Math.floor(Math.random()*_t.length)])}function k(){mt.clear(),wt.reset(),r()}function O(t,e){var n=e.matrix,o=g(e.position),r=o.y;do{r++}while(!t.collides({matrix:n,position:{x:o.x,y:r}}));return o.y=r-1,{matrix:n.map(function(t){return t.map(function(t){return t?kt:t})}),position:o}}function P(){var t={matrix:wt.shape.blocks,position:wt.position},e=O(mt,t);return l(l(mt.blocks,e),t)}function z(){var t={x:wt.position.x,y:wt.position.y+1};if(mt.collides({matrix:wt.shape.blocks,position:t})){mt.place(wt.shape,wt.position);var e=mt.clearFullLines();if(e){o(I.points.linesCleared[e])}wt.reset(),wt.softDropPoints=0,mt.collides({matrix:wt.shape.blocks,position:wt.position})&&k()}else wt.position=t;xt.draw(P())}function C(t){D=t,window.clearInterval(A),z(),A=window.setInterval(z,1e3*t)}function j(){C(D)}Object.defineProperty(e,"__esModule",{value:!0});var T,A,D,S=0,E=[],M={gameSpeed:.4,points:{linesCleared:{1:40,2:100,3:300,4:1200},softDrop:1,hardDrop:2,softDropMax:20,hardDropMax:40},drawEmptyTiles:!1},I=M,L="#8ed6ff",R=function(){function t(t){var e=document.getElementById(t);this.pixelRatio=devicePixelRatio||1,this.size={width:parseInt(e.getAttribute("width"),10)*this.pixelRatio,height:parseInt(e.getAttribute("height"),10)*this.pixelRatio},this.size.width!==e.offsetWidth&&e.setAttribute("width",""+this.size.width),this.size.height!==e.offsetHeight&&e.setAttribute("height",""+this.size.height);var n=e.getContext("2d");if(!n)throw new Error("Context not found!");this.ctx=n}return t.prototype.draw=function(t){this.clear(),c(this,p(t)),u(this,t)},t.prototype.clear=function(){this.ctx.clearRect(0,0,this.size.width,this.size.height)},t}(),N=R,B=function(){function t(t){this.size=t,this.clear()}return Object.defineProperty(t.prototype,"blocks",{get:function(){return this._blocks},enumerable:!0,configurable:!0}),t.prototype.place=function(t,e){l(this.blocks,{matrix:t.blocks,position:e},this.blocks)},t.prototype.clearFullLines=function(){var t=this,e=this.getFullLines();return e.forEach(function(e){return t.deleteRow(e)}),e.length},t.prototype.getFullLines=function(){var t=this._blocks[0].length,e=new Array(t-1);t:for(var n=0;n<t;n++)for(var o in this._blocks)if(!o[n]){e[n]=!0;continue t}for(var r=[],i=0;i<t;i++)e[i]||r.push(i);return r},t.prototype.deleteRow=function(t){this._blocks.forEach(function(e){e.splice(t,1),e.unshift(void 0)})},t.prototype.clear=function(){this._blocks=[];for(var t=0;t<this.size.width;t++)this._blocks[t]=new Array(this.size.height)},t.prototype.contains=function(t){return v(this._blocks,t)},t.prototype.collides=function(t){return!this.contains(t)||_(this.blocks,t)},t}(),F=B,W=function(){function t(t){this._blocks=t}return Object.defineProperty(t.prototype,"blocks",{get:function(){return this._blocks},enumerable:!0,configurable:!0}),t.prototype.rotate=function(t){void 0===t&&(t=!1),this._blocks=y(this._blocks,t)},t}(),q=W,H=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),G=2,J=function(t){function e(){return t.call(this,d([[0,G,0,0],[0,G,0,0],[0,G,0,0],[0,G,0,0]]))||this}return H(e,t),e}(q),U=J,K=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),Q=6,V=function(t){function e(){return t.call(this,d([[0,Q,0],[0,Q,0],[Q,Q,0]]))||this}return K(e,t),e}(q),X=V,Y=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),Z=5,$=function(t){function e(){return t.call(this,d([[0,Z,0],[0,Z,0],[0,Z,Z]]))||this}return Y(e,t),e}(q),tt=$,et=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),nt=1,ot=function(t){function e(){return t.call(this,d([[nt,nt],[nt,nt]]))||this}return et(e,t),e}(q),rt=ot,it=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),st=3,ct=function(t){function e(){return t.call(this,d([[0,st,st],[st,st,0],[0,0,0]]))||this}return it(e,t),e}(q),at=ct,ut=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),ft=7,ht=function(t){function e(){return t.call(this,d([[ft,ft,ft],[0,ft,0],[0,0,0]]))||this}return ut(e,t),e}(q),pt=ht,lt=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),dt=4,yt=function(t){function e(){return t.call(this,d([[dt,dt,0],[0,dt,dt],[0,0,0]]))||this}return lt(e,t),e}(q),vt=yt,_t=[U,X,tt,rt,at,pt,vt],gt=function(){function t(t){this.softDropPoints=0,this._startingPos=t,this.reset()}return Object.defineProperty(t.prototype,"shape",{get:function(){return this._shape},enumerable:!0,configurable:!0}),t.prototype.reset=function(){this.position=g(this._startingPos),this._shape=m()},t.prototype.getContainedPosition=function(t){var e=g(this.position),n=w(this._shape.blocks,function(t){return x(t,function(t){return!!t})})+e.x;if(n<0)return e.x+=0-n,e;var o=this._shape.blocks.length-w(this._shape.blocks.reverse(),function(t){return x(t,function(t){return!!t})})+e.x;return o>t.blocks.length?(e.x-=o-t.blocks.length,e):e},t}(),bt=gt,wt=new bt({x:7,y:0}),xt=new N("game"),mt=new F({width:16,height:24}),kt=8,Ot=function(){return document.addEventListener("keydown",function(t){var e={x:wt.position.x,y:wt.position.y},n=!0,r=!1;switch(t.code){case"ArrowUp":if(t.repeat)return;wt.shape.rotate(),mt.contains({matrix:wt.shape.blocks,position:e})||(e=wt.getContainedPosition(mt));break;case"ArrowRight":e.x++;break;case"ArrowDown":e.y++;var i=I.points.softDrop;wt.softDropPoints+=i,wt.softDropPoints<I.points.softDropMax&&o(i);break;case"ArrowLeft":e.x--;break;case"Space":var s=e,c=0;do{s={x:s.x,y:s.y+1},c+=I.points.hardDrop}while(!mt.collides({matrix:wt.shape.blocks,position:s}));e={x:s.x,y:s.y-1},o(Math.min(c-I.points.hardDrop,I.points.hardDropMax)),r=!0;break;default:n=!1}if(!b(wt.position,e)){var a={matrix:wt.shape.blocks,position:e};mt.collides(a)||(wt.position=e),(_(mt.blocks,a)||r)&&j()}n&&(t.preventDefault(),xt.draw(P()))})},Pt=Ot;n(1);C(I.gameSpeed),Pt(),function(){T=document.getElementById("player-score"),i(function(t){T.textContent=t.toLocaleString()},!0)}()},function(t,e){/*! modernizr 3.5.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-canvas-localstorage-serviceworker-sessionstorage-touchevents-webgl !*/
!function(t,e,n){function o(t,e){return typeof t===e}function r(){return"function"!=typeof e.createElement?e.createElement(arguments[0]):p?e.createElementNS.call(e,"http://www.w3.org/2000/svg",arguments[0]):e.createElement.apply(e,arguments)}function i(){var t=e.body;return t||(t=r(p?"svg":"body"),t.fake=!0),t}function s(t,n,o,s){var c,a,u,f,p="modernizr",l=r("div"),d=i();if(parseInt(o,10))for(;o--;)u=r("div"),u.id=s?s[o]:p+(o+1),l.appendChild(u);return c=r("style"),c.type="text/css",c.id="s"+p,(d.fake?d:l).appendChild(c),d.appendChild(l),c.styleSheet?c.styleSheet.cssText=t:c.appendChild(e.createTextNode(t)),l.id=p,d.fake&&(d.style.background="",d.style.overflow="hidden",f=h.style.overflow,h.style.overflow="hidden",h.appendChild(d)),a=n(l,t),d.fake?(d.parentNode.removeChild(d),h.style.overflow=f,h.offsetHeight):l.parentNode.removeChild(l),!!a}var c=[],a={_version:"3.5.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(t,e){var n=this;setTimeout(function(){e(n[t])},0)},addTest:function(t,e,n){c.push({name:t,fn:e,options:n})},addAsyncTest:function(t){c.push({name:null,fn:t})}},u=function(){};u.prototype=a,u=new u,u.addTest("serviceworker","serviceWorker"in navigator),u.addTest("localstorage",function(){var t="modernizr";try{return localStorage.setItem(t,t),localStorage.removeItem(t),!0}catch(t){return!1}}),u.addTest("sessionstorage",function(){var t="modernizr";try{return sessionStorage.setItem(t,t),sessionStorage.removeItem(t),!0}catch(t){return!1}});var f=[],h=e.documentElement,p="svg"===h.nodeName.toLowerCase();u.addTest("canvas",function(){var t=r("canvas");return!(!t.getContext||!t.getContext("2d"))}),u.addTest("webgl",function(){var e=r("canvas"),n="probablySupportsContext"in e?"probablySupportsContext":"supportsContext";return n in e?e[n]("webgl")||e[n]("experimental-webgl"):"WebGLRenderingContext"in t});var l=a._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];a._prefixes=l;var d=a.testStyles=s;u.addTest("touchevents",function(){var n;if("ontouchstart"in t||t.DocumentTouch&&e instanceof DocumentTouch)n=!0;else{var o=["@media (",l.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");d(o,function(t){n=9===t.offsetTop})}return n}),function(){var t,e,n,r,i,s,a;for(var h in c)if(c.hasOwnProperty(h)){if(t=[],e=c[h],e.name&&(t.push(e.name.toLowerCase()),e.options&&e.options.aliases&&e.options.aliases.length))for(n=0;n<e.options.aliases.length;n++)t.push(e.options.aliases[n].toLowerCase());for(r=o(e.fn,"function")?e.fn():e.fn,i=0;i<t.length;i++)s=t[i],a=s.split("."),1===a.length?u[a[0]]=r:(!u[a[0]]||u[a[0]]instanceof Boolean||(u[a[0]]=new Boolean(u[a[0]])),u[a[0]][a[1]]=r),f.push((r?"":"no-")+a.join("-"))}}(),delete a.addTest,delete a.addAsyncTest;for(var y=0;y<u._q.length;y++)u._q[y]();t.Modernizr=u}(window,document)}]);
//# sourceMappingURL=index.js.map