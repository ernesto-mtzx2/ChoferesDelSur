import{_ as ee}from"./PrincipalLayout-DvAzPC4j.js";import{u as R,i as H,r as _,o as p,j as L,e as U,a as e,g as X,t as k,f as m,w as P,d as a,k as E,c as D,l as T,F as Y,m as J,p as K,C as j,D as V,s as te,b as C,x as W}from"./app-Ulf1_P01.js";import"./buttons.print-NLOxmzBh.js";import{S as O}from"./sweetalert2.esm.all-BGf-Fe8G.js";import{_ as Q}from"./Modal-B4a8FicP.js";import{_ as ie}from"./Mensaje-BXyOukiH.js";import{E as oe}from"./jspdf.plugin.autotable-CqtI2_So.js";import{u as F,w as se}from"./xlsx-DjuO7_Ju.js";/* empty css                                                */const re={class:"mt-2 bg-white p-4 shadow rounded-lg"},le={class:"border-b border-gray-900/10 pb-12"},ae={class:"text-base font-semibold leading-7 text-gray-900"},de={class:"flex flex-wrap -mx-4"},ne={class:"sm:col-span-2"},ce={class:"sm:col-span-1",hidden:""},pe={class:"mt-2"},me=["id"],ue={class:"sm:col-span-2 px-4"},ge={class:"mt-2"},ve=["id"],be={key:0,class:"text-red-500 text-xs mt-1"},xe={class:"sm:col-span-2 px-4"},fe={class:"mt-2"},ye=["id"],he={key:0,class:"text-red-500 text-xs mt-1"},De={class:"sm:col-span-2 px-4"},we={class:"mt-2"},ke=["id"],_e={key:0,class:"text-red-500 text-xs mt-1"},Me={class:"sm:col-span-2 px-4"},$e={class:"mt-2"},Pe=["id"],Se=["value"],Te={key:0,class:"text-red-500 text-xs mt-1"},Ee={class:"mt-6 flex items-center justify-end gap-x-6"},Ie=["id"],Ae=["disabled"],Ne={__name:"FormularioSP",props:{show:{type:Boolean,default:!1,hora:String},maxWidth:{type:String,default:"2xl"},closeable:{type:Boolean,default:!0},directivo:{type:Object,default:()=>({})},tipDirectivo:{type:Object,default:()=>({})},title:{type:String},modal:{type:String},op:{type:String}},emits:["close"],setup(s,{emit:u}){const g=s,I=u,i=R({idDirectivo:g.directivo.idDirectivo,nombre:g.directivo.nombre,apellidoP:g.directivo.apellidoP,apellidoM:g.directivo.apellidoM,tipDirectivo:g.directivo.idTipoDirectivo});H(()=>g.directivo,async l=>{i.idDirectivo=l.idDirectivo,i.nombre=l.nombre,i.apellidoP=l.apellidoP,i.apellidoM=l.apellidoM,i.tipDirectivo=l.idTipoDirectivo},{deep:!0});const f=_(""),v=_(""),b=_(""),y=_(""),c=async()=>{I("close"),i.reset()},M=l=>typeof l=="string"&&l.trim()!=="",A=l=>l!=null,N=async()=>{f.value=M(i.nombre)?"":"Ingrese el nombre",v.value=M(i.apellidoP)?"":"Ingrese el apellido Paterno",b.value=M(i.apellidoM)?"":"Ingrese el apellido Materno",y.value=A(i.tipDirectivo)?"":"Seleccione el tipo de directivo",!(f.value||v.value||b.value||y.value)&&i.post(route("principal.addDirectivo"),{onSuccess:()=>{c(),f.value="",v.value="",b.value="",y.value=""}})};return(l,t)=>(p(),L(Q,{show:s.show,"max-width":s.maxWidth,closeable:s.closeable,onClose:c},{default:U(()=>[e("div",re,[e("form",{onSubmit:X(N,["prevent"])},[e("div",le,[e("h2",ae,k(s.title),1),t[11]||(t[11]=e("p",{class:"mt-1 text-sm leading-6 text-gray-600 mb-4"},[m("Rellene el formulario para poder registrar a un nuevo socio o prestador. Los campos con "),e("span",{class:"text-red-500"},"*"),m(" son obligatorios. ")],-1)),e("div",de,[e("div",ne,[e("div",ce,[t[5]||(t[5]=e("label",{for:"idDirectivo",class:"block text-sm font-medium leading-6 text-gray-900"},"idDirectivo",-1)),e("div",pe,[P(e("input",{type:"number",name:"idDirectivo","onUpdate:modelValue":t[0]||(t[0]=r=>a(i).idDirectivo=r),placeholder:"Ingrese id del directivo",id:"idDirectivo"+s.op,class:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"},null,8,me),[[E,a(i).idDirectivo]])])])]),e("div",ue,[t[6]||(t[6]=e("label",{for:"apellidoP",class:"block text-sm font-medium leading-6 text-gray-900"},[m("Apellido Paterno "),e("span",{class:"text-red-500"},"*")],-1)),e("div",ge,[P(e("input",{type:"text",name:"apellidoP",id:"apellidoP"+s.op,"onUpdate:modelValue":t[1]||(t[1]=r=>a(i).apellidoP=r),placeholder:"Ingrese el apellido paterno",class:"block w-64 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"},null,8,ve),[[E,a(i).apellidoP]])]),v.value!=""?(p(),D("div",be,k(v.value),1)):T("",!0)]),e("div",xe,[t[7]||(t[7]=e("label",{for:"apellidoM",class:"block text-sm font-medium leading-6 text-gray-900"},[m("Apellido Materno "),e("span",{class:"text-red-500"},"*")],-1)),e("div",fe,[P(e("input",{type:"text",name:"apellidoM",id:"apellidoM"+s.op,"onUpdate:modelValue":t[2]||(t[2]=r=>a(i).apellidoM=r),placeholder:"Ingrese el apellido materno",class:"block w-64 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"},null,8,ye),[[E,a(i).apellidoM]])]),b.value!=""?(p(),D("div",he,k(b.value),1)):T("",!0)]),e("div",De,[t[8]||(t[8]=e("label",{for:"nombre",class:"block text-sm font-medium leading-6 text-gray-900"},[m("Nombres "),e("span",{class:"text-red-500"},"*")],-1)),e("div",we,[P(e("input",{type:"text",name:"nombre",id:"nombre"+s.op,"onUpdate:modelValue":t[3]||(t[3]=r=>a(i).nombre=r),placeholder:"Ingrese el nombre",class:"block w-64 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"},null,8,ke),[[E,a(i).nombre]])]),f.value!=""?(p(),D("div",_e,k(f.value),1)):T("",!0)]),e("div",Me,[t[10]||(t[10]=e("label",{for:"tipoDirectivo",class:"block text-sm font-medium leading-6 text-gray-900"},[m("Tipo de Directivo "),e("span",{class:"text-red-500"},"*")],-1)),e("div",$e,[P(e("select",{name:"tipoDirectivo",id:"tipoDirectivo"+s.op,"onUpdate:modelValue":t[4]||(t[4]=r=>a(i).tipDirectivo=r),placeholder:"Seleccione el tipo de directivo",class:"block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"},[t[9]||(t[9]=e("option",{value:"",disabled:"",selected:""},"Seleccione un tipo de directivo",-1)),(p(!0),D(Y,null,J(s.tipDirectivo,r=>(p(),D("option",{key:r.idTipoDirectivo,value:r.idTipoDirectivo},k(r.tipoDirectivo),9,Se))),128))],8,Pe),[[K,a(i).tipDirectivo]])]),y.value!=""?(p(),D("div",Te,k(y.value),1)):T("",!0)])])]),e("div",Ee,[e("button",{type:"button",id:"cerrar"+s.op,class:"text-sm font-semibold leading-6 bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 text-white py-2 px-4 rounded","data-bs.dismiss":"modal",onClick:c},t[12]||(t[12]=[e("i",{class:"fa-solid fa-ban"},null,-1),m(" Cancelar")]),8,Ie),e("button",{type:"submit",class:"bg-green-500 hover:bg-green-500 text-white font-semibold py-2 px-4 rounded",disabled:a(i).processing},t[13]||(t[13]=[e("i",{class:"fa-solid fa-floppy-disk mr-2"},null,-1),m("Guardar")]),8,Ae)])],32)])]),_:1},8,["show","max-width","closeable"]))}},Be={class:"mt-2 bg-white p-4 shadow rounded-lg"},Ce={class:"border-b border-gray-900/10 pb-12"},Ue={class:"text-base font-semibold leading-7 text-gray-900"},je={key:0,type:"hidden",name:"_method",value:"PUT"},Oe={class:"flex flex-wrap -mx-4"},Fe={class:"sm:col-span-2"},Re={class:"sm:col-span-1",hidden:""},Le={class:"mt-2"},ze=["id"],Ve={class:"sm:col-span-2 px-4"},We={class:"mt-2"},qe=["id"],Ge={key:0,class:"text-red-500 text-xs mt-1"},He={class:"sm:col-span-2 px-4"},Xe={class:"mt-2"},Ye=["id"],Je={key:0,class:"text-red-500 text-xs mt-1"},Ke={class:"sm:col-span-2 px-4"},Qe={class:"mt-2"},Ze=["id"],et={key:0,class:"text-red-500 text-xs mt-1"},tt={class:"sm:col-span-2 px-4"},it={class:"mt-2"},ot=["id"],st=["value"],rt={key:0,class:"text-red-500 text-xs mt-1"},lt={class:"mt-6 flex items-center justify-end gap-x-6"},at=["id"],dt=["disabled"],nt={__name:"FormularioActualizarSP",props:{show:{type:Boolean,default:!1,hora:String},maxWidth:{type:String,default:"2xl"},closeable:{type:Boolean,default:!0},directivo:{type:Object,default:()=>({})},tipDirectivo:{type:Object,default:()=>({})},title:{type:String},modal:{type:String},op:{type:String}},emits:["close"],setup(s,{emit:u}){const g=s,I=u,i=R({_method:"PUT",idDirectivo:g.directivo.idDirectivo,nombre:g.directivo.nombre,apellidoP:g.directivo.apellidoP,apellidoM:g.directivo.apellidoM,tipDirectivo:g.directivo.idTipoDirectivo});H(()=>g.directivo,async l=>{i.idDirectivo=l.idDirectivo,i.nombre=l.nombre,i.apellidoP=l.apellidoP,i.apellidoM=l.apellidoM,i.tipDirectivo=l.idTipoDirectivo},{deep:!0});const f=_(""),v=_(""),b=_(""),y=_(""),c=async()=>{I("close"),i.reset()},M=l=>typeof l=="string"&&l.trim()!=="",A=l=>l!=null,N=async()=>{if(f.value=M(i.nombre)?"":"Ingrese el nombre",v.value=M(i.apellidoP)?"":"Ingrese el apellido Paterno",b.value=M(i.apellidoM)?"":"Ingrese el apellido Materno",y.value=A(i.tipDirectivo)?"":"Seleccione el tipo de directivo",!(f.value||v.value||b.value||y.value)){var l=document.getElementById("idDirectivo2").value;i.post(route("principal.actualizarDirectivo",l),{onSuccess:()=>{c(),f.value="",v.value="",b.value="",y.value=""}})}};return(l,t)=>(p(),L(Q,{show:s.show,"max-width":s.maxWidth,closeable:s.closeable,onClose:c},{default:U(()=>[e("div",Be,[e("form",{onSubmit:X(N,["prevent"])},[e("div",Ce,[e("h2",Ue,k(s.title),1),t[11]||(t[11]=e("p",{class:"mt-1 text-sm leading-6 text-gray-600 mb-4"},"Modifique los datos según sea necesario y guarde los cambios. ",-1)),s.op!=="1"?(p(),D("input",je)):T("",!0),e("div",Oe,[e("div",Fe,[e("div",Re,[t[5]||(t[5]=e("label",{for:"idDirectivo",class:"block text-sm font-medium leading-6 text-gray-900"},"idDirectivo",-1)),e("div",Le,[P(e("input",{type:"number",name:"idDirectivo","onUpdate:modelValue":t[0]||(t[0]=r=>a(i).idDirectivo=r),placeholder:"Ingrese id del directivo",id:"idDirectivo"+s.op,class:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"},null,8,ze),[[E,a(i).idDirectivo]])])])]),e("div",Ve,[t[6]||(t[6]=e("label",{for:"apellidoP",class:"block text-sm font-medium leading-6 text-gray-900"},[m("Apellido Paterno "),e("span",{class:"text-red-500"},"*")],-1)),e("div",We,[P(e("input",{type:"text",name:"apellidoP",id:"apellidoP"+s.op,"onUpdate:modelValue":t[1]||(t[1]=r=>a(i).apellidoP=r),placeholder:"Ingrese el apellido paterno",class:"block w-64 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"},null,8,qe),[[E,a(i).apellidoP]])]),v.value!=""?(p(),D("div",Ge,k(v.value),1)):T("",!0)]),e("div",He,[t[7]||(t[7]=e("label",{for:"apellidoM",class:"block text-sm font-medium leading-6 text-gray-900"},[m("Apellido Materno "),e("span",{class:"text-red-500"},"*")],-1)),e("div",Xe,[P(e("input",{type:"text",name:"apellidoM",id:"apellidoM"+s.op,"onUpdate:modelValue":t[2]||(t[2]=r=>a(i).apellidoM=r),placeholder:"Ingrese el apellido materno",class:"block w-64 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"},null,8,Ye),[[E,a(i).apellidoM]])]),b.value!=""?(p(),D("div",Je,k(b.value),1)):T("",!0)]),e("div",Ke,[t[8]||(t[8]=e("label",{for:"nombre",class:"block text-sm font-medium leading-6 text-gray-900"},[m("Nombres "),e("span",{class:"text-red-500"},"*")],-1)),e("div",Qe,[P(e("input",{type:"text",name:"nombre",id:"nombre"+s.op,"onUpdate:modelValue":t[3]||(t[3]=r=>a(i).nombre=r),placeholder:"Ingrese el nombre",class:"block w-64 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"},null,8,Ze),[[E,a(i).nombre]])]),f.value!=""?(p(),D("div",et,k(f.value),1)):T("",!0)]),e("div",tt,[t[10]||(t[10]=e("label",{for:"tipoDirectivo",class:"block text-sm font-medium leading-6 text-gray-900"},[m("Tipo de Directivo "),e("span",{class:"text-red-500"},"*")],-1)),e("div",it,[P(e("select",{name:"tipoDirectivo",id:"tipoDirectivo"+s.op,"onUpdate:modelValue":t[4]||(t[4]=r=>a(i).tipDirectivo=r),placeholder:"Seleccione el tipo de directivo",class:"block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"},[t[9]||(t[9]=e("option",{value:"",disabled:"",selected:""},"Seleccione un tipo de directivo",-1)),(p(!0),D(Y,null,J(s.tipDirectivo,r=>(p(),D("option",{key:r.idTipoDirectivo,value:r.idTipoDirectivo},k(r.tipoDirectivo),9,st))),128))],8,ot),[[K,a(i).tipDirectivo]])]),y.value!=""?(p(),D("div",rt,k(y.value),1)):T("",!0)])])]),e("div",lt,[e("button",{type:"button",id:"cerrar"+s.op,class:"text-sm font-semibold leading-6 bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 text-white py-2 px-4 rounded","data-bs.dismiss":"modal",onClick:c},t[12]||(t[12]=[e("i",{class:"fa-solid fa-ban"},null,-1),m(" Cancelar")]),8,at),e("button",{type:"submit",class:"bg-green-500 hover:bg-green-500 text-white font-semibold py-2 px-4 rounded",disabled:a(i).processing},t[13]||(t[13]=[e("i",{class:"fa-solid fa-floppy-disk mr-2"},null,-1),m("Guardar")]),8,dt)])],32)])]),_:1},8,["show","max-width","closeable"]))}},ct={class:"mt-0 bg-white p-4 shadow rounded-lg h-5/6"},pt={class:"py-3 flex flex-col md:flex-row md:items-start md:space-x-3 space-y-3 md:space-y-0"},q="xl",G=!0,Dt={__name:"SociosPrestadores",props:{message:{String,default:""},color:{String,default:""},directivo:{type:Object},tipDirectivo:{type:Object},usuario:{type:Object}},setup(s){j.use(V),j.use(V);const u=s,g=(d="Documento")=>{const o=new oe("landscape");o.setFontSize(12),o.text(d,14,22);const n=new Date().toLocaleDateString();o.setFontSize(8),o.text(`Fecha: ${n}`,260,22);const x=["ID","Apellido Paterno","Apellido Materno","Nombre","Tipo De Directivo","Número De Unidades","Número De Operadores"],w=[];W(()=>{$("#directivosTablaId").DataTable().rows({search:"applied"}).data().each(S=>{var z;w.push([S.idDirectivo,S.apellidoP,S.apellidoM,S.nombre,((z=u.tipDirectivo.find(Z=>Z.idTipoDirectivo===S.idTipoDirectivo))==null?void 0:z.tipoDirectivo)||"",S.numUnidades,S.numOperadores])}),o.autoTable({head:[x],body:w,startY:24}),o.save(`${d}.pdf`)})},I=()=>{W(()=>{const n=$("#directivosTablaId").DataTable().rows({search:"applied"}).data().toArray().map(h=>{var B;return{ID:h.idDirectivo,"Apellido Paterno":h.apellidoP,"Apellido Materno":h.apellidoM,Nombre:h.nombre,"Tipo De Directivo":((B=u.tipDirectivo.find(S=>S.idTipoDirectivo===h.idTipoDirectivo))==null?void 0:B.tipoDirectivo)||"","Número De Unidades":h.numUnidades,"Número De Operadores":h.numOperadores}}),x=F.json_to_sheet(n),w=F.book_new();F.book_append_sheet(w,x,"Directivos Registrados"),se(w,"Directivos Registrados.xlsx")})},i=[{extend:"copyHtml5",text:'<i class="fa-solid fa-copy"></i> Copiar',className:"bg-cyan-500 hover:bg-cyan-600 text-white py-1/2 px-3 rounded mb-2 jump-icon",exportOptions:{columns:[0,2]},button:!0},{title:"Directivos Registrados",text:'<i class="fa-solid fa-file-excel"></i> Excel',className:"bg-green-600 hover:bg-green-600 text-white py-1/2 px-3 rounded mb-2 jump-icon",action:()=>I()},{title:"Directivos Registrados",text:'<i class="fa-solid fa-file-pdf"></i> PDF',className:"bg-red-500 hover:bg-red-600 text-white py-1/2 px-3 rounded mb-2 jump-icon",action:()=>g(u.title||"Directivos Registrados")},{title:"Directivos Registrados",extend:"print",text:'<i class="fa-solid fa-print"></i> Imprimir',className:"bg-blue-500 hover:bg-blue-600 text-white py-1/2 px-3 rounded mb-2 jump-icon",exportOptions:{columns:[2,3,4,5,6]}}],f=[{data:null,render:function(d,o,n,x){return""}},{data:null,render:function(d,o,n,x){return`<input type="checkbox" class="directivos-checkboxes" data-id="${n.idDirectivo}" ">`}},{data:null,render:function(d,o,n,x){return x.row+1}},{data:"apellidoP"},{data:"apellidoM"},{data:"nombre"},{data:"idTipoDirectivo",render:function(d,o,n,x){const w=u.tipDirectivo.find(h=>h.idTipoDirectivo===d);return w?w.tipoDirectivo:""}},{data:"numUnidades"},{data:"numOperadores"},{data:null,render:function(d,o,n,x){return`<button class="editar-button" data-id="${n.idDirectivo}" style="display: flex; justify-content: center;"><i class="fa fa-pencil"></i></button>`}}],v=_(!1),b=_(!1),y=R({_method:"DELETE"}),c=_([]);var M={};const A=d=>{M=d,b.value=!0},N=()=>{v.value=!1},l=()=>{b.value=!1},t=d=>{c.value.includes(d)?c.value=c.value.filter(n=>n!==d):c.value.push(d);const o=document.getElementById("eliminarABtn");c.value.length>0?o.removeAttribute("disabled"):o.setAttribute("disabled","")};te(()=>{document.getElementById("directivosTablaId").addEventListener("click",d=>{const o=d.target;if(o.classList.contains("directivos-checkboxes")){const n=parseInt(o.getAttribute("data-id"));if(u.directivo){const x=u.directivo.find(w=>w.idDirectivo===n);x?t(x):console.log("No se tiene directivo")}}}),$("#directivosTablaId").on("click",".editar-button",function(){const d=$(this).data("id"),o=u.directivo.find(n=>n.idDirectivo===d);A(o)})});const r=()=>{const d=O.mixin({buttonsStyling:!0}),o=c.value.map(n=>n.nombre_completo).join(", ");d.fire({title:"¿Estas seguro que deseas eliminar al directivo seleccionado?",html:`Directivo seleccionado: ${o}`,icon:"warning",showCancelButton:!0,confirmButtonText:'<i class="fa-solid fa-check"></i> Confirmar',cancelButtonText:'<i class="fa-solid fa-ban"></i> Cancelar'}).then(async n=>{if(n.isConfirmed)try{const w=c.value.map(B=>B.idDirectivo).join(",");await y.post(route("principal.eliminarDirectivo",w)),c.value=[];const h=document.getElementById("eliminarABtn");c.value.length>0?h.removeAttribute("disabled"):h.setAttribute("disabled",""),O.fire({title:"Directivo eliminado correctamente",icon:"success"}),window.flash={message:"Directivo eliminado correctamente",color:"green"}}catch(x){console.log("Error al eliminar varias directivos: "+x),O.fire({title:"Error",text:"Hubo un error al eliminar al directivo. Por favor, inténtalo de nuevo más tarde.",icon:"error"})}})};return(d,o)=>(p(),L(ee,{title:"Directivos",usuario:u.usuario},{default:U(()=>[e("div",ct,[o[4]||(o[4]=e("h2",{class:"font-bold text-center text-xl pt-0"},"Directivos",-1)),o[5]||(o[5]=e("div",{class:"my-1"},null,-1)),o[6]||(o[6]=e("div",{class:"bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mb-6"},null,-1)),C(ie),e("div",pt,[e("button",{class:"bg-green-500 hover:bg-green-500 text-white font-semibold py-2 px-4 rounded",onClick:o[0]||(o[0]=n=>v.value=!0),"data-bs-toggle":"modal","data-bs-target":"#modalCreate"},o[1]||(o[1]=[e("i",{class:"fa fa-plus mr-2"},null,-1),m("Agregar Socio/Prestador ")])),e("button",{id:"eliminarABtn",disabled:"",class:"bg-red-500 hover:bg-red-500 text-white font-semibold py-2 px-4 rounded",onClick:r},o[2]||(o[2]=[e("i",{class:"fa fa-trash mr-2"},null,-1),m("Borrar Socio/Prestador ")]))]),e("div",null,[C(a(j),{class:"w-full table-auto text-sm display nowrap stripe compact cell-border order-column",id:"directivosTablaId",name:"directivosTablaId",columns:f,data:s.directivo,options:{responsive:!0,autoWidth:!1,dom:"Bftrip",language:{search:"Buscar",zeroRecords:"No hay registros para mostrar",info:"Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",infoEmpty:"Mostrando registros del 0 al 0 de un total de 0 registros",infoFiltered:"(filtrado de un total de _MAX_ registros)",lengthMenu:"Mostrar _MENU_ registros",paginate:{first:"Primero",previous:"Anterior",next:"Siguiente",last:"Ultimo"}},buttons:[i]}},{default:U(()=>o[3]||(o[3]=[e("thead",null,[e("tr",{class:"text-sm leading-normal"},[e("th",{class:"py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light"}),e("th",{class:"py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light"}),e("th",{class:"py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light"}," ID "),e("th",{class:"py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light"}," Apellido Paterno "),e("th",{class:"py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light"}," Apellido Materno "),e("th",{class:"py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light"}," Nombre "),e("th",{class:"py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light"}," Tipo Directivo "),e("th",{class:"py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light"}," Numero de Unidades "),e("th",{class:"py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light"}," Numero de Operadores ")])],-1)])),_:1},8,["data","options"])])]),C(Ne,{show:v.value,"max-width":q,closeable:G,onClose:N,title:"Añadir directivo",op:"1",modal:"modalCreate",tipDirectivo:u.tipDirectivo,directivo:u.directivo},null,8,["show","tipDirectivo","directivo"]),C(nt,{show:b.value,"max-width":q,closeable:G,onClose:l,title:"Editar directivo",op:"2",modal:"modalEdit",tipDirectivo:u.tipDirectivo,directivo:a(M)},null,8,["show","tipDirectivo","directivo"])]),_:1},8,["usuario"]))}};export{Dt as default};
