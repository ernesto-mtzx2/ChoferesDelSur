import{u as T,r as p,q as v,s as Z,o as C,j as q,e as D,a as s,b as t,g as F,d as u,n,c as k,t as P,l as A,w as G,k as O,f as H}from"./app-Df3u5qSZ.js";import{_ as d,a as c}from"./TextInput-Cs9a3fv2.js";import{_ as J}from"./ServicioLayout-BnxhkB-c.js";import{_ as K}from"./Mensaje-B5eqQsdO.js";import"./jspdf.plugin.autotable-Bl-hCvPq.js";/* empty css                                                */const Q={class:"bg-white p-4 shadow rounded-lg h-5/6 mt-10 sm:mt-0"},R=s("h2",{class:"text-black text-2xl text-center font-semibold p-5"},"Perfil",-1),W=s("div",{class:"my-1"},null,-1),X=s("div",{class:"bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mb-6"},null,-1),Y={class:"md:grid md:grid-cols-8"},ss=s("div",{class:"col-span-4"},[s("h3",{class:"m-3 text-lg font-medium text-gray-900"}," Informacion de la cuenta "),s("p",{class:"m-3 text-sm text-gray-600 text-justify"}," Para realizar modificaciones a este tipo de informacion, es necesario comunicarse con el administrador. ")],-1),as={class:"col-span-4 m-2 md:grid md:grid-4"},es={class:"col-span-3 sm:col-span-4 mt-2"},os={class:"col-span-6 sm:col-span-4 mt-2"},ts={class:"col-span-6 sm:col-span-4 mt-2"},ls={class:"col-span-6 sm:col-span-4 mt-2"},ns=s("div",{class:"bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mb-6 mt-5"},null,-1),rs={class:"md:grid md:grid-cols-8"},is=s("div",{class:"col-span-4"},[s("h3",{class:"m-3 text-lg font-medium text-gray-900"}," Cambiar contraseña "),s("p",{class:"m-3 text-sm text-gray-600 text-justify"}," Para realizar el cambio de contraseña es necesario recordar la contraseña actual, en caso de haberlo olvidado, es necesario comunicarse con el administrador para su recuperación. ")],-1),us={class:"col-span-4 m-2 md:grid md:grid-4"},ds={class:"col-span-3 sm:col-span-4 mt-2"},cs={class:"relative"},ms={key:0,class:"text-red-500 text-xs mt-1"},ps={class:"col-span-6 sm:col-span-4 mt-2"},vs={class:"relative"},fs={class:"flex items-center mt-1"},_s={class:"flex items-center mt-1"},gs={class:"flex items-center mt-1"},ws={class:"flex items-center mt-1"},ys={class:"flex items-center mt-1"},bs={key:0,class:"text-red-500 text-xs mt-1"},xs={class:"col-span-6 sm:col-span-4 mt-2"},hs={class:"relative"},Vs={key:1,class:"text-red-500 text-xs mt-1"},Cs={class:"col-span-6 sm:col-span-4 mt-2",hidden:""},Us={class:"mt-6 flex items-center justify-end gap-x-6"},ks=["disabled"],Ps=s("i",{class:"fa-solid fa-floppy-disk mr-2"},null,-1),js={__name:"Perfil",props:{usuario:{type:Object}},setup($){const r=$,a=T({_method:"PUT",password_actual:"",password_nueva:"",password_confirmacion:"",idUsuario:r.usuario.idUsuario}),f=p(""),i=p(""),m=p(""),U=l=>typeof l=="string"&&l.trim()!=="",M=(l,e)=>l===e&&l.trim()!==""&&e.trim()!=="",N=l=>typeof l=="string"&&l.length>=8,z=l=>{const e=/[A-Z]/.test(l),o=/[a-z]/.test(l),B=/[0-9]/.test(l),I=/[@$!%*?&#]/.test(l);return e&&o&&B&&I},_=v(()=>N(a.password_nueva)),g=v(()=>/[A-Z]/.test(a.password_nueva)),w=v(()=>/[a-z]/.test(a.password_nueva)),y=v(()=>/[0-9]/.test(a.password_nueva)),b=v(()=>/[@$!%*?&#]/.test(a.password_nueva)),L=()=>{f.value=U(a.password_actual)?"":"Ingrese la contraseña actual",i.value=U(a.password_nueva)?"":"Ingrese la nueva contraseña",m.value=U(a.password_confirmacion)?"":"Ingrese nuevamente la contraseña creada",i.value===""&&(i.value=M(a.password_nueva,a.password_confirmacion)?"":"Las contraseñas no coinciden"),m.value===""&&(m.value=M(a.password_nueva,a.password_confirmacion)?"":"Las contraseñas no coinciden"),i.value===""&&(i.value=N(a.password_nueva)?"":"La contraseña tiene que ser igual o mayor a 8 dígitos"),i.value===""&&!z(a.password_nueva)&&(i.value="La contraseña no cumple con las características necesarias"),!(f.value||i.value||m.value)&&a.post(route("servicio.actualizarContrasenia",a.idUsuario),{onSuccess:()=>{a.password_actual="",a.password_nueva="",a.password_confirmacion=""}})};Z(async()=>{a.idUsuario=r.usuario.idUsuario});const x=p(!1),h=p(!1),V=p(!1),j=()=>{x.value=!x.value},S=()=>{h.value=!h.value},E=()=>{V.value=!V.value};return(l,e)=>(C(),q(J,{title:"Perfil",usuario:r.usuario},{default:D(()=>[s("div",Q,[R,W,X,s("div",null,[s("form",null,[s("div",null,[s("div",Y,[ss,s("div",as,[s("div",es,[t(d,{for:"nombre",value:"Nombre"}),t(c,{id:"nombre",modelValue:r.usuario.nombre,"onUpdate:modelValue":e[0]||(e[0]=o=>r.usuario.nombre=o),type:"text",class:"mt-1 block w-full",disabled:""},null,8,["modelValue"])]),s("div",os,[t(d,{for:"apellidoP",value:"Apellido Paterno"}),t(c,{id:"apellidoP",modelValue:r.usuario.apellidoP,"onUpdate:modelValue":e[1]||(e[1]=o=>r.usuario.apellidoP=o),type:"text",class:"mt-1 block w-full",disabled:""},null,8,["modelValue"])]),s("div",ts,[t(d,{for:"apellidoM",value:"Apellido Materno"}),t(c,{id:"apellidoM",modelValue:r.usuario.apellidoM,"onUpdate:modelValue":e[2]||(e[2]=o=>r.usuario.apellidoM=o),type:"text",class:"mt-1 block w-full",disabled:""},null,8,["modelValue"])]),s("div",ls,[t(d,{for:"usuario",value:"Usuario"}),t(c,{id:"usuario",modelValue:r.usuario.usuario,"onUpdate:modelValue":e[3]||(e[3]=o=>r.usuario.usuario=o),type:"text",class:"mt-1 block w-full",disabled:""},null,8,["modelValue"])])])])])])]),ns,t(K),s("div",null,[s("form",{onSubmit:e[8]||(e[8]=F(o=>L(),["prevent"]))},[s("div",null,[s("div",rs,[is,s("div",us,[s("div",ds,[t(d,{for:"password_actual",value:"Contraseña actual"}),s("div",cs,[t(c,{id:"password_actual",modelValue:u(a).password_actual,"onUpdate:modelValue":e[4]||(e[4]=o=>u(a).password_actual=o),type:x.value?"text":"password",class:"mt-1 block w-full",autocomplete:"current-password"},null,8,["modelValue","type"]),s("button",{type:"button",class:"absolute inset-y-0 right-0 pr-3 flex items-center focus:outline-none",onClick:j},[s("i",{class:n(["fa",x.value?"fa-eye-slash":"fa-eye"])},null,2)])])]),f.value!=""?(C(),k("div",ms,P(f.value),1)):A("",!0),s("div",ps,[t(d,{for:"password_nueva",value:"Contraseña nueva"}),s("div",vs,[t(c,{id:"password_nueva",modelValue:u(a).password_nueva,"onUpdate:modelValue":e[5]||(e[5]=o=>u(a).password_nueva=o),type:h.value?"text":"password",class:"mt-1 block w-full",autocomplete:"new-password"},null,8,["modelValue","type"]),s("button",{type:"button",class:"absolute inset-y-0 right-0 pr-3 flex items-center focus:outline-none",onClick:S},[s("i",{class:n(["fa",h.value?"fa-eye-slash":"fa-eye"])},null,2)])]),s("div",fs,[s("div",{class:n(["h-3 w-3 rounded-full mr-2",{"bg-green-500":_.value,"bg-gray-300":!_.value}])},null,2),s("span",{class:n(["text-sm",{"text-green-500":_.value,"text-gray-600":!_.value}])}," Mínimo 8 caracteres ",2)]),s("div",_s,[s("div",{class:n(["h-3 w-3 rounded-full mr-2",{"bg-green-500":g.value,"bg-gray-300":!g.value}])},null,2),s("span",{class:n(["text-sm",{"text-green-500":g.value,"text-gray-600":!g.value}])}," Al menos una mayúscula (A-Z) ",2)]),s("div",gs,[s("div",{class:n(["h-3 w-3 rounded-full mr-2",{"bg-green-500":w.value,"bg-gray-300":!w.value}])},null,2),s("span",{class:n(["text-sm",{"text-green-500":w.value,"text-gray-600":!w.value}])}," Al menos una minúscula (a-z) ",2)]),s("div",ws,[s("div",{class:n(["h-3 w-3 rounded-full mr-2",{"bg-green-500":y.value,"bg-gray-300":!y.value}])},null,2),s("span",{class:n(["text-sm",{"text-green-500":y.value,"text-gray-600":!y.value}])}," Al menos un número (0-9) ",2)]),s("div",ys,[s("div",{class:n(["h-3 w-3 rounded-full mr-2",{"bg-green-500":b.value,"bg-gray-300":!b.value}])},null,2),s("span",{class:n(["text-sm",{"text-green-500":b.value,"text-gray-600":!b.value}])}," Al menos un símbolo (@$!%*?&#) ",2)]),i.value?(C(),k("div",bs,P(i.value),1)):A("",!0)]),s("div",xs,[t(d,{for:"password_confirmacion",value:"Confirmar contraseña"}),s("div",hs,[t(c,{id:"password_confirmacion",modelValue:u(a).password_confirmacion,"onUpdate:modelValue":e[6]||(e[6]=o=>u(a).password_confirmacion=o),type:V.value?"text":"password",class:"mt-1 block w-full",autocomplete:"new-password"},null,8,["modelValue","type"]),s("button",{type:"button",class:"absolute inset-y-0 right-0 pr-3 flex items-center focus:outline-none",onClick:E},[s("i",{class:n(["fa",V.value?"fa-eye-slash":"fa-eye"])},null,2)])])]),m.value!=""?(C(),k("div",Vs,P(m.value),1)):A("",!0),s("div",Cs,[t(d,{for:"idUsuario",value:"idUsuario"}),G(s("input",{id:"idUsuario","onUpdate:modelValue":e[7]||(e[7]=o=>u(a).idUsuario=o),type:"number",class:"mt-1 block w-full"},null,512),[[O,u(a).idUsuario]])])])]),s("div",Us,[s("button",{type:"submit",class:n(["bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded right",{"opacity-25":u(a).processing}]),disabled:u(a).processing},[Ps,H("Guardar")],10,ks)])])],32)])])]),_:1},8,["usuario"]))}};export{js as default};
