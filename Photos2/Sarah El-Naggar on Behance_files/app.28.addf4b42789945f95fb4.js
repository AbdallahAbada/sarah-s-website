(("undefined"!=typeof global?global:self).webpackChunk_wp_vue_app=("undefined"!=typeof global?global:self).webpackChunk_wp_vue_app||[]).push([[28],{90933:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>s});var r=o(66201),i=o.n(r),l=o(58366),n=o.n(l)()(i());n.push([e.id,"@-webkit-keyframes Cover-fadeIn-A7F{from{opacity:0}to{opacity:1}}@keyframes Cover-fadeIn-A7F{from{opacity:0}to{opacity:1}}.Cover-searchLoadingPlaceholder-pXm{-webkit-animation:Cover-fadeIn-A7F ease-in 1;animation:Cover-fadeIn-A7F ease-in 1;-webkit-animation-duration:.2s;animation-duration:.2s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;background-color:#ccc;border-radius:3px;opacity:0;overflow:hidden;position:relative}.Cover-cover-gDM{position:relative}.Cover-content-yv3{border-radius:4px;height:100%;left:0;position:absolute;top:0;width:100%}.Cover-overlay-r1A{color:#fff;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;height:100%;left:0;position:absolute;top:0;width:100%}.Cover-showOnHover-oZ2{opacity:0}.Cover-focused-ryS .Cover-showOnHover-oZ2,.Cover-cover-gDM:hover .Cover-showOnHover-oZ2{opacity:1}.Cover-showOnHover-oZ2.Cover-transitionDone-I2N{will-change:auto}@media(hover: none){.Cover-showOnHover-oZ2{opacity:1}}.Cover-wrapper-H_F:not(.Cover-noConstraints-QEW){height:0}.Cover-wrapper-H_F{border-radius:4px;display:block;padding-top:78.22%;position:relative;width:100%}.Cover-wrapper-H_F[tabindex]::before{bottom:-10px;left:-10px;right:-10px;top:-10px}",""]),n.locals={searchLoadingPlaceholder:"Cover-searchLoadingPlaceholder-pXm",fadeIn:"Cover-fadeIn-A7F",cover:"Cover-cover-gDM",content:"Cover-content-yv3",overlay:"Cover-overlay-r1A",showOnHover:"Cover-showOnHover-oZ2",focused:"Cover-focused-ryS",transitionDone:"Cover-transitionDone-I2N",wrapper:"Cover-wrapper-H_F",noConstraints:"Cover-noConstraints-QEW"};const s=n},33558:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>s});var r=o(66201),i=o.n(r),l=o(58366),n=o.n(l)()(i());n.push([e.id,".Title-title-lpJ{color:inherit;display:inline-block;font-size:16px;font-weight:bold;margin-bottom:-2px;max-height:43px;max-width:100%;overflow:hidden;padding-bottom:2px;pointer-events:all;text-overflow:ellipsis}.Title-title-lpJ.Title-featured-npB{color:#0057ff}.Title-title-lpJ.Title-hasShadow-KN5{text-shadow:1px 1px 3px rgba(0,0,0,.5)}.Title-smallTitle-kom{font-size:12px;max-height:33px}.Title-mediumTitle-OeE{font-size:15px;padding-bottom:0}",""]),n.locals={title:"Title-title-lpJ",featured:"Title-featured-npB",hasShadow:"Title-hasShadow-KN5",smallTitle:"Title-smallTitle-kom",mediumTitle:"Title-mediumTitle-OeE"};const s=n},81899:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>s});var r=o(66201),i=o.n(r),l=o(58366),n=o.n(l)()(i());n.push([e.id,".TitleOwner-limitHeight-_cX .TitleOwner-title-H7y{max-height:39px;max-width:100%;overflow:hidden}.TitleOwner-owner-I52{font-size:13px}.TitleOwner-smallOwner-dyi{font-size:11px}.TitleOwner-shadowText-RpY{text-shadow:1px 1px 3px rgba(0,0,0,.5)}.TitleOwner-mediumOwner-eDx{font-size:12px}.TitleOwner-smallOwnerArrow-ZjH::after{top:6px}",""]),n.locals={limitHeight:"TitleOwner-limitHeight-_cX",title:"TitleOwner-title-H7y",owner:"TitleOwner-owner-I52",smallOwner:"TitleOwner-smallOwner-dyi",shadowText:"TitleOwner-shadowText-RpY",mediumOwner:"TitleOwner-mediumOwner-eDx",smallOwnerArrow:"TitleOwner-smallOwnerArrow-ZjH"};const s=n},24306:(e,t,o)=>{"use strict";o.d(t,{Z:()=>n});const r=o(38114).default.defineComponent({props:{wrapperClasses:{type:Array},isInFocus:{type:Boolean},isPlaceholder:{type:Boolean,default:!1},hasNoConstraints:{type:Boolean,default:!1}},data:function(){return{didTransitionEnd:!1,isHovering:!1}},watch:{isInFocus:function(e){e?this.$el.focus():this.$el.blur()}},mounted:function(){var e=this.$refs.overlay;e&&(e.addEventListener("transitionend",this.toggleTransitionState),e.addEventListener("transitionstart",this.toggleTransitionState))},beforeDestroy:function(){var e=this.$refs.overlay;e&&(e.removeEventListener("transitionend",this.toggleTransitionState),e.removeEventListener("transitionstart",this.toggleTransitionState))},methods:{toggleTransitionState:function(e){this.didTransitionEnd="transitionend"===e.type}}});var i=o(30020),l=o.n(i);const n=(0,o(54868).default)(r,(function(){var e,t,o,r,i=this,l=i.$createElement,n=i._self._c||l;return n("div",{ref:"root",class:[i.$style.cover,(e={},e[i.$style.focused]=i.isInFocus,e)]},[n("div",{class:[i.$style.wrapper,i.wrapperClasses,(t={},t[i.$style.noConstraints]=i.hasNoConstraints,t)],on:{mouseenter:function(e){i.isHovering=!0},mouseleave:function(e){i.isHovering=!1}}},[n("div",{ref:"content",class:[i.$style.content,(o={},o[""+i.$style.searchLoadingPlaceholder]=i.isPlaceholder,o)]},[i._t("content",null,{hoverClass:i.$style.showOnHover})],2),i.$slots.hoverOverlay||i.$scopedSlots.hoverOverlay?n("div",{ref:"overlay",class:[i.$style.overlay,i.$style.showOnHover,(r={},r[i.$style.transitionDone]=i.didTransitionEnd,r)]},[i._t("hoverOverlay")],2):i._e(),i.$slots.alwaysVisibleOverlay||i.$scopedSlots.alwaysVisibleOverlay?n("div",{class:i.$style.overlay},[i._t("alwaysVisibleOverlay",null,{hoverClass:i.$style.showOnHover})],2):i._e(),i._t("additionalContent",null,{isHovering:i.isHovering}),i.$slots.lockedOverlay||i.$scopedSlots.lockedOverlay?n("div",{class:i.$style.overlay},[i._t("lockedOverlay")],2):i._e()],2),i._t("infoBar")],2)}),[],!1,(function(e){this.$style=l().locals||l()}),null,null).exports},68278:(e,t,o)=>{"use strict";o.d(t,{Z:()=>a});var r=o(38114),i=o(44877),l=o(82927),n=o(60459);const s=r.default.defineComponent({props:{owners:{type:Array},assetUrl:{type:String}},components:{Owners:i.Z},computed:{adaptedOwners:function(){return Array.isArray(this.owners)?this.owners.length>0&&this.owners[0].hasOwnProperty("displayName")&&Object.keys(this.owners[0].images)[0].startsWith("size_")?this.owners:this.owners.map(l.ZP):[]}},mounted:function(){Array.isArray(this.owners)||n.default.info("owners_data","Owners data is not a list",{assetUrl:this.assetUrl,owners:this.owners})}});const a=(0,o(54868).default)(s,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("Owners",e._g(e._b({ref:"owners",attrs:{owners:e.adaptedOwners}},"Owners",e.$attrs,!1),e.$listeners))}),[],!1,null,null,null).exports},33995:(e,t,o)=>{"use strict";o.d(t,{Z:()=>n});const r={props:{url:{type:String},isSmall:{type:Boolean},isMedium:{type:Boolean},shouldOpenProjectPopupOnClick:{type:Boolean},isFeatured:{type:Boolean},hasShadow:{type:Boolean,default:!0},projectId:Number,projectSlug:String,isUsingLegacyPopupLibrary:{type:Boolean,default:!0},shouldDisableLink:{type:Boolean}}};var i=o(90167),l=o.n(i);const n=(0,o(54868).default)(r,(function(){var e,t,o,r,i,l,n,s,a,u=this,d=u.$createElement,c=u._self._c||d;return u.isUsingLegacyPopupLibrary?c("a",{ref:"link",class:[u.$style.title,"e2e-Title-owner",(i={},i[u.$style.smallTitle]=u.isSmall,i),(l={},l[u.$style.mediumTitle]=u.isMedium,l),(n={},n[u.$style.featured]=u.isFeatured,n),(s={},s[u.$style.hasShadow]=u.hasShadow,s),(a={},a["js-project-cover-title-link"]=u.shouldOpenProjectPopupOnClick,a)],attrs:{href:u.url,tabindex:"0"},on:{focus:function(e){return u.$emit("focus")},blur:function(e){return u.$emit("blur")},click:function(e){return u.$emit("titleClick")},keypress:function(e){return!e.type.indexOf("key")&&u._k(e.keyCode,"enter",13,e.key,"Enter")?null:u.$emit("titleClick")}}},[u._t("default")],2):c("router-link",{ref:"routerLink",class:[u.$style.title,"e2e-Title-owner",(e={},e[u.$style.smallTitle]=u.isSmall,e),(t={},t[u.$style.mediumTitle]=u.isMedium,t),(o={},o[u.$style.featured]=u.isFeatured,o),(r={},r[u.$style.hasShadow]=u.hasShadow,r)],attrs:{to:!u.shouldDisableLink&&{name:"projectPopup",params:{projectId:u.projectId,slug:u.projectSlug}},title:u.$translate("link_to_project","Link to project"),tabindex:"0"},on:{focus:function(e){return u.$emit("focus")},blur:function(e){return u.$emit("blur")},click:function(e){return u.$emit("titleClick")},keypress:function(e){return!e.type.indexOf("key")&&u._k(e.keyCode,"enter",13,e.key,"Enter")?null:u.$emit("titleClick")}}},[u._t("default")],2)}),[],!1,(function(e){this.$style=l().locals||l()}),null,null).exports},4295:(e,t,o)=>{"use strict";o.d(t,{Z:()=>a});var r=o(68278),i=o(33995);const l={components:{OwnersGqlAdapted:r.Z,Title:i.Z},props:{url:String,title:String,owners:Array,isSmall:Boolean,isMedium:Boolean,isUsingLegacyPopupLibrary:{type:Boolean,default:!0},shouldOpenProjectPopupOnClick:Boolean,shouldDisableLink:Boolean,isFeatured:Boolean,limitHeight:Boolean,trackingSource:String,theme:{type:String,default:"light",validator:function(e){return["light","dark"].includes(e)}},hasShadowText:{type:Boolean,default:!0},shouldRemoveMultiOwnerTooltip:{type:Boolean,default:!1},shouldShowOwner:{type:Boolean,default:!0},projectId:Number,projectSlug:String}};var n=o(4467),s=o.n(n);const a=(0,o(54868).default)(l,(function(){var e,t,o,r,i,l=this,n=l.$createElement,s=l._self._c||n;return s("span",{ref:"root",class:[(e={},e[l.$style.limitHeight]=l.limitHeight,e)]},[s("Title",{ref:"title",class:l.$style.title,attrs:{url:l.url,isSmall:l.isSmall,isMedium:l.isMedium,shouldOpenProjectPopupOnClick:l.shouldOpenProjectPopupOnClick,isUsingLegacyPopupLibrary:l.isUsingLegacyPopupLibrary,shouldDisableLink:l.shouldDisableLink,isFeatured:l.isFeatured,hasShadow:l.hasShadowText,projectId:l.projectId,projectSlug:l.projectSlug},on:{focus:function(e){return l.$emit("elOnFocus")},blur:function(e){return l.$emit("elOnBlur")},titleClick:function(e){return l.$emit("titleClick")}}},[l._v(l._s(l.title))]),l.shouldShowOwner?s("OwnersGqlAdapted",{ref:"ownersAdapted",class:[l.$style.owner,(t={},t[l.$style.smallOwner]=l.isSmall,t),(o={},o[l.$style.mediumOwner]=l.isMedium,o)],attrs:{owners:l.owners,ownerTextClass:[(r={},r[l.$style.shadowText]=l.hasShadowText,r),(i={},i[l.$style.smallOwnerArrow]=l.isSmall,i)],theme:l.theme,shouldRemoveMultiOwnerTooltip:l.shouldRemoveMultiOwnerTooltip,trackingSource:l.trackingSource,assetUrl:l.url},on:{ownerOnFocus:function(e){return l.$emit("elOnFocus")},ownerOnBlur:function(e){return l.$emit("elOnBlur")},tooltipOnFocus:function(e){return l.$emit("elOnFocus")},tooltipOnBlur:function(e){return l.$emit("elOnBlur")}}}):l._e()],1)}),[],!1,(function(e){this.$style=s().locals||s()}),null,null).exports},30020:(e,t,o)=>{var r=o(90933);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[e.id,r,""]]),r.locals&&(e.exports=r.locals);(0,o(55087).default)("79f06560",r,!0,{})},90167:(e,t,o)=>{var r=o(33558);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[e.id,r,""]]),r.locals&&(e.exports=r.locals);(0,o(55087).default)("63af7206",r,!0,{})},4467:(e,t,o)=>{var r=o(81899);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[e.id,r,""]]),r.locals&&(e.exports=r.locals);(0,o(55087).default)("e4561f9a",r,!0,{})}}]);
//# sourceMappingURL=app.28.addf4b42789945f95fb4.js.map