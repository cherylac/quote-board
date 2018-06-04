webpackJsonp([1],{"1/oy":function(t,e){},"3sYM":function(t,e){},"9M+g":function(t,e){},DfpV:function(t,e){},Id91:function(t,e){},Jmt5:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=a("7+uW"),s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",[a("b-navbar",{attrs:{id:"navbar",toggleable:"md",type:"light",variant:"info"}},[a("b-navbar-toggle",{attrs:{target:"nav_collapse"}}),t._v(" "),a("b-navbar-brand",{staticClass:"mb-0",attrs:{tag:"h1"}},[t._v("Megan's Quote Board")]),t._v(" "),a("b-collapse",{attrs:{"is-nav":"",id:"nav_collapse"}},[a("b-navbar-nav",{staticClass:"ml-auto"},[a("b-nav-item",{attrs:{href:"#/"}},[t._v("Quote Board")]),t._v(" . \n          "),a("b-nav-item",{attrs:{href:"#/add"}},[t._v("Add a Quote")]),t._v(" .\n          "),a("b-nav-item",{attrs:{href:"#/about"}},[t._v("About this App")])],1)],1)],1)],1),t._v(" "),a("main",{staticClass:"container"},[a("router-view")],1)])},staticRenderFns:[]};var r=a("VU/8")({name:"app"},s,!1,function(t){a("3sYM")},"data-v-884d7322",null).exports,n=a("/ocq"),i=a("yviF"),u=a.n(i),l=(a("kxiW"),u.a.initializeApp({apiKey:"AIzaSyD8HTSyN2VZzuQJFxaFB9NBCxXeWsGz7fk",authDomain:"quote-board-9b038.firebaseapp.com",databaseURL:"https://quote-board-9b038.firebaseio.com",projectId:"quote-board-9b038",storageBucket:"quote-board-9b038.appspot.com",messagingSenderId:"129676071799"})),c=l.database(),d={db:c,quotesRef:c.ref("quotes"),firebaseApp:l},h=a("vQJi"),v=a.n(h),p={name:"app",firebase:{quotes:d.quotesRef},data:function(){return{showForm:!0,showError:!1,newQuote:{title:"",author:""}}},methods:{validateForm:function(){""!=this.title&&""!=this.author?this.showForm=!1:this.showError=!0},onSubmit:function(t){d.quotesRef.push(this.newQuote),this.newQuote.title="",this.newQuote.author="",v.a.success("Quote added successfully")},onReset:function(t){t.preventDefault(),this.newQuote.title="",this.newQuote.author="",this.show=!1}}},m={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"component mx-auto"},[a("b-form",{directives:[{name:"show",rawName:"v-show",value:t.showForm,expression:"showForm"}],attrs:{id:"form"},on:{submit:[t.onSubmit,function(e){return e.preventDefault(),t.validateForm(e)}],reset:t.onReset}},[a("h2",{staticClass:"mx-auto"},[t._v("Add a Quote to the Quote Board")]),t._v(" "),a("b-form-group",{attrs:{label:"Quote:","label-for":"quoteTitle"}},[a("b-form-textarea",{attrs:{input:"",type:"text",id:"title",name:"title",tabindex:"0",size:"lg",required:"",placeholder:"Enter quote.",rows:3,"max-rows":10},model:{value:t.newQuote.title,callback:function(e){t.$set(t.newQuote,"title",e)},expression:"newQuote.title"}})],1),t._v(" "),a("b-form-group",{attrs:{label:"Author:","label-for":"quoteAuthor"}},[a("b-form-input",{attrs:{input:"",type:"text",id:"author",name:"author",tabindex:"0",size:"lg",required:"",placeholder:"Enter author."},model:{value:t.newQuote.author,callback:function(e){t.$set(t.newQuote,"author",e)},expression:"newQuote.author"}})],1),t._v(" "),a("b-button",{attrs:{size:"lg",variant:"primary",input:"",type:"submit",value:"submit"}},[t._v("Add Quote")]),t._v(" "),a("b-button",{attrs:{size:"lg",variant:"danger",input:"",type:"reset",value:"reset"}},[t._v("Reset")])],1),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:!t.showForm,expression:"!showForm"}],staticClass:"success-message"},[a("h2",[t._v("You have successfully added a new quote to the quote board!")])]),t._v(" "),a("p",{directives:[{name:"show",rawName:"v-show",value:t.showError,expression:"showError"}],staticClass:"error"},[t._v("Please enter a quote and author.")])],1)},staticRenderFns:[]};var f=a("VU/8")(p,m,!1,function(t){a("DfpV")},"data-v-07dd78ea",null).exports,b={name:"app",firebase:{quotes:d.quotesRef},data:function(){return{selected:null}},methods:{removeQuote:function(t){d.quotesRef.child(t[".key"]).remove(),v.a.success("Quote removed successfully")}}},_={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"component mx-auto"},[a("b-card-group",{attrs:{columns:""}},t._l(t.quotes,function(e){return a("b-card",{key:e},[a("h2",{staticClass:"card-title"},[t._v(t._s(e.title))]),t._v(" "),a("p",{staticClass:"card-text"},[t._v("~ "+t._s(e.author))]),t._v(" "),a("b-link",{attrs:{slot:"footer"},slot:"footer"},[a("span",{staticClass:"glyphicon glyphicon-trash",attrs:{"aria-hidden":"true"},on:{click:function(a){t.removeQuote(e)}}})])],1)}))],1)},staticRenderFns:[]};var w=a("VU/8")(b,_,!1,function(t){a("tx2E")},"data-v-4c2c7200",null).exports,g=a("c27y"),y=a("e6fC");o.a.use(n.a),o.a.use(y.a);var Q=new n.a({routes:[{path:"/",name:"QuoteBoard",component:w},{path:"/about",name:"About",component:g.default},{path:"/add",name:"AddQuote",component:f}]}),x=a("1mcD"),q=a.n(x);a("Jmt5"),a("9M+g");o.a.use(q.a),o.a.use(y.a),o.a.config.productionTip=!1,new o.a({el:"#app",router:Q,components:{App:r},template:"<App/>"})},Zs8U:function(t,e){},c27y:function(t,e,a){"use strict";var o=a("Zs8U"),s=a.n(o),r=a("xQld");var n=function(t){a("kmx/")},i=a("VU/8")(s.a,r.a,!1,n,"data-v-aee7ed7e",null);e.default=i.exports},"kmx/":function(t,e){},tx2E:function(t,e){},xQld:function(t,e,a){"use strict";var o={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"component mx-auto"},[a("div",{staticClass:"container"},[a("h2",{staticClass:"mb-5"},[t._v("About Megan's Quote Board App")]),t._v(" "),a("p",[t._v("When I was in college, my roommates and I had a quote board hanging on the wall of our apartment so that at any time we could record and memorialize some of the silly, funny, ironic, wise, poignant, or otherwise notable quotes that were said over the course of the school year.")]),t._v(" "),a("p",[t._v("Recently, I had a little reunion with some former college roommates and while we reminisced about the quote board and how much fun it was, I got to thinking... surely I could make a simple quote board web app.")]),t._v(" "),a("p",[t._v("So I built this app with Vue.js 2, Boostrap-Vue, the Firebase API, and I deployed it to a public server using Github Pages.")]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("This app was built by "),a("a",{attrs:{href:"http://www.meganmotis.com",target:"_blank"}},[t._v("Megan M. Otis")]),t._v(" in 2018 as a capstone project for the "),a("a",{attrs:{href:"https://ncs.seattleu.edu/programs-courses/web-development/",target:"_blank"}},[t._v("Web Development Certificate program")]),t._v(" in the "),a("a",{attrs:{href:"https://ncs.seattleu.edu/",target:"_blank"}},[t._v("School of New and Continuing Studies (NCS)")]),t._v(" at "),a("a",{attrs:{href:"https://www.seattleu.edu/",target:"_blank"}},[t._v("Seattle University")]),t._v(".")])])])}]};e.a=o},zj2Q:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.b3a74e32feaf5cb74d86.js.map