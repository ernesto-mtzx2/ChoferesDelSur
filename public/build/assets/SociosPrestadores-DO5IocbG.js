<<<<<<<< HEAD:public/build/assets/SociosPrestadores-CdypMF_M.js
import{u as B,i as W,r as x,o as d,j as C,e as N,a as e,g as G,t as b,w as D,d as l,k as S,c as v,l as P,F as q,m as H,p as X,f as u,L as U,D as L,s as K,b as j,x as z}from"./app-BUEvlFy1.js";import"./buttons.print-DLuXHXap.js";import"./sweetalert2.all-Dy7_SRfa.js";/* empty css                                                */import{_ as Q}from"./ServicioLayout-D6xOFNXo.js";import{_ as Y}from"./Modal-BgiBaW7G.js";import{E as Z}from"./jspdf.plugin.autotable-BLHNvfpd.js";import{u as O,w as ee}from"./xlsx-769MyM77.js";const te={class:"mt-2 bg-white p-4 shadow rounded-lg"},oe={class:"border-b border-gray-900/10 pb-12"},ie={class:"text-base font-semibold leading-7 text-gray-900"},se=e("p",{class:"mt-1 text-sm leading-6 text-gray-600 mb-4"},[u("Rellene el formulario para poder registrar a un nuevo socio o prestador. Los campos con "),e("span",{class:"text-red-500"},"*"),u(" son obligatorios. ")],-1),re={class:"flex flex-wrap -mx-4"},le={class:"sm:col-span-2"},ae={class:"sm:col-span-1",hidden:""},de=e("label",{for:"idDirectivo",class:"block text-sm font-medium leading-6 text-gray-900"},"idDirectivo",-1),ne={class:"mt-2"},ce=["id"],pe={class:"sm:col-span-2 px-4"},me=e("label",{for:"apellidoP",class:"block text-sm font-medium leading-6 text-gray-900"},[u("Apellido Paterno "),e("span",{class:"text-red-500"},"*")],-1),ue={class:"mt-2"},ge=["id"],ve={key:0,class:"text-red-500 text-xs mt-1"},be={class:"sm:col-span-2 px-4"},he=e("label",{for:"apellidoM",class:"block text-sm font-medium leading-6 text-gray-900"},[u("Apellido Materno "),e("span",{class:"text-red-500"},"*")],-1),xe={class:"mt-2"},fe=["id"],ye={key:0,class:"text-red-500 text-xs mt-1"},_e={class:"sm:col-span-2 px-4"},De=e("label",{for:"nombre",class:"block text-sm font-medium leading-6 text-gray-900"},[u("Nombres "),e("span",{class:"text-red-500"},"*")],-1),$e={class:"mt-2"},we=["id"],Me={key:0,class:"text-red-500 text-xs mt-1"},ke={class:"sm:col-span-2 px-4"},Pe=e("label",{for:"tipoDirectivo",class:"block text-sm font-medium leading-6 text-gray-900"},[u("Tipo de Directivo "),e("span",{class:"text-red-500"},"*")],-1),Se={class:"mt-2"},Te=["id"],Ee=e("option",{value:"",disabled:"",selected:""},"Seleccione un tipo de directivo",-1),Ie=["value"],Ne={key:0,class:"text-red-500 text-xs mt-1"},Ae={class:"mt-6 flex items-center justify-end gap-x-6"},Ue=["id"],je=e("i",{class:"fa-solid fa-ban"},null,-1),Oe=["disabled"],Be=e("i",{class:"fa-solid fa-floppy-disk mr-2"},null,-1),Ce={__name:"FormularioSP",props:{show:{type:Boolean,default:!1,hora:String},maxWidth:{type:String,default:"2xl"},closeable:{type:Boolean,default:!0},directivo:{type:Object,default:()=>({})},tipDirectivo:{type:Object,default:()=>({})},title:{type:String},modal:{type:String},op:{type:String}},emits:["close"],setup(s,{emit:n}){const c=s,T=n,t=B({idDirectivo:c.directivo.idDirectivo,nombre:c.directivo.nombre,apellidoP:c.directivo.apellidoP,apellidoM:c.directivo.apellidoM,tipDirectivo:c.directivo.idTipoDirectivo});W(()=>c.directivo,async r=>{t.idDirectivo=r.idDirectivo,t.nombre=r.nombre,t.apellidoP=r.apellidoP,t.apellidoM=r.apellidoM,t.tipDirectivo=r.idTipoDirectivo},{deep:!0});const g=x(""),m=x(""),p=x(""),a=x(""),f=async()=>{T("close"),t.reset()},w=r=>typeof r=="string"&&r.trim()!=="",E=r=>r!=null,I=async()=>{g.value=w(t.nombre)?"":"Ingrese el nombre",m.value=w(t.apellidoP)?"":"Ingrese el apellido Paterno",p.value=w(t.apellidoM)?"":"Ingrese el apellido Materno",a.value=E(t.tipDirectivo)?"":"Seleccione el tipo de directivo",!(g.value||m.value||p.value||a.value)&&t.post(route("servicio.addDirectivo"),{onSuccess:()=>{f(),g.value="",m.value="",p.value="",a.value=""}})};return(r,i)=>(d(),C(Y,{show:s.show,"max-width":s.maxWidth,closeable:s.closeable,onClose:f},{default:N(()=>[e("div",te,[e("form",{onSubmit:G(I,["prevent"])},[e("div",oe,[e("h2",ie,b(s.title),1),se,e("div",re,[e("div",le,[e("div",ae,[de,e("div",ne,[D(e("input",{type:"number",name:"idDirectivo","onUpdate:modelValue":i[0]||(i[0]=o=>l(t).idDirectivo=o),placeholder:"Ingrese id del directivo",id:"idDirectivo"+s.op,class:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"},null,8,ce),[[S,l(t).idDirectivo]])])])]),e("div",pe,[me,e("div",ue,[D(e("input",{type:"text",name:"apellidoP",id:"apellidoP"+s.op,"onUpdate:modelValue":i[1]||(i[1]=o=>l(t).apellidoP=o),placeholder:"Ingrese el apellido paterno",class:"block w-64 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"},null,8,ge),[[S,l(t).apellidoP]])]),m.value!=""?(d(),v("div",ve,b(m.value),1)):P("",!0)]),e("div",be,[he,e("div",xe,[D(e("input",{type:"text",name:"apellidoM",id:"apellidoM"+s.op,"onUpdate:modelValue":i[2]||(i[2]=o=>l(t).apellidoM=o),placeholder:"Ingrese el apellido materno",class:"block w-64 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"},null,8,fe),[[S,l(t).apellidoM]])]),p.value!=""?(d(),v("div",ye,b(p.value),1)):P("",!0)]),e("div",_e,[De,e("div",$e,[D(e("input",{type:"text",name:"nombre",id:"nombre"+s.op,"onUpdate:modelValue":i[3]||(i[3]=o=>l(t).nombre=o),placeholder:"Ingrese el nombre",class:"block w-64 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"},null,8,we),[[S,l(t).nombre]])]),g.value!=""?(d(),v("div",Me,b(g.value),1)):P("",!0)]),e("div",ke,[Pe,e("div",Se,[D(e("select",{name:"tipoDirectivo",id:"tipoDirectivo"+s.op,"onUpdate:modelValue":i[4]||(i[4]=o=>l(t).tipDirectivo=o),placeholder:"Seleccione el tipo de directivo",class:"block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"},[Ee,(d(!0),v(q,null,H(s.tipDirectivo,o=>(d(),v("option",{key:o.idTipoDirectivo,value:o.idTipoDirectivo},b(o.tipoDirectivo),9,Ie))),128))],8,Te),[[X,l(t).tipDirectivo]])]),a.value!=""?(d(),v("div",Ne,b(a.value),1)):P("",!0)])])]),e("div",Ae,[e("button",{type:"button",id:"cerrar"+s.op,class:"text-sm font-semibold leading-6 bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 text-white py-2 px-4 rounded","data-bs.dismiss":"modal",onClick:f},[je,u(" Cancelar")],8,Ue),e("button",{type:"submit",class:"bg-green-500 hover:bg-green-500 text-white font-semibold py-2 px-4 rounded",disabled:l(t).processing},[Be,u("Guardar")],8,Oe)])],32)])]),_:1},8,["show","max-width","closeable"]))}},Fe={class:"mt-2 bg-white p-4 shadow rounded-lg"},Le={class:"border-b border-gray-900/10 pb-12"},ze={class:"text-base font-semibold leading-7 text-gray-900"},Re=e("p",{class:"mt-1 text-sm leading-6 text-gray-600 mb-4"},"Modifique los datos según sea necesario y guarde los cambios. ",-1),Ve={key:0,type:"hidden",name:"_method",value:"PUT"},We={class:"flex flex-wrap -mx-4"},Ge={class:"sm:col-span-2"},qe={class:"sm:col-span-1",hidden:""},He=e("label",{for:"idDirectivo",class:"block text-sm font-medium leading-6 text-gray-900"},"idDirectivo",-1),Xe={class:"mt-2"},Ye=["id"],Je={class:"sm:col-span-2 px-4"},Ke=e("label",{for:"apellidoP",class:"block text-sm font-medium leading-6 text-gray-900"},[u("Apellido Paterno "),e("span",{class:"text-red-500"},"*")],-1),Qe={class:"mt-2"},Ze=["id"],et={key:0,class:"text-red-500 text-xs mt-1"},tt={class:"sm:col-span-2 px-4"},ot=e("label",{for:"apellidoM",class:"block text-sm font-medium leading-6 text-gray-900"},[u("Apellido Materno "),e("span",{class:"text-red-500"},"*")],-1),it={class:"mt-2"},st=["id"],rt={key:0,class:"text-red-500 text-xs mt-1"},lt={class:"sm:col-span-2 px-4"},at=e("label",{for:"nombre",class:"block text-sm font-medium leading-6 text-gray-900"},[u("Nombres "),e("span",{class:"text-red-500"},"*")],-1),dt={class:"mt-2"},nt=["id"],ct={key:0,class:"text-red-500 text-xs mt-1"},pt={class:"sm:col-span-2 px-4"},mt=e("label",{for:"tipoDirectivo",class:"block text-sm font-medium leading-6 text-gray-900"},[u("Tipo de Directivo "),e("span",{class:"text-red-500"},"*")],-1),ut={class:"mt-2"},gt=["id"],vt=e("option",{value:"",disabled:"",selected:""},"Seleccione un tipo de directivo",-1),bt=["value"],ht={key:0,class:"text-red-500 text-xs mt-1"},xt={class:"mt-6 flex items-center justify-end gap-x-6"},ft=["id"],yt=e("i",{class:"fa-solid fa-ban"},null,-1),_t=["disabled"],Dt=e("i",{class:"fa-solid fa-floppy-disk mr-2"},null,-1),$t={__name:"FormularioActualizarSP",props:{show:{type:Boolean,default:!1,hora:String},maxWidth:{type:String,default:"2xl"},closeable:{type:Boolean,default:!0},directivo:{type:Object,default:()=>({})},tipDirectivo:{type:Object,default:()=>({})},title:{type:String},modal:{type:String},op:{type:String}},emits:["close"],setup(s,{emit:n}){const c=s,T=n,t=B({_method:"PUT",idDirectivo:c.directivo.idDirectivo,nombre:c.directivo.nombre,apellidoP:c.directivo.apellidoP,apellidoM:c.directivo.apellidoM,tipDirectivo:c.directivo.idTipoDirectivo});W(()=>c.directivo,async r=>{t.idDirectivo=r.idDirectivo,t.nombre=r.nombre,t.apellidoP=r.apellidoP,t.apellidoM=r.apellidoM,t.tipDirectivo=r.idTipoDirectivo},{deep:!0});const g=x(""),m=x(""),p=x(""),a=x(""),f=async()=>{T("close"),t.reset()},w=r=>typeof r=="string"&&r.trim()!=="",E=r=>r!=null,I=async()=>{if(g.value=w(t.nombre)?"":"Ingrese el nombre",m.value=w(t.apellidoP)?"":"Ingrese el apellido Paterno",p.value=w(t.apellidoM)?"":"Ingrese el apellido Materno",a.value=E(t.tipDirectivo)?"":"Seleccione el tipo de directivo",!(g.value||m.value||p.value||a.value)){var r=document.getElementById("idDirectivo2").value;t.post(route("rh.actualizarDirectivo",r),{onSuccess:()=>{f(),g.value="",m.value="",p.value="",a.value=""}})}};return(r,i)=>(d(),C(Y,{show:s.show,"max-width":s.maxWidth,closeable:s.closeable,onClose:f},{default:N(()=>[e("div",Fe,[e("form",{onSubmit:G(I,["prevent"])},[e("div",Le,[e("h2",ze,b(s.title),1),Re,s.op!=="1"?(d(),v("input",Ve)):P("",!0),e("div",We,[e("div",Ge,[e("div",qe,[He,e("div",Xe,[D(e("input",{type:"number",name:"idDirectivo","onUpdate:modelValue":i[0]||(i[0]=o=>l(t).idDirectivo=o),placeholder:"Ingrese id del directivo",id:"idDirectivo"+s.op,class:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"},null,8,Ye),[[S,l(t).idDirectivo]])])])]),e("div",Je,[Ke,e("div",Qe,[D(e("input",{type:"text",name:"apellidoP",id:"apellidoP"+s.op,"onUpdate:modelValue":i[1]||(i[1]=o=>l(t).apellidoP=o),placeholder:"Ingrese el apellido paterno",class:"block w-64 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"},null,8,Ze),[[S,l(t).apellidoP]])]),m.value!=""?(d(),v("div",et,b(m.value),1)):P("",!0)]),e("div",tt,[ot,e("div",it,[D(e("input",{type:"text",name:"apellidoM",id:"apellidoM"+s.op,"onUpdate:modelValue":i[2]||(i[2]=o=>l(t).apellidoM=o),placeholder:"Ingrese el apellido materno",class:"block w-64 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"},null,8,st),[[S,l(t).apellidoM]])]),p.value!=""?(d(),v("div",rt,b(p.value),1)):P("",!0)]),e("div",lt,[at,e("div",dt,[D(e("input",{type:"text",name:"nombre",id:"nombre"+s.op,"onUpdate:modelValue":i[3]||(i[3]=o=>l(t).nombre=o),placeholder:"Ingrese el nombre",class:"block w-64 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"},null,8,nt),[[S,l(t).nombre]])]),g.value!=""?(d(),v("div",ct,b(g.value),1)):P("",!0)]),e("div",pt,[mt,e("div",ut,[D(e("select",{name:"tipoDirectivo",id:"tipoDirectivo"+s.op,"onUpdate:modelValue":i[4]||(i[4]=o=>l(t).tipDirectivo=o),placeholder:"Seleccione el tipo de directivo",class:"block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"},[vt,(d(!0),v(q,null,H(s.tipDirectivo,o=>(d(),v("option",{key:o.idTipoDirectivo,value:o.idTipoDirectivo},b(o.tipoDirectivo),9,bt))),128))],8,gt),[[X,l(t).tipDirectivo]])]),a.value!=""?(d(),v("div",ht,b(a.value),1)):P("",!0)])])]),e("div",xt,[e("button",{type:"button",id:"cerrar"+s.op,class:"text-sm font-semibold leading-6 bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 text-white py-2 px-4 rounded","data-bs.dismiss":"modal",onClick:f},[yt,u(" Cancelar")],8,ft),e("button",{type:"submit",class:"bg-green-500 hover:bg-green-500 text-white font-semibold py-2 px-4 rounded",disabled:l(t).processing},[Dt,u("Guardar")],8,_t)])],32)])]),_:1},8,["show","max-width","closeable"]))}},wt={class:"mt-0 bg-white p-4 shadow rounded-lg h-5/6"},Mt=e("h2",{class:"font-bold text-center text-xl pt-0"},"Directivos",-1),kt=e("div",{class:"my-1"},null,-1),Pt=e("div",{class:"bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mb-6"},null,-1),St=e("thead",null,[e("tr",{class:"text-sm leading-normal"},[e("th",{class:"py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light"}," ID "),e("th",{class:"py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light"}," Apellido Paterno "),e("th",{class:"py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light"}," Apellido Materno "),e("th",{class:"py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light"}," Nombre "),e("th",{class:"py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light"}," Tipo Directivo "),e("th",{class:"py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light"}," Numero de Unidades "),e("th",{class:"py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light"}," Numero de Operadores ")])],-1),R="xl",V=!0,Bt={__name:"SociosPrestadores",props:{message:{String,default:""},color:{String,default:""},directivo:{type:Object},tipDirectivo:{type:Object},usuario:{type:Object}},setup(s){U.use(L),U.use(L);const n=s,c=(i="Documento")=>{const o=new Z("landscape");o.setFontSize(12),o.text(i,14,22);const h=new Date().toLocaleDateString();o.setFontSize(8),o.text(`Fecha: ${h}`,260,22);const M=["ID","Apellido Paterno","Apellido Materno","Nombre","Tipo De Directivo","Número De Unidades","Número De Operadores"],y=[];z(()=>{$("#directivosTablaId").DataTable().rows({search:"applied"}).data().each(k=>{var F;y.push([k.idDirectivo,k.apellidoP,k.apellidoM,k.nombre,((F=n.tipDirectivo.find(J=>J.idTipoDirectivo===k.idTipoDirectivo))==null?void 0:F.tipoDirectivo)||"",k.numUnidades,k.numOperadores])}),o.autoTable({head:[M],body:y,startY:24}),o.save(`${i}.pdf`)})},T=()=>{z(()=>{const h=$("#directivosTablaId").DataTable().rows({search:"applied"}).data().toArray().map(_=>{var A;return{ID:_.idDirectivo,"Apellido Paterno":_.apellidoP,"Apellido Materno":_.apellidoM,Nombre:_.nombre,"Tipo De Directivo":((A=n.tipDirectivo.find(k=>k.idTipoDirectivo===_.idTipoDirectivo))==null?void 0:A.tipoDirectivo)||"","Número De Unidades":_.numUnidades,"Número De Operadores":_.numOperadores}}),M=O.json_to_sheet(h),y=O.book_new();O.book_append_sheet(y,M,"Directivos Registrados"),ee(y,"Directivos Registrados.xlsx")})},t=[{extend:"copyHtml5",text:'<i class="fa-solid fa-copy"></i> Copiar',className:"bg-cyan-500 hover:bg-cyan-600 text-white py-1/2 px-3 rounded mb-2 jump-icon",exportOptions:{columns:[0,2]},button:!0},{title:"Directivos registrados",text:'<i class="fa-solid fa-file-excel"></i> Excel',className:"bg-green-600 hover:bg-green-600 text-white py-1/2 px-3 rounded mb-2 jump-icon",action:()=>T()},{title:"Directivos registrados",text:'<i class="fa-solid fa-file-pdf"></i> PDF',className:"bg-red-500 hover:bg-red-600 text-white py-1/2 px-3 rounded mb-2 jump-icon",action:()=>c(n.title||"Directivos Registrados")},{title:"Directivos registrados",extend:"print",text:'<i class="fa-solid fa-print"></i> Imprimir',className:"bg-blue-500 hover:bg-blue-600 text-white py-1/2 px-3 rounded mb-2 jump-icon",exportOptions:{columns:[1,2,3,4,5,6]}}],g=[{data:null,render:function(i,o,h,M){return M.row+1}},{data:"apellidoP"},{data:"apellidoM"},{data:"nombre"},{data:"idTipoDirectivo",render:function(i,o,h,M){const y=n.tipDirectivo.find(_=>_.idTipoDirectivo===i);return y?y.tipoDirectivo:""}},{data:"numUnidades"},{data:"numOperadores"}],m=x(!1),p=x(!1);B({_method:"DELETE"});const a=x([]);var f={};const w=i=>{f=i,p.value=!0},E=()=>{m.value=!1},I=()=>{p.value=!1},r=i=>{a.value.includes(i)?a.value=a.value.filter(h=>h!==i):a.value.push(i);const o=document.getElementById("eliminarABtn");a.value.length>0?o.removeAttribute("disabled"):o.setAttribute("disabled","")};return K(()=>{document.getElementById("directivosTablaId").addEventListener("click",i=>{const o=i.target;if(o.classList.contains("directivos-checkboxes")){const h=parseInt(o.getAttribute("data-id"));if(n.directivo){const M=n.directivo.find(y=>y.idDirectivo===h);M?r(M):console.log("No se tiene directivo")}}}),$("#directivosTablaId").on("click",".editar-button",function(){const i=$(this).data("id"),o=n.directivo.find(h=>h.idDirectivo===i);w(o)})}),(i,o)=>(d(),C(Q,{title:"Directivos",usuario:n.usuario},{default:N(()=>[e("div",wt,[Mt,kt,Pt,e("div",null,[j(l(U),{class:"w-full table-auto text-sm display nowrap stripe compact cell-border order-column",id:"directivosTablaId",name:"directivosTablaId",columns:g,data:s.directivo,options:{responsive:!0,autoWidth:!1,dom:"Bftrip",language:{search:"Buscar",zeroRecords:"No hay registros para mostrar",info:"Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",infoEmpty:"Mostrando registros del 0 al 0 de un total de 0 registros",infoFiltered:"(filtrado de un total de _MAX_ registros)",lengthMenu:"Mostrar _MENU_ registros",paginate:{first:"Primero",previous:"Anterior",next:"Siguiente",last:"Ultimo"}},buttons:[t],pageLength:20}},{default:N(()=>[St]),_:1},8,["data","options"])])]),j(Ce,{show:m.value,"max-width":R,closeable:V,onClose:E,title:"Añadir directivo",op:"1",modal:"modalCreate",tipDirectivo:n.tipDirectivo,directivo:n.directivo},null,8,["show","tipDirectivo","directivo"]),j($t,{show:p.value,"max-width":R,closeable:V,onClose:I,title:"Editar directivo",op:"2",modal:"modalEdit",tipDirectivo:n.tipDirectivo,directivo:l(f)},null,8,["show","tipDirectivo","directivo"])]),_:1},8,["usuario"]))}};export{Bt as default};
========
import{u as B,i as W,r as x,o as d,j as C,e as N,a as e,g as G,t as b,w as D,d as l,k as S,c as v,l as P,F as q,m as H,p as X,f as u,L as U,D as L,s as K,b as j,x as z}from"./app-Dl5_rpfc.js";import"./buttons.print-Dymd2p3d.js";import"./sweetalert2.all-hMiNay9h.js";/* empty css                                                */import{_ as Q}from"./ServicioLayout-C2nS8QGA.js";import{_ as Y}from"./Modal-Ca4tGgoj.js";import{E as Z}from"./jspdf.plugin.autotable-BqYcvtrv.js";import{u as O,w as ee}from"./xlsx-769MyM77.js";const te={class:"mt-2 bg-white p-4 shadow rounded-lg"},oe={class:"border-b border-gray-900/10 pb-12"},ie={class:"text-base font-semibold leading-7 text-gray-900"},se=e("p",{class:"mt-1 text-sm leading-6 text-gray-600 mb-4"},[u("Rellene el formulario para poder registrar a un nuevo socio o prestador. Los campos con "),e("span",{class:"text-red-500"},"*"),u(" son obligatorios. ")],-1),re={class:"flex flex-wrap -mx-4"},le={class:"sm:col-span-2"},ae={class:"sm:col-span-1",hidden:""},de=e("label",{for:"idDirectivo",class:"block text-sm font-medium leading-6 text-gray-900"},"idDirectivo",-1),ne={class:"mt-2"},ce=["id"],pe={class:"sm:col-span-2 px-4"},me=e("label",{for:"apellidoP",class:"block text-sm font-medium leading-6 text-gray-900"},[u("Apellido Paterno "),e("span",{class:"text-red-500"},"*")],-1),ue={class:"mt-2"},ge=["id"],ve={key:0,class:"text-red-500 text-xs mt-1"},be={class:"sm:col-span-2 px-4"},he=e("label",{for:"apellidoM",class:"block text-sm font-medium leading-6 text-gray-900"},[u("Apellido Materno "),e("span",{class:"text-red-500"},"*")],-1),xe={class:"mt-2"},fe=["id"],ye={key:0,class:"text-red-500 text-xs mt-1"},_e={class:"sm:col-span-2 px-4"},De=e("label",{for:"nombre",class:"block text-sm font-medium leading-6 text-gray-900"},[u("Nombres "),e("span",{class:"text-red-500"},"*")],-1),$e={class:"mt-2"},we=["id"],Me={key:0,class:"text-red-500 text-xs mt-1"},ke={class:"sm:col-span-2 px-4"},Pe=e("label",{for:"tipoDirectivo",class:"block text-sm font-medium leading-6 text-gray-900"},[u("Tipo de Directivo "),e("span",{class:"text-red-500"},"*")],-1),Se={class:"mt-2"},Te=["id"],Ee=e("option",{value:"",disabled:"",selected:""},"Seleccione un tipo de directivo",-1),Ie=["value"],Ne={key:0,class:"text-red-500 text-xs mt-1"},Ae={class:"mt-6 flex items-center justify-end gap-x-6"},Ue=["id"],je=e("i",{class:"fa-solid fa-ban"},null,-1),Oe=["disabled"],Be=e("i",{class:"fa-solid fa-floppy-disk mr-2"},null,-1),Ce={__name:"FormularioSP",props:{show:{type:Boolean,default:!1,hora:String},maxWidth:{type:String,default:"2xl"},closeable:{type:Boolean,default:!0},directivo:{type:Object,default:()=>({})},tipDirectivo:{type:Object,default:()=>({})},title:{type:String},modal:{type:String},op:{type:String}},emits:["close"],setup(s,{emit:n}){const c=s,T=n,t=B({idDirectivo:c.directivo.idDirectivo,nombre:c.directivo.nombre,apellidoP:c.directivo.apellidoP,apellidoM:c.directivo.apellidoM,tipDirectivo:c.directivo.idTipoDirectivo});W(()=>c.directivo,async r=>{t.idDirectivo=r.idDirectivo,t.nombre=r.nombre,t.apellidoP=r.apellidoP,t.apellidoM=r.apellidoM,t.tipDirectivo=r.idTipoDirectivo},{deep:!0});const g=x(""),m=x(""),p=x(""),a=x(""),f=async()=>{T("close"),t.reset()},w=r=>typeof r=="string"&&r.trim()!=="",E=r=>r!=null,I=async()=>{g.value=w(t.nombre)?"":"Ingrese el nombre",m.value=w(t.apellidoP)?"":"Ingrese el apellido Paterno",p.value=w(t.apellidoM)?"":"Ingrese el apellido Materno",a.value=E(t.tipDirectivo)?"":"Seleccione el tipo de directivo",!(g.value||m.value||p.value||a.value)&&t.post(route("servicio.addDirectivo"),{onSuccess:()=>{f(),g.value="",m.value="",p.value="",a.value=""}})};return(r,i)=>(d(),C(Y,{show:s.show,"max-width":s.maxWidth,closeable:s.closeable,onClose:f},{default:N(()=>[e("div",te,[e("form",{onSubmit:G(I,["prevent"])},[e("div",oe,[e("h2",ie,b(s.title),1),se,e("div",re,[e("div",le,[e("div",ae,[de,e("div",ne,[D(e("input",{type:"number",name:"idDirectivo","onUpdate:modelValue":i[0]||(i[0]=o=>l(t).idDirectivo=o),placeholder:"Ingrese id del directivo",id:"idDirectivo"+s.op,class:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"},null,8,ce),[[S,l(t).idDirectivo]])])])]),e("div",pe,[me,e("div",ue,[D(e("input",{type:"text",name:"apellidoP",id:"apellidoP"+s.op,"onUpdate:modelValue":i[1]||(i[1]=o=>l(t).apellidoP=o),placeholder:"Ingrese el apellido paterno",class:"block w-64 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"},null,8,ge),[[S,l(t).apellidoP]])]),m.value!=""?(d(),v("div",ve,b(m.value),1)):P("",!0)]),e("div",be,[he,e("div",xe,[D(e("input",{type:"text",name:"apellidoM",id:"apellidoM"+s.op,"onUpdate:modelValue":i[2]||(i[2]=o=>l(t).apellidoM=o),placeholder:"Ingrese el apellido materno",class:"block w-64 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"},null,8,fe),[[S,l(t).apellidoM]])]),p.value!=""?(d(),v("div",ye,b(p.value),1)):P("",!0)]),e("div",_e,[De,e("div",$e,[D(e("input",{type:"text",name:"nombre",id:"nombre"+s.op,"onUpdate:modelValue":i[3]||(i[3]=o=>l(t).nombre=o),placeholder:"Ingrese el nombre",class:"block w-64 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"},null,8,we),[[S,l(t).nombre]])]),g.value!=""?(d(),v("div",Me,b(g.value),1)):P("",!0)]),e("div",ke,[Pe,e("div",Se,[D(e("select",{name:"tipoDirectivo",id:"tipoDirectivo"+s.op,"onUpdate:modelValue":i[4]||(i[4]=o=>l(t).tipDirectivo=o),placeholder:"Seleccione el tipo de directivo",class:"block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"},[Ee,(d(!0),v(q,null,H(s.tipDirectivo,o=>(d(),v("option",{key:o.idTipoDirectivo,value:o.idTipoDirectivo},b(o.tipoDirectivo),9,Ie))),128))],8,Te),[[X,l(t).tipDirectivo]])]),a.value!=""?(d(),v("div",Ne,b(a.value),1)):P("",!0)])])]),e("div",Ae,[e("button",{type:"button",id:"cerrar"+s.op,class:"text-sm font-semibold leading-6 bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 text-white py-2 px-4 rounded","data-bs.dismiss":"modal",onClick:f},[je,u(" Cancelar")],8,Ue),e("button",{type:"submit",class:"bg-green-500 hover:bg-green-500 text-white font-semibold py-2 px-4 rounded",disabled:l(t).processing},[Be,u("Guardar")],8,Oe)])],32)])]),_:1},8,["show","max-width","closeable"]))}},Fe={class:"mt-2 bg-white p-4 shadow rounded-lg"},Le={class:"border-b border-gray-900/10 pb-12"},ze={class:"text-base font-semibold leading-7 text-gray-900"},Re=e("p",{class:"mt-1 text-sm leading-6 text-gray-600 mb-4"},"Modifique los datos según sea necesario y guarde los cambios. ",-1),Ve={key:0,type:"hidden",name:"_method",value:"PUT"},We={class:"flex flex-wrap -mx-4"},Ge={class:"sm:col-span-2"},qe={class:"sm:col-span-1",hidden:""},He=e("label",{for:"idDirectivo",class:"block text-sm font-medium leading-6 text-gray-900"},"idDirectivo",-1),Xe={class:"mt-2"},Ye=["id"],Je={class:"sm:col-span-2 px-4"},Ke=e("label",{for:"apellidoP",class:"block text-sm font-medium leading-6 text-gray-900"},[u("Apellido Paterno "),e("span",{class:"text-red-500"},"*")],-1),Qe={class:"mt-2"},Ze=["id"],et={key:0,class:"text-red-500 text-xs mt-1"},tt={class:"sm:col-span-2 px-4"},ot=e("label",{for:"apellidoM",class:"block text-sm font-medium leading-6 text-gray-900"},[u("Apellido Materno "),e("span",{class:"text-red-500"},"*")],-1),it={class:"mt-2"},st=["id"],rt={key:0,class:"text-red-500 text-xs mt-1"},lt={class:"sm:col-span-2 px-4"},at=e("label",{for:"nombre",class:"block text-sm font-medium leading-6 text-gray-900"},[u("Nombres "),e("span",{class:"text-red-500"},"*")],-1),dt={class:"mt-2"},nt=["id"],ct={key:0,class:"text-red-500 text-xs mt-1"},pt={class:"sm:col-span-2 px-4"},mt=e("label",{for:"tipoDirectivo",class:"block text-sm font-medium leading-6 text-gray-900"},[u("Tipo de Directivo "),e("span",{class:"text-red-500"},"*")],-1),ut={class:"mt-2"},gt=["id"],vt=e("option",{value:"",disabled:"",selected:""},"Seleccione un tipo de directivo",-1),bt=["value"],ht={key:0,class:"text-red-500 text-xs mt-1"},xt={class:"mt-6 flex items-center justify-end gap-x-6"},ft=["id"],yt=e("i",{class:"fa-solid fa-ban"},null,-1),_t=["disabled"],Dt=e("i",{class:"fa-solid fa-floppy-disk mr-2"},null,-1),$t={__name:"FormularioActualizarSP",props:{show:{type:Boolean,default:!1,hora:String},maxWidth:{type:String,default:"2xl"},closeable:{type:Boolean,default:!0},directivo:{type:Object,default:()=>({})},tipDirectivo:{type:Object,default:()=>({})},title:{type:String},modal:{type:String},op:{type:String}},emits:["close"],setup(s,{emit:n}){const c=s,T=n,t=B({_method:"PUT",idDirectivo:c.directivo.idDirectivo,nombre:c.directivo.nombre,apellidoP:c.directivo.apellidoP,apellidoM:c.directivo.apellidoM,tipDirectivo:c.directivo.idTipoDirectivo});W(()=>c.directivo,async r=>{t.idDirectivo=r.idDirectivo,t.nombre=r.nombre,t.apellidoP=r.apellidoP,t.apellidoM=r.apellidoM,t.tipDirectivo=r.idTipoDirectivo},{deep:!0});const g=x(""),m=x(""),p=x(""),a=x(""),f=async()=>{T("close"),t.reset()},w=r=>typeof r=="string"&&r.trim()!=="",E=r=>r!=null,I=async()=>{if(g.value=w(t.nombre)?"":"Ingrese el nombre",m.value=w(t.apellidoP)?"":"Ingrese el apellido Paterno",p.value=w(t.apellidoM)?"":"Ingrese el apellido Materno",a.value=E(t.tipDirectivo)?"":"Seleccione el tipo de directivo",!(g.value||m.value||p.value||a.value)){var r=document.getElementById("idDirectivo2").value;t.post(route("rh.actualizarDirectivo",r),{onSuccess:()=>{f(),g.value="",m.value="",p.value="",a.value=""}})}};return(r,i)=>(d(),C(Y,{show:s.show,"max-width":s.maxWidth,closeable:s.closeable,onClose:f},{default:N(()=>[e("div",Fe,[e("form",{onSubmit:G(I,["prevent"])},[e("div",Le,[e("h2",ze,b(s.title),1),Re,s.op!=="1"?(d(),v("input",Ve)):P("",!0),e("div",We,[e("div",Ge,[e("div",qe,[He,e("div",Xe,[D(e("input",{type:"number",name:"idDirectivo","onUpdate:modelValue":i[0]||(i[0]=o=>l(t).idDirectivo=o),placeholder:"Ingrese id del directivo",id:"idDirectivo"+s.op,class:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"},null,8,Ye),[[S,l(t).idDirectivo]])])])]),e("div",Je,[Ke,e("div",Qe,[D(e("input",{type:"text",name:"apellidoP",id:"apellidoP"+s.op,"onUpdate:modelValue":i[1]||(i[1]=o=>l(t).apellidoP=o),placeholder:"Ingrese el apellido paterno",class:"block w-64 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"},null,8,Ze),[[S,l(t).apellidoP]])]),m.value!=""?(d(),v("div",et,b(m.value),1)):P("",!0)]),e("div",tt,[ot,e("div",it,[D(e("input",{type:"text",name:"apellidoM",id:"apellidoM"+s.op,"onUpdate:modelValue":i[2]||(i[2]=o=>l(t).apellidoM=o),placeholder:"Ingrese el apellido materno",class:"block w-64 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"},null,8,st),[[S,l(t).apellidoM]])]),p.value!=""?(d(),v("div",rt,b(p.value),1)):P("",!0)]),e("div",lt,[at,e("div",dt,[D(e("input",{type:"text",name:"nombre",id:"nombre"+s.op,"onUpdate:modelValue":i[3]||(i[3]=o=>l(t).nombre=o),placeholder:"Ingrese el nombre",class:"block w-64 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"},null,8,nt),[[S,l(t).nombre]])]),g.value!=""?(d(),v("div",ct,b(g.value),1)):P("",!0)]),e("div",pt,[mt,e("div",ut,[D(e("select",{name:"tipoDirectivo",id:"tipoDirectivo"+s.op,"onUpdate:modelValue":i[4]||(i[4]=o=>l(t).tipDirectivo=o),placeholder:"Seleccione el tipo de directivo",class:"block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"},[vt,(d(!0),v(q,null,H(s.tipDirectivo,o=>(d(),v("option",{key:o.idTipoDirectivo,value:o.idTipoDirectivo},b(o.tipoDirectivo),9,bt))),128))],8,gt),[[X,l(t).tipDirectivo]])]),a.value!=""?(d(),v("div",ht,b(a.value),1)):P("",!0)])])]),e("div",xt,[e("button",{type:"button",id:"cerrar"+s.op,class:"text-sm font-semibold leading-6 bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 text-white py-2 px-4 rounded","data-bs.dismiss":"modal",onClick:f},[yt,u(" Cancelar")],8,ft),e("button",{type:"submit",class:"bg-green-500 hover:bg-green-500 text-white font-semibold py-2 px-4 rounded",disabled:l(t).processing},[Dt,u("Guardar")],8,_t)])],32)])]),_:1},8,["show","max-width","closeable"]))}},wt={class:"mt-0 bg-white p-4 shadow rounded-lg h-5/6"},Mt=e("h2",{class:"font-bold text-center text-xl pt-0"},"Directivos",-1),kt=e("div",{class:"my-1"},null,-1),Pt=e("div",{class:"bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mb-6"},null,-1),St=e("thead",null,[e("tr",{class:"text-sm leading-normal"},[e("th",{class:"py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light"}," ID "),e("th",{class:"py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light"}," Apellido Paterno "),e("th",{class:"py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light"}," Apellido Materno "),e("th",{class:"py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light"}," Nombre "),e("th",{class:"py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light"}," Tipo Directivo "),e("th",{class:"py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light"}," Numero de Unidades "),e("th",{class:"py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light"}," Numero de Operadores ")])],-1),R="xl",V=!0,Bt={__name:"SociosPrestadores",props:{message:{String,default:""},color:{String,default:""},directivo:{type:Object},tipDirectivo:{type:Object},usuario:{type:Object}},setup(s){U.use(L),U.use(L);const n=s,c=(i="Documento")=>{const o=new Z("landscape");o.setFontSize(12),o.text(i,14,22);const h=new Date().toLocaleDateString();o.setFontSize(8),o.text(`Fecha: ${h}`,260,22);const M=["ID","Apellido Paterno","Apellido Materno","Nombre","Tipo De Directivo","Número De Unidades","Número De Operadores"],y=[];z(()=>{$("#directivosTablaId").DataTable().rows({search:"applied"}).data().each(k=>{var F;y.push([k.idDirectivo,k.apellidoP,k.apellidoM,k.nombre,((F=n.tipDirectivo.find(J=>J.idTipoDirectivo===k.idTipoDirectivo))==null?void 0:F.tipoDirectivo)||"",k.numUnidades,k.numOperadores])}),o.autoTable({head:[M],body:y,startY:24}),o.save(`${i}.pdf`)})},T=()=>{z(()=>{const h=$("#directivosTablaId").DataTable().rows({search:"applied"}).data().toArray().map(_=>{var A;return{ID:_.idDirectivo,"Apellido Paterno":_.apellidoP,"Apellido Materno":_.apellidoM,Nombre:_.nombre,"Tipo De Directivo":((A=n.tipDirectivo.find(k=>k.idTipoDirectivo===_.idTipoDirectivo))==null?void 0:A.tipoDirectivo)||"","Número De Unidades":_.numUnidades,"Número De Operadores":_.numOperadores}}),M=O.json_to_sheet(h),y=O.book_new();O.book_append_sheet(y,M,"Directivos Registrados"),ee(y,"Directivos Registrados.xlsx")})},t=[{extend:"copyHtml5",text:'<i class="fa-solid fa-copy"></i> Copiar',className:"bg-cyan-500 hover:bg-cyan-600 text-white py-1/2 px-3 rounded mb-2 jump-icon",exportOptions:{columns:[0,2]},button:!0},{title:"Directivos registrados",text:'<i class="fa-solid fa-file-excel"></i> Excel',className:"bg-green-600 hover:bg-green-600 text-white py-1/2 px-3 rounded mb-2 jump-icon",action:()=>T()},{title:"Directivos registrados",text:'<i class="fa-solid fa-file-pdf"></i> PDF',className:"bg-red-500 hover:bg-red-600 text-white py-1/2 px-3 rounded mb-2 jump-icon",action:()=>c(n.title||"Directivos Registrados")},{title:"Directivos registrados",extend:"print",text:'<i class="fa-solid fa-print"></i> Imprimir',className:"bg-blue-500 hover:bg-blue-600 text-white py-1/2 px-3 rounded mb-2 jump-icon",exportOptions:{columns:[1,2,3,4,5,6]}}],g=[{data:null,render:function(i,o,h,M){return M.row+1}},{data:"apellidoP"},{data:"apellidoM"},{data:"nombre"},{data:"idTipoDirectivo",render:function(i,o,h,M){const y=n.tipDirectivo.find(_=>_.idTipoDirectivo===i);return y?y.tipoDirectivo:""}},{data:"numUnidades"},{data:"numOperadores"}],m=x(!1),p=x(!1);B({_method:"DELETE"});const a=x([]);var f={};const w=i=>{f=i,p.value=!0},E=()=>{m.value=!1},I=()=>{p.value=!1},r=i=>{a.value.includes(i)?a.value=a.value.filter(h=>h!==i):a.value.push(i);const o=document.getElementById("eliminarABtn");a.value.length>0?o.removeAttribute("disabled"):o.setAttribute("disabled","")};return K(()=>{document.getElementById("directivosTablaId").addEventListener("click",i=>{const o=i.target;if(o.classList.contains("directivos-checkboxes")){const h=parseInt(o.getAttribute("data-id"));if(n.directivo){const M=n.directivo.find(y=>y.idDirectivo===h);M?r(M):console.log("No se tiene directivo")}}}),$("#directivosTablaId").on("click",".editar-button",function(){const i=$(this).data("id"),o=n.directivo.find(h=>h.idDirectivo===i);w(o)})}),(i,o)=>(d(),C(Q,{title:"Directivos",usuario:n.usuario},{default:N(()=>[e("div",wt,[Mt,kt,Pt,e("div",null,[j(l(U),{class:"w-full table-auto text-sm display nowrap stripe compact cell-border order-column",id:"directivosTablaId",name:"directivosTablaId",columns:g,data:s.directivo,options:{responsive:!0,autoWidth:!1,dom:"Bftrip",language:{search:"Buscar",zeroRecords:"No hay registros para mostrar",info:"Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",infoEmpty:"Mostrando registros del 0 al 0 de un total de 0 registros",infoFiltered:"(filtrado de un total de _MAX_ registros)",lengthMenu:"Mostrar _MENU_ registros",paginate:{first:"Primero",previous:"Anterior",next:"Siguiente",last:"Ultimo"}},buttons:[t],pageLength:20}},{default:N(()=>[St]),_:1},8,["data","options"])])]),j(Ce,{show:m.value,"max-width":R,closeable:V,onClose:E,title:"Añadir directivo",op:"1",modal:"modalCreate",tipDirectivo:n.tipDirectivo,directivo:n.directivo},null,8,["show","tipDirectivo","directivo"]),j($t,{show:p.value,"max-width":R,closeable:V,onClose:I,title:"Editar directivo",op:"2",modal:"modalEdit",tipDirectivo:n.tipDirectivo,directivo:l(f)},null,8,["show","tipDirectivo","directivo"])]),_:1},8,["usuario"]))}};export{Bt as default};
>>>>>>>> segundaParte:public/build/assets/SociosPrestadores-DO5IocbG.js
