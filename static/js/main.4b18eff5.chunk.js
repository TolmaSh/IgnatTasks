(this["webpackJsonp01-lesson"]=this["webpackJsonp01-lesson"]||[]).push([[0],[,,,,function(e,t,n){e.exports={header:"Header_header__1amup",hidden_menu:"Header_hidden_menu__2mVQk",hidden_menu_ticker:"Header_hidden_menu_ticker__C8EdJ",link:"Header_link__1oUIl",link_active:"Header_link_active__3KP3P",btn_menu:"Header_btn_menu__2mxrU",first:"Header_first__1UOPv",second:"Header_second__H09YX",third:"Header_third__LTelb"}},,,,function(e,t,n){e.exports={affairs_wrapper:"Affairs_affairs_wrapper__3cTgG",taskName:"Affairs_taskName__Rf7ig",low:"Affairs_low__1RrbR",middle:"Affairs_middle__1oKMT",high:"Affairs_high__3bfAG",btnWrapper:"Affairs_btnWrapper__3qpCo",highBtn:"Affairs_highBtn__2V-bF",middleBtn:"Affairs_middleBtn__3LYQL",lowBtn:"Affairs_lowBtn__2Y2Dh"}},function(e,t,n){e.exports={column:"HW4_column__2ZS4I",superGroup:"HW4_superGroup__3y8jt",styledInput:"HW4_styledInput__2Uax1",styledCheckbox:"HW4_styledCheckbox__2slB0"}},function(e,t,n){e.exports={message:"Message_message__8WR15",content:"Message_content__Ltxgc",avatar:"Message_avatar__3FT3j",name:"Message_name__Tzmp0",messageItem:"Message_messageItem__27M5e",time:"Message_time__HOFTG"}},function(e,t,n){e.exports={input_wrapper:"SuperInputText_input_wrapper__3vDEl",input_underlined:"SuperInputText_input_underlined__39T5l",input_label:"SuperInputText_input_label__3slHN",input_helper:"SuperInputText_input_helper__t_rFL",input_error:"SuperInputText_input_error__1xOh8"}},,,,function(e,t,n){e.exports={header:"HW5_header__fgR5q",hwWrapper:"HW5_hwWrapper__17l60"}},function(e,t,n){e.exports={styledSpan:"SuperEditableSpan_styledSpan__UYBsG",styledSpanInput:"SuperEditableSpan_styledSpanInput__12e-z",edit_btn:"SuperEditableSpan_edit_btn__1z4A5"}},function(e,t,n){e.exports={buttons_wrapper:"HW6_buttons_wrapper__1DnPg"}},,function(e,t,n){e.exports={App:"App_App__1Sc4o",header:"App_header__3x5Hh"}},function(e,t,n){e.exports={default:"SuperButton_default__-BXUG",remove:"SuperButton_remove__1_XYX"}},function(e,t,n){e.exports={checkbox:"SuperCheckbox_checkbox__Imn1x",spanClassName:"SuperCheckbox_spanClassName__1K9ch",custom_checkbox:"SuperCheckbox_custom_checkbox__1zsz_"}},function(e,t,n){e.exports={form_radio_btn:"SuperRadio_form_radio_btn__15YkU",active_label:"SuperRadio_active_label__1m1Yd"}},,function(e,t,n){e.exports={userInput:"Greeting_userInput__oujK0",input_wrapper:"Greeting_input_wrapper__1ao85",input_underlined:"Greeting_input_underlined__3qbzm",input_label:"Greeting_input_label__1Ikwn",input_helper:"Greeting_input_helper__2PpkR",input_error:"Greeting_input_error__37nm9"}},function(e,t,n){e.exports={box:"SuperSelect_box__2Y2kN"}},,,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(23),s=n.n(r),i=(n(31),n(19)),l=n.n(i),o=n(4),j=n.n(o),d=n(13),u=n(2),b=n(10),h=n.n(b),p=n(0);var _=function(e){return Object(p.jsxs)("div",{className:h.a.message,children:[Object(p.jsx)("img",{className:h.a.avatar,src:e.avatar,alt:""}),Object(p.jsxs)("div",{className:h.a.content,children:[Object(p.jsx)("h2",{className:h.a.name,children:e.name}),Object(p.jsx)("span",{className:h.a.messageItem,children:e.message}),Object(p.jsx)("time",{className:h.a.time,children:e.time})]})]})},x="https://image.freepik.com/free-photo/waist-up-portrait-of-handsome-serious-unshaven-male-keeps-hands-together-dressed-in-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg",m="Some Name",O="some text",f="22:00";var v=function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)("h3",{children:"Homeworks 1"}),Object(p.jsx)(_,{avatar:x,name:m,message:O,time:f})]})},g=n(3),k=n(8),N=n.n(k),C=n(7),w=n(6),y=n(20),S=n.n(y),H=function(e){var t=e.remove,n=e.className,a=Object(w.a)(e,["remove","className"]),c="".concat(t?S.a.remove:S.a.default," ").concat(n||"");return Object(p.jsx)("button",Object(C.a)({className:c},a))};var B=function(e){var t="low"===e.affair.priority?"".concat(N.a.low):"middle"===e.affair.priority?"".concat(N.a.middle):"".concat(N.a.high);return Object(p.jsx)("div",{children:Object(p.jsxs)("ul",{children:[Object(p.jsx)("li",{className:N.a.taskName,children:e.affair.name}),Object(p.jsxs)("li",{className:t,children:["[",e.affair.priority,"]"]}),Object(p.jsx)("li",{children:Object(p.jsx)(H,{remove:!0,onClick:function(){e.deleteAffairCallback(e.affair._id)}})})]})})};var I=function(e){var t=e.data.map((function(t){return Object(p.jsx)(B,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)}));return Object(p.jsxs)("div",{className:N.a.affairs_wrapper,children:[t,Object(p.jsxs)("div",{className:N.a.btnWrapper,children:[Object(p.jsx)(H,{onClick:function(){e.setFilter("all")},className:N.a.allBtn,children:"All"}),Object(p.jsx)(H,{onClick:function(){e.setFilter("high")},className:N.a.highBtn,children:"High"}),Object(p.jsx)(H,{onClick:function(){e.setFilter("middle")},className:N.a.middleBtn,children:"Middle"}),Object(p.jsx)(H,{onClick:function(){e.setFilter("low")},className:N.a.lowBtn,children:"Low"})]})]})},T=[{_id:1,name:"React",priority:"high"},{_id:2,name:"Anime",priority:"low"},{_id:3,name:"Games",priority:"low"},{_id:4,name:"Work",priority:"high"},{_id:5,name:"Html & Css",priority:"middle"}];var A=function(){var e=Object(a.useState)(T),t=Object(g.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)("all"),s=Object(g.a)(r,2),i=s[0],l=s[1],o=function(e,t){return"high"===t?e.filter((function(e){return"high"===e.priority})):"low"===t?e.filter((function(e){return"low"===e.priority})):"middle"===t?e.filter((function(e){return"middle"===e.priority})):e}(n,i);return Object(p.jsxs)("div",{children:[Object(p.jsx)("h3",{children:"Homeworks 2"}),Object(p.jsx)(I,{data:o,setFilter:l,deleteAffairCallback:function(e){return c(function(e,t){return e.filter((function(e){return e._id!==t}))}(n,e))}})]})},M=n(26),G=n(24),W=n.n(G),E=n(11),F=n.n(E),P=function(e){var t=e.onClickAdd;return Object(p.jsx)("button",{onClick:t,children:Object(p.jsx)("svg",{width:"24",height:"24",xmlns:"http://www.w3.org/2000/svg",fillRule:"evenodd",clipRule:"evenodd",children:Object(p.jsx)("path",{d:"M11.5 0c6.347 0 11.5 5.153 11.5 11.5s-5.153 11.5-11.5 11.5-11.5-5.153-11.5-11.5 5.153-11.5 11.5-11.5zm0 1c5.795 0 10.5 4.705 10.5 10.5s-4.705 10.5-10.5 10.5-10.5-4.705-10.5-10.5 4.705-10.5 10.5-10.5zm.5 10h6v1h-6v6h-1v-6h-6v-1h6v-6h1v6z"})})})},D=function(e){e.type;var t=e.onChange,n=e.onChangeText,a=e.onKeyPress,c=e.onEnter,r=(e.onClick,e.onClickButton),s=e.error,i=e.className,l=e.spanClassName,o=e.addBtn,j=e.myHelpText,d=Object(w.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","onClick","onClickButton","error","className","spanClassName","addBtn","myHelpText"]),u="".concat(F.a.input_helper," ").concat(l||""),b="".concat(s?"".concat(F.a.input_error," ").concat(F.a.input_underlined):"".concat(F.a.input_underlined)," ").concat(i),h="".concat(d.title||""),_="".concat(s||(j||""));return Object(p.jsx)("div",{className:F.a.input_wrapper,children:Object(p.jsxs)("label",{className:b,children:[Object(p.jsx)("input",Object(C.a)({type:"text",onChange:function(e){t&&t(e),n&&n(e.currentTarget.value),s=e.currentTarget.value},onKeyPress:function(e){a&&a(e),c&&"Enter"===e.key&&c()},className:b},d)),Object(p.jsx)("span",{className:F.a.input_label,children:h}),Object(p.jsx)("span",{className:u,children:_}),o&&Object(p.jsx)(P,{onClickAdd:function(){r&&r()}})]})})},z=function(e){var t=e.name,n=e.setNameCallback,a=e.keyPressHandler,c=e.addUser,r=e.error,s=e.totalUsers,i=e.users;return Object(p.jsx)("div",{children:Object(p.jsxs)("div",{className:W.a.input_wrapper,children:[Object(p.jsx)(D,{title:"Name",value:t,error:r,required:!0,addBtn:!0,onClickButton:c,onChangeText:n,onEnter:a,myHelpText:"".concat(s," users")}),Object(p.jsx)("ul",{children:i.map((function(e){return Object(p.jsx)("li",{children:e.name})}))})]})})},L=function(e){var t=e.users,n=e.addUserCallback,c=Object(a.useState)(""),r=Object(g.a)(c,2),s=r[0],i=r[1],l=Object(a.useState)(""),o=Object(g.a)(l,2),j=o[0],d=o[1],u=function(){""===s?d("Write correct name"):(d(""),n(s),alert("Hello  ".concat(s,"!")),i(""))},b=t.length;return Object(p.jsx)(z,{name:s,users:t,setNameCallback:function(e){i(e)},keyPressHandler:function(){u()},addUser:u,error:j,totalUsers:b})},U=n(36);var R=function(){var e=Object(a.useState)([]),t=Object(g.a)(e,2),n=t[0],c=t[1];return Object(p.jsxs)("div",{children:[Object(p.jsx)("h3",{children:"Homeworks 3"}),Object(p.jsx)(L,{users:n,addUserCallback:function(e){var t={_id:Object(U.a)(),name:e};c([].concat(Object(M.a)(n),[t]))}})]})},X=n(9),J=n.n(X),Y=n(21),q=n.n(Y),K=function(e){e.type,e.onChange;var t=e.onChangeChecked,n=e.className,a=(e.spanClassName,e.children),c=Object(w.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),r="".concat(q.a.custom_checkbox," ").concat(n||"");return Object(p.jsxs)("label",{className:r,children:[Object(p.jsx)("input",Object(C.a)({type:"checkbox",onChange:function(e){t&&t(e.currentTarget.checked)}},c)),a?Object(p.jsx)("span",{className:q.a.spanClassName,children:a}):Object(p.jsx)("span",{})]})};var Q=function(){var e=Object(a.useState)(""),t=Object(g.a)(e,2),n=t[0],c=t[1],r=n?"":"Error",s=function(){r?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(n)},i=Object(a.useState)(!1),l=Object(g.a)(i,2),o=l[0],j=l[1];return Object(p.jsxs)("div",{children:[Object(p.jsx)("h3",{children:"Homeworks 4"}),Object(p.jsxs)("div",{className:J.a.column,children:[Object(p.jsxs)("div",{className:J.a.superGroup,children:[Object(p.jsx)("h2",{children:"SuperInput"}),Object(p.jsx)(D,{value:n,onChangeText:c,onEnter:s,error:r,title:"Example Input",addBtn:!0,onClickButton:function(){alert("I work My Boss")},required:!0}),Object(p.jsx)(D,{className:J.a.styledInput,title:"Hello",myHelpText:"Example Help Text"})]}),Object(p.jsxs)("div",{className:J.a.superGroup,children:[Object(p.jsx)("h2",{children:"SuperButtons"}),Object(p.jsx)(H,{children:"default"}),Object(p.jsx)(H,{remove:!0,onClick:s,className:J.a.deleteBtn}),Object(p.jsx)(H,{disabled:!0,children:"disabled"})]}),Object(p.jsxs)("div",{className:J.a.superGroup,children:[Object(p.jsx)("h2",{children:"Super Checkbox"}),Object(p.jsx)(K,{checked:o,onChangeChecked:j,children:"some text "}),Object(p.jsx)(K,{checked:o,onChange:function(e){return j(e.currentTarget.checked)},className:J.a.styledCheckbox})]})]})]})},V=n(15),Z=n.n(V),$=n(16),ee=n.n($),te=n.p+"static/media/edit.5de789ef.png",ne=function(e){e.autoFocus;var t=e.onBlur,n=e.onEnter,c=e.spanProps,r=Object(w.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),s=Object(a.useState)(!1),i=Object(g.a)(s,2),l=i[0],o=i[1],j=Object(a.useState)(r.value),d=Object(g.a)(j,2),u=d[0],b=d[1],h=c||{},_=h.children,x=h.onDoubleClick,m=h.className,O=Object(w.a)(h,["children","onDoubleClick","className"]),f="".concat(ee.a.styledSpan," ").concat(m);return Object(p.jsx)(p.Fragment,{children:l?Object(p.jsx)(D,Object(C.a)({autoFocus:!0,onBlur:function(e){o(!1),b(u),t&&t(e)},onEnter:function(){o(!1),b(u),n&&n()},onChangeText:b,className:ee.a.styledSpanInput,value:u},r)):Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("button",{className:ee.a.edit_btn,onClick:function(e){o(!0)},children:Object(p.jsx)("img",{src:te,alt:"edit"})}),Object(p.jsx)("span",Object(C.a)(Object(C.a)({onDoubleClick:function(e){o(!0),x&&x(e)},className:f},O),{},{children:_||r.value}))]})})};function ae(e,t){var n=JSON.stringify(t);localStorage.setItem(e,n)}function ce(e,t){var n=t,a=localStorage.getItem(e);return null!==a&&(n=JSON.parse(a)),n}ae("test",{x:"A",y:1});ce("test",{x:"",y:0});var re=n(17),se=n.n(re);var ie=function(){var e=Object(a.useState)(""),t=Object(g.a)(e,2),n=t[0],c=t[1];return Object(p.jsxs)("div",{className:se.a.wrapper,children:[Object(p.jsx)("h3",{children:"homeworks 6"}),Object(p.jsx)("div",{className:se.a.span_wrapper,children:Object(p.jsx)(ne,{value:n,onChangeText:c,spanProps:{children:n?void 0:"enter text..."}})}),Object(p.jsxs)("div",{className:se.a.buttons_wrapper,children:[Object(p.jsx)(H,{onClick:function(){ae("editable-span-value",n)},children:"save"}),Object(p.jsx)(H,{onClick:function(){var e=ce("editable-span-value","");c(e)},children:"restore"})]})]})};var le=function(){return Object(p.jsxs)("div",{className:Z.a.hwWrapper,children:[Object(p.jsx)(v,{}),Object(p.jsx)("hr",{}),Object(p.jsx)(A,{}),Object(p.jsx)("hr",{}),Object(p.jsx)(R,{}),Object(p.jsx)("hr",{}),Object(p.jsx)(Q,{}),Object(p.jsx)("hr",{}),Object(p.jsx)(ie,{}),Object(p.jsx)("hr",{})]})};n(33);var oe=function(){return Object(p.jsxs)("div",{className:"error_page",children:[Object(p.jsx)("hr",{}),Object(p.jsxs)("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 200 82.7",children:[Object(p.jsxs)("g",{id:"Calque_1",children:[Object(p.jsx)("text",{id:"XMLID_3_",transform:"matrix(1.2187 0 0 1 13 75.6393)",className:"st0 st1",children:"4"}),Object(p.jsx)("text",{id:"XMLID_4_",transform:"matrix(1.2187 0 0 1 133.0003 73.6393)",className:"st0 st1",children:"4"})]}),Object(p.jsxs)("g",{id:"Calque_2",children:[Object(p.jsxs)("g",{children:[Object(p.jsx)("path",{id:"XMLID_11_",d:"M81.8,29.2c4.1-5.7,10.7-9.4,18.3-9.4c6.3,0,12.1,2.7,16.1,6.9c0.6-0.4,1.1-0.7,1.7-1.1 c-4.4-4.8-10.8-7.9-17.8-7.9c-8.3,0-15.6,4.2-20,10.6C80.7,28.5,81.3,28.8,81.8,29.2z"}),Object(p.jsx)("path",{id:"XMLID_2_",d:"M118.1,53.7c-4,5.7-10.7,9.5-18.2,9.5c-6.3,0-12.1-2.6-16.2-6.8c-0.6,0.4-1.1,0.7-1.7,1.1 c4.4,4.8,10.8,7.8,17.9,7.8c8.3,0,15.6-4.3,19.9-10.7C119.2,54.5,118.6,54.1,118.1,53.7z"}),Object(p.jsx)("animateTransform",{attributeName:"transform",type:"rotate",from:"360 100 41.3",to:"0 100 41.3",dur:"10s",repeatCount:"indefinite"})]}),Object(p.jsx)("g",{id:"XMLID_6_",children:Object(p.jsx)("g",{id:"XMLID_18_",children:Object(p.jsx)("circle",{className:"circle",cx:"100",cy:"41",r:"1"})})}),Object(p.jsx)("defs",{children:Object(p.jsx)("filter",{id:"blurFilter4",x:"-20",y:"-20",width:"200",height:"200",children:Object(p.jsx)("feGaussianBlur",{in:"SourceGraphic",stdDeviation:"2"})})}),Object(p.jsx)("path",{id:"XMLID_5_",className:"st2",d:"M103.8,16.7c0.1,0.3,0.1,0.6,0.1,0.9c11.6,1.9,20.4,11.9,20.4,24.1c0,13.5-10.9,24.4-24.4,24.4 S75.6,55.1,75.6,41.7c0-3.2,0.6-6.3,1.7-9.1c-0.3-0.2-0.5-0.3-0.7-0.5c-1.2,3-1.9,6.2-1.9,9.6c0,14,11.3,25.3,25.3,25.3 s25.3-11.3,25.3-25.3C125.3,29,115.9,18.5,103.8,16.7z"})]})]}),Object(p.jsx)("div",{className:"message",children:"Page not found"}),Object(p.jsx)("hr",{})]})},je=n(25),de=n.n(je),ue=function(e){var t=e.options,n=(e.onChange,e.onChangeOption),a=Object(w.a)(e,["options","onChange","onChangeOption"]),c=t?null===t||void 0===t?void 0:t.map((function(e,t){return Object(p.jsx)("option",{value:e,children:e},t)})):[];return Object(p.jsx)("div",{className:de.a.box,children:Object(p.jsx)("select",Object(C.a)(Object(C.a)({onChange:function(e){n&&n(e.currentTarget.value)}},a),{},{children:c}))})},be=n(22),he=n.n(be),pe=function(e){e.type;var t=e.name,n=e.options,a=e.value,c=(e.onChange,e.onChangeOption),r=(Object(w.a)(e,["type","name","options","value","onChange","onChangeOption"]),function(e){c&&c(e.currentTarget.value),console.log(e)}),s=n?n.map((function(e,n){return Object(p.jsxs)("label",{className:a===e?"".concat(he.a.active_label):"",children:[Object(p.jsx)("input",{type:"radio",name:t,value:e,checked:a===e,onChange:r}),e]},t+"-"+n)})):[];return Object(p.jsx)("div",{className:he.a.form_radio_btn,children:s})},_e=["x","y","z"];var xe=function(){var e=Object(a.useState)(_e[1]),t=Object(g.a)(e,2),n=t[0],c=t[1];return Object(p.jsxs)("div",{children:[Object(p.jsx)("h3",{children:" Homeworks 7"}),Object(p.jsx)("div",{children:Object(p.jsx)(ue,{options:_e,value:n,onChangeOption:c})}),Object(p.jsx)("div",{children:Object(p.jsx)(pe,{name:"radio",options:_e,value:n,onChangeOption:c})})]})},me=function(){return Object(p.jsxs)("div",{className:Z.a.hwWrapper,children:[Object(p.jsx)(xe,{}),Object(p.jsx)("hr",{})]})},Oe="/pre-junior",fe="/junior",ve="/strong-junior";var ge=function(){return Object(p.jsx)("div",{children:Object(p.jsxs)(u.c,{children:[Object(p.jsx)(u.a,{path:"/*",element:Object(p.jsx)(oe,{})}),Object(p.jsx)(u.a,{path:"/",element:Object(p.jsx)(le,{})}),Object(p.jsx)(u.a,{path:Oe,element:Object(p.jsx)(le,{})}),Object(p.jsx)(u.a,{path:fe,element:Object(p.jsx)(me,{})})]})})};var ke=function(){return Object(p.jsxs)("div",{className:j.a.header,children:[Object(p.jsx)("input",{type:"checkbox",id:"hmt",className:j.a.hidden_menu_ticker}),Object(p.jsxs)("label",{className:j.a.btn_menu,htmlFor:"hmt",children:[Object(p.jsx)("span",{className:j.a.first}),Object(p.jsx)("span",{className:j.a.second}),Object(p.jsx)("span",{className:j.a.third})]}),Object(p.jsxs)("ul",{className:j.a.hidden_menu,children:[Object(p.jsx)("li",{children:Object(p.jsx)(d.b,{to:Oe,className:function(e){return e.isActive?"".concat(j.a.link," ").concat(j.a.link_active):"".concat(j.a.link)},children:"Pre Junior"})}),Object(p.jsx)("li",{children:Object(p.jsx)(d.b,{to:fe,className:function(e){return e.isActive?"".concat(j.a.link," ").concat(j.a.link_active):"".concat(j.a.link)},children:"Junior"})}),Object(p.jsx)("li",{children:Object(p.jsx)(d.b,{to:ve,className:function(e){return e.isActive?"".concat(j.a.link," ").concat(j.a.link_active):"".concat(j.a.link)},children:"Junior+"})})]})]})};var Ne=function(){return Object(p.jsx)("div",{children:Object(p.jsxs)(d.a,{children:[Object(p.jsx)(ke,{}),Object(p.jsx)(ge,{})]})})};var Ce=function(){return Object(p.jsxs)("div",{className:l.a.App,children:[Object(p.jsx)("div",{className:l.a.header,children:Object(p.jsx)("h1",{children:"React Homeworks:"})}),Object(p.jsx)(Ne,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(Ce,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[34,1,2]]]);
//# sourceMappingURL=main.4b18eff5.chunk.js.map