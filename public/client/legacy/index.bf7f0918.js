import{a as t,b as n,c as s,d as r,i as o,s as a,e,S as f,f as i,t as c,h as u,j as l,k as h,l as g,o as p,q as v,r as m,D as d,g as j,m as b,n as E,L as x}from"./index.98e66264.js";import{_ as L}from"./slicedToArray.f13a096f.js";function q(t,n,s){var r=t.slice();return r[1]=n[s],r}function y(t){var n,s,r,o,a=t[1].title+"";return{c:function(){n=i("li"),s=i("a"),r=c(a),this.h()},l:function(t){n=u(t,"LI",{});var o=l(n);s=u(o,"A",{rel:!0,href:!0});var e=l(s);r=h(e,a),e.forEach(g),o.forEach(g),this.h()},h:function(){p(s,"rel","prefetch"),p(s,"href",o="blog/"+t[1].slug)},m:function(t,o){v(t,n,o),m(n,s),m(s,r)},p:function(t,n){1&n&&a!==(a=t[1].title+"")&&d(r,a),1&n&&o!==(o="blog/"+t[1].slug)&&p(s,"href",o)},d:function(t){t&&g(n)}}}function A(t){for(var n,s,r,o,a,e=t[0],f=[],d=0;d<e.length;d+=1)f[d]=y(q(t,e,d));return{c:function(){n=j(),s=i("h1"),r=c("Recent posts"),o=j(),a=i("ul");for(var t=0;t<f.length;t+=1)f[t].c();this.h()},l:function(t){n=b(t),s=u(t,"H1",{});var e=l(s);r=h(e,"Recent posts"),e.forEach(g),o=b(t),a=u(t,"UL",{class:!0});for(var i=l(a),c=0;c<f.length;c+=1)f[c].l(i);i.forEach(g),this.h()},h:function(){document.title="Blog",p(a,"class","svelte-1frg2tf")},m:function(t,e){v(t,n,e),v(t,s,e),m(s,r),v(t,o,e),v(t,a,e);for(var i=0;i<f.length;i+=1)f[i].m(a,null)},p:function(t,n){var s=L(n,1)[0];if(1&s){var r;for(e=t[0],r=0;r<e.length;r+=1){var o=q(t,e,r);f[r]?f[r].p(o,s):(f[r]=y(o),f[r].c(),f[r].m(a,null))}for(;r<f.length;r+=1)f[r].d(1);f.length=e.length}},i:E,o:E,d:function(t){t&&g(n),t&&g(s),t&&g(o),t&&g(a),x(f,t)}}}function R(t){t.params,t.query;return this.fetch("blog.json").then(function(t){return t.json()}).then(function(t){return{posts:t}})}function k(t,n,s){var r=n.posts;return t.$set=function(t){"posts"in t&&s(0,r=t.posts)},[r]}export default(function(i){function c(t){var f;return n(this,c),f=s(this,r(c).call(this)),o(e(f),t,k,A,a,{posts:0}),f}return t(c,f),c}());export{R as preload};
