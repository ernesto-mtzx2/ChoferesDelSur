import{u as C,j as O,b as y,o as _,k as N,f as R,a as t,h as D,t as w,w as E,e as u,l as k,c as U,m as V,g as h,L as B,D as T,i as H,d as v}from"./app-Dl67xzYR.js";import"./buttons.print-OqsN6yBt.js";import{S as I}from"./sweetalert2.all-BfAa2hX5.js";import{_ as q}from"./Mensaje-DnlosXOW.js";import{_ as G}from"./ServicioLayout-BA-tAh8l.js";import{_ as W}from"./Modal-Bu6Brgew.js";import{r as z}from"./index-Cth4eTIJ.js";/* empty css                                                */import"./jspdf.plugin.autotable-CJFzle8i.js";const X={class:"mt-2 bg-white p-4 shadow rounded-lg"},J={class:"border-b border-gray-900/10 pb-12"},K={class:"text-base font-semibold leading-7 text-gray-900"},Q=t("p",{class:"mt-1 text-sm leading-6 text-gray-600"},"Rellene el campo para registrar una nueva ruta ",-1),Y={class:"mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"},Z={class:"sm:col-span-1",hidden:""},tt=t("label",{for:"idRuta",class:"block text-sm font-medium leading-6 text-gray-900"},"idRuta",-1),et={class:"mt-2"},at=["id"],st={class:"sm:col-span-2"},ot=t("label",{for:"nombreRuta",class:"block text-sm font-medium leading-6 text-gray-900"},"Nombre de la ruta",-1),rt={class:"mt-2"},it=["id"],nt={key:0,class:"text-red-500 text-xs mt-1"},lt={class:"mt-6 flex items-center justify-end gap-x-6"},dt=["id"],ut=t("i",{class:"fa-solid fa-ban"},null,-1),ct=["disabled"],mt=t("i",{class:"fa-solid fa-floppy-disk mr-2"},null,-1),gt={__name:"FormularioRuta",props:{show:{type:Boolean,default:!1,hora:String},maxWidth:{type:String,default:"2xl"},closeable:{type:Boolean,default:!0},ruta:{type:Object,default:()=>({})},title:{type:String},modal:{type:String},op:{type:String}},emits:["close"],setup(a,{emit:c}){const m=a,x=c,e=C({idRuta:m.ruta.idRuta,nombreRuta:m.ruta.nombreRuta});O(()=>m.ruta,async s=>{e.idRuta=s.idRuta,e.nombreRuta=s.nombreRuta},{deep:!0});const o=y(""),g=async()=>{x("close"),e.reset()},l=s=>typeof s=="string"&&s.trim()!=="",f=async()=>{o.value=l(e.nombreRuta)?"":"Ingrese el nombre de la ruta",!o.value&&e.post(z("servicio.addRuta"),{onSuccess:()=>{g(),o.value=""}})};return(s,d)=>(_(),N(W,{show:a.show,"max-width":a.maxWidth,closeable:a.closeable,onClose:g},{default:R(()=>[t("div",X,[t("form",{onSubmit:D(f,["prevent"])},[t("div",J,[t("h2",K,w(a.title),1),Q,t("div",Y,[t("div",Z,[tt,t("div",et,[E(t("input",{type:"number",name:"idRuta","onUpdate:modelValue":d[0]||(d[0]=b=>u(e).idRuta=b),placeholder:"Ingrese id de la ruta",id:"idRuta"+a.op,class:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"},null,8,at),[[k,u(e).idRuta]])])])]),t("div",st,[ot,t("div",rt,[E(t("input",{type:"text",name:"nombreRuta",id:"nombreRuta"+a.op,"onUpdate:modelValue":d[1]||(d[1]=b=>u(e).nombreRuta=b),placeholder:"Ingrese el nombre de la ruta",class:"block w-full sm:w-1/2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"},null,8,it),[[k,u(e).nombreRuta]])]),o.value!=""?(_(),U("div",nt,w(o.value),1)):V("",!0)])]),t("div",lt,[t("button",{type:"button",id:"cerrar"+a.op,class:"text-sm font-semibold leading-6 bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 text-white py-2 px-4 rounded","data-bs.dismiss":"modal",onClick:g},[ut,h(" Cancelar")],8,dt),t("button",{type:"submit",class:"bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded",disabled:u(e).processing},[mt,h("Guardar")],8,ct)])],32)])]),_:1},8,["show","max-width","closeable"]))}},bt={class:"mt-2 bg-white p-4 shadow rounded-lg"},pt={class:"border-b border-gray-900/10 pb-12"},ft={class:"text-base font-semibold leading-7 text-gray-900"},ht=t("p",{class:"mt-1 text-sm leading-6 text-gray-600"},"Modifique el campo y guarde los cambios. ",-1),xt={class:"mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"},yt={class:"sm:col-span-1",hidden:""},_t=t("label",{for:"idRuta",class:"block text-sm font-medium leading-6 text-gray-900"},"idRuta",-1),vt={class:"mt-2"},Rt=["id"],wt={class:"sm:col-span-2"},$t=t("label",{for:"nombreRuta",class:"block text-sm font-medium leading-6 text-gray-900"},"Nombre de la ruta",-1),Et={class:"mt-2"},kt=["id"],St={key:0,class:"text-red-500 text-xs mt-1"},Bt={class:"mt-6 flex items-center justify-end gap-x-6"},It=["id"],Ct=t("i",{class:"fa-solid fa-ban"},null,-1),Nt=["disabled"],At=t("i",{class:"fa-solid fa-floppy-disk mr-2"},null,-1),Tt={__name:"FormularioActualizarRuta",props:{show:{type:Boolean,default:!1,hora:String},maxWidth:{type:String,default:"2xl"},closeable:{type:Boolean,default:!0},ruta:{type:Object,default:()=>({})},title:{type:String},modal:{type:String},op:{type:String}},emits:["close"],setup(a,{emit:c}){const m=a,x=c,e=C({_method:"PUT",idRuta:m.ruta.idRuta,nombreRuta:m.ruta.nombreRuta});O(()=>m.ruta,async s=>{e.idRuta=s.idRuta,e.nombreRuta=s.nombreRuta},{deep:!0});const o=y(""),g=async()=>{x("close"),e.reset()},l=s=>typeof s=="string"&&s.trim()!=="",f=async()=>{if(o.value=l(e.nombreRuta)?"":"Ingrese el número de la ruta",!o.value){var s=document.getElementById("idRuta2").value;e.post(z("servicio.actualizarRuta",s),{onSuccess:()=>{g(),o.value=""},onError:d=>{console.error("Error al actualizar la ruta:",d)}})}};return(s,d)=>(_(),N(W,{show:a.show,"max-width":a.maxWidth,closeable:a.closeable,onClose:g},{default:R(()=>[t("div",bt,[t("form",{onSubmit:D(f,["prevent"])},[t("div",pt,[t("h2",ft,w(a.title),1),ht,t("div",xt,[t("div",yt,[_t,t("div",vt,[E(t("input",{type:"number",name:"idRuta","onUpdate:modelValue":d[0]||(d[0]=b=>u(e).idRuta=b),placeholder:"Ingrese id de la ruta",id:"idRuta"+a.op,class:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"},null,8,Rt),[[k,u(e).idRuta]])])])]),t("div",wt,[$t,t("div",Et,[E(t("input",{type:"text",name:"nombreRuta",id:"nombreRuta"+a.op,"onUpdate:modelValue":d[1]||(d[1]=b=>u(e).nombreRuta=b),placeholder:"Ingrese el nombre de la ruta",class:"block w-full sm:w-1/2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"},null,8,kt),[[k,u(e).nombreRuta]])]),o.value!=""?(_(),U("div",St,w(o.value),1)):V("",!0)])]),t("div",Bt,[t("button",{type:"button",id:"cerrar"+a.op,class:"text-sm font-semibold leading-6 bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 text-white py-2 px-4 rounded","data-bs.dismiss":"modal",onClick:g},[Ct,h(" Cancelar")],8,It),t("button",{type:"submit",class:"bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded",disabled:u(e).processing},[At,h("Guardar")],8,Nt)])],32)])]),_:1},8,["show","max-width","closeable"]))}},jt={class:"mt-0 bg-white p-4 shadow rounded-lg h-5/6"},Mt=t("h2",{class:"font-bold text-center text-xl pt-0"},"Rutas",-1),Ot=t("div",{class:"bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mb-3"},null,-1),Dt={class:"py-3 flex flex-col md:flex-row md:items-start md:space-x-3 space-y-3 md:space-y-0"},Ut=t("i",{class:"fa fa-plus mr-2"},null,-1),Vt=t("i",{class:"fa fa-trash mr-2"},null,-1),Wt=t("thead",null,[t("tr",{class:"text-sm leading-normal"},[t("th",{class:"py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light"}),t("th",{class:"py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light"}," ID "),t("th",{class:"py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light"}," Ruta ")])],-1),j="xl",M=!0,Kt={__name:"Rutas",props:{ruta:{type:Object},usuario:{type:Object}},setup(a){B.use(T),B.use(T);const c=a,m=[{extend:"copyHtml5",text:'<i class="fa-solid fa-copy"></i> Copiar',className:"bg-cyan-500 hover:bg-cyan-600 text-white py-1/2 px-3 rounded mb-2 jump-icon",exportOptions:{columns:[0,2]},button:!0},{title:"Rutas registradas",extend:"excelHtml5",text:'<i class="fa-solid fa-file-excel"></i> Excel',className:"bg-green-600 hover:bg-green-600 text-white py-1/2 px-3 rounded mb-2 jump-icon",exportOptions:{columns:[1,2]}},{title:"Rutas registradas",extend:"pdfHtml5",text:'<i class="fa-solid fa-file-pdf"></i> PDF',className:"bg-red-500 hover:bg-red-600 text-white py-1/2 px-3 rounded mb-2 jump-icon",exportOptions:{columns:[1,2]}},{title:"Rutas registradas",extend:"print",text:'<i class="fa-solid fa-print"></i> Imprimir',className:"bg-blue-500 hover:bg-blue-600 text-white py-1/2 px-3 rounded mb-2 jump-icon",exportOptions:{columns:[1,2]}}],x=[{data:null,render:function(r,i,n,p){return`<input type="checkbox" class="ruta-checkboxes" data-id="${n.idRuta}" ">`}},{data:null,render:function(r,i,n,p){return p.row+1}},{data:"nombreRuta"},{data:null,render:function(r,i,n,p){return`<button class="editar-button" data-id="${n.idRuta}" style="display: flex; justify-content: center;"><i class="fa fa-pencil"></i></button>`}}],e=y(!1),o=y(!1),g=C({_method:"DELETE"}),l=y([]);var f={};const s=r=>{f=r,o.value=!0},d=()=>{e.value=!1},b=()=>{o.value=!1},F=r=>{l.value.includes(r)?l.value=l.value.filter(n=>n!==r):l.value.push(r);const i=document.getElementById("eliminarABtn");l.value.length>0?i.removeAttribute("disabled"):i.setAttribute("disabled","")};H(()=>{document.getElementById("rutasTablaId").addEventListener("click",r=>{const i=r.target;if(i.classList.contains("ruta-checkboxes")){const n=parseInt(i.getAttribute("data-id"));if(c.ruta){const p=c.ruta.find(S=>S.idRuta===n);p?F(p):console.log("No se tiene ruta")}}}),$("#rutasTablaId").on("click",".editar-button",function(){const r=$(this).data("id"),i=c.ruta.find(n=>n.idRuta===r);s(i)})});const L=()=>{const r=I.mixin({buttonsStyling:!0}),i=l.value.map(n=>n.nombreRuta).join(", ");r.fire({title:"¿Estas seguro que deseas eliminar la(s) ruta(s) seleccionada(s)?",html:`Rutas seleccionadas: ${i}`,icon:"warning",showCancelButton:!0,confirmButtonText:'<i class="fa-solid fa-check"></i> Confirmar',cancelButtonText:'<i class="fa-solid fa-ban"></i> Cancelar'}).then(async n=>{if(n.isConfirmed)try{const S=l.value.map(P=>P.idRuta).join(",");await g.post(route("servicio.eliminarRuta",S)),l.value=[];const A=document.getElementById("eliminarABtn");l.value.length>0?A.removeAttribute("disabled"):A.setAttribute("disabled",""),I.fire({title:"Ruta(s) eliminada(s) correctamente",icon:"success"}),window.flash={message:"Ruta(s) eliminada(s) correctamente",color:"green"}}catch(p){console.log("Error al eliminar varias rutas: "+p),I.fire({title:"Error",text:"Hubo un error al eliminar las rutas. Por favor, inténtalo de nuevo más tarde.",icon:"error"})}})};return(r,i)=>(_(),N(G,{title:"Rutas",usuario:c.usuario},{default:R(()=>[t("div",jt,[Mt,Ot,v(q),t("div",Dt,[t("button",{class:"bg-green-500 hover:bg-green-500 text-white font-semibold py-2 px-4 rounded",onClick:i[0]||(i[0]=n=>e.value=!0),"data-bs-toggle":"modal","data-bs-target":"#modalCreate"},[Ut,h("Agregar Ruta ")]),t("button",{id:"eliminarABtn",disabled:"",class:"bg-red-500 hover:bg-red-500 text-white font-semibold py-2 px-4 rounded",onClick:L},[Vt,h("Borrar Ruta ")])]),t("div",null,[v(u(B),{class:"w-full table-auto text-sm display nowrap stripe compact cell-border order-column",id:"rutasTablaId",name:"rutasTablaId",columns:x,data:a.ruta,options:{responsive:!0,autoWidth:!1,dom:"Bftrip",language:{search:"Buscar",zeroRecords:"No hay registros para mostrar",info:"Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",infoEmpty:"Mostrando registros del 0 al 0 de un total de 0 registros",infoFiltered:"(filtrado de un total de _MAX_ registros)",lengthMenu:"Mostrar _MENU_ registros",paginate:{first:"Primero",previous:"Anterior",next:"Siguiente",last:"Ultimo"}},buttons:[m]}},{default:R(()=>[Wt]),_:1},8,["data","options"])])]),v(gt,{show:e.value,"max-width":j,closeable:M,onClose:d,title:"Añadir ruta",op:"1",modal:"modalCreate",ruta:c.ruta},null,8,["show","ruta"]),v(Tt,{show:o.value,"max-width":j,closeable:M,onClose:b,title:"Editar ruta",op:"2",modal:"modalEdit",ruta:u(f)},null,8,["show","ruta"])]),_:1},8,["usuario"]))}};export{Kt as default};
