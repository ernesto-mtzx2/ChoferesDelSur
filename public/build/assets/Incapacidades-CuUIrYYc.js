import{u as T,j as A,r as b,o as g,k as M,e as B,a as e,g as P,t as x,w as I,d,l as k,c as v,m as D,F as H,p as G,q as X,f as l,L as U,D as z,x as K,b as C}from"./app-BsoV4m-i.js";import"./buttons.print-BEOBd-_b.js";import{S as R}from"./sweetalert2.all-pPHlW5PW.js";import{_ as Q}from"./Mensaje-SHS4G5y-.js";import{_ as Y}from"./RHLayout-M_8E6eTY.js";import{_ as q}from"./Modal-HMyNZx6t.js";/* empty css                                                */import"./jspdf.plugin.autotable-CmxvN0yc.js";const Z={class:"mt-2 bg-white p-4 shadow rounded-lg"},V={class:"border-b border-gray-900/10 pb-12"},ee={class:"text-2xl font-semibold leading-7 text-gray-900"},te=e("p",{class:"mt-1 text-sm leading-6 text-gray-600"},[l("Rellene el formulario para poder registrar una incapacidad. Los campos con "),e("span",{class:"text-red-500"},"*"),l(" son obligatorios. ")],-1),ae={class:"flex flex-wrap -mx-4"},oe={class:"md:col-span-2"},se={class:"sm:col-span-2",hidden:""},ie=e("label",{for:"idIncapacidad",class:"block text-sm font-medium leading-6 text-gray-900"},"idIncapacidad",-1),de={class:"mt-1"},ne=["id"],re={class:"sm:col-span-2 px-2"},ce=e("label",{for:"motivo",class:"block text-sm font-medium leading-6 text-gray-900"},[l("Motivo "),e("span",{class:"text-red-500"},"*")],-1),le={class:"mt-2"},pe={key:0,class:"text-red-500 text-xs mt-1"},me={class:"sm:col-span-2 px-2"},ue=e("label",{for:"numeroDias",class:"block text-sm font-medium leading-6 text-gray-900"},[l("Número de Días "),e("span",{class:"text-red-500"},"*")],-1),ge={class:"mt-2"},fe={key:0,class:"text-red-500 text-xs mt-1"},he={class:"sm:col-span-2 px-2"},xe=e("label",{for:"fechaInicio",class:"block text-sm font-medium leading-6 text-gray-900"},[l("Fecha de Inicio "),e("span",{class:"text-red-500"},"*")],-1),be={class:"mt-2"},ye={key:0,class:"text-red-500 text-xs mt-1"},ve={class:"sm:col-span-2 px-2"},_e=e("label",{for:"fechaFin",class:"block text-sm font-medium leading-6 text-gray-900"},[l("Fecha de Fin "),e("span",{class:"text-red-500"},"*")],-1),Ie={class:"mt-2"},we={key:0,class:"text-red-500 text-xs mt-1"},$e={class:"sm:col-span-2 px-4"},ke=e("label",{for:"chofer",class:"block text-sm font-medium leading-6 text-gray-900"},[l("Operador "),e("span",{class:"text-red-500"},"*")],-1),De={class:"mt-2"},Oe=["id"],Se=e("option",{value:"",disabled:"",selected:""},"Seleccione al operador para esta unidad",-1),Fe=["value"],Ee={key:0,class:"text-red-500 text-xs mt-1"},je={class:"mt-6 flex items-center justify-end gap-x-6"},Ce=["id"],Ae=e("i",{class:"fa-solid fa-ban"},null,-1),Be=["disabled"],Ne=e("i",{class:"fa-solid fa-floppy-disk mr-2"},null,-1),Te={__name:"FormularioIncapacidad",props:{show:{type:Boolean,default:!1},maxWidth:{type:String,default:"2xl"},closeable:{type:Boolean,default:!0},operador:{type:Object,default:()=>({})},operadoresAlta:{type:Object,default:()=>({})},incapacidad:{type:Object,default:()=>({})},title:{type:String},modal:{type:String},op:{type:String}},emits:["close"],setup(n,{emit:f}){const r=n,S=f,t=T({idIncapacidad:r.incapacidad.idIncapacidad,motivo:r.incapacidad.motivo,numeroDias:r.incapacidad.numeroDias,fechaInicio:r.incapacidad.fechaInicio,fechaFin:r.incapacidad.fechaFin,chofer:r.incapacidad.idOperador});A(()=>r.operador,async a=>{t.idOperador=a.idOperador,t.motivo=a.motivo,t.numeroDias=a.numeroDias,t.fechaInicio=a.fechaInicio,t.fechaFin=a.fechaFin,t.chofer=a.idOperador},{deep:!0}),A([()=>t.numeroDias,()=>t.fechaInicio],([a,o])=>{if(a&&o){const s=new Date(o),h=new Date(s);h.setDate(s.getDate()+parseInt(a,10)),t.fechaFin=h.toISOString().split("T")[0]}});const p=b(""),m=b(""),y=b(""),c=b(""),u=b(""),w=async()=>{S("close"),t.reset()},_=a=>typeof a=="string"&&a.trim()!=="",F=a=>a!=null,j=a=>a==null?!1:Number.isInteger(a)&&a>=0,E=a=>!(a==null||((typeof a=="string"||a instanceof String)&&(a=new Date(a)),!(a instanceof Date))||isNaN(a.getTime())),i=async()=>{p.value=_(t.motivo)?"":"Ingrese el motivo de la incapacidad",m.value=j(t.numeroDias)?"":"Ingrese el número de días de incapacidad",y.value=E(t.fechaInicio)?"":"Ingrese la fecha de inicio de incapacidad",c.value=E(t.fechaFin)?"":"Ingrese la fecha de fin de incapacidad",u.value=F(t.chofer)?"":"Seleccione a un operador",!(p.value||m.value||y.value||c.value||u.value)&&t.post(route("rh.addIncapacidad"),{onSuccess:()=>{w(),p.value="",m.value="",y.value="",c.value="",u.value=""}})};return(a,o)=>(g(),M(q,{show:n.show,"max-width":n.maxWidth,closeable:n.closeable,onClose:w},{default:B(()=>[e("div",Z,[e("form",{onSubmit:P(i,["prevent"])},[e("div",V,[e("h1",ee,x(n.title),1),te,e("div",ae,[e("div",oe,[e("div",se,[ie,e("div",de,[I(e("input",{type:"number",name:"idIncapacidad","onUpdate:modelValue":o[0]||(o[0]=s=>d(t).idIncapacidad=s),placeholder:"Ingrese id de la incapacidad",id:"idIncapacidad"+n.op,class:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"},null,8,ne),[[k,d(t).idIncapacidad]])])])]),e("div",re,[ce,e("div",le,[I(e("input",{type:"text",name:"motivo","onUpdate:modelValue":o[1]||(o[1]=s=>d(t).motivo=s),placeholder:"Ingrese el motivo de la incapacidad",class:"block w-64 rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"},null,512),[[k,d(t).motivo]])]),p.value!=""?(g(),v("div",pe,x(p.value),1)):D("",!0)]),e("div",me,[ue,e("div",ge,[I(e("input",{type:"number",name:"numeroDias","onUpdate:modelValue":o[2]||(o[2]=s=>d(t).numeroDias=s),placeholder:"Ingrese el número de días",class:"block w-32 rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"},null,512),[[k,d(t).numeroDias]])]),m.value!=""?(g(),v("div",fe,x(m.value),1)):D("",!0)]),e("div",he,[xe,e("div",be,[I(e("input",{type:"date",name:"fechaInicio","onUpdate:modelValue":o[3]||(o[3]=s=>d(t).fechaInicio=s),placeholder:"Ingrese la fecha de inicio",class:"block w-48 rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"},null,512),[[k,d(t).fechaInicio]])]),y.value!=""?(g(),v("div",ye,x(y.value),1)):D("",!0)]),e("div",ve,[_e,e("div",Ie,[I(e("input",{type:"date",name:"fechaFin","onUpdate:modelValue":o[4]||(o[4]=s=>d(t).fechaFin=s),placeholder:"Ingrese la fecha de fin",class:"block w-48 rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"},null,512),[[k,d(t).fechaFin]])]),c.value!=""?(g(),v("div",we,x(c.value),1)):D("",!0)]),e("div",$e,[ke,e("div",De,[I(e("select",{name:"chofer",id:"chofer"+n.op,"onUpdate:modelValue":o[5]||(o[5]=s=>d(t).chofer=s),placeholder:"Seleccione al operador",class:"block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"},[Se,(g(!0),v(H,null,G(n.operadoresAlta,s=>(g(),v("option",{key:s.idOperador,value:s.idOperador},x(s.nombre_completo),9,Fe))),128))],8,Oe),[[X,d(t).chofer]])]),u.value!=""?(g(),v("div",Ee,x(u.value),1)):D("",!0)])])]),e("div",je,[e("button",{type:"button",id:"cerrar"+n.op,class:"text-sm font-semibold leading-6 bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 text-white py-2 px-2 rounded","data-bs.dismiss":"modal",onClick:w},[Ae,l(" Cancelar")],8,Ce),e("button",{type:"submit",class:"bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-2 rounded",disabled:d(t).processing},[Ne,l("Guardar")],8,Be)])],32)])]),_:1},8,["show","max-width","closeable"]))}},Me={class:"mt-2 bg-white p-4 shadow rounded-lg"},Ue={class:"border-b border-gray-900/10 pb-12"},Re={class:"text-2xl font-semibold leading-7 text-gray-900"},Le=e("p",{class:"mt-1 text-sm leading-6 text-gray-600"},[l("Rellene el formulario para poder registrar una incapacidad. Los campos con "),e("span",{class:"text-red-500"},"*"),l(" son obligatorios. ")],-1),We={class:"flex flex-wrap -mx-4"},Pe={class:"md:col-span-2"},qe={class:"sm:col-span-2",hidden:""},ze=e("label",{for:"idIncapacidad",class:"block text-sm font-medium leading-6 text-gray-900"},"idIncapacidad",-1),He={class:"mt-1"},Ge=["id"],Xe={class:"sm:col-span-2 px-2"},Je=e("label",{for:"motivo",class:"block text-sm font-medium leading-6 text-gray-900"},[l("Motivo "),e("span",{class:"text-red-500"},"*")],-1),Ke={class:"mt-2"},Qe={key:0,class:"text-red-500 text-xs mt-1"},Ye={class:"sm:col-span-2 px-2"},Ze=e("label",{for:"numeroDias",class:"block text-sm font-medium leading-6 text-gray-900"},[l("Número de Días "),e("span",{class:"text-red-500"},"*")],-1),Ve={class:"mt-2"},et={key:0,class:"text-red-500 text-xs mt-1"},tt={class:"sm:col-span-2 px-2"},at=e("label",{for:"fechaInicio",class:"block text-sm font-medium leading-6 text-gray-900"},[l("Fecha de Inicio "),e("span",{class:"text-red-500"},"*")],-1),ot={class:"mt-2"},st={key:0,class:"text-red-500 text-xs mt-1"},it={class:"sm:col-span-2 px-2"},dt=e("label",{for:"fechaFin",class:"block text-sm font-medium leading-6 text-gray-900"},[l("Fecha de Fin "),e("span",{class:"text-red-500"},"*")],-1),nt={class:"mt-2"},rt={key:0,class:"text-red-500 text-xs mt-1"},ct={class:"sm:col-span-2 px-4"},lt=e("label",{for:"operador",class:"block text-sm font-medium leading-6 text-gray-900"},"Operador",-1),pt={class:"mt-2"},mt={class:"block rounded-md py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm sm:leading-6"},ut={class:"mt-6 flex items-center justify-end gap-x-6"},gt=["id"],ft=e("i",{class:"fa-solid fa-ban"},null,-1),ht=["disabled"],xt=e("i",{class:"fa-solid fa-floppy-disk mr-2"},null,-1),bt={__name:"FormularioActualizarIncapacidad",props:{show:{type:Boolean,default:!1},maxWidth:{type:String,default:"2xl"},closeable:{type:Boolean,default:!0},operador:{type:Object,default:()=>({})},operadoresAlta:{type:Object,default:()=>({})},incapacidad:{type:Object,default:()=>({})},title:{type:String},modal:{type:String},op:{type:String}},emits:["close"],setup(n,{emit:f}){const r=n,S=f;b({motivo:"",numeroDias:"",fechaInicio:"",fechaFin:""});const t=T({_method:"PUT",idIncapacidad:r.incapacidad.idIncapacidad,motivo:r.incapacidad.motivo,numeroDias:r.incapacidad.numeroDias,fechaInicio:r.incapacidad.fechaInicio,fechaFin:r.incapacidad.fechaFin,operador:r.incapacidad.idOperador});A(()=>r.incapacidad,async i=>{t.idIncapacidad=i.idIncapacidad,t.motivo=i.motivo,t.numeroDias=i.numeroDias,t.fechaInicio=i.fechaInicio,t.fechaFin=i.fechaFin,t.operador=i.idOperador},{deep:!0}),A([()=>t.numeroDias,()=>t.fechaInicio],([i,a])=>{if(i&&a){const o=new Date(a),s=new Date(o);s.setDate(o.getDate()+parseInt(i,10)),t.fechaFin=s.toISOString().split("T")[0]}});const p=b(""),m=b(""),y=b(""),c=b("");b("");const u=async()=>{S("close"),t.reset()},w=i=>typeof i=="string"&&i.trim()!=="",_=i=>i==null?!1:Number.isInteger(i)&&i>=0,F=i=>!(i==null||((typeof i=="string"||i instanceof String)&&(i=new Date(i)),!(i instanceof Date))||isNaN(i.getTime())),j=async()=>{p.value=w(t.motivo)?"":"Ingrese el motivo de la incapacidad",m.value=_(t.numeroDias)?"":"Ingrese el número de días de incapacidad",y.value=F(t.fechaInicio)?"":"Ingrese la fecha de inicio de incapacidad",c.value=F(t.fechaFin)?"":"Ingrese la fecha de fin de incapacidad",!(p.value||m.value||y.value||c.value)&&t.post(route("rh.actualizarIncapacidad",t.idIncapacidad),{onSuccess:()=>{u(),p.value="",m.value="",y.value="",c.value=""}})},E=i=>{const a=r.operador.find(o=>o.idOperador===i);return a?a.nombre_completo:"Operador no encontrado"};return(i,a)=>(g(),M(q,{show:n.show,"max-width":n.maxWidth,closeable:n.closeable,onClose:u},{default:B(()=>[e("div",Me,[e("form",{onSubmit:P(j,["prevent"])},[e("div",Ue,[e("h1",Re,x(n.title),1),Le,e("div",We,[e("div",Pe,[e("div",qe,[ze,e("div",He,[I(e("input",{type:"number",name:"idIncapacidad","onUpdate:modelValue":a[0]||(a[0]=o=>d(t).idIncapacidad=o),placeholder:"Ingrese id de la incapacidad",id:"idIncapacidad"+n.op,class:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"},null,8,Ge),[[k,d(t).idIncapacidad]])])])]),e("div",Xe,[Je,e("div",Ke,[I(e("input",{type:"text",name:"motivo","onUpdate:modelValue":a[1]||(a[1]=o=>d(t).motivo=o),placeholder:"Ingrese el motivo de la incapacidad",class:"block w-64 rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"},null,512),[[k,d(t).motivo]])]),p.value!=""?(g(),v("div",Qe,x(p.value),1)):D("",!0)]),e("div",Ye,[Ze,e("div",Ve,[I(e("input",{type:"number",name:"numeroDias","onUpdate:modelValue":a[2]||(a[2]=o=>d(t).numeroDias=o),placeholder:"Ingrese el número de días",class:"block w-32 rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"},null,512),[[k,d(t).numeroDias]])]),m.value!=""?(g(),v("div",et,x(m.value),1)):D("",!0)]),e("div",tt,[at,e("div",ot,[I(e("input",{type:"date",name:"fechaInicio","onUpdate:modelValue":a[3]||(a[3]=o=>d(t).fechaInicio=o),placeholder:"Ingrese la fecha de inicio",class:"block w-48 rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"},null,512),[[k,d(t).fechaInicio]])]),y.value!=""?(g(),v("div",st,x(y.value),1)):D("",!0)]),e("div",it,[dt,e("div",nt,[I(e("input",{type:"date",name:"fechaFin","onUpdate:modelValue":a[4]||(a[4]=o=>d(t).fechaFin=o),placeholder:"Ingrese la fecha de fin",class:"block w-48 rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"},null,512),[[k,d(t).fechaFin]])]),c.value!=""?(g(),v("div",rt,x(c.value),1)):D("",!0)]),e("div",ct,[lt,e("div",pt,[e("p",mt,x(E(d(t).operador)),1)])])])]),e("div",ut,[e("button",{type:"button",id:"cerrar"+n.op,class:"text-sm font-semibold leading-6 bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 text-white py-2 px-2 rounded","data-bs.dismiss":"modal",onClick:u},[ft,l(" Cancelar")],8,gt),e("button",{type:"submit",class:"bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-2 rounded",disabled:d(t).processing},[xt,l("Guardar")],8,ht)])],32)])]),_:1},8,["show","max-width","closeable"]))}},yt={class:"mt-2 bg-white p-4 shadow rounded-lg"},vt={class:"border-b border-gray-900/10 pb-12"},_t={class:"text-2xl font-semibold leading-7 text-gray-900"},It=e("p",{class:"mt-1 text-sm leading-6 text-gray-600"},"Seleccione al operador que haya termiando sus días de incapacidad y que vuelve a reincorporarse. ",-1),wt={class:"flex flex-wrap -mx-4"},$t={class:"md:col-span-2"},kt={class:"sm:col-span-2",hidden:""},Dt=e("label",{for:"idIncapacidad",class:"block text-sm font-medium leading-6 text-gray-900"},"idIncapacidad",-1),Ot={class:"mt-1"},St=["id"],Ft={class:"sm:col-span-2 px-4"},Et=e("label",{for:"chofer",class:"block text-sm font-medium leading-6 text-gray-900"},[l("Operador "),e("span",{class:"text-red-500"},"*")],-1),jt={class:"mt-2"},Ct=["id"],At=e("option",{value:"",disabled:"",selected:""},"Seleccione al operador",-1),Bt=["value"],Nt={key:0,class:"text-red-500 text-xs mt-1"},Tt={class:"mt-6 flex items-center justify-end gap-x-6"},Mt=["id"],Ut=e("i",{class:"fa-solid fa-ban"},null,-1),Rt=["disabled"],Lt=e("i",{class:"fa-solid fa-floppy-disk mr-2"},null,-1),Wt={__name:"FormularioReincorporar",props:{show:{type:Boolean,default:!1},maxWidth:{type:String,default:"2xl"},closeable:{type:Boolean,default:!0},operador:{type:Object,default:()=>({})},operadoresIncapacidad:{type:Object,default:()=>({})},incapacidad:{type:Object,default:()=>({})},title:{type:String},modal:{type:String},op:{type:String}},emits:["close"],setup(n,{emit:f}){const r=n,S=f,t=T({_method:"PUT",idIncapacidad:r.incapacidad.idIncapacidad,chofer:r.incapacidad.idOperador,idOperador:r.operador.idOperador});A(()=>r.operador,async u=>{t.idOperador=u.idOperador,t.chofer=u.idOperador},{deep:!0});const p=b(""),m=async()=>{S("close"),t.reset()},y=u=>u!=null,c=async()=>{p.value=y(t.chofer)?"":"Seleccione a un operador",!p.value&&t.post(route("rh.reincorporar"),{onSuccess:()=>{m(),p.value=""}})};return(u,w)=>(g(),M(q,{show:n.show,"max-width":n.maxWidth,closeable:n.closeable,onClose:m},{default:B(()=>[e("div",yt,[e("form",{onSubmit:P(c,["prevent"])},[e("div",vt,[e("h1",_t,x(n.title),1),It,e("div",wt,[e("div",$t,[e("div",kt,[Dt,e("div",Ot,[I(e("input",{type:"number",name:"idIncapacidad","onUpdate:modelValue":w[0]||(w[0]=_=>d(t).idIncapacidad=_),placeholder:"Ingrese id de la incapacidad",id:"idIncapacidad"+n.op,class:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"},null,8,St),[[k,d(t).idIncapacidad]])])])]),e("div",Ft,[Et,e("div",jt,[I(e("select",{name:"chofer",id:"chofer"+n.op,"onUpdate:modelValue":w[1]||(w[1]=_=>d(t).chofer=_),placeholder:"Seleccione al operador",class:"block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"},[At,(g(!0),v(H,null,G(n.operadoresIncapacidad,_=>(g(),v("option",{key:_.idOperador,value:_.idOperador},x(_.nombre_completo),9,Bt))),128))],8,Ct),[[X,d(t).chofer]])]),p.value!=""?(g(),v("div",Nt,x(p.value),1)):D("",!0)])])]),e("div",Tt,[e("button",{type:"button",id:"cerrar"+n.op,class:"text-sm font-semibold leading-6 bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 text-white py-2 px-2 rounded","data-bs.dismiss":"modal",onClick:m},[Ut,l(" Cancelar")],8,Mt),e("button",{type:"submit",class:"bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-2 rounded",disabled:d(t).processing},[Lt,l("Guardar")],8,Rt)])],32)])]),_:1},8,["show","max-width","closeable"]))}},Pt={class:"mt-0 bg-white p-4 shadow rounded-lg h-5/6"},qt=e("h2",{class:"font-bold text-center text-xl pt-0"},"Incapacidades",-1),zt=e("div",{class:"my-1"},null,-1),Ht=e("div",{class:"bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mb-6"},null,-1),Gt={class:"py-3 flex flex-col md:flex-row md:items-start md:space-x-3 space-y-3 md:space-y-0"},Xt=e("i",{class:"fa fa-plus mr-2"},null,-1),Jt=e("i",{class:"fa fa-trash mr-2"},null,-1),Kt=e("i",{class:"fa fa-refresh","aria-hidden":"true"},null,-1),Qt=e("thead",null,[e("tr",{class:"text-sm leading-normal"},[e("th",{class:"py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light"}),e("th",{class:"py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light"}," ID "),e("th",{class:"py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light"}," Operador "),e("th",{class:"py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light"}," Motivo de incapacidad "),e("th",{class:"py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light"}," Número de Días "),e("th",{class:"py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light"}," Fecha de Inicio "),e("th",{class:"py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light"}," Fecha de Fin ")])],-1),L="xl",W=!0,ia={__name:"Incapacidades",props:{message:{String,default:""},color:{String,default:""},operador:{type:Object},incapacidad:{type:Object},directivo:{type:Object},usuario:{type:Object},operadoresAlta:{type:Object},operadoresIncapacidad:{type:Object}},setup(n){U.use(z),U.use(z);const f=n,r=[{extend:"copyHtml5",text:'<i class="fa-solid fa-copy"></i> Copiar',className:"bg-cyan-500 hover:bg-cyan-600 text-white py-1/2 px-3 rounded mb-2 jump-icon",exportOptions:{columns:[0,2]},button:!0},{title:"Directivos registrados",extend:"excelHtml5",text:'<i class="fa-solid fa-file-excel"></i> Excel',className:"bg-green-600 hover:bg-green-600 text-white py-1/2 px-3 rounded mb-2 jump-icon",exportOptions:{columns:[2,3,4,5,6]}},{title:"Directivos registrados",extend:"pdfHtml5",text:'<i class="fa-solid fa-file-pdf"></i> PDF',className:"bg-red-500 hover:bg-red-600 text-white py-1/2 px-3 rounded mb-2 jump-icon",exportOptions:{columns:[2,3,4,5,6]}},{title:"Directivos registrados",extend:"print",text:'<i class="fa-solid fa-print"></i> Imprimir',className:"bg-blue-500 hover:bg-blue-600 text-white py-1/2 px-3 rounded mb-2 jump-icon",exportOptions:{columns:[2,3,4,5,6]}}],S=[{data:null,render:function(a,o,s,h){return`<input type="checkbox" class="incapacidades-checkboxes" data-id="${s.idIncapacidad}" ">`}},{data:null,render:function(a,o,s,h){return h.row+1}},{data:"idOperador",render:function(a,o,s,h){const O=f.operador.find(N=>N.idOperador===a);return O?O.nombre_completo:""}},{data:"motivo"},{data:"numeroDias"},{data:"fechaInicio"},{data:"fechaFin"},{data:null,render:function(a,o,s,h){return`<button class="editar-button" data-id="${s.idIncapacidad}" style="display: flex; justify-content: center;"><i class="fa fa-pencil"></i></button>`}}],t=b(!1),p=b(!1),m=b(!1),y=T({_method:"DELETE"}),c=b([]);var u={};const w=a=>{u=a,p.value=!0},_=()=>{m.value=!1},F=()=>{t.value=!1},j=()=>{p.value=!1},E=a=>{c.value.includes(a)?c.value=c.value.filter(s=>s!==a):c.value.push(a);const o=document.getElementById("eliminarABtn");c.value.length>0?o.removeAttribute("disabled"):o.setAttribute("disabled","")};K(()=>{document.getElementById("incapacidadesTablaId").addEventListener("click",a=>{const o=a.target;if(o.classList.contains("incapacidades-checkboxes")){const s=parseInt(o.getAttribute("data-id"));if(f.incapacidad){const h=f.incapacidad.find(O=>O.idIncapacidad===s);h?E(h):console.log("No se tiene incapacidad")}}}),$("#incapacidadesTablaId").on("click",".editar-button",function(){const a=$(this).data("id"),o=f.incapacidad.find(s=>s.idIncapacidad===a);w(o)})});const i=()=>{const a=R.mixin({buttonsStyling:!0}),o=c.value.map(s=>{const h=f.operador.find(O=>O.idOperador===s.idOperador);return h?h.nombre_completo:""}).filter(s=>s!=="").join(", ");a.fire({title:"¿Esta seguro que desea eliminar la(s) incapacidad(es) del(los) operador(es) seleccionado(s)?",html:`Operador(es) seleccionado(s): ${o}`,showCancelButton:!0,confirmButtonText:'<i class="fa-solid fa-check"></i> Confirmar',cancelButtonText:'<i class="fa-solid fa-ban"></i> Cancelar'}).then(async s=>{if(s.isConfirmed)try{const O=c.value.map(J=>J.idIncapacidad).join(",");await y.post(route("rh.eliminarIncapacidad",O)),c.value=[];const N=document.getElementById("eliminarABtn");c.value.length>0?N.removeAttribute("disabled"):N.setAttribute("disabled",""),R.fire({title:"Incapacidad eliminado correctamente",icon:"success"}),window.flash={message:"Incapacidad eliminado correctamente",color:"green"}}catch(h){console.log("Error al eliminar varias incapacidades: "+h),R.fire({title:"Error",text:"Hubo un error al eliminar la incapacidad. Por favor, inténtalo de nuevo más tarde.",icon:"error"})}})};return(a,o)=>(g(),M(Y,{title:"Incapacidades",usuario:f.usuario},{default:B(()=>[e("div",Pt,[qt,zt,Ht,C(Q),e("div",Gt,[e("button",{class:"bg-green-500 hover:bg-green-500 text-white font-semibold py-2 px-4 rounded",onClick:o[0]||(o[0]=s=>t.value=!0),"data-bs-toggle":"modal","data-bs-target":"#modalCreate"},[Xt,l("Agregar Incapacidad ")]),e("button",{id:"eliminarABtn",disabled:"",class:"bg-red-500 hover:bg-red-500 text-white font-semibold py-2 px-4 rounded",onClick:i},[Jt,l("Borrar Incapacidad ")]),e("button",{class:"bg-sky-500 hover:bg-sky-500 text-white font-semibold py-2 px-4 rounded",onClick:o[1]||(o[1]=s=>m.value=!0),"data-bs-toggle":"modal","data-bs-target":"#modalCreate"},[Kt,l(" Reincorporar Operador ")])]),e("div",null,[C(d(U),{class:"w-full table-auto text-sm display nowrap stripe compact cell-border order-column",id:"incapacidadesTablaId",name:"incapacidadesTablaId",columns:S,data:n.incapacidad,options:{responsive:!0,autoWidth:!1,dom:"Bftrip",language:{search:"Buscar",zeroRecords:"No hay registros para mostrar",info:"Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",infoEmpty:"Mostrando registros del 0 al 0 de un total de 0 registros",infoFiltered:"(filtrado de un total de _MAX_ registros)",lengthMenu:"Mostrar _MENU_ registros",paginate:{first:"Primero",previous:"Anterior",next:"Siguiente",last:"Ultimo"}},buttons:[r]}},{default:B(()=>[Qt]),_:1},8,["data","options"])])]),C(Te,{show:t.value,"max-width":L,closeable:W,onClose:F,title:"Añadir incapacidad",op:"1",modal:"modalCreate",operador:f.operador,operadoresAlta:f.operadoresAlta},null,8,["show","operador","operadoresAlta"]),C(bt,{show:p.value,"max-width":L,closeable:W,onClose:j,title:"Editar Incapacidad",modal:"modalEdit",operador:f.operador,incapacidad:d(u)},null,8,["show","operador","incapacidad"]),C(Wt,{show:m.value,"max-width":L,closeable:W,onClose:_,title:"Reincorporar Operador",modal:"modalEdit",operador:f.operador,operadoresIncapacidad:f.operadoresIncapacidad},null,8,["show","operador","operadoresIncapacidad"])]),_:1},8,["usuario"]))}};export{ia as default};
