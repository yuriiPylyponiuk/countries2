(this.webpackJsonpcountriesList=this.webpackJsonpcountriesList||[]).push([[0],{35:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(20),i=n.n(c),o=(n(35),n(13)),s=n(7),u=n.n(s),l=n(17),p="GET_POST_BY_LINK",m="GET_POST_BY_SUCCESS",h="GET_POST_BY_ERROR",d="HIDE_ALL_COUNTRIES",f="SHOW_ALL_COUNTRIES",b="SEND_FINDING_TEXT",y="FIND_COUNTRY_LINK",v="FIND_COUNTRY_SUCCESS",C="FIND_COUNTRY_ERROR",O=function(){var e=Object(l.a)(u.a.mark((function e(t){var n,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:p}),e.prev=1,e.next=4,fetch("https://restcountries.eu/rest/v2/all");case 4:return n=e.sent,e.next=7,n.json();case 7:a=e.sent,t({type:m,payload:a}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),t({type:h,payload:e.t0});case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}(),E=function(){var e=Object(l.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:d});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j=function(){var e=Object(l.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:f});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();var w=function(e){return function(){return O(e)}},N=function(e){return function(){return E(e)}},g=function(e){return function(){return j(e)}},k=n(11),L=n(12),_=n(9),x=n(15),D=n(14),T=(n(41),n(49));var S=function(e){return fetch(e)},F=function(){var e=Object(l.a)(u.a.mark((function e(t,n){var a,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:y}),e.prev=1,e.next=4,S(n);case 4:return a=e.sent,e.next=7,a.json();case 7:r=e.sent,t({type:v,payload:r}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),t({type:C,payload:e.t0});case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t,n){return e.apply(this,arguments)}}(),I=function(e,t){return function(t){return F(t,e)}},R=(n(42),function(e){Object(x.a)(n,e);var t=Object(D.a)(n);function n(e){var a;return Object(k.a)(this,n),(a=t.call(this,e)).trigerData=a.trigerData.bind(Object(_.a)(a)),a.findCountry=a.findCountry.bind(Object(_.a)(a)),a}return Object(L.a)(n,[{key:"trigerData",value:function(e){var t=e.target.value;this.props.sendFindingText(t)}},{key:"findCountry",value:function(e){e.preventDefault();if(""!==this.props.countriesList.findingData){var t=this.props.countriesList.findingData;t="https://restcountries.eu/rest/v2/name/"+(t=t[0].toUpperCase()+t.slice(1).toLowerCase()),this.props.getNewCountry(t)}else{this.props.getNewCountry("https://restcountries.eu/rest/v2/all"),alert("enter country name")}}},{key:"render",value:function(){return r.a.createElement("div",{className:"countries-list-main-block"},r.a.createElement("form",{className:"countries-list-main-block-block",onSubmit:this.findCountry},r.a.createElement("input",{className:"countries-list-main-block-input",onChange:this.trigerData,value:this.props.countriesList.findingData,type:"text",placeholder:"Enter name of country"}),r.a.createElement("button",{className:"countries-list-main-block-btn btn"},"Find Country")))}}]),n}(r.a.Component)),U=n(16),P=n(3),M={countries:{data:[],loaded:!1,error:!1,show:!1},findingData:""},Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return Object(P.a)(Object(P.a)({},e),{},{countries:{data:!1,loaded:!0,error:!1,show:!1}});case m:return Object(P.a)(Object(P.a)({},e),{},{countries:{data:t.payload,loaded:!1,error:!1,show:!0}});case h:return Object(P.a)(Object(P.a)({},e),{},{countries:{data:!1,loaded:!1,error:t.payload,show:!1}});case d:return Object(P.a)(Object(P.a)({},e),{},{countries:{data:e.countries.data,loaded:!1,error:!1,show:!1}});case f:return Object(P.a)(Object(P.a)({},e),{},{countries:{data:e.countries.data,loaded:!1,error:!1,show:!0}});case b:return Object(P.a)(Object(P.a)({},e),{},{findingData:t.payload});case y:return Object(P.a)(Object(P.a)({},e),{},{countries:{data:!1,loaded:!0,error:!1,show:!1}});case v:return Object(P.a)(Object(P.a)({},e),{},{countries:{data:t.payload,loaded:!1,error:!1,show:!0}});case C:return Object(P.a)(Object(P.a)({},e),{},{countries:{data:!1,loaded:!1,error:t.payload,show:!1}});default:return e}},A=Object(U.c)({countriesList:Y}),B=Object(o.b)((function(e){return{countriesList:e.countriesList}}),(function(e){return{sendFindingText:function(t){return e(function(e){return{type:b,payload:e}}(t))},getNewCountry:function(t){return e(I(t))}}}))((function(e){var t=e.countriesList,n=e.sendFindingText,a=e.getNewCountry;return r.a.createElement(R,{countriesList:t,sendFindingText:n,getNewCountry:a})})),G=n(10),H=(n(43),function(e){Object(x.a)(n,e);var t=Object(D.a)(n);function n(e){var a;return Object(k.a)(this,n),(a=t.call(this,e)).showCountries=a.showCountries.bind(Object(_.a)(a)),a}return Object(L.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.match.params.item;e="https://restcountries.eu/rest/v2/name/"+(e=e[0].toUpperCase()+e.slice(1).toLowerCase()),this.props.getNewCountry(e)}},{key:"showCountries",value:function(){if(this.props.countriesList.countries.show&&this.props.countriesList.countries.data)return this.props.countriesList.countries.data.map((function(e){return r.a.createElement("li",{key:Object(T.a)(),className:"countries-list-main-ul-li country-list-ul"},r.a.createElement("div",{className:"countries-list-main-ul-li-info"},r.a.createElement("h3",null,e.name)),r.a.createElement("a",{href:"#",className:"countries-list-main-ul-li-img"},r.a.createElement("img",{src:e.flag,alt:""})))}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(G.b,{to:"/countries",className:"coumties-back btn"},"Back"),r.a.createElement("ul",{className:"countries-list-main-ul"},this.showCountries()))}}]),n}(r.a.Component)),J=function(e){Object(x.a)(n,e);var t=Object(D.a)(n);function n(e){var a;return Object(k.a)(this,n),(a=t.call(this,e)).showCountries=a.showCountries.bind(Object(_.a)(a)),a.createMilionPeople=a.createMilionPeople.bind(Object(_.a)(a)),a.createCapital=a.createCapital.bind(Object(_.a)(a)),a}return Object(L.a)(n,[{key:"createMilionPeople",value:function(e){var t,n,a=1e6,c=e.population,i="",o="";(n=+(n=c/a).toFixed())>0&&(i=" ".concat(n,",")),(t=+(t=(c%=a)/1e3).toFixed())>0&&(o="".concat(t,","));var s=i+o+(c%=1e3);return r.a.createElement("span",null,s)}},{key:"createCapital",value:function(e){return Array.isArray(e.capital)?"More than 1 capital":e.capital?e.capital:"Country havent capitel"}},{key:"componentDidMount",value:function(){this.props.getCountry()}},{key:"showCountries",value:function(){var e=this;if(this.props.countries.show&&this.props.countries.data)return this.props.countries.data.map((function(t){return r.a.createElement("li",{key:Object(T.a)(),className:"countries-list-main-ul-li"},r.a.createElement(G.b,{to:{pathname:"/countries/".concat(t.name)},params:{item:t}},r.a.createElement("div",{className:"countries-list-main-ul-li-info"},r.a.createElement("h3",null,t.name),r.a.createElement("p",null,"Capital: ",e.createCapital(t)),r.a.createElement("p",null,"Population: ",e.createMilionPeople(t))),r.a.createElement("a",{href:"#",className:"countries-list-main-ul-li-img"},r.a.createElement("img",{src:t.flag,alt:""}))))}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"countries-list-main"},this.props.countries.show?r.a.createElement("button",{onClick:this.props.hideCountry,className:"btn countries-list-main-btn"},"Hide Countries"):r.a.createElement("button",{onClick:this.props.showCountry,className:"btn countries-list-main-btn"},"Show Countries"),r.a.createElement(B,null),r.a.createElement("ul",{className:"countries-list-main-ul"},this.showCountries()))}}]),n}(r.a.Component),K=Object(o.b)((function(e){return{countries:e.countriesList.countries}}),(function(e){return{getCountry:w(e),hideCountry:N(e),showCountry:g(e)}}))((function(e){var t=e.hideCountry,n=e.countries,a=e.getCountry,c=e.showCountry;return r.a.createElement(J,{countries:n,getCountry:a,hideCountry:t,showCountry:c})})),W=(n(45),function(e){Object(x.a)(n,e);var t=Object(D.a)(n);function n(e){return Object(k.a)(this,n),t.call(this,e)}return Object(L.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"home-page"},r.a.createElement(G.b,{className:"home-page-link btn",to:"/countries"},r.a.createElement("h2",{className:"home-page-link-title"},"Let`s lern something new")))}}]),n}(r.a.Component)),X=n(2),q=(n(46),Object(o.b)((function(e,t){return{countriesList:e.countriesList}}),(function(e){return{getNewCountry:function(t){return e(I(t))}}}))((function(e){var t=e.countriesList,n=e.getNewCountry,a=e.match;return r.a.createElement(H,{countriesList:t,getNewCountry:n,match:a})})));var z=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(G.b,{to:"/",className:"app-btn-main btn"},"Home"),r.a.createElement(X.c,null,r.a.createElement(X.a,{exact:!0,path:"/"},r.a.createElement(W,null)),r.a.createElement(X.a,{exact:!0,path:"/countries"},r.a.createElement(K,null)),r.a.createElement(X.a,{path:"/countries/:item",component:q})))},Q=(n(47),[n(29).a]);var V=Object(U.d)(A,U.a.apply(void 0,Q));i.a.render(r.a.createElement(o.a,{store:V},r.a.createElement(G.a,null,r.a.createElement(z,null))),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.0d6f5317.chunk.js.map