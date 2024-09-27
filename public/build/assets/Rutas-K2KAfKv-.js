import{_ as J}from"./PrincipalLayout-DvAzPC4j.js";import{u as D,i as U,r as v,o as w,j,e as E,a as t,g as P,t as k,w as S,d as u,k as I,c as V,l as W,f as y,z as L,C as B,D as M,s as K,b as _,x as F}from"./app-Ulf1_P01.js";import"./buttons.print-NLOxmzBh.js";import{S as T}from"./sweetalert2.esm.all-BGf-Fe8G.js";import{_ as q}from"./Modal-B4a8FicP.js";import{_ as Q}from"./Mensaje-BXyOukiH.js";import{E as Z}from"./jspdf.plugin.autotable-CqtI2_So.js";import{u as C,w as tt}from"./xlsx-DjuO7_Ju.js";/* empty css                                                */const et={class:"mt-2 bg-white p-4 shadow rounded-lg"},at={class:"border-b border-gray-900/10 pb-12"},st={class:"text-base font-semibold leading-7 text-gray-900"},ot={class:"mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"},rt={class:"sm:col-span-1",hidden:""},nt={class:"mt-2"},it=["id"],lt={class:"sm:col-span-2"},dt={class:"mt-2"},ut=["id"],ct={key:0,class:"text-red-500 text-xs mt-1"},mt={class:"mt-6 flex items-center justify-end gap-x-6"},gt=["id"],bt=["disabled"],pt={__name:"FormularioRuta",props:{show:{type:Boolean,default:!1,hora:String},maxWidth:{type:String,default:"2xl"},closeable:{type:Boolean,default:!0},ruta:{type:Object,default:()=>({})},title:{type:String},modal:{type:String},op:{type:String}},emits:["close"],setup(r,{emit:m}){const g=r,h=m,o=D({idRuta:g.ruta.idRuta,nombreRuta:g.ruta.nombreRuta});U(()=>g.ruta,async s=>{o.idRuta=s.idRuta,o.nombreRuta=s.nombreRuta},{deep:!0});const l=v(""),c=async()=>{h("close"),o.reset()},x=s=>typeof s=="string"&&s.trim()!=="",R=async()=>{l.value=x(o.nombreRuta)?"":"Ingrese el nombre de la ruta",!l.value&&o.post(L("principal.addRuta"),{onSuccess:()=>{c(),l.value=""}})};return(s,e)=>(w(),j(q,{show:r.show,"max-width":r.maxWidth,closeable:r.closeable,onClose:c},{default:E(()=>[t("div",et,[t("form",{onSubmit:P(R,["prevent"])},[t("div",at,[t("h2",st,k(r.title),1),e[4]||(e[4]=t("p",{class:"mt-1 text-sm leading-6 text-gray-600"},"Rellene el campo para registrar una nueva ruta ",-1)),t("div",ot,[t("div",rt,[e[2]||(e[2]=t("label",{for:"idRuta",class:"block text-sm font-medium leading-6 text-gray-900"},"idRuta",-1)),t("div",nt,[S(t("input",{type:"number",name:"idRuta","onUpdate:modelValue":e[0]||(e[0]=b=>u(o).idRuta=b),placeholder:"Ingrese id de la ruta",id:"idRuta"+r.op,class:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"},null,8,it),[[I,u(o).idRuta]])])])]),t("div",lt,[e[3]||(e[3]=t("label",{for:"nombreRuta",class:"block text-sm font-medium leading-6 text-gray-900"},"Nombre de la ruta",-1)),t("div",dt,[S(t("input",{type:"text",name:"nombreRuta",id:"nombreRuta"+r.op,"onUpdate:modelValue":e[1]||(e[1]=b=>u(o).nombreRuta=b),placeholder:"Ingrese el nombre de la ruta",class:"block w-full sm:w-1/2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"},null,8,ut),[[I,u(o).nombreRuta]])]),l.value!=""?(w(),V("div",ct,k(l.value),1)):W("",!0)])]),t("div",mt,[t("button",{type:"button",id:"cerrar"+r.op,class:"text-sm font-semibold leading-6 bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 text-white py-2 px-4 rounded","data-bs.dismiss":"modal",onClick:c},e[5]||(e[5]=[t("i",{class:"fa-solid fa-ban"},null,-1),y(" Cancelar")]),8,gt),t("button",{type:"submit",class:"bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded",disabled:u(o).processing},e[6]||(e[6]=[t("i",{class:"fa-solid fa-floppy-disk mr-2"},null,-1),y("Guardar")]),8,bt)])],32)])]),_:1},8,["show","max-width","closeable"]))}},ft={class:"mt-2 bg-white p-4 shadow rounded-lg"},xt={class:"border-b border-gray-900/10 pb-12"},yt={class:"text-base font-semibold leading-7 text-gray-900"},ht={class:"mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"},Rt={class:"sm:col-span-1",hidden:""},vt={class:"mt-2"},wt=["id"],_t={class:"sm:col-span-2"},Et={class:"mt-2"},$t=["id"],kt={key:0,class:"text-red-500 text-xs mt-1"},St={class:"mt-6 flex items-center justify-end gap-x-6"},It=["id"],Bt=["disabled"],Tt={__name:"FormularioActualizarRuta",props:{show:{type:Boolean,default:!1,hora:String},maxWidth:{type:String,default:"2xl"},closeable:{type:Boolean,default:!0},ruta:{type:Object,default:()=>({})},title:{type:String},modal:{type:String},op:{type:String}},emits:["close"],setup(r,{emit:m}){const g=r,h=m,o=D({_method:"PUT",idRuta:g.ruta.idRuta,nombreRuta:g.ruta.nombreRuta});U(()=>g.ruta,async s=>{o.idRuta=s.idRuta,o.nombreRuta=s.nombreRuta},{deep:!0});const l=v(""),c=async()=>{h("close"),o.reset()},x=s=>typeof s=="string"&&s.trim()!=="",R=async()=>{if(l.value=x(o.nombreRuta)?"":"Ingrese el número de la ruta",!l.value){var s=document.getElementById("idRuta2").value;o.post(L("principal.actualizarRuta",s),{onSuccess:()=>{c(),l.value=""},onError:e=>{console.error("Error al actualizar la ruta:",e)}})}};return(s,e)=>(w(),j(q,{show:r.show,"max-width":r.maxWidth,closeable:r.closeable,onClose:c},{default:E(()=>[t("div",ft,[t("form",{onSubmit:P(R,["prevent"])},[t("div",xt,[t("h2",yt,k(r.title),1),e[4]||(e[4]=t("p",{class:"mt-1 text-sm leading-6 text-gray-600"},"Modifique el campo y guarde los cambios. ",-1)),t("div",ht,[t("div",Rt,[e[2]||(e[2]=t("label",{for:"idRuta",class:"block text-sm font-medium leading-6 text-gray-900"},"idRuta",-1)),t("div",vt,[S(t("input",{type:"number",name:"idRuta","onUpdate:modelValue":e[0]||(e[0]=b=>u(o).idRuta=b),placeholder:"Ingrese id de la ruta",id:"idRuta"+r.op,class:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"},null,8,wt),[[I,u(o).idRuta]])])])]),t("div",_t,[e[3]||(e[3]=t("label",{for:"nombreRuta",class:"block text-sm font-medium leading-6 text-gray-900"},"Nombre de la ruta",-1)),t("div",Et,[S(t("input",{type:"text",name:"nombreRuta",id:"nombreRuta"+r.op,"onUpdate:modelValue":e[1]||(e[1]=b=>u(o).nombreRuta=b),placeholder:"Ingrese el nombre de la ruta",class:"block w-full sm:w-1/2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"},null,8,$t),[[I,u(o).nombreRuta]])]),l.value!=""?(w(),V("div",kt,k(l.value),1)):W("",!0)])]),t("div",St,[t("button",{type:"button",id:"cerrar"+r.op,class:"text-sm font-semibold leading-6 bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 text-white py-2 px-4 rounded","data-bs.dismiss":"modal",onClick:c},e[5]||(e[5]=[t("i",{class:"fa-solid fa-ban"},null,-1),y(" Cancelar")]),8,It),t("button",{type:"submit",class:"bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded",disabled:u(o).processing},e[6]||(e[6]=[t("i",{class:"fa-solid fa-floppy-disk mr-2"},null,-1),y("Guardar")]),8,Bt)])],32)])]),_:1},8,["show","max-width","closeable"]))}},Ct={class:"mt-0 bg-white p-4 shadow rounded-lg h-5/6"},Dt={class:"py-3 flex flex-col md:flex-row md:items-start md:space-x-3 space-y-3 md:space-y-0"},z="xl",O=!0,Wt={__name:"Rutas",props:{ruta:{type:Object},usuario:{type:Object}},setup(r){B.use(M),B.use(M);const m=r,g=(n="Documento")=>{const a=new Z("portrait");a.setFontSize(12),a.text(n,14,22);const i=new Date().toLocaleDateString();a.setFontSize(8),a.text(`Fecha: ${i}`,175,22);const p=["ID","Ruta"],f=[];F(()=>{$("#rutasTablaId").DataTable().rows({search:"applied"}).data().each(N=>{f.push([N.idRuta,N.nombreRuta])}),a.autoTable({head:[p],body:f,startY:24}),a.save(`${n}.pdf`)})},h=()=>{F(()=>{const i=$("#rutasTablaId").DataTable().rows({search:"applied"}).data().toArray().map(f=>({ID:f.idRuta,Ruta:f.nombreRuta})),d=C.json_to_sheet(i),p=C.book_new();C.book_append_sheet(p,d,"Rutas Registradas"),tt(p,"Rutas Registradas.xlsx")})},o=[{extend:"copyHtml5",text:'<i class="fa-solid fa-copy"></i> Copiar',className:"bg-cyan-500 hover:bg-cyan-600 text-white py-1/2 px-3 rounded mb-2 jump-icon",exportOptions:{columns:[0,2]},button:!0},{title:"Rutas Registradas",text:'<i class="fa-solid fa-file-excel"></i> Excel',className:"bg-green-600 hover:bg-green-600 text-white py-1/2 px-3 rounded mb-2 jump-icon",action:()=>h()},{title:"Rutas registradas",text:'<i class="fa-solid fa-file-pdf"></i> PDF',className:"bg-red-500 hover:bg-red-600 text-white py-1/2 px-3 rounded mb-2 jump-icon",action:()=>g(m.title||"Rutas Registradas")},{title:"Rutas registradas",extend:"print",text:'<i class="fa-solid fa-print"></i> Imprimir',className:"bg-blue-500 hover:bg-blue-600 text-white py-1/2 px-3 rounded mb-2 jump-icon",exportOptions:{columns:[1,2]}}],l=[{data:null,render:function(n,a,i,d){return`<input type="checkbox" class="ruta-checkboxes" data-id="${i.idRuta}" ">`}},{data:null,render:function(n,a,i,d){return d.row+1}},{data:"nombreRuta"},{data:null,render:function(n,a,i,d){return`<button class="editar-button" data-id="${i.idRuta}" style="display: flex; justify-content: center;"><i class="fa fa-pencil"></i></button>`}}],c=v(!1),x=v(!1),R=D({_method:"DELETE"}),s=v([]);var e={};const b=n=>{e=n,x.value=!0},G=()=>{c.value=!1},H=()=>{x.value=!1},X=n=>{s.value.includes(n)?s.value=s.value.filter(i=>i!==n):s.value.push(n);const a=document.getElementById("eliminarABtn");s.value.length>0?a.removeAttribute("disabled"):a.setAttribute("disabled","")};K(()=>{document.getElementById("rutasTablaId").addEventListener("click",n=>{const a=n.target;if(a.classList.contains("ruta-checkboxes")){const i=parseInt(a.getAttribute("data-id"));if(m.ruta){const d=m.ruta.find(p=>p.idRuta===i);d?X(d):console.log("No se tiene ruta")}}}),$("#rutasTablaId").on("click",".editar-button",function(){const n=$(this).data("id"),a=m.ruta.find(i=>i.idRuta===n);b(a)})});const Y=()=>{const n=T.mixin({buttonsStyling:!0}),a=s.value.map(i=>i.nombreRuta).join(", ");n.fire({title:"¿Estas seguro que deseas eliminar la(s) ruta(s) seleccionada(s)?",html:`Rutas seleccionadas: ${a}`,icon:"warning",showCancelButton:!0,confirmButtonText:'<i class="fa-solid fa-check"></i> Confirmar',cancelButtonText:'<i class="fa-solid fa-ban"></i> Cancelar'}).then(async i=>{if(i.isConfirmed)try{const p=s.value.map(A=>A.idRuta).join(",");await R.post(route("principal.eliminarRuta",p)),s.value=[];const f=document.getElementById("eliminarABtn");s.value.length>0?f.removeAttribute("disabled"):f.setAttribute("disabled",""),T.fire({title:"Ruta(s) eliminada(s) correctamente",icon:"success"}),window.flash={message:"Ruta(s) eliminada(s) correctamente",color:"green"}}catch(d){console.log("Error al eliminar varias rutas: "+d),T.fire({title:"Error",text:"Hubo un error al eliminar las rutas. Por favor, inténtalo de nuevo más tarde.",icon:"error"})}})};return(n,a)=>(w(),j(J,{title:"Rutas",usuario:m.usuario},{default:E(()=>[t("div",Ct,[a[4]||(a[4]=t("h2",{class:"font-bold text-center text-xl pt-0"},"Rutas",-1)),a[5]||(a[5]=t("div",{class:"bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mb-3"},null,-1)),_(Q),t("div",Dt,[t("button",{class:"bg-green-500 hover:bg-green-500 text-white font-semibold py-2 px-4 rounded",onClick:a[0]||(a[0]=i=>c.value=!0),"data-bs-toggle":"modal","data-bs-target":"#modalCreate"},a[1]||(a[1]=[t("i",{class:"fa fa-plus mr-2"},null,-1),y("Agregar Ruta ")])),t("button",{id:"eliminarABtn",disabled:"",class:"bg-red-500 hover:bg-red-500 text-white font-semibold py-2 px-4 rounded",onClick:Y},a[2]||(a[2]=[t("i",{class:"fa fa-trash mr-2"},null,-1),y("Borrar Ruta ")]))]),t("div",null,[_(u(B),{class:"w-full table-auto text-sm display nowrap stripe compact cell-border order-column",id:"rutasTablaId",name:"rutasTablaId",columns:l,data:r.ruta,options:{responsive:!0,autoWidth:!1,dom:"Bftrip",language:{search:"Buscar",zeroRecords:"No hay registros para mostrar",info:"Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",infoEmpty:"Mostrando registros del 0 al 0 de un total de 0 registros",infoFiltered:"(filtrado de un total de _MAX_ registros)",lengthMenu:"Mostrar _MENU_ registros",paginate:{first:"Primero",previous:"Anterior",next:"Siguiente",last:"Ultimo"}},buttons:[o]}},{default:E(()=>a[3]||(a[3]=[t("thead",null,[t("tr",{class:"text-sm leading-normal"},[t("th",{class:"py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light"}),t("th",{class:"py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light"}," ID "),t("th",{class:"py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light"}," Ruta ")])],-1)])),_:1},8,["data","options"])])]),_(pt,{show:c.value,"max-width":z,closeable:O,onClose:G,title:"Añadir ruta",op:"1",modal:"modalCreate",ruta:m.ruta},null,8,["show","ruta"]),_(Tt,{show:x.value,"max-width":z,closeable:O,onClose:H,title:"Editar ruta",op:"2",modal:"modalEdit",ruta:u(e)},null,8,["show","ruta"])]),_:1},8,["usuario"]))}};export{Wt as default};
