/*! For license information please see main.js.LICENSE.txt */
(()=>{var t={208:(t,e,n)=>{"use strict";n.d(e,{A:()=>c});var r=n(107),o=n.n(r),i=n(20),a=n.n(i)()(o());a.push([t.id,".animation-container-108373737 {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  text-align: center;\n  gap: 10px;\n  padding: 0 5px;\n  overflow: hidden;\n  height: 100%;\n}\n .animation-container-108373737 .output-192772625 {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 90%;\n  height: 350px;\n  text-align: center;\n  padding: 0 5px;\n  border: 1px solid #000;\n  overflow: hidden;\n  border-radius: 5px;\n}\n.animation-container-108373737 .output-192772625 .inner-output-283652525 {\n  height: 50px;\n  width: 50px;\n  background: #fff;\n  border-radius: 50%;\n}\n\n.inner-output-adjust-283652525{\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n}\n\n.input-code-0987 {\n  font-size: 5px;\n  height: 100px;\n}\n.buttons-1928374 {\n  display: flex;\n  gap: 10px;\n}\n\n.button-3928{\n  background: #000;\n  color: #fff;\n  padding: 5px 10px;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n}\n\n\n.paragraph-1928374{\n  font-size: 9px;\n}\n",""]);const c=a},20:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",r=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),r&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),r&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,r,o,i){"string"==typeof t&&(t=[[null,t,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var u=this[c][0];null!=u&&(a[u]=!0)}for(var s=0;s<t.length;s++){var l=[].concat(t[s]);r&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},107:t=>{"use strict";t.exports=function(t){return t[1]}},958:function(t,e,n){var r,o,i,a;function c(t){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c(t)}t=n.nmd(t),a=function(){return function(){"use strict";var t={d:function(e,n){for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},o:function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}},e={};function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function r(t){return r="function"==typeof Symbol&&"symbol"==c(Symbol.iterator)?function(t){return c(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":c(t)},r(t)}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function i(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return"string"==typeof e&&(e={innerHTML:e}),function(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];if(Array.isArray(n)&&(o=n,n={}),"function"==typeof t)return t(n,o);if(t instanceof Node)e=t;else{if("string"!=typeof t)throw new Error("Invalid tag, ",r(t));e=document.createElement(t)}var i=n.ref;return delete n.ref,Object.keys(n).forEach((function(t){var r=n[t];if(void 0!==r)switch(t){case"child":a(e,[r]);break;case"children":if(!Array.isArray(r))throw new Error("children must be an array of Nodes");a(e,r.flat());break;case"attr":Object.keys(r).forEach((function(t){var n=r[t];void 0!==n&&e.setAttribute(t,n)}));break;case"style":case"dataset":Object.keys(r).forEach((function(n){var o=r[n];void 0!==o&&(e[t][n]=o)}));break;case"on":Object.keys(r).forEach((function(t){var n=r[t];void 0!==n&&n.forEach((function(n){e.addEventListener(t,n)}))}));break;default:e[t]=r}})),i&&i.instanceOfRef&&(i.el=e),e}(t,e,arguments.length>2&&void 0!==arguments[2]?arguments[2]:[])}function a(t,e){var n,r=function(t){var e="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!e){if(Array.isArray(t)||(e=function(t,e){if(t){if("string"==typeof t)return o(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(t,e):void 0}}(t))){e&&(t=e);var n=0,r=function(){};return{s:r,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,c=!1;return{s:function(){e=e.call(t)},n:function(){var t=e.next();return a=t.done,t},e:function(t){c=!0,i=t},f:function(){try{a||null==e.return||e.return()}finally{if(c)throw i}}}}(e);try{for(r.s();!(n=r.n()).done;){var c=n.value;if(Array.isArray(c))a(t,c.flat());else{if(c instanceof Node)c instanceof Text&&"clone"in c&&(c=c.clone());else{if(null==c||""===c)continue;c=i.text("".concat(c))}t.appendChild(c)}}}catch(t){r.e(t)}finally{r.f()}}return t.d(e,{default:function(){return i}}),window&&!window.tag&&(window.tag=i),Object.defineProperties(i,{get:{value:function(t){return document.querySelector(t)}},getAll:{value:function(t){return function(t){if(Array.isArray(t))return n(t)}(e=document.querySelectorAll(t))||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(e)||function(t,e){if(t){if("string"==typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}();var e}},text:{value:function(t){return document.createTextNode(t)}},use:{value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=document.createTextNode(t);return e.clones=[e],e.shouldClone=!1,e._value=t,Object.defineProperty(e,"value",{set:function(t){e._value=t,e.clones.forEach((function(e){e.textContent=t})),"function"==typeof e.onChange&&e.onChange.call(e,t)},get:function(){return e._value}}),Object.defineProperty(e,"toString",{value:function(){return e._value}}),Object.defineProperty(e,"clone",{value:function(){if(!e.shouldClone)return e.shouldClone=!0,e;var t=e.cloneNode();return e.clones.push(t),t}}),e}}}),e.default}()},"object"==c(e)&&"object"==c(t)?t.exports=a():(o=[],void 0===(i="function"==typeof(r=a)?r.apply(e,o):r)||(t.exports=i))},72:t=>{"use strict";var e=[];function n(t){for(var n=-1,r=0;r<e.length;r++)if(e[r].identifier===t){n=r;break}return n}function r(t,r){for(var i={},a=[],c=0;c<t.length;c++){var u=t[c],s=r.base?u[0]+r.base:u[0],l=i[s]||0,f="".concat(s," ").concat(l);i[s]=l+1;var p=n(f),d={css:u[1],media:u[2],sourceMap:u[3],supports:u[4],layer:u[5]};if(-1!==p)e[p].references++,e[p].updater(d);else{var y=o(d,r);r.byIndex=c,e.splice(c,0,{identifier:f,updater:y,references:1})}a.push(f)}return a}function o(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,o){var i=r(t=t||[],o=o||{});return function(t){t=t||[];for(var a=0;a<i.length;a++){var c=n(i[a]);e[c].references--}for(var u=r(t,o),s=0;s<i.length;s++){var l=n(i[s]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}i=u}}},659:t=>{"use strict";var e={};t.exports=function(t,n){var r=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},540:t=>{"use strict";t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},56:(t,e,n)=>{"use strict";t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},825:t=>{"use strict";t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},113:t=>{"use strict";t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}},111:(t,e,n)=>{var r=n(280).default;function o(){"use strict";t.exports=o=function(){return n},t.exports.__esModule=!0,t.exports.default=t.exports;var e,n={},i=Object.prototype,a=i.hasOwnProperty,c=Object.defineProperty||function(t,e,n){t[e]=n.value},u="function"==typeof Symbol?Symbol:{},s=u.iterator||"@@iterator",l=u.asyncIterator||"@@asyncIterator",f=u.toStringTag||"@@toStringTag";function p(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{p({},"")}catch(e){p=function(t,e,n){return t[e]=n}}function d(t,e,n,r){var o=e&&e.prototype instanceof x?e:x,i=Object.create(o.prototype),a=new C(r||[]);return c(i,"_invoke",{value:T(t,n,a)}),i}function y(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}n.wrap=d;var h="suspendedStart",v="suspendedYield",m="executing",b="completed",g={};function x(){}function w(){}function S(){}var E={};p(E,s,(function(){return this}));var j=Object.getPrototypeOf,A=j&&j(j(I([])));A&&A!==i&&a.call(A,s)&&(E=A);var O=S.prototype=x.prototype=Object.create(E);function L(t){["next","throw","return"].forEach((function(e){p(t,e,(function(t){return this._invoke(e,t)}))}))}function k(t,e){function n(o,i,c,u){var s=y(t[o],t,i);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"==r(f)&&a.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,c,u)}),(function(t){n("throw",t,c,u)})):e.resolve(f).then((function(t){l.value=t,c(l)}),(function(t){return n("throw",t,c,u)}))}u(s.arg)}var o;c(this,"_invoke",{value:function(t,r){function i(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(i,i):i()}})}function T(t,n,r){var o=h;return function(i,a){if(o===m)throw Error("Generator is already running");if(o===b){if("throw"===i)throw a;return{value:e,done:!0}}for(r.method=i,r.arg=a;;){var c=r.delegate;if(c){var u=N(c,r);if(u){if(u===g)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===h)throw o=b,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=m;var s=y(t,n,r);if("normal"===s.type){if(o=r.done?b:v,s.arg===g)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(o=b,r.method="throw",r.arg=s.arg)}}}function N(t,n){var r=n.method,o=t.iterator[r];if(o===e)return n.delegate=null,"throw"===r&&t.iterator.return&&(n.method="return",n.arg=e,N(t,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),g;var i=y(o,t.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,g;var a=i.arg;return a?a.done?(n[t.resultName]=a.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,g):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,g)}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function C(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function I(t){if(t||""===t){var n=t[s];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function n(){for(;++o<t.length;)if(a.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return i.next=i}}throw new TypeError(r(t)+" is not iterable")}return w.prototype=S,c(O,"constructor",{value:S,configurable:!0}),c(S,"constructor",{value:w,configurable:!0}),w.displayName=p(S,f,"GeneratorFunction"),n.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===w||"GeneratorFunction"===(e.displayName||e.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,S):(t.__proto__=S,p(t,f,"GeneratorFunction")),t.prototype=Object.create(O),t},n.awrap=function(t){return{__await:t}},L(k.prototype),p(k.prototype,l,(function(){return this})),n.AsyncIterator=k,n.async=function(t,e,r,o,i){void 0===i&&(i=Promise);var a=new k(d(t,e,r,o),i);return n.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},L(O),p(O,f,"Generator"),p(O,s,(function(){return this})),p(O,"toString",(function(){return"[object Generator]"})),n.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},n.values=I,C.prototype={constructor:C,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(P),!t)for(var n in this)"t"===n.charAt(0)&&a.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function r(r,o){return c.type="throw",c.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var u=a.call(i,"catchLoc"),s=a.call(i,"finallyLoc");if(u&&s){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!s)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&a.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),P(n),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;P(n)}return o}}throw Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:I(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),g}},n}t.exports=o,t.exports.__esModule=!0,t.exports.default=t.exports},280:t=>{function e(n){return t.exports=e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports.default=t.exports,e(n)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports},666:(t,e,n)=>{function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}var o=n(111)();t.exports=o;try{regeneratorRuntime=o}catch(t){"object"===("undefined"==typeof globalThis?"undefined":r(globalThis))?globalThis.regeneratorRuntime=o:Function("r","regeneratorRuntime = r")(o)}}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,loaded:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.loaded=!0,i.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.nmd=t=>(t.paths=[],t.children||(t.children=[]),t),n.nc=void 0,(()=>{"use strict";var t=n(958),e=n.n(t);function r(t,e,n,r,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void n(t)}c.done?e(u):Promise.resolve(u).then(r,o)}function o(t){return function(){var e=this,n=arguments;return new Promise((function(o,i){var a=t.apply(e,n);function c(t){r(a,o,i,c,u,"next",t)}function u(t){r(a,o,i,c,u,"throw",t)}c(void 0)}))}}function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function a(t){var e=function(t){if("object"!=i(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var n=e.call(t,"string");if("object"!=i(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==i(e)?e:e+""}function c(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,a(r.key),r)}}var u=n(666),s=n.n(u);const l=JSON.parse('{"id":"acode.animation.runner"}');var f=n(72),p=n.n(f),d=n(825),y=n.n(d),h=n(659),v=n.n(h),m=n(56),b=n.n(m),g=n(540),x=n.n(g),w=n(113),S=n.n(w),E=n(208),j={};j.styleTagTransform=S(),j.setAttributes=b(),j.insert=v().bind(null,"head"),j.domAPI=y(),j.insertStyleElement=x(),p()(E.A,j),E.A&&E.A.locals&&E.A.locals;var A=acode.require("sidebarApps"),O=function(){return t=function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)},n=[{key:"init",value:(i=o(s().mark((function t(){return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:console.log("init"),acode.addIcon("animation",this.baseUrl+"icon.png"),A.add("animation","animation","Animation",(function(t){var n=e()("div",{className:"animation-container-108373737"}),r=e()("div",{className:"output-192772625"}),o=e()("div",{className:"inner-output-283652525"}),i=e()("div",{className:"inner-output-adjust-283652525"}),a=e()("p",{innerText:"Styles for the animation div",className:"paragraph-1928374"}),c=e()("input",{placeholder:"Styles",value:"\n  height: 50px;\n  width: 50px;\n  background: #fff;\n  border-radius: 50%;\n  ",className:"input-code-0987"}),u=e()("button",{innerText:"Apply styles",className:"button-3928"}),s=e()("input",{placeholder:"Write Keyframes",value:"\n0% {\n  transform: translateY(0);\n}\n50% {\n  transform: translateY(100px);\n}\n100% {\n  transform: translateY(0);\n}\n",className:"input-code-0987"}),l=e()("div",{className:"buttons-1928374"}),f=e()("button",{innerText:"Run",className:"button-3928"});i.append(a,c,u),r.append(o),l.append(f),n.append(r,i,s,l),t.appendChild(n),f.addEventListener("click",(function(){var t="animation".concat(Math.random().toString(36).substr(2,9)),e="@keyframes ".concat(t," { ").concat(s.value," }"),n=document.createElement("style");n.innerHTML=e,document.head.appendChild(n),o.style.animation="".concat(t," 5s infinite")})),u.addEventListener("click",(function(){o.style=c.value}))}));case 3:case"end":return t.stop()}}),t,this)}))),function(){return i.apply(this,arguments)})},{key:"destroy",value:(r=o(s().mark((function t(){return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:alert("Reopen the app to see the changes"),A.remove("animation");case 2:case"end":return t.stop()}}),t)}))),function(){return r.apply(this,arguments)})}],n&&c(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),t;var t,n,r,i}();if(window.acode){var L=new O;acode.setPluginInit(l.id,function(){var t=o(s().mark((function t(e,n,r){var o,i;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=r.cacheFileUrl,i=r.cacheFile,e.endsWith("/")||(e+="/"),L.baseUrl=e,t.next=5,L.init(n,i,o);case 5:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}()),acode.setPluginUnmount(l.id,(function(){L.destroy()}))}})()})();