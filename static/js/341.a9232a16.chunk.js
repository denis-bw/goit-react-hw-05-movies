"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[341],{341:function(e,t,n){n.r(t),n.d(t,{default:function(){return l}});var r=n(439),u=n(791),i=n(87),s=n(689),a=n(999),c=n(596),o=n(184),l=function(){var e=(0,u.useState)(null),t=(0,r.Z)(e,2),n=t[0],l=t[1],d=(0,i.lr)(),h=(0,r.Z)(d,2),f=h[0],m=h[1],p=f.get("query"),g="https://api.themoviedb.org/3/search/movie?api_key=".concat("78fa60d71c65cdb8379688d13cf3e503","&query=").concat(p,"&language=en-US"),v=(0,s.TH)();(0,u.useEffect)((function(){null!==p&&(0,a.j)(g).then((function(e){return 0===e.data.results.length?c.Am.error("Nothing found ",{position:c.Am.POSITION.TOP_CENTER}):l(e.data)}))}),[p,g]);return(0,o.jsxs)(u.Suspense,{fallback:(0,o.jsx)("div",{children:"Loading..."}),children:[(0,o.jsx)("form",{onSubmit:function(e){e.preventDefault();var t=e.currentTarget;if(""===t.elements.query.value)return c.Am.error("Enter something !",{position:c.Am.POSITION.TOP_CENTER});m({query:t.elements.query.value.toLowerCase()}),t.reset()},children:(0,o.jsxs)("label",{children:[(0,o.jsx)("input",{type:"text",name:"query"}),(0,o.jsx)("button",{type:"submyt",children:"Serch"})]})}),(0,o.jsx)("ul",{children:n&&n.results.map((function(e){return(0,o.jsx)("li",{children:(0,o.jsx)(i.rU,{to:"".concat(e.id),state:v,children:e.title})},e.id)}))})]})}}}]);
//# sourceMappingURL=341.a9232a16.chunk.js.map