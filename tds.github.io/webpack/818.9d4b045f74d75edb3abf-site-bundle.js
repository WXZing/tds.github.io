/*! For license information please see 818.9d4b045f74d75edb3abf-site-bundle.js.LICENSE.txt */
(self.webpackChunkbobcat_monorepo=self.webpackChunkbobcat_monorepo||[]).push([[818],{246276:function(e,n,t){var o=t(893379),i=t(743668);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.id,i,""]]);o(i,{insert:"head",singleton:!1}),e.exports=i.locals||{}},110818:function(e,n,t){"use strict";t.r(n),t.d(n,{Components:function(){return Ke},default:function(){return Ye}});var o,i,a,l,r,s,c=t(501068),u=t.n(c),d=t(863056),p=t(468420),m=t(327344),f=t(505281),v=t(484441),g=t(103020),h=t(803362),y=t(844845),Z=(t(968309),t(569600),t(977766)),x=t.n(Z),b=t(277149),C=t.n(b),w=t(694473),k=t.n(w),D=t(678580),N=t.n(D),S=t(2991),T=t.n(S),E=t(54103),A=t.n(E),R=t(366757),F=t(459800),I=t(294184),P=t.n(I),B=t(234584),O=t(818166),L=t(125485),M=t(183123),W=t(454992),V=t(619793),j=t(69968),G=t(391435),z=t(71859),H=W((function(e){var n=e.className,t=e.disbale,o=e.handleClick,i=e.name;return(0,d.Z)("div",{className:n},void 0,(0,d.Z)("div",{className:P()("s-email-form-button s-common-button s-font-button",{disbale:t}),onClick:t?null:o},void 0,(0,d.Z)("span",{},void 0,i)))})),q=(0,F.connect)((function(){return{variationClassNames:O.getTemplateVariationClassNames(),fontClassNames:L.getFontClassNames()}}),{})((function(e){var n=e.disbale,t=e.name,o=e.variationClassNames,i=e.fontClassNames,a=e.handleClick,l=[];return l.push(o),l.push(i),l.push("s-email-form-field"),l.push("s-submit-field"),(0,d.Z)("div",{className:"button-field"},void 0,(0,d.Z)(H,{className:l.join(" "),name:t,disbale:n,handleClick:a}))})),U=t(946312),J=function(e){var n=e.value,t=e.placeholder,a=e.onChangeValue,l=e.isRtlLayout;return(0,d.Z)("div",{className:"input-field"},void 0,(0,d.Z)(U.Input,{suffix:l&&(o||(o=(0,d.Z)(U.Icon,{className:"entypo-user"}))),prefix:!l&&(i||(i=(0,d.Z)(U.Icon,{className:"entypo-user"}))),placeholder:t,value:n,onChange:function(e){a(e.target.value)},maxLength:"50"}))},K=function(e){var n=e.value,t=e.placeholder,o=e.onChangeValue,i=e.isRtlLayout;return(0,d.Z)("div",{className:"input-field"},void 0,(0,d.Z)(U.Input,{prefix:!i&&(a||(a=(0,d.Z)(U.Icon,{className:"entypo-mail"}))),suffix:i&&(l||(l=(0,d.Z)(U.Icon,{className:"entypo-mail"}))),placeholder:t,value:n,onChange:function(e){o(e.target.value)},maxLength:"50"}))},Y=function(e){var n=e.value,t=e.placeholder,o=e.onChangeValue,i=e.isRtlLayout;return(0,d.Z)("div",{className:"input-field"},void 0,(0,d.Z)(U.Input,{suffix:i&&(r||(r=(0,d.Z)(U.Icon,{className:"entypo-mobile"}))),prefix:!i&&(s||(s=(0,d.Z)(U.Icon,{className:"entypo-mobile"}))),placeholder:t,value:n,onChange:function(e){o(e.target.value)},maxLength:"50"}))},Q=t(589499),X=t(240975),$="submit_email_form",ee="EMAIL_FORM",ne="PHONE_FORM",te="scroll_to_middle",oe="scroll_to_end",ie={immediately:0,delay_five_seconds:5e3,delay_ten_seconds:1e4,delay_twenty_seconds:2e4},ae="any_pages",le=t(881701),re=t(223336),se=t(353147);var ce="EMAIL_FORM",ue="ANNOUNCEMENT",de="PHONE_FORM",pe=(0,Q.cdnAssetPath)("/images/image-dummy.jpg"),me=[$],fe=function(e){(0,v.Z)(i,e);var n,t,o=(n=i,t=function(){if("undefined"==typeof Reflect||!u())return!1;if(u().sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(u()(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,o=(0,h.Z)(n);if(t){var i=(0,h.Z)(this).constructor;e=u()(o,arguments,i)}else e=o.apply(this,arguments);return(0,g.Z)(this,e)});function i(){var e,n;(0,p.Z)(this,i);for(var t=arguments.length,a=new Array(t),l=0;l<t;l++)a[l]=arguments[l];return n=o.call.apply(o,x()(e=[this]).call(e,a)),(0,y.Z)((0,f.Z)(n),"getContainerCss",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.fields,t=void 0===n?[]:n,o=e.type,i="";return((o===ce||o===de)&&null!=t&&C()(t).call(t,(function(e){var n;return"short_text"===e.type&&(null===(n=e.show)||void 0===n?void 0:n.value)}))||o===ue)&&(i=(0,le.css)("flex-direction:column;")),(0,le.css)("display:flex;&.layout-left{flex-direction:row;}&.layout-right{flex-direction:row-reverse;}&.layout-center{flex-direction:column;max-width:500px;padding-top:30px;.banner{padding:10px 40px 0;display:flex;justify-content:center;form-fields{padding-top:10px;}img{max-width:100%;max-height:13em;}@media (max-width:540px){margin-top:0px;}}}&.layout-left,&.layout-right{width:50em;min-height:31.5em;.form-fields{padding-top:40px;flex-grow:1;min-width:270px;overflow:hidden;}.banner{position:relative;overflow:hidden;width:50%;display:flex;justify-content:center;align-items:center;img{position:absolute;object-fit:contain;width:100%;height:100%;}}}@media (max-width:540px){&.layout-left,&.layout-right{flex-direction:column;width:auto;height:auto;.banner,.form-fields{width:100%;max-width:100%;min-width:270px;overflow:hidden;}.banner{height:20em;img{width:100%;}}}}.form-fields{display:flex;justify-content:flex-end;padding:0px 10px;flex-direction:column;align-items:center;box-sizing:border-box;.title{flex-grow:0.5;width:100%;padding:0px 20px;box-sizing:border-box;word-break:break-word;.s-component-content{p:nth-of-type(2){margin-bottom:20px;}}}.group-fields{display:flex;width:100%;padding:0 20px 20px;box-sizing:border-box;justify-content:space-between;flex-wrap:wrap;",i,"\n\n          .input-field{flex-grow:2;margin:0 10px 10px 10px;}.button-field{flex-grow:6;margin:0 10px 10px 10px;}.error-field{align-self:center;margin:0 30px 18px 30px;color:#ff6a78;}.terms_field{margin:0 10px 18px 10px;color:#8d949c;.gdpr-text{padding-left:5px;}.s-terms-link{display:inline;.s-common-link{cursor:pointer;text-decoration:underline;}}}.s-kit-input-affix-wrapper,.s-kit-input{width:100%;}.s-kit-input{padding-left:30px;}.s-kit-input-prefix{left:8px;font-size:16px;i{color:#c6c9cd;}}}.s-email-form-button{display:flex;align-items:center;justify-content:center;box-sizing:border-box;padding:9px 9px;font-size:14px;min-height:36px;letter-spacing:1px;text-align:center;cursor:pointer;font-weight:bold;&.no_button{background:#fff;color:#010101;}}}")})),(0,y.Z)((0,f.Z)(n),"getActionByRef",(function(e){var t=n.props.templateData,o=(null==t?void 0:t.actions)||[];return k()(o).call(o,(function(n){return n.fieldRef===e}))})),(0,y.Z)((0,f.Z)(n),"bindActionsWithEvent",(function(e){var t=n.props,o=t.formActions,i=t.onChangeFormData;if(o){var a=n.getActionByRef(null==e?void 0:e.ref);N()(me).call(me,null==a?void 0:a.type)&&i("recaptchaData",{recaptchaToken:e.recaptchaToken,recaptchaType:e.recaptchaType}),o.actionDispatcher({type:null==a?void 0:a.type,values:{action:a,field:e}})}})),(0,y.Z)((0,f.Z)(n),"onCheckInvisibleReCaptcha",(function(e){var t=n.props.checkValidate,o=n.state.reCaptchaRef,i=n.getActionByRef(null==e?void 0:e.ref).type;t&&t()&&N()(me).call(me,i)?o.clickInvisibleReCaptcha(e):n.bindActionsWithEvent(e)})),(0,y.Z)((0,f.Z)(n),"needToShowGDPRCompliance",(function(){return M.getGDPRComplianceFeature()})),(0,y.Z)((0,f.Z)(n),"_toggleGDPRAccepted",(function(){n.props.onToggleTerms()})),(0,y.Z)((0,f.Z)(n),"needIncludeTerms",(function(){return!M.getIsSxl()&&n.needToShowGDPRCompliance()})),(0,y.Z)((0,f.Z)(n),"renderGDPRCompliance",(function(){if(n.needIncludeTerms())return(0,d.Z)("div",{className:"terms_field"},void 0,(0,d.Z)("input",{type:"checkbox",defaultChecked:n.props.gdprAccepted,onChange:n._toggleGDPRAccepted}),(0,d.Z)("label",{htmlFor:"gdpr",className:"gdpr-text s-font-body s-item-text"},void 0,G()))})),(0,y.Z)((0,f.Z)(n),"renderButtons",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return T()(e).call(e,(function(e){var t;return R.createElement(R.Fragment,null,(0,d.Z)(X.default,{invisible:!0,requestData:e,onRef:function(e){return n.setState({reCaptchaRef:e})},handleSubmit:n.bindActionsWithEvent}),(0,d.Z)(q,{name:e.name,type:e.type,handleClick:A()(t=n.onCheckInvisibleReCaptcha).call(t,(0,f.Z)(n),e)},e.ref))}))})),(0,y.Z)((0,f.Z)(n),"renderEmailFields",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=B.getIsRtlLayout(),o=n.props,i=o.formData,a=o.onChangeFormData,l=o.errorData,r=o.gdprAccepted;return T()(e).call(e,(function(e){var o,s;return"short_text"===e.type&&null!==(o=e.show)&&void 0!==o&&o.value?(0,d.Z)(J,{value:null==i?void 0:i.name,placeholder:e.name,isRtlLayout:t,onChangeValue:null==a?void 0:A()(a).call(a,null,"name")}):"email"===e.type?[(0,d.Z)(K,{value:null==i?void 0:i.email,placeholder:e.name,isRtlLayout:t,onChangeValue:null==a?void 0:A()(a).call(a,null,e.type)},"email"),null!=l&&l.email?(0,d.Z)("div",{className:"error-field"},void 0,se("Enter a valid email.")):""]:"phone"===e.type?[(0,d.Z)(Y,{value:null==i?void 0:i.email,placeholder:e.name,isRtlLayout:t,onChangeValue:null==a?void 0:A()(a).call(a,null,e.type)},"phone"),null!=l&&l.phone?(0,d.Z)("div",{className:"error-field"},void 0,se("Enter a phone number.")):""]:"submit_button"===e.type?R.createElement(R.Fragment,null,(0,d.Z)(X.default,{invisible:!0,requestData:e,onRef:function(e){return n.setState({reCaptchaRef:e})},handleSubmit:n.bindActionsWithEvent}),(0,d.Z)(q,{name:e.name,type:e.type,handleClick:A()(s=n.onCheckInvisibleReCaptcha).call(s,(0,f.Z)(n),e),disbale:n.needIncludeTerms()&&!r})):""}))})),n}return(0,m.Z)(i,[{key:"setStyleFallBack",value:function(){re("#popups-content .s-kit-input").addClass("s-font-body")}},{key:"componentDidMount",value:function(){this.setStyleFallBack()}},{key:"componentDidUpdate",value:function(){this.setStyleFallBack()}},{key:"_getRequiredFonts",value:function(){var e,n=T()(e=["body","title","heading","button"]).call(e,(function(e){var n;return T()(n=_([L.getFontName(e),L.getFontName(e,{preview:!0})]).uniq().compact()).call(n,(function(n){return{usedAs:e,value:L.getFontByName(n)}})).value()}));return _.flatten(n)}},{key:"render",value:function(){var e,n,t,o,i,a=this.props,l=a.templateData,r=a.variationClassNames,s=L.getFontClassNames();if(null==l||!l.ref)return null;var c=null==l?void 0:l.theme,u=null==c||null===(e=c.layout)||void 0===e?void 0:e.type,p="center"!==u?pe:"",m=null==l||null===(n=l.attachments)||void 0===n||null===(t=k()(n).call(n,(function(e){return"image"===e.type})))||void 0===t?void 0:t.src,f=m||p,v=[];return v.push(r),v.push(s),(0,d.Z)("div",{className:x()(o=x()(i="popups-container layout-".concat(u," ")).call(i,this.getContainerCss(l)," ")).call(o,v.join(" ")),id:"popups-content"},void 0,(0,d.Z)(V,{fonts:this._getRequiredFonts(),domId:"popups-content"}),"center"===u&&m&&(0,d.Z)("div",{className:"banner"},void 0,(0,d.Z)("img",{src:f})),"center"!==u&&(0,d.Z)("div",{className:"banner"},void 0," ",(0,d.Z)("img",{src:f})),(0,d.Z)("div",{className:"form-fields"},void 0,(0,d.Z)("div",{className:"title s-component-editor-inner common-editor s-font-body"},void 0,(0,d.Z)("div",{className:"s-component-content",dangerouslySetInnerHTML:{__html:(null==l?void 0:l.titleText)||""}})),(null==l?void 0:l.type)===ce&&(0,d.Z)("div",{className:"group-fields"},void 0,this.renderEmailFields(null==l?void 0:l.fields),this.renderGDPRCompliance()),(null==l?void 0:l.type)===de&&(0,d.Z)("div",{className:"group-fields"},void 0,this.renderEmailFields(null==l?void 0:l.fields)),(null==l?void 0:l.type)===ue&&(0,d.Z)("div",{className:"group-fields"},void 0,this.renderButtons(null==l?void 0:l.fields)),"AGE"===(null==l?void 0:l.type)&&(0,d.Z)("div",{className:"group-fields"},void 0,this.renderButtons(null==l?void 0:l.fields))))}}]),i}(R.PureComponent),ve=(0,F.connect)((function(){return{variationClassNames:O.getTemplateVariationClassNames(),fontClassNames:L.getFontClassNames()}}),{})(fe),ge=t(686902),he=t.n(ge),ye=t(14310),Ze=t.n(ye),xe=t(620116),be=t.n(xe),Ce=t(834074),_e=t.n(Ce),we=t(778914),ke=t.n(we),De=t(239649),Ne=t.n(De),Se=t(820368),Te=t.n(Se),Ee=t(663978),Ae=t.n(Ee),Re=t(981643),Fe=t.n(Re),Ie=(t(229254),t(974916),t(115306),t(914578)),Pe=t(333938),Be=t(563109),Oe=t.n(Be),Le=t(359011),Me=function(){var e=(0,Pe.Z)(Oe().mark((function e(){var n,t;return Oe().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,Le.fetchJSON)("/r/v1/sites/".concat(B.getId(),"/popups/active"));case 2:return n=e.sent,e.next=5,n.json();case 5:return t=e.sent,e.abrupt("return",t.data);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),We=t(329756),Ve=t(836808),je=t(43138),Ge=(t(246276),t(353147));function ze(e,n){var t=he()(e);if(Ze()){var o=Ze()(e);n&&(o=be()(o).call(o,(function(n){return _e()(e,n).enumerable}))),t.push.apply(t,o)}return t}function He(e){for(var n=1;n<arguments.length;n++){var t,o=null!=arguments[n]?arguments[n]:{};if(n%2)ke()(t=ze(Object(o),!0)).call(t,(function(n){(0,y.Z)(e,n,o[n])}));else if(Ne())Te()(e,Ne()(o));else{var i;ke()(i=ze(Object(o))).call(i,(function(n){Ae()(e,n,_e()(o,n))}))}}return e}var qe=function(e){return"http://"==e.substr(0,7).toLowerCase()||"https://"==e.substr(0,8).toLowerCase()?e:"http://".concat(e)},Ue=function(e){(0,v.Z)(i,e);var n,t,o=(n=i,t=function(){if("undefined"==typeof Reflect||!u())return!1;if(u().sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(u()(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,o=(0,h.Z)(n);if(t){var i=(0,h.Z)(this).constructor;e=u()(o,arguments,i)}else e=o.apply(this,arguments);return(0,g.Z)(this,e)});function i(e){var n,t;return(0,p.Z)(this,i),t=o.call(this,e),(0,y.Z)((0,f.Z)(t),"formActions",void 0),(0,y.Z)((0,f.Z)(t),"removeBindEvent",(function(){t._unbindWindowScroll(),t._unBindOnExit()})),(0,y.Z)((0,f.Z)(t),"_handlePopState",(function(){var e=t.state.url;window.history.pushState(null,null,e),t.onOpenDialog()})),(0,y.Z)((0,f.Z)(t),"_onMoveBrowserToolbar",(function(e){(null==e?void 0:e.clientY)<20&&t.onOpenDialog()})),(0,y.Z)((0,f.Z)(t),"_onScroll",(function(){var e=t.state.templateData,n=(e=void 0===e?{delayType:""}:e).delayType;Ie.debounce((function(){var e=re(document),o=re(window),i=e.height(),a=e.height()/2,l=o.height(),r=o.height()/2,s=e.scrollTop(),c=a-r;n===te&&c<s&&s<c+r&&t.onOpenDialog(),n===oe&&s>=i-l&&t.onOpenDialog()}),100)()})),(0,y.Z)((0,f.Z)(t),"assembleHandle",(function(){var e;t.formActions=new z.FormActionCreator((e={},(0,y.Z)(e,$,t.submitEmailForm),(0,y.Z)(e,"confirm_age_cliam",t.agreeAgeClaim),(0,y.Z)(e,"ignore_age_cliam",t.ignoreAgeClaim),(0,y.Z)(e,"WEB_LINK",t.goWebLink),(0,y.Z)(e,"STORE_SECTION",t.goStoreSection),(0,y.Z)(e,"BLOG_SECTION",t.goBlogSection),(0,y.Z)(e,"HOME_PAGE",t.goHomePage),(0,y.Z)(e,"EMAIL",t.callEmailBox),e))})),(0,y.Z)((0,f.Z)(t),"goWebLink",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.field;null!=n&&n.link&&window.open(qe(n.link)),t.onCloseDialog()})),(0,y.Z)((0,f.Z)(t),"goBlogSection",(function(){if(t.onCloseDialog(),O.getAllSectionsWithName("blog").length<=1){var e,n=O.getPathBySection("blog");null===(e=location)||void 0===e||e.replace(n)}})),(0,y.Z)((0,f.Z)(t),"goStoreSection",(function(){if(t.onCloseDialog(),O.getAllSectionsWithName("ecommerce").length<=1){var e,n=O.getPathBySection("ecommerce");null===(e=location)||void 0===e||e.replace(n)}})),(0,y.Z)((0,f.Z)(t),"goHomePage",(function(){var e;t.onCloseDialog();var n=O.getPathBySection("home");null===(e=location)||void 0===e||e.replace(n)})),(0,y.Z)((0,f.Z)(t),"agreeAgeClaim",(function(){t.onCloseDialog()})),(0,y.Z)((0,f.Z)(t),"callEmailBox",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.field;null!=n&&n.emailAddress&&window.open("mailto:".concat(n.emailAddress)),t.onCloseDialog()})),(0,y.Z)((0,f.Z)(t),"ignoreAgeClaim",(function(){location.href="/i/restricted"})),(0,y.Z)((0,f.Z)(t),"setTemplateData",(function(){t.setState({templateData:{}})})),(0,y.Z)((0,f.Z)(t),"onOpenDialog",(function(){t.setState({isOpen:!0})})),(0,y.Z)((0,f.Z)(t),"onChangeFormData",(function(e,n){var o=t.state.formData;t.setState({formData:He(He({},o),{},(0,y.Z)({},e,n))})})),(0,y.Z)((0,f.Z)(t),"onToggleTerms",(function(){var e=t.state.gdpr_accepted;t.setState({gdpr_accepted:!e})})),(0,y.Z)((0,f.Z)(t),"checkValidate",(function(){var e=t.state,n=e.formData,o=e.templateData;if((null==o?void 0:o.type)===ee){if(!We.RegexConstants.EMAIL.test(Ie.trim(null==n?void 0:n.email)))return t.setState({errorData:{email:!0}}),!1}else if((null==o?void 0:o.type)===ne&&!We.RegexConstants.PHONE.test(Ie.trim(null==n?void 0:n.phone)))return t.setState({errorData:{phone:!0}}),!1;return t.setState({errorData:{}}),!0})),(0,y.Z)((0,f.Z)(t),"submitEmailForm",(function(){var e;if(t.checkValidate()){var n=t.state,o=n.formData,i=n.templateData,a=null==i?void 0:i.type,l=t.getActionByType($),r={collected_email:He(He({skip_name:!0,skip_email:!0,skip_phone_number:!0,recipient:null==l||null===(e=l.arguments)||void 0===e?void 0:e.recipient,label:"popup"},o.recaptchaData),{},{name:o.name,email:null==o?void 0:o.email,phone_number:null==o?void 0:o.phone})};a===ee?(t.state.gdpr_accepted&&(r.collected_email.gdpr_accepted=!0),r.collected_email.skip_phone_number=!0):a===ne&&(r.collected_email.skip_email=!0),j.submit({data:r,successCallback:function(){t.setState({submitted:!0})},errorCallback:function(){t.setState({submitted:!1})}})}})),(0,y.Z)((0,f.Z)(t),"onCloseDialog",(function(){var e,n=t.state.templateData;null!=n&&n.ref&&(e=null==n?void 0:n.ref,Ve.set("_claim_popup_ref",e)),t.setState({isOpen:!1,formData:{},templateData:{},submitted:!1}),t.removeBindEvent()})),(0,y.Z)((0,f.Z)(t),"checkTimeDelayTypes",(function(){var e=t.state.templateData,n=(e=void 0===e?{delayType:""}:e).delayType;switch(n){case te:case oe:t._bindWindowScroll();break;case"on_exit":t._bindOnExit();break;default:var o=ie[n]||0;Ie.delay((function(){t.onOpenDialog()}),o)}})),(0,y.Z)((0,f.Z)(t),"initTemplateData",(function(e){var n=t.state.templateData,o=t.props.isMultiPage;if(!Ie.isEmpty(n)){var i=n||{},a=i.showOnPagesType,l=void 0===a?ae:a,r=i.showOnPages,s=void 0===r?[]:r,c=i.ref,u=Ve.get("_claim_popup_ref")!==c,d=l===ae||-1!==Fe()(s).call(s,e);!u||!d&&o||t.checkTimeDelayTypes()}})),(0,y.Z)((0,f.Z)(t),"renderSuccessContent",(function(){var e,n=t.getActionByType($),o=L.getFontClassNames(),i=[];return i.push(t.props.variationClassNames),i.push(o),(0,d.Z)("div",{className:"submit-result-container ".concat(i.join(" ")),id:"popups-email-form-success"},void 0,(0,d.Z)(V,{fonts:t._getRequiredFonts(),domId:"popups-email-form-success"}),(0,d.Z)("div",{className:"title s-font-body"},void 0,null==n||null===(e=n.arguments)||void 0===e?void 0:e.successHint),(0,d.Z)(q,{type:null,name:Ge("Ok"),handleClick:t.onCloseDialog}))})),(0,y.Z)((0,f.Z)(t),"getActionByType",(function(e){var n=t.state.templateData,o=(null==n?void 0:n.actions)||[];return k()(o).call(o,(function(n){return n.type===e}))})),t.state={isOpen:!1,formData:{},templateData:{},errorData:{},submitted:!1,gdpr_accepted:!1,url:(null===(n=window)||void 0===n?void 0:n.location.href)||""},t}return(0,m.Z)(i,[{key:"componentDidMount",value:function(){var e=this,n=this.props.currentPageUID,t=void 0===n?"":n;Me().then((function(n){var o,i=null===(o=n[0])||void 0===o?void 0:o.data;e.setState({templateData:i},(function(){e.initTemplateData(t)}))})),this.assembleHandle()}},{key:"componentWillUnmount",value:function(){this.removeBindEvent()}},{key:"componentWillReceiveProps",value:function(e){var n=e.currentPageUID;n!==this.props.currentPageUID&&this.initTemplateData(n)}},{key:"_bindOnExit",value:function(){je.isMobile()?window.addEventListener("popstate",this._handlePopState):re(document).on("mouseleave",this._onMoveBrowserToolbar)}},{key:"_unBindOnExit",value:function(){je.isMobile()?window.removeEventListener("popstate",this._handlePopState):re(document).off("mouseleave",this._onMoveBrowserToolbar)}},{key:"_bindWindowScroll",value:function(){re(window).on("scroll",this._onScroll)}},{key:"_unbindWindowScroll",value:function(){re(window).off("scroll",this._onScroll)}},{key:"_getRequiredFonts",value:function(){var e,n=T()(e=["body","title","heading","button"]).call(e,(function(e){var n;return T()(n=Ie([L.getFontName(e),L.getFontName(e,{preview:!0})]).uniq().compact()).call(n,(function(n){return{usedAs:e,value:L.getFontByName(n)}})).value()}));return Ie.flatten(n)}},{key:"render",value:function(){var e,n,t=this.state,o=t.isOpen,i=t.templateData,a=t.formData,l=t.submitted,r=t.errorData,s=t.gdpr_accepted,c=null==i||null===(e=i.theme)||void 0===e||null===(n=e.layout)||void 0===n?void 0:n.type;return(0,d.Z)(U.Modal,{className:"s-email-form popups-dialog layout-".concat(c," modify-the-position"),zIndex:10002,visible:o,maskClosable:!1,closable:"AGE"!==(null==i?void 0:i.type),onCancel:this.onCloseDialog},void 0,l?this.renderSuccessContent():(0,d.Z)(ve,{templateData:i,formData:a,errorData:r,formActions:this.formActions,onChangeFormData:this.onChangeFormData,onToggleTerms:this.onToggleTerms,gdprAccepted:s,checkValidate:this.checkValidate}))}}]),i}(R.PureComponent),Je=(0,F.connect)((function(){return{isMultiPage:O.getIsMultiPage(),currentPageUID:O.getCurrentPageUID(),variationClassNames:O.getTemplateVariationClassNames(),fontClassNames:L.getFontClassNames()}}),{})(Ue),Ke={PopupsContent:ve},Ye=Je},743668:function(e,n,t){(n=t(923645)(!1)).push([e.id,".s-component-editor-inner.common-editor .s-component-content img {\n  margin: 0px auto;\n  border-radius: 3px;\n  max-width: 98%;\n  display: block;\n  padding-top: 10px 0;\n}\n.s-component-editor-inner.common-editor .s-component-content p {\n  margin: 0.5em 0;\n  line-height: 1.4;\n}\n.s-component-editor-inner.common-editor .s-component-content em {\n  font-style: italic;\n  font-weight: inherit;\n}\n.s-component-editor-inner.common-editor .s-component-content strong {\n  font-style: inherit;\n}\n.s-component-editor-inner.common-editor .s-component-content ol {\n  margin: 0.5em 0;\n  padding: 0 20px;\n  list-style-type: decimal;\n}\n.s-component-editor-inner.common-editor .s-component-content ul {\n  margin: 0.5em 0;\n  padding: 0 20px;\n  list-style-type: disc;\n}\n.s-component-editor-inner.common-editor .s-component-content li {\n  line-height: 1.4;\n}\n@media only screen and (max-width: 500px) {\n  .s-kit-modal-body {\n    max-height: 74vh;\n    overflow: auto;\n  }\n  .popups-dialog.s-email-form.modify-the-position .s-kit-modal-content .s-kit-modal-close {\n    top: -40px;\n    right: 0;\n  }\n  .s-kit-modal.popups-dialog {\n    position: fixed;\n    top: 40px;\n    left: 0;\n    min-width: 100%;\n    margin: 0;\n  }\n}\n.popups-dialog.s-email-form.modify-the-position .s-kit-modal-content {\n  overflow: visible;\n}\n.popups-dialog.s-email-form.modify-the-position .s-kit-modal-close {\n  top: 0;\n  right: -40px;\n  color: rgba(255, 255, 255, 0.75);\n}\n.popups-dialog.s-email-form .s-kit-modal-body {\n  padding: 0;\n}\n.popups-dialog.s-email-form .s-kit-modal-content {\n  width: 100%;\n}\n.popups-dialog.s-email-form .s-kit-modal-close {\n  top: 7px;\n  right: 6px;\n}\n.popups-dialog.s-email-form .submit-result-container {\n  padding: 40px;\n}\n.popups-dialog.s-email-form .submit-result-container .title {\n  margin-bottom: 40px;\n  box-sizing: border-box;\n  text-align: center;\n}\n.popups-dialog.s-email-form .submit-result-container .s-email-form-button {\n  box-sizing: border-box;\n  width: 100%;\n  padding: 9px 9px;\n  font-size: 14px;\n  min-height: 36px;\n  line-height: 18px;\n  letter-spacing: 1.5px;\n  text-align: center;\n  border-radius: 4px;\n  cursor: pointer;\n  font-weight: bold;\n  text-transform: uppercase;\n}\n",""]),e.exports=n}}]);