webpackJsonp([5],{"/s4m":function(n,t,e){"use strict";var i=e("zUuJ");t.a={name:"masker",props:{color:{type:String,default:"0, 0, 0"},opacity:{type:Number,default:.5},fullscreen:{type:Boolean,default:!1}},computed:{style:function(){return{backgroundColor:"rgba("+(/,/.test(this.color)?this.color:Object(i.a)(this.color.replace("#","")).join(","))+","+this.opacity+")"}}}}},"1HIy":function(n,t,e){"use strict";function i(n){s||e("Nvtm")}var o=(e("wdhP"),e("QiPk")),r=e("pUa7"),s=!1,a=e("VU/8"),l=i,c=a(o.a,r.a,!1,l,null,null);c.options.__file="node_modules/vux/src/components/group-title/index.vue",t.a=c.exports},"1UGb":function(n,t,e){"use strict";var i=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"vux-slider"},[e("div",{staticClass:"vux-swiper",style:{height:n.xheight}},[n._t("default"),n._v(" "),n._l(n.list,function(t,i){return e("div",{staticClass:"vux-swiper-item",attrs:{"data-index":i},on:{click:function(e){n.clickListItem(t)}}},[e("a",{attrs:{href:"javascript:"}},[e("div",{staticClass:"vux-img",style:{backgroundImage:n.buildBackgroundUrl(t)}}),n._v(" "),n.showDescMask?e("p",{staticClass:"vux-swiper-desc"},[n._v(n._s(t.title))]):n._e()])])}),n._v(" "),n._l(n.listTwoLoopItem,function(t,i){return n.listTwoLoopItem.length>0?e("div",{staticClass:"vux-swiper-item vux-swiper-item-clone",attrs:{"data-index":i},on:{click:function(e){n.clickListItem(t)}}},[e("a",{attrs:{href:"javascript:"}},[e("div",{staticClass:"vux-img",style:{backgroundImage:n.buildBackgroundUrl(t)}}),n._v(" "),n.showDescMask?e("p",{staticClass:"vux-swiper-desc"},[n._v(n._s(t.title))]):n._e()])]):n._e()})],2),n._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:n.showDots,expression:"showDots"}],class:[n.dotsClass,"vux-indicator","vux-indicator-"+n.dotsPosition]},n._l(n.length,function(t){return e("a",{attrs:{href:"javascript:"}},[e("i",{staticClass:"vux-icon-dot",class:{active:t-1===n.current}})])}))])},o=[];i._withStripped=!0;var r={render:i,staticRenderFns:o};t.a=r},"24fE":function(n,t,e){"use strict";var i=e("mvHQ"),o=e.n(i),r=e("NjrX"),s=e("0FxO");t.a={name:"swiper",created:function(){this.index=this.value||0,this.index&&(this.current=this.index)},mounted:function(){var n=this;this.hasTwoLoopItem(),this.$nextTick(function(){n.list&&0===n.list.length||n.render(n.index),n.xheight=n.getHeight(),n.$emit("on-get-height",n.xheight)})},methods:{hasTwoLoopItem:function(){2===this.list.length&&this.loop?this.listTwoLoopItem=this.list:this.listTwoLoopItem=[]},clickListItem:function(n){Object(s.b)(n.url,this.$router),this.$emit("on-click-list-item",JSON.parse(o()(n)))},buildBackgroundUrl:function(n){return n.fallbackImg?"url("+n.img+"), url("+n.fallbackImg+")":"url("+n.img+")"},render:function(){var n=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.swiper&&this.swiper.destroy(),this.swiper=new r.a({container:this.$el,direction:this.direction,auto:this.auto,loop:this.loop,interval:this.interval,threshold:this.threshold,duration:this.duration,height:this.height||this._height,minMovingDistance:this.minMovingDistance,imgList:this.imgList}).on("swiped",function(t,e){n.current=e%n.length,n.index=e%n.length}),t>0&&this.swiper.go(t)},rerender:function(){var n=this;this.$el&&!this.hasRender&&(this.hasRender=!0,this.hasTwoLoopItem(),this.$nextTick(function(){n.index=n.value||0,n.current=n.value||0,n.length=n.list.length||n.$children.length,n.destroy(),n.render(n.value)}))},destroy:function(){this.hasRender=!1,this.swiper&&this.swiper.destroy()},getHeight:function(){var n=parseInt(this.height,10);return n?this.height:n?void 0:this.aspectRatio?this.$el.offsetWidth*this.aspectRatio+"px":"180px"}},props:{list:{type:Array,default:function(){return[]}},direction:{type:String,default:"horizontal"},showDots:{type:Boolean,default:!0},showDescMask:{type:Boolean,default:!0},dotsPosition:{type:String,default:"right"},dotsClass:String,auto:Boolean,loop:Boolean,interval:{type:Number,default:3e3},threshold:{type:Number,default:50},duration:{type:Number,default:300},height:{type:String,default:"auto"},aspectRatio:Number,minMovingDistance:{type:Number,default:0},value:{type:Number,default:0}},data:function(){return{hasRender:!1,current:this.index||0,xheight:"auto",length:this.list.length,index:0,listTwoLoopItem:[]}},watch:{auto:function(n){n?this.swiper&&this.swiper._auto():this.swiper&&this.swiper.stop()},list:function(n){this.rerender()},current:function(n){this.index=n,this.$emit("on-index-change",n)},index:function(n){var t=this;n!==this.current&&this.$nextTick(function(){t.swiper&&t.swiper.go(n)}),this.$emit("input",n)},value:function(n){this.index=n}},beforeDestroy:function(){this.destroy()}}},"31as":function(n,t,e){"use strict";var i=function(){var n=this,t=n.$createElement;return(n._self._c||t)("div",{staticClass:"weui-grids"},[n._t("default")],2)},o=[];i._withStripped=!0;var r={render:i,staticRenderFns:o};t.a=r},"4JWl":function(n,t,e){"use strict";var i=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"home-box"},[e("div",[e("swiper",{attrs:{list:n.banner_list,auto:!0,loop:!0}})],1),n._v(" "),e("group",[e("group-title",{attrs:{color:"#333"}},[n._v("游戏分类")]),n._v(" "),e("grid",{attrs:{cols:4}},n._l(n.game_list,function(t){return e("grid-item",{key:t.id,attrs:{label:t.name},nativeOn:{click:function(e){n.go_rooms(t.id)}}},[e("img",{attrs:{slot:"icon",src:"/static/img/wangzherongyao.jpg"},slot:"icon"})])}))],1),n._v(" "),e("group",{staticClass:"hot"},[e("group-title",{attrs:{color:"#333"}},[n._v("热门房间")]),n._v(" "),n._l(n.rooms,function(t){return e("div",{staticStyle:{margin:"10px",overflow:"hidden"},on:{click:function(e){n.go_room(t.id)}}},[e("masker",{staticStyle:{"border-radius":"2px"},attrs:{color:"F9C90C",opacity:.8}},[e("div",{staticClass:"m-img",style:"background-image:url("+t.pic+")"}),n._v(" "),e("div",{staticClass:"m-title",attrs:{slot:"content"},slot:"content"},[e("h3",[n._v(n._s(t.name))]),n._v(" "),e("br"),n._v(" "),e("span",{staticClass:"m-time"},[n._v("房间号："+n._s(t.id)+" ")]),n._v(" "),e("span",{staticClass:"m-time"},[n._v("人数："+n._s(t.current_count)+"/"+n._s(t.max_count)+" ")]),n._v(" "),e("span",{staticClass:"m-time"},[n._v("报名费："+n._s(t.apply_money)+" ")]),n._v(" "),e("span",{staticClass:"m-time"},[n._v("状态：进行中 ")])])])],1)})],2)],1)},o=[];i._withStripped=!0;var r={render:i,staticRenderFns:o};t.a=r},"80dy":function(n,t,e){"use strict";var i=function(){var n=this,t=n.$createElement;return(n._self._c||t)("div",{staticClass:"vux-swiper-item"},[n._t("default")],2)},o=[];i._withStripped=!0;var r={render:i,staticRenderFns:o};t.a=r},"9ADW":function(n,t,e){"use strict";var i=e("kNDc"),o=e("LgOF"),r=e("fBcm"),s=e("b+jt"),a=e("rHil"),l=e("1HIy"),c=e("XYix");i.a,o.a,r.a,s.a,a.a,l.a,c.a},"9I/8":function(n,t,e){t=n.exports=e("FZ+f")(!1),t.push([n.i,'/**\n* actionsheet\n*/\n/**\n* datetime\n*/\n/**\n* tabbar\n*/\n/**\n* tab\n*/\n/**\n* dialog\n*/\n/**\n* x-number\n*/\n/**\n* checkbox\n*/\n/**\n* check-icon\n*/\n/**\n* Cell\n*/\n/**\n* Mask\n*/\n/**\n* Range\n*/\n/**\n* Tabbar\n*/\n/**\n* Header\n*/\n/**\n* Timeline\n*/\n/**\n* Switch\n*/\n/**\n* Button\n*/\n/**\n* swipeout\n*/\n/**\n* Cell\n*/\n/**\n* Badge\n*/\n/**\n* Popover\n*/\n/**\n* Button tab\n*/\n/* alias */\n/**\n* Swiper\n*/\n/**\n* checklist\n*/\n/**\n* popup-picker\n*/\n/**\n* popup\n*/\n/**\n* popup-header\n*/\n/**\n* form-preview\n*/\n/**\n* load-more\n*/\n/**\n* sticky\n*/\n/**\n* group\n*/\n/**\n* toast\n*/\n/**\n* icon\n*/\n/**\n* calendar\n*/\n/**\n* week-calendar\n*/\n/**\n* search\n*/\n/**\n* radio\n*/\n/**\n* loadmore\n*/\n.weui-cell_access {\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  color: inherit;\n}\n.weui-cell_access:active {\n  background-color: #ECECEC;\n}\n.weui-cell_access .weui-cell__ft {\n  padding-right: 13px;\n  position: relative;\n}\n.weui-cell_access .weui-cell__ft:after {\n  content: " ";\n  display: inline-block;\n  height: 6px;\n  width: 6px;\n  border-width: 2px 2px 0 0;\n  border-color: #C8C8CD;\n  border-style: solid;\n  -webkit-transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);\n          transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);\n  position: relative;\n  top: -2px;\n  position: absolute;\n  top: 50%;\n  margin-top: -4px;\n  right: 2px;\n}\n.weui-cell_link {\n  color: #586C94;\n  font-size: 14px;\n}\n.weui-cell_link:first-child:before {\n  display: block;\n}\n.weui-cell_access.vux-cell-box {\n  padding-right: 13px;\n  position: relative;\n}\n.weui-cell_access.vux-cell-box:after {\n  content: " ";\n  display: inline-block;\n  height: 6px;\n  width: 6px;\n  border-width: 2px 2px 0 0;\n  border-color: #C8C8CD;\n  border-style: solid;\n  -webkit-transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);\n          transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);\n  position: relative;\n  top: -2px;\n  position: absolute;\n  top: 50%;\n  margin-top: -4px;\n  right: 17px;\n}\n.weui-cells {\n  margin-top: 1.17647059em;\n  background-color: #FFFFFF;\n  line-height: 1.41176471;\n  font-size: 17px;\n  overflow: hidden;\n  position: relative;\n}\n.weui-cells:before {\n  content: " ";\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  height: 1px;\n  border-top: 1px solid #D9D9D9;\n  color: #D9D9D9;\n  -webkit-transform-origin: 0 0;\n          transform-origin: 0 0;\n  -webkit-transform: scaleY(0.5);\n          transform: scaleY(0.5);\n}\n.weui-cells:after {\n  content: " ";\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  height: 1px;\n  border-bottom: 1px solid #D9D9D9;\n  color: #D9D9D9;\n  -webkit-transform-origin: 0 100%;\n          transform-origin: 0 100%;\n  -webkit-transform: scaleY(0.5);\n          transform: scaleY(0.5);\n}\n.weui-cells__title {\n  margin-top: 0.77em;\n  margin-bottom: 0.3em;\n  padding-left: 15px;\n  padding-right: 15px;\n  color: #999999;\n  font-size: 14px;\n}\n.weui-cells__title + .weui-cells {\n  margin-top: 0;\n}\n.weui-cells__tips {\n  margin-top: .3em;\n  color: #999999;\n  padding-left: 15px;\n  padding-right: 15px;\n  font-size: 14px;\n}\n.weui-cell {\n  padding: 10px 15px;\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.weui-cell:before {\n  content: " ";\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  height: 1px;\n  border-top: 1px solid #D9D9D9;\n  color: #D9D9D9;\n  -webkit-transform-origin: 0 0;\n          transform-origin: 0 0;\n  -webkit-transform: scaleY(0.5);\n          transform: scaleY(0.5);\n  left: 15px;\n}\n.weui-cell:first-child:before {\n  display: none;\n}\n.weui-cell_primary {\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n}\n.weui-cell__bd {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n.weui-cell__ft {\n  text-align: right;\n  color: #999999;\n}\n.vux-cell-justify {\n  height: 1.41176471em;\n}\n.vux-cell-justify.vux-cell-justify:after {\n  content: ".";\n  display: inline-block;\n  width: 100%;\n  overflow: hidden;\n  height: 0;\n}\n',""])},"9bBU":function(n,t,e){e("mClu");var i=e("FeBl").Object;n.exports=function(n,t,e){return i.defineProperty(n,t,e)}},AbHZ:function(n,t,e){"use strict";Number,Number},BEQ0:function(n,t,e){"use strict";function i(n){if(null===n||void 0===n)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(n)}/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var o=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable;n.exports=function(){try{if(!Object.assign)return!1;var n=new String("abc");if(n[5]="de","5"===Object.getOwnPropertyNames(n)[0])return!1;for(var t={},e=0;e<10;e++)t["_"+String.fromCharCode(e)]=e;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(n){return t[n]}).join(""))return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach(function(n){i[n]=n}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},i)).join("")}catch(n){return!1}}()?Object.assign:function(n,t){for(var e,a,l=i(n),c=1;c<arguments.length;c++){e=Object(arguments[c]);for(var u in e)r.call(e,u)&&(l[u]=e[u]);if(o){a=o(e);for(var d=0;d<a.length;d++)s.call(e,a[d])&&(l[a[d]]=e[a[d]])}}return l}},C4MV:function(n,t,e){n.exports={default:e("9bBU"),__esModule:!0}},"F3/h":function(n,t,e){var i=e("PkRE");"string"==typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);e("rjj0")("3d6c36e5",i,!1)},GBSf:function(n,t,e){var i=e("kGDa");"string"==typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);e("rjj0")("6a793f20",i,!1)},J6vj:function(n,t,e){"use strict";var i=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("a",{staticClass:"weui-grid",style:n.style,attrs:{href:"javascript:;"},on:{click:n.onClick}},[n.hasIconSlot||n.icon?e("div",{staticClass:"weui-grid__icon"},[n._t("icon",[e("img",{attrs:{src:n.icon,alt:""}})])],2):n._e(),n._v(" "),n.hasLabelSlot||n.label?e("p",{staticClass:"weui-grid__label"},[n._t("label",[e("span",{domProps:{innerHTML:n._s(n.label)}})])],2):n._e(),n._v(" "),n._t("default")],2)},o=[];i._withStripped=!0;var r={render:i,staticRenderFns:o};t.a=r},K8JZ:function(n,t,e){var i=e("sRvC");"string"==typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);e("rjj0")("2c3b3501",i,!1)},LgOF:function(n,t,e){"use strict";var i=(e("P6gP"),e("kk49")),o=e("J6vj"),r=e("VU/8"),s=r(i.a,o.a,!1,null,null,null);s.options.__file="node_modules/vux/src/components/grid/grid-item.vue",t.a=s.exports},NjrX:function(n,t,e){"use strict";var i=e("Zrlr"),o=e.n(i),r=e("wxAW"),s=e.n(r),a=e("BEQ0"),l=e.n(a),c=function(n){return Array.prototype.slice.call(n)},u=function(){function n(t){if(o()(this,n),this._default={container:".vux-swiper",item:".vux-swiper-item",direction:"vertical",activeClass:"active",threshold:50,duration:300,auto:!1,loop:!1,interval:3e3,height:"auto",minMovingDistance:0},this._options=l()(this._default,t),this._options.height=this._options.height.replace("px",""),this._start={},this._move={},this._end={},this._eventHandlers={},this._prev=this._current=this._goto=0,this._width=this._height=this._distance=0,this._offset=[],this.$box=this._options.container,this.$container=this._options.container.querySelector(".vux-swiper"),this.$items=this.$container.querySelectorAll(this._options.item),this.count=this.$items.length,this.realCount=this.$items.length,this._position=[],this._firstItemIndex=0,this.count)return this._init(),this._auto(),this._bind(),this._onResize(),this}return s()(n,[{key:"_auto",value:function(){var n=this;n.stop(),n._options.auto&&(n.timer=setTimeout(function(){n.next()},n._options.interval))}},{key:"updateItemWidth",value:function(){this._width=this.$box.offsetWidth||document.documentElement.offsetWidth,this._distance="horizontal"===this._options.direction?this._width:this._height}},{key:"stop",value:function(){this.timer&&clearTimeout(this.timer)}},{key:"_loop",value:function(){return this._options.loop&&this.realCount>=3}},{key:"_onResize",value:function(){var n=this;this.resizeHandler=function(){setTimeout(function(){n.updateItemWidth(),n._setOffset(),n._setTransform()},100)},window.addEventListener("orientationchange",this.resizeHandler,!1)}},{key:"_init",value:function(){this._height="auto"===this._options.height?"auto":this._options.height-0,this.updateItemWidth(),this._initPosition(),this._activate(this._current),this._setOffset(),this._setTransform(),this._loop()&&this._loopRender()}},{key:"_initPosition",value:function(){for(var n=0;n<this.realCount;n++)this._position.push(n)}},{key:"_movePosition",value:function(n){var t=this;if(n>0){var e=t._position.splice(0,1);t._position.push(e[0])}else if(n<0){var i=t._position.pop();t._position.unshift(i)}}},{key:"_setOffset",value:function(){var n=this,t=n._position.indexOf(n._current);n._offset=[],c(n.$items).forEach(function(e,i){n._offset.push((i-t)*n._distance)})}},{key:"_setTransition",value:function(n){n=n||this._options.duration||"none";var t="none"===n?"none":n+"ms";c(this.$items).forEach(function(n,e){n.style.webkitTransition=t,n.style.transition=t})}},{key:"_setTransform",value:function(n){var t=this;n=n||0,c(t.$items).forEach(function(e,i){var o=t._offset[i]+n,r="translate3d("+o+"px, 0, 0)";"vertical"===t._options.direction&&(r="translate3d(0, "+o+"px, 0)"),e.style.webkitTransform=r,e.style.transform=r})}},{key:"_bind",value:function(){var n=this,t=this;t.touchstartHandler=function(n){t.stop(),t._start.x=n.changedTouches[0].pageX,t._start.y=n.changedTouches[0].pageY,t._setTransition("none")},t.touchmoveHandler=function(e){t._move.x=e.changedTouches[0].pageX,t._move.y=e.changedTouches[0].pageY;var i=t._move.x-t._start.x,o=t._move.y-t._start.y,r=o,s=Math.abs(i)>Math.abs(o);"horizontal"===t._options.direction&&s&&(r=i),n._options.loop||n._current!==n.count-1&&0!==n._current||(r/=3),(t._options.minMovingDistance&&Math.abs(r)>=t._options.minMovingDistance||!t._options.minMovingDistance)&&s&&t._setTransform(r),s&&e.preventDefault()},t.touchendHandler=function(n){t._end.x=n.changedTouches[0].pageX,t._end.y=n.changedTouches[0].pageY;var e=t._end.y-t._start.y;"horizontal"===t._options.direction&&(e=t._end.x-t._start.x),0!==(e=t.getDistance(e))&&t._options.minMovingDistance&&Math.abs(e)<t._options.minMovingDistance||(e>t._options.threshold?t.move(-1):e<-t._options.threshold?t.move(1):t.move(0),t._loopRender())},t.transitionEndHandler=function(n){t._activate(t._current);var e=t._eventHandlers.swiped;e&&e.apply(t,[t._prev%t.count,t._current%t.count]),t._auto(),t._loopRender(),n.preventDefault()},t.$container.addEventListener("touchstart",t.touchstartHandler,!1),t.$container.addEventListener("touchmove",t.touchmoveHandler,!1),t.$container.addEventListener("touchend",t.touchendHandler,!1),t.$items[1]&&t.$items[1].addEventListener("webkitTransitionEnd",t.transitionEndHandler,!1)}},{key:"_loopRender",value:function(){var n=this;n._loop()&&(0===n._offset[n._offset.length-1]?(n.$container.appendChild(n.$items[0]),n._loopEvent(1)):0===n._offset[0]&&(n.$container.insertBefore(n.$items[n.$items.length-1],n.$container.firstChild),n._loopEvent(-1)))}},{key:"_loopEvent",value:function(n){var t=this;t._itemDestoy(),t.$items=t.$container.querySelectorAll(t._options.item),t.$items[1]&&t.$items[1].addEventListener("webkitTransitionEnd",t.transitionEndHandler,!1),t._movePosition(n),t._setOffset(),t._setTransform()}},{key:"getDistance",value:function(n){return this._loop()?n:n>0&&0===this._current?0:n<0&&this._current===this.realCount-1?0:n}},{key:"_moveIndex",value:function(n){0!==n&&(this._prev=this._current,this._current+=this.realCount,this._current+=n,this._current%=this.realCount)}},{key:"_activate",value:function(n){var t=this._options.activeClass;Array.prototype.forEach.call(this.$items,function(e,i){e.classList.remove(t),n===Number(e.dataset.index)&&e.classList.add(t)})}},{key:"go",value:function(n){var t=this;return t.stop(),n=n||0,n+=this.realCount,n%=this.realCount,n=this._position.indexOf(n)-this._position.indexOf(this._current),t._moveIndex(n),t._setOffset(),t._setTransition(),t._setTransform(),t._auto(),this}},{key:"next",value:function(){return this.move(1),this}},{key:"move",value:function(n){return this.go(this._current+n),this}},{key:"on",value:function(n,t){return this._eventHandlers[n]&&console.error("[swiper] event "+n+" is already register"),"function"!=typeof t&&console.error("[swiper] parameter callback must be a function"),this._eventHandlers[n]=t,this}},{key:"_itemDestoy",value:function(){var n=this;this.$items.length&&c(this.$items).forEach(function(t){t.removeEventListener("webkitTransitionEnd",n.transitionEndHandler,!1)})}},{key:"destroy",value:function(){if(this.stop(),this._current=0,this._setTransform(0),window.removeEventListener("orientationchange",this.resizeHandler,!1),this.$container.removeEventListener("touchstart",this.touchstartHandler,!1),this.$container.removeEventListener("touchmove",this.touchmoveHandler,!1),this.$container.removeEventListener("touchend",this.touchendHandler,!1),this._itemDestoy(),this._options.loop&&2===this.count){var n=this.$container.querySelector(this._options.item+"-clone");n&&this.$container.removeChild(n),n=this.$container.querySelector(this._options.item+"-clone"),n&&this.$container.removeChild(n)}}}]),n}();t.a=u},Nvtm:function(n,t,e){var i=e("9I/8");"string"==typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);e("rjj0")("bb2dd516",i,!1)},P6gP:function(n,t,e){"use strict";e("0FxO")},PkRE:function(n,t,e){t=n.exports=e("FZ+f")(!1),t.push([n.i,'/**\n* actionsheet\n*/\n/**\n* datetime\n*/\n/**\n* tabbar\n*/\n/**\n* tab\n*/\n/**\n* dialog\n*/\n/**\n* x-number\n*/\n/**\n* checkbox\n*/\n/**\n* check-icon\n*/\n/**\n* Cell\n*/\n/**\n* Mask\n*/\n/**\n* Range\n*/\n/**\n* Tabbar\n*/\n/**\n* Header\n*/\n/**\n* Timeline\n*/\n/**\n* Switch\n*/\n/**\n* Button\n*/\n/**\n* swipeout\n*/\n/**\n* Cell\n*/\n/**\n* Badge\n*/\n/**\n* Popover\n*/\n/**\n* Button tab\n*/\n/* alias */\n/**\n* Swiper\n*/\n/**\n* checklist\n*/\n/**\n* popup-picker\n*/\n/**\n* popup\n*/\n/**\n* popup-header\n*/\n/**\n* form-preview\n*/\n/**\n* load-more\n*/\n/**\n* sticky\n*/\n/**\n* group\n*/\n/**\n* toast\n*/\n/**\n* icon\n*/\n/**\n* calendar\n*/\n/**\n* week-calendar\n*/\n/**\n* search\n*/\n/**\n* radio\n*/\n/**\n* loadmore\n*/\n.weui-grids {\n  position: relative;\n  overflow: hidden;\n}\n.weui-grids:before {\n  content: " ";\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  height: 1px;\n  border-top: 1px solid #D9D9D9;\n  color: #D9D9D9;\n  -webkit-transform-origin: 0 0;\n          transform-origin: 0 0;\n  -webkit-transform: scaleY(0.5);\n          transform: scaleY(0.5);\n}\n.weui-grids:after {\n  content: " ";\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 1px;\n  bottom: 0;\n  border-left: 1px solid #D9D9D9;\n  color: #D9D9D9;\n  -webkit-transform-origin: 0 0;\n          transform-origin: 0 0;\n  -webkit-transform: scaleX(0.5);\n          transform: scaleX(0.5);\n}\n.weui-grid {\n  position: relative;\n  float: left;\n  padding: 20px 10px;\n  width: 33.33333333%;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n.weui-grid:before {\n  content: " ";\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 1px;\n  bottom: 0;\n  border-right: 1px solid #D9D9D9;\n  color: #D9D9D9;\n  -webkit-transform-origin: 100% 0;\n          transform-origin: 100% 0;\n  -webkit-transform: scaleX(0.5);\n          transform: scaleX(0.5);\n}\n.weui-grid:after {\n  content: " ";\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  height: 1px;\n  border-bottom: 1px solid #D9D9D9;\n  color: #D9D9D9;\n  -webkit-transform-origin: 0 100%;\n          transform-origin: 0 100%;\n  -webkit-transform: scaleY(0.5);\n          transform: scaleY(0.5);\n}\n.weui-grid:active {\n  background-color: #ECECEC;\n}\n.weui-grid__icon {\n  width: 28px;\n  height: 28px;\n  margin: 0 auto;\n}\n.weui-grid__icon img {\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n.weui-grid__icon + .weui-grid__label {\n  margin-top: 5px;\n}\n.weui-grid__label {\n  display: block;\n  text-align: center;\n  color: #000000;\n  font-size: 14px;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n',""])},QiPk:function(n,t,e){"use strict";t.a={name:"group-title"}},Rle1:function(n,t,e){t=n.exports=e("FZ+f")(!1),t.push([n.i,"\n.vux-masker-box {\n  position: relative;\n}\n.vux-masker {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  border-radius: inherit;\n}\n.vux-masker-fullscreen {\n  position: fixed;\n  z-index: 10001;\n}\n",""])},XYix:function(n,t,e){"use strict";function i(n){s||e("k8zc")}var o=(e("meou"),e("/s4m")),r=e("nS2C"),s=!1,a=e("VU/8"),l=i,c=a(o.a,r.a,!1,l,null,null);c.options.__file="node_modules/vux/src/components/masker/index.vue",t.a=c.exports},Zrlr:function(n,t,e){"use strict";t.__esModule=!0,t.default=function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}},"b+jt":function(n,t,e){"use strict";var i=(e("ivHe"),e("wHkY")),o=e("80dy"),r=e("VU/8"),s=r(i.a,o.a,!1,null,null,null);s.options.__file="node_modules/vux/src/components/swiper/swiper-item.vue",t.a=s.exports},fBcm:function(n,t,e){"use strict";function i(n){s||e("K8JZ")}var o=(e("gHEp"),e("24fE")),r=e("1UGb"),s=!1,a=e("VU/8"),l=i,c=a(o.a,r.a,!1,l,null,null);c.options.__file="node_modules/vux/src/components/swiper/swiper.vue",t.a=c.exports},gHEp:function(n,t,e){"use strict";var i=e("mvHQ"),o=e.n(i),r=e("NjrX"),s=e("0FxO");Array,String,Boolean,Boolean,String,String,Boolean,Boolean,Number,Number,Number,String,Number,Number,Number},ivHe:function(n,t,e){"use strict"},jfQd:function(n,t,e){"use strict";t.a={name:"grid",methods:{countColumn:function(){this.childrenSize=this.$children.length}},props:{rows:{type:Number,validator:function(){return!0}},cols:{type:Number}},computed:{column:function(){return this.cols||this.childrenSize}},data:function(){return{childrenSize:3}}}},k8zc:function(n,t,e){var i=e("Rle1");"string"==typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);e("rjj0")("47f6ef70",i,!1)},kGDa:function(n,t,e){t=n.exports=e("FZ+f")(!1),t.push([n.i,"\n.m-img {\n    padding-bottom: 33%;\n    display: block;\n    position: relative;\n    max-width: 100%;\n    background-size: cover;\n    background-position: center center;\n    cursor: pointer;\n    border-radius: 2px;\n}\n.m-title {\n    color: #fff;\n    text-align: center;\n    text-shadow: 0 0 2px rgba(0, 0, 0, .5);\n    font-weight: 500;\n    font-size: 16px;\n    position: absolute;\n    left: 0;\n    right: 0;\n    width: 100%;\n    text-align: center;\n    top: 50%;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n}\n.m-time {\n    font-size: 12px;\n    padding-top: 4px;\n    border-top: 1px solid #f0f0f0;\n    display: inline-block;\n    margin-top: 5px;\n}\n.m-title h3 {\n    font-size: 20px;\n}\n.m-title span {\n    color: #333;\n    font-size: 14px;\n}\n.weui-label {\n    font-size: 30px;\n}\n.weui-cell__primary {\n    font-size: 34px;\n    font-weight: bold;\n}\n.vux-x-input.weui-cell {\n    padding-left: 0;\n    padding-right: 0;\n}\n.weui-cell__bd p {\n    margin: 0;\n}\n#title .weui-cell {\n    height: 30px;\n}\n.weui-grid {\n    padding: 0 !important;\n}\n.weui-grids {\n    padding-top: 15px;\n}\n.weui-grids:before, .weui-cells:before, .weui-cells:after, .weui-grids:after {\n    border: none !important;\n}\n.weui-grid:before, .weui-cells:before {\n    border: none !important;\n}\n.weui-grid:after {\n    border-bottom: none !important;\n}\n.weui-cells.vux-no-group-title {\n    margin-bottom: 50px;\n}\n.hot {\n    margin-top: -30px;\n}\n",""])},kNDc:function(n,t,e){"use strict";function i(n){s||e("F3/h")}var o=(e("AbHZ"),e("jfQd")),r=e("31as"),s=!1,a=e("VU/8"),l=i,c=a(o.a,r.a,!1,l,null,null);c.options.__file="node_modules/vux/src/components/grid/grid.vue",t.a=c.exports},kk49:function(n,t,e){"use strict";var i=e("0FxO");t.a={name:"grid-item",props:["icon","label","link"],created:function(){this.$parent.countColumn()},mounted:function(){this.$slots.icon&&(this.hasIconSlot=!0),this.$slots.label&&(this.hasLabelSlot=!0)},destroyed:function(){this.$parent.countColumn()},computed:{style:function(){var n=this.$parent.column;if(n&&3!==n){var t={};return t.width=100/n+"%",t}}},methods:{onClick:function(){this.$emit("on-item-click"),Object(i.b)(this.link,this.$router)}},data:function(){return{hasIconSlot:!1,hasLabelSlot:!1}}}},lO7g:function(n,t,e){"use strict";function i(n){s||e("GBSf")}Object.defineProperty(t,"__esModule",{value:!0});var o=(e("9ADW"),e("xpjs")),r=e("4JWl"),s=!1,a=e("VU/8"),l=i,c=a(o.a,r.a,!1,l,null,null);c.options.__file="src/components/Home.vue",t.default=c.exports},mClu:function(n,t,e){var i=e("kM2E");i(i.S+i.F*!e("+E39"),"Object",{defineProperty:e("evD5").f})},meou:function(n,t,e){"use strict";var i=e("zUuJ");String,Number,Boolean},mvHQ:function(n,t,e){n.exports={default:e("qkKv"),__esModule:!0}},nS2C:function(n,t,e){"use strict";var i=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"vux-masker-box"},[n._t("default"),n._v(" "),e("div",{staticClass:"vux-masker",class:{"vux-masker-fullscreen":n.fullscreen},style:n.style},[n._t("content")],2)],2)},o=[];i._withStripped=!0;var r={render:i,staticRenderFns:o};t.a=r},pUa7:function(n,t,e){"use strict";var i=function(){var n=this,t=n.$createElement;return(n._self._c||t)("div",{staticClass:"weui-cells__title"},[n._t("default")],2)},o=[];i._withStripped=!0;var r={render:i,staticRenderFns:o};t.a=r},qkKv:function(n,t,e){var i=e("FeBl"),o=i.JSON||(i.JSON={stringify:JSON.stringify});n.exports=function(n){return o.stringify.apply(o,arguments)}},sRvC:function(n,t,e){t=n.exports=e("FZ+f")(!1),t.push([n.i,"/**\n* actionsheet\n*/\n/**\n* datetime\n*/\n/**\n* tabbar\n*/\n/**\n* tab\n*/\n/**\n* dialog\n*/\n/**\n* x-number\n*/\n/**\n* checkbox\n*/\n/**\n* check-icon\n*/\n/**\n* Cell\n*/\n/**\n* Mask\n*/\n/**\n* Range\n*/\n/**\n* Tabbar\n*/\n/**\n* Header\n*/\n/**\n* Timeline\n*/\n/**\n* Switch\n*/\n/**\n* Button\n*/\n/**\n* swipeout\n*/\n/**\n* Cell\n*/\n/**\n* Badge\n*/\n/**\n* Popover\n*/\n/**\n* Button tab\n*/\n/* alias */\n/**\n* Swiper\n*/\n/**\n* checklist\n*/\n/**\n* popup-picker\n*/\n/**\n* popup\n*/\n/**\n* popup-header\n*/\n/**\n* form-preview\n*/\n/**\n* load-more\n*/\n/**\n* sticky\n*/\n/**\n* group\n*/\n/**\n* toast\n*/\n/**\n* icon\n*/\n/**\n* calendar\n*/\n/**\n* week-calendar\n*/\n/**\n* search\n*/\n/**\n* radio\n*/\n/**\n* loadmore\n*/\n.vux-slider {\n  overflow: hidden;\n  position: relative;\n}\n.vux-slider > .vux-indicator,\n.vux-slider .vux-indicator-right {\n  position: absolute;\n  right: 15px;\n  bottom: 10px;\n}\n.vux-slider > .vux-indicator > a,\n.vux-slider .vux-indicator-right > a {\n  float: left;\n  margin-left: 6px;\n}\n.vux-slider > .vux-indicator > a > .vux-icon-dot,\n.vux-slider .vux-indicator-right > a > .vux-icon-dot {\n  display: inline-block;\n  vertical-align: middle;\n  width: 6px;\n  height: 6px;\n  border-radius: 3px;\n  background-color: #d0cdd1;\n}\n.vux-slider > .vux-indicator > a > .vux-icon-dot.active,\n.vux-slider .vux-indicator-right > a > .vux-icon-dot.active {\n  background-color: #FF9900;\n}\n.vux-slider > .vux-indicator-center {\n  right: 50%;\n  -webkit-transform: translateX(50%);\n          transform: translateX(50%);\n}\n.vux-slider > .vux-indicator-left {\n  left: 15px;\n  right: auto;\n}\n.vux-slider > .vux-swiper {\n  overflow: hidden;\n  position: relative;\n}\n.vux-slider > .vux-swiper > .vux-swiper-item {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n.vux-slider > .vux-swiper > .vux-swiper-item > a {\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n.vux-slider > .vux-swiper > .vux-swiper-item > a > .vux-img {\n  display: block;\n  width: 100%;\n  height: 100%;\n  background: center center no-repeat;\n  background-size: cover;\n}\n.vux-slider > .vux-swiper > .vux-swiper-item > a > .vux-swiper-desc {\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  height: 1.4em;\n  font-size: 16px;\n  padding: 20px 50px 12px 13px;\n  margin: 0;\n  background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0, rgba(0, 0, 0, 0)), to(rgba(0, 0, 0, 0.7)));\n  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0, rgba(0, 0, 0, 0.7) 100%);\n  color: #fff;\n  text-shadow: 0 1px 0 rgba(0, 0, 0, 0.5);\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  word-wrap: normal;\n}\n",""])},wHkY:function(n,t,e){"use strict";t.a={name:"swiper-item",mounted:function(){var n=this;this.$nextTick(function(){n.$parent.rerender()})},beforeDestroy:function(){var n=this.$parent;this.$nextTick(function(){n.rerender()})}}},wdhP:function(n,t,e){"use strict"},wxAW:function(n,t,e){"use strict";t.__esModule=!0;var i=e("C4MV"),o=function(n){return n&&n.__esModule?n:{default:n}}(i);t.default=function(){function n(n,t){for(var e=0;e<t.length;e++){var i=t[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),(0,o.default)(n,i.key,i)}}return function(t,e,i){return e&&n(t.prototype,e),i&&n(t,i),t}}()},xpjs:function(n,t,e){"use strict";var i=e("kNDc"),o=e("LgOF"),r=e("fBcm"),s=e("b+jt"),a=e("rHil"),l=e("1HIy"),c=e("XYix");t.a={name:"login",data:function(){return{banner_list:[],rooms:[],game_list:[]}},mounted:function(){var n=this;this.$store.state.show_menu=!0,this.axios.get(this.$store.state.base_url+"game/banners/").then(function(t){n.banner_list=t.data.data}),this.axios.get(this.$store.state.base_url+"game/games/?hot=1").then(function(t){n.game_list=t.data.data}),this.axios.get(this.$store.state.base_url+"game/rooms/?hot=1").then(function(t){n.rooms=t.data.data})},methods:{go_rooms:function(n){this.$router.push({name:"Rooms",params:{game_id:n}})},go_room:function(n){this.$router.push({name:"RoomInfo",params:{room_id:n}})}},components:{Grid:i.a,GridItem:o.a,Swiper:r.a,SwiperItem:s.a,Group:a.a,GroupTitle:l.a,Masker:c.a}}},zUuJ:function(n,t,e){"use strict";/*!
 * HEX <=> RGB Conversion
 * Copyright(c) 2011 Daniel Lamb <daniellmb.com>
 * MIT Licensed
 */
function i(n){var t=parseInt(n,16);return[t>>16,t>>8&255,255&t]}t.a=i}});