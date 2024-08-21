import{u as N,j as L,b as h,o as n,k as j,f as A,a as e,h as V,t as x,w as y,e as l,l as k,c as v,m as w,F as W,p as z,q as H,g as c,L as B,D as U,i as G,d as I}from"./app-Dl67xzYR.js";import"./buttons.print-OqsN6yBt.js";import{S as C}from"./sweetalert2.all-BfAa2hX5.js";import{_ as X}from"./Mensaje-DnlosXOW.js";import{_ as J}from"./RHLayout-BwIGFeok.js";import{_ as q}from"./Modal-Bu6Brgew.js";/* empty css                                                */import"./jspdf.plugin.autotable-CJFzle8i.js";const K={class:"mt-2 bg-white p-4 shadow rounded-lg"},Q={class:"border-b border-gray-900/10 pb-12"},Y={class:"text-base font-semibold leading-7 text-gray-900"},Z=e("p",{class:"mt-1 text-sm leading-6 text-gray-600 mb-4"},[c("Rellene el formulario para poder registrar a un nuevo socio o prestador. Los campos con "),e("span",{class:"text-red-500"},"*"),c(" son obligatorios. ")],-1),ee={class:"flex flex-wrap -mx-4"},te={class:"sm:col-span-2"},oe={class:"sm:col-span-1",hidden:""},ie=e("label",{for:"idDirectivo",class:"block text-sm font-medium leading-6 text-gray-900"},"idDirectivo",-1),se={class:"mt-2"},re=["id"],le={class:"sm:col-span-2 px-4"},ae=e("label",{for:"apellidoP",class:"block text-sm font-medium leading-6 text-gray-900"},[c("Apellido Paterno "),e("span",{class:"text-red-500"},"*")],-1),de={class:"mt-2"},ne=["id"],ce={key:0,class:"text-red-500 text-xs mt-1"},pe={class:"sm:col-span-2 px-4"},me=e("label",{for:"apellidoM",class:"block text-sm font-medium leading-6 text-gray-900"},[c("Apellido Materno "),e("span",{class:"text-red-500"},"*")],-1),ue={class:"mt-2"},ge=["id"],ve={key:0,class:"text-red-500 text-xs mt-1"},be={class:"sm:col-span-2 px-4"},xe=e("label",{for:"nombre",class:"block text-sm font-medium leading-6 text-gray-900"},[c("Nombres "),e("span",{class:"text-red-500"},"*")],-1),he={class:"mt-2"},fe=["id"],ye={key:0,class:"text-red-500 text-xs mt-1"},_e={class:"sm:col-span-2 px-4"},De=e("label",{for:"tipoDirectivo",class:"block text-sm font-medium leading-6 text-gray-900"},[c("Tipo de Directivo "),e("span",{class:"text-red-500"},"*")],-1),we={class:"mt-2"},$e=["id"],ke=e("option",{value:"",disabled:"",selected:""},"Seleccione un tipo de directivo",-1),Me=["value"],Se={key:0,class:"text-red-500 text-xs mt-1"},Pe={class:"mt-6 flex items-center justify-end gap-x-6"},Ee=["id"],Te=e("i",{class:"fa-solid fa-ban"},null,-1),Ie=["disabled"],Ae=e("i",{class:"fa-solid fa-floppy-disk mr-2"},null,-1),Be={__name:"FormularioSP",props:{show:{type:Boolean,default:!1,hora:String},maxWidth:{type:String,default:"2xl"},closeable:{type:Boolean,default:!0},directivo:{type:Object,default:()=>({})},tipDirectivo:{type:Object,default:()=>({})},title:{type:String},modal:{type:String},op:{type:String}},emits:["close"],setup(s,{emit:b}){const p=s,S=b,t=N({idDirectivo:p.directivo.idDirectivo,nombre:p.directivo.nombre,apellidoP:p.directivo.apellidoP,apellidoM:p.directivo.apellidoM,tipDirectivo:p.directivo.idTipoDirectivo});L(()=>p.directivo,async r=>{t.idDirectivo=r.idDirectivo,t.nombre=r.nombre,t.apellidoP=r.apellidoP,t.apellidoM=r.apellidoM,t.tipDirectivo=r.idTipoDirectivo},{deep:!0});const m=h(""),g=h(""),a=h(""),u=h(""),_=async()=>{S("close"),t.reset()},D=r=>typeof r=="string"&&r.trim()!=="",P=r=>r!=null,E=async()=>{m.value=D(t.nombre)?"":"Ingrese el nombre",g.value=D(t.apellidoP)?"":"Ingrese el apellido Paterno",a.value=D(t.apellidoM)?"":"Ingrese el apellido Materno",u.value=P(t.tipDirectivo)?"":"Seleccione el tipo de directivo",!(m.value||g.value||a.value||u.value)&&t.post(route("rh.addDirectivo"),{onSuccess:()=>{_(),m.value="",g.value="",a.value="",u.value=""}})};return(r,i)=>(n(),j(q,{show:s.show,"max-width":s.maxWidth,closeable:s.closeable,onClose:_},{default:A(()=>[e("div",K,[e("form",{onSubmit:V(E,["prevent"])},[e("div",Q,[e("h2",Y,x(s.title),1),Z,e("div",ee,[e("div",te,[e("div",oe,[ie,e("div",se,[y(e("input",{type:"number",name:"idDirectivo","onUpdate:modelValue":i[0]||(i[0]=o=>l(t).idDirectivo=o),placeholder:"Ingrese id del directivo",id:"idDirectivo"+s.op,class:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"},null,8,re),[[k,l(t).idDirectivo]])])])]),e("div",le,[ae,e("div",de,[y(e("input",{type:"text",name:"apellidoP",id:"apellidoP"+s.op,"onUpdate:modelValue":i[1]||(i[1]=o=>l(t).apellidoP=o),placeholder:"Ingrese el apellido paterno",class:"block w-64 rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"},null,8,ne),[[k,l(t).apellidoP]])]),g.value!=""?(n(),v("div",ce,x(g.value),1)):w("",!0)]),e("div",pe,[me,e("div",ue,[y(e("input",{type:"text",name:"apellidoM",id:"apellidoM"+s.op,"onUpdate:modelValue":i[2]||(i[2]=o=>l(t).apellidoM=o),placeholder:"Ingrese el apellido materno",class:"block w-64 rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"},null,8,ge),[[k,l(t).apellidoM]])]),a.value!=""?(n(),v("div",ve,x(a.value),1)):w("",!0)]),e("div",be,[xe,e("div",he,[y(e("input",{type:"text",name:"nombre",id:"nombre"+s.op,"onUpdate:modelValue":i[3]||(i[3]=o=>l(t).nombre=o),placeholder:"Ingrese el nombre",class:"block w-64 rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"},null,8,fe),[[k,l(t).nombre]])]),m.value!=""?(n(),v("div",ye,x(m.value),1)):w("",!0)]),e("div",_e,[De,e("div",we,[y(e("select",{name:"tipoDirectivo",id:"tipoDirectivo"+s.op,"onUpdate:modelValue":i[4]||(i[4]=o=>l(t).tipDirectivo=o),placeholder:"Seleccione el tipo de directivo",class:"block rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"},[ke,(n(!0),v(W,null,z(s.tipDirectivo,o=>(n(),v("option",{key:o.idTipoDirectivo,value:o.idTipoDirectivo},x(o.tipoDirectivo),9,Me))),128))],8,$e),[[H,l(t).tipDirectivo]])]),u.value!=""?(n(),v("div",Se,x(u.value),1)):w("",!0)])])]),e("div",Pe,[e("button",{type:"button",id:"cerrar"+s.op,class:"text-sm font-semibold leading-6 bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 text-white py-2 px-4 rounded","data-bs.dismiss":"modal",onClick:_},[Te,c(" Cancelar")],8,Ee),e("button",{type:"submit",class:"bg-green-500 hover:bg-green-500 text-white font-semibold py-2 px-4 rounded",disabled:l(t).processing},[Ae,c("Guardar")],8,Ie)])],32)])]),_:1},8,["show","max-width","closeable"]))}},Ce={class:"mt-2 bg-white p-4 shadow rounded-lg"},Ne={class:"border-b border-gray-900/10 pb-12"},je={class:"text-base font-semibold leading-7 text-gray-900"},Ue=e("p",{class:"mt-1 text-sm leading-6 text-gray-600 mb-4"},"Modifique los datos según sea necesario y guarde los cambios. ",-1),Oe={key:0,type:"hidden",name:"_method",value:"PUT"},Fe={class:"flex flex-wrap -mx-4"},Le={class:"sm:col-span-2"},Ve={class:"sm:col-span-1",hidden:""},We=e("label",{for:"idDirectivo",class:"block text-sm font-medium leading-6 text-gray-900"},"idDirectivo",-1),ze={class:"mt-2"},He=["id"],qe={class:"sm:col-span-2 px-4"},Re=e("label",{for:"apellidoP",class:"block text-sm font-medium leading-6 text-gray-900"},[c("Apellido Paterno "),e("span",{class:"text-red-500"},"*")],-1),Ge={class:"mt-2"},Xe=["id"],Je={key:0,class:"text-red-500 text-xs mt-1"},Ke={class:"sm:col-span-2 px-4"},Qe=e("label",{for:"apellidoM",class:"block text-sm font-medium leading-6 text-gray-900"},[c("Apellido Materno "),e("span",{class:"text-red-500"},"*")],-1),Ye={class:"mt-2"},Ze=["id"],et={key:0,class:"text-red-500 text-xs mt-1"},tt={class:"sm:col-span-2 px-4"},ot=e("label",{for:"nombre",class:"block text-sm font-medium leading-6 text-gray-900"},[c("Nombres "),e("span",{class:"text-red-500"},"*")],-1),it={class:"mt-2"},st=["id"],rt={key:0,class:"text-red-500 text-xs mt-1"},lt={class:"sm:col-span-2 px-4"},at=e("label",{for:"tipoDirectivo",class:"block text-sm font-medium leading-6 text-gray-900"},[c("Tipo de Directivo "),e("span",{class:"text-red-500"},"*")],-1),dt={class:"mt-2"},nt=["id"],ct=e("option",{value:"",disabled:"",selected:""},"Seleccione un tipo de directivo",-1),pt=["value"],mt={key:0,class:"text-red-500 text-xs mt-1"},ut={class:"mt-6 flex items-center justify-end gap-x-6"},gt=["id"],vt=e("i",{class:"fa-solid fa-ban"},null,-1),bt=["disabled"],xt=e("i",{class:"fa-solid fa-floppy-disk mr-2"},null,-1),ht={__name:"FormularioActualizarSP",props:{show:{type:Boolean,default:!1,hora:String},maxWidth:{type:String,default:"2xl"},closeable:{type:Boolean,default:!0},directivo:{type:Object,default:()=>({})},tipDirectivo:{type:Object,default:()=>({})},title:{type:String},modal:{type:String},op:{type:String}},emits:["close"],setup(s,{emit:b}){const p=s,S=b,t=N({_method:"PUT",idDirectivo:p.directivo.idDirectivo,nombre:p.directivo.nombre,apellidoP:p.directivo.apellidoP,apellidoM:p.directivo.apellidoM,tipDirectivo:p.directivo.idTipoDirectivo});L(()=>p.directivo,async r=>{t.idDirectivo=r.idDirectivo,t.nombre=r.nombre,t.apellidoP=r.apellidoP,t.apellidoM=r.apellidoM,t.tipDirectivo=r.idTipoDirectivo},{deep:!0});const m=h(""),g=h(""),a=h(""),u=h(""),_=async()=>{S("close"),t.reset()},D=r=>typeof r=="string"&&r.trim()!=="",P=r=>r!=null,E=async()=>{if(m.value=D(t.nombre)?"":"Ingrese el nombre",g.value=D(t.apellidoP)?"":"Ingrese el apellido Paterno",a.value=D(t.apellidoM)?"":"Ingrese el apellido Materno",u.value=P(t.tipDirectivo)?"":"Seleccione el tipo de directivo",!(m.value||g.value||a.value||u.value)){var r=document.getElementById("idDirectivo2").value;t.post(route("rh.actualizarDirectivo",r),{onSuccess:()=>{_(),m.value="",g.value="",a.value="",u.value=""}})}};return(r,i)=>(n(),j(q,{show:s.show,"max-width":s.maxWidth,closeable:s.closeable,onClose:_},{default:A(()=>[e("div",Ce,[e("form",{onSubmit:V(E,["prevent"])},[e("div",Ne,[e("h2",je,x(s.title),1),Ue,s.op!=="1"?(n(),v("input",Oe)):w("",!0),e("div",Fe,[e("div",Le,[e("div",Ve,[We,e("div",ze,[y(e("input",{type:"number",name:"idDirectivo","onUpdate:modelValue":i[0]||(i[0]=o=>l(t).idDirectivo=o),placeholder:"Ingrese id del directivo",id:"idDirectivo"+s.op,class:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"},null,8,He),[[k,l(t).idDirectivo]])])])]),e("div",qe,[Re,e("div",Ge,[y(e("input",{type:"text",name:"apellidoP",id:"apellidoP"+s.op,"onUpdate:modelValue":i[1]||(i[1]=o=>l(t).apellidoP=o),placeholder:"Ingrese el apellido paterno",class:"block w-64 rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"},null,8,Xe),[[k,l(t).apellidoP]])]),g.value!=""?(n(),v("div",Je,x(g.value),1)):w("",!0)]),e("div",Ke,[Qe,e("div",Ye,[y(e("input",{type:"text",name:"apellidoM",id:"apellidoM"+s.op,"onUpdate:modelValue":i[2]||(i[2]=o=>l(t).apellidoM=o),placeholder:"Ingrese el apellido materno",class:"block w-64 rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"},null,8,Ze),[[k,l(t).apellidoM]])]),a.value!=""?(n(),v("div",et,x(a.value),1)):w("",!0)]),e("div",tt,[ot,e("div",it,[y(e("input",{type:"text",name:"nombre",id:"nombre"+s.op,"onUpdate:modelValue":i[3]||(i[3]=o=>l(t).nombre=o),placeholder:"Ingrese el nombre",class:"block w-64 rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"},null,8,st),[[k,l(t).nombre]])]),m.value!=""?(n(),v("div",rt,x(m.value),1)):w("",!0)]),e("div",lt,[at,e("div",dt,[y(e("select",{name:"tipoDirectivo",id:"tipoDirectivo"+s.op,"onUpdate:modelValue":i[4]||(i[4]=o=>l(t).tipDirectivo=o),placeholder:"Seleccione el tipo de directivo",class:"block rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"},[ct,(n(!0),v(W,null,z(s.tipDirectivo,o=>(n(),v("option",{key:o.idTipoDirectivo,value:o.idTipoDirectivo},x(o.tipoDirectivo),9,pt))),128))],8,nt),[[H,l(t).tipDirectivo]])]),u.value!=""?(n(),v("div",mt,x(u.value),1)):w("",!0)])])]),e("div",ut,[e("button",{type:"button",id:"cerrar"+s.op,class:"text-sm font-semibold leading-6 bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 text-white py-2 px-4 rounded","data-bs.dismiss":"modal",onClick:_},[vt,c(" Cancelar")],8,gt),e("button",{type:"submit",class:"bg-green-500 hover:bg-green-500 text-white font-semibold py-2 px-4 rounded",disabled:l(t).processing},[xt,c("Guardar")],8,bt)])],32)])]),_:1},8,["show","max-width","closeable"]))}},ft={class:"mt-0 bg-white p-4 shadow rounded-lg h-5/6"},yt=e("h2",{class:"font-bold text-center text-xl pt-0"},"Directivos",-1),_t=e("div",{class:"my-1"},null,-1),Dt=e("div",{class:"bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mb-6"},null,-1),wt={class:"py-3 flex flex-col md:flex-row md:items-start md:space-x-3 space-y-3 md:space-y-0"},$t=e("i",{class:"fa fa-plus mr-2"},null,-1),kt=e("i",{class:"fa fa-trash mr-2"},null,-1),Mt=e("thead",null,[e("tr",{class:"text-sm leading-normal"},[e("th",{class:"py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light"}),e("th",{class:"py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light"}," ID "),e("th",{class:"py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light"}," Apellido Paterno "),e("th",{class:"py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light"}," Apellido Materno "),e("th",{class:"py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light"}," Nombre(s) "),e("th",{class:"py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light"}," Tipo De Directivo "),e("th",{class:"py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light"}," Numero de Unidades "),e("th",{class:"py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light"}," Numero de Operadores ")])],-1),O="xl",F=!0,Nt={__name:"SociosPrestadores",props:{message:{String,default:""},color:{String,default:""},directivo:{type:Object},tipDirectivo:{type:Object},usuario:{type:Object}},setup(s){B.use(U),B.use(U);const b=s,p=[{extend:"copyHtml5",text:'<i class="fa-solid fa-copy"></i> Copiar',className:"bg-cyan-500 hover:bg-cyan-600 text-white py-1/2 px-3 rounded mb-2 jump-icon",exportOptions:{columns:[0,2]},button:!0},{title:"Directivos registrados",extend:"excelHtml5",text:'<i class="fa-solid fa-file-excel"></i> Excel',className:"bg-green-600 hover:bg-green-600 text-white py-1/2 px-3 rounded mb-2 jump-icon",exportOptions:{columns:[2,3,4,5,6]}},{title:"Directivos registrados",extend:"pdfHtml5",text:'<i class="fa-solid fa-file-pdf"></i> PDF',className:"bg-red-500 hover:bg-red-600 text-white py-1/2 px-3 rounded mb-2 jump-icon",exportOptions:{columns:[2,3,4,5,6]}},{title:"Directivos registrados",extend:"print",text:'<i class="fa-solid fa-print"></i> Imprimir',className:"bg-blue-500 hover:bg-blue-600 text-white py-1/2 px-3 rounded mb-2 jump-icon",exportOptions:{columns:[2,3,4,5,6]}}],S=[{data:null,render:function(i,o,d,f){return`<input type="checkbox" class="directivos-checkboxes" data-id="${d.idDirectivo}" ">`}},{data:null,render:function(i,o,d,f){return f.row+1}},{data:"apellidoP"},{data:"apellidoM"},{data:"nombre"},{data:"idTipoDirectivo",render:function(i,o,d,f){const M=b.tipDirectivo.find(T=>T.idTipoDirectivo===i);return M?M.tipoDirectivo:""}},{data:"numUnidades"},{data:"numOperadores"},{data:null,render:function(i,o,d,f){return`<button class="editar-button" data-id="${d.idDirectivo}" style="display: flex; justify-content: center;"><i class="fa fa-pencil"></i></button>`}}],t=h(!1),m=h(!1),g=N({_method:"DELETE"}),a=h([]);var u={};const _=i=>{u=i,m.value=!0},D=()=>{t.value=!1},P=()=>{m.value=!1},E=i=>{a.value.includes(i)?a.value=a.value.filter(d=>d!==i):a.value.push(i);const o=document.getElementById("eliminarABtn");a.value.length>0?o.removeAttribute("disabled"):o.setAttribute("disabled","")};G(()=>{document.getElementById("directivosTablaId").addEventListener("click",i=>{const o=i.target;if(o.classList.contains("directivos-checkboxes")){const d=parseInt(o.getAttribute("data-id"));if(b.directivo){const f=b.directivo.find(M=>M.idDirectivo===d);f?E(f):console.log("No se tiene directivo")}}}),$("#directivosTablaId").on("click",".editar-button",function(){const i=$(this).data("id"),o=b.directivo.find(d=>d.idDirectivo===i);_(o)})});const r=()=>{const i=C.mixin({buttonsStyling:!0}),o=a.value.map(d=>d.nombre_completo).join(", ");i.fire({title:"¿Estas seguro que deseas eliminar al directivo seleccionado?",html:`Directivo seleccionado: ${o}`,icon:"warning",showCancelButton:!0,confirmButtonText:'<i class="fa-solid fa-check"></i> Confirmar',cancelButtonText:'<i class="fa-solid fa-ban"></i> Cancelar'}).then(async d=>{if(d.isConfirmed)try{const M=a.value.map(R=>R.idDirectivo).join(",");await g.post(route("rh.eliminarDirectivo",M)),a.value=[];const T=document.getElementById("eliminarABtn");a.value.length>0?T.removeAttribute("disabled"):T.setAttribute("disabled",""),C.fire({title:"Directivo eliminado correctamente",icon:"success"}),window.flash={message:"Directivo eliminado correctamente",color:"green"}}catch(f){console.log("Error al eliminar varias directivos: "+f),C.fire({title:"Error",text:"Hubo un error al eliminar al directivo. Por favor, inténtalo de nuevo más tarde.",icon:"error"})}})};return(i,o)=>(n(),j(J,{title:"Directivos",usuario:b.usuario},{default:A(()=>[e("div",ft,[yt,_t,Dt,I(X),e("div",wt,[e("button",{class:"bg-green-500 hover:bg-green-500 text-white font-semibold py-2 px-4 rounded",onClick:o[0]||(o[0]=d=>t.value=!0),"data-bs-toggle":"modal","data-bs-target":"#modalCreate"},[$t,c("Agregar Socio/Prestador ")]),e("button",{id:"eliminarABtn",disabled:"",class:"bg-red-500 hover:bg-red-500 text-white font-semibold py-2 px-4 rounded",onClick:r},[kt,c("Borrar Socio/Prestador ")])]),e("div",null,[I(l(B),{class:"w-full table-auto text-sm display nowrap stripe compact cell-border order-column",id:"directivosTablaId",name:"directivosTablaId",columns:S,data:s.directivo,options:{responsive:!0,autoWidth:!1,dom:"Bftrip",language:{search:"Buscar",zeroRecords:"No hay registros para mostrar",info:"Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",infoEmpty:"Mostrando registros del 0 al 0 de un total de 0 registros",infoFiltered:"(filtrado de un total de _MAX_ registros)",lengthMenu:"Mostrar _MENU_ registros",paginate:{first:"Primero",previous:"Anterior",next:"Siguiente",last:"Ultimo"}},buttons:[p]}},{default:A(()=>[Mt]),_:1},8,["data","options"])])]),I(Be,{show:t.value,"max-width":O,closeable:F,onClose:D,title:"Añadir directivo",op:"1",modal:"modalCreate",tipDirectivo:b.tipDirectivo,directivo:b.directivo},null,8,["show","tipDirectivo","directivo"]),I(ht,{show:m.value,"max-width":O,closeable:F,onClose:P,title:"Editar directivo",op:"2",modal:"modalEdit",tipDirectivo:b.tipDirectivo,directivo:l(u)},null,8,["show","tipDirectivo","directivo"])]),_:1},8,["usuario"]))}};export{Nt as default};
