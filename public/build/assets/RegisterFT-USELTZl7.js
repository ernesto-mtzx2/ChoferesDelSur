import{u as m,o as c,c as p,b as l,d as s,e as u,F as f,H as _,a as o,n as b,f as x,g as V}from"./app-B_oPhKSf.js";import{A as v,_ as w}from"./PrimaryButton-BtrcemBN.js";import{_ as d,a as i}from"./TextInput-3XuNZsPa.js";const g=o("div",{class:"flex flex-col items-center"},[o("i",{class:"fa fa-user-circle text-6xl text-blue-600","aria-hidden":"true"}),o("h2",{class:"text-black text-2xl text-center font-semibold p-5"},"Registrarse"),o("div",{class:"p-4 mb-4 text-sm text-justify rounded-lg"},[o("span",{class:""},"Bienvenido al sistema de control y gestión de la empresa Sociedad Cooperativa de Choferes del Sur S.C.L.. Al ser el primer ingreso al sistema es necesario que cree las credenciales del usuario administrador.")])],-1),y={class:""},k={class:""},M={class:""},P={class:""},q={class:"mt-4"},U={class:"flex items-center justify-end mt-4"},B={__name:"RegisterFT",setup(C){const e=m({nombre:"",apellidoP:"",apellidoM:"",usuario:"",password:""}),n=()=>{try{const r=route("registrarse");console.log("Request URL:",r),e.post(r)}catch(r){console.log(r)}};return(r,a)=>(c(),p(f,null,[l(s(_),{title:"Registrarse"}),l(v,null,{default:u(()=>[g,o("form",{onSubmit:V(n,["prevent"])},[o("div",y,[l(d,{for:"nombre",value:"Nombre(s)"}),l(i,{id:"nombre",modelValue:s(e).nombre,"onUpdate:modelValue":a[0]||(a[0]=t=>s(e).nombre=t),type:"text",class:"mt-1 block w-full",required:"",autofocus:"",autocomplete:"nombre"},null,8,["modelValue"])]),o("div",k,[l(d,{for:"apellidoP",value:"Apellido Paterno"}),l(i,{id:"apellidoP",modelValue:s(e).apellidoP,"onUpdate:modelValue":a[1]||(a[1]=t=>s(e).apellidoP=t),type:"text",class:"mt-1 block w-full",required:"",autocomplete:"apellidoP"},null,8,["modelValue"])]),o("div",M,[l(d,{for:"apellidoM",value:"Apellido Materno"}),l(i,{id:"apellidoM",modelValue:s(e).apellidoM,"onUpdate:modelValue":a[2]||(a[2]=t=>s(e).apellidoM=t),type:"text",class:"mt-1 block w-full",required:"",autocomplete:"apellidoM"},null,8,["modelValue"])]),o("div",P,[l(d,{for:"usuario",value:"Usuario"}),l(i,{id:"usuario",modelValue:s(e).usuario,"onUpdate:modelValue":a[3]||(a[3]=t=>s(e).usuario=t),type:"text",class:"mt-1 block w-full",required:"",autocomplete:"usuario"},null,8,["modelValue"])]),o("div",q,[l(d,{for:"password",value:"Password"}),l(i,{id:"password",modelValue:s(e).password,"onUpdate:modelValue":a[4]||(a[4]=t=>s(e).password=t),type:"password",class:"mt-1 block w-full",required:"",autocomplete:"password"},null,8,["modelValue"])]),o("div",U,[l(w,{class:b(["ml-4",{"opacity-25":s(e).processing}]),disabled:s(e).processing},{default:u(()=>[x(" Registrarse ")]),_:1},8,["class","disabled"])])],32)]),_:1})],64))}};export{B as default};
