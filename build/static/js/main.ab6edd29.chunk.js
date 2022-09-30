/*! For license information please see main.ab6edd29.chunk.js.LICENSE.txt */
(this["webpackJsonpreact-the-complete-guide"]=this["webpackJsonpreact-the-complete-guide"]||[]).push([[0],[,,function(t,e,r){t.exports={control:"AddMovie_control__23StK"}},,,,function(t,e,r){t.exports={movie:"Movie_movie__3ZguP"}},function(t,e,r){t.exports={"movies-list":"MoviesList_movies-list__9QNwO"}},function(t,e,r){t.exports=r(18)},,,,,,,,function(t,e,r){},function(t,e,r){},function(t,e,r){"use strict";r.r(e);var n=r(0),o=r.n(n),a=r(5),i=r.n(a),c=(r(16),r(3)),u=r(1),l=r(6),s=r.n(l),f=function(t){return o.a.createElement("li",{className:s.a.movie},o.a.createElement("h2",null,t.title),o.a.createElement("h3",null,t.releaseDate),o.a.createElement("p",null,t.openingText))},h=r(7),p=r.n(h),v=function(t){return o.a.createElement("ul",{className:p.a["movies-list"]},t.movies.map((function(t){return o.a.createElement(f,{key:t.id,title:t.title,releaseDate:t.release,openingText:t.openingText})})))},d=r(2),m=r.n(d);var y=function(t){var e=Object(n.useRef)(""),r=Object(n.useRef)(""),a=Object(n.useRef)("");return o.a.createElement("form",{onSubmit:function(n){if(n.preventDefault(),e.current.value&&r.current.value&&a.current.value){var o={title:e.current.value,openingText:r.current.value,releaseDate:a.current.value};t.onAddMovie(o),e.current.value="",r.current.value="",a.current.value=""}}},o.a.createElement("div",{className:m.a.control},o.a.createElement("label",{htmlFor:"title"},"Title"),o.a.createElement("input",{type:"text",id:"title",ref:e})),o.a.createElement("div",{className:m.a.control},o.a.createElement("label",{htmlFor:"opening-text"},"Opening Text"),o.a.createElement("textarea",{rows:"5",id:"opening-text",ref:r})),o.a.createElement("div",{className:m.a.control},o.a.createElement("label",{htmlFor:"date"},"Release Date"),o.a.createElement("input",{type:"text",id:"date",ref:a})),o.a.createElement("button",null,"Add Movie"))};r(17);function g(){g=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",a=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(k){c=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var o=e&&e.prototype instanceof f?e:f,a=Object.create(o.prototype),i=new j(n||[]);return a._invoke=function(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return _()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=b(i,r);if(c){if(c===s)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=l(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===s)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}(t,r,i),a}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(k){return{type:"throw",arg:k}}}t.wrap=u;var s={};function f(){}function h(){}function p(){}var v={};c(v,o,(function(){return this}));var d=Object.getPrototypeOf,m=d&&d(d(L([])));m&&m!==e&&r.call(m,o)&&(v=m);var y=p.prototype=f.prototype=Object.create(v);function w(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){var n;this._invoke=function(o,a){function i(){return new e((function(n,i){!function n(o,a,i,c){var u=l(t[o],t,a);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==typeof f&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,i,c)}),(function(t){n("throw",t,i,c)})):e.resolve(f).then((function(t){s.value=t,i(s)}),(function(t){return n("throw",t,i,c)}))}c(u.arg)}(o,a,n,i)}))}return n=n?n.then(i,i):i()}}function b(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,b(t,e),"throw"===e.method))return s;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var n=l(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,s;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,s):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,s)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function L(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:_}}function _(){return{value:void 0,done:!0}}return h.prototype=p,c(y,"constructor",p),c(p,"constructor",h),h.displayName=c(p,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,c(t,i,"GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},w(E.prototype),c(E.prototype,a,(function(){return this})),t.AsyncIterator=E,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new E(u(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},w(y),c(y,i,"Generator"),c(y,o,(function(){return this})),c(y,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=L,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,s):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),s},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),O(r),s}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;O(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:L(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),s}},t}var w=function(){var t=Object(n.useState)([]),e=Object(u.a)(t,2),r=e[0],a=e[1],i=Object(n.useState)(!1),l=Object(u.a)(i,2),s=l[0],f=l[1],h=Object(n.useState)(!1),p=Object(u.a)(h,2),d=p[0],m=p[1],w=Object(n.useState)(null),E=Object(u.a)(w,2),b=E[0],x=E[1],O=Object(n.useCallback)(Object(c.a)(g().mark((function t(){var e,r,n,o;return g().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return m(!0),x(null),t.prev=2,t.next=5,fetch("https://add-movies-214cf-default-rtdb.firebaseio.com/movieData.json");case 5:if((e=t.sent).ok){t.next=8;break}throw new Error("Something went wrong!");case 8:return t.next=10,e.json();case 10:for(o in r=t.sent,console.log(r),n=[],r)n.push({id:o,title:r[o].title,release:r[o].releaseDate,openingText:r[o].openingText});a(n),t.next=20;break;case 17:t.prev=17,t.t0=t.catch(2),x(t.t0.message);case 20:m(!1);case 21:case"end":return t.stop()}}),t,null,[[2,17]])}))),[]);function j(){return(j=Object(c.a)(g().mark((function t(e){return g().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://add-movies-214cf-default-rtdb.firebaseio.com/movieData.json",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}});case 2:f(!0);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}Object(n.useEffect)((function(){O()}),[O]);var L=o.a.createElement("p",null,"Found no movies.");return r.length>0&&(L=o.a.createElement(v,{movies:r,newAdded:s})),b&&(L=o.a.createElement("p",null,b)),d&&(L=o.a.createElement("p",null,"Loading...")),o.a.createElement(o.a.Fragment,null,o.a.createElement("section",null,o.a.createElement(y,{onAddMovie:function(t){return j.apply(this,arguments)}})),o.a.createElement("section",null,o.a.createElement("button",{onClick:O},"Fetch Movies")),o.a.createElement("section",null,L))};i.a.render(o.a.createElement(w,null),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.ab6edd29.chunk.js.map