(this["webpackJsonpdeep-cuts-fe"]=this["webpackJsonpdeep-cuts-fe"]||[]).push([[0],{29:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),c=n(10),i=n.n(c),r=n(4),l=n.n(r),o=n(5),j=n(2),u=(n(29),n(6)),d=n.n(u),b=(n(48),n(51)),p=n(0),h=function(e){var t=e.onLogin,n=Object(a.useState)(null),s=Object(j.a)(n,2),c=s[0],i=s[1],r=Object(a.useState)(null),u=Object(j.a)(r,2),h=u[0];u[1];Object(a.useEffect)((function(){var e=new URLSearchParams(window.location.search);i(e.get("code"))}),[]),Object(a.useEffect)((function(){var e=function(){var e=Object(o.a)(l.a.mark((function e(){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get("".concat("https://seashell-app-bvgvt.ondigitalocean.app","/token?code=").concat(c));case 2:n=e.sent,t(n.data.token);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();c&&e()}),[c,t]);return Object(p.jsx)("div",{className:"login",children:!h&&Object(p.jsx)(b.a,{variant:"primary",className:"green-button",onClick:function(){window.location="https://accounts.spotify.com/authorize?client_id=".concat("5d0e75213f4b4effb9afea270c431987","&redirect_uri=").concat("https%3A%2F%deepcuts-6fe6o.ondigitalocean.app%2F","&response_type=code&scope=playlist-modify-private+playlist-modify-public&state=abc123")},children:"Login with Spotify"})})};new URLSearchParams(window.location.search).get("code");var m=function(){var e=Object(a.useState)(""),t=Object(j.a)(e,2),n=t[0],s=t[1];return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h1",{children:"Deep Cuts"}),Object(p.jsx)("p",{children:"This app will remix your playlists, for when you want something different... but not TOO different. For each song on a playlist, Deep Cuts will get a different song from the same album. It will put these songs into a new playlist on your account!"}),Object(p.jsxs)("div",{className:"playlist-container",children:[!n&&Object(p.jsx)(h,{onLogin:s}),Object(p.jsx)("div",{className:"get-playlist-form-container",children:n&&Object(p.jsx)(O,{token:n})}),Object(p.jsx)("div",{className:"generate-playlist-container",children:n&&Object(p.jsx)(f,{token:n})})]})]})};function O(e){var t=e.token,n=Object(a.useState)(""),s=Object(j.a)(n,2),c=s[0],i=s[1],r=Object(a.useState)(""),u=Object(j.a)(r,2),h=u[0],m=u[1],O=function(){var e=Object(o.a)(l.a.mark((function e(n){var a,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,d.a.get("".concat("https://seashell-app-bvgvt.ondigitalocean.app","/").concat(c),{headers:{Authorization:"Bearer "+t}});case 3:a=e.sent,s=a.data,m(s);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsxs)("div",{className:"main",children:[Object(p.jsx)("div",{className:"form",children:Object(p.jsxs)("form",{onSubmit:O,children:[Object(p.jsx)("input",{type:"text",name:"playlistId",placeholder:"Playlist ID",onChange:function(e){return i(e.target.value)}}),Object(p.jsx)(b.a,{variant:"primary",type:"submit",className:"green-button",children:"Get Playlist!"})]})}),Object(p.jsx)("div",{className:"song-list",children:h&&h.map((function(e){return Object(p.jsxs)("div",{className:"song-item",children:[Object(p.jsx)("div",{children:"Track: "}),Object(p.jsx)("div",{className:"song-thumbnail",children:Object(p.jsx)("img",{src:e.album.images[2].url})}),Object(p.jsxs)("div",{className:"song-info",children:[Object(p.jsxs)("div",{children:["Song: ",e.name]}),Object(p.jsxs)("div",{children:["Artist: ",e.artists[0].name]}),Object(p.jsx)("a",{href:e.external_urls.spotify,target:"_blank",children:"Listen!"}),Object(p.jsxs)("div",{children:["Link: ",e.external_urls.spotify]})]})]})}))})]})}function f(e){var t=e.token,n=Object(a.useState)(""),s=Object(j.a)(n,2),c=s[0],i=s[1],r=Object(a.useState)(""),u=Object(j.a)(r,2),h=u[0],m=u[1],O=function(){var e=Object(o.a)(l.a.mark((function e(n){var a,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,d.a.post("".concat("https://seashell-app-bvgvt.ondigitalocean.app","/").concat(c),null,{headers:{Authorization:"Bearer "+t}});case 3:a=e.sent,s=a.data,m(s);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("div",{className:"main",children:[Object(p.jsx)("div",{className:"form",children:Object(p.jsxs)("form",{onSubmit:O,children:[Object(p.jsx)("input",{type:"text",name:"playlistId",placeholder:"Playlist ID",onChange:function(e){return i(e.target.value)}}),Object(p.jsx)(b.a,{variant:"primary",type:"submit",className:"green-button",children:"Generate Deep Cut Playlist!"})]})}),Object(p.jsxs)("div",{className:"song-list",children:[h&&Object(p.jsx)("div",{children:"Your new playlist: "}),h&&h.map((function(e){return Object(p.jsxs)("div",{className:"song-item",children:[Object(p.jsx)("div",{children:"Track: "}),Object(p.jsx)("div",{className:"song-thumbnail",children:Object(p.jsx)("img",{src:e.album.images[2].url})}),Object(p.jsxs)("div",{className:"song-info",children:[Object(p.jsxs)("div",{children:["Song: ",e.name]}),Object(p.jsxs)("div",{children:["Artist: ",e.artists[0].name]}),Object(p.jsx)("a",{href:e.external_urls.spotify,target:"_blank",children:"Listen!"}),Object(p.jsxs)("div",{children:["Link: ",e.external_urls.spotify]})]})]})}))]})]})})}i.a.render(Object(p.jsx)(s.a.StrictMode,{children:Object(p.jsx)("body",{children:Object(p.jsx)(m,{})})}),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.2dbe2d3e.chunk.js.map