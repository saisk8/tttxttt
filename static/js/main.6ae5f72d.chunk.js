(this.webpackJsonptttttt=this.webpackJsonptttttt||[]).push([[0],{11:function(e,t,n){e.exports=n(17)},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(8),s=n.n(o),c=n(6),i=n(1),l=n(2),u=n(4),d=n(3),m=n(5),f=(n(16),n(9)),p=n.n(f),h=n(10),w=function(e){for(var t=0,n=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];t<n.length;t++){var r=n[t],a=Object(h.a)(r,3),o=a[0],s=a[1],c=a[2];if(e[o]&&e[o]===e[s]&&e[o]===e[c])return e[o]}return e.some((function(e){return!e}))?null:"D"},v=function(e,t){for(var n=e.rows,r=e.columns,a=t.renderer,o=(t.boardClassName,t.rowClassName,function(e,t){for(var n=[],r=0;r<t;r++){var o=e*t+r;n.push(a(o))}return n}),s=[],c=0;c<n;c++)s.push(o(c,r));return s.flat()};function g(e){var t=e.className,n=e.onClick,r=e.value;return a.a.createElement("button",{className:t,onClick:n},r)}var b=function(e){function t(){var e,n;Object(i.a)(this,t);for(var r=arguments.length,o=new Array(r),s=0;s<r;s++)o[s]=arguments[s];return(n=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).renderCell=function(e){var t=p()("cell",{"x-win":"X"===n.props.winner,"o-win":"O"===n.props.winner,x:!n.props.winner&&"X"===n.props.cells[e],o:!n.props.winner&&"O"===n.props.cells[e],d:"D"===n.props.winner,highlight:null===n.props.mustPlaceIn&&!n.props.cells[e]||n.props.mustPlaceIn===n.props.id&&!n.props.cells[e]});return a.a.createElement(g,{key:e,className:t,value:n.props.cells[e],onClick:function(){return n.props.onClick(n.props.id,e)}})},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"small-board"},v({rows:3,columns:3},{renderer:this.renderCell,boardClassName:"game-board",rowClassName:"board-row"}))}}]),t}(a.a.Component),C=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(d.a)(t).call(this,e))).handleClick=function(e,t){if(!(n.state.totWinner||n.state.reducedBoard[e]||n.state.game[e][t]||null!==n.state.mustPlaceIn&&n.state.mustPlaceIn!==e)){var r=n.state.game.map((function(e){return Object(c.a)(e)})),a=Object(c.a)(n.state.reducedBoard),o=n.state.xIsCurrent?"O":"X";r[e][t]=n.state.xIsCurrent?"X":"O",a[e]=w(r[e]);var s=w(a),i="".concat(o,"'s Turn");switch(s){case"X":case"O":i="".concat(s," wins");break;case"D":i="It's a draw!"}n.setState({game:r,totWinner:s,reducedBoard:a,xIsCurrent:!n.state.xIsCurrent,mustPlaceIn:a[t]?null:t,gameStatus:i})}},n.renderTTT=function(e){return a.a.createElement(b,{key:e,id:e,onClick:n.handleClick,cells:n.state.game[e],mustPlaceIn:n.state.mustPlaceIn,xIsCurrent:n.state.xIsCurrent,winner:n.state.reducedBoard[e]})},n.state={game:new Array(9).fill(new Array(9).fill(null)),reducedBoard:new Array(9).fill(null),xIsCurrent:!0,mustPlaceIn:null,totWinner:null,gameStatus:"X's Turn"},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"container full-height center-all"},a.a.createElement("div",{className:"game-wrapper"},a.a.createElement("div",{className:"game-info"},this.state.gameStatus),a.a.createElement("div",{className:"big-board"},v({rows:3,columns:3},{renderer:this.renderTTT,boardClassName:"main-game",rowClassName:"game-row"}))))}}]),t}(a.a.Component),k=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function O(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}s.a.render(a.a.createElement(C,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/tttxttt",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/tttxttt","/service-worker.js");k?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):O(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):O(t,e)}))}}()}},[[11,1,2]]]);
//# sourceMappingURL=main.6ae5f72d.chunk.js.map