import{X as C,Y as A,$ as y,a0 as d,a1 as h,a2 as k,a3 as D,a4 as L,a5 as N,a6 as P,a7 as B,a8 as S,a9 as H,aa as K,ab as w,ac as Q,ad as G,ae as J,af as O,ag as Y,ah as X,ai as W,aj as V}from"./index-48143e57.js";import{al as Ue,aq as De,am as Pe,an as Be,ar as He,as as Ke,ay as Qe,ax as Ge,az as Je,aA as Ye,at as Xe,ap as $e,au as Ze,av as _e,aB as ea,aC as aa,aD as ta,aE as na,ak as ra,ao as ia,aF as sa,aw as ua,aG as oa,aH as ca,aI as la,aJ as fa,aK as ma,aL as da,aM as ha}from"./index-48143e57.js";import{A as $,a as Z,c as _,n as ee}from"./zipWith-48ca8d71.js";import{d as pa,C as ga,e as Aa,N as ba,b as ya,S as wa,T as Fa,j as Ia,k as xa,l as Ea,m as qa,p as Ta,q as Sa,s as ka,u as Oa,v as Wa,f as Ma,w as Ca,x as La,y as Na,B as Va,D as ja,E as za,F as Ra,G as Ua,H as Da,I as Pa,J as Ba,K as Ha,L as Ka,M as Qa,O as Ga,P as Ja,Q as Ya,R as Xa,U as $a,V as Za,W as _a,X as et,Y as at,Z as tt,a4 as nt,_ as rt,$ as it,i as st,a0 as ut,a1 as ot,a2 as ct,a3 as lt,a5 as ft,a6 as mt,a7 as dt,a8 as ht,a9 as vt,o as pt,g as gt,aa as At,ab as bt,ac as yt,ad as wt,ae as Ft,af as It,r as xt,ag as Et,ah as qt,am as Tt,ai as St,aj as kt,ak as Ot,al as Wt,an as Mt,ao as Ct,ap as Lt,aq as Nt,ar as Vt,as as jt,at as zt,au as Rt,av as Ut,aw as Dt,ax as Pt,ay as Bt,az as Ht,aA as Kt,aB as Qt,aC as Gt,t as Jt,aD as Yt,aE as Xt,aF as $t,aG as Zt,h as _t,aH as en,aI as an,aJ as tn,aK as nn,aL as rn,aM as sn,aN as un,z as on,aO as cn,aP as ln}from"./zipWith-48ca8d71.js";import{A as x,a as E}from"./skip-282839d4.js";import{S as mn,b as dn,c as hn,d as vn,s as pn}from"./skip-282839d4.js";import{m as An}from"./merge-6738b46b.js";var j={now:function(){return(j.delegate||performance).now()},delegate:void 0},p={schedule:function(n){var t=requestAnimationFrame,e=cancelAnimationFrame,r=p.delegate;r&&(t=r.requestAnimationFrame,e=r.cancelAnimationFrame);var a=t(function(i){e=void 0,n(i)});return new C(function(){return e==null?void 0:e(a)})},requestAnimationFrame:function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];var e=p.delegate;return((e==null?void 0:e.requestAnimationFrame)||requestAnimationFrame).apply(void 0,A([],y(n)))},cancelAnimationFrame:function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];var e=p.delegate;return((e==null?void 0:e.cancelAnimationFrame)||cancelAnimationFrame).apply(void 0,A([],y(n)))},delegate:void 0};function ye(n){return n?z(n):ae}function z(n){return new d(function(t){var e=n||j,r=e.now(),a=0,i=function(){t.closed||(a=p.requestAnimationFrame(function(s){a=0;var u=e.now();t.next({timestamp:n?u:s,elapsed:u-r}),i()}))};return i(),function(){a&&p.cancelAnimationFrame(a)}})}var ae=z(),te=1,q,T={};function M(n){return n in T?(delete T[n],!0):!1}var R={setImmediate:function(n){var t=te++;return T[t]=!0,q||(q=Promise.resolve()),q.then(function(){return M(t)&&n()}),t},clearImmediate:function(n){M(n)}},ne=R.setImmediate,re=R.clearImmediate,F={setImmediate:function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];var e=F.delegate;return((e==null?void 0:e.setImmediate)||ne).apply(void 0,A([],y(n)))},clearImmediate:function(n){var t=F.delegate;return((t==null?void 0:t.clearImmediate)||re)(n)},delegate:void 0},ie=function(n){h(t,n);function t(e,r){var a=n.call(this,e,r)||this;return a.scheduler=e,a.work=r,a}return t.prototype.requestAsyncId=function(e,r,a){return a===void 0&&(a=0),a!==null&&a>0?n.prototype.requestAsyncId.call(this,e,r,a):(e.actions.push(this),e._scheduled||(e._scheduled=F.setImmediate(e.flush.bind(e,void 0))))},t.prototype.recycleAsyncId=function(e,r,a){var i;if(a===void 0&&(a=0),a!=null?a>0:this.delay>0)return n.prototype.recycleAsyncId.call(this,e,r,a);var s=e.actions;r!=null&&((i=s[s.length-1])===null||i===void 0?void 0:i.id)!==r&&(F.clearImmediate(r),e._scheduled=void 0)},t}(x),se=function(n){h(t,n);function t(){return n!==null&&n.apply(this,arguments)||this}return t.prototype.flush=function(e){this._active=!0;var r=this._scheduled;this._scheduled=void 0;var a=this.actions,i;e=e||a.shift();do if(i=e.execute(e.state,e.delay))break;while((e=a[0])&&e.id===r&&a.shift());if(this._active=!1,i){for(;(e=a[0])&&e.id===r&&a.shift();)e.unsubscribe();throw i}},t}(E),ue=new se(ie),we=ue,oe=function(n){h(t,n);function t(e,r){var a=n.call(this,e,r)||this;return a.scheduler=e,a.work=r,a}return t.prototype.schedule=function(e,r){return r===void 0&&(r=0),r>0?n.prototype.schedule.call(this,e,r):(this.delay=r,this.state=e,this.scheduler.flush(this),this)},t.prototype.execute=function(e,r){return r>0||this.closed?n.prototype.execute.call(this,e,r):this._execute(e,r)},t.prototype.requestAsyncId=function(e,r,a){return a===void 0&&(a=0),a!=null&&a>0||a==null&&this.delay>0?n.prototype.requestAsyncId.call(this,e,r,a):(e.flush(this),0)},t}(x),ce=function(n){h(t,n);function t(){return n!==null&&n.apply(this,arguments)||this}return t}(E),le=new ce(oe),Fe=le,fe=function(n){h(t,n);function t(e,r){var a=n.call(this,e,r)||this;return a.scheduler=e,a.work=r,a}return t.prototype.requestAsyncId=function(e,r,a){return a===void 0&&(a=0),a!==null&&a>0?n.prototype.requestAsyncId.call(this,e,r,a):(e.actions.push(this),e._scheduled||(e._scheduled=p.requestAnimationFrame(function(){return e.flush(void 0)})))},t.prototype.recycleAsyncId=function(e,r,a){var i;if(a===void 0&&(a=0),a!=null?a>0:this.delay>0)return n.prototype.recycleAsyncId.call(this,e,r,a);var s=e.actions;r!=null&&((i=s[s.length-1])===null||i===void 0?void 0:i.id)!==r&&(p.cancelAnimationFrame(r),e._scheduled=void 0)},t}(x),me=function(n){h(t,n);function t(){return n!==null&&n.apply(this,arguments)||this}return t.prototype.flush=function(e){this._active=!0;var r=this._scheduled;this._scheduled=void 0;var a=this.actions,i;e=e||a.shift();do if(i=e.execute(e.state,e.delay))break;while((e=a[0])&&e.id===r&&a.shift());if(this._active=!1,i){for(;(e=a[0])&&e.id===r&&a.shift();)e.unsubscribe();throw i}},t}(E),de=new me(fe),Ie=de,xe=function(n){h(t,n);function t(e,r){e===void 0&&(e=he),r===void 0&&(r=1/0);var a=n.call(this,e,function(){return a.frame})||this;return a.maxFrames=r,a.frame=0,a.index=-1,a}return t.prototype.flush=function(){for(var e=this,r=e.actions,a=e.maxFrames,i,s;(s=r[0])&&s.delay<=a&&(r.shift(),this.frame=s.delay,!(i=s.execute(s.state,s.delay))););if(i){for(;s=r.shift();)s.unsubscribe();throw i}},t.frameTimeFactor=10,t}(E),he=function(n){h(t,n);function t(e,r,a){a===void 0&&(a=e.index+=1);var i=n.call(this,e,r)||this;return i.scheduler=e,i.work=r,i.index=a,i.active=!0,i.index=e.index=a,i}return t.prototype.schedule=function(e,r){if(r===void 0&&(r=0),Number.isFinite(r)){if(!this.id)return n.prototype.schedule.call(this,e,r);this.active=!1;var a=new t(this.scheduler,this.work);return this.add(a),a.schedule(e,r)}else return C.EMPTY},t.prototype.requestAsyncId=function(e,r,a){a===void 0&&(a=0),this.delay=e.frame+a;var i=e.actions;return i.push(this),i.sort(t.sortActions),1},t.prototype.recycleAsyncId=function(e,r,a){},t.prototype._execute=function(e,r){if(this.active===!0)return n.prototype._execute.call(this,e,r)},t.sortActions=function(e,r){return e.delay===r.delay?e.index===r.index?0:e.index>r.index?1:-1:e.delay>r.delay?1:-1},t}(x);function Ee(n){return!!n&&(n instanceof d||k(n.lift)&&k(n.subscribe))}function qe(n,t){var e=typeof t=="object";return new Promise(function(r,a){var i=!1,s;n.subscribe({next:function(u){s=u,i=!0},error:a,complete:function(){i?r(s):e?r(t.defaultValue):a(new D)}})})}function I(n,t,e,r){if(e)if(L(e))r=e;else return function(){for(var a=[],i=0;i<arguments.length;i++)a[i]=arguments[i];return I(n,t,r).apply(this,a).pipe(N(e))};return r?function(){for(var a=[],i=0;i<arguments.length;i++)a[i]=arguments[i];return I(n,t).apply(this,a).pipe(P(r),B(r))}:function(){for(var a=this,i=[],s=0;s<arguments.length;s++)i[s]=arguments[s];var u=new $,o=!0;return new d(function(m){var c=u.subscribe(m);if(o){o=!1;var l=!1,b=!1;t.apply(a,A(A([],y(i)),[function(){for(var f=[],v=0;v<arguments.length;v++)f[v]=arguments[v];if(n){var g=f.shift();if(g!=null){u.error(g);return}}u.next(1<f.length?f:f[0]),b=!0,l&&u.complete()}])),b&&u.complete(),l=!0}return c})}}function Te(n,t,e){return I(!1,n,t,e)}function Se(n,t,e){return I(!0,n,t,e)}var ve={connector:function(){return new H},resetOnDisconnect:!0};function ke(n,t){t===void 0&&(t=ve);var e=null,r=t.connector,a=t.resetOnDisconnect,i=a===void 0?!0:a,s=r(),u=new d(function(o){return s.subscribe(o)});return u.connect=function(){return(!e||e.closed)&&(e=S(function(){return n}).subscribe(s),i&&e.add(function(){return s=r()})),e},u}function Oe(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];var e=K(n),r=Z(n),a=r.args,i=r.keys,s=new d(function(u){var o=a.length;if(!o){u.complete();return}for(var m=new Array(o),c=o,l=o,b=function(v){var g=!1;w(a[v]).subscribe(Q(u,function(U){g||(g=!0,l--),m[v]=U},function(){return c--},void 0,function(){(!c||!g)&&(l||u.next(i?_(i,m):m),u.complete())}))},f=0;f<o;f++)b(f)});return e?s.pipe(N(e)):s}function We(n,t,e,r,a){var i,s,u,o;arguments.length===1?(i=n,o=i.initialState,t=i.condition,e=i.iterate,s=i.resultSelector,u=s===void 0?O:s,a=i.scheduler):(o=n,!r||L(r)?(u=O,a=r):u=r);function m(){var c;return J(this,function(l){switch(l.label){case 0:c=o,l.label=1;case 1:return!t||t(c)?[4,u(c)]:[3,4];case 2:l.sent(),l.label=3;case 3:return c=e(c),[3,1];case 4:return[2]}})}return S(a?function(){return G(m(),a)}:m)}function Me(n,t,e){return S(function(){return n()?t:e})}var pe=new d(Y);function Ce(){return pe}function Le(n,t){return X(Object.entries(n),t)}function Ne(n,t,e){return[W(t,e)(w(n)),W(ee(t,e))(w(n))]}function Ve(n,t,e){if(t==null&&(t=n,n=0),t<=0)return V;var r=t+n;return new d(e?function(a){var i=n;return e.schedule(function(){i<r?(a.next(i++),this.schedule()):a.complete()})}:function(a){for(var i=n;i<r&&!a.closed;)a.next(i++);a.complete()})}function je(n,t){return new d(function(e){var r=n(),a=t(r),i=a?w(a):V;return i.subscribe(e),function(){r&&r.unsubscribe()}})}export{pa as ArgumentOutOfRangeError,$ as AsyncSubject,Ue as BehaviorSubject,ga as ConnectableObservable,V as EMPTY,D as EmptyError,pe as NEVER,Aa as NotFoundError,ba as Notification,ya as NotificationKind,De as ObjectUnsubscribedError,d as Observable,Pe as ReplaySubject,mn as Scheduler,wa as SequenceError,H as Subject,Be as Subscriber,C as Subscription,Fa as TimeoutError,He as UnsubscriptionError,he as VirtualAction,xe as VirtualTimeScheduler,Ie as animationFrame,de as animationFrameScheduler,ye as animationFrames,we as asap,ue as asapScheduler,dn as async,hn as asyncScheduler,Ia as audit,xa as auditTime,Te as bindCallback,Se as bindNodeCallback,Ea as buffer,qa as bufferCount,Ta as bufferTime,Sa as bufferToggle,ka as bufferWhen,Oa as catchError,Wa as combineAll,Ma as combineLatest,Ca as combineLatestAll,La as combineLatestWith,Ke as concat,Qe as concatAll,Na as concatMap,Va as concatMapTo,ja as concatWith,Ge as config,za as connect,ke as connectable,Ra as count,Ua as debounce,vn as debounceTime,Da as defaultIfEmpty,S as defer,Pa as delay,Ba as delayWhen,Ha as dematerialize,Ka as distinct,Je as distinctUntilChanged,Ye as distinctUntilKeyChanged,Qa as elementAt,Xe as empty,Ga as endWith,Ja as every,Ya as exhaust,Xa as exhaustAll,$a as exhaustMap,Za as expand,W as filter,_a as finalize,et as find,at as findIndex,tt as first,$e as firstValueFrom,nt as flatMap,Oe as forkJoin,X as from,Ze as fromEvent,_e as fromEventPattern,We as generate,rt as groupBy,O as identity,it as ignoreElements,Me as iif,st as interval,ut as isEmpty,Ee as isObservable,ot as last,qe as lastValueFrom,ea as map,aa as mapTo,ct as materialize,lt as max,An as merge,ta as mergeAll,na as mergeMap,ft as mergeMapTo,mt as mergeScan,dt as mergeWith,ht as min,vt as multicast,Ce as never,Y as noop,ra as observable,B as observeOn,pt as of,gt as onErrorResumeNext,At as onErrorResumeNextWith,Le as pairs,bt as pairwise,Ne as partition,ia as pipe,sa as pluck,yt as publish,wt as publishBehavior,Ft as publishLast,It as publishReplay,Fe as queue,le as queueScheduler,xt as race,Et as raceWith,Ve as range,qt as reduce,Tt as refCount,St as repeat,kt as repeatWhen,Ot as retry,Wt as retryWhen,Mt as sample,Ct as sampleTime,Lt as scan,ua as scheduled,Nt as sequenceEqual,oa as share,ca as shareReplay,Vt as single,pn as skip,jt as skipLast,zt as skipUntil,Rt as skipWhile,la as startWith,P as subscribeOn,Ut as switchAll,fa as switchMap,Dt as switchMapTo,Pt as switchScan,ma as take,Bt as takeLast,da as takeUntil,Ht as takeWhile,Kt as tap,Qt as throttle,Gt as throttleTime,Jt as throwError,Yt as throwIfEmpty,Xt as timeInterval,$t as timeout,Zt as timeoutWith,_t as timer,en as timestamp,an as toArray,je as using,tn as window,nn as windowCount,rn as windowTime,sn as windowToggle,un as windowWhen,ha as withLatestFrom,on as zip,cn as zipAll,ln as zipWith};
