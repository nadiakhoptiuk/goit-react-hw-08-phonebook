"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[421],{9443:function(n,t,a){a.d(t,{Z:function(){return s}});a(2791);var e="Container_container__VVOCq",i=a(3329);function r(n){var t=n.children;return(0,i.jsx)("div",{className:e,children:t})}var o="Section_section__Z2PLw";function s(n){var t=n.title,a=n.isHidden,e=n.children;return(0,i.jsx)("section",{className:o,children:(0,i.jsxs)(r,{children:[(0,i.jsx)("h1",{className:a?"sectionTitleIsHidden":"sectionTitle",children:t}),e]})})}},5377:function(n,t,a){a.d(t,{Z:function(){return r}});var e=a(885),i=a(2791);function r(n){var t=(0,i.useState)(n),a=(0,e.Z)(t,2),r=a[0],o=a[1];return{state:r,setState:o,handleChange:function(n){var t=n.target.value;o(t)}}}},621:function(n,t,a){a.r(t),a.d(t,{default:function(){return jn}});a(3158);var e=a(6373),i=a(9443),r=a(885),o=a(2791),s=a(5377),c="FormAddContact_form__IqSWD",d="FormAddContact_labelText__+HisC",l="FormAddContact_input__eRaal",u="FormAddContact_btn__P4r9R",v="FormAddContact_addContactIcon__dAZp9",h=a(9914),m=a(7750),g=a(3329);function f(){var n=(0,s.Z)(""),t=n.state,a=n.setState,e=n.handleChange,i=(0,s.Z)(""),o=i.state,f=i.setState,Z=i.handleChange,x=(0,h.Tn)(),p=(0,r.Z)(x,2),_=p[0],b=p[1].isLoading,I=(0,h.wY)("",{refetchOnFocus:!0,refetchOnReconnect:!0}).data,j=function(){a(""),f("")};return(0,g.jsxs)("form",{className:c,onSubmit:function(n){n.preventDefault();var a={name:t,number:o},e=a.name;null!==I&&void 0!==I&&I.some((function(n){return n.name===e}))?alert("".concat(e," is already in your contacts")):(_(a),j())},children:[(0,g.jsxs)("label",{className:d,children:["Name",(0,g.jsx)("input",{className:l,type:"text",name:"name",value:t,onChange:e,maxLength:15,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,g.jsxs)("label",{className:d,children:["Number",(0,g.jsx)("input",{className:l,type:"tel",name:"number",value:o,onChange:Z,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,g.jsxs)("button",{className:u,type:"submit",children:[(0,g.jsx)(m.Z,{className:v}),b?"Addition...":"Add contact"]})]})}var Z=a(1405),x=a(887),p=a(3400),_=a(7247),b=a(4942),I=a(3366),j=a(7462),C=a(4036),S=a(7384),L=a(4419),w=a(5255),y=a(1046),N=a(6151),k=a(168),P=a(8182),z=a(2554),F=a(1217),M=a(5878);function A(n){return(0,F.Z)("MuiCircularProgress",n)}(0,M.Z)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);var R,D,E,H,O,q,B,V,W=["className","color","disableShrink","size","style","thickness","value","variant"],Y=44,T=(0,z.F4)(O||(O=R||(R=(0,k.Z)(["\n  0% {\n    transform: rotate(0deg);\n  }\n\n  100% {\n    transform: rotate(360deg);\n  }\n"])))),G=(0,z.F4)(q||(q=D||(D=(0,k.Z)(["\n  0% {\n    stroke-dasharray: 1px, 200px;\n    stroke-dashoffset: 0;\n  }\n\n  50% {\n    stroke-dasharray: 100px, 200px;\n    stroke-dashoffset: -15px;\n  }\n\n  100% {\n    stroke-dasharray: 100px, 200px;\n    stroke-dashoffset: -125px;\n  }\n"])))),J=(0,w.ZP)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:function(n,t){var a=n.ownerState;return[t.root,t[a.variant],t["color".concat((0,C.Z)(a.color))]]}})((function(n){var t=n.ownerState,a=n.theme;return(0,j.Z)({display:"inline-block"},"determinate"===t.variant&&{transition:a.transitions.create("transform")},"inherit"!==t.color&&{color:(a.vars||a).palette[t.color].main})}),(function(n){return"indeterminate"===n.ownerState.variant&&(0,z.iv)(B||(B=E||(E=(0,k.Z)(["\n      animation: "," 1.4s linear infinite;\n    "]))),T)})),K=(0,w.ZP)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:function(n,t){return t.svg}})({display:"block"}),Q=(0,w.ZP)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:function(n,t){var a=n.ownerState;return[t.circle,t["circle".concat((0,C.Z)(a.variant))],a.disableShrink&&t.circleDisableShrink]}})((function(n){var t=n.ownerState,a=n.theme;return(0,j.Z)({stroke:"currentColor"},"determinate"===t.variant&&{transition:a.transitions.create("stroke-dashoffset")},"indeterminate"===t.variant&&{strokeDasharray:"80px, 200px",strokeDashoffset:0})}),(function(n){var t=n.ownerState;return"indeterminate"===t.variant&&!t.disableShrink&&(0,z.iv)(V||(V=H||(H=(0,k.Z)(["\n      animation: "," 1.4s ease-in-out infinite;\n    "]))),G)})),X=o.forwardRef((function(n,t){var a=(0,y.Z)({props:n,name:"MuiCircularProgress"}),e=a.className,i=a.color,r=void 0===i?"primary":i,o=a.disableShrink,s=void 0!==o&&o,c=a.size,d=void 0===c?40:c,l=a.style,u=a.thickness,v=void 0===u?3.6:u,h=a.value,m=void 0===h?0:h,f=a.variant,Z=void 0===f?"indeterminate":f,x=(0,I.Z)(a,W),p=(0,j.Z)({},a,{color:r,disableShrink:s,size:d,thickness:v,value:m,variant:Z}),_=function(n){var t=n.classes,a=n.variant,e=n.color,i=n.disableShrink,r={root:["root",a,"color".concat((0,C.Z)(e))],svg:["svg"],circle:["circle","circle".concat((0,C.Z)(a)),i&&"circleDisableShrink"]};return(0,L.Z)(r,A,t)}(p),b={},S={},w={};if("determinate"===Z){var N=2*Math.PI*((Y-v)/2);b.strokeDasharray=N.toFixed(3),w["aria-valuenow"]=Math.round(m),b.strokeDashoffset="".concat(((100-m)/100*N).toFixed(3),"px"),S.transform="rotate(-90deg)"}return(0,g.jsx)(J,(0,j.Z)({className:(0,P.Z)(_.root,e),style:(0,j.Z)({width:d,height:d},S,l),ownerState:p,ref:t,role:"progressbar"},w,x,{children:(0,g.jsx)(K,{className:_.svg,ownerState:p,viewBox:"".concat(22," ").concat(22," ").concat(Y," ").concat(Y),children:(0,g.jsx)(Q,{className:_.circle,style:b,ownerState:p,cx:Y,cy:Y,r:(Y-v)/2,fill:"none",strokeWidth:v})})}))}));function $(n){return(0,F.Z)("MuiLoadingButton",n)}var U=(0,M.Z)("MuiLoadingButton",["root","loading","loadingIndicator","loadingIndicatorCenter","loadingIndicatorStart","loadingIndicatorEnd","endIconLoadingEnd","startIconLoadingStart"]),nn=["children","disabled","id","loading","loadingIndicator","loadingPosition","variant"],tn=(0,w.ZP)(N.Z,{shouldForwardProp:function(n){return function(n){return"ownerState"!==n&&"theme"!==n&&"sx"!==n&&"as"!==n&&"classes"!==n}(n)||"classes"===n},name:"MuiLoadingButton",slot:"Root",overridesResolver:function(n,t){return[t.root,t.startIconLoadingStart&&(0,b.Z)({},"& .".concat(U.startIconLoadingStart),t.startIconLoadingStart),t.endIconLoadingEnd&&(0,b.Z)({},"& .".concat(U.endIconLoadingEnd),t.endIconLoadingEnd)]}})((function(n){var t=n.ownerState,a=n.theme;return(0,j.Z)((0,b.Z)({},"& .".concat(U.startIconLoadingStart,", & .").concat(U.endIconLoadingEnd),{transition:a.transitions.create(["opacity"],{duration:a.transitions.duration.short}),opacity:0}),"center"===t.loadingPosition&&(0,b.Z)({transition:a.transitions.create(["background-color","box-shadow","border-color"],{duration:a.transitions.duration.short})},"&.".concat(U.loading),{color:"transparent"}),"start"===t.loadingPosition&&t.fullWidth&&(0,b.Z)({},"& .".concat(U.startIconLoadingStart,", & .").concat(U.endIconLoadingEnd),{transition:a.transitions.create(["opacity"],{duration:a.transitions.duration.short}),opacity:0,marginRight:-8}),"end"===t.loadingPosition&&t.fullWidth&&(0,b.Z)({},"& .".concat(U.startIconLoadingStart,", & .").concat(U.endIconLoadingEnd),{transition:a.transitions.create(["opacity"],{duration:a.transitions.duration.short}),opacity:0,marginLeft:-8}))})),an=(0,w.ZP)("div",{name:"MuiLoadingButton",slot:"LoadingIndicator",overridesResolver:function(n,t){var a=n.ownerState;return[t.loadingIndicator,t["loadingIndicator".concat((0,C.Z)(a.loadingPosition))]]}})((function(n){var t=n.theme,a=n.ownerState;return(0,j.Z)({position:"absolute",visibility:"visible",display:"flex"},"start"===a.loadingPosition&&("outlined"===a.variant||"contained"===a.variant)&&{left:"small"===a.size?10:14},"start"===a.loadingPosition&&"text"===a.variant&&{left:6},"center"===a.loadingPosition&&{left:"50%",transform:"translate(-50%)",color:t.palette.action.disabled},"end"===a.loadingPosition&&("outlined"===a.variant||"contained"===a.variant)&&{right:"small"===a.size?10:14},"end"===a.loadingPosition&&"text"===a.variant&&{right:6},"start"===a.loadingPosition&&a.fullWidth&&{position:"relative",left:-10},"end"===a.loadingPosition&&a.fullWidth&&{position:"relative",right:-10})})),en=o.forwardRef((function(n,t){var a=(0,y.Z)({props:n,name:"MuiLoadingButton"}),e=a.children,i=a.disabled,r=void 0!==i&&i,s=a.id,c=a.loading,d=void 0!==c&&c,l=a.loadingIndicator,u=a.loadingPosition,v=void 0===u?"center":u,h=a.variant,m=void 0===h?"text":h,f=(0,I.Z)(a,nn),Z=(0,S.Z)(s),x=null!=l?l:(0,g.jsx)(X,{"aria-labelledby":Z,color:"inherit",size:16}),p=(0,j.Z)({},a,{disabled:r,loading:d,loadingIndicator:x,loadingPosition:v,variant:m}),_=function(n){var t=n.loading,a=n.loadingPosition,e=n.classes,i={root:["root",t&&"loading"],startIcon:[t&&"startIconLoading".concat((0,C.Z)(a))],endIcon:[t&&"endIconLoading".concat((0,C.Z)(a))],loadingIndicator:["loadingIndicator",t&&"loadingIndicator".concat((0,C.Z)(a))]},r=(0,L.Z)(i,$,e);return(0,j.Z)({},e,r)}(p);return(0,g.jsx)(tn,(0,j.Z)({disabled:r||d,id:Z,ref:t},f,{variant:m,classes:_,ownerState:p,children:"end"===p.loadingPosition?(0,g.jsxs)(o.Fragment,{children:[e,d&&(0,g.jsx)(an,{className:_.loadingIndicator,ownerState:p,children:x})]}):(0,g.jsxs)(o.Fragment,{children:[d&&(0,g.jsx)(an,{className:_.loadingIndicator,ownerState:p,children:x}),e]})}))})),rn=a(1286),on=a(1038),sn=a(2168),cn="ContactItem_contactItem__Z4FuP",dn="ContactItem_icon__qzINN",ln="ContactItem_btnDelete__edqzG",un="ContactItem_btnEdit__NMSxc ContactItem_btnDelete__edqzG",vn="ContactItem_contactName__ZAMAK",hn="ContactItem_contactNumber__Xjnxb",mn="ContactItem_btnList__4v6m0";function gn(n){var t=n.contactData,a=(0,h.MG)(),e=(0,r.Z)(a,2),i=e[0],o=e[1].isLoading,s=(0,Z.I0)();return(0,g.jsxs)("li",{className:cn,children:[(0,g.jsx)(x.Z,{className:dn}),(0,g.jsxs)("p",{className:vn,children:[t.name,":"]}),(0,g.jsx)("p",{className:hn,children:t.number}),(0,g.jsxs)("ul",{className:mn,children:[(0,g.jsx)(p.Z,{"aria-label":"edit",size:"large",className:un,type:"button",onClick:function(){return n=t,s((0,sn.fS)(n)),void s((0,sn.sz)());var n},children:(0,g.jsx)(rn.Z,{})}),o?(0,g.jsx)(en,{loading:!0,variant:"outlined",className:ln,children:"Submit"}):(0,g.jsx)(p.Z,{"aria-label":"delete",size:"large",className:ln,type:"button",onClick:function(){return n=t.id,i(n),void s((0,on.a)(""));var n},children:(0,g.jsx)(_.Z,{})})]})]})}var fn=function(n){return n.filter},Zn="ContactsList_contactsList__ZQI1L";function xn(){var n=(0,h.wY)("",{refetchOnReconnect:!0,refetchOnMountOrArgChange:!0}).data,t=(0,Z.I0)(),a=(0,Z.v9)(fn),e=function(){var t=null===a||void 0===a?void 0:a.toLowerCase();return a?null===n||void 0===n?void 0:n.filter((function(n){return n.name.toLowerCase().includes(t)})):n}();return(0,o.useEffect)((function(){0===(null===n||void 0===n?void 0:n.length)&&t((0,on.a)(""))}),[n,t]),(0,g.jsx)("ul",{className:Zn,children:null===e||void 0===e?void 0:e.map((function(n){return(0,g.jsx)(gn,{contactData:n},n.id)}))})}var pn="FilterInput_inputLabel__C+sAF",_n="FilterInput_filterInput__LNZay",bn="FilterInput_notification__67Cr3";function In(){var n=(0,h.wY)("",{refetchOnFocus:!0,refetchOnReconnect:!0}).data,t=(0,Z.v9)(fn),a=(0,Z.I0)();return(0,g.jsx)(g.Fragment,{children:null!==n&&void 0!==n&&n.length?(0,g.jsxs)("label",{className:pn,children:["Find contact by name",(0,g.jsx)("input",{className:_n,type:"text",name:"filter",value:t,autoFocus:!0,onChange:function(n){var t=n.target.value;a((0,on.a)(t))}})]}):(0,g.jsx)("p",{className:bn,children:"You haven't added any contact yet..."})})}function jn(){var n=(0,h.wY)().isFetching;return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(i.Z,{title:"Add new contact:",isHidden:!1,children:(0,g.jsx)(f,{})}),(0,g.jsxs)(i.Z,{title:"Contacts",isHidden:!1,children:[n?(0,g.jsx)(e.RL,{height:48,width:48,radius:45,color:"#1a75cfb3",wrapperClass:"loader",ariaLabel:"loading-indicator"}):(0,g.jsx)(In,{}),(0,g.jsx)(xn,{})]})]})}},7247:function(n,t,a){var e=a(5318);t.Z=void 0;var i=e(a(5649)),r=a(3329),o=(0,i.default)((0,r.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");t.Z=o},1286:function(n,t,a){var e=a(5318);t.Z=void 0;var i=e(a(5649)),r=a(3329),o=(0,i.default)((0,r.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit");t.Z=o},7750:function(n,t,a){var e=a(5318);t.Z=void 0;var i=e(a(5649)),r=a(3329),o=(0,i.default)((0,r.jsx)("path",{d:"M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-9-2V7H4v3H1v2h3v3h2v-3h3v-2H6zm9 4c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"PersonAdd");t.Z=o},887:function(n,t,a){var e=a(5318);t.Z=void 0;var i=e(a(5649)),r=a(3329),o=(0,i.default)((0,r.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v1c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-1c0-2.66-5.33-4-8-4z"}),"PersonRounded");t.Z=o}}]);
//# sourceMappingURL=contacts.dd52669c.chunk.js.map