"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[651],{9651:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(7294)),o=a(n(2717));function a(e){return e&&e.__esModule?e:{default:e}}const l={400:"Bad Request",404:"This page could not be found",405:"Method Not Allowed",500:"Internal Server Error"};function i({res:e,err:t}){return{statusCode:e&&e.statusCode?e.statusCode:t?t.statusCode:404}}class u extends r.default.Component{render(){const{statusCode:e,withDarkMode:t=!0}=this.props,n=this.props.title||l[e]||"An unexpected error has occurred";return r.default.createElement("div",{style:d.error},r.default.createElement(o.default,null,r.default.createElement("title",null,e?`${e}: ${n}`:"Application error: a client-side exception has occurred")),r.default.createElement("div",null,r.default.createElement("style",{dangerouslySetInnerHTML:{__html:"\n                body { margin: 0; color: #000; background: #fff; }\n                .next-error-h1 {\n                  border-right: 1px solid rgba(0, 0, 0, .3);\n                }\n                \n                "+(t?"@media (prefers-color-scheme: dark) {\n                  body { color: #fff; background: #000; }\n                  .next-error-h1 {\n                    border-right: 1px solid rgba(255, 255, 255, .3);\n                  }\n                }":"")}}),e?r.default.createElement("h1",{className:"next-error-h1",style:d.h1},e):null,r.default.createElement("div",{style:d.desc},r.default.createElement("h2",{style:d.h2},this.props.title||e?n:r.default.createElement(r.default.Fragment,null,"Application error: a client-side exception has occurred (see the browser console for more information)"),"."))))}}u.displayName="ErrorPage",u.getInitialProps=i,u.origGetInitialProps=i;const d={error:{fontFamily:'-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',height:"100vh",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},desc:{display:"inline-block",textAlign:"left",lineHeight:"49px",height:"49px",verticalAlign:"middle"},h1:{display:"inline-block",margin:0,marginRight:"20px",padding:"10px 23px 10px 0",fontSize:"24px",fontWeight:500,verticalAlign:"top"},h2:{fontSize:"14px",fontWeight:"normal",lineHeight:"inherit",margin:0,padding:0}};t.default=u},8e3:function(e,t,n){var r;Object.defineProperty(t,"__esModule",{value:!0}),t.AmpStateContext=void 0;const o=((r=n(7294))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},9470:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.isInAmpMode=function({ampFirst:e=!1,hybrid:t=!1,hasQuery:n=!1}={}){return e||t&&n}},2717:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.defaultHead=c,t.default=void 0;var r,o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=r?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n(7294)),a=(r=n(1585))&&r.__esModule?r:{default:r},l=n(8e3),i=n(5850),u=n(9470);n(9475);function d(){return d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},d.apply(this,arguments)}function s(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function c(e=!1){const t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce(((e,t)=>"string"===typeof t||"number"===typeof t?e:e.concat(t)),[])):e.concat(t)}const p=["name","httpEquiv","charSet","itemProp"];function h(e,t){return e.reduce(f,[]).reverse().concat(c(t.inAmpMode).reverse()).filter(function(){const e=new Set,t=new Set,n=new Set,r={};return o=>{let a=!0,l=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){l=!0;const t=o.key.slice(o.key.indexOf("$")+1);e.has(t)?a=!1:e.add(t)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(let e=0,t=p.length;e<t;e++){const t=p[e];if(o.props.hasOwnProperty(t))if("charSet"===t)n.has(t)?a=!1:n.add(t);else{const e=o.props[t],n=r[t]||new Set;"name"===t&&l||!n.has(e)?(n.add(e),r[t]=n):a=!1}}}return a}}()).reverse().map(((e,n)=>{const r=e.key||n;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((t=>e.props.href.startsWith(t)))){const t=d({},e.props||{});return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,o.default.cloneElement(e,t)}return o.default.cloneElement(e,{key:r})}))}var y=function({children:e}){const t=o.useContext(l.AmpStateContext),n=o.useContext(i.HeadManagerContext);return o.default.createElement(a.default,{reduceComponentsToState:h,headManager:n,inAmpMode:u.isInAmpMode(t)},e)};t.default=y,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1585:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){const{headManager:t,reduceComponentsToState:n}=e;function o(){if(t&&t.mountedInstances){const o=r.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(n(o,e))}}if(a){var u;null==t||null==(u=t.mountedInstances)||u.add(e.children),o()}return l((()=>{var n;return null==t||null==(n=t.mountedInstances)||n.add(e.children),()=>{var n;null==t||null==(n=t.mountedInstances)||n.delete(e.children)}})),l((()=>(t&&(t._pendingUpdate=o),()=>{t&&(t._pendingUpdate=o)}))),i((()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)}))),null};var r=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=o();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var l=r?Object.getOwnPropertyDescriptor(e,a):null;l&&(l.get||l.set)?Object.defineProperty(n,a,l):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(n(7294));function o(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return o=function(){return e},e}const a=!1,l=a?()=>{}:r.useLayoutEffect,i=a?()=>{}:r.useEffect}}]);