(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4f64fd21"],{"0366":function(t,e,r){var n=r("1c0b");t.exports=function(t,e,r){if(n(t),void 0===e)return t;switch(r){case 0:return function(){return t.call(e)};case 1:return function(r){return t.call(e,r)};case 2:return function(r,n){return t.call(e,r,n)};case 3:return function(r,n,i){return t.call(e,r,n,i)}}return function(){return t.apply(e,arguments)}}},"06cf":function(t,e,r){var n=r("83ab"),i=r("d1e7"),a=r("5c6c"),o=r("fc6a"),s=r("c04e"),c=r("5135"),l=r("0cfb"),u=Object.getOwnPropertyDescriptor;e.f=n?u:function(t,e){if(t=o(t),e=s(e,!0),l)try{return u(t,e)}catch(r){}if(c(t,e))return a(!i.f.call(t,e),t[e])}},"1be4":function(t,e,r){var n=r("d066");t.exports=n("document","documentElement")},"1c0b":function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},"1d80":function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on "+t);return t}},"23cb":function(t,e,r){var n=r("a691"),i=Math.max,a=Math.min;t.exports=function(t,e){var r=n(t);return r<0?i(r+e,0):a(r,e)}},"23e7":function(t,e,r){var n=r("da84"),i=r("06cf").f,a=r("9112"),o=r("6eeb"),s=r("ce4e"),c=r("e893"),l=r("94ca");t.exports=function(t,e){var r,u,f,d,h,p,v=t.target,b=t.global,m=t.stat;if(u=b?n:m?n[v]||s(v,{}):(n[v]||{}).prototype,u)for(f in e){if(h=e[f],t.noTargetGet?(p=i(u,f),d=p&&p.value):d=u[f],r=l(b?f:v+(m?".":"#")+f,t.forced),!r&&void 0!==d){if(typeof h===typeof d)continue;c(h,d)}(t.sham||d&&d.sham)&&a(h,"sham",!0),o(u,f,h,t)}}},"241c":function(t,e,r){var n=r("ca84"),i=r("7839"),a=i.concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return n(t,a)}},"297c":function(t,e,r){"use strict";var n=r("2b0e"),i=(r("6ece"),r("80d2")),a=function(t="",e=!1){const r=e?"width":"height",n="offset"+Object(i["p"])(r);return{beforeEnter(t){t._parent=t.parentNode,t._initialStyle={transition:t.style.transition,visibility:t.style.visibility,overflow:t.style.overflow,[r]:t.style[r]}},enter(e){const i=e._initialStyle,a=e[n]+"px";e.style.setProperty("transition","none","important"),e.style.visibility="hidden",e.style.visibility=i.visibility,e.style.overflow="hidden",e.style[r]="0",e.offsetHeight,e.style.transition=i.transition,t&&e._parent&&e._parent.classList.add(t),requestAnimationFrame(()=>{e.style[r]=a})},afterEnter:o,enterCancelled:o,leave(t){t._initialStyle={transition:"",visibility:"",overflow:t.style.overflow,[r]:t.style[r]},t.style.overflow="hidden",t.style[r]=t[n]+"px",t.offsetHeight,requestAnimationFrame(()=>t.style[r]="0")},afterLeave:a,leaveCancelled:a};function a(e){t&&e._parent&&e._parent.classList.remove(t),o(e)}function o(t){const e=t._initialStyle[r];t.style.overflow=t._initialStyle.overflow,null!=e&&(t.style[r]=e),delete t._initialStyle}};Object(i["f"])("carousel-transition"),Object(i["f"])("carousel-reverse-transition"),Object(i["f"])("tab-transition"),Object(i["f"])("tab-reverse-transition"),Object(i["f"])("menu-transition"),Object(i["f"])("fab-transition","center center","out-in"),Object(i["f"])("dialog-transition"),Object(i["f"])("dialog-bottom-transition");const o=Object(i["f"])("fade-transition"),s=(Object(i["f"])("scale-transition"),Object(i["f"])("scroll-x-transition"),Object(i["f"])("scroll-x-reverse-transition"),Object(i["f"])("scroll-y-transition"),Object(i["f"])("scroll-y-reverse-transition"),Object(i["f"])("slide-x-transition"));Object(i["f"])("slide-x-reverse-transition"),Object(i["f"])("slide-y-transition"),Object(i["f"])("slide-y-reverse-transition"),Object(i["d"])("expand-transition",a()),Object(i["d"])("expand-x-transition",a("",!0));var c=r("a9ad"),l=r("fe6c");function u(t="value",e="change"){return n["a"].extend({name:"proxyable",model:{prop:t,event:e},props:{[t]:{required:!1}},data(){return{internalLazyValue:this[t]}},computed:{internalValue:{get(){return this.internalLazyValue},set(t){t!==this.internalLazyValue&&(this.internalLazyValue=t,this.$emit(e,t))}}},watch:{[t](t){this.internalLazyValue=t}}})}const f=u();var d=f,h=r("7560"),p=r("58df");const v=Object(p["a"])(c["a"],Object(l["b"])(["absolute","fixed","top","bottom"]),d,h["a"]);var b=v.extend({name:"v-progress-linear",props:{active:{type:Boolean,default:!0},backgroundColor:{type:String,default:null},backgroundOpacity:{type:[Number,String],default:null},bufferValue:{type:[Number,String],default:100},color:{type:String,default:"primary"},height:{type:[Number,String],default:4},indeterminate:Boolean,query:Boolean,rounded:Boolean,stream:Boolean,striped:Boolean,value:{type:[Number,String],default:0}},data(){return{internalLazyValue:this.value||0}},computed:{__cachedBackground(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor||this.color,{staticClass:"v-progress-linear__background",style:this.backgroundStyle}))},__cachedBar(){return this.$createElement(this.computedTransition,[this.__cachedBarType])},__cachedBarType(){return this.indeterminate?this.__cachedIndeterminate:this.__cachedDeterminate},__cachedBuffer(){return this.$createElement("div",{staticClass:"v-progress-linear__buffer",style:this.styles})},__cachedDeterminate(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__determinate",style:{width:Object(i["c"])(this.normalizedValue,"%")}}))},__cachedIndeterminate(){return this.$createElement("div",{staticClass:"v-progress-linear__indeterminate",class:{"v-progress-linear__indeterminate--active":this.active}},[this.genProgressBar("long"),this.genProgressBar("short")])},__cachedStream(){return this.stream?this.$createElement("div",this.setTextColor(this.color,{staticClass:"v-progress-linear__stream",style:{width:Object(i["c"])(100-this.normalizedBuffer,"%")}})):null},backgroundStyle(){const t=null==this.backgroundOpacity?this.backgroundColor?1:.3:parseFloat(this.backgroundOpacity);return{opacity:t,left:Object(i["c"])(this.normalizedValue,"%"),width:Object(i["c"])(this.normalizedBuffer-this.normalizedValue,"%")}},classes(){return{"v-progress-linear--absolute":this.absolute,"v-progress-linear--fixed":this.fixed,"v-progress-linear--query":this.query,"v-progress-linear--reactive":this.reactive,"v-progress-linear--rounded":this.rounded,"v-progress-linear--striped":this.striped,...this.themeClasses}},computedTransition(){return this.indeterminate?o:s},normalizedBuffer(){return this.normalize(this.bufferValue)},normalizedValue(){return this.normalize(this.internalLazyValue)},reactive(){return Boolean(this.$listeners.change)},styles(){const t={};return this.active||(t.height=0),this.indeterminate||100===parseFloat(this.normalizedBuffer)||(t.width=Object(i["c"])(this.normalizedBuffer,"%")),t}},methods:{genContent(){const t=Object(i["j"])(this,"default",{value:this.internalLazyValue});return t?this.$createElement("div",{staticClass:"v-progress-linear__content"},t):null},genListeners(){const t=this.$listeners;return this.reactive&&(t.click=this.onClick),t},genProgressBar(t){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__indeterminate",class:{[t]:!0}}))},onClick(t){if(!this.reactive)return;const{width:e}=this.$el.getBoundingClientRect();this.internalValue=t.offsetX/e*100},normalize(t){return t<0?0:t>100?100:parseFloat(t)}},render(t){const e={staticClass:"v-progress-linear",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":this.normalizedBuffer,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,style:{bottom:this.bottom?0:void 0,height:this.active?Object(i["c"])(this.height):0,top:this.top?0:void 0},on:this.genListeners()};return t("div",e,[this.__cachedStream,this.__cachedBackground,this.__cachedBuffer,this.__cachedBar,this.genContent()])}}),m=b;e["a"]=n["a"].extend().extend({name:"loadable",props:{loading:{type:[Boolean,String],default:!1},loaderHeight:{type:[Number,String],default:2}},methods:{genProgress(){return!1===this.loading?null:this.$slots.progress||this.$createElement(m,{props:{absolute:!0,color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,height:this.loaderHeight,indeterminate:!0}})}}})},"37e8":function(t,e,r){var n=r("83ab"),i=r("9bf2"),a=r("825a"),o=r("df75");t.exports=n?Object.defineProperties:function(t,e){a(t);var r,n=o(e),s=n.length,c=0;while(s>c)i.f(t,r=n[c++],e[r]);return t}},"428f":function(t,e,r){var n=r("da84");t.exports=n},"44ad":function(t,e,r){var n=r("d039"),i=r("c6b6"),a="".split;t.exports=n((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==i(t)?a.call(t,""):Object(t)}:Object},"44d2":function(t,e,r){var n=r("b622"),i=r("7c73"),a=r("9bf2"),o=n("unscopables"),s=Array.prototype;void 0==s[o]&&a.f(s,o,{configurable:!0,value:i(null)}),t.exports=function(t){s[o][t]=!0}},"4d64":function(t,e,r){var n=r("fc6a"),i=r("50c4"),a=r("23cb"),o=function(t){return function(e,r,o){var s,c=n(e),l=i(c.length),u=a(o,l);if(t&&r!=r){while(l>u)if(s=c[u++],s!=s)return!0}else for(;l>u;u++)if((t||u in c)&&c[u]===r)return t||u||0;return!t&&-1}};t.exports={includes:o(!0),indexOf:o(!1)}},"50c4":function(t,e,r){var n=r("a691"),i=Math.min;t.exports=function(t){return t>0?i(n(t),9007199254740991):0}},"56ef":function(t,e,r){var n=r("d066"),i=r("241c"),a=r("7418"),o=r("825a");t.exports=n("Reflect","ownKeys")||function(t){var e=i.f(o(t)),r=a.f;return r?e.concat(r(t)):e}},"615b":function(t,e,r){},"65f0":function(t,e,r){var n=r("861d"),i=r("e8b5"),a=r("b622"),o=a("species");t.exports=function(t,e){var r;return i(t)&&(r=t.constructor,"function"!=typeof r||r!==Array&&!i(r.prototype)?n(r)&&(r=r[o],null===r&&(r=void 0)):r=void 0),new(void 0===r?Array:r)(0===e?0:e)}},"6ece":function(t,e,r){},7418:function(t,e){e.f=Object.getOwnPropertySymbols},7839:function(t,e){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},"7b0b":function(t,e,r){var n=r("1d80");t.exports=function(t){return Object(n(t))}},"7c73":function(t,e,r){var n,i=r("825a"),a=r("37e8"),o=r("7839"),s=r("d012"),c=r("1be4"),l=r("cc12"),u=r("f772"),f=">",d="<",h="prototype",p="script",v=u("IE_PROTO"),b=function(){},m=function(t){return d+p+f+t+d+"/"+p+f},g=function(t){t.write(m("")),t.close();var e=t.parentWindow.Object;return t=null,e},y=function(){var t,e=l("iframe"),r="java"+p+":";return e.style.display="none",c.appendChild(e),e.src=String(r),t=e.contentWindow.document,t.open(),t.write(m("document.F=Object")),t.close(),t.F},_=function(){try{n=document.domain&&new ActiveXObject("htmlfile")}catch(e){}_=n?g(n):y();var t=o.length;while(t--)delete _[h][o[t]];return _()};s[v]=!0,t.exports=Object.create||function(t,e){var r;return null!==t?(b[h]=i(t),r=new b,b[h]=null,r[v]=t):r=_(),void 0===e?r:a(r,e)}},"7db0":function(t,e,r){"use strict";var n=r("23e7"),i=r("b727").find,a=r("44d2"),o=r("ae40"),s="find",c=!0,l=o(s);s in[]&&Array(1)[s]((function(){c=!1})),n({target:"Array",proto:!0,forced:c||!l},{find:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),a(s)},"94ca":function(t,e,r){var n=r("d039"),i=/#|\.prototype\./,a=function(t,e){var r=s[o(t)];return r==l||r!=c&&("function"==typeof e?n(e):!!e)},o=a.normalize=function(t){return String(t).replace(i,".").toLowerCase()},s=a.data={},c=a.NATIVE="N",l=a.POLYFILL="P";t.exports=a},"99d9":function(t,e,r){"use strict";r.d(e,"b",(function(){return s})),r.d(e,"a",(function(){return o}));var n=r("80d2"),i=r("b0af");const a=Object(n["e"])("v-card__actions"),o=Object(n["e"])("v-card__text"),s=Object(n["e"])("v-card__title");i["a"]},a691:function(t,e){var r=Math.ceil,n=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?n:r)(t)}},ae40:function(t,e,r){var n=r("83ab"),i=r("d039"),a=r("5135"),o=Object.defineProperty,s={},c=function(t){throw t};t.exports=function(t,e){if(a(s,t))return s[t];e||(e={});var r=[][t],l=!!a(e,"ACCESSORS")&&e.ACCESSORS,u=a(e,0)?e[0]:c,f=a(e,1)?e[1]:void 0;return s[t]=!!r&&!i((function(){if(l&&!n)return!0;var t={length:-1};l?o(t,1,{enumerable:!0,get:c}):t[1]=1,r.call(t,u,f)}))}},b0af:function(t,e,r){"use strict";r("615b");var n=r("10d2"),i=r("297c"),a=r("1c87"),o=r("58df");e["a"]=Object(o["a"])(i["a"],a["a"],n["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},outlined:Boolean,raised:Boolean},computed:{classes(){return{"v-card":!0,...a["a"].options.computed.classes.call(this),"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.loading||this.disabled,"v-card--outlined":this.outlined,"v-card--raised":this.raised,...n["a"].options.computed.classes.call(this)}},styles(){const t={...n["a"].options.computed.styles.call(this)};return this.img&&(t.background=`url("${this.img}") center center / cover no-repeat`),t}},methods:{genProgress(){const t=i["a"].options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress"},[t]):null}},render(t){const{tag:e,data:r}=this.generateRouteLink();return r.style=this.styles,this.isClickable&&(r.attrs=r.attrs||{},r.attrs.tabindex=0),t(e,this.setBackgroundColor(this.color,r),[this.genProgress(),this.$slots.default])}})},b727:function(t,e,r){var n=r("0366"),i=r("44ad"),a=r("7b0b"),o=r("50c4"),s=r("65f0"),c=[].push,l=function(t){var e=1==t,r=2==t,l=3==t,u=4==t,f=6==t,d=5==t||f;return function(h,p,v,b){for(var m,g,y=a(h),_=i(y),O=n(p,v,3),x=o(_.length),j=0,w=b||s,C=e?w(h,x):r?w(h,0):void 0;x>j;j++)if((d||j in _)&&(m=_[j],g=O(m,j,y),t))if(e)C[j]=g;else if(g)switch(t){case 3:return!0;case 5:return m;case 6:return j;case 2:c.call(C,m)}else if(u)return!1;return f?-1:l||u?u:C}};t.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6)}},ca84:function(t,e,r){var n=r("5135"),i=r("fc6a"),a=r("4d64").indexOf,o=r("d012");t.exports=function(t,e){var r,s=i(t),c=0,l=[];for(r in s)!n(o,r)&&n(s,r)&&l.push(r);while(e.length>c)n(s,r=e[c++])&&(~a(l,r)||l.push(r));return l}},d066:function(t,e,r){var n=r("428f"),i=r("da84"),a=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,e){return arguments.length<2?a(n[t])||a(i[t]):n[t]&&n[t][e]||i[t]&&i[t][e]}},d1e7:function(t,e,r){"use strict";var n={}.propertyIsEnumerable,i=Object.getOwnPropertyDescriptor,a=i&&!n.call({1:2},1);e.f=a?function(t){var e=i(this,t);return!!e&&e.enumerable}:n},df75:function(t,e,r){var n=r("ca84"),i=r("7839");t.exports=Object.keys||function(t){return n(t,i)}},e300:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",[r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("v-card",{staticClass:"py-3 px-3"},[r("v-img",{attrs:{height:"450px",contain:"",src:this.itemPic.url}}),this.itemPic.title?r("v-card-text",[r("h1",{staticClass:"headline mt-1 text-center"},[t._v(t._s(this.itemPic.title))]),r("p",{staticClass:"body-1 mt-1 text-center"},[t._v(t._s(this.itemPic.info))])]):t._e()],1)],1),r("v-col",{staticClass:"mt-3 text-center",attrs:{cols:"12"}},[r("v-btn",{attrs:{color:"grey",fab:"",dark:""},on:{click:function(e){return t.fnDeleteItem()}}},[r("v-icon",[t._v("delete")])],1)],1)],1)],1)},i=[],a=(r("7db0"),r("05a2")),o={name:"App",firebase:{oPictures:a["a"]},data:function(){return{oPictures:[],itemPic:null}},created:function(){var t=this.$route.params.p_id;this.itemPic=this.oPictures.find((function(e){return e[".key"]===t}))},methods:{fnDeleteItem:function(){a["a"].child(this.itemPic[".key"]).remove(),this.itemPic["filename"]&&a["b"].ref("images").child(this.itemPic["filename"]).delete(),this.$router.push("/")}}},s=o,c=r("2877"),l=r("6544"),u=r.n(l),f=r("8336"),d=r("b0af"),h=r("99d9"),p=r("62ad"),v=r("a523"),b=r("132d"),m=r("adda"),g=r("0fd9b"),y=Object(c["a"])(s,n,i,!1,null,null,null);e["default"]=y.exports;u()(y,{VBtn:f["a"],VCard:d["a"],VCardText:h["a"],VCol:p["a"],VContainer:v["a"],VIcon:b["a"],VImg:m["a"],VRow:g["a"]})},e893:function(t,e,r){var n=r("5135"),i=r("56ef"),a=r("06cf"),o=r("9bf2");t.exports=function(t,e){for(var r=i(e),s=o.f,c=a.f,l=0;l<r.length;l++){var u=r[l];n(t,u)||s(t,u,c(e,u))}}},e8b5:function(t,e,r){var n=r("c6b6");t.exports=Array.isArray||function(t){return"Array"==n(t)}},fc6a:function(t,e,r){var n=r("44ad"),i=r("1d80");t.exports=function(t){return n(i(t))}}}]);
//# sourceMappingURL=chunk-4f64fd21.897272cb.js.map