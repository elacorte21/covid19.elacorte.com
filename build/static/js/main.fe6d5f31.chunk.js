(this.webpackJsonpcovid19=this.webpackJsonpcovid19||[]).push([[0],{12:function(e,n,t){},13:function(e,n,t){},14:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(2),c=t.n(o),i=(t(12),t(3)),l=t(4),u=t(6),s=t(5),m=(t(13),function(e){Object(u.a)(t,e);var n=Object(s.a)(t);function t(){var e;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=n.call.apply(n,[this].concat(r))).state={isLoading:!0,countries:[],error:null},e}return Object(l.a)(t,[{key:"fetchCountries",value:function(){var e=this;fetch("https://extreme-ip-lookup.com/json/").then((function(e){return e.json()})).then((function(e){var n=e.countryCode;return fetch("https://covid19.mathdro.id/api/countries/"+n+"/confirmed")})).then((function(e){return e.json()})).then((function(n){return e.setState({countries:n,isLoading:!1})})).catch((function(n){return e.setState({error:n,isLoading:!1})}))}},{key:"componentDidMount",value:function(){this.fetchCountries()}},{key:"render",value:function(){var e=this.state,n=e.isLoading,t=e.countries,a=e.error;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"COVID-19"),a?r.a.createElement("p",null,a.message):null,n?r.a.createElement("h3",null,"Loading..."):t.map((function(e){var n=function(e,n){return(e/n*100).toFixed()};return r.a.createElement("div",{key:e.combinedKey},r.a.createElement("h2",null,e.countryRegion),r.a.createElement("div",{className:"caseRecovered"},r.a.createElement("h4",null,"Recovered"),r.a.createElement("h3",null,e.recovered),n(e.recovered,e.confirmed),"%"),r.a.createElement("div",{className:"caseConfirmed"},r.a.createElement("h4",null,"Cases"),r.a.createElement("h2",null,e.confirmed)),r.a.createElement("div",{className:"caseDeceased"},r.a.createElement("h4",null,"Deceased"),r.a.createElement("h3",null,e.deaths),n(e.deaths,e.confirmed),"%"))})))}}]),t}(r.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(m,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,n,t){e.exports=t(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.fe6d5f31.chunk.js.map