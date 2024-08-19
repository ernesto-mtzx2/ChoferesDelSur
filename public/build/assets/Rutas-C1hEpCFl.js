import{_ as J}from"./PrincipalLayout-B2-KicTi.js";import{u as D,i as U,r as R,o as v,j,e as E,a as t,g as L,t as k,w as S,d as u,k as I,c as P,l as V,f as x,L as B,D as M,s as K,b as w,x as F}from"./app-efQr6Bw9.js";import"./buttons.print-C19jCs2s.js";import{S as T}from"./sweetalert2.all-_XGc1PfW.js";import{_ as W}from"./Modal-DaiaiGkV.js";import{r as q}from"./index-CvD1npnB.js";import{_ as Q}from"./Mensaje-DIWc4nSq.js";import{E as Z}from"./jspdf.plugin.autotable-Dt7B0CLS.js";import{u as C,w as tt}from"./xlsx-D5JNrnKm.js";/* empty css                                                */const et={class:"mt-2 bg-white p-4 shadow rounded-lg"},at={class:"border-b border-gray-900/10 pb-12"},st={class:"text-base font-semibold leading-7 text-gray-900"},ot=t("p",{class:"mt-1 text-sm leading-6 text-gray-600"},"Rellene el campo para registrar una nueva ruta ",-1),rt={class:"mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"},it={class:"sm:col-span-1",hidden:""},nt=t("label",{for:"idRuta",class:"block text-sm font-medium leading-6 text-gray-900"},"idRuta",-1),lt={class:"mt-2"},dt=["id"],ut={class:"sm:col-span-2"},ct=t("label",{for:"nombreRuta",class:"block text-sm font-medium leading-6 text-gray-900"},"Nombre de la ruta",-1),mt={class:"mt-2"},gt=["id"],bt={key:0,class:"text-red-500 text-xs mt-1"},pt={class:"mt-6 flex items-center justify-end gap-x-6"},ft=["id"],ht=t("i",{class:"fa-solid fa-ban"},null,-1),xt=["disabled"],yt=t("i",{class:"fa-solid fa-floppy-disk mr-2"},null,-1),_t={__name:"FormularioRuta",props:{show:{type:Boolean,default:!1,hora:String},maxWidth:{type:String,default:"2xl"},closeable:{type:Boolean,default:!0},ruta:{type:Object,default:()=>({})},title:{type:String},modal:{type:String},op:{type:String}},emits:["close"],setup(o,{emit:m}){const g=o,y=m,a=D({idRuta:g.ruta.idRuta,nombreRuta:g.ruta.nombreRuta});U(()=>g.ruta,async e=>{a.idRuta=e.idRuta,a.nombreRuta=e.nombreRuta},{deep:!0});const l=R(""),c=async()=>{y("close"),a.reset()},h=e=>typeof e=="string"&&e.trim()!=="",_=async()=>{l.value=h(a.nombreRuta)?"":"Ingrese el nombre de la ruta",!l.value&&a.post(q("principal.addRuta"),{onSuccess:()=>{c(),l.value=""}})};return(e,n)=>(v(),j(W,{show:o.show,"max-width":o.maxWidth,closeable:o.closeable,onClose:c},{default:E(()=>[t("div",et,[t("form",{onSubmit:L(_,["prevent"])},[t("div",at,[t("h2",st,k(o.title),1),ot,t("div",rt,[t("div",it,[nt,t("div",lt,[S(t("input",{type:"number",name:"idRuta","onUpdate:modelValue":n[0]||(n[0]=b=>u(a).idRuta=b),placeholder:"Ingrese id de la ruta",id:"idRuta"+o.op,class:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"},null,8,dt),[[I,u(a).idRuta]])])])]),t("div",ut,[ct,t("div",mt,[S(t("input",{type:"text",name:"nombreRuta",id:"nombreRuta"+o.op,"onUpdate:modelValue":n[1]||(n[1]=b=>u(a).nombreRuta=b),placeholder:"Ingrese el nombre de la ruta",class:"block w-full sm:w-1/2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"},null,8,gt),[[I,u(a).nombreRuta]])]),l.value!=""?(v(),P("div",bt,k(l.value),1)):V("",!0)])]),t("div",pt,[t("button",{type:"button",id:"cerrar"+o.op,class:"text-sm font-semibold leading-6 bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 text-white py-2 px-4 rounded","data-bs.dismiss":"modal",onClick:c},[ht,x(" Cancelar")],8,ft),t("button",{type:"submit",class:"bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded",disabled:u(a).processing},[yt,x("Guardar")],8,xt)])],32)])]),_:1},8,["show","max-width","closeable"]))}},Rt={class:"mt-2 bg-white p-4 shadow rounded-lg"},vt={class:"border-b border-gray-900/10 pb-12"},wt={class:"text-base font-semibold leading-7 text-gray-900"},$t=t("p",{class:"mt-1 text-sm leading-6 text-gray-600"},"Modifique el campo y guarde los cambios. ",-1),Et={class:"mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"},kt={class:"sm:col-span-1",hidden:""},St=t("label",{for:"idRuta",class:"block text-sm font-medium leading-6 text-gray-900"},"idRuta",-1),It={class:"mt-2"},Bt=["id"],Tt={class:"sm:col-span-2"},Ct=t("label",{for:"nombreRuta",class:"block text-sm font-medium leading-6 text-gray-900"},"Nombre de la ruta",-1),Dt={class:"mt-2"},jt=["id"],At={key:0,class:"text-red-500 text-xs mt-1"},Nt={class:"mt-6 flex items-center justify-end gap-x-6"},Mt=["id"],Ft=t("i",{class:"fa-solid fa-ban"},null,-1),zt=["disabled"],Ot=t("i",{class:"fa-solid fa-floppy-disk mr-2"},null,-1),Ut={__name:"FormularioActualizarRuta",props:{show:{type:Boolean,default:!1,hora:String},maxWidth:{type:String,default:"2xl"},closeable:{type:Boolean,default:!0},ruta:{type:Object,default:()=>({})},title:{type:String},modal:{type:String},op:{type:String}},emits:["close"],setup(o,{emit:m}){const g=o,y=m,a=D({_method:"PUT",idRuta:g.ruta.idRuta,nombreRuta:g.ruta.nombreRuta});U(()=>g.ruta,async e=>{a.idRuta=e.idRuta,a.nombreRuta=e.nombreRuta},{deep:!0});const l=R(""),c=async()=>{y("close"),a.reset()},h=e=>typeof e=="string"&&e.trim()!=="",_=async()=>{if(l.value=h(a.nombreRuta)?"":"Ingrese el número de la ruta",!l.value){var e=document.getElementById("idRuta2").value;a.post(q("principal.actualizarRuta",e),{onSuccess:()=>{c(),l.value=""},onError:n=>{console.error("Error al actualizar la ruta:",n)}})}};return(e,n)=>(v(),j(W,{show:o.show,"max-width":o.maxWidth,closeable:o.closeable,onClose:c},{default:E(()=>[t("div",Rt,[t("form",{onSubmit:L(_,["prevent"])},[t("div",vt,[t("h2",wt,k(o.title),1),$t,t("div",Et,[t("div",kt,[St,t("div",It,[S(t("input",{type:"number",name:"idRuta","onUpdate:modelValue":n[0]||(n[0]=b=>u(a).idRuta=b),placeholder:"Ingrese id de la ruta",id:"idRuta"+o.op,class:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"},null,8,Bt),[[I,u(a).idRuta]])])])]),t("div",Tt,[Ct,t("div",Dt,[S(t("input",{type:"text",name:"nombreRuta",id:"nombreRuta"+o.op,"onUpdate:modelValue":n[1]||(n[1]=b=>u(a).nombreRuta=b),placeholder:"Ingrese el nombre de la ruta",class:"block w-full sm:w-1/2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"},null,8,jt),[[I,u(a).nombreRuta]])]),l.value!=""?(v(),P("div",At,k(l.value),1)):V("",!0)])]),t("div",Nt,[t("button",{type:"button",id:"cerrar"+o.op,class:"text-sm font-semibold leading-6 bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 text-white py-2 px-4 rounded","data-bs.dismiss":"modal",onClick:c},[Ft,x(" Cancelar")],8,Mt),t("button",{type:"submit",class:"bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded",disabled:u(a).processing},[Ot,x("Guardar")],8,zt)])],32)])]),_:1},8,["show","max-width","closeable"]))}},Lt={class:"mt-0 bg-white p-4 shadow rounded-lg h-5/6"},Pt=t("h2",{class:"font-bold text-center text-xl pt-0"},"Rutas",-1),Vt=t("div",{class:"bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mb-3"},null,-1),Wt={class:"py-3 flex flex-col md:flex-row md:items-start md:space-x-3 space-y-3 md:space-y-0"},qt=t("i",{class:"fa fa-plus mr-2"},null,-1),Gt=t("i",{class:"fa fa-trash mr-2"},null,-1),Ht=t("thead",null,[t("tr",{class:"text-sm leading-normal"},[t("th",{class:"py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light"}),t("th",{class:"py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light"}," ID "),t("th",{class:"py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light"}," Ruta ")])],-1),z="xl",O=!0,re={__name:"Rutas",props:{ruta:{type:Object},usuario:{type:Object}},setup(o){B.use(M),B.use(M);const m=o,g=(r="Documento")=>{const s=new Z("portrait");s.setFontSize(12),s.text(r,14,22);const i=new Date().toLocaleDateString();s.setFontSize(8),s.text(`Fecha: ${i}`,175,22);const p=["ID","Ruta"],f=[];F(()=>{$("#rutasTablaId").DataTable().rows({search:"applied"}).data().each(N=>{f.push([N.idRuta,N.nombreRuta])}),s.autoTable({head:[p],body:f,startY:24}),s.save(`${r}.pdf`)})},y=()=>{F(()=>{const i=$("#rutasTablaId").DataTable().rows({search:"applied"}).data().toArray().map(f=>({ID:f.idRuta,Ruta:f.nombreRuta})),d=C.json_to_sheet(i),p=C.book_new();C.book_append_sheet(p,d,"Rutas Registradas"),tt(p,"Rutas Registradas.xlsx")})},a=[{extend:"copyHtml5",text:'<i class="fa-solid fa-copy"></i> Copiar',className:"bg-cyan-500 hover:bg-cyan-600 text-white py-1/2 px-3 rounded mb-2 jump-icon",exportOptions:{columns:[0,2]},button:!0},{title:"Rutas Registradas",text:'<i class="fa-solid fa-file-excel"></i> Excel',className:"bg-green-600 hover:bg-green-600 text-white py-1/2 px-3 rounded mb-2 jump-icon",action:()=>y()},{title:"Rutas registradas",text:'<i class="fa-solid fa-file-pdf"></i> PDF',className:"bg-red-500 hover:bg-red-600 text-white py-1/2 px-3 rounded mb-2 jump-icon",action:()=>g(m.title||"Rutas Registradas")},{title:"Rutas registradas",extend:"print",text:'<i class="fa-solid fa-print"></i> Imprimir',className:"bg-blue-500 hover:bg-blue-600 text-white py-1/2 px-3 rounded mb-2 jump-icon",exportOptions:{columns:[1,2]}}],l=[{data:null,render:function(r,s,i,d){return`<input type="checkbox" class="ruta-checkboxes" data-id="${i.idRuta}" ">`}},{data:null,render:function(r,s,i,d){return d.row+1}},{data:"nombreRuta"},{data:null,render:function(r,s,i,d){return`<button class="editar-button" data-id="${i.idRuta}" style="display: flex; justify-content: center;"><i class="fa fa-pencil"></i></button>`}}],c=R(!1),h=R(!1),_=D({_method:"DELETE"}),e=R([]);var n={};const b=r=>{n=r,h.value=!0},G=()=>{c.value=!1},H=()=>{h.value=!1},X=r=>{e.value.includes(r)?e.value=e.value.filter(i=>i!==r):e.value.push(r);const s=document.getElementById("eliminarABtn");e.value.length>0?s.removeAttribute("disabled"):s.setAttribute("disabled","")};K(()=>{document.getElementById("rutasTablaId").addEventListener("click",r=>{const s=r.target;if(s.classList.contains("ruta-checkboxes")){const i=parseInt(s.getAttribute("data-id"));if(m.ruta){const d=m.ruta.find(p=>p.idRuta===i);d?X(d):console.log("No se tiene ruta")}}}),$("#rutasTablaId").on("click",".editar-button",function(){const r=$(this).data("id"),s=m.ruta.find(i=>i.idRuta===r);b(s)})});const Y=()=>{const r=T.mixin({buttonsStyling:!0}),s=e.value.map(i=>i.nombreRuta).join(", ");r.fire({title:"¿Estas seguro que deseas eliminar la(s) ruta(s) seleccionada(s)?",html:`Rutas seleccionadas: ${s}`,icon:"warning",showCancelButton:!0,confirmButtonText:'<i class="fa-solid fa-check"></i> Confirmar',cancelButtonText:'<i class="fa-solid fa-ban"></i> Cancelar'}).then(async i=>{if(i.isConfirmed)try{const p=e.value.map(A=>A.idRuta).join(",");await _.post(route("principal.eliminarRuta",p)),e.value=[];const f=document.getElementById("eliminarABtn");e.value.length>0?f.removeAttribute("disabled"):f.setAttribute("disabled",""),T.fire({title:"Ruta(s) eliminada(s) correctamente",icon:"success"}),window.flash={message:"Ruta(s) eliminada(s) correctamente",color:"green"}}catch(d){console.log("Error al eliminar varias rutas: "+d),T.fire({title:"Error",text:"Hubo un error al eliminar las rutas. Por favor, inténtalo de nuevo más tarde.",icon:"error"})}})};return(r,s)=>(v(),j(J,{title:"Rutas",usuario:m.usuario},{default:E(()=>[t("div",Lt,[Pt,Vt,w(Q),t("div",Wt,[t("button",{class:"bg-green-500 hover:bg-green-500 text-white font-semibold py-2 px-4 rounded",onClick:s[0]||(s[0]=i=>c.value=!0),"data-bs-toggle":"modal","data-bs-target":"#modalCreate"},[qt,x("Agregar Ruta ")]),t("button",{id:"eliminarABtn",disabled:"",class:"bg-red-500 hover:bg-red-500 text-white font-semibold py-2 px-4 rounded",onClick:Y},[Gt,x("Borrar Ruta ")])]),t("div",null,[w(u(B),{class:"w-full table-auto text-sm display nowrap stripe compact cell-border order-column",id:"rutasTablaId",name:"rutasTablaId",columns:l,data:o.ruta,options:{responsive:!0,autoWidth:!1,dom:"Bftrip",language:{search:"Buscar",zeroRecords:"No hay registros para mostrar",info:"Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",infoEmpty:"Mostrando registros del 0 al 0 de un total de 0 registros",infoFiltered:"(filtrado de un total de _MAX_ registros)",lengthMenu:"Mostrar _MENU_ registros",paginate:{first:"Primero",previous:"Anterior",next:"Siguiente",last:"Ultimo"}},buttons:[a]}},{default:E(()=>[Ht]),_:1},8,["data","options"])])]),w(_t,{show:c.value,"max-width":z,closeable:O,onClose:G,title:"Añadir ruta",op:"1",modal:"modalCreate",ruta:m.ruta},null,8,["show","ruta"]),w(Ut,{show:h.value,"max-width":z,closeable:O,onClose:H,title:"Editar ruta",op:"2",modal:"modalEdit",ruta:u(n)},null,8,["show","ruta"])]),_:1},8,["usuario"]))}};export{re as default};
