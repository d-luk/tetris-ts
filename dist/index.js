!function(t){function n(r){if(o[r])return o[r].exports;var e=o[r]={i:r,l:!1,exports:{}};return t[r].call(e.exports,e,e.exports,n),e.l=!0,e.exports}var o={};n.m=t,n.c=o,n.d=function(t,o,r){n.o(t,o)||Object.defineProperty(t,o,{configurable:!1,enumerable:!0,get:r})},n.n=function(t){var o=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(o,"a",o),o},n.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},n.p="",n(n.s=0)}([function(t,n,o){"use strict";function r(t){return{x:t.x,y:t.y}}function e(t){for(var n=[],o=0;o<t.width;o++)n[o]=new Array(t.height);return n}function i(t){return t.reduce(function(t,n,o){return t[o]=n.slice(),t},[])}function c(t,n,o){for(var r=0;r<n.length;r++)for(var e=0;e<n[0].length;e++){var i=n[r][e];void 0!==i&&(!i&&t[r+o.x][e+o.y]||(t[r+o.x][e+o.y]=i))}}function u(t,n,o){for(var r=i(t),e=0;e<n.length;e++)for(var c=0;c<n[0].length;c++){var u=n[e][c];if(void 0!==u){var s=e+o.x,f=c+o.y;s>=0&&s<t.length&&f>=0&&f<t[0].length&&(u||!r[s][f])&&(r[s][f]=u)}}return r}function s(t){return f(t).reduce(function(t,n,o){return t[o]=n.reverse(),t},[])}function f(t,n){void 0===n&&(n=!1);for(var o=t.length,r=e({width:o,height:o}),i=0;i<o;i++)for(var c=0;c<o;c++)r[i][c]=n?t[o-c-1][i]:t[c][o-i-1];return r}function a(t,n,o){for(var r=0;r<n.length;r++)for(var e=n[r],i=0;i<e.length;i++)if(e[i]){var c=r+o.x,u=i+o.y;if(c<0||c>=t.length||u<0||u>=t[0].length)return!1}return!0}function h(t,n,o){for(var r=0;r<n.length;r++)for(var e=0;e<n[0].length;e++)if(n[r][e]&&t[r+o.x][e+o.y])return!0;return!1}function p(t,n){for(var o=0;o<t.length;o++){if(n(t[o],o))return o}}function l(t,n){return void 0!==p(t,n)}function _(t){t.ctx.clearRect(0,0,t.size.width,t.size.height)}function y(t,n){var o={width:t.size.width/n.width,height:t.size.height/n.height},r=t.ctx;r.strokeStyle="#efefef";for(var e=0;e<t.size.width;e+=o.width)r.beginPath(),r.moveTo(e,0),r.lineTo(e,t.size.height),r.stroke();for(var i=0;i<t.size.height;i+=o.height)r.beginPath(),r.moveTo(0,i),r.lineTo(t.size.width,i),r.stroke()}function v(t,n,o){n.forEach(function(n,r){return n.forEach(function(n,e){void 0!==n&&(t.ctx.fillStyle=n?"#000":"#8ED6FF",t.ctx.fillRect(r*o,e*o,o,o))})})}function d(){return new(0,Q[Math.floor(Math.random()*Q.length)])}function b(){var t={x:nt.position.x,y:nt.position.y+1};$.collides(nt.shape.blocks,t)?($.place(nt.shape,nt.position),nt.shape=d(),nt.position=r(tt)):nt.position=t,g()}function g(){var t=u($.blocks,nt.shape.blocks,nt.position);_(Z),y(Z,X),v(Z,t,W)}Object.defineProperty(n,"__esModule",{value:!0});var w,O=function(){function t(t){this.size=t,this.clear()}return Object.defineProperty(t.prototype,"blocks",{get:function(){return this._blocks},enumerable:!0,configurable:!0}),t.prototype.place=function(t,n){c(this.blocks,t.blocks,n)},t.prototype.clear=function(){this._blocks=[];for(var t=0;t<this.size.width;t++)this._blocks[t]=new Array(this.size.height)},t.prototype.contains=function(t,n){return a(this._blocks,t,n)},t.prototype.collides=function(t,n){return!this.contains(t,n)||h(this.blocks,t,n)},t}(),x=O,k=function(){function t(t,n){this.shape=t,this.position=n}return t.prototype.getContainedPosition=function(t){var n=r(this.position),o=p(this.shape.blocks,function(t){return l(t,function(t){return!!t})})+n.x;if(o<0)return n.x+=0-o,n;var e=this.shape.blocks.length-p(this.shape.blocks.reverse(),function(t){return l(t,function(t){return!!t})})+n.x;return e>t.blocks.length?(n.x-=e-t.blocks.length,n):n},t}(),P=k;!function(t){t.Yellow="yellow",t.Blue="blue",t.Red="red",t.Green="green",t.Orange="orange",t.Pink="pink",t.Purple="purple"}(w||(w={}));var j=function(){function t(t,n){this._blocks=t,this.color=n}return Object.defineProperty(t.prototype,"blocks",{get:function(){return this._blocks},enumerable:!0,configurable:!0}),t.prototype.rotate=function(t){void 0===t&&(t=!1),this._blocks=f(this._blocks,t)},t}(),A=j,z=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var o in n)n.hasOwnProperty(o)&&(t[o]=n[o])};return function(n,o){function r(){this.constructor=n}t(n,o),n.prototype=null===o?Object.create(o):(r.prototype=o.prototype,new r)}}(),m=function(t){function n(){return t.call(this,s([[0,1,0,0],[0,1,0,0],[0,1,0,0],[0,1,0,0]]),w.Blue)||this}return z(n,t),n}(A),E=m,C=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var o in n)n.hasOwnProperty(o)&&(t[o]=n[o])};return function(n,o){function r(){this.constructor=n}t(n,o),n.prototype=null===o?Object.create(o):(r.prototype=o.prototype,new r)}}(),R=function(t){function n(){return t.call(this,s([[0,1,0],[0,1,0],[1,1,0]]),w.Orange)||this}return C(n,t),n}(A),M=R,T=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var o in n)n.hasOwnProperty(o)&&(t[o]=n[o])};return function(n,o){function r(){this.constructor=n}t(n,o),n.prototype=null===o?Object.create(o):(r.prototype=o.prototype,new r)}}(),B=function(t){function n(){return t.call(this,s([[0,1,0],[0,1,0],[0,1,1]]),w.Orange)||this}return T(n,t),n}(A),D=B,F=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var o in n)n.hasOwnProperty(o)&&(t[o]=n[o])};return function(n,o){function r(){this.constructor=n}t(n,o),n.prototype=null===o?Object.create(o):(r.prototype=o.prototype,new r)}}(),G=function(t){function n(){return t.call(this,s([[1,1],[1,1]]),w.Yellow)||this}return F(n,t),n}(A),I=G,L=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var o in n)n.hasOwnProperty(o)&&(t[o]=n[o])};return function(n,o){function r(){this.constructor=n}t(n,o),n.prototype=null===o?Object.create(o):(r.prototype=o.prototype,new r)}}(),S=function(t){function n(){return t.call(this,s([[0,1,1],[1,1,0],[0,0,0]]),w.Red)||this}return L(n,t),n}(A),Y=S,U=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var o in n)n.hasOwnProperty(o)&&(t[o]=n[o])};return function(n,o){function r(){this.constructor=n}t(n,o),n.prototype=null===o?Object.create(o):(r.prototype=o.prototype,new r)}}(),q=function(t){function n(){return t.call(this,s([[1,1,1],[0,1,0],[0,0,0]]),w.Orange)||this}return U(n,t),n}(A),H=q,J=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var o in n)n.hasOwnProperty(o)&&(t[o]=n[o])};return function(n,o){function r(){this.constructor=n}t(n,o),n.prototype=null===o?Object.create(o):(r.prototype=o.prototype,new r)}}(),K=function(t){function n(){return t.call(this,s([[1,1,0],[0,1,1],[0,0,0]]),w.Green)||this}return J(n,t),n}(A),N=K,Q=[E,M,D,I,Y,H,N],V={width:400,height:600},W=20,X={width:V.width/W,height:V.height/W},Z=function(t,n){var o=document.getElementById(t);if(!o)throw new Error("Canvas not found!");var r=o.getContext("2d");if(!r)throw new Error("Context not found!");return{ctx:r,size:n}}("game",V),$=new x(X),tt={x:9,y:0},nt=new P(d(),r(tt));b(),window.setInterval(b,500),document.addEventListener("keydown",function(t){var n={x:nt.position.x,y:nt.position.y},o=!0;switch(t.code){case"ArrowUp":if(t.repeat)return;nt.shape.rotate(),$.contains(nt.shape.blocks,n)||(n=nt.getContainedPosition($));break;case"ArrowRight":n.x++;break;case"ArrowDown":n.y++;break;case"ArrowLeft":n.x--;break;default:o=!1}o&&($.collides(nt.shape.blocks,n)||(nt.position=n),g())})}]);
//# sourceMappingURL=index.js.map