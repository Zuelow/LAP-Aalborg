"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[368],{843:function(e,r,t){t.d(r,{Z:function(){return i}});var n=t(2265),o={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let l=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),i=(e,r)=>{let t=(0,n.forwardRef)(({color:t="currentColor",size:i=24,strokeWidth:s=2,absoluteStrokeWidth:a,className:c="",children:u,...d},f)=>(0,n.createElement)("svg",{ref:f,...o,width:i,height:i,stroke:t,strokeWidth:a?24*Number(s)/Number(i):s,className:["lucide",`lucide-${l(e)}`,c].join(" "),...d},[...r.map(([e,r])=>(0,n.createElement)(e,r)),...Array.isArray(u)?u:[u]]));return t.displayName=`${e}`,t}},4991:function(e,r,t){t.d(r,{M:function(){return n}});function n(e,r,{checkForDefaultPrevented:t=!0}={}){return function(n){if(e?.(n),!1===t||!n.defaultPrevented)return r?.(n)}}},7533:function(e,r,t){t.d(r,{B:function(){return a}});var n=t(2265),o=t(4104),l=t(1266),i=t(9143),s=t(7437);function a(e){let r=e+"CollectionProvider",[t,a]=(0,o.b)(r),[c,u]=t(r,{collectionRef:{current:null},itemMap:new Map}),d=e=>{let{scope:r,children:t}=e,o=n.useRef(null),l=n.useRef(new Map).current;return(0,s.jsx)(c,{scope:r,itemMap:l,collectionRef:o,children:t})};d.displayName=r;let f=e+"CollectionSlot",p=n.forwardRef((e,r)=>{let{scope:t,children:n}=e,o=u(f,t),a=(0,l.e)(r,o.collectionRef);return(0,s.jsx)(i.g7,{ref:a,children:n})});p.displayName=f;let b=e+"CollectionItemSlot",m="data-radix-collection-item",g=n.forwardRef((e,r)=>{let{scope:t,children:o,...a}=e,c=n.useRef(null),d=(0,l.e)(r,c),f=u(b,t);return n.useEffect(()=>(f.itemMap.set(c,{ref:c,...a}),()=>void f.itemMap.delete(c))),(0,s.jsx)(i.g7,{[m]:"",ref:d,children:o})});return g.displayName=b,[{Provider:d,Slot:p,ItemSlot:g},function(r){let t=u(e+"CollectionConsumer",r);return n.useCallback(()=>{let e=t.collectionRef.current;if(!e)return[];let r=Array.from(e.querySelectorAll("[".concat(m,"]")));return Array.from(t.itemMap.values()).sort((e,t)=>r.indexOf(e.ref.current)-r.indexOf(t.ref.current))},[t.collectionRef,t.itemMap])},a]}},1266:function(e,r,t){t.d(r,{F:function(){return o},e:function(){return l}});var n=t(2265);function o(...e){return r=>e.forEach(e=>{"function"==typeof e?e(r):null!=e&&(e.current=r)})}function l(...e){return n.useCallback(o(...e),e)}},4104:function(e,r,t){t.d(r,{b:function(){return l}});var n=t(2265),o=t(7437);function l(e,r=[]){let t=[],l=()=>{let r=t.map(e=>n.createContext(e));return function(t){let o=t?.[e]||r;return n.useMemo(()=>({[`__scope${e}`]:{...t,[e]:o}}),[t,o])}};return l.scopeName=e,[function(r,l){let i=n.createContext(l),s=t.length;function a(r){let{scope:t,children:l,...a}=r,c=t?.[e][s]||i,u=n.useMemo(()=>a,Object.values(a));return(0,o.jsx)(c.Provider,{value:u,children:l})}return t=[...t,l],a.displayName=r+"Provider",[a,function(t,o){let a=o?.[e][s]||i,c=n.useContext(a);if(c)return c;if(void 0!==l)return l;throw Error(`\`${t}\` must be used within \`${r}\``)}]},function(...e){let r=e[0];if(1===e.length)return r;let t=()=>{let t=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let o=t.reduce((r,{useScope:t,scopeName:n})=>{let o=t(e)[`__scope${n}`];return{...r,...o}},{});return n.useMemo(()=>({[`__scope${r.scopeName}`]:o}),[o])}};return t.scopeName=r.scopeName,t}(l,...r)]}},1260:function(e,r,t){t.d(r,{I0:function(){return v},XB:function(){return f},fC:function(){return g}});var n,o=t(2265),l=t(4991),i=t(9586),s=t(1266),a=t(9830),c=t(7437),u="dismissableLayer.update",d=o.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),f=o.forwardRef((e,r)=>{var t,f;let{disableOutsidePointerEvents:p=!1,onEscapeKeyDown:g,onPointerDownOutside:v,onFocusOutside:h,onInteractOutside:y,onDismiss:w,...x}=e,k=o.useContext(d),[E,C]=o.useState(null),N=null!==(f=null==E?void 0:E.ownerDocument)&&void 0!==f?f:null===(t=globalThis)||void 0===t?void 0:t.document,[,z]=o.useState({}),j=(0,s.e)(r,e=>C(e)),O=Array.from(k.layers),[P]=[...k.layersWithOutsidePointerEventsDisabled].slice(-1),R=O.indexOf(P),S=E?O.indexOf(E):-1,M=k.layersWithOutsidePointerEventsDisabled.size>0,W=S>=R,T=function(e){var r;let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null===(r=globalThis)||void 0===r?void 0:r.document,n=(0,a.W)(e),l=o.useRef(!1),i=o.useRef(()=>{});return o.useEffect(()=>{let e=e=>{if(e.target&&!l.current){let r=function(){m("dismissableLayer.pointerDownOutside",n,o,{discrete:!0})},o={originalEvent:e};"touch"===e.pointerType?(t.removeEventListener("click",i.current),i.current=r,t.addEventListener("click",i.current,{once:!0})):r()}else t.removeEventListener("click",i.current);l.current=!1},r=window.setTimeout(()=>{t.addEventListener("pointerdown",e)},0);return()=>{window.clearTimeout(r),t.removeEventListener("pointerdown",e),t.removeEventListener("click",i.current)}},[t,n]),{onPointerDownCapture:()=>l.current=!0}}(e=>{let r=e.target,t=[...k.branches].some(e=>e.contains(r));!W||t||(null==v||v(e),null==y||y(e),e.defaultPrevented||null==w||w())},N),L=function(e){var r;let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null===(r=globalThis)||void 0===r?void 0:r.document,n=(0,a.W)(e),l=o.useRef(!1);return o.useEffect(()=>{let e=e=>{e.target&&!l.current&&m("dismissableLayer.focusOutside",n,{originalEvent:e},{discrete:!1})};return t.addEventListener("focusin",e),()=>t.removeEventListener("focusin",e)},[t,n]),{onFocusCapture:()=>l.current=!0,onBlurCapture:()=>l.current=!1}}(e=>{let r=e.target;[...k.branches].some(e=>e.contains(r))||(null==h||h(e),null==y||y(e),e.defaultPrevented||null==w||w())},N);return!function(e,r=globalThis?.document){let t=(0,a.W)(e);o.useEffect(()=>{let e=e=>{"Escape"===e.key&&t(e)};return r.addEventListener("keydown",e,{capture:!0}),()=>r.removeEventListener("keydown",e,{capture:!0})},[t,r])}(e=>{S!==k.layers.size-1||(null==g||g(e),!e.defaultPrevented&&w&&(e.preventDefault(),w()))},N),o.useEffect(()=>{if(E)return p&&(0===k.layersWithOutsidePointerEventsDisabled.size&&(n=N.body.style.pointerEvents,N.body.style.pointerEvents="none"),k.layersWithOutsidePointerEventsDisabled.add(E)),k.layers.add(E),b(),()=>{p&&1===k.layersWithOutsidePointerEventsDisabled.size&&(N.body.style.pointerEvents=n)}},[E,N,p,k]),o.useEffect(()=>()=>{E&&(k.layers.delete(E),k.layersWithOutsidePointerEventsDisabled.delete(E),b())},[E,k]),o.useEffect(()=>{let e=()=>z({});return document.addEventListener(u,e),()=>document.removeEventListener(u,e)},[]),(0,c.jsx)(i.WV.div,{...x,ref:j,style:{pointerEvents:M?W?"auto":"none":void 0,...e.style},onFocusCapture:(0,l.M)(e.onFocusCapture,L.onFocusCapture),onBlurCapture:(0,l.M)(e.onBlurCapture,L.onBlurCapture),onPointerDownCapture:(0,l.M)(e.onPointerDownCapture,T.onPointerDownCapture)})});f.displayName="DismissableLayer";var p=o.forwardRef((e,r)=>{let t=o.useContext(d),n=o.useRef(null),l=(0,s.e)(r,n);return o.useEffect(()=>{let e=n.current;if(e)return t.branches.add(e),()=>{t.branches.delete(e)}},[t.branches]),(0,c.jsx)(i.WV.div,{...e,ref:l})});function b(){let e=new CustomEvent(u);document.dispatchEvent(e)}function m(e,r,t,n){let{discrete:o}=n,l=t.originalEvent.target,s=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:t});r&&l.addEventListener(e,r,{once:!0}),o?(0,i.jH)(l,s):l.dispatchEvent(s)}p.displayName="DismissableLayerBranch";var g=f,v=p},7881:function(e,r,t){t.d(r,{h:function(){return a}});var n=t(2265),o=t(4887),l=t(9586),i=t(2618),s=t(7437),a=n.forwardRef((e,r)=>{var t,a;let{container:c,...u}=e,[d,f]=n.useState(!1);(0,i.b)(()=>f(!0),[]);let p=c||d&&(null===(a=globalThis)||void 0===a?void 0:null===(t=a.document)||void 0===t?void 0:t.body);return p?o.createPortal((0,s.jsx)(l.WV.div,{...u,ref:r}),p):null});a.displayName="Portal"},2642:function(e,r,t){t.d(r,{z:function(){return s}});var n=t(2265),o=t(4887),l=t(1266),i=t(2618),s=e=>{var r,t;let s,c;let{present:u,children:d}=e,f=function(e){var r,t;let[l,s]=n.useState(),c=n.useRef({}),u=n.useRef(e),d=n.useRef("none"),[f,p]=(r=e?"mounted":"unmounted",t={mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}},n.useReducer((e,r)=>{let n=t[e][r];return null!=n?n:e},r));return n.useEffect(()=>{let e=a(c.current);d.current="mounted"===f?e:"none"},[f]),(0,i.b)(()=>{let r=c.current,t=u.current;if(t!==e){let n=d.current,o=a(r);e?p("MOUNT"):"none"===o||(null==r?void 0:r.display)==="none"?p("UNMOUNT"):t&&n!==o?p("ANIMATION_OUT"):p("UNMOUNT"),u.current=e}},[e,p]),(0,i.b)(()=>{if(l){let e=e=>{let r=a(c.current).includes(e.animationName);e.target===l&&r&&o.flushSync(()=>p("ANIMATION_END"))},r=e=>{e.target===l&&(d.current=a(c.current))};return l.addEventListener("animationstart",r),l.addEventListener("animationcancel",e),l.addEventListener("animationend",e),()=>{l.removeEventListener("animationstart",r),l.removeEventListener("animationcancel",e),l.removeEventListener("animationend",e)}}p("ANIMATION_END")},[l,p]),{isPresent:["mounted","unmountSuspended"].includes(f),ref:n.useCallback(e=>{e&&(c.current=getComputedStyle(e)),s(e)},[])}}(u),p="function"==typeof d?d({present:f.isPresent}):n.Children.only(d),b=(0,l.e)(f.ref,(s=null===(r=Object.getOwnPropertyDescriptor(p.props,"ref"))||void 0===r?void 0:r.get)&&"isReactWarning"in s&&s.isReactWarning?p.ref:(s=null===(t=Object.getOwnPropertyDescriptor(p,"ref"))||void 0===t?void 0:t.get)&&"isReactWarning"in s&&s.isReactWarning?p.props.ref:p.props.ref||p.ref);return"function"==typeof d||f.isPresent?n.cloneElement(p,{ref:b}):null};function a(e){return(null==e?void 0:e.animationName)||"none"}s.displayName="Presence"},9586:function(e,r,t){t.d(r,{WV:function(){return s},jH:function(){return a}});var n=t(2265),o=t(4887),l=t(9143),i=t(7437),s=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,r)=>{let t=n.forwardRef((e,t)=>{let{asChild:n,...o}=e,s=n?l.g7:r;return"undefined"!=typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,i.jsx)(s,{...o,ref:t})});return t.displayName=`Primitive.${r}`,{...e,[r]:t}},{});function a(e,r){e&&o.flushSync(()=>e.dispatchEvent(r))}},9143:function(e,r,t){t.d(r,{g7:function(){return i}});var n=t(2265),o=t(1266),l=t(7437),i=n.forwardRef((e,r)=>{let{children:t,...o}=e,i=n.Children.toArray(t),a=i.find(c);if(a){let e=a.props.children,t=i.map(r=>r!==a?r:n.Children.count(e)>1?n.Children.only(null):n.isValidElement(e)?e.props.children:null);return(0,l.jsx)(s,{...o,ref:r,children:n.isValidElement(e)?n.cloneElement(e,void 0,t):null})}return(0,l.jsx)(s,{...o,ref:r,children:t})});i.displayName="Slot";var s=n.forwardRef((e,r)=>{let{children:t,...l}=e;if(n.isValidElement(t)){let e,i;let s=(e=Object.getOwnPropertyDescriptor(t.props,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning?t.ref:(e=Object.getOwnPropertyDescriptor(t,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning?t.props.ref:t.props.ref||t.ref;return n.cloneElement(t,{...function(e,r){let t={...r};for(let n in r){let o=e[n],l=r[n];/^on[A-Z]/.test(n)?o&&l?t[n]=(...e)=>{l(...e),o(...e)}:o&&(t[n]=o):"style"===n?t[n]={...o,...l}:"className"===n&&(t[n]=[o,l].filter(Boolean).join(" "))}return{...e,...t}}(l,t.props),ref:r?(0,o.F)(r,s):s})}return n.Children.count(t)>1?n.Children.only(null):null});s.displayName="SlotClone";var a=({children:e})=>(0,l.jsx)(l.Fragment,{children:e});function c(e){return n.isValidElement(e)&&e.type===a}},9830:function(e,r,t){t.d(r,{W:function(){return o}});var n=t(2265);function o(e){let r=n.useRef(e);return n.useEffect(()=>{r.current=e}),n.useMemo(()=>(...e)=>r.current?.(...e),[])}},9310:function(e,r,t){t.d(r,{T:function(){return l}});var n=t(2265),o=t(9830);function l({prop:e,defaultProp:r,onChange:t=()=>{}}){let[l,i]=function({defaultProp:e,onChange:r}){let t=n.useState(e),[l]=t,i=n.useRef(l),s=(0,o.W)(r);return n.useEffect(()=>{i.current!==l&&(s(l),i.current=l)},[l,i,s]),t}({defaultProp:r,onChange:t}),s=void 0!==e,a=s?e:l,c=(0,o.W)(t);return[a,n.useCallback(r=>{if(s){let t="function"==typeof r?r(e):r;t!==e&&c(t)}else i(r)},[s,e,i,c])]}},2618:function(e,r,t){t.d(r,{b:function(){return o}});var n=t(2265),o=globalThis?.document?n.useLayoutEffect:()=>{}},1780:function(e,r,t){t.d(r,{T:function(){return i}});var n=t(2265),o=t(9586),l=t(7437),i=n.forwardRef((e,r)=>(0,l.jsx)(o.WV.span,{...e,ref:r,style:{position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal",...e.style}}));i.displayName="VisuallyHidden"},3167:function(e,r,t){t.d(r,{W:function(){return n}});function n(){for(var e,r,t=0,n="",o=arguments.length;t<o;t++)(e=arguments[t])&&(r=function e(r){var t,n,o="";if("string"==typeof r||"number"==typeof r)o+=r;else if("object"==typeof r){if(Array.isArray(r)){var l=r.length;for(t=0;t<l;t++)r[t]&&(n=e(r[t]))&&(o&&(o+=" "),o+=n)}else for(n in r)r[n]&&(o&&(o+=" "),o+=n)}return o}(e))&&(n&&(n+=" "),n+=r);return n}},1367:function(e,r,t){t.d(r,{m6:function(){return D}});let n=/^\[(.+)\]$/;function o(e,r){let t=e;return r.split("-").forEach(e=>{t.nextPart.has(e)||t.nextPart.set(e,{nextPart:new Map,validators:[]}),t=t.nextPart.get(e)}),t}let l=/\s+/;function i(){let e,r,t=0,n="";for(;t<arguments.length;)(e=arguments[t++])&&(r=function e(r){let t;if("string"==typeof r)return r;let n="";for(let o=0;o<r.length;o++)r[o]&&(t=e(r[o]))&&(n&&(n+=" "),n+=t);return n}(e))&&(n&&(n+=" "),n+=r);return n}function s(e){let r=r=>r[e]||[];return r.isThemeGetter=!0,r}let a=/^\[(?:([a-z-]+):)?(.+)\]$/i,c=/^\d+\/\d+$/,u=new Set(["px","full","screen"]),d=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,f=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,p=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,b=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,m=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;function g(e){return h(e)||u.has(e)||c.test(e)}function v(e){return S(e,"length",M)}function h(e){return!!e&&!Number.isNaN(Number(e))}function y(e){return S(e,"number",h)}function w(e){return!!e&&Number.isInteger(Number(e))}function x(e){return e.endsWith("%")&&h(e.slice(0,-1))}function k(e){return a.test(e)}function E(e){return d.test(e)}let C=new Set(["length","size","percentage"]);function N(e){return S(e,C,W)}function z(e){return S(e,"position",W)}let j=new Set(["image","url"]);function O(e){return S(e,j,L)}function P(e){return S(e,"",T)}function R(){return!0}function S(e,r,t){let n=a.exec(e);return!!n&&(n[1]?"string"==typeof r?n[1]===r:r.has(n[1]):t(n[2]))}function M(e){return f.test(e)&&!p.test(e)}function W(){return!1}function T(e){return b.test(e)}function L(e){return m.test(e)}let D=function(e){let r,t,s;let a=function(l){var i;return t=(r={cache:function(e){if(e<1)return{get:()=>void 0,set:()=>{}};let r=0,t=new Map,n=new Map;function o(o,l){t.set(o,l),++r>e&&(r=0,n=t,t=new Map)}return{get(e){let r=t.get(e);return void 0!==r?r:void 0!==(r=n.get(e))?(o(e,r),r):void 0},set(e,r){t.has(e)?t.set(e,r):o(e,r)}}}((i=[].reduce((e,r)=>r(e),e())).cacheSize),splitModifiers:function(e){let r=e.separator,t=1===r.length,n=r[0],o=r.length;return function(e){let l;let i=[],s=0,a=0;for(let c=0;c<e.length;c++){let u=e[c];if(0===s){if(u===n&&(t||e.slice(c,c+o)===r)){i.push(e.slice(a,c)),a=c+o;continue}if("/"===u){l=c;continue}}"["===u?s++:"]"===u&&s--}let c=0===i.length?e:e.substring(a),u=c.startsWith("!"),d=u?c.substring(1):c;return{modifiers:i,hasImportantModifier:u,baseClassName:d,maybePostfixModifierPosition:l&&l>a?l-a:void 0}}}(i),...function(e){let r=function(e){var r;let{theme:t,prefix:n}=e,l={nextPart:new Map,validators:[]};return(r=Object.entries(e.classGroups),n?r.map(([e,r])=>[e,r.map(e=>"string"==typeof e?n+e:"object"==typeof e?Object.fromEntries(Object.entries(e).map(([e,r])=>[n+e,r])):e)]):r).forEach(([e,r])=>{(function e(r,t,n,l){r.forEach(r=>{if("string"==typeof r){(""===r?t:o(t,r)).classGroupId=n;return}if("function"==typeof r){if(r.isThemeGetter){e(r(l),t,n,l);return}t.validators.push({validator:r,classGroupId:n});return}Object.entries(r).forEach(([r,i])=>{e(i,o(t,r),n,l)})})})(r,l,e,t)}),l}(e),{conflictingClassGroups:t,conflictingClassGroupModifiers:l}=e;return{getClassGroupId:function(e){let t=e.split("-");return""===t[0]&&1!==t.length&&t.shift(),function e(r,t){if(0===r.length)return t.classGroupId;let n=r[0],o=t.nextPart.get(n),l=o?e(r.slice(1),o):void 0;if(l)return l;if(0===t.validators.length)return;let i=r.join("-");return t.validators.find(({validator:e})=>e(i))?.classGroupId}(t,r)||function(e){if(n.test(e)){let r=n.exec(e)[1],t=r?.substring(0,r.indexOf(":"));if(t)return"arbitrary.."+t}}(e)},getConflictingClassGroupIds:function(e,r){let n=t[e]||[];return r&&l[e]?[...n,...l[e]]:n}}}(i)}).cache.get,s=r.cache.set,a=c,c(l)};function c(e){let n=t(e);if(n)return n;let o=function(e,r){let{splitModifiers:t,getClassGroupId:n,getConflictingClassGroupIds:o}=r,i=new Set;return e.trim().split(l).map(e=>{let{modifiers:r,hasImportantModifier:o,baseClassName:l,maybePostfixModifierPosition:i}=t(e),s=n(i?l.substring(0,i):l),a=!!i;if(!s){if(!i||!(s=n(l)))return{isTailwindClass:!1,originalClassName:e};a=!1}let c=(function(e){if(e.length<=1)return e;let r=[],t=[];return e.forEach(e=>{"["===e[0]?(r.push(...t.sort(),e),t=[]):t.push(e)}),r.push(...t.sort()),r})(r).join(":");return{isTailwindClass:!0,modifierId:o?c+"!":c,classGroupId:s,originalClassName:e,hasPostfixModifier:a}}).reverse().filter(e=>{if(!e.isTailwindClass)return!0;let{modifierId:r,classGroupId:t,hasPostfixModifier:n}=e,l=r+t;return!i.has(l)&&(i.add(l),o(t,n).forEach(e=>i.add(r+e)),!0)}).reverse().map(e=>e.originalClassName).join(" ")}(e,r);return s(e,o),o}return function(){return a(i.apply(null,arguments))}}(function(){let e=s("colors"),r=s("spacing"),t=s("blur"),n=s("brightness"),o=s("borderColor"),l=s("borderRadius"),i=s("borderSpacing"),a=s("borderWidth"),c=s("contrast"),u=s("grayscale"),d=s("hueRotate"),f=s("invert"),p=s("gap"),b=s("gradientColorStops"),m=s("gradientColorStopPositions"),C=s("inset"),j=s("margin"),S=s("opacity"),M=s("padding"),W=s("saturate"),T=s("scale"),L=s("sepia"),D=s("skew"),A=s("space"),I=s("translate"),$=()=>["auto","contain","none"],_=()=>["auto","hidden","clip","visible","scroll"],G=()=>["auto",k,r],U=()=>[k,r],V=()=>["",g,v],B=()=>["auto",h,k],F=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],q=()=>["solid","dashed","dotted","double","none"],H=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],Z=()=>["start","end","center","between","around","evenly","stretch"],X=()=>["","0",k],J=()=>["auto","avoid","all","avoid-page","page","left","right","column"],K=()=>[h,y],Q=()=>[h,k];return{cacheSize:500,separator:":",theme:{colors:[R],spacing:[g,v],blur:["none","",E,k],brightness:K(),borderColor:[e],borderRadius:["none","","full",E,k],borderSpacing:U(),borderWidth:V(),contrast:K(),grayscale:X(),hueRotate:Q(),invert:X(),gap:U(),gradientColorStops:[e],gradientColorStopPositions:[x,v],inset:G(),margin:G(),opacity:K(),padding:U(),saturate:K(),scale:K(),sepia:X(),skew:Q(),space:U(),translate:U()},classGroups:{aspect:[{aspect:["auto","square","video",k]}],container:["container"],columns:[{columns:[E]}],"break-after":[{"break-after":J()}],"break-before":[{"break-before":J()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...F(),k]}],overflow:[{overflow:_()}],"overflow-x":[{"overflow-x":_()}],"overflow-y":[{"overflow-y":_()}],overscroll:[{overscroll:$()}],"overscroll-x":[{"overscroll-x":$()}],"overscroll-y":[{"overscroll-y":$()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[C]}],"inset-x":[{"inset-x":[C]}],"inset-y":[{"inset-y":[C]}],start:[{start:[C]}],end:[{end:[C]}],top:[{top:[C]}],right:[{right:[C]}],bottom:[{bottom:[C]}],left:[{left:[C]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",w,k]}],basis:[{basis:G()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",k]}],grow:[{grow:X()}],shrink:[{shrink:X()}],order:[{order:["first","last","none",w,k]}],"grid-cols":[{"grid-cols":[R]}],"col-start-end":[{col:["auto",{span:["full",w,k]},k]}],"col-start":[{"col-start":B()}],"col-end":[{"col-end":B()}],"grid-rows":[{"grid-rows":[R]}],"row-start-end":[{row:["auto",{span:[w,k]},k]}],"row-start":[{"row-start":B()}],"row-end":[{"row-end":B()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",k]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",k]}],gap:[{gap:[p]}],"gap-x":[{"gap-x":[p]}],"gap-y":[{"gap-y":[p]}],"justify-content":[{justify:["normal",...Z()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...Z(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...Z(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[M]}],px:[{px:[M]}],py:[{py:[M]}],ps:[{ps:[M]}],pe:[{pe:[M]}],pt:[{pt:[M]}],pr:[{pr:[M]}],pb:[{pb:[M]}],pl:[{pl:[M]}],m:[{m:[j]}],mx:[{mx:[j]}],my:[{my:[j]}],ms:[{ms:[j]}],me:[{me:[j]}],mt:[{mt:[j]}],mr:[{mr:[j]}],mb:[{mb:[j]}],ml:[{ml:[j]}],"space-x":[{"space-x":[A]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[A]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",k,r]}],"min-w":[{"min-w":[k,r,"min","max","fit"]}],"max-w":[{"max-w":[k,r,"none","full","min","max","fit","prose",{screen:[E]},E]}],h:[{h:[k,r,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[k,r,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[k,r,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[k,r,"auto","min","max","fit"]}],"font-size":[{text:["base",E,v]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",y]}],"font-family":[{font:[R]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",k]}],"line-clamp":[{"line-clamp":["none",h,y]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",g,k]}],"list-image":[{"list-image":["none",k]}],"list-style-type":[{list:["none","disc","decimal",k]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[S]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[S]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...q(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",g,v]}],"underline-offset":[{"underline-offset":["auto",g,k]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:U()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",k]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",k]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[S]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...F(),z]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",N]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},O]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[m]}],"gradient-via-pos":[{via:[m]}],"gradient-to-pos":[{to:[m]}],"gradient-from":[{from:[b]}],"gradient-via":[{via:[b]}],"gradient-to":[{to:[b]}],rounded:[{rounded:[l]}],"rounded-s":[{"rounded-s":[l]}],"rounded-e":[{"rounded-e":[l]}],"rounded-t":[{"rounded-t":[l]}],"rounded-r":[{"rounded-r":[l]}],"rounded-b":[{"rounded-b":[l]}],"rounded-l":[{"rounded-l":[l]}],"rounded-ss":[{"rounded-ss":[l]}],"rounded-se":[{"rounded-se":[l]}],"rounded-ee":[{"rounded-ee":[l]}],"rounded-es":[{"rounded-es":[l]}],"rounded-tl":[{"rounded-tl":[l]}],"rounded-tr":[{"rounded-tr":[l]}],"rounded-br":[{"rounded-br":[l]}],"rounded-bl":[{"rounded-bl":[l]}],"border-w":[{border:[a]}],"border-w-x":[{"border-x":[a]}],"border-w-y":[{"border-y":[a]}],"border-w-s":[{"border-s":[a]}],"border-w-e":[{"border-e":[a]}],"border-w-t":[{"border-t":[a]}],"border-w-r":[{"border-r":[a]}],"border-w-b":[{"border-b":[a]}],"border-w-l":[{"border-l":[a]}],"border-opacity":[{"border-opacity":[S]}],"border-style":[{border:[...q(),"hidden"]}],"divide-x":[{"divide-x":[a]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[a]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[S]}],"divide-style":[{divide:q()}],"border-color":[{border:[o]}],"border-color-x":[{"border-x":[o]}],"border-color-y":[{"border-y":[o]}],"border-color-t":[{"border-t":[o]}],"border-color-r":[{"border-r":[o]}],"border-color-b":[{"border-b":[o]}],"border-color-l":[{"border-l":[o]}],"divide-color":[{divide:[o]}],"outline-style":[{outline:["",...q()]}],"outline-offset":[{"outline-offset":[g,k]}],"outline-w":[{outline:[g,v]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:V()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[S]}],"ring-offset-w":[{"ring-offset":[g,v]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",E,P]}],"shadow-color":[{shadow:[R]}],opacity:[{opacity:[S]}],"mix-blend":[{"mix-blend":[...H(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":H()}],filter:[{filter:["","none"]}],blur:[{blur:[t]}],brightness:[{brightness:[n]}],contrast:[{contrast:[c]}],"drop-shadow":[{"drop-shadow":["","none",E,k]}],grayscale:[{grayscale:[u]}],"hue-rotate":[{"hue-rotate":[d]}],invert:[{invert:[f]}],saturate:[{saturate:[W]}],sepia:[{sepia:[L]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[t]}],"backdrop-brightness":[{"backdrop-brightness":[n]}],"backdrop-contrast":[{"backdrop-contrast":[c]}],"backdrop-grayscale":[{"backdrop-grayscale":[u]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[d]}],"backdrop-invert":[{"backdrop-invert":[f]}],"backdrop-opacity":[{"backdrop-opacity":[S]}],"backdrop-saturate":[{"backdrop-saturate":[W]}],"backdrop-sepia":[{"backdrop-sepia":[L]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[i]}],"border-spacing-x":[{"border-spacing-x":[i]}],"border-spacing-y":[{"border-spacing-y":[i]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",k]}],duration:[{duration:Q()}],ease:[{ease:["linear","in","out","in-out",k]}],delay:[{delay:Q()}],animate:[{animate:["none","spin","ping","pulse","bounce",k]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[T]}],"scale-x":[{"scale-x":[T]}],"scale-y":[{"scale-y":[T]}],rotate:[{rotate:[w,k]}],"translate-x":[{"translate-x":[I]}],"translate-y":[{"translate-y":[I]}],"skew-x":[{"skew-x":[D]}],"skew-y":[{"skew-y":[D]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",k]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",k]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":U()}],"scroll-mx":[{"scroll-mx":U()}],"scroll-my":[{"scroll-my":U()}],"scroll-ms":[{"scroll-ms":U()}],"scroll-me":[{"scroll-me":U()}],"scroll-mt":[{"scroll-mt":U()}],"scroll-mr":[{"scroll-mr":U()}],"scroll-mb":[{"scroll-mb":U()}],"scroll-ml":[{"scroll-ml":U()}],"scroll-p":[{"scroll-p":U()}],"scroll-px":[{"scroll-px":U()}],"scroll-py":[{"scroll-py":U()}],"scroll-ps":[{"scroll-ps":U()}],"scroll-pe":[{"scroll-pe":U()}],"scroll-pt":[{"scroll-pt":U()}],"scroll-pr":[{"scroll-pr":U()}],"scroll-pb":[{"scroll-pb":U()}],"scroll-pl":[{"scroll-pl":U()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",k]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[g,v,y]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}})}}]);