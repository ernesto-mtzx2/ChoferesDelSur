import{h as u,o as p,c,b as l,d as s,e as n,F as f,a as o,n as _,f as b,g as x}from"./app-BsoV4m-i.js";import{A as V,_ as v}from"./PrimaryButton-B5f04_j7.js";import{_ as r,a as d}from"./TextInput-5OnRYq0U.js";const w=o("div",{class:"flex flex-col items-center"},[o("i",{class:"fa fa-user-circle text-6xl text-blue-600","aria-hidden":"true"}),o("h2",{class:"text-black text-2xl text-center font-semibold p-5"},"Registrarse"),o("div",{class:"p-4 mb-4 text-sm text-justify rounded-lg"},[o("span",{class:""},"Bienvenido al sistema de control y gestión de la empresa Sociedad Cooperativa de Choferes del Sur S.C.L.. Al ser el primer ingreso al sistema es necesario que cree las credenciales del usuario administrador.")])],-1),g={class:""},y={class:""},k={class:""},M={class:""},P={class:"mt-4"},h={class:"flex items-center justify-end mt-4"},B={__name:"RegisterFT",setup(q){const e=u.useForm({nombre:"",apellidoP:"",apellidoM:"",usuario:"",password:""}),m=()=>{try{e.post(route("registrarse"))}catch(i){console.log(i)}};return(i,a)=>(p(),c(f,null,[l(s(u.Head),{title:"Registrarse"}),l(V,null,{default:n(()=>[w,o("form",{onSubmit:x(m,["prevent"])},[o("div",g,[l(r,{for:"nombre",value:"Nombre(s)"}),l(d,{id:"nombre",modelValue:s(e).nombre,"onUpdate:modelValue":a[0]||(a[0]=t=>s(e).nombre=t),type:"text",class:"mt-1 block w-full",required:"",autofocus:"",autocomplete:"nombre"},null,8,["modelValue"])]),o("div",y,[l(r,{for:"apellidoP",value:"Apellido Paterno"}),l(d,{id:"apellidoP",modelValue:s(e).apellidoP,"onUpdate:modelValue":a[1]||(a[1]=t=>s(e).apellidoP=t),type:"text",class:"mt-1 block w-full",required:"",autocomplete:"apellidoP"},null,8,["modelValue"])]),o("div",k,[l(r,{for:"apellidoM",value:"Apellido Materno"}),l(d,{id:"apellidoM",modelValue:s(e).apellidoM,"onUpdate:modelValue":a[2]||(a[2]=t=>s(e).apellidoM=t),type:"text",class:"mt-1 block w-full",required:"",autocomplete:"apellidoM"},null,8,["modelValue"])]),o("div",M,[l(r,{for:"usuario",value:"Usuario"}),l(d,{id:"usuario",modelValue:s(e).usuario,"onUpdate:modelValue":a[3]||(a[3]=t=>s(e).usuario=t),type:"text",class:"mt-1 block w-full",required:"",autocomplete:"usuario"},null,8,["modelValue"])]),o("div",P,[l(r,{for:"password",value:"Password"}),l(d,{id:"password",modelValue:s(e).password,"onUpdate:modelValue":a[4]||(a[4]=t=>s(e).password=t),type:"password",class:"mt-1 block w-full",required:"",autocomplete:"password"},null,8,["modelValue"])]),o("div",h,[l(v,{class:_(["ml-4",{"opacity-25":s(e).processing}]),disabled:s(e).processing},{default:n(()=>[b(" Registrarse ")]),_:1},8,["class","disabled"])])],32)]),_:1})],64))}};export{B as default};
