(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,t,a){e.exports=a(74)},31:function(e,t,a){},33:function(e,t,a){},57:function(e,t,a){},59:function(e,t,a){},74:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(18),r=a.n(l);a(31);var o=function(){return c.a.createElement("div",{className:"NevBar"},c.a.createElement("img",{className:"logo",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png",alt:""}),c.a.createElement("img",{className:"avatar",src:"https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png",alt:""}))},i="35a624171b41dabd36fdc01c9e683110",s="https://image.tmdb.org/t/p/original",m="trending/all/week?api_key=".concat(i,"&language=en-US"),u="discover/movie?api_key=".concat(i,"&with_genres=28"),d="discover/movie?api_key=".concat(i,"&with_genres=35"),g="discover/movie?api_key=".concat(i,"&with_genres=27"),p="discover/movie?api_key=".concat(i,"&with_genres=10749"),v=(a(33),a(4)),b=a(19),E=a.n(b).a.create({baseURL:"https://api.themoviedb.org/3"});a(57);var f=function(){var e=Object(n.useState)([]),t=Object(v.a)(e,2),a=t[0],l=t[1];return Object(n.useEffect)(function(){E.get("trending/all/week?api_key=".concat(i,"&language=en-US")).then(function(e){console.log(e.data.results),l(e.data.results.sort(function(e,t){return.5-Math.random()})[0])})},[]),c.a.createElement("div",{style:{backgroundImage:"url(".concat(a?s+a.backdrop_path:"",")")},className:"banner"},c.a.createElement("div",{className:"content"},c.a.createElement("h1",{className:"title"}," ",a?a.title?a.title:a.name:"","    "),c.a.createElement("div",{className:"banner_buttons"},c.a.createElement("button",{className:"button"},"Play"),c.a.createElement("button",{className:"button"},"My list")),c.a.createElement("div",null,c.a.createElement("h1",{className:"discreption"},a?a.overview:" ","   "))),c.a.createElement("div",{className:"fade_bottom"}))},h=a(22);a(59);var N=function(e){var t=Object(n.useState)([]),a=Object(v.a)(t,2),l=a[0],r=a[1],o=Object(n.useState)(""),m=Object(v.a)(o,2),u=m[0],d=m[1];return Object(n.useEffect)(function(){E.get(e.url).then(function(e){console.log(e.data.results),r(e.data.results)})},[]),c.a.createElement("div",{className:"row"},c.a.createElement("h2",null,e.title),c.a.createElement("div",{className:"posters"},l.map(function(t){return c.a.createElement("img",{onClick:function(){return e=t.id,void E.get("/movie/".concat(e,"/videos?api_key=").concat(i,"&language=en-US")).then(function(e){0!=e.data.results.lenght&&d(e.data.results[8]),console.log(e.data.results)});var e},className:e.Action?"sPoster":"poster",src:"".concat(s+t.backdrop_path)})})),u&&c.a.createElement(h.a,{opts:{height:"390",width:"100%",playerVars:{autoplay:1,disablekb:1}},videoId:u.key}))};var k=function(){return c.a.createElement("div",{className:"App"},c.a.createElement("div",{className:"alone"},c.a.createElement(o,null)),c.a.createElement(f,null),c.a.createElement(N,{url:m,title:"Netflixs Oginals"}),c.a.createElement(N,{url:g,title:"Horror",Action:!0}),c.a.createElement(N,{url:u,title:"Actions",Action:!0}),c.a.createElement(N,{url:p,title:"Romance",Action:!0}),c.a.createElement(N,{url:d,title:"Comedy",Action:!0}))};r.a.createRoot(document.getElementById("root")).render(c.a.createElement(k,null))}},[[23,2,1]]]);
//# sourceMappingURL=main.6c2fe45a.chunk.js.map