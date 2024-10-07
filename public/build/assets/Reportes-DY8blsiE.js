import{_ as U,a as z,b as B,c as D,d as R,e as V,f as K,g as P}from"./ReportesUltimasCorridas-Bvy1HLLn.js";import{_ as L}from"./ServicioLayout-Be8H1UHz.js";import{r as Y,J as G,o as c,c as u,m as g,a as t,t as b,w,p as j,d as x,K as q,F as _,l as I,n as O,f as J,G as M,j as H,e as Q,b as d}from"./app-C7ICach6.js";import{S as y}from"./sweetalert2.esm.all-BGf-Fe8G.js";import{u as h,w as W}from"./xlsx-DjuO7_Ju.js";import{E as X}from"./jspdf.plugin.autotable-CN5XQqOE.js";/* empty css                                                               */const Z={class:"text-lg font-bold"},ee={class:"flex flex-wrap gap-4 mb-3"},oe={class:"flex flex-wrap space-x-3 mb-2"},ae=["onUpdate:modelValue"],re=["value"],te={class:"flex flex-wrap space-x-3"},ne=["onClick"],$=2024,se={__name:"ReporteOperadoresSinTrabajar",props:{message:{String,default:""},color:{String,default:""},unidad:{type:Object,default:()=>({})},operador:{type:Object,default:()=>({})}},setup(S){const e=Y([]),v=G({unidad:null,operador:null}),l=async n=>{const a=route("reporte.opSinTrabajar",{semana:n});console.log("URL de la API:",a);try{const o=await M.get(a);e.value=Object.values(o.data),console.log("Entradas.value",e.value),console.log("response.data",o.data)}catch(o){console.error("Error al obtener los datos:",o.response?o.response.data:o.message),y.fire({title:"Error",text:"No se pudieron obtener los datos",icon:"error",confirmButtonText:"OK"})}},k=async(n,a,o,r)=>{if(console.log("Semana seleccionada:",s),!s){y.fire({title:"Error",text:"Por favor seleccione una semana para generar el archivo.",icon:"error",confirmButtonText:"OK"});return}try{await l(s),n.titulo==="Operadores Sin Trabajar"&&(a==="pdf"?C(n.titulo,s):a==="excel"&&E(n.titulo,s))}catch{y.fire({title:"Error",text:"No se pudieron obtener los datos",icon:"error",confirmButtonText:"OK"})}},C=(n,a)=>{const o=new X("portrait");o.setFontSize(12),o.text(`Reporte de ${n} - Semana ${a}`,14,20),o.setFontSize(10),o.text("Los operadores que aparecen en el listado no trabajaron ni al menos 1 día durante la semana seleccionada.",14,30);const r=[{header:"Nombre del operador",dataKey:"nombre"}],i=e.value.map(f=>({nombre:f.nombre_completo||"N/A"}));o.autoTable({columns:r,body:i,startY:24,styles:{fontSize:10}});const p=new Date().toLocaleDateString("es-ES",{day:"numeric",month:"long",year:"numeric"});o.setFontSize(10),o.text(`Fecha de creación: ${p}`,14,o.internal.pageSize.height-10);const m=`${n}-Semana-${a}.pdf`;o.save(m)},E=(n,a)=>{const o=`${n}-Semana-${a}.xlsx`,r=[["Nombre del Operador"]];e.value.forEach(m=>{const f=m.nombre_completo||"N/A";r.push([f])});const i=h.book_new(),p=h.aoa_to_sheet(r);h.book_append_sheet(i,p,"Operadores_Sin_Trabajar"),W(i,o)},F=[{tipo:"pdf",texto:"Generar PDF",clase:"bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded",icono:"fa-solid fa-file-pdf"},{tipo:"excel",texto:"Generar Excel",clase:"bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded",icono:"fa-solid fa-file-excel"}],N=Array.from({length:52},(n,a)=>a+1),T=new Date().getFullYear();Array.from({length:T-$+1},(n,a)=>$+a);let s=1;const A=[{titulo:"Operadores Sin Trabajar",periodo:"semana",periodoSeleccionado:"semana"}];return(n,a)=>(c(),u(_,null,g(A,o=>t("div",{key:o.titulo,class:"mb-4 bg-zinc-100 rounded-lg p-4"},[t("h3",Z,b(o.titulo),1),a[3]||(a[3]=t("div",{class:"bg-gradient-to-r from-cyan-500 to-cyan-500 h-px mb-2"},null,-1)),t("div",ee,[t("div",oe,[a[2]||(a[2]=t("h2",{class:"font-semibold text-l pt-0"},"Periodo: ",-1)),w(t("select",{"onUpdate:modelValue":r=>o.periodoSeleccionado=r,class:"block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"},a[1]||(a[1]=[t("option",{value:"semana"},"Semanal",-1)]),8,ae),[[j,o.periodoSeleccionado]]),o.periodoSeleccionado==="semana"?w((c(),u("select",{key:0,"onUpdate:modelValue":a[0]||(a[0]=r=>q(s)?s.value=r:s=r),class:"block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"},[(c(!0),u(_,null,g(x(N),(r,i)=>(c(),u("option",{key:i,value:r},"Semana "+b(r),9,re))),128))],512)),[[j,x(s)]]):I("",!0)])]),t("div",te,[(c(),u(_,null,g(F,r=>t("button",{key:r.tipo,class:O(r.clase),onClick:i=>k(o,r.tipo,v.operador,{tipo:o.periodoSeleccionado,valor:o.periodoSeleccionado==="semana"?x(s):""})},[t("i",{class:O(r.icono+" mr-2 jump-icon")},null,2),J(" "+b(r.texto),1)],10,ne)),64))])])),64))}},de={class:"mt-1 bg-white p-4 shadow rounded-lg h-5/6"},ge={__name:"Reportes",props:{message:{String,default:""},color:{String,default:""},usuario:{type:Object},unidad:{type:Object,default:()=>({})},operador:{type:Object,default:()=>({})},tipoUltimaCorrida:{type:Object,default:()=>({})},entrada:{type:Object,default:()=>({})},corte:{type:Object,default:()=>({})},ultimaCorrida:{type:Object,default:()=>({})},castigo:{type:Object,default:()=>({})}},setup(S){const e=S;return(v,l)=>(c(),H(L,{title:"Reportes",usuario:e.usuario},{default:Q(()=>[t("div",de,[l[0]||(l[0]=t("h2",{class:"font-bold text-center text-xl pt-0 mb-2"},"Reportes",-1)),l[1]||(l[1]=t("div",{class:"bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mb-2"},null,-1)),d(U,{unidad:e.unidad,operador:e.operador,entrada:e.entrada},null,8,["unidad","operador","entrada"]),d(z,{unidad:e.unidad,operador:e.operador,entrada:e.entrada},null,8,["unidad","operador","entrada"]),d(B,{unidad:e.unidad,operador:e.operador,corte:e.corte},null,8,["unidad","operador","corte"]),d(D,{unidad:e.unidad,operador:e.operador,corte:e.corte},null,8,["unidad","operador","corte"]),d(R,{unidad:e.unidad,operador:e.operador,corte:e.corte},null,8,["unidad","operador","corte"]),d(V,{unidad:e.unidad,operador:e.operador,tipoUltimaCorrida:e.tipoUltimaCorrida,ultimaCorrida:e.ultimaCorrida},null,8,["unidad","operador","tipoUltimaCorrida","ultimaCorrida"]),d(K,{unidad:e.unidad,operador:e.operador,castigo:e.castigo},null,8,["unidad","operador","castigo"]),d(P,{unidad:e.unidad,operador:e.operador},null,8,["unidad","operador"]),d(se,{unidad:e.unidad,operador:e.operador},null,8,["unidad","operador"])])]),_:1},8,["usuario"]))}};export{ge as default};
