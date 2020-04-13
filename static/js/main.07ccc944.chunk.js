(this["webpackJsonpreact-graph-ql-apollo"]=this["webpackJsonpreact-graph-ql-apollo"]||[]).push([[0],{37:function(e,a,n){e.exports=n.p+"static/media/rocket-128px.8ecb06c2.svg"},47:function(e,a,n){e.exports=n(66)},52:function(e,a,n){},53:function(e,a,n){},54:function(e,a,n){},55:function(e,a,n){},62:function(e,a,n){},64:function(e,a,n){},66:function(e,a,n){"use strict";n.r(a);var t=n(1),r=n.n(t),c=n(36),l=n.n(c),i=(n(52),n(53),n(45)),s=n(6),o=n(20),m=n(19),u=n(67),d=n(18),p=n(14),f=n.n(p);function h(){var e=Object(d.a)(["\n  query getPastLaunches( $limit: Int = 8, $offset: Int = 0  ){\n    launchesPast(limit: $limit, offset: $offset) {\n      id\n      mission_name\n      launch_date_local\n      links {\n        article_link\n        video_link\n        flickr_images\n      }\n      rocket {\n        rocket_name\n        first_stage {\n          cores {\n            core {\n              status\n            }\n          }\n        }\n        #   second_stage {\n        #     payloads {\n        #       payload_type\n        #       payload_mass_kg\n        #       payload_mass_lbs\n        #     }\n        #   }\n      }\n      ships {\n        home_port\n        # image\n      }\n    }\n  }\n"]);return h=function(){return e},e}var E=f()(h()),v=(n(54),n(55),n(37)),k=n.n(v),_=function(){return r.a.createElement("img",{className:"rocket",src:k.a,alt:"loader-icon"})},g=function(){return r.a.createElement("div",{className:"lds-ripple"}," ",r.a.createElement("div",null)," ",r.a.createElement("div",null)," ")},b=function(){return r.a.createElement("div",{className:"alert alert-danger"},"Something went wrong")},y=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"danger";return r.a.createElement("div",{className:"alert alert-"+a},e)},N=function(e){if(e)return e.split("T").shift().split("-").reverse().join("/")},w=function(e){return e.substring(0,e.search(".jpg")-1)+"c.jpg"},j=function(){return r.a.createElement(u.a,{query:E},(function(e){var a=e.data,n=e.loading,t=e.error;e.fetchMore;return n?_():t?b():r.a.createElement("div",{className:"container"},a.launchesPast.map((function(e){var a=e.mission_name,n=e.launch_date_local,t=e.links,c=e.ships,l=e.rocket,i=e.id;return r.a.createElement("div",{className:"card --lunches",key:i},r.a.createElement(o.b,{to:"/launch/"+i},r.a.createElement("figure",{className:"card-photo"},r.a.createElement("span",{className:"date"}," ",N(n)),r.a.createElement("img",{src:w(t.flickr_images[0]),alt:c.home_port}))),r.a.createElement("h3",{className:"card-title"},a),r.a.createElement("span",{className:"card-desc"},l.rocket_name," as rocket"),c.home_port&&r.a.createElement("span",{className:"card-desc"}," from: ",c.home_port))})))}))},O=n(15);n(62);function x(){var e=Object(d.a)(["\n  query GetLaunch($id: ID!) {\n    launch(id: $id) {\n      mission_name\n      rocket {\n        second_stage {\n          payloads {\n            orbit\n            payload_mass_kg\n            manufacturer\n          }\n        }\n        rocket_name\n      }\n      ships {\n        home_port\n        year_built\n        name\n        active\n      }\n      launch_site {\n        site_name\n      }\n      launch_year\n      links {\n        flickr_images\n        reddit_media\n        video_link\n        article_link\n        wikipedia\n      }\n      details\n      launch_date_local\n    }\n  }\n"]);return x=function(){return e},e}var $=f()(x()),S=function(){var e=Object(m.f)().id,a=Object(O.b)($,{variables:{id:e}}),n=a.loading,t=a.error,c=a.data;if(n)return _();if(t)return b();var l=c.launch,i=l.rocket.second_stage.payloads,s=i.manufacturer,o=i.orbit,u=i.payload_mass_kg,d=l.ships.home_port||l.launch_site.site_name;return r.a.createElement("div",{className:"container middle"},r.a.createElement("div",{className:"card --lunches-details"},r.a.createElement("h1",{className:"card-title"},"mission: ",l.mission_name,r.a.createElement("span",{className:"card-desc"},"  ",N(l.launch_date_local))),r.a.createElement("h2",{className:"capitalized"}," Launch Details"),r.a.createElement("p",null,l.details),r.a.createElement("p",null,"The rocket ",l.rocket.rocket_name,o?" fly on the orbit "+o:"",",",d?" from "+d:"",u?" with self mass of "+u:"",". It built on ",l.ships.year_built,s?"by "+s:"","and currently it is ",l.ships.active?" active":" not active","."),r.a.createElement("div",{className:"photo-grid"},l.links.flickr_images&&l.links.flickr_images.map((function(e,a){return r.a.createElement("figure",{className:"card-photo",key:a},r.a.createElement("img",{src:w(e),alt:l.mission_name+"on luanch day"}))}))),r.a.createElement("div",{className:"links"},r.a.createElement("span",null,"more info:  "),r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:l.links.wikipedia},"wikipedia"),r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:l.links.reddit_media},"reddit"),r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:l.links.video_link},"video"),r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:l.links.article_link},"article/s"))))},q=n(23),I=n.n(q),z=n(31),A=n(26),F=n(44),L=n(27);function P(){var e=Object(d.a)(["\nmutation addUser($objects: [users_insert_input!]!) {\n  insert_users(objects: $objects) {\n    affected_rows\n  }\n}\n"]);return P=function(){return e},e}var U=f()(P());function C(){var e=Object(d.a)(["\n  query getUsers( $limit: Int = 10, $offset: Int = 0  ){\n    users(limit: $limit, offset: $offset) {\n      twitter\n      rocket\n      name\n    }\n}\n"]);return C=function(){return e},e}var D=f()(C()),T=(n(64),function(){var e=Object(O.b)(D),a=e.data,n=e.loading,t=e.error;return n?g():t?b():a?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"users-grid --header"},r.a.createElement("span",{className:"capitalized bold"}," name  "),r.a.createElement("span",{className:"capitalized bold"}," rocket name"),r.a.createElement("span",{className:"capitalized bold"}," twitter ")),a.users&&a.users.map((function(e,a){return r.a.createElement("div",{className:"users-grid",key:a},r.a.createElement("span",{className:"capitalized"}," ",e.name," "),r.a.createElement("span",null," ",e.rocket," "),r.a.createElement("span",null," ",e.twitter," "))}))):y("Not Found","warning")}),B=function(){var e=Object(t.useRef)(),a=Object(O.a)(U),n=Object(L.a)(a,2),c=n[0],l=n[1],i=l.loading,s=l.error,o=Object(t.useState)(!1),m=Object(L.a)(o,2),u=m[0],d=m[1],p=Object(t.useState)({}),f=Object(L.a)(p,2),h=f[0],E=f[1],v=function(e){var a=e.target,n=a.name,t=a.value;E(Object(F.a)({},h,Object(A.a)({},n,t)))},k=function(){var a=Object(z.a)(I.a.mark((function a(n){var t;return I.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(n.preventDefault(),t=function(e,a){return typeof e===a},h.name&&!t(h.name,"String")&&h.rocket&&!t(h.rocket,"String")){a.next=6;break}return d(!0),setTimeout((function(){d(!1)}),2800),a.abrupt("return");case 6:return a.prev=7,a.next=10,c({variables:{objects:[{name:h.name,rocket:h.rocket}]}});case 10:E({}),e.current.reset(),a.next=16;break;case 13:a.prev=13,a.t0=a.catch(7),console.log(a.t0);case 16:case"end":return a.stop()}}),a,null,[[7,13]])})));return function(e){return a.apply(this,arguments)}}();return r.a.createElement("div",{className:"container wide"},r.a.createElement("form",{className:"users",ref:e,onSubmit:function(){var e=Object(z.a)(I.a.mark((function e(a){return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",k(a));case 1:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()},r.a.createElement("label",{htmlFor:"name"},"name:",r.a.createElement("input",{disabled:i,onChange:function(e){return v(e)},type:"text",name:"name"})),r.a.createElement("label",{htmlFor:"rocket"},"rocket name propusal:",r.a.createElement("input",{disabled:i,onChange:function(e){return v(e)},type:"text",name:"rocket"})),r.a.createElement("label",{htmlFor:"twitter"},"twitter:",r.a.createElement("input",{disabled:i,onChange:function(e){return v(e)},type:"text",name:"twitter"})),r.a.createElement("button",{type:"submit"}," ",i?g():"send"),u&&y(" Please provide name and rocket name, only string allowed","warning")),i&&function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"new user";return r.a.createElement("div",{className:"alert alert-info"},"Saving ",e,"...")}(),s&&function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Unable to save the user";return r.a.createElement("div",{className:"alert alert-danger"},"An error occurred! ",e,".")}(),r.a.createElement("div",null,r.a.createElement(T,null)))},G=new i.a({uri:"https://api.spacex.land/graphql/"});var J=function(){return r.a.createElement(s.a,{client:G},r.a.createElement(o.a,null,r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},"SpaceX Graph-QL",r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(o.b,{to:"/"},"Home")),r.a.createElement("li",null,r.a.createElement(o.b,{to:"/add-user"},"Add User")))))),r.a.createElement("div",{className:"App-container"},r.a.createElement(m.c,null,r.a.createElement(m.a,{exact:!0,path:"/",component:j}),r.a.createElement(m.a,{path:"/launch/:id",component:S}),r.a.createElement(m.a,{path:"/add-user",component:B})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(J,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[47,1,2]]]);
//# sourceMappingURL=main.07ccc944.chunk.js.map