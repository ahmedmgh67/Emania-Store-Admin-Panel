(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{216:function(e,t,a){e.exports=a(378)},221:function(e,t,a){},377:function(e,t,a){},378:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(19),o=a.n(c),i=(a(221),a(24)),l=a(25),s=a(28),u=a(26),d=a(29),m=a(36),p=a(37),h=a(17),f=a.n(h),v=a(30),b=a(32),g=a(5),E=a(27),w=a.n(E),j=a(142),O=a.n(j);function k(e){return r.a.createElement("div",null,r.a.createElement(g.d,null,r.a.createElement(g.f,{expandIcon:r.a.createElement(O.a,null)},r.a.createElement(g.n,{variant:"h5"},"  ",e.address)),r.a.createElement(g.e,null,r.a.createElement(g.h,null,"Address: ",e.address,r.a.createElement("br",null),"Cost: $  ",e.price,r.a.createElement("br",null),"Phone: ",e.phone,r.a.createElement("br",null),"Products Ordered :",e.products.map(function(e,t){return r.a.createElement(g.i,{key:t},r.a.createElement(g.k,{primary:e,key:t}))})))))}var y=[],x=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).componentDidMount=Object(b.a)(f.a.mark(function e(){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(null!=y[0]){e.next=3;break}return e.next=3,w.a.get("http://localhost:6112/api/orders").then(function(e){for(var t=0;t<e.data.length;t++)a.setState({id:[].concat(Object(v.a)(a.state.id),[e.data[t].id]),address:[].concat(Object(v.a)(a.state.address),[e.data[t].address]),price:[].concat(Object(v.a)(a.state.price),[e.data[t].price]),phone:[].concat(Object(v.a)(a.state.phone),[e.data[t].phone]),products:[].concat(Object(v.a)(a.state.id),[e.data[t].product])}),y.push(r.a.createElement("div",null,r.a.createElement(k,{id:a.state.id[t],address:a.state.address[t],price:a.state.price[t],products:a.state.products[t],phone:a.state.phone[t]}),r.a.createElement("br",null))),console.log("got orders")}).catch(function(e){console.log(e)});case 3:case"end":return e.stop()}},e)})),a.state={id:[],address:[],price:[],phone:[],products:[]},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(g.h,{style:{margin:0,height:100}},y))}}]),t}(r.a.Component);function C(e){return r.a.createElement(g.i,{size:"large",divider:!0},r.a.createElement(g.j,null,r.a.createElement(g.b,{src:e.picture,alt:"Product Photo"})),r.a.createElement(g.k,{primary:e.name,secondary:"$  "+e.price}),r.a.createElement(g.c,{style:{margin:10},variant:"contained"},"Edit"),r.a.createElement(g.c,{onClick:function(t){return P(t,e.id)},variant:"contained"},"Delete"))}var P=function(){var e=Object(b.a)(f.a.mark(function e(t,a){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.delete("http://localhost:6112/api/products/"+a);case 2:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}(),A=a(144),N=a.n(A),S=[],W=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).Style={margin:"10px",padding:"10px"},a.componentDidMount=Object(b.a)(f.a.mark(function e(){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("getting products"),null!=S[0]){e.next=4;break}return e.next=4,w.a.get("http://localhost:6112/api/products").then(function(e){for(var t=0;t<e.data.length+1;t++)a.setState({name:[].concat(Object(v.a)(a.state.name),[e.data[t].name]),price:[].concat(Object(v.a)(a.state.price),[e.data[t].price]),picture:[].concat(Object(v.a)(a.state.picture),[e.data[t].images[0]])}),S.push(r.a.createElement(C,{picture:a.state.picture[t],name:a.state.name[t],price:a.state.price[t],id:e.data[t].id}))}).catch(function(e){console.log(e)});case 4:case"end":return e.stop()}},e)})),a.state={name:[],price:[],picture:[]},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(m.b,{exact:!0,to:"/products/new"},r.a.createElement(g.g,{className:"fab",variant:"extended"},r.a.createElement(N.a,null),"   Add Product")),r.a.createElement(g.h,{style:{margin:0,height:100}},S))}}]),t}(r.a.Component),z=a(145),D=(a(377),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",price:"",imageurl:"",desc:""},a.handleChange=function(e){return function(t){a.setState(Object(z.a)({},e,t.target.value))}},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{class:"newpr"},r.a.createElement(g.n,{className:"nptitle",variant:"h3"},"New Product"),r.a.createElement("div",{class:"form"},r.a.createElement(g.l,{fullWidth:!0,margin:"normal",label:"Name ",className:"forminput",value:this.state.name,onChange:this.handleChange("name"),variant:"outlined",size:"large"}),r.a.createElement("br",null),r.a.createElement(g.l,{value:this.state.price,onChange:this.handleChange("price"),margin:"normal",label:"Price",className:"forminput",variant:"outlined",size:"large"}),r.a.createElement("br",null),r.a.createElement(g.l,{value:this.state.imageurl,onChange:this.handleChange("imageurl"),fullWidth:!0,margin:"normal",label:"Image URL",className:"forminput",variant:"outlined",size:"large"}),r.a.createElement("br",null),r.a.createElement(g.l,{value:this.state.desc,onChange:this.handleChange("desc"),fullWidth:!0,rowsMax:"4",multiline:!0,margin:"normal",label:"Description",className:"forminput",variant:"outlined",size:"large"})),r.a.createElement("div",{id:"subnpbu"},r.a.createElement(g.c,{id:"subnpbu",onClick:(e=this.state.name,t=this.state.price,a=this.state.imageurl,n=this.state.desc,void w.a.post("http://localhost:6112/api/products",{name:e,price:t,images:[a],desc:n}).then(function(e){})),variant:"contained"},"Submit Product")));var e,t,a,n}}]),t}(r.a.Component));var M=[],R=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).componentDidMount=Object(b.a)(f.a.mark(function e(){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:U(a.props.id);case 1:case"end":return e.stop()}},e)})),a.state={name:[],address:[],id:[]},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(e){return r.a.createElement("div",null,r.a.createElement(g.n,{variant:"h3"},"ahmed "),r.a.createElement(g.n,{variant:"h3"}),r.a.createElement(g.n,{variant:"h3"}),r.a.createElement(g.n,{variant:"h3"},"$ "),r.a.createElement(g.h,null,M))}}]),t}(r.a.Component),U=function(){var e=Object(b.a)(f.a.mark(function e(t){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("details"),e.next=3,w.a.get("http://localhost:6112/products/"+t).then(function(e){for(var t=0;t<e.data.product.length;t++)M.push(r.a.createElement(g.i,{primary:e.data.product[t]}))});case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),$=R,I=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("header",{className:"title navbar navbar-collapse"},r.a.createElement(g.a,{postion:"static"},r.a.createElement(g.m,null,r.a.createElement(g.n,{align:"center",variant:"h3"},"Emania Store Admin Panel"),r.a.createElement(g.c,null,r.a.createElement(m.b,{class:"link",exact:!0,to:"/orders"},"Orders")),r.a.createElement(g.c,null,r.a.createElement(m.b,{class:"link",exact:!0,to:"/products"},"Products"))))),r.a.createElement(p.c,null,r.a.createElement(p.a,{exact:!0,path:"/products",component:W}),r.a.createElement(p.a,{exact:!0,path:"/orders",component:x}),r.a.createElement(p.a,{exact:!0,path:"/products/new",component:D}),r.a.createElement(p.a,{exact:!0,path:"/orders/details",component:$})))}}]),t}(r.a.Component),L=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function B(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}o.a.render(r.a.createElement(m.a,null,r.a.createElement(I,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/Emania-Store-Admin-Panel",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/Emania-Store-Admin-Panel","/service-worker.js");L?(function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):B(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):B(t,e)})}}()}},[[216,1,2]]]);
//# sourceMappingURL=main.3da2b2fa.chunk.js.map