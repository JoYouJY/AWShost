import{V as S}from"./index-48143e57.js";var y={},r={};Object.defineProperty(r,"__esModule",{value:!0});r.getLocalStorage=r.getLocalStorageOrThrow=r.getCrypto=r.getCryptoOrThrow=r.getLocation=r.getLocationOrThrow=r.getNavigator=r.getNavigatorOrThrow=r.getDocument=r.getDocumentOrThrow=r.getFromWindowOrThrow=r.getFromWindow=void 0;function w(t){let e;return typeof window<"u"&&typeof window[t]<"u"&&(e=window[t]),e}r.getFromWindow=w;function m(t){const e=w(t);if(!e)throw new Error(`${t} is not defined in Window`);return e}r.getFromWindowOrThrow=m;function G(){return m("document")}r.getDocumentOrThrow=G;function H(){return w("document")}r.getDocument=H;function Q(){return m("navigator")}r.getNavigatorOrThrow=Q;function z(){return w("navigator")}r.getNavigator=z;function Y(){return m("location")}r.getLocationOrThrow=Y;function q(){return w("location")}r.getLocation=q;function Z(){return m("crypto")}r.getCryptoOrThrow=Z;function tt(){return w("crypto")}r.getCrypto=tt;function et(){return m("localStorage")}r.getLocalStorageOrThrow=et;function ot(){return w("localStorage")}r.getLocalStorage=ot;Object.defineProperty(y,"__esModule",{value:!0});var B=y.getWindowMetadata=void 0;const $=r;function rt(){let t,e;try{t=$.getDocumentOrThrow(),e=$.getLocationOrThrow()}catch{return null}function o(){const g=t.getElementsByTagName("link"),d=[];for(let l=0;l<g.length;l++){const p=g[l],O=p.getAttribute("rel");if(O&&O.toLowerCase().indexOf("icon")>-1){const s=p.getAttribute("href");if(s)if(s.toLowerCase().indexOf("https:")===-1&&s.toLowerCase().indexOf("http:")===-1&&s.indexOf("//")!==0){let T=e.protocol+"//"+e.host;if(s.indexOf("/")===0)T+=s;else{const b=e.pathname.split("/");b.pop();const X=b.join("/");T+=X+"/"+s}d.push(T)}else if(s.indexOf("//")===0){const T=e.protocol+s;d.push(T)}else d.push(s)}}return d}function n(...g){const d=t.getElementsByTagName("meta");for(let l=0;l<d.length;l++){const p=d[l],O=["itemprop","property","name"].map(s=>p.getAttribute(s)).filter(s=>s?g.includes(s):!1);if(O.length&&O){const s=p.getAttribute("content");if(s)return s}}return""}function a(){let g=n("name","og:site_name","og:title","twitter:title");return g||(g=t.title),g}function c(){return n("description","og:description","twitter:description","keywords")}const u=a(),f=c(),K=e.origin,U=o();return{description:f,url:K,icons:U,name:u}}B=y.getWindowMetadata=rt;var i={};Object.defineProperty(i,"__esModule",{value:!0});var A=i.getLocalStorage=V=i.getLocalStorageOrThrow=j=i.getCrypto=F=i.getCryptoOrThrow=R=i.getLocation=P=i.getLocationOrThrow=x=i.getNavigator=D=i.getNavigatorOrThrow=I=i.getDocument=k=i.getDocumentOrThrow=M=i.getFromWindowOrThrow=E=i.getFromWindow=void 0;function h(t){let e;return typeof window<"u"&&typeof window[t]<"u"&&(e=window[t]),e}var E=i.getFromWindow=h;function v(t){const e=h(t);if(!e)throw new Error(`${t} is not defined in Window`);return e}var M=i.getFromWindowOrThrow=v;function nt(){return v("document")}var k=i.getDocumentOrThrow=nt;function it(){return h("document")}var I=i.getDocument=it;function at(){return v("navigator")}var D=i.getNavigatorOrThrow=at;function st(){return h("navigator")}var x=i.getNavigator=st;function ct(){return v("location")}var P=i.getLocationOrThrow=ct;function ut(){return h("location")}var R=i.getLocation=ut;function gt(){return v("crypto")}var F=i.getCryptoOrThrow=gt;function ft(){return h("crypto")}var j=i.getCrypto=ft;function dt(){return v("localStorage")}var V=i.getLocalStorageOrThrow=dt;function lt(){return h("localStorage")}A=i.getLocalStorage=lt;var wt=globalThis&&globalThis.__spreadArrays||function(){for(var t=0,e=0,o=arguments.length;e<o;e++)t+=arguments[e].length;for(var n=Array(t),a=0,e=0;e<o;e++)for(var c=arguments[e],u=0,f=c.length;u<f;u++,a++)n[a]=c[u];return n},ht=function(){function t(e,o,n){this.name=e,this.version=o,this.os=n,this.type="browser"}return t}(),mt=function(){function t(e){this.version=e,this.type="node",this.name="node",this.os=S.platform}return t}(),vt=function(){function t(e,o,n,a){this.name=e,this.version=o,this.os=n,this.bot=a,this.type="bot-device"}return t}(),pt=function(){function t(){this.type="bot",this.bot=!0,this.name="bot",this.version=null,this.os=null}return t}(),Ot=function(){function t(){this.type="react-native",this.name="react-native",this.version=null,this.os=null}return t}(),Tt=/alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/,St=/(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/,C=3,yt=[["aol",/AOLShield\/([0-9\._]+)/],["edge",/Edge\/([0-9\._]+)/],["edge-ios",/EdgiOS\/([0-9\._]+)/],["yandexbrowser",/YaBrowser\/([0-9\._]+)/],["kakaotalk",/KAKAOTALK\s([0-9\.]+)/],["samsung",/SamsungBrowser\/([0-9\.]+)/],["silk",/\bSilk\/([0-9._-]+)\b/],["miui",/MiuiBrowser\/([0-9\.]+)$/],["beaker",/BeakerBrowser\/([0-9\.]+)/],["edge-chromium",/EdgA?\/([0-9\.]+)/],["chromium-webview",/(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],["chrome",/(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],["phantomjs",/PhantomJS\/([0-9\.]+)(:?\s|$)/],["crios",/CriOS\/([0-9\.]+)(:?\s|$)/],["firefox",/Firefox\/([0-9\.]+)(?:\s|$)/],["fxios",/FxiOS\/([0-9\.]+)/],["opera-mini",/Opera Mini.*Version\/([0-9\.]+)/],["opera",/Opera\/([0-9\.]+)(?:\s|$)/],["opera",/OPR\/([0-9\.]+)(:?\s|$)/],["ie",/Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],["ie",/MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],["ie",/MSIE\s(7\.0)/],["bb10",/BB10;\sTouch.*Version\/([0-9\.]+)/],["android",/Android\s([0-9\.]+)/],["ios",/Version\/([0-9\._]+).*Mobile.*Safari.*/],["safari",/Version\/([0-9\._]+).*Safari/],["facebook",/FBAV\/([0-9\.]+)/],["instagram",/Instagram\s([0-9\.]+)/],["ios-webview",/AppleWebKit\/([0-9\.]+).*Mobile/],["ios-webview",/AppleWebKit\/([0-9\.]+).*Gecko\)$/],["searchbot",Tt]],N=[["iOS",/iP(hone|od|ad)/],["Android OS",/Android/],["BlackBerry OS",/BlackBerry|BB10/],["Windows Mobile",/IEMobile/],["Amazon OS",/Kindle/],["Windows 3.11",/Win16/],["Windows 95",/(Windows 95)|(Win95)|(Windows_95)/],["Windows 98",/(Windows 98)|(Win98)/],["Windows 2000",/(Windows NT 5.0)|(Windows 2000)/],["Windows XP",/(Windows NT 5.1)|(Windows XP)/],["Windows Server 2003",/(Windows NT 5.2)/],["Windows Vista",/(Windows NT 6.0)/],["Windows 7",/(Windows NT 6.1)/],["Windows 8",/(Windows NT 6.2)/],["Windows 8.1",/(Windows NT 6.3)/],["Windows 10",/(Windows NT 10.0)/],["Windows ME",/Windows ME/],["Open BSD",/OpenBSD/],["Sun OS",/SunOS/],["Chrome OS",/CrOS/],["Linux",/(Linux)|(X11)/],["Mac OS",/(Mac_PowerPC)|(Macintosh)/],["QNX",/QNX/],["BeOS",/BeOS/],["OS/2",/OS\/2/]];function Lt(t){return t?_(t):typeof document>"u"&&typeof navigator<"u"&&navigator.product==="ReactNative"?new Ot:typeof navigator<"u"?_(navigator.userAgent):$t()}function Wt(t){return t!==""&&yt.reduce(function(e,o){var n=o[0],a=o[1];if(e)return e;var c=a.exec(t);return!!c&&[n,c]},!1)}function _(t){var e=Wt(t);if(!e)return null;var o=e[0],n=e[1];if(o==="searchbot")return new pt;var a=n[1]&&n[1].split(/[._]/).slice(0,3);a?a.length<C&&(a=wt(a,Ct(C-a.length))):a=[];var c=a.join("."),u=bt(t),f=St.exec(t);return f&&f[1]?new vt(o,c,u,f[1]):new ht(o,c,u)}function bt(t){for(var e=0,o=N.length;e<o;e++){var n=N[e],a=n[0],c=n[1],u=c.exec(t);if(u)return a}return null}function $t(){var t=typeof S<"u"&&S.version;return t?new mt(S.version.slice(1)):null}function Ct(t){for(var e=[],o=0;o<t;o++)e.push("0");return e}function J(t){return Lt(t)}function L(){const t=J();return t&&t.os?t.os:void 0}function Nt(){const t=L();return t?t.toLowerCase().includes("android"):!1}function _t(){const t=L();return t?t.toLowerCase().includes("ios")||t.toLowerCase().includes("mac")&&navigator.maxTouchPoints>1:!1}function jt(){return L()?Nt()||_t():!1}function Bt(){const t=J();return t&&t.name?t.name.toLowerCase()==="node":!1}function Vt(){return!Bt()&&!!At()}const Jt=E,Kt=M,Ut=k,Xt=I,Gt=D,At=x,Ht=P,Qt=R,zt=F,Yt=j,qt=V,W=A;function Zt(){return B()}function Et(t){if(typeof t!="string")throw new Error(`Cannot safe json parse value of type ${typeof t}`);try{return JSON.parse(t)}catch{return t}}function Mt(t){return typeof t=="string"?t:JSON.stringify(t)}const kt=Et,It=Mt;function Dt(t,e){const o=It(e),n=W();n&&n.setItem(t,o)}function te(t){let e=null,o=null;const n=W();return n&&(o=n.getItem(t)),e=o&&kt(o),e}function ee(t){const e=W();e&&e.removeItem(t)}const xt="WALLETCONNECT_DEEPLINK_CHOICE";function oe(t,e){const o=encodeURIComponent(t);return e.universalLink?`${e.universalLink}/wc?uri=${o}`:e.deepLink?`${e.deepLink}${e.deepLink.endsWith(":")?"//":"/"}wc?uri=${o}`:""}function re(t){const e=t.href.split("?")[0];Dt(xt,Object.assign(Object.assign({},t),{href:e}))}function Pt(t,e){return t.filter(o=>o.name.toLowerCase().includes(e.toLowerCase()))[0]}function ne(t,e){let o=t;return e&&(o=e.map(n=>Pt(t,n)).filter(Boolean)),o}export{Bt as A,kt as B,It as C,re as D,te as a,Zt as b,jt as c,J as d,L as e,oe as f,Qt as g,Yt as h,Vt as i,zt as j,Xt as k,Ut as l,xt as m,Jt as n,Kt as o,W as p,qt as q,ee as r,Dt as s,Ht as t,ne as u,Pt as v,At as w,Gt as x,Nt as y,_t as z};
