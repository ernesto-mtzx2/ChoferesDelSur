import{_ as se}from"./PrincipalLayout-B-ui4FEp.js";import{u as z,i as V,r as S,o as l,j as q,e as M,a as e,g as H,t as y,w as O,d as r,k as G,c as h,l as j,F as I,m as A,p as T,f as x,L as Y,D as ee,s as ne,b as N,x as te}from"./app-Ce3_APRY.js";import"./buttons.print-C4y5Nhq8.js";import{S as J}from"./sweetalert2.all-CXy5bPl9.js";import{_ as X}from"./Modal-Bxhlgidt.js";import{_ as re}from"./Mensaje-az-sDhka.js";import{E as le}from"./jspdf.plugin.autotable-Fnf_Fpyl.js";import{u as K,w as ce}from"./xlsx-769MyM77.js";/* empty css                                                */const ue={class:"mt-2 bg-white p-4 shadow rounded-lg"},me={class:"border-b border-gray-900/10 pb-12"},pe={class:"text-base font-semibold leading-7 text-gray-900"},ge=e("p",{class:"mt-1 text-sm leading-6 text-gray-600 mb-4"},[x("Rellene el formulario para poder registrar una unidad. Los campos con "),e("span",{class:"text-red-500"},"*"),x(" son obligatorios ")],-1),be={class:"flex flex-wrap -mx-4"},fe={class:"sm:col-span-2"},he={class:"sm:col-span-1",hidden:""},xe=e("label",{for:"idUnidad",class:"block text-sm font-medium leading-6 text-gray-900"},"idUnidad",-1),ye={class:"mt-2"},ve=["id"],_e={class:"sm:col-span-2 px-4"},Ue=e("label",{for:"numeroUnidad",class:"block text-sm font-medium leading-6 text-gray-900"},[x("Número de unidad "),e("span",{class:"text-red-500"},"*")],-1),$e={class:"mt-2"},we=["id"],Se={key:0,class:"text-red-500 text-xs mt-1"},ke={class:"sm:col-span-2 px-4"},Oe=e("label",{for:"ruta",class:"block text-sm font-medium leading-6 text-gray-900"},[x("Ruta "),e("span",{class:"text-red-500"},"*")],-1),De={class:"mt-2"},Ee=["id"],Ce=e("option",{value:"",disabled:"",selected:""},"Seleccione la ruta",-1),je=["value"],Re={key:0,class:"text-red-500 text-xs mt-1"},Be={class:"sm:col-span-2 px-4"},Ie=e("label",{for:"operador",class:"block text-sm font-medium leading-6 text-gray-900"},"Operador",-1),Ae={class:"mt-2"},Te=["id"],Ne=e("option",{value:"",disabled:"",selected:""},"Seleccione al operador para esta unidad",-1),Me=["value"],Fe={class:"sm:col-span-2 px-4"},Le=e("label",{for:"directivo",class:"block text-sm font-medium leading-6 text-gray-900"},[x("Dueño de la unidad "),e("span",{class:"text-red-500"},"*")],-1),We={class:"mt-2"},ze=["id"],qe=e("option",{value:"",disabled:"",selected:""},"Seleccione al dueño de la unidad",-1),Pe=["value"],Qe={key:0,class:"text-red-500 text-xs mt-1"},Ge={class:"mt-6 flex items-center justify-end gap-x-6"},Ve=["id"],He=e("i",{class:"fa-solid fa-ban"},null,-1),Xe=["disabled"],Ye=e("i",{class:"fa-solid fa-floppy-disk mr-2"},null,-1),Je={__name:"FormularioUnidades",props:{show:{type:Boolean,default:!1,hora:String},maxWidth:{type:String,default:"2xl"},closeable:{type:Boolean,default:!0},unidad:{type:Object,default:()=>({})},operadoresDisp:{type:Object,default:()=>({})},ruta:{type:Object,default:()=>({})},directivo:{type:Object,default:()=>({})},title:{type:String},modal:{type:String},op:{type:String}},emits:["close"],setup(d,{emit:o}){const g=d,C=o,t=z({idUnidad:g.unidad.idUnidad,numeroUnidad:g.unidad.numeroUnidad,ruta:g.unidad.idRuta,operador:g.unidad.idOperador,directivo:g.directivo.idDirectivo});V(()=>g.unidad,async m=>{t.idUnidad=m.idUnidad,t.numeroUnidad=m.numeroUnidad,t.ruta=m.idRuta,t.operador=m.idOperador,t.directivo=m.idDirectivo},{deep:!0});const c=S(""),u=S("");S("");const b=S(""),v=async()=>{C("close"),t.reset()},D=m=>typeof m=="string"&&m.trim()!=="",E=m=>m!=null,i=async()=>{c.value=D(t.numeroUnidad)?"":"Ingrese el número de la unidad",u.value=E(t.ruta)?"":"Selecciones la ruta",b.value=E(t.directivo)?"":"Seleccione el dueño de la unidad",!(c.value||u.value||b.value)&&t.post(route("principal.addUnidad"),{onSuccess:()=>{v(),c.value="",u.value="",b.value=""}})};return(m,a)=>(l(),q(X,{show:d.show,"max-width":d.maxWidth,closeable:d.closeable,onClose:v},{default:M(()=>[e("div",ue,[e("form",{onSubmit:H(i,["prevent"])},[e("div",me,[e("h2",pe,y(d.title),1),ge,e("div",be,[e("div",fe,[e("div",he,[xe,e("div",ye,[O(e("input",{type:"number",name:"idUnidad","onUpdate:modelValue":a[0]||(a[0]=s=>r(t).idUnidad=s),placeholder:"Ingrese id de la unidad",id:"idUnidad"+d.op,class:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"},null,8,ve),[[G,r(t).idUnidad]])])])]),e("div",_e,[Ue,e("div",$e,[O(e("input",{type:"text",name:"numeroUnidad",id:"numeroUnidad"+d.op,"onUpdate:modelValue":a[1]||(a[1]=s=>r(t).numeroUnidad=s),placeholder:"Ingrese el número de la unidad",class:"block w-60 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"},null,8,we),[[G,r(t).numeroUnidad]])]),c.value!=""?(l(),h("div",Se,y(c.value),1)):j("",!0)]),e("div",ke,[Oe,e("div",De,[O(e("select",{name:"ruta",id:"ruta"+d.op,"onUpdate:modelValue":a[2]||(a[2]=s=>r(t).ruta=s),placeholder:"Seleccione la ruta",class:"block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"},[Ce,(l(!0),h(I,null,A(d.ruta,s=>(l(),h("option",{key:s.idRuta,value:s.idRuta},y(s.nombreRuta),9,je))),128))],8,Ee),[[T,r(t).ruta]])]),u.value!=""?(l(),h("div",Re,y(u.value),1)):j("",!0)]),e("div",Be,[Ie,e("div",Ae,[O(e("select",{name:"operador",id:"operador"+d.op,"onUpdate:modelValue":a[3]||(a[3]=s=>r(t).operador=s),placeholder:"Seleccione al operador",class:"block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"},[Ne,(l(!0),h(I,null,A(d.operadoresDisp,s=>(l(),h("option",{key:s.idOperador,value:s.idOperador},y(s.nombre_completo),9,Me))),128))],8,Te),[[T,r(t).operador]])])]),e("div",Fe,[Le,e("div",We,[O(e("select",{name:"directivo",id:"directivo"+d.op,"onUpdate:modelValue":a[4]||(a[4]=s=>r(t).directivo=s),placeholder:"Seleccione al dueño de la unidad",class:"block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"},[qe,(l(!0),h(I,null,A(d.directivo,s=>(l(),h("option",{key:s.idDirectivo,value:s.idDirectivo},y(s.nombre_completo),9,Pe))),128))],8,ze),[[T,r(t).directivo]])]),b.value!=""?(l(),h("div",Qe,y(b.value),1)):j("",!0)])])]),e("div",Ge,[e("button",{type:"button",id:"cerrar"+d.op,class:"text-sm font-semibold leading-6 bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 text-white py-2 px-4 rounded","data-bs.dismiss":"modal",onClick:v},[He,x(" Cancelar")],8,Ve),e("button",{type:"submit",class:"bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded",disabled:r(t).processing},[Ye,x("Guardar")],8,Xe)])],32)])]),_:1},8,["show","max-width","closeable"]))}},Ke={class:"mt-2 bg-white p-4 shadow rounded-lg"},Ze={class:"border-b border-gray-900/10 pb-12"},et={class:"text-base font-semibold leading-7 text-gray-900"},tt=e("p",{class:"mt-1 text-sm leading-6 text-gray-600 mb-4"},"Rellene el formulario para poder asignar un operador a una unidad. ",-1),dt={class:"flex flex-wrap -mx-4"},at={class:"sm:col-span-2 px-4"},ot=e("label",{for:"unidad",class:"block text-sm font-medium leading-6 text-gray-900"},[x("Unidad "),e("span",{class:"text-red-500"},"*")],-1),it={class:"mt-2"},st=["id"],nt=e("option",{value:"",disabled:"",selected:""},"Seleccione la unidad",-1),rt=["value"],lt={key:0,class:"text-red-500 text-xs mt-1"},ct={class:"sm:col-span-2 px-4"},ut=e("label",{for:"operador",class:"block text-sm font-medium leading-6 text-gray-900"},[x("Operador "),e("span",{class:"text-red-500"},"*")],-1),mt={class:"mt-2"},pt=["id"],gt=e("option",{value:"",disabled:"",selected:""},"Seleccione al operador para esta unidad",-1),bt=["value"],ft={key:0,class:"text-red-500 text-xs mt-1"},ht={class:"mt-6 flex items-center justify-end gap-x-6"},xt=["id"],yt=e("i",{class:"fa-solid fa-ban"},null,-1),vt=["disabled"],_t=e("i",{class:"fa-solid fa-floppy-disk mr-2"},null,-1),Ut={__name:"FormularioAsignarOperador",props:{show:{type:Boolean,default:!1,hora:String},maxWidth:{type:String,default:"2xl"},closeable:{type:Boolean,default:!0},unidad:{type:Object,default:()=>({})},operadoresDisp:{type:Object,default:()=>({})},unidadesDisp:{type:Object,default:()=>({})},title:{type:String},modal:{type:String},op:{type:String}},emits:["close"],setup(d,{emit:o}){const g=d,C=o,t=z({idUnidad:g.unidad.idUnidad,unidad:g.unidad.idUnidad,operador:g.unidad.idOperador});V(()=>g.unidad,async i=>{t.idUnidad=i.idUnidad,t.unidad=i.idUnidad,t.operador=i.idOperador},{deep:!0});const c=S(""),u=S(""),b=async()=>{C("close"),t.reset()},v=i=>i!=null,D=async()=>{c.value=v(t.unidad)?"":"Seleccione la unidad",u.value=v(t.operador)?"":"Seleccione el operador",!(c.value||u.value)&&t.post(route("principal.asignarOperador"),{onSuccess:()=>{b(),c.value="",u.value=""}})},E=async()=>{if(numeroUnidadError.value=v(t.unidad)?"":"Seleccione la unidad",u.value=v(t.operador)?"":"Seleccione el operador",!(c.value||u.value)){var i=document.getElementById("idUnidad2").value;console.log("idUnidad:"+i),t.put(route("principal.actualizarUnidad",i),{onSuccess:()=>{b(),console.log("idUnidad Editando:"+i),c.value="",u.value=""}})}};return(i,m)=>(l(),q(X,{show:d.show,"max-width":d.maxWidth,closeable:d.closeable,onClose:b},{default:M(()=>[e("div",Ke,[e("form",{onSubmit:m[2]||(m[2]=H(a=>d.op==="1"?D():E(),["prevent"]))},[e("div",Ze,[e("h2",et,y(d.title),1),tt,e("div",dt,[e("div",at,[ot,e("div",it,[O(e("select",{name:"unidad",id:"unidad"+d.op,"onUpdate:modelValue":m[0]||(m[0]=a=>r(t).unidad=a),placeholder:"Seleccione la unidad",class:"block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"},[nt,(l(!0),h(I,null,A(d.unidadesDisp,a=>(l(),h("option",{key:a.idUnidad,value:a.idUnidad},y(a.numeroUnidad),9,rt))),128))],8,st),[[T,r(t).unidad]])]),c.value!=""?(l(),h("div",lt,y(c.value),1)):j("",!0)]),e("div",ct,[ut,e("div",mt,[O(e("select",{name:"operador",id:"operador"+d.op,"onUpdate:modelValue":m[1]||(m[1]=a=>r(t).operador=a),placeholder:"Seleccione al operador",class:"block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"},[gt,(l(!0),h(I,null,A(d.operadoresDisp,a=>(l(),h("option",{key:a.idOperador,value:a.idOperador},y(a.nombre_completo),9,bt))),128))],8,pt),[[T,r(t).operador]])]),u.value!=""?(l(),h("div",ft,y(u.value),1)):j("",!0)])])]),e("div",ht,[e("button",{type:"button",id:"cerrar"+d.op,class:"text-sm font-semibold leading-6 bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 text-white py-2 px-4 rounded","data-bs.dismiss":"modal",onClick:b},[yt,x(" Cancelar")],8,xt),e("button",{type:"submit",class:"bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded",disabled:r(t).processing},[_t,x("Guardar")],8,vt)])],32)])]),_:1},8,["show","max-width","closeable"]))}},$t={class:"mt-2 bg-white p-4 shadow rounded-lg"},wt={class:"border-b border-gray-900/10 pb-12"},St={class:"text-base font-semibold leading-7 text-gray-900"},kt=e("p",{class:"mt-1 text-sm leading-6 text-gray-600 mb-4"},"Seleccione la unidad a la que le quiere quitar el operador. ",-1),Ot={class:"flex flex-wrap -mx-4"},Dt={class:"sm:col-span-2 px-4"},Et=e("label",{for:"unidad",class:"block text-sm font-medium leading-6 text-gray-900"},[x("Unidad "),e("span",{class:"text-red-500"},"*")],-1),Ct={class:"mt-2"},jt=["id"],Rt=e("option",{value:"",disabled:"",selected:""},"Seleccione la unidad",-1),Bt=["value"],It={key:0,class:"text-red-500 text-xs mt-1"},At={class:"mt-6 flex items-center justify-end gap-x-6"},Tt=["id"],Nt=e("i",{class:"fa-solid fa-ban"},null,-1),Mt=["disabled"],Ft=e("i",{class:"fa-solid fa-floppy-disk mr-2"},null,-1),Lt={__name:"FormularioQuitarOperador",props:{show:{type:Boolean,default:!1,hora:String},maxWidth:{type:String,default:"2xl"},closeable:{type:Boolean,default:!0},unidad:{type:Object,default:()=>({})},operadoresDisp:{type:Object,default:()=>({})},unidadesConOperador:{type:Object,default:()=>({})},title:{type:String},modal:{type:String},op:{type:String}},emits:["close"],setup(d,{emit:o}){const g=d,C=o,t=z({idUnidad:g.unidad.idUnidad,unidad:g.unidad.idUnidad,operador:g.unidad.idOperador});V(()=>g.unidad,async i=>{t.idUnidad=i.idUnidad,t.unidad=i.idUnidad,t.operador=i.idOperador},{deep:!0});const c=S(""),u=S(""),b=async()=>{C("close"),t.reset()},v=i=>i!=null,D=async()=>{c.value=v(t.unidad)?"":"Seleccione la unidad",!c.value&&t.post(route("principal.quitarOperador"),{onSuccess:()=>{b(),c.value=""}})},E=async()=>{if(numeroUnidadError.value=v(t.unidad)?"":"Seleccione la unidad",u.value=v(t.operador)?"":"Seleccione el operador",!(c.value||u.value)){var i=document.getElementById("idUnidad2").value;console.log("idUnidad:"+i),t.put(route("principal.actualizarUnidad",i),{onSuccess:()=>{b(),console.log("idUnidad Editando:"+i),c.value="",u.value=""}})}};return(i,m)=>(l(),q(X,{show:d.show,"max-width":d.maxWidth,closeable:d.closeable,onClose:b},{default:M(()=>[e("div",$t,[e("form",{onSubmit:m[1]||(m[1]=H(a=>d.op==="1"?D():E(),["prevent"]))},[e("div",wt,[e("h2",St,y(d.title),1),kt,e("div",Ot,[e("div",Dt,[Et,e("div",Ct,[O(e("select",{name:"unidad",id:"unidad"+d.op,"onUpdate:modelValue":m[0]||(m[0]=a=>r(t).unidad=a),placeholder:"Seleccione la unidad",class:"block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"},[Rt,(l(!0),h(I,null,A(d.unidadesConOperador,a=>(l(),h("option",{key:a.idUnidad,value:a.idUnidad},y(a.numeroUnidad),9,Bt))),128))],8,jt),[[T,r(t).unidad]])]),c.value!=""?(l(),h("div",It,y(c.value),1)):j("",!0)])])]),e("div",At,[e("button",{type:"button",id:"cerrar"+d.op,class:"text-sm font-semibold leading-6 bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 text-white py-2 px-4 rounded","data-bs.dismiss":"modal",onClick:b},[Nt,x(" Cancelar")],8,Tt),e("button",{type:"submit",class:"bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded",disabled:r(t).processing},[Ft,x("Guardar")],8,Mt)])],32)])]),_:1},8,["show","max-width","closeable"]))}},Wt={class:"mt-2 bg-white p-4 shadow rounded-lg"},zt={class:"border-b border-gray-900/10 pb-12"},qt={class:"text-base font-semibold leading-7 text-gray-900"},Pt=e("p",{class:"mt-1 text-sm leading-6 text-gray-600 mb-4"},"Modifique los datos según sea necesario y guarde los cambios. ",-1),Qt={class:"flex flex-wrap -mx-4"},Gt={class:"sm:col-span-2"},Vt={class:"sm:col-span-1",hidden:""},Ht=e("label",{for:"idUnidad",class:"block text-sm font-medium leading-6 text-gray-900"},"idUnidad",-1),Xt={class:"mt-2"},Yt=["id"],Jt={class:"sm:col-span-2 px-4"},Kt=e("label",{for:"numeroUnidad",class:"block text-sm font-medium leading-6 text-gray-900"},[x("Número de unidad "),e("span",{class:"text-red-500"},"*")],-1),Zt={class:"mt-2"},ed=["id"],td={key:0,class:"text-red-500 text-xs mt-1"},dd={class:"sm:col-span-2 px-4"},ad=e("label",{for:"ruta",class:"block text-sm font-medium leading-6 text-gray-900"},[x("Ruta "),e("span",{class:"text-red-500"},"*")],-1),od={class:"mt-2"},id=["id"],sd=e("option",{value:"",disabled:"",selected:""},"Seleccione la ruta",-1),nd=["value"],rd={key:0,class:"text-red-500 text-xs mt-1"},ld={class:"sm:col-span-2 px-4"},cd=e("label",{for:"operador",class:"block text-sm font-medium leading-6 text-gray-900"},"Operador",-1),ud={class:"mt-2"},md={class:"block rounded-md py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm sm:leading-6"},pd={class:"sm:col-span-2 px-4"},gd=e("label",{for:"directivo",class:"block text-sm font-medium leading-6 text-gray-900"},[x("Dueño de la unidad "),e("span",{class:"text-red-500"},"*")],-1),bd={class:"mt-2"},fd=["id"],hd=e("option",{value:"",disabled:"",selected:""},"Seleccione al dueño de la unidad",-1),xd=["value"],yd={key:0,class:"text-red-500 text-xs mt-1"},vd={class:"mt-6 flex items-center justify-end gap-x-6"},_d=["id"],Ud=e("i",{class:"fa-solid fa-ban"},null,-1),$d=["disabled"],wd=e("i",{class:"fa-solid fa-floppy-disk mr-2"},null,-1),Sd={__name:"FormularioActualizarUnidades",props:{show:{type:Boolean,default:!1,hora:String},maxWidth:{type:String,default:"2xl"},closeable:{type:Boolean,default:!0},unidad:{type:Object,default:()=>({})},operador:{type:Object,default:()=>({})},operadoresDisp:{type:Object,default:()=>({})},ruta:{type:Object,default:()=>({})},directivo:{type:Object,default:()=>({})},title:{type:String},modal:{type:String},op:{type:String}},emits:["close"],setup(d,{emit:o}){const g=d,C=o,t=z({_method:"PUT",idUnidad:g.unidad.idUnidad,numeroUnidad:g.unidad.numeroUnidad,ruta:g.unidad.idRuta,operador:g.unidad.idOperador,directivo:g.unidad.idDirectivo});V(()=>g.unidad,async a=>{t.idUnidad=a.idUnidad,t.numeroUnidad=a.numeroUnidad,t.ruta=a.idRuta,t.operador=a.idOperador,t.directivo=a.idDirectivo},{deep:!0});const c=S(""),u=S("");S("");const b=S(""),v=async()=>{C("close"),t.reset()},D=a=>typeof a=="string"&&a.trim()!=="",E=a=>a!=null,i=async()=>{c.value=D(t.numeroUnidad)?"":"Ingrese el número de la unidad",u.value=E(t.ruta)?"":"Selecciones la ruta",b.value=E(t.directivo)?"":"Seleccione el dueño de la unidad",!(c.value||u.value||b.value)&&t.post(route("principal.actualizarUnidad",t.idUnidad),{onSuccess:()=>{v(),c.value="",u.value="",b.value=""}})},m=a=>{const s=g.operador.find(_=>_.idOperador===a);return s?s.nombre_completo:"Operador no encontrado"};return(a,s)=>(l(),q(X,{show:d.show,"max-width":d.maxWidth,closeable:d.closeable,onClose:v},{default:M(()=>[e("div",Wt,[e("form",{onSubmit:H(i,["prevent"])},[e("div",zt,[e("h2",qt,y(d.title),1),Pt,e("div",Qt,[e("div",Gt,[e("div",Vt,[Ht,e("div",Xt,[O(e("input",{type:"number",name:"idUnidad","onUpdate:modelValue":s[0]||(s[0]=_=>r(t).idUnidad=_),placeholder:"Ingrese id de la unidad",id:"idUnidad"+d.op,class:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"},null,8,Yt),[[G,r(t).idUnidad]])])])]),e("div",Jt,[Kt,e("div",Zt,[O(e("input",{type:"text",name:"numeroUnidad",id:"numeroUnidad"+d.op,"onUpdate:modelValue":s[1]||(s[1]=_=>r(t).numeroUnidad=_),placeholder:"Ingrese el número de la unidad",class:"block w-60 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"},null,8,ed),[[G,r(t).numeroUnidad]])]),c.value!=""?(l(),h("div",td,y(c.value),1)):j("",!0)]),e("div",dd,[ad,e("div",od,[O(e("select",{name:"ruta",id:"ruta"+d.op,"onUpdate:modelValue":s[2]||(s[2]=_=>r(t).ruta=_),placeholder:"Seleccione la ruta",class:"block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"},[sd,(l(!0),h(I,null,A(d.ruta,_=>(l(),h("option",{key:_.idRuta,value:_.idRuta},y(_.nombreRuta),9,nd))),128))],8,id),[[T,r(t).ruta]])]),u.value!=""?(l(),h("div",rd,y(u.value),1)):j("",!0)]),e("div",ld,[cd,e("div",ud,[e("p",md,y(m(r(t).operador)),1)])]),e("div",pd,[gd,e("div",bd,[O(e("select",{name:"directivo",id:"directivo"+d.op,"onUpdate:modelValue":s[3]||(s[3]=_=>r(t).directivo=_),placeholder:"Seleccione al dueño de la unidad",class:"block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"},[hd,(l(!0),h(I,null,A(d.directivo,_=>(l(),h("option",{key:_.idDirectivo,value:_.idDirectivo},y(_.nombre_completo),9,xd))),128))],8,fd),[[T,r(t).directivo]])]),b.value!=""?(l(),h("div",yd,y(b.value),1)):j("",!0)])])]),e("div",vd,[e("button",{type:"button",id:"cerrar"+d.op,class:"text-sm font-semibold leading-6 bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 text-white py-2 px-4 rounded","data-bs.dismiss":"modal",onClick:v},[Ud,x(" Cancelar")],8,_d),e("button",{type:"submit",class:"bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded",disabled:r(t).processing},[wd,x("Guardar")],8,$d)])],32)])]),_:1},8,["show","max-width","closeable"]))}},kd={class:"mt-0 bg-white p-4 shadow rounded-lg h-5/6"},Od=e("h2",{class:"font-bold text-center text-xl pt-0"},"Unidades",-1),Dd=e("div",{class:"my-1"},null,-1),Ed=e("div",{class:"bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mb-3"},null,-1),Cd={class:"py-3 flex flex-col md:flex-row md:items-start md:space-x-3 space-y-3 md:space-y-0"},jd=e("i",{class:"fa fa-plus mr-2"},null,-1),Rd=e("i",{class:"fa fa-trash mr-2"},null,-1),Bd=e("i",{class:"fa fa-male","aria-hidden":"true"},null,-1),Id=e("i",{class:"fa fa-male","aria-hidden":"true"},null,-1),Ad=e("thead",null,[e("tr",{class:"text-sm leading-normal"},[e("th",{class:"py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light"}),e("th",{class:"py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light"}),e("th",{class:"py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light"}," ID "),e("th",{class:"py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light"}," Número de Unidad "),e("th",{class:"py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light"}," Operador "),e("th",{class:"py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light"}," Ruta "),e("th",{class:"py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light"}," Dueño de la unidad ")])],-1),P="xl",Q=!0,Qd={__name:"Unidades",props:{message:{String,default:""},color:{String,default:""},unidad:{type:Object},ruta:{type:Object},operador:{type:Object},directivo:{type:Object},operadoresDisp:{type:Object},unidadesDisp:{type:Object},unidadesConOperador:{type:Object},usuario:{type:Object}},setup(d){Y.use(ee),Y.use(ee);const o=d,g=(p="Documento")=>{const n=new le("landscape");n.setFontSize(12),n.text(p,14,22);const f=new Date().toLocaleDateString();n.setFontSize(8),n.text(`Fecha: ${f}`,260,22);const w=["ID","Número De Unidad","Operador","Ruta","Dueño De La Uniad"],U=[];te(()=>{$("#unidadesTablaId").DataTable().rows({search:"applied"}).data().each(R=>{var L,B,Z;U.push([R.idUnidad,R.numeroUnidad,((L=o.operador.find(W=>W.idOperador===R.idOperador))==null?void 0:L.nombre_completo)||"",((B=o.ruta.find(W=>W.idRuta===R.idRuta))==null?void 0:B.nombreRuta)||"",((Z=o.directivo.find(W=>W.idDirectivo===R.idDirectivo))==null?void 0:Z.nombre_completo)||""])}),n.autoTable({head:[w],body:U,startY:24}),n.save(`${p}.pdf`)})},C=()=>{te(()=>{const f=$("#unidadesTablaId").DataTable().rows({search:"applied"}).data().toArray().map(k=>{var F,R,L;return{ID:k.idUnidad,"Número De Unidad":k.numeroUnidad,Operador:((F=o.operador.find(B=>B.idOperador===k.idOperador))==null?void 0:F.nombre_completo)||"",Ruta:((R=o.ruta.find(B=>B.idRuta===k.idRuta))==null?void 0:R.nombreRuta)||"","Dueño De La Unidad":((L=o.directivo.find(B=>B.idDirectivo===k.idDirectivo))==null?void 0:L.nombre_completo)||""}}),w=K.json_to_sheet(f),U=K.book_new();K.book_append_sheet(U,w,"Unidades Registrados"),ce(U,"Unidades Registrados.xlsx")})},t=[{extend:"copyHtml5",text:'<i class="fa-solid fa-copy"></i> Copiar',className:"bg-cyan-500 hover:bg-cyan-600 text-white py-1/2 px-3 rounded mb-2 jump-icon",exportOptions:{columns:[0,2]},button:!0},{title:"Unidades Registradas",text:'<i class="fa-solid fa-file-excel"></i> Excel',className:"bg-green-600 hover:bg-green-600 text-white py-1/2 px-3 rounded mb-2 jump-icon",action:()=>C()},{title:"Unidades Registradas",text:'<i class="fa-solid fa-file-pdf"></i> PDF',className:"bg-red-500 hover:bg-red-600 text-white py-1/2 px-3 rounded mb-2 jump-icon",orientation:"landscape",action:()=>g(o.title||"Unidades Registradas")},{title:"Unidades Registradas",extend:"print",text:'<i class="fa-solid fa-print"></i> Imprimir',className:"bg-blue-500 hover:bg-blue-600 text-white py-1/2 px-3 rounded mb-2 jump-icon",exportOptions:{columns:[2,3,4,5,6]}}],c=[{data:null,render:function(p,n,f,w){return""}},{data:null,render:function(p,n,f,w){return`<input type="checkbox" class="unidades-checkboxes" data-id="${f.idUnidad}" ">`}},{data:null,render:function(p,n,f,w){return w.row+1}},{data:"numeroUnidad"},{data:"idOperador",render:function(p,n,f,w){if(p){const U=o.operador.find(k=>k.idOperador===p);return U?U.nombre_completo:""}else return'<span style="color: red;">Sin asignar</span>'}},{data:"idRuta",render:function(p,n,f,w){const U=o.ruta.find(k=>k.idRuta===p);return U?U.nombreRuta:""}},{data:"idDirectivo",render:function(p,n,f,w){const U=o.directivo.find(k=>k.idDirectivo===p);return U?U.nombre_completo:""}},{data:null,render:function(p,n,f,w){return`<button class="editar-button" data-id="${f.idUnidad}" style="display: flex; justify-content: center;"><i class="fa fa-pencil"></i></button>`}}],u=S(!1),b=S(!1),v=S(!1),D=S(!1),E=z({_method:"DELETE"}),i=S([]);var m={};const a=p=>{m=p,D.value=!0},s=()=>{u.value=!1},_=()=>{b.value=!1},de=()=>{v.value=!1},ae=()=>{D.value=!1},oe=p=>{i.value.includes(p)?i.value=i.value.filter(f=>f!==p):i.value.push(p);const n=document.getElementById("eliminarABtn");i.value.length>0?n.removeAttribute("disabled"):n.setAttribute("disabled","")};ne(()=>{document.getElementById("unidadesTablaId").addEventListener("click",p=>{const n=p.target;if(n.classList.contains("unidades-checkboxes")){const f=parseInt(n.getAttribute("data-id"));if(o.unidad){const w=o.unidad.find(U=>U.idUnidad===f);w?oe(w):console.log("No se tiene unidad")}}}),$("#unidadesTablaId").on("click",".editar-button",function(){const p=$(this).data("id"),n=o.unidad.find(f=>f.idUnidad===p);a(n)})});const ie=()=>{const p=J.mixin({buttonsStyling:!0}),n=i.value.map(f=>f.numeroUnidad).join(", ");p.fire({title:"¿Estas seguro que deseas eliminar la(s) unidad(es) seleccionada(s)?",html:`Unidades seleccionadas: ${n}`,icon:"warning",showCancelButton:!0,confirmButtonText:'<i class="fa-solid fa-check"></i> Confirmar',cancelButtonText:'<i class="fa-solid fa-ban"></i> Cancelar'}).then(async f=>{if(f.isConfirmed)try{const U=i.value.map(F=>F.idUnidad).join(",");await E.post(route("principal.eliminarUnidad",U)),i.value=[];const k=document.getElementById("eliminarABtn");i.value.length>0?k.removeAttribute("disabled"):k.setAttribute("disabled",""),J.fire({title:"Unidad(es) eliminado(s) correctamente",icon:"success"}),window.flash={message:"Unidad(es) eliminado(s) correctamente",color:"green"}}catch(w){console.log("Error al eliminar varias unidades: "+w),J.fire({title:"Error",text:"Hubo un error al eliminar las unidades. Por favor, inténtalo de nuevo más tarde.",icon:"error"})}})};return(p,n)=>(l(),q(se,{title:"Formar Unidades",usuario:o.usuario},{default:M(()=>[e("div",kd,[Od,Dd,Ed,N(re),e("div",Cd,[e("button",{class:"bg-green-500 hover:bg-green-500 text-white font-semibold py-2 px-4 rounded",onClick:n[0]||(n[0]=f=>u.value=!0),"data-bs-toggle":"modal","data-bs-target":"#modalCreate"},[jd,x("Agregar Unidad ")]),e("button",{id:"eliminarABtn",disabled:"",class:"bg-red-500 hover:bg-red-500 text-white font-semibold py-2 px-4 rounded",onClick:ie},[Rd,x("Borrar Unidad ")]),e("button",{class:"bg-cyan-500 hover:bg-cyan-500 text-white font-semibold py-2 px-4 rounded",onClick:n[1]||(n[1]=f=>b.value=!0),"data-bs-toggle":"modal","data-bs-target":"#modalCreate"},[Bd,x(" Asignar Operador ")]),e("button",{class:"bg-orange-500 hover:bg-orange-500 text-white font-semibold py-2 px-4 rounded",onClick:n[2]||(n[2]=f=>v.value=!0),"data-bs-toggle":"modal","data-bs-target":"#modalCreate"},[Id,x(" Quitar Operador ")])]),e("div",null,[N(r(Y),{class:"w-full table-auto text-sm display nowrap stripe compact cell-border order-column",id:"unidadesTablaId",name:"unidadesTablaId",columns:c,data:d.unidad,options:{responsive:!0,autoWidth:!1,dom:"Bftrip",language:{search:"Buscar",zeroRecords:"No hay registros para mostrar",info:"Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",infoEmpty:"Mostrando registros del 0 al 0 de un total de 0 registros",infoFiltered:"(filtrado de un total de _MAX_ registros)",lengthMenu:"Mostrar _MENU_ registros",paginate:{first:"Primero",previous:"Anterior",next:"Siguiente",last:"Ultimo"}},buttons:[t]}},{default:M(()=>[Ad]),_:1},8,["data","options"])])]),N(Je,{show:u.value,"max-width":P,closeable:Q,onClose:s,title:"Añadir unidad",op:"1",modal:"modalCreate",unidad:o.unidad,ruta:o.ruta,operadoresDisp:o.operadoresDisp,directivo:o.directivo},null,8,["show","unidad","ruta","operadoresDisp","directivo"]),N(Sd,{show:D.value,"max-width":P,closeable:Q,onClose:ae,title:"Editar unidad",op:"2",modal:"modalEdit",unidad:r(m),ruta:o.ruta,operador:o.operador,operadoresDisp:o.operadoresDisp,directivo:o.directivo},null,8,["show","unidad","ruta","operador","operadoresDisp","directivo"]),N(Ut,{show:b.value,"max-width":P,closeable:Q,onClose:_,title:"Asignar operador",op:"1",modal:"modalCreate",unidad:o.unidad,unidadesDisp:o.unidadesDisp,operadoresDisp:o.operadoresDisp},null,8,["show","unidad","unidadesDisp","operadoresDisp"]),N(Lt,{show:v.value,"max-width":P,closeable:Q,onClose:de,title:"Quitar operador",op:"1",modal:"modalCreate",unidad:o.unidad,unidadesConOperador:o.unidadesConOperador,operadoresDisp:o.operadoresDisp},null,8,["show","unidad","unidadesConOperador","operadoresDisp"])]),_:1},8,["usuario"]))}};export{Qd as default};
