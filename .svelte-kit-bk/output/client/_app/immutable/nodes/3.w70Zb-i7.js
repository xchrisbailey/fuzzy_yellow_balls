import{s as V,f as g,a as E,g as b,h as A,X as N,c as L,d as P,j as o,i as x,A as p,W as $,H as z,O as Y,r as F,J as Z,R,l as W,m as X,n as G}from"../chunks/scheduler.t4ki4vww.js";import{S as K,i as Q,b as ee,d as te,m as ae,a as se,t as ne,e as le}from"../chunks/index.Hesyyt9I.js";import{g as ie,a as re}from"../chunks/forms.gowbjPrN.js";import{s as oe}from"../chunks/index.XRI0IOYQ.js";function D(n){let e,t=n[0].email+"",l;return{c(){e=g("span"),l=W(t),this.h()},l(a){e=b(a,"SPAN",{class:!0});var s=A(e);l=X(s,t),s.forEach(P),this.h()},h(){o(e,"class","text-sm text-rose-500")},m(a,s){x(a,e,s),p(e,l)},p(a,s){s&1&&t!==(t=a[0].email+"")&&G(l,t)},d(a){a&&P(e)}}}function J(n){let e,t=n[0].password+"",l;return{c(){e=g("span"),l=W(t),this.h()},l(a){e=b(a,"SPAN",{class:!0});var s=A(e);l=X(s,t),s.forEach(P),this.h()},h(){o(e,"class","text-sm text-rose-500")},m(a,s){x(a,e,s),p(e,l)},p(a,s){s&1&&t!==(t=a[0].password+"")&&G(l,t)},d(a){a&&P(e)}}}function ue(n){let e,t,l,a="Email",s,f,c,w,C,d,i,r,M="Password",H,v,y,I,O,U,S,j="Log In",B,q,_=n[0].email&&D(n),h=n[0].password&&J(n);return{c(){e=g("form"),t=g("label"),l=g("span"),l.textContent=a,s=E(),f=g("input"),C=E(),_&&_.c(),d=E(),i=g("label"),r=g("span"),r.textContent=M,H=E(),v=g("input"),O=E(),h&&h.c(),U=E(),S=g("button"),S.textContent=j,this.h()},l(u){e=b(u,"FORM",{method:!0,class:!0});var m=A(e);t=b(m,"LABEL",{class:!0});var T=A(t);l=b(T,"SPAN",{"data-svelte-h":!0}),N(l)!=="svelte-1bg9cgq"&&(l.textContent=a),s=L(T),f=b(T,"INPUT",{type:!0,name:!0,"aria-invalid":!0,class:!0}),C=L(T),_&&_.l(T),T.forEach(P),d=L(m),i=b(m,"LABEL",{class:!0});var k=A(i);r=b(k,"SPAN",{"data-svelte-h":!0}),N(r)!=="svelte-1kvjhoz"&&(r.textContent=M),H=L(k),v=b(k,"INPUT",{type:!0,name:!0,"aria-invalid":!0,class:!0}),O=L(k),h&&h.l(k),k.forEach(P),U=L(m),S=b(m,"BUTTON",{class:!0,"data-svelte-h":!0}),N(S)!=="svelte-12ev68n"&&(S.textContent=j),m.forEach(P),this.h()},h(){o(f,"type","text"),o(f,"name","email"),o(f,"aria-invalid",c=n[0].email?"true":void 0),o(f,"class",w="input "+(n[0].email?"input-error":"")),o(t,"class","label"),o(v,"type","password"),o(v,"name","password"),o(v,"aria-invalid",y=n[0].password?"true":void 0),o(v,"class",I="input "+(n[0].password?"input-error":"")),o(i,"class","label"),o(S,"class","variant-soft-primary btn"),o(e,"method","POST"),o(e,"class","flex flex-col gap-4")},m(u,m){x(u,e,m),p(e,t),p(t,l),p(t,s),p(t,f),$(f,n[1].email),p(t,C),_&&_.m(t,null),p(e,d),p(e,i),p(i,r),p(i,H),p(i,v),$(v,n[1].password),p(i,O),h&&h.m(i,null),p(e,U),p(e,S),B||(q=[z(f,"input",n[6]),z(v,"input",n[7]),Y(n[4].call(null,e))],B=!0)},p(u,[m]){m&1&&c!==(c=u[0].email?"true":void 0)&&o(f,"aria-invalid",c),m&1&&w!==(w="input "+(u[0].email?"input-error":""))&&o(f,"class",w),m&2&&f.value!==u[1].email&&$(f,u[1].email),u[0].email?_?_.p(u,m):(_=D(u),_.c(),_.m(t,null)):_&&(_.d(1),_=null),m&1&&y!==(y=u[0].password?"true":void 0)&&o(v,"aria-invalid",y),m&1&&I!==(I="input "+(u[0].password?"input-error":""))&&o(v,"class",I),m&2&&v.value!==u[1].password&&$(v,u[1].password),u[0].password?h?h.p(u,m):(h=J(u),h.c(),h.m(i,null)):h&&(h.d(1),h=null)},i:F,o:F,d(u){u&&P(e),_&&_.d(),h&&h.d(),B=!1,Z(q)}}}function fe(n,e,t){let l,a,{data:s}=e;const f=ie(),{form:c,errors:w,enhance:C}=oe(s,{async onUpdated({form:r}){r.message&&(f.trigger({message:r.message.text,background:r.message.type==="error"?"variant-filled-error":"variant-filled-success"}),r.message?.type==="success"&&await re("/profile"))}});R(n,c,r=>t(1,a=r)),R(n,w,r=>t(0,l=r));function d(){a.email=this.value,c.set(a)}function i(){a.password=this.value,c.set(a)}return n.$$set=r=>{"data"in r&&t(5,s=r.data)},[l,a,c,w,C,s,d,i]}class pe extends K{constructor(e){super(),Q(this,e,fe,ue,V,{data:5})}}function de(n){let e,t,l="Log In",a,s,f,c,w='or <a href="/signup">signup</a>',C;return s=new pe({props:{data:n[0].form}}),{c(){e=g("div"),t=g("h1"),t.textContent=l,a=E(),ee(s.$$.fragment),f=E(),c=g("p"),c.innerHTML=w,this.h()},l(d){e=b(d,"DIV",{class:!0});var i=A(e);t=b(i,"H1",{class:!0,"data-svelte-h":!0}),N(t)!=="svelte-ois6cz"&&(t.textContent=l),a=L(i),te(s.$$.fragment,i),f=L(i),c=b(i,"P",{"data-svelte-h":!0}),N(c)!=="svelte-fntmex"&&(c.innerHTML=w),i.forEach(P),this.h()},h(){o(t,"class","gradient-heading-pink h1 mb-4 leading-relaxed"),o(e,"class","mx-auto w-full md:w-2/3")},m(d,i){x(d,e,i),p(e,t),p(e,a),ae(s,e,null),p(e,f),p(e,c),C=!0},p(d,[i]){const r={};i&1&&(r.data=d[0].form),s.$set(r)},i(d){C||(se(s.$$.fragment,d),C=!0)},o(d){ne(s.$$.fragment,d),C=!1},d(d){d&&P(e),le(s)}}}function me(n,e,t){let{data:l}=e;return n.$$set=a=>{"data"in a&&t(0,l=a.data)},[l]}class ge extends K{constructor(e){super(),Q(this,e,me,de,V,{data:0})}}export{ge as component};
