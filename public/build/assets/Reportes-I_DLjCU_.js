<<<<<<<< HEAD:public/build/assets/Reportes-Z9fE2CFn.js
import{S as R}from"./sweetalert2.all-Dy7_SRfa.js";import{E as se}from"./jspdf.plugin.autotable-BLHNvfpd.js";/* empty css                                                               */import{r as I,I as L,o as l,c,m as b,a,t as _,w as S,p as N,F as x,d as m,J as V,l as W,n as X,f as ne,E as re,j as le,e as ce,b as de}from"./app-BUEvlFy1.js";import{u as T,w as me}from"./xlsx-769MyM77.js";import{_ as ue}from"./RHLayout-uerKvwYV.js";const pe={class:"text-lg font-bold"},ve=a("div",{class:"bg-gradient-to-r from-cyan-500 to-cyan-500 h-px mb-2"},null,-1),fe={class:"flex flex-wrap gap-4 mb-3"},ge=a("h2",{class:"font-semibold text-l pt-0"},"Buscar por: ",-1),he=a("option",{disabled:"",select:"",value:""},"--------------- Socio/Prestador --------------- ",-1),be=a("option",{value:"todas"},"Todos los socios y prestadores",-1),_e=["value"],xe={class:"flex flex-wrap gap-4 mb-3"},ye={class:"flex flex-wrap space-x-3 mb-2"},Me=a("h2",{class:"font-semibold text-l pt-0"},"Periodo: ",-1),Ae=["onUpdate:modelValue"],we=a("option",{value:"dia"},"Día",-1),De=a("option",{value:"semana"},"Semanal",-1),ke=a("option",{value:"mes"},"Mensual",-1),Se=a("option",{value:"anio"},"Anual",-1),Ne=[we,De,ke,Se],Oe=["value"],je=["value"],Ee=["value"],Fe=["value"],$e={class:"flex flex-wrap space-x-3"},Te=["onClick"],q=2024,Be={__name:"ReportesMovimientos",props:{message:{String,default:""},color:{String,default:""},unidad:{type:Object,default:()=>({})},operador:{type:Object,default:()=>({})},directivo:{type:Object,default:()=>({})},movimiento:{type:Object,default:()=>({})},tipoMovimiento:{type:Object,default:()=>({})}},setup(z){const d=I([]),B=L({directivo:null,movimiento:null}),K=async(i,t)=>{let e="",o=t.valor.value?t.valor.value:t.valor,n=o;if(t.tipo==="dia"&&o.includes("/")){const[u,D,k]=o.split("/");n=`${u}-${D}-${k}`}t.tipo==="semana"?e=route("reportes.MovSemana",{idDirectivo:i,semana:o}):t.tipo==="mes"||typeof t=="number"?e=route("reportes.MovMes",{idDirectivo:i,mes:o}):t.tipo==="anio"?e=route("reportes.MovAnio",{idDirectivo:i,anio:o}):t.tipo==="dia"&&(e=route("reportes.MovDia",{idDirectivo:i,dia:n}));try{const u=await re.get(e);d.value=u.data}catch{R.fire({title:"Error",text:"No se pudieron obtener los datos",icon:"error",confirmButtonText:"OK"})}},H=async(i,t,e,o)=>{if(!e||!o.tipo||!o.valor){R.fire({title:"Error",text:"Por favor seleccione los parámetros para poder generar el archivo.",icon:"error",confirmButtonText:"OK"});return}let n={tipo:i.periodoSeleccionado,valor:""};i.periodoSeleccionado==="semana"?n.valor=M:i.periodoSeleccionado==="mes"?n.valor=A:i.periodoSeleccionado==="anio"?n.valor=w:i.periodoSeleccionado==="dia"&&(n.valor=y);try{await K(e,n),i.titulo==="Movimientos"?t==="pdf"?Q(i.titulo,n):t==="excel"?Z(i.titulo,n):t==="imprimir"&&imprimirReporte(i.titulo,n):R.fire({title:`Generar el reporte "${i.titulo}" en ${t}`,text:"Lógica para generar este tipo de reporte aquí",icon:"info",confirmButtonText:"OK"})}catch(u){console.error("Error al obtener datos:",u),R.fire({title:"Error",text:"No se pudieron obtener los datos",icon:"error",confirmButtonText:"OK"})}},Q=(i,t)=>{const e=new se({orientation:"landscape"});let o;t.tipo==="semana"?o=`Semana ${t.valor}`:t.tipo==="mes"?o=C[t.valor-1]:t.tipo==="anio"?o=t.valor:t.tipo==="dia"?o=typeof t.valor=="string"?t.valor:t.valor._value||"Fecha inválida":o=t.valor,e.setFontSize(12),e.text(`Reporte de ${i} - Período: ${o}`,14,20);const n=d.value.filter(r=>r.estado.idEstado===1),u=d.value.filter(r=>r.estado.idEstado===2);e.setFontSize(12),e.text("Movimientos de Alta",14,30);const D=["Fecha","Movimiento","Operador","Socio/Prestador","Tipo De Movimiento"],k=n.map(r=>{var F,$;const h=r.fechaMovimiento||"N/A",v=r.estado?r.estado.estado:"N/A",f=r.operador?`${r.operador.nombre_completo}`:"N/A",Y=((F=r.directivo)==null?void 0:F.nombre_completo)||"N/A",J=(($=r.tipo_movimiento)==null?void 0:$.tipoMovimiento)||"N/A";return[h,v,f,Y,J]});e.autoTable({head:[D],body:k,startY:34,margin:{top:30}}),e.setFontSize(12),e.text("Movimientos de Baja",14,e.autoTable.previous.finalY+10);const O=["Fecha","Movimiento","Operador","Socio/Prestador","Tipo De Movimiento"],U=u.map(r=>{var F,$;const h=r.fechaMovimiento||"N/A",v=r.estado?r.estado.estado:"N/A",f=r.operador?`${r.operador.nombre_completo}`:"N/A",Y=((F=r.directivo)==null?void 0:F.nombre_completo)||"N/A",J=(($=r.tipo_movimiento)==null?void 0:$.tipoMovimiento)||"N/A";return[h,v,f,Y,J]});e.autoTable({head:[O],body:U,startY:e.autoTable.previous.finalY+14,margin:{top:30}});const p=e.autoTable.previous.finalY+25,s=14,g=150;e.setFontSize(12),e.text("Elaboró:",s,p),e.line(s+20,p+2,s+130,p+2),e.text("Recibió:",g,p),e.line(g+20,p+2,g+100,p+2),e.text("Jefa de Departamento de Recursos Humanos",s+30,p+10),e.text("Departamento de Servicio",g+30,p+10);const j=new Date().toLocaleDateString("es-ES",{day:"numeric",month:"long",year:"numeric"});e.setFontSize(10),e.text(`Fecha de creación: ${j}`,14,e.internal.pageSize.height-10);const E=`${i}-${o}.pdf`;e.save(E)},Z=(i,t)=>{let e;t.tipo==="semana"?e=`Semana ${t.valor}`:t.tipo==="mes"?e=C[t.valor-1]:t.tipo==="anio"?e=t.valor:t.tipo==="dia"?e=typeof t.valor=="string"?t.valor:t.valor._value||"Fecha inválida":e=t.valor;const o=`${i}-${e}.xlsx`,n=d.value.filter(s=>s.estado.idEstado===1),u=d.value.filter(s=>s.estado.idEstado===2),D=[["Fecha","Movimiento","Operador","Directivo","Tipo De Movimiento"]];n.forEach(s=>{var v,f;const g=s.fechaMovimiento||"N/A",j=s.estado?s.estado.estado:"N/A",E=s.operador?`${s.operador.nombre_completo}`:"N/A",r=((v=s.directivo)==null?void 0:v.nombre_completo)||"N/A",h=((f=s.tipo_movimiento)==null?void 0:f.tipoMovimiento)||"N/A";D.push([g,j,E,r,h])});const k=[["Fecha","Movimiento","Operador","Directivo","Tipo De Movimiento"]];u.forEach(s=>{var v,f;const g=s.fechaMovimiento||"N/A",j=s.estado?s.estado.estado:"N/A",E=s.operador?`${s.operador.nombre_completo}`:"N/A",r=((v=s.directivo)==null?void 0:v.nombre_completo)||"N/A",h=((f=s.tipo_movimiento)==null?void 0:f.tipoMovimiento)||"N/A";k.push([g,j,E,r,h])});const O=T.book_new(),U=T.aoa_to_sheet(D),p=T.aoa_to_sheet(k);T.book_append_sheet(O,U,"Movimientos de Alta"),T.book_append_sheet(O,p,"Movimientos de Baja"),me(O,o)},ee=[{titulo:"Movimientos",periodo:"dia",periodoSeleccionado:"dia"}],oe=[{tipo:"pdf",texto:"Generar PDF",clase:"bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded",icono:"fa-solid fa-file-pdf"},{tipo:"excel",texto:"Generar Excel",clase:"bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded",icono:"fa-solid fa-file-excel"}],te=Array.from({length:52},(i,t)=>t+1),C=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],G=new Date().getFullYear(),ie=Array.from({length:G-q+1},(i,t)=>q+t);let P=i=>{const t={day:"2-digit",month:"2-digit",year:"numeric"};return new Intl.DateTimeFormat("es-ES",t).format(i)},y=I(P(new Date)),M=1,A=1,w=G;Array.from({length:7},(i,t)=>{const e=new Date,o=e.getDay()||7;return e.setDate(e.getDate()-o+1+t),P(e)});const ae=Array.from({length:7},(i,t)=>{const e=new Date,o=e.getDay()||7;return e.setDate(e.getDate()-o+1+t),P(e)});return L({periodoSeleccionado:"",semana:null,mes:null,anio:null,dia:null}),(i,t)=>(l(),c(x,null,b(ee,e=>a("div",{key:e.titulo,class:"mb-4 bg-zinc-100 rounded-lg p-4"},[a("h3",pe,_(e.titulo),1),ve,a("div",fe,[ge,a("div",null,[a("div",null,[S(a("select",{name:"directivo",id:"directivo","onUpdate:modelValue":t[0]||(t[0]=o=>B.directivo=o),class:"block w-72 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"},[he,be,(l(!0),c(x,null,b(z.directivo,o=>(l(),c("option",{key:o.idDirectivo,value:o.idDirectivo},_(o.nombre_completo),9,_e))),128))],512),[[N,B.directivo]])])])]),a("div",xe,[a("div",ye,[Me,S(a("select",{"onUpdate:modelValue":o=>e.periodoSeleccionado=o,class:"block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"},Ne,8,Ae),[[N,e.periodoSeleccionado]]),e.periodoSeleccionado==="dia"?S((l(),c("select",{key:0,"onUpdate:modelValue":t[1]||(t[1]=o=>V(y)?y.value=o:y=o),class:"block w-28 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"},[(l(!0),c(x,null,b(m(ae),(o,n)=>(l(),c("option",{key:n,value:o},_(o),9,Oe))),128))],512)),[[N,m(y)]]):W("",!0),e.periodoSeleccionado==="semana"?S((l(),c("select",{key:1,"onUpdate:modelValue":t[2]||(t[2]=o=>V(M)?M.value=o:M=o),class:"block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"},[(l(!0),c(x,null,b(m(te),(o,n)=>(l(),c("option",{key:n,value:o},"Semana "+_(o),9,je))),128))],512)),[[N,m(M)]]):e.periodoSeleccionado==="mes"?S((l(),c("select",{key:2,"onUpdate:modelValue":t[3]||(t[3]=o=>V(A)?A.value=o:A=o),class:"block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"},[(l(),c(x,null,b(C,(o,n)=>a("option",{key:n,value:n+1},_(o),9,Ee)),64))],512)),[[N,m(A)]]):e.periodoSeleccionado==="anio"?S((l(),c("select",{key:3,"onUpdate:modelValue":t[4]||(t[4]=o=>V(w)?w.value=o:w=o),class:"block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"},[(l(!0),c(x,null,b(m(ie),o=>(l(),c("option",{key:o,value:o},_(o),9,Fe))),128))],512)),[[N,m(w)]]):W("",!0)])]),a("div",$e,[(l(),c(x,null,b(oe,o=>a("button",{key:o.tipo,class:X(o.clase),onClick:n=>H(e,o.tipo,B.directivo,{tipo:e.periodoSeleccionado,valor:e.periodoSeleccionado==="dia"?m(y):e.periodoSeleccionado==="semana"?m(M):e.periodoSeleccionado==="mes"?m(A):e.periodoSeleccionado==="anio"?m(w):""})},[a("i",{class:X(o.icono+" mr-2 jump-icon")},null,2),ne(" "+_(o.texto),1)],10,Te)),64))])])),64))}},Re={class:"mt-1 bg-white p-4 shadow rounded-lg h-5/6"},Ve=a("h2",{class:"font-bold text-center text-xl pt-0 mb-2"},"Reportes",-1),ze=a("div",{class:"bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mb-2"},null,-1),Ge={__name:"Reportes",props:{message:{String,default:""},color:{String,default:""},usuario:{type:Object},unidad:{type:Object,default:()=>({})},operador:{type:Object,default:()=>({})},tipoUltimaCorrida:{type:Object,default:()=>({})},movimiento:{type:Object,default:()=>({})},directivo:{type:Object,default:()=>({})},tipoMovimiento:{type:Object,default:()=>({})}},setup(z){const d=z;return(B,K)=>(l(),le(ue,{title:"Reportes",usuario:d.usuario},{default:ce(()=>[a("div",Re,[Ve,ze,de(Be,{unidad:d.unidad,operador:d.operador,directivo:d.directivo,movimiento:d.movimiento,tipoMovimiento:d.tipoMovimiento},null,8,["unidad","operador","directivo","movimiento","tipoMovimiento"])])]),_:1},8,["usuario"]))}};export{Ge as default};
========
import{S as R}from"./sweetalert2.all-hMiNay9h.js";import{E as se}from"./jspdf.plugin.autotable-BqYcvtrv.js";/* empty css                                                               */import{r as I,I as L,o as l,c,m as b,a,t as _,w as S,p as N,F as x,d as m,J as V,l as W,n as X,f as ne,E as re,j as le,e as ce,b as de}from"./app-Dl5_rpfc.js";import{u as T,w as me}from"./xlsx-769MyM77.js";import{_ as ue}from"./RHLayout-DTwPyi8V.js";const pe={class:"text-lg font-bold"},ve=a("div",{class:"bg-gradient-to-r from-cyan-500 to-cyan-500 h-px mb-2"},null,-1),fe={class:"flex flex-wrap gap-4 mb-3"},ge=a("h2",{class:"font-semibold text-l pt-0"},"Buscar por: ",-1),he=a("option",{disabled:"",select:"",value:""},"--------------- Socio/Prestador --------------- ",-1),be=a("option",{value:"todas"},"Todos los socios y prestadores",-1),_e=["value"],xe={class:"flex flex-wrap gap-4 mb-3"},ye={class:"flex flex-wrap space-x-3 mb-2"},Me=a("h2",{class:"font-semibold text-l pt-0"},"Periodo: ",-1),Ae=["onUpdate:modelValue"],we=a("option",{value:"dia"},"Día",-1),De=a("option",{value:"semana"},"Semanal",-1),ke=a("option",{value:"mes"},"Mensual",-1),Se=a("option",{value:"anio"},"Anual",-1),Ne=[we,De,ke,Se],Oe=["value"],je=["value"],Ee=["value"],Fe=["value"],$e={class:"flex flex-wrap space-x-3"},Te=["onClick"],q=2024,Be={__name:"ReportesMovimientos",props:{message:{String,default:""},color:{String,default:""},unidad:{type:Object,default:()=>({})},operador:{type:Object,default:()=>({})},directivo:{type:Object,default:()=>({})},movimiento:{type:Object,default:()=>({})},tipoMovimiento:{type:Object,default:()=>({})}},setup(z){const d=I([]),B=L({directivo:null,movimiento:null}),K=async(i,t)=>{let e="",o=t.valor.value?t.valor.value:t.valor,n=o;if(t.tipo==="dia"&&o.includes("/")){const[u,D,k]=o.split("/");n=`${u}-${D}-${k}`}t.tipo==="semana"?e=route("reportes.MovSemana",{idDirectivo:i,semana:o}):t.tipo==="mes"||typeof t=="number"?e=route("reportes.MovMes",{idDirectivo:i,mes:o}):t.tipo==="anio"?e=route("reportes.MovAnio",{idDirectivo:i,anio:o}):t.tipo==="dia"&&(e=route("reportes.MovDia",{idDirectivo:i,dia:n}));try{const u=await re.get(e);d.value=u.data}catch{R.fire({title:"Error",text:"No se pudieron obtener los datos",icon:"error",confirmButtonText:"OK"})}},H=async(i,t,e,o)=>{if(!e||!o.tipo||!o.valor){R.fire({title:"Error",text:"Por favor seleccione los parámetros para poder generar el archivo.",icon:"error",confirmButtonText:"OK"});return}let n={tipo:i.periodoSeleccionado,valor:""};i.periodoSeleccionado==="semana"?n.valor=M:i.periodoSeleccionado==="mes"?n.valor=A:i.periodoSeleccionado==="anio"?n.valor=w:i.periodoSeleccionado==="dia"&&(n.valor=y);try{await K(e,n),i.titulo==="Movimientos"?t==="pdf"?Q(i.titulo,n):t==="excel"?Z(i.titulo,n):t==="imprimir"&&imprimirReporte(i.titulo,n):R.fire({title:`Generar el reporte "${i.titulo}" en ${t}`,text:"Lógica para generar este tipo de reporte aquí",icon:"info",confirmButtonText:"OK"})}catch(u){console.error("Error al obtener datos:",u),R.fire({title:"Error",text:"No se pudieron obtener los datos",icon:"error",confirmButtonText:"OK"})}},Q=(i,t)=>{const e=new se({orientation:"landscape"});let o;t.tipo==="semana"?o=`Semana ${t.valor}`:t.tipo==="mes"?o=C[t.valor-1]:t.tipo==="anio"?o=t.valor:t.tipo==="dia"?o=typeof t.valor=="string"?t.valor:t.valor._value||"Fecha inválida":o=t.valor,e.setFontSize(12),e.text(`Reporte de ${i} - Período: ${o}`,14,20);const n=d.value.filter(r=>r.estado.idEstado===1),u=d.value.filter(r=>r.estado.idEstado===2);e.setFontSize(12),e.text("Movimientos de Alta",14,30);const D=["Fecha","Movimiento","Operador","Socio/Prestador","Tipo De Movimiento"],k=n.map(r=>{var F,$;const h=r.fechaMovimiento||"N/A",v=r.estado?r.estado.estado:"N/A",f=r.operador?`${r.operador.nombre_completo}`:"N/A",Y=((F=r.directivo)==null?void 0:F.nombre_completo)||"N/A",J=(($=r.tipo_movimiento)==null?void 0:$.tipoMovimiento)||"N/A";return[h,v,f,Y,J]});e.autoTable({head:[D],body:k,startY:34,margin:{top:30}}),e.setFontSize(12),e.text("Movimientos de Baja",14,e.autoTable.previous.finalY+10);const O=["Fecha","Movimiento","Operador","Socio/Prestador","Tipo De Movimiento"],U=u.map(r=>{var F,$;const h=r.fechaMovimiento||"N/A",v=r.estado?r.estado.estado:"N/A",f=r.operador?`${r.operador.nombre_completo}`:"N/A",Y=((F=r.directivo)==null?void 0:F.nombre_completo)||"N/A",J=(($=r.tipo_movimiento)==null?void 0:$.tipoMovimiento)||"N/A";return[h,v,f,Y,J]});e.autoTable({head:[O],body:U,startY:e.autoTable.previous.finalY+14,margin:{top:30}});const p=e.autoTable.previous.finalY+25,s=14,g=150;e.setFontSize(12),e.text("Elaboró:",s,p),e.line(s+20,p+2,s+130,p+2),e.text("Recibió:",g,p),e.line(g+20,p+2,g+100,p+2),e.text("Jefa de Departamento de Recursos Humanos",s+30,p+10),e.text("Departamento de Servicio",g+30,p+10);const j=new Date().toLocaleDateString("es-ES",{day:"numeric",month:"long",year:"numeric"});e.setFontSize(10),e.text(`Fecha de creación: ${j}`,14,e.internal.pageSize.height-10);const E=`${i}-${o}.pdf`;e.save(E)},Z=(i,t)=>{let e;t.tipo==="semana"?e=`Semana ${t.valor}`:t.tipo==="mes"?e=C[t.valor-1]:t.tipo==="anio"?e=t.valor:t.tipo==="dia"?e=typeof t.valor=="string"?t.valor:t.valor._value||"Fecha inválida":e=t.valor;const o=`${i}-${e}.xlsx`,n=d.value.filter(s=>s.estado.idEstado===1),u=d.value.filter(s=>s.estado.idEstado===2),D=[["Fecha","Movimiento","Operador","Directivo","Tipo De Movimiento"]];n.forEach(s=>{var v,f;const g=s.fechaMovimiento||"N/A",j=s.estado?s.estado.estado:"N/A",E=s.operador?`${s.operador.nombre_completo}`:"N/A",r=((v=s.directivo)==null?void 0:v.nombre_completo)||"N/A",h=((f=s.tipo_movimiento)==null?void 0:f.tipoMovimiento)||"N/A";D.push([g,j,E,r,h])});const k=[["Fecha","Movimiento","Operador","Directivo","Tipo De Movimiento"]];u.forEach(s=>{var v,f;const g=s.fechaMovimiento||"N/A",j=s.estado?s.estado.estado:"N/A",E=s.operador?`${s.operador.nombre_completo}`:"N/A",r=((v=s.directivo)==null?void 0:v.nombre_completo)||"N/A",h=((f=s.tipo_movimiento)==null?void 0:f.tipoMovimiento)||"N/A";k.push([g,j,E,r,h])});const O=T.book_new(),U=T.aoa_to_sheet(D),p=T.aoa_to_sheet(k);T.book_append_sheet(O,U,"Movimientos de Alta"),T.book_append_sheet(O,p,"Movimientos de Baja"),me(O,o)},ee=[{titulo:"Movimientos",periodo:"dia",periodoSeleccionado:"dia"}],oe=[{tipo:"pdf",texto:"Generar PDF",clase:"bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded",icono:"fa-solid fa-file-pdf"},{tipo:"excel",texto:"Generar Excel",clase:"bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded",icono:"fa-solid fa-file-excel"}],te=Array.from({length:52},(i,t)=>t+1),C=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],G=new Date().getFullYear(),ie=Array.from({length:G-q+1},(i,t)=>q+t);let P=i=>{const t={day:"2-digit",month:"2-digit",year:"numeric"};return new Intl.DateTimeFormat("es-ES",t).format(i)},y=I(P(new Date)),M=1,A=1,w=G;Array.from({length:7},(i,t)=>{const e=new Date,o=e.getDay()||7;return e.setDate(e.getDate()-o+1+t),P(e)});const ae=Array.from({length:7},(i,t)=>{const e=new Date,o=e.getDay()||7;return e.setDate(e.getDate()-o+1+t),P(e)});return L({periodoSeleccionado:"",semana:null,mes:null,anio:null,dia:null}),(i,t)=>(l(),c(x,null,b(ee,e=>a("div",{key:e.titulo,class:"mb-4 bg-zinc-100 rounded-lg p-4"},[a("h3",pe,_(e.titulo),1),ve,a("div",fe,[ge,a("div",null,[a("div",null,[S(a("select",{name:"directivo",id:"directivo","onUpdate:modelValue":t[0]||(t[0]=o=>B.directivo=o),class:"block w-72 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"},[he,be,(l(!0),c(x,null,b(z.directivo,o=>(l(),c("option",{key:o.idDirectivo,value:o.idDirectivo},_(o.nombre_completo),9,_e))),128))],512),[[N,B.directivo]])])])]),a("div",xe,[a("div",ye,[Me,S(a("select",{"onUpdate:modelValue":o=>e.periodoSeleccionado=o,class:"block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"},Ne,8,Ae),[[N,e.periodoSeleccionado]]),e.periodoSeleccionado==="dia"?S((l(),c("select",{key:0,"onUpdate:modelValue":t[1]||(t[1]=o=>V(y)?y.value=o:y=o),class:"block w-28 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"},[(l(!0),c(x,null,b(m(ae),(o,n)=>(l(),c("option",{key:n,value:o},_(o),9,Oe))),128))],512)),[[N,m(y)]]):W("",!0),e.periodoSeleccionado==="semana"?S((l(),c("select",{key:1,"onUpdate:modelValue":t[2]||(t[2]=o=>V(M)?M.value=o:M=o),class:"block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"},[(l(!0),c(x,null,b(m(te),(o,n)=>(l(),c("option",{key:n,value:o},"Semana "+_(o),9,je))),128))],512)),[[N,m(M)]]):e.periodoSeleccionado==="mes"?S((l(),c("select",{key:2,"onUpdate:modelValue":t[3]||(t[3]=o=>V(A)?A.value=o:A=o),class:"block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"},[(l(),c(x,null,b(C,(o,n)=>a("option",{key:n,value:n+1},_(o),9,Ee)),64))],512)),[[N,m(A)]]):e.periodoSeleccionado==="anio"?S((l(),c("select",{key:3,"onUpdate:modelValue":t[4]||(t[4]=o=>V(w)?w.value=o:w=o),class:"block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"},[(l(!0),c(x,null,b(m(ie),o=>(l(),c("option",{key:o,value:o},_(o),9,Fe))),128))],512)),[[N,m(w)]]):W("",!0)])]),a("div",$e,[(l(),c(x,null,b(oe,o=>a("button",{key:o.tipo,class:X(o.clase),onClick:n=>H(e,o.tipo,B.directivo,{tipo:e.periodoSeleccionado,valor:e.periodoSeleccionado==="dia"?m(y):e.periodoSeleccionado==="semana"?m(M):e.periodoSeleccionado==="mes"?m(A):e.periodoSeleccionado==="anio"?m(w):""})},[a("i",{class:X(o.icono+" mr-2 jump-icon")},null,2),ne(" "+_(o.texto),1)],10,Te)),64))])])),64))}},Re={class:"mt-1 bg-white p-4 shadow rounded-lg h-5/6"},Ve=a("h2",{class:"font-bold text-center text-xl pt-0 mb-2"},"Reportes",-1),ze=a("div",{class:"bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mb-2"},null,-1),Ge={__name:"Reportes",props:{message:{String,default:""},color:{String,default:""},usuario:{type:Object},unidad:{type:Object,default:()=>({})},operador:{type:Object,default:()=>({})},tipoUltimaCorrida:{type:Object,default:()=>({})},movimiento:{type:Object,default:()=>({})},directivo:{type:Object,default:()=>({})},tipoMovimiento:{type:Object,default:()=>({})}},setup(z){const d=z;return(B,K)=>(l(),le(ue,{title:"Reportes",usuario:d.usuario},{default:ce(()=>[a("div",Re,[Ve,ze,de(Be,{unidad:d.unidad,operador:d.operador,directivo:d.directivo,movimiento:d.movimiento,tipoMovimiento:d.tipoMovimiento},null,8,["unidad","operador","directivo","movimiento","tipoMovimiento"])])]),_:1},8,["usuario"]))}};export{Ge as default};
>>>>>>>> segundaParte:public/build/assets/Reportes-I_DLjCU_.js
