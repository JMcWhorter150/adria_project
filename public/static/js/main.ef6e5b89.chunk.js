(this["webpackJsonpadria-project"]=this["webpackJsonpadria-project"]||[]).push([[0],{18:function(e,t,a){e.exports=a(42)},23:function(e,t,a){},24:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(16),i=a.n(c),o=(a(23),a(24),a(2)),l=a(3),s=a(5),u=a(4),h=a(6),m=a(17),d=a.n(m);var p=function(e){var t=e.source;return r.a.createElement("div",{className:"pictureFrame"},r.a.createElement("img",{src:t}))},f=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e)))._getGiphy=function(){d.a.get("/api/giphy").then((function(e){a.setState({giphy:e.images.downsized_large.url})})).catch((function(e){console.log("Yeah, no giphy for you")}))},a.state={giphy:""},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("button",{onClick:this._getGiphy},"Miss you!"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(p,{source:this.state.giphy}))}}]),t}(r.a.Component),y=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e)))._handleDate=function(e){a.setState({date:e},(function(){return a._sleeps()}))},a._sleeps=function(){var e=new Date,t=new Date(a.state.date),n=Math.ceil((t.getTime()-e.getTime())/864e5);a.setState({days:n+1})},a.state={today:"",date:"",days:""},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("h2",null,"Select the next day you will see Joe"),r.a.createElement("input",{onChange:function(t){return e._handleDate(t.target.value)},type:"date",value:this.state.date,min:"2020-02-14",max:"2020-12-31"}),r.a.createElement("p",null,this.state.days?"There are ".concat(this.state.days," sleeps until you see Joe"):""))}}]),t}(r.a.Component);var g=function(){return r.a.createElement("div",{className:"App App-header"},r.a.createElement(y,null),r.a.createElement(f,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.ef6e5b89.chunk.js.map