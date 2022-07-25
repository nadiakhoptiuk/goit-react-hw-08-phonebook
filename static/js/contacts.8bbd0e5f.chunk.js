"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[421],{9443:function(n,t,a){a.d(t,{Z:function(){return s}});a(2791);var e="Container_container__Qb5Sd",i=a(3329);function o(n){var t=n.children;return(0,i.jsx)("div",{className:e,children:t})}var r="Section_section__Ku9xr";function s(n){var t=n.title,a=n.isHidden,e=n.children;return(0,i.jsx)("section",{className:r,children:(0,i.jsxs)(o,{children:[(0,i.jsx)("h1",{className:a?"sectionTitleIsHidden":"sectionTitle",children:t}),e]})})}},5377:function(n,t,a){a.d(t,{Z:function(){return o}});var e=a(885),i=a(2791);function o(n){var t=(0,i.useState)(n),a=(0,e.Z)(t,2),o=a[0],r=a[1];return{state:o,setState:r,handleChange:function(n){var t=n.target.value;r(t)}}}},621:function(n,t,a){a.r(t),a.d(t,{default:function(){return jn}});a(3158);var e=a(6373),i=a(9443),o=a(885),r=a(2791),s=a(5377),c="FormAddContact_form__4FHDP",d="FormAddContact_labelText__IzWx0",l="FormAddContact_input__YuFo6",u="FormAddContact_btn__RxSZM",v="FormAddContact_addContactIcon__oNq9g",h=a(9914),m=a(7750),g=a(3329);function f(){var n=(0,s.Z)(""),t=n.state,a=n.setState,e=n.handleChange,i=(0,s.Z)(""),r=i.state,f=i.setState,x=i.handleChange,p=(0,h.Tn)(),Z=(0,o.Z)(p,2),_=Z[0],b=Z[1].isLoading,I=(0,h.wY)("",{refetchOnFocus:!0,refetchOnReconnect:!0}).data,j=function(){a(""),f("")};return(0,g.jsxs)("form",{className:c,onSubmit:function(n){n.preventDefault();var a={name:t,number:r},e=a.name;null!==I&&void 0!==I&&I.some((function(n){return n.name===e}))?alert("".concat(e," is already in your contacts")):(_(a),j())},children:[(0,g.jsxs)("label",{className:d,children:["Name",(0,g.jsx)("input",{className:l,type:"text",name:"name",value:t,onChange:e,maxLength:15,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,g.jsxs)("label",{className:d,children:["Number",(0,g.jsx)("input",{className:l,type:"tel",name:"number",value:r,onChange:x,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,g.jsxs)("button",{className:u,type:"submit",children:[(0,g.jsx)(m.Z,{className:v}),b?"Addition...":"Add contact"]})]})}var x=a(1405),p=a(887),Z=a(3400),_=a(7247),b=a(4942),I=a(3366),j=a(7462),S=a(4036),C=a(7384),w=a(4419),k=a(5255),y=a(1046),L=a(6151),N=a(168),P=a(8182),F=a(2554),M=a(1217),z=a(5878);function D(n){return(0,M.Z)("MuiCircularProgress",n)}(0,z.Z)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);var R,A,E,H,O,B,W,Y,T=["className","color","disableShrink","size","style","thickness","value","variant"],V=44,q=(0,F.F4)(O||(O=R||(R=(0,N.Z)(["\n  0% {\n    transform: rotate(0deg);\n  }\n\n  100% {\n    transform: rotate(360deg);\n  }\n"])))),J=(0,F.F4)(B||(B=A||(A=(0,N.Z)(["\n  0% {\n    stroke-dasharray: 1px, 200px;\n    stroke-dashoffset: 0;\n  }\n\n  50% {\n    stroke-dasharray: 100px, 200px;\n    stroke-dashoffset: -15px;\n  }\n\n  100% {\n    stroke-dasharray: 100px, 200px;\n    stroke-dashoffset: -125px;\n  }\n"])))),Q=(0,k.ZP)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:function(n,t){var a=n.ownerState;return[t.root,t[a.variant],t["color".concat((0,S.Z)(a.color))]]}})((function(n){var t=n.ownerState,a=n.theme;return(0,j.Z)({display:"inline-block"},"determinate"===t.variant&&{transition:a.transitions.create("transform")},"inherit"!==t.color&&{color:(a.vars||a).palette[t.color].main})}),(function(n){return"indeterminate"===n.ownerState.variant&&(0,F.iv)(W||(W=E||(E=(0,N.Z)(["\n      animation: "," 1.4s linear infinite;\n    "]))),q)})),G=(0,k.ZP)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:function(n,t){return t.svg}})({display:"block"}),K=(0,k.ZP)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:function(n,t){var a=n.ownerState;return[t.circle,t["circle".concat((0,S.Z)(a.variant))],a.disableShrink&&t.circleDisableShrink]}})((function(n){var t=n.ownerState,a=n.theme;return(0,j.Z)({stroke:"currentColor"},"determinate"===t.variant&&{transition:a.transitions.create("stroke-dashoffset")},"indeterminate"===t.variant&&{strokeDasharray:"80px, 200px",strokeDashoffset:0})}),(function(n){var t=n.ownerState;return"indeterminate"===t.variant&&!t.disableShrink&&(0,F.iv)(Y||(Y=H||(H=(0,N.Z)(["\n      animation: "," 1.4s ease-in-out infinite;\n    "]))),J)})),X=r.forwardRef((function(n,t){var a=(0,y.Z)({props:n,name:"MuiCircularProgress"}),e=a.className,i=a.color,o=void 0===i?"primary":i,r=a.disableShrink,s=void 0!==r&&r,c=a.size,d=void 0===c?40:c,l=a.style,u=a.thickness,v=void 0===u?3.6:u,h=a.value,m=void 0===h?0:h,f=a.variant,x=void 0===f?"indeterminate":f,p=(0,I.Z)(a,T),Z=(0,j.Z)({},a,{color:o,disableShrink:s,size:d,thickness:v,value:m,variant:x}),_=function(n){var t=n.classes,a=n.variant,e=n.color,i=n.disableShrink,o={root:["root",a,"color".concat((0,S.Z)(e))],svg:["svg"],circle:["circle","circle".concat((0,S.Z)(a)),i&&"circleDisableShrink"]};return(0,w.Z)(o,D,t)}(Z),b={},C={},k={};if("determinate"===x){var L=2*Math.PI*((V-v)/2);b.strokeDasharray=L.toFixed(3),k["aria-valuenow"]=Math.round(m),b.strokeDashoffset="".concat(((100-m)/100*L).toFixed(3),"px"),C.transform="rotate(-90deg)"}return(0,g.jsx)(Q,(0,j.Z)({className:(0,P.Z)(_.root,e),style:(0,j.Z)({width:d,height:d},C,l),ownerState:Z,ref:t,role:"progressbar"},k,p,{children:(0,g.jsx)(G,{className:_.svg,ownerState:Z,viewBox:"".concat(22," ").concat(22," ").concat(V," ").concat(V),children:(0,g.jsx)(K,{className:_.circle,style:b,ownerState:Z,cx:V,cy:V,r:(V-v)/2,fill:"none",strokeWidth:v})})}))}));function $(n){return(0,M.Z)("MuiLoadingButton",n)}var U=(0,z.Z)("MuiLoadingButton",["root","loading","loadingIndicator","loadingIndicatorCenter","loadingIndicatorStart","loadingIndicatorEnd","endIconLoadingEnd","startIconLoadingStart"]),nn=["children","disabled","id","loading","loadingIndicator","loadingPosition","variant"],tn=(0,k.ZP)(L.Z,{shouldForwardProp:function(n){return function(n){return"ownerState"!==n&&"theme"!==n&&"sx"!==n&&"as"!==n&&"classes"!==n}(n)||"classes"===n},name:"MuiLoadingButton",slot:"Root",overridesResolver:function(n,t){return[t.root,t.startIconLoadingStart&&(0,b.Z)({},"& .".concat(U.startIconLoadingStart),t.startIconLoadingStart),t.endIconLoadingEnd&&(0,b.Z)({},"& .".concat(U.endIconLoadingEnd),t.endIconLoadingEnd)]}})((function(n){var t=n.ownerState,a=n.theme;return(0,j.Z)((0,b.Z)({},"& .".concat(U.startIconLoadingStart,", & .").concat(U.endIconLoadingEnd),{transition:a.transitions.create(["opacity"],{duration:a.transitions.duration.short}),opacity:0}),"center"===t.loadingPosition&&(0,b.Z)({transition:a.transitions.create(["background-color","box-shadow","border-color"],{duration:a.transitions.duration.short})},"&.".concat(U.loading),{color:"transparent"}),"start"===t.loadingPosition&&t.fullWidth&&(0,b.Z)({},"& .".concat(U.startIconLoadingStart,", & .").concat(U.endIconLoadingEnd),{transition:a.transitions.create(["opacity"],{duration:a.transitions.duration.short}),opacity:0,marginRight:-8}),"end"===t.loadingPosition&&t.fullWidth&&(0,b.Z)({},"& .".concat(U.startIconLoadingStart,", & .").concat(U.endIconLoadingEnd),{transition:a.transitions.create(["opacity"],{duration:a.transitions.duration.short}),opacity:0,marginLeft:-8}))})),an=(0,k.ZP)("div",{name:"MuiLoadingButton",slot:"LoadingIndicator",overridesResolver:function(n,t){var a=n.ownerState;return[t.loadingIndicator,t["loadingIndicator".concat((0,S.Z)(a.loadingPosition))]]}})((function(n){var t=n.theme,a=n.ownerState;return(0,j.Z)({position:"absolute",visibility:"visible",display:"flex"},"start"===a.loadingPosition&&("outlined"===a.variant||"contained"===a.variant)&&{left:"small"===a.size?10:14},"start"===a.loadingPosition&&"text"===a.variant&&{left:6},"center"===a.loadingPosition&&{left:"50%",transform:"translate(-50%)",color:t.palette.action.disabled},"end"===a.loadingPosition&&("outlined"===a.variant||"contained"===a.variant)&&{right:"small"===a.size?10:14},"end"===a.loadingPosition&&"text"===a.variant&&{right:6},"start"===a.loadingPosition&&a.fullWidth&&{position:"relative",left:-10},"end"===a.loadingPosition&&a.fullWidth&&{position:"relative",right:-10})})),en=r.forwardRef((function(n,t){var a=(0,y.Z)({props:n,name:"MuiLoadingButton"}),e=a.children,i=a.disabled,o=void 0!==i&&i,s=a.id,c=a.loading,d=void 0!==c&&c,l=a.loadingIndicator,u=a.loadingPosition,v=void 0===u?"center":u,h=a.variant,m=void 0===h?"text":h,f=(0,I.Z)(a,nn),x=(0,C.Z)(s),p=null!=l?l:(0,g.jsx)(X,{"aria-labelledby":x,color:"inherit",size:16}),Z=(0,j.Z)({},a,{disabled:o,loading:d,loadingIndicator:p,loadingPosition:v,variant:m}),_=function(n){var t=n.loading,a=n.loadingPosition,e=n.classes,i={root:["root",t&&"loading"],startIcon:[t&&"startIconLoading".concat((0,S.Z)(a))],endIcon:[t&&"endIconLoading".concat((0,S.Z)(a))],loadingIndicator:["loadingIndicator",t&&"loadingIndicator".concat((0,S.Z)(a))]},o=(0,w.Z)(i,$,e);return(0,j.Z)({},e,o)}(Z);return(0,g.jsx)(tn,(0,j.Z)({disabled:o||d,id:x,ref:t},f,{variant:m,classes:_,ownerState:Z,children:"end"===Z.loadingPosition?(0,g.jsxs)(r.Fragment,{children:[e,d&&(0,g.jsx)(an,{className:_.loadingIndicator,ownerState:Z,children:p})]}):(0,g.jsxs)(r.Fragment,{children:[d&&(0,g.jsx)(an,{className:_.loadingIndicator,ownerState:Z,children:p}),e]})}))})),on=a(1286),rn=a(1038),sn=a(2168),cn="ContactItem_contactItem__3wQ2E",dn="ContactItem_icon__+DcPb",ln="ContactItem_btnDelete__EeFMa",un="ContactItem_btnEdit__kb3ND ContactItem_btnDelete__EeFMa",vn="ContactItem_contactName__n6leJ",hn="ContactItem_contactNumber__l5tds",mn="ContactItem_btnList__Hlld2";function gn(n){var t=n.contactData,a=(0,h.MG)(),e=(0,o.Z)(a,2),i=e[0],r=e[1].isLoading,s=(0,x.I0)();return(0,g.jsxs)("li",{className:cn,children:[(0,g.jsx)(p.Z,{className:dn}),(0,g.jsxs)("p",{className:vn,children:[t.name,":"]}),(0,g.jsx)("p",{className:hn,children:t.number}),(0,g.jsxs)("ul",{className:mn,children:[(0,g.jsx)(Z.Z,{"aria-label":"edit",size:"large",className:un,type:"button",onClick:function(){return n=t,s((0,sn.fS)(n)),void s((0,sn.sz)());var n},children:(0,g.jsx)(on.Z,{})}),r?(0,g.jsx)(en,{loading:!0,variant:"outlined",className:ln,children:"Submit"}):(0,g.jsx)(Z.Z,{"aria-label":"delete",size:"large",className:ln,type:"button",onClick:function(){return n=t.id,i(n),void s((0,rn.a)(""));var n},children:(0,g.jsx)(_.Z,{})})]})]})}var fn=function(n){return n.filter},xn="ContactsList_contactsList__pEnmn";function pn(){var n=(0,h.wY)("",{refetchOnReconnect:!0,refetchOnMountOrArgChange:!0}).data,t=(0,x.I0)(),a=(0,x.v9)(fn),e=function(){var t=null===a||void 0===a?void 0:a.toLowerCase();return a?null===n||void 0===n?void 0:n.filter((function(n){return n.name.toLowerCase().includes(t)})):n}();return(0,r.useEffect)((function(){0===(null===n||void 0===n?void 0:n.length)&&t((0,rn.a)(""))}),[n,t]),(0,g.jsx)("ul",{className:xn,children:null===e||void 0===e?void 0:e.map((function(n){return(0,g.jsx)(gn,{contactData:n},n.id)}))})}var Zn="FilterInput_inputLabel__ibl0k",_n="FilterInput_filterInput__wOtP+",bn="FilterInput_notification__nyvwX";function In(){var n=(0,h.wY)("",{refetchOnFocus:!0,refetchOnReconnect:!0}).data,t=(0,x.v9)(fn),a=(0,x.I0)();return(0,g.jsx)(g.Fragment,{children:null!==n&&void 0!==n&&n.length?(0,g.jsxs)("label",{className:Zn,children:["Find contact by name",(0,g.jsx)("input",{className:_n,type:"text",name:"filter",value:t,autoFocus:!0,onChange:function(n){var t=n.target.value;a((0,rn.a)(t))}})]}):(0,g.jsx)("p",{className:bn,children:"You haven't added any contact yet..."})})}function jn(){var n=(0,h.wY)().isFetching;return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(i.Z,{title:"Add new contact:",isHidden:!1,children:(0,g.jsx)(f,{})}),(0,g.jsxs)(i.Z,{title:"Contacts",isHidden:!1,children:[n?(0,g.jsx)(e.RL,{height:48,width:48,radius:45,color:"#1a75cfb3",wrapperClass:"loader",ariaLabel:"loading-indicator"}):(0,g.jsx)(In,{}),(0,g.jsx)(pn,{})]})]})}},7247:function(n,t,a){var e=a(5318);t.Z=void 0;var i=e(a(5649)),o=a(3329),r=(0,i.default)((0,o.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");t.Z=r},1286:function(n,t,a){var e=a(5318);t.Z=void 0;var i=e(a(5649)),o=a(3329),r=(0,i.default)((0,o.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit");t.Z=r},7750:function(n,t,a){var e=a(5318);t.Z=void 0;var i=e(a(5649)),o=a(3329),r=(0,i.default)((0,o.jsx)("path",{d:"M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-9-2V7H4v3H1v2h3v3h2v-3h3v-2H6zm9 4c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"PersonAdd");t.Z=r},887:function(n,t,a){var e=a(5318);t.Z=void 0;var i=e(a(5649)),o=a(3329),r=(0,i.default)((0,o.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v1c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-1c0-2.66-5.33-4-8-4z"}),"PersonRounded");t.Z=r}}]);
//# sourceMappingURL=contacts.8bbd0e5f.chunk.js.map