(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{14:function(e,t,c){},64:function(e,t,c){"use strict";c.r(t);var a=c(1),s=c.n(a),n=c(29),r=c.n(n),l=(c(14),c(2)),i=c(3),j=c(4),h=c(10),o=c(11),b=c(6),d=c(5),m=c.n(d),u=c(0),O=function(e){var t=e.working,c=Object(a.useState)({firstName:"",lastName:"",availability:Array(7).fill(!0),working:t}),s=Object(l.a)(c,2),n=s[0],r=s[1],i=Object(a.useState)({}),d=Object(l.a)(i,2),O=d[0],x=d[1];Object(a.useEffect)((function(){m.a.get("http://localhost:8000/api/one/worker").then((function(e){var t=Object.keys(e.data.working),c={};t.forEach((function(e){return c[e]=Array(7).fill(0)})),r(Object(b.a)(Object(b.a)({},n),{},{working:Object(b.a)({},c)}))})).catch((function(e){return console.log(e)}))}),[]);var f=function(e){var t=e.target,c=t.name,a=t.value;r(Object(b.a)(Object(b.a)({},n),{},Object(o.a)({},c,a)))},p=function(e){var t=e.target.name,c=parseInt(t),a=Object(h.a)(n.availability);a[c]=!a[c],r(Object(b.a)(Object(b.a)({},n),{},{availability:a}))},g=Object(j.g)();return Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),m.a.post("http://localhost:8000/api/workers/new",n).then((function(e){return g.push("/")})).catch((function(e){for(var t=e.response.data.errors,c={},a=0,s=Object.entries(t);a<s.length;a++){var n=Object(l.a)(s[a],2),r=n[0],i=n[1];c[r]=i.message}x(c)}))},children:[Object(u.jsxs)("div",{className:"form-floating mb-3",children:[Object(u.jsx)("input",{type:"text",className:"form-control",name:"firstName",id:"firstName",placeholder:"first name",value:n.firstName,onChange:f}),Object(u.jsx)("label",{htmlFor:"firstName",children:"First Name:"})]}),O.firstName?Object(u.jsx)("p",{style:{color:"red"},children:O.firstName}):null,Object(u.jsxs)("div",{className:"form-floating mb-3",children:[Object(u.jsx)("input",{type:"text",className:"form-control",name:"lastName",id:"lastName",placeholder:"last name",value:n.lastName,onChange:f}),Object(u.jsx)("label",{htmlFor:"lastName",children:"Last Name:"})]}),O.lastName?Object(u.jsx)("p",{style:{color:"red"},children:O.lastName}):null,Object(u.jsx)("h4",{children:"Availability:"}),Object(u.jsxs)("div",{className:"form-check",children:[Object(u.jsx)("label",{htmlFor:"0",className:"me-2 form-check-label",children:"Monday"}),Object(u.jsx)("input",{type:"checkbox",className:"form-check-input",name:"0",checked:n.availability[0],onChange:p})]}),Object(u.jsxs)("div",{className:"form-check",children:[Object(u.jsx)("label",{htmlFor:"1",className:"me-2 form-check-label",children:"Tuesday"}),Object(u.jsx)("input",{type:"checkbox",className:"form-check-input",name:"1",checked:n.availability[1],onChange:p})]}),Object(u.jsxs)("div",{className:"form-check",children:[Object(u.jsx)("label",{htmlFor:"2",className:"me-2 form-check-label",children:"Wednesday"}),Object(u.jsx)("input",{type:"checkbox",className:"form-check-input",name:"2",checked:n.availability[2],onChange:p})]}),Object(u.jsxs)("div",{className:"form-check",children:[Object(u.jsx)("label",{htmlFor:"3",className:"me-2 form-check-label",children:"Thursday"}),Object(u.jsx)("input",{type:"checkbox",className:"form-check-input",name:"3",checked:n.availability[3],onChange:p})]}),Object(u.jsxs)("div",{className:"form-check",children:[Object(u.jsx)("label",{htmlFor:"4",className:"me-2 form-check-label",children:"Friday"}),Object(u.jsx)("input",{type:"checkbox",className:"form-check-input",name:"4",checked:n.availability[4],onChange:p})]}),Object(u.jsxs)("div",{className:"form-check",children:[Object(u.jsx)("label",{htmlFor:"5",className:"me-2 form-check-label",children:"Saturday"}),Object(u.jsx)("input",{type:"checkbox",className:"form-check-input",name:"5",checked:n.availability[5],onChange:p})]}),Object(u.jsxs)("div",{className:"form-check",children:[Object(u.jsx)("label",{htmlFor:"6",className:"me-2 form-check-label",children:"Sunday"}),Object(u.jsx)("input",{type:"checkbox",className:"form-check-input",name:"6",checked:n.availability[6],onChange:p})]}),Object(u.jsx)("input",{type:"submit",value:"Add Worker",className:"btn btn-primary"})]})},x=function(e){var t=e.workers,c=e.onDelete,s=Object(a.useState)(!1),n=Object(l.a)(s,2),r=n[0],j=n[1],h=Object(a.useState)(),o=Object(l.a)(h,2),b=o[0],d=o[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("table",{className:"table table-dark table-hover table-striped "+(r?"blur":""),children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{children:"Worker Name"}),Object(u.jsx)("th",{children:"Availability"}),Object(u.jsx)("th",{children:"Actions"})]})}),Object(u.jsx)("tbody",{children:t.map((function(e,t){return Object(u.jsxs)("tr",{children:[Object(u.jsxs)("td",{children:[e.firstName," ",e.lastName]}),Object(u.jsx)("td",{children:e.availability.map((function(e,t){switch(t){case 0:return e?"Monday ":null;case 1:return e?"Tuesday ":null;case 2:return e?"Wednesday ":null;case 3:return e?"Thursday ":null;case 4:return e?"Friday ":null;case 5:return e?"Saturday ":null;case 6:return e?"Sunday ":null;default:return null}}))}),Object(u.jsxs)("td",{children:[Object(u.jsx)("button",{onClick:function(){return t=e._id,j(!0),void d(t);var t},className:"btn btn-danger me-2",children:"Delete"}),Object(u.jsx)(i.b,{to:"/workers/edit/".concat(e._id),className:"btn btn-warning me-2",children:"Edit"}),Object(u.jsx)(i.b,{to:"/workers/details/".concat(e._id),className:"btn btn-primary",children:"Details"})]})]},t)}))})]}),r?Object(u.jsxs)("div",{className:"container-sm alert-box",children:[Object(u.jsx)("h3",{children:"Are you sure you want to delete?"}),Object(u.jsx)("button",{className:"btn btn-danger me-2",onClick:function(){j(!1),c(b),d()},children:"Yes"}),Object(u.jsx)("button",{className:"btn btn-warning",onClick:function(){return j(!1)},children:"No"})]}):null]})},f=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),c=t[0],s=t[1];Object(a.useEffect)((function(){m.a.get("http://localhost:8000/api/workers/").then((function(e){return s(e.data)}))}),[]);return Object(u.jsx)("div",{className:"relative",children:Object(u.jsx)(x,{workers:c,onDelete:function(e){m.a.delete("http://localhost:8000/api/workers/delete/".concat(e)),s(c.filter((function(t){return t._id!==e})))}})})},p=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)(i.b,{to:"/schedule/day/1",className:"ms-2 btn btn-link",children:"View Schedule"}),Object(u.jsx)(i.b,{to:"/workers/list",className:"ms-2 btn btn-link",children:"Worker List"}),Object(u.jsx)(i.b,{to:"/adjust_hours",className:"ms-2 btn btn-link",children:"Adjust Hours"}),Object(u.jsx)(i.b,{to:"/workers/add",className:"btn btn-link",children:"Add Worker"})]})},g=function(){var e,t=Object(j.h)().day_id;switch(parseInt(t)){case 1:e="Monday";break;case 2:e="Tuesday";break;case 3:e="Wednesday";break;case 4:e="Thursday";break;case 5:e="Friday";break;case 6:e="Saturday";break;case 7:e="Sunday"}var c=Object(a.useState)(),s=Object(l.a)(c,2),n=s[0],r=s[1],o=Object(a.useState)([]),b=Object(l.a)(o,2),d=b[0],O=b[1],x=Object(a.useState)([]),f=Object(l.a)(x,2),p=f[0],g=f[1],N=Object(a.useState)("24"),y=Object(l.a)(N,2),k=y[0],v=y[1],w=Object(a.useState)(0),S=Object(l.a)(w,2),A=S[0],F=S[1],T=function(e,t){var c=e.lastName.localeCompare(t.lastName);return 0!==c?c:e._id<t._id?-1:1};Object(a.useEffect)((function(){m.a.get("http://localhost:8000/api/workers").then((function(e){var c=e.data;r(c.filter((function(e){return e.availability[t-1]})).sort((function(e,t){return T(e,t)}))),O(c.filter((function(e){return!e.availability[t-1]}))),g(p.length>1?p:Object.keys(e.data[0].working))})).catch((function(e){return console.log(e)}))}),[t,p]);return Object(u.jsx)("div",{children:n&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("h1",{children:[" Worker Status - ",e," "]}),Object(u.jsxs)("select",{name:"time-format",id:"time-format",value:k,onChange:function(e){return function(e){e.preventDefault(),v(e.target.value);var t=Object(h.a)(p);"12"===e.target.value?g(t.map((function(e){return(parseInt(e)+11)%12+1+e.slice(e.indexOf(":"))+(parseInt(e)>=12?" PM":" AM")}))):g(t.map((function(e){var t=e.split(" "),c=Object(l.a)(t,2),a=c[0],s=c[1],n=a.split(":"),r=Object(l.a)(n,2),i=r[0],j=r[1];return"AM"===s&&1===i.length&&(i="0"+i),12===parseInt(i)&&(i="00"),"PM"===s&&(i=parseInt(i)+12),"".concat(i,":").concat(j)})))}(e)},children:[Object(u.jsx)("option",{value:"24",children:"Military"}),Object(u.jsx)("option",{value:"12",children:"12 Hour"})]}),Object(u.jsxs)("div",{className:"d-flex",children:[Object(u.jsx)(i.b,{className:"me-2 ",to:"/schedule/day/1",children:"Mon"}),Object(u.jsx)(i.b,{className:"me-2 ",to:"/schedule/day/2",children:"Tues"}),Object(u.jsx)(i.b,{className:"me-2 ",to:"/schedule/day/3",children:"Wed"}),Object(u.jsx)(i.b,{className:"me-2 ",to:"/schedule/day/4",children:"Thurs"}),Object(u.jsx)(i.b,{className:"me-2 ",to:"/schedule/day/5",children:"Fri"}),Object(u.jsx)(i.b,{className:"me-2 ",to:"/schedule/day/6",children:"Sat"}),Object(u.jsx)(i.b,{className:"me-2",to:"/schedule/day/7",children:"Sun"})]}),Object(u.jsx)("div",{className:"table-responsive",children:Object(u.jsxs)("table",{className:"table table-dark table-hover table-striped",children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{children:"Worker Name"}),p.map((function(e,t){return Object(u.jsx)("th",{className:"vertical-top",children:e},t)}))]})}),Object(u.jsx)("tbody",{children:n&&n.map((function(e,c){return Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:Object(u.jsxs)(i.b,{className:"text-light",to:"/workers/details/".concat(e._id),children:[e.firstName," ",e.lastName]})}),Object.keys(e.working).map((function(c,a){return Object(u.jsx)("td",{children:Object(u.jsx)("button",{onDragEnter:function(a){return function(e,c,a){console.log("TRIGGERED"),console.log(e);var s=n.filter((function(e){return c._id!==e._id}));c.working[a][t-1]=A,m.a.put("http://localhost:8000/api/workers/update/"+c._id,c).then((function(e){var t=[].concat(Object(h.a)(s),[c]);r(t.sort((function(e,t){return T(e,t)})))})).catch((function(e){return console.log(e)}))}(a,e,c)},draggable:"true",onDrag:function(){return F(e.working[c][t-1])},onClick:function(a){!function(e,c,a){var s=n.filter((function(e){return c._id!==e._id}));c.working[a][t-1]<2?c.working[a][t-1]+=parseInt(e.target.value):c.working[a][t-1]=0,m.a.put("http://localhost:8000/api/workers/update/"+c._id,c).then((function(e){var t=[].concat(Object(h.a)(s),[c]);r(t.sort((function(e,t){return T(e,t)})))})).catch((function(e){return console.log(e)}))}(a,e,c)},style:{width:"100%"},className:0===parseInt(e.working[c][t-1])?"btn btn-danger":1===parseInt(e.working[c][t-1])?"btn btn-primary":"btn btn-warning",value:1})},a)}))]},c)}))})]})}),Object(u.jsx)("h1",{children:JSON.stringify(A)}),Object(u.jsxs)("div",{className:"legend d-flex align-items-center justify-content-center",children:[Object(u.jsx)("span",{draggable:"true",onDrag:function(){return F(1)},className:"btn btn-primary me-2",style:{cursor:"auto"}}),Object(u.jsx)("span",{className:"me-2",children:"Working"}),Object(u.jsx)("span",{draggable:"true",onDrag:function(){return F(0)},className:"btn btn-danger me-2",style:{cursor:"auto"}}),Object(u.jsx)("span",{className:"me-2",children:"Not scheduled"}),Object(u.jsx)("span",{draggable:"true",onDrag:function(){return F(3)},className:"btn btn-warning me-2",style:{cursor:"auto"}}),Object(u.jsx)("span",{children:"Lunch"})]}),d.length>=1?Object(u.jsx)("div",{className:"table-responsive",children:Object(u.jsxs)("table",{className:"table table-hover table-striped",children:[Object(u.jsx)("thead",{children:Object(u.jsx)("tr",{children:Object(u.jsx)("th",{children:"Unavailable Workers"})})}),Object(u.jsx)("tbody",{children:d.map((function(e,t){return Object(u.jsx)("tr",{children:Object(u.jsx)("td",{children:Object(u.jsxs)(i.b,{className:"btn-link",to:"/workers/details/".concat(e._id),children:[e.firstName," ",e.lastName]})})},t)}))})]})}):Object(u.jsxs)("h3",{className:"h5 text-success",children:["*All Workers Available for ",e,"*"]})]})})},N=function(e){var t=Object(a.useState)(),c=Object(l.a)(t,2),s=c[0],n=c[1],r=Object(a.useState)({}),i=Object(l.a)(r,2),d=i[0],O=i[1],x=Object(j.h)().id;Object(a.useEffect)((function(){m.a.get("http://localhost:8000/api/workers/"+x).then((function(e){return n(e.data)})).catch((function(e){return console.log(e)}))}),[x]);var f=function(e){var t=e.target,c=t.name,a=t.value;n(Object(b.a)(Object(b.a)({},s),{},Object(o.a)({},c,a)))},p=function(e){var t=e.target.name,c=parseInt(t),a=Object(h.a)(s.availability),r=Object(b.a)({},s.working);for(var l in r)r[l][c]=0;a[c]=!a[c],n(Object(b.a)(Object(b.a)({},s),{},{availability:a,working:r}))},g=Object(j.g)();return Object(u.jsx)(u.Fragment,{children:s?Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),m.a.put("http://localhost:8000/api/workers/update/"+x,s).then((function(e){return g.push("/")})).catch((function(e){for(var t=e.response.data.errors,c={},a=0,s=Object.entries(t);a<s.length;a++){var n=Object(l.a)(s[a],2),r=n[0],i=n[1];c[r]=i.message}O(c)}))},children:[Object(u.jsxs)("div",{className:"form-floating mb-3",children:[Object(u.jsx)("input",{type:"text",className:"form-control",name:"firstName",id:"firstName",placeholder:"first name",value:s.firstName,onChange:f}),Object(u.jsx)("label",{htmlFor:"firstName",children:"First Name:"})]}),d.firstName?Object(u.jsx)("p",{style:{color:"red"},children:d.firstName}):null,Object(u.jsxs)("div",{className:"form-floating mb-3",children:[Object(u.jsx)("input",{type:"text",className:"form-control",name:"lastName",id:"lastName",placeholder:"last name",value:s.lastName,onChange:f}),Object(u.jsx)("label",{htmlFor:"lastName",children:"Last Name:"})]}),d.lastName?Object(u.jsx)("p",{style:{color:"red"},children:d.lastName}):null,Object(u.jsx)("h4",{children:"Availability:"}),Object(u.jsxs)("div",{className:"form-check",children:[Object(u.jsx)("label",{htmlFor:"0",className:"me-2 form-check-label",children:"Monday"}),Object(u.jsx)("input",{type:"checkbox",className:"form-check-input",name:"0",checked:s.availability[0],onChange:p})]}),Object(u.jsxs)("div",{className:"form-check",children:[Object(u.jsx)("label",{htmlFor:"1",className:"me-2 form-check-label",children:"Tuesday"}),Object(u.jsx)("input",{type:"checkbox",className:"form-check-input",name:"1",checked:s.availability[1],onChange:p})]}),Object(u.jsxs)("div",{className:"form-check",children:[Object(u.jsx)("label",{htmlFor:"2",className:"me-2 form-check-label",children:"Wednesday"}),Object(u.jsx)("input",{type:"checkbox",className:"form-check-input",name:"2",checked:s.availability[2],onChange:p})]}),Object(u.jsxs)("div",{className:"form-check",children:[Object(u.jsx)("label",{htmlFor:"3",className:"me-2 form-check-label",children:"Thursday"}),Object(u.jsx)("input",{type:"checkbox",className:"form-check-input",name:"3",checked:s.availability[3],onChange:p})]}),Object(u.jsxs)("div",{className:"form-check",children:[Object(u.jsx)("label",{htmlFor:"4",className:"me-2 form-check-label",children:"Friday"}),Object(u.jsx)("input",{type:"checkbox",className:"form-check-input",name:"4",checked:s.availability[4],onChange:p})]}),Object(u.jsxs)("div",{className:"form-check",children:[Object(u.jsx)("label",{htmlFor:"5",className:"me-2 form-check-label",children:"Saturday"}),Object(u.jsx)("input",{type:"checkbox",className:"form-check-input",name:"5",checked:s.availability[5],onChange:p})]}),Object(u.jsxs)("div",{className:"form-check",children:[Object(u.jsx)("label",{htmlFor:"6",className:"me-2 form-check-label",children:"Sunday"}),Object(u.jsx)("input",{type:"checkbox",className:"form-check-input",name:"6",checked:s.availability[6],onChange:p})]}),Object(u.jsx)("h3",{style:{color:"red"},children:" Submitting after toggling availability will reset schedule for that day "}),Object(u.jsx)("input",{type:"submit",value:"Edit",className:"btn btn-primary"})]}):null})},y=function(e){var t=e.setWorking,c=Object(a.useState)(),s=Object(l.a)(c,2),n=s[0],r=s[1],i=Object(j.g)(),h=function(e){var t=e.target,c=t.name,a=t.value;r(Object(b.a)(Object(b.a)({},n),{},Object(o.a)({},c,a)))};return Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:"Set Hours"}),Object(u.jsx)("h3",{children:"Warning: changing hours of operation will reset the schedule"}),Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault();var c=String(e.target.start.value),a=new Date(1,1,1,e.target.start.value.slice(0,2),e.target.start.value.slice(3),0,0),s=new Date(1,1,1,e.target.end.value.slice(0,2),e.target.end.value.slice(3),0,0);s<a&&s.setDate(2),console.log(a);var n={};for(n[c]=Array(7).fill(0);a<s;)a.setMinutes(a.getMinutes()+30),n[String(a).slice(16,21)]=Array(7).fill(0);t(n),m.a.put("http://localhost:8000/api/workers/update_all",n).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)})),i.push("/")},children:[Object(u.jsx)("label",{htmlFor:"start",className:"me-2",children:"Start Time:"}),Object(u.jsx)("input",{type:"time",name:"start",onChange:h,step:"1800"}),Object(u.jsx)("label",{htmlFor:"end",className:"me-2",children:"End Time:"}),Object(u.jsx)("input",{type:"time",name:"end",onChange:h,step:"1800"}),Object(u.jsx)("button",{className:"btn btn-primary ms-2",children:"Submit"})]})]})},k=(new Date).getDay();0===parseInt(k)?k=6:6===parseInt(k)&&(k=0);var v=function(){var e=Object(a.useState)({}),t=Object(l.a)(e,2),c=t[0],s=t[1],n=Object(j.h)().id,r=Object(a.useState)(Array.from({length:7},(function(){return{}}))),i=Object(l.a)(r,2),o=i[0],b=i[1],d=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];return Object(a.useEffect)((function(){m.a.get("http://localhost:8000/api/workers/"+n).then((function(e){for(var t=Object(h.a)(o),c=function(c){var a=0;t[c].shifts=[];var s=0,n="",r=Object.keys(e.data.working);r.forEach((function(l,i){if(t[c].shifts[s]||1!==e.data.working[l][c])if(1===e.data.working[l][c]&&t[c].shifts[s])t[c].shifts[s].end=l,a+=.5,n="";else if(2===e.data.working[l][c]&&t[c].shifts[s]){for(n=n||l;2===e.data.working[r[i+1]][c];)i++;var j="".concat(n,"-").concat(r[i+1]," ");-1===t[c].shifts[s].lunch.indexOf(j)&&t[c].shifts[s].lunch.push("".concat(n,"-").concat(r[i+1]," "))}else 0===e.data.working[l][c]&&t[c].shifts[s]&&s++;else t[c].shifts[s]={start:l,end:l,lunch:[]},t[c].day=d[c],a+=.5})),t[c].hours=a,t[c].shifts.map((function(e){var t=e.end.split(":"),c=Object(l.a)(t,2),a=c[0],s=c[1];return 30===parseInt(s)?e.end="".concat(parseInt(a)+1,":00"):e.end="".concat(a,":30")})),b(t)},a=0;a<d.length;a++)c(a);s(e.data)})).catch((function(e){return console.log(e)}))}),[n]),c?Object(u.jsxs)("div",{className:"container my-4",children:[Object(u.jsxs)("h1",{className:"text-center mt-2 display-2",children:["Hour Breakdown For ",c.firstName," ",c.lastName]}),Object(u.jsx)("hr",{}),o.filter((function(e,t){return e.hours>0&&k-1===t})).map((function(e,t){return Object(u.jsxs)("div",{className:"row mx-0 justify-content-center bg-dark text-light mb-5",children:[Object(u.jsx)("h3",{className:"display-3 text-center text-info",children:"Today's Schedule"}),e.shifts.length>1&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("small",{className:"text-secondary",children:["(",e.shifts.length," Total)"]}),Object(u.jsx)("br",{})]}),Object(u.jsx)("hr",{}),e.shifts.map((function(t,c){return Object(u.jsxs)("div",{className:"col-sm-auto",children:[Object(u.jsxs)("strong",{className:"text-warning h3",children:[e.shifts.length>1?"Shift #".concat(c+1):"Shift",":"]}),Object(u.jsxs)("p",{className:"h3 mt-2",children:["Start: ",t.start]}),Object(u.jsxs)("p",{className:"h3",children:["End: ",t.end]}),t.lunch.length>=1?t.lunch.map((function(e,t){return Object(u.jsxs)("div",{children:[0===t&&Object(u.jsx)("strong",{className:"h3 text-info",children:"Lunch Breaks:"}),Object(u.jsxs)("p",{className:"h3",children:[Object(u.jsxs)("span",{className:"h3 text-warning",children:["#",t+1,":"]})," ",e]})]},t)})):Object(u.jsx)("strong",{className:" h3 text-danger",children:"No Lunch Taken"})]},c)})),Object(u.jsx)("hr",{}),Object(u.jsxs)("strong",{className:"text-info text-center h3",children:["Total Hours For Today: ",e.hours]})]},t)})),Object(u.jsxs)("div",{className:"row gx-4",children:[Object(u.jsx)("div",{className:"col-lg-6",children:Object(u.jsxs)("div",{className:"bg-dark p-5 text-light",children:[Object(u.jsx)("h3",{className:"h3 text-info",children:"Days Worked This Week"}),Object(u.jsx)("hr",{}),o.filter((function(e,t){return e.hours>0&&k-1>t})).map((function(e,t){return Object(u.jsxs)("div",{children:[Object(u.jsxs)("h3",{className:"h4 text-info",children:[e.day," "]}),e.shifts.length>1&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("small",{className:"text-secondary",children:["(",e.shifts.length," Total)"]}),Object(u.jsx)("br",{})]}),Object(u.jsx)("div",{className:"row",children:e.shifts.map((function(t,c){return e.shifts.length>1?Object(u.jsxs)("div",{className:"col-sm-"+Math.trunc(12/e.shifts.length),children:[Object(u.jsxs)("strong",{className:"text-warning",children:["Shift #",c+1,":"]}),Object(u.jsxs)("p",{className:"mt-2",children:["Start: ",t.start]}),Object(u.jsxs)("p",{className:"",children:["End: ",t.end]}),t.lunch.length>=1?t.lunch.map((function(e,t){return Object(u.jsxs)("div",{children:[0===t&&Object(u.jsx)("strong",{className:"text-info",children:"Lunch Breaks:"}),Object(u.jsxs)("p",{children:[Object(u.jsxs)("span",{className:"text-warning",children:["#",t+1,":"]})," ",e]})]},t)})):Object(u.jsx)("strong",{className:"text-danger",children:"No Lunch Taken"})]},c):Object(u.jsxs)("div",{className:"col-sm-12",children:[Object(u.jsx)("strong",{className:"text-warning",children:"Shift:"}),Object(u.jsxs)("p",{className:" mt-2",children:["Start: ",t.start]}),Object(u.jsxs)("p",{className:"",children:["End: ",t.end]}),t.lunch.length>=1?t.lunch.map((function(e,t){return Object(u.jsxs)("div",{children:[0===t&&Object(u.jsx)("strong",{className:"text-info",children:"Lunch Breaks:"}),Object(u.jsxs)("p",{children:[Object(u.jsxs)("span",{className:"text-warning",children:["#",t+1,":"]})," ",e]})]},t)})):Object(u.jsx)("strong",{className:"text-danger",children:"No Lunch Taken"})]},c)}))}),Object(u.jsxs)("strong",{className:"text-info",children:["Hours Worked: ",e.hours]}),Object(u.jsx)("hr",{})]},t)}))]})}),Object(u.jsx)("div",{className:"col-lg-6",children:Object(u.jsxs)("div",{className:"bg-dark p-5 text-light",children:[Object(u.jsx)("h3",{className:"h3 text-info",children:"Upcoming Shifts This Week"}),Object(u.jsx)("hr",{}),o.filter((function(e,t){return e.hours>0&&k<=t})).map((function(e,t){return Object(u.jsxs)("div",{children:[Object(u.jsxs)("h3",{className:"h4 text-info",children:[e.day," "]}),e.shifts.length>1&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("small",{className:"text-secondary",children:["(",e.shifts.length," Total)"]}),Object(u.jsx)("br",{})]}),Object(u.jsx)("div",{className:"row",children:e.shifts.map((function(t,c){return e.shifts.length>1?Object(u.jsxs)("div",{className:"col-sm-"+Math.trunc(12/e.shifts.length),children:[Object(u.jsxs)("strong",{className:"text-warning",children:["Shift #",c+1,":"]}),Object(u.jsxs)("p",{className:"mt-2",children:["Start: ",t.start]}),Object(u.jsxs)("p",{className:"",children:["End: ",t.end]}),t.lunch.length>=1?t.lunch.map((function(e,t){return Object(u.jsxs)("div",{children:[0===t&&Object(u.jsx)("strong",{className:"text-info",children:"Lunch Breaks:"}),Object(u.jsxs)("p",{children:[Object(u.jsxs)("span",{className:"text-warning",children:["#",t+1,":"]})," ",e]})]},t)})):Object(u.jsx)("strong",{className:"text-danger",children:"No Lunch Taken"})]},c):Object(u.jsxs)("div",{className:"col-sm-12",children:[Object(u.jsx)("strong",{className:"text-warning",children:"Shift:"}),Object(u.jsxs)("p",{className:" mt-2",children:["Start: ",t.start]}),Object(u.jsxs)("p",{className:"",children:["End: ",t.end]}),t.lunch.length>=1?t.lunch.map((function(e,t){return Object(u.jsxs)("div",{children:[0===t&&Object(u.jsx)("strong",{className:"text-info",children:"Lunch Breaks:"}),Object(u.jsxs)("p",{children:[Object(u.jsxs)("span",{className:"text-warning",children:["#",t+1,":"]})," ",e]})]},t)})):Object(u.jsx)("strong",{className:"text-danger",children:"No Lunch Taken"})]},c)}))}),Object(u.jsxs)("strong",{className:"text-info",children:["Hours Scheduled: ",e.hours]}),Object(u.jsx)("hr",{})]},t)}))]})})]})]}):null};var w=function(){var e=Object(a.useState)({"9:00":Array(7).fill(0),"9:30":Array(7).fill(0),"10:00":Array(7).fill(0),"10:30":Array(7).fill(0),"11:00":Array(7).fill(0),"11:30":Array(7).fill(0),"12:00":Array(7).fill(0),"12:30":Array(7).fill(0),"13:00":Array(7).fill(0),"13:30":Array(7).fill(0),"14:00":Array(7).fill(0),"14:30":Array(7).fill(0),"15:00":Array(7).fill(0),"15:30":Array(7).fill(0),"16:00":Array(7).fill(0),"16:30":Array(7).fill(0),"17:00":Array(7).fill(0),"17:30":Array(7).fill(0),"18:00":Array(7).fill(0),"18:30":Array(7).fill(0),"19:00":Array(7).fill(0),"19:30":Array(7).fill(0),"20:00":Array(7).fill(0),"20:30":Array(7).fill(0),"21:00":Array(7).fill(0),"21:30":Array(7).fill(0),"22:00":Array(7).fill(0)}),t=Object(l.a)(e,2),c=t[0],s=t[1];return Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)(i.a,{children:[Object(u.jsx)(p,{}),Object(u.jsxs)(j.d,{children:[Object(u.jsx)(j.b,{exact:!0,path:"/schedule/day/:day_id",children:Object(u.jsx)(g,{})}),Object(u.jsx)(j.b,{exact:!0,path:"/adjust_hours",children:Object(u.jsx)(y,{setWorking:s})}),Object(u.jsx)(j.b,{exact:!0,path:"/workers/add",children:Object(u.jsx)(O,{working:c})}),Object(u.jsx)(j.b,{exact:!0,path:"/workers/list",children:Object(u.jsx)(f,{})}),Object(u.jsx)(j.b,{exact:!0,path:"/workers/edit/:id",children:Object(u.jsx)(N,{})}),Object(u.jsx)(j.b,{exact:!0,path:"/workers/details/:id",children:Object(u.jsx)(v,{})}),Object(u.jsx)(j.b,{exact:!0,path:"/",children:Object(u.jsx)(j.a,{to:"/schedule/day/1"})})]})]})})},S=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,65)).then((function(t){var c=t.getCLS,a=t.getFID,s=t.getFCP,n=t.getLCP,r=t.getTTFB;c(e),a(e),s(e),n(e),r(e)}))};r.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(w,{})}),document.getElementById("root")),S()}},[[64,1,2]]]);
//# sourceMappingURL=main.b3cf1780.chunk.js.map