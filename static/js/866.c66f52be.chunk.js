"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[866],{443:function(e,n,t){t.d(n,{j:function(){return a}});var r=t(861),i=t(757),s=t.n(i),c=t(243),a=function(){var e=(0,r.Z)(s().mark((function e(n){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get(n).then((function(e){return e})).catch((function(e){throw new Error(e)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},866:function(e,n,t){t.r(n),t.d(n,{default:function(){return d}});var r=t(439),i=t(689),s=t(791),c=t(443),a="Reviews_Reviews_Container__UWQek",u="Reviews_Title_Reviews__c2WY9",o="Reviews_Text_Reviews__hdiBa",l=t(184),d=function(){var e,n=(0,i.UO)().movieId,t=(0,s.useState)(null),d=(0,r.Z)(t,2),h=d[0],v=d[1],f="https://api.themoviedb.org/3/movie/".concat(n,"/reviews?api_key=").concat("78fa60d71c65cdb8379688d13cf3e503","&language=en-US");return(0,s.useEffect)((function(){(0,c.j)(f).then((function(e){return v(e.data)}))}),[f]),(0,l.jsx)(s.Suspense,{fallback:(0,l.jsx)("div",{children:"Loading..."}),children:(0,l.jsxs)("ul",{className:a,children:[h&&(null===(e=h.results)||void 0===e?void 0:e.map((function(e){return(0,l.jsxs)("li",{children:[(0,l.jsx)("h2",{className:u,children:e.author}),(0,l.jsx)("p",{className:o,children:e.content})]},e.id)}))),0===(null===h||void 0===h?void 0:h.results.length)&&(0,l.jsx)("p",{className:o,children:"We don`t have any reviews for this movie."})]})})}}}]);
//# sourceMappingURL=866.c66f52be.chunk.js.map