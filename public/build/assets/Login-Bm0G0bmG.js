<<<<<<<< HEAD:public/build/assets/Login-Bm0G0bmG.js
import{w as x,v as y,o as r,c as l,a as s,t as b,u as C,r as k,b as a,d as t,e as p,F as u,H as V,n as f,f as _,g as S}from"./app-Df3u5qSZ.js";import{A as B,_ as z}from"./PrimaryButton-DfcTWcXR.js";import{_ as h,a as v}from"./TextInput-Cs9a3fv2.js";import{_ as A}from"./Mensaje-B5eqQsdO.js";/* empty css                                                */const $={class:"text-sm text-red-600"},g={__name:"InputError",props:{message:String},setup(n){return(e,d)=>x((r(),l("div",null,[s("p",$,b(n.message),1)],512)),[[y,n.message]])}},I=s("h2",{class:"text-black text-2xl text-center font-semibold p-2"},"Iniciar Sesión",-1),P=s("div",{class:"flex justify-center"},[s("img",{src:"https://i.postimg.cc/Pqxt4sy5/busAzul.gif",alt:"Bus Amarillo",class:"w-32 h-32"})],-1),q=s("div",{class:"p-4 mb-0 text-sm text-justify rounded-lg"},[s("span",{class:""},"Bienvenido al sistema de control y gestión de la empresa Sociedad Cooperativa de Choferes del Sur S.C.L. Para acceder a la información es necesario que inicie sesión.")],-1),F={class:"mb-4"},j={class:"flex items-center"},M=s("i",{class:"fa fa-user mr-2","aria-hidden":"true"},null,-1),N={class:"mb-4"},U={class:"flex items-center"},D=s("i",{class:"fa fa-unlock-alt mr-2","aria-hidden":"true"},null,-1),E={class:"relative"},H={class:"flex items-center justify-end mt-4"},L=s("svg",{class:"animate-spin h-5 w-5 mr-3 text-white",viewBox:"0 0 24 24"},[s("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4",fill:"none"}),s("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A8.005 8.005 0 0112 4.245v3.8C9.29 8.674 7.326 10.404 6 12.291zM16 8.674v3.8c1.326 1.887 3.29 3.617 6 4.246zm-3.764 7.764A8.005 8.005 0 0112 19.755v-3.8c2.71-1.628 4.674-3.358 6-5.245z"})],-1),R=s("i",{class:"fa fa-sign-in","aria-hidden":"true",style:{"margin-left":"0.5rem"}},null,-1),Q={__name:"Login",props:{canResetPassword:Boolean,status:String},setup(n){const e=C({usuario:"",password:"",remember:!0}),d=()=>{e.transform(m=>({...m,remember:!!e.remember})).post(route("inicioSesion"),{onFinish:()=>e.reset("password")})},o=k(!1),w=()=>{o.value=!o.value};return(m,i)=>(r(),l(u,null,[a(t(V),{title:"Iniciar sesión"}),a(B,null,{default:p(()=>[s("div",null,[I,P,a(A),q]),s("form",{onSubmit:S(d,["prevent"])},[s("div",F,[s("div",j,[M,s("div",null,[a(h,{for:"usuario",value:"Usuario"})])]),a(v,{id:"usuario",modelValue:t(e).usuario,"onUpdate:modelValue":i[0]||(i[0]=c=>t(e).usuario=c),type:"text",class:"mt-1 block w-full",required:"",autofocus:"",autocomplete:"usuario"},null,8,["modelValue"]),a(g,{class:"mt-2",message:t(e).errors.email},null,8,["message"])]),s("div",N,[s("div",U,[D,s("div",null,[a(h,{for:"password",value:"Contraseña"})])]),s("div",E,[a(v,{id:"password",modelValue:t(e).password,"onUpdate:modelValue":i[1]||(i[1]=c=>t(e).password=c),type:o.value?"text":"password",class:"mt-1 block w-full pr-10",required:"",autocomplete:"current-password"},null,8,["modelValue","type"]),s("button",{type:"button",class:"absolute inset-y-0 right-0 pr-3 flex items-center focus:outline-none",onClick:w},[s("i",{class:f(["fa",o.value?"fa-eye-slash":"fa-eye"])},null,2)])]),a(g,{class:"mt-2",message:t(e).errors.password},null,8,["message"])]),s("div",H,[a(z,{class:f({"opacity-85":t(e).processing,"opacity-100":!t(e).processing}),disabled:t(e).processing},{default:p(()=>[t(e).processing?(r(),l(u,{key:0},[L,_(" Iniciando... ")],64)):(r(),l(u,{key:1},[_(" Iniciar sesión "),R],64))]),_:1},8,["class","disabled"])])],32)]),_:1})],64))}};export{Q as default};
========
import{w as x,v as y,o as r,c as l,a as s,t as b,u as C,r as k,b as a,d as t,e as p,F as u,H as V,n as f,f as _,g as S}from"./app-BdCJ-L48.js";import{A as B,_ as z}from"./PrimaryButton-CSTgR7ho.js";import{_ as h,a as v}from"./TextInput-C0Q37MpH.js";import{_ as A}from"./Mensaje-CiEQGEOP.js";/* empty css                                                */const $={class:"text-sm text-red-600"},g={__name:"InputError",props:{message:String},setup(n){return(e,d)=>x((r(),l("div",null,[s("p",$,b(n.message),1)],512)),[[y,n.message]])}},I=s("h2",{class:"text-black text-2xl text-center font-semibold p-2"},"Iniciar Sesión",-1),P=s("div",{class:"flex justify-center"},[s("img",{src:"https://i.postimg.cc/Pqxt4sy5/busAzul.gif",alt:"Bus Amarillo",class:"w-32 h-32"})],-1),q=s("div",{class:"p-4 mb-0 text-sm text-justify rounded-lg"},[s("span",{class:""},"Bienvenido al sistema de control y gestión de la empresa Sociedad Cooperativa de Choferes del Sur S.C.L. Para acceder a la información es necesario que inicie sesión.")],-1),F={class:"mb-4"},j={class:"flex items-center"},M=s("i",{class:"fa fa-user mr-2","aria-hidden":"true"},null,-1),N={class:"mb-4"},U={class:"flex items-center"},D=s("i",{class:"fa fa-unlock-alt mr-2","aria-hidden":"true"},null,-1),E={class:"relative"},H={class:"flex items-center justify-end mt-4"},L=s("svg",{class:"animate-spin h-5 w-5 mr-3 text-white",viewBox:"0 0 24 24"},[s("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4",fill:"none"}),s("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A8.005 8.005 0 0112 4.245v3.8C9.29 8.674 7.326 10.404 6 12.291zM16 8.674v3.8c1.326 1.887 3.29 3.617 6 4.246zm-3.764 7.764A8.005 8.005 0 0112 19.755v-3.8c2.71-1.628 4.674-3.358 6-5.245z"})],-1),R=s("i",{class:"fa fa-sign-in","aria-hidden":"true",style:{"margin-left":"0.5rem"}},null,-1),Q={__name:"Login",props:{canResetPassword:Boolean,status:String},setup(n){const e=C({usuario:"",password:"",remember:!0}),d=()=>{e.transform(m=>({...m,remember:!!e.remember})).post(route("inicioSesion"),{onFinish:()=>e.reset("password")})},o=k(!1),w=()=>{o.value=!o.value};return(m,i)=>(r(),l(u,null,[a(t(V),{title:"Iniciar sesión"}),a(B,null,{default:p(()=>[s("div",null,[I,P,a(A),q]),s("form",{onSubmit:S(d,["prevent"])},[s("div",F,[s("div",j,[M,s("div",null,[a(h,{for:"usuario",value:"Usuario"})])]),a(v,{id:"usuario",modelValue:t(e).usuario,"onUpdate:modelValue":i[0]||(i[0]=c=>t(e).usuario=c),type:"text",class:"mt-1 block w-full",required:"",autofocus:"",autocomplete:"usuario"},null,8,["modelValue"]),a(g,{class:"mt-2",message:t(e).errors.email},null,8,["message"])]),s("div",N,[s("div",U,[D,s("div",null,[a(h,{for:"password",value:"Contraseña"})])]),s("div",E,[a(v,{id:"password",modelValue:t(e).password,"onUpdate:modelValue":i[1]||(i[1]=c=>t(e).password=c),type:o.value?"text":"password",class:"mt-1 block w-full pr-10",required:"",autocomplete:"current-password"},null,8,["modelValue","type"]),s("button",{type:"button",class:"absolute inset-y-0 right-0 pr-3 flex items-center focus:outline-none",onClick:w},[s("i",{class:f(["fa",o.value?"fa-eye-slash":"fa-eye"])},null,2)])]),a(g,{class:"mt-2",message:t(e).errors.password},null,8,["message"])]),s("div",H,[a(z,{class:f({"opacity-85":t(e).processing,"opacity-100":!t(e).processing}),disabled:t(e).processing},{default:p(()=>[t(e).processing?(r(),l(u,{key:0},[L,_(" Iniciando... ")],64)):(r(),l(u,{key:1},[_(" Iniciar sesión "),R],64))]),_:1},8,["class","disabled"])])],32)]),_:1})],64))}};export{Q as default};
>>>>>>>> 6d2ce0835e3f635d8c6507c5186391e1ceebe3aa:public/build/assets/Login-BzjI8WYT.js
