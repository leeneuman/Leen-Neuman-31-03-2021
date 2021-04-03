(this["webpackJsonpherolo-weather"]=this["webpackJsonpherolo-weather"]||[]).push([[0],{40:function(e,t,n){},41:function(e,t,n){},70:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(17),i=n.n(r),s=(n(40),n(41),n(11)),o=n(4),l=function(e){return{type:"UPDATE_CITY",payload:{city:e}}},u=n(1),j=function(e){var t=e.label,n=e.onClick;return Object(u.jsx)("button",{className:"dropdown-item",type:"button",onClick:n,children:t})};var d=function(){var e=Object(o.b)(),t=function(t){e({type:"UPDATE_UNITS",payload:{units:t}})};return Object(u.jsxs)("div",{className:"dropdown",children:[Object(u.jsx)("button",{className:"btn btn-secondary dropdown-toggle",type:"button",id:"dropdownMenu2","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:"Units"}),Object(u.jsxs)("div",{className:"dropdown-menu","aria-labelledby":"dropdownMenu2",children:[Object(u.jsx)(j,{label:"Metric",onClick:function(){return t("Metric")}}),Object(u.jsx)(j,{label:"Imperial",onClick:function(){return t("Imperial")}})]})]})},b=function(e){var t=e.label,n=e.link;return Object(u.jsx)(s.c,{exact:!0,to:n,className:"nav-link text-white",activeStyle:{fontWeight:"bold"},children:t})};var f=function(){return Object(u.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",children:[Object(u.jsx)(s.b,{className:"navbar-brand",to:"/",children:"Herolo Weather"}),Object(u.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(u.jsx)("span",{className:"navbar-toggler-icon"})}),Object(u.jsxs)("div",{className:"collapse navbar-collapse justify-content-end",id:"navbarNav",children:[Object(u.jsx)(b,{label:"Home",link:"/"}),Object(u.jsx)(b,{label:"Favorites",link:"/favorites"}),Object(u.jsx)(d,{})]})]})},h=n(3),O=n(10),x=n(20),p=n.n(x),v="https://dataservice.accuweather.com",m="KpvPAsNLBJJKYWnDQmnsLAjHvQ1c1jKU",y=function(e){return p.a.get("".concat(v,"/locations/v1/cities/autocomplete?apikey=").concat(m,"&q=").concat(e),{headers:{Accept:"application/json"}})},g=function(e){return p.a.get("".concat(v,"/currentconditions/v1/").concat(e,"?apikey=").concat(m),{headers:{Accept:"application/json"}})};var N=function(){var e=Object(o.b)(),t=Object(c.useState)(""),n=Object(O.a)(t,2),a=n[0],r=n[1],i=Object(c.useState)([]),s=Object(O.a)(i,2),j=s[0],d=s[1];return Object(c.useEffect)((function(){a.length>0&&/^[A-Za-z -]*$/.test(a)&&y(a).then((function(e){return d(e.data)})).catch((function(e){return console.log(e)}))}),[a]),Object(u.jsxs)("div",{className:"w-50 position-relative",children:[Object(u.jsx)("input",{className:"SearchBar-input w-100 mt-5",type:"text",value:a,onChange:function(e){r(e.target.value)},placeholder:"Search for a city name...",title:"English characters only."}),a.length>0&&j.length>0&&Object(u.jsx)("div",{className:"position-absolute w-100 bg-white border",style:{zIndex:"1"},children:(j||[]).map((function(t){return Object(u.jsx)("div",{className:"p-1",style:{cursor:"pointer"},onClick:function(){return function(t){e(l(t)),d([]),r("")}(t)},children:"".concat(t.LocalizedName,", ").concat(t.Country.LocalizedName)},t.Key)}))})]})},w=n(14),T=function(e,t){window.localStorage.setItem(e,JSON.stringify(t))},E=function(e){return JSON.parse(window.localStorage.getItem(e))||[]};var S=function(e){var t=e.type,n=e.data,c=Object(o.c)((function(e){return e.units}));if(!t||0===n.length)return null;switch(t){case"current":return"Metric"===c?Object(u.jsxs)("span",{children:[n.Temperature.Metric.Value," \u2103"]}):Object(u.jsxs)("span",{children:[n.Temperature.Imperial.Value," \u2109"]});case"forcast-lo":return"Metric"===c?Object(u.jsxs)("span",{children:[n.Temperature.Minimum.Value," \u2103"]}):Object(u.jsxs)("span",{children:[n.Temperature.Minimum.Value," \u2109"]});case"forcast-hi":return"Metric"===c?Object(u.jsxs)("span",{children:[n.Temperature.Maximum.Value," \u2103"]}):Object(u.jsxs)("span",{children:[n.Temperature.Maximum.Value," \u2109"]});default:return null}};var k=function(e){var t=e.city,n=Object(o.b)(),a=Object(o.c)((function(e){return e.favorites})),r=Object(c.useState)([]),i=Object(O.a)(r,2),s=i[0],l=i[1],j=t.Key,d=function(e,t){return t&&t.filter((function(t){return t.Key===e})).length>0}(j,a);return Object(c.useEffect)((function(){j&&g(j).then((function(e){return l(e.data[0])})).catch((function(e){return alert(e)}))}),[j]),j&&0!==s.length?Object(u.jsxs)("div",{className:"d-flex flex-column align-items-center p-4 w-100",children:[Object(u.jsxs)("div",{className:"d-flex flex-row justify-content-between w-100",children:[Object(u.jsxs)("div",{className:"d-flex flex-column",children:[Object(u.jsx)("h5",{children:"".concat(t.LocalizedName,", ").concat(t.Country.LocalizedName)}),Object(u.jsx)(S,{type:"current",data:s})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("button",{className:"btn btn-light",onClick:d?function(){n({type:"REMOVE_FAVORITE",payload:{key:j}}),T("favorites",Object(w.a)(a.filter((function(e){return e.Key!==j}))))}:function(){n(function(e){return{type:"ADD_FAVORITE",payload:{city:e}}}(t)),T("favorites",[].concat(Object(w.a)(a),[t]))},children:d?"Remove from favorites":"Add to favorites"}),d?Object(u.jsx)("i",{className:"fas fa-heart fa-lg p-2"}):Object(u.jsx)("i",{className:"far fa-heart fa-lg p-2"})]})]}),Object(u.jsx)("h3",{children:s.WeatherText})]}):null},_=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];var C=function(e){var t=e.day,n=new Date(t.Date);return Object(u.jsxs)("div",{className:"d-flex flex-column align-items-center card p-4 mt-2",style:{minWidth:"150px"},children:[Object(u.jsx)("h5",{children:_[n.getDay()]}),Object(u.jsxs)("div",{children:["Lo: ",Object(u.jsx)(S,{type:"forcast-lo",data:t})]}),Object(u.jsxs)("div",{children:["Hi: ",Object(u.jsx)(S,{type:"forcast-hi",data:t})]})]})};var D=function(e){var t=e.cityKey,n=Object(o.c)((function(e){return e.units})),a=Object(c.useState)([]),r=Object(O.a)(a,2),i=r[0],s=r[1],l=function(){return function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return p.a.get("".concat(v,"/forecasts/v1/daily/5day/").concat(e,"?apikey=").concat(m,"&metric=").concat(t),{headers:{Accept:"application/json"}})}(t,"Metric"===n).then((function(e){return s(e.data)})).catch((function(e){return alert(e)}))};return Object(c.useEffect)((function(){t&&l()}),[t,n]),t&&0!==i.length?Object(u.jsx)("div",{className:"ForcastsContainer d-flex flex-row justify-content-between flex-wrap p-4 w-100",children:i.DailyForecasts.map((function(e){return Object(u.jsx)(C,{day:e},e.EpochDate)}))}):null};var I=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.selectedCity})),n=t.Key;return Object(c.useEffect)((function(){n||y("tel aviv").then((function(t){return e(l(t.data[0]))})).catch((function(e){return alert(e)}))}),[n]),0!==t.length||n?Object(u.jsxs)("div",{className:"d-flex flex-column align-items-center p-4 mt-5 w-100 card",style:{background:"rgba(100, 100, 100, 0.1)"},children:[Object(u.jsx)(k,{city:t}),Object(u.jsx)(D,{cityKey:n})]}):null};var M=function(){return Object(u.jsxs)("div",{className:"d-flex flex-column align-items-center",children:[Object(u.jsx)(N,{}),Object(u.jsx)(I,{})]})};var A=function(e){var t=e.city,n=Object(o.b)(),a=t.Key,r=Object(c.useState)([]),i=Object(O.a)(r,2),j=i[0],d=i[1];return Object(c.useEffect)((function(){a&&g(a).then((function(e){return d(e.data[0])})).catch((function(e){return alert(e)}))}),[a]),a&&0!==j.length?Object(u.jsxs)(s.b,{className:"d-flex flex-column align-items-center card p-4 mt-4 mr-4 justify-content-between text-decoration-none text-reset text-center",style:{height:"200px",width:"200px"},onClick:function(){n(l(t))},to:"/",children:[Object(u.jsxs)("div",{className:"d-flex flex-column align-items-center",children:[Object(u.jsx)("h5",{children:t.LocalizedName}),Object(u.jsx)(S,{type:"current",data:j})]}),Object(u.jsx)("h4",{children:j.WeatherText})]}):null};var F=function(){var e=Object(o.c)((function(e){return e.favorites}));return 0===e.length?Object(u.jsx)("h2",{className:"text-center mt-5 text-white",children:"No favorites yet..."}):Object(u.jsx)("div",{className:"FavoritesContainer d-flex flex-row flex-wrap p-4 w-100",children:e.map((function(e){return Object(u.jsx)(A,{city:e},e.Key)}))})};var V=function(){return Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)(h.d,{children:[Object(u.jsx)(h.b,{exact:!0,path:"/",component:M}),Object(u.jsx)(h.b,{exact:!0,path:"/favorites",component:F}),Object(u.jsx)(h.a,{to:"/"})]})})};var K=function(){return Object(u.jsxs)(a.a.Fragment,{children:[Object(u.jsx)(f,{}),Object(u.jsx)(V,{})]})},L=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,71)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),r(e),i(e)}))},U=(n(66),n(69),n(13)),R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E("favorites"),t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_FAVORITE":return[].concat(Object(w.a)(e),[t.payload.city]);case"REMOVE_FAVORITE":return Object(w.a)(e.filter((function(e){return e.Key!==t.payload.key})));default:return e}},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_CITY":return t.payload.city;default:return e}},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Metric",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_UNITS":return t.payload.units;default:return e}},W=Object(U.b)({favorites:R,selectedCity:z,units:P}),J=Object(U.c)(W,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());i.a.render(Object(u.jsx)(s.a,{children:Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(o.a,{store:J,children:Object(u.jsx)(K,{})})})}),document.getElementById("root")),L()}},[[70,1,2]]]);
//# sourceMappingURL=main.7e70622f.chunk.js.map