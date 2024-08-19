import{u as F,r as U,i as J,o as m,j as W,e as O,a as e,g as K,t as h,w as P,d as r,k as I,c as k,l as A,F as Q,m as ee,p as te,f as M,q as j,b as B,n as ae,L as V,D as G,s as ie,x as H}from"./app-efQr6Bw9.js";import"./buttons.print-C19jCs2s.js";import{_ as re}from"./Mensaje-DIWc4nSq.js";import{_ as le}from"./PrincipalLayout-B2-KicTi.js";import{S as X}from"./sweetalert2.all-_XGc1PfW.js";import{_ as se}from"./Modal-DaiaiGkV.js";import{_ as ne,a as de}from"./TextInput-B6b8EznB.js";import{E as ue}from"./jspdf.plugin.autotable-Dt7B0CLS.js";import{u as L,w as ce}from"./xlsx-D5JNrnKm.js";/* empty css                                                */const pe={class:"mt-2 bg-white p-4 shadow rounded-lg"},me={class:"border-b border-gray-900/10 pb-12"},ge={class:"text-base font-semibold leading-7 text-gray-900"},be={class:"mt-1 text-sm leading-6 text-gray-600"},fe={class:"mt-2 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"},he={class:"sm:col-span-1",hidden:""},xe=e("label",{for:"idUsuario",class:"block text-sm font-medium leading-6 text-gray-900"},"id",-1),ye={class:"mt-2"},_e=["id"],ve={class:"sm:col-span-1 md:col-span-3"},Ue=e("label",{for:"nombre",class:"block text-sm font-medium leading-6 text-gray-900"},[M("Nombre(s) "),e("span",{class:"text-red-500"},"*")],-1),we={class:"mt-2"},$e=["id"],ke={key:0,class:"text-red-500 text-xs mt-1"},Me={class:"sm:col-span-1 md:col-span-3"},Te=e("label",{for:"apellidoP",class:"block text-sm font-medium leading-6 text-gray-900"},[M("Apellido Paterno "),e("span",{class:"text-red-500"},"*")],-1),Pe={class:"mt-2"},Se=["id"],Ee={key:0,class:"text-red-500 text-xs mt-1"},Ce={class:"sm:col-span-1 md:col-span-3"},Ie=e("label",{for:"apellidoM",class:"block text-sm font-medium leading-6 text-gray-900"},[M("Apellido Materno "),e("span",{class:"text-red-500"},"*")],-1),Ae={class:"mt-2"},Ne=["id"],Be={key:0,class:"text-red-500 text-xs mt-1"},De={class:"sm:col-span-2 px-4"},je=e("label",{for:"tipoUsuario",class:"block text-sm font-medium leading-6 text-gray-900"},[M("Tipo de usuario "),e("span",{class:"text-red-500"},"*")],-1),Fe={class:"mt-2"},Oe=["id"],ze=e("option",{value:"",disabled:"",selected:""},"Seleccione el tipo de usuario",-1),Re=["value"],Ve={key:0,class:"text-red-500 text-xs mt-1"},Le={class:"mt-6 flex items-center justify-end gap-x-6"},We=["id"],qe=["disabled"],Ge=e("i",{class:"fa-solid fa-floppy-disk mr-2"},null,-1),He={__name:"FormularioUsuarios",props:{show:{type:Boolean,default:!1},maxWidth:{type:String,default:"2xl"},closeable:{type:Boolean,default:!0},usuarios:{type:Object,default:()=>({})},tipoUsuario:{type:Object,default:()=>({})},title:{type:String},modal:{type:String},op:{type:String},descripcion:{type:String},contrasenia:String},emits:["close"],setup(i,{emit:c}){const N=c,d=i,x=()=>{N("close"),t.reset()},t=F({idUsuario:d.usuarios.idUsuario,nombre:d.usuarios.nombre,apellidoP:d.usuarios.apellidoP,apellidoM:d.usuarios.apellidoM,tipoUsuario:d.usuarios.idTipoUsuario}),y=U(""),g=U(""),_=U(""),v=U(""),S=p=>typeof p=="string"&&p.trim()!=="",C=p=>p!=null,D=()=>{y.value=S(t.nombre)?"":"Ingrese el nombre",g.value=S(t.apellidoP)?"":"Ingrese el apellido paterno",_.value=S(t.apellidoM)?"":"Ingrese el apellido materno",v.value=C(t.tipoUsuario)?"":"Seleccione el tipo de usuario",!(y.value||g.value||_.value||v.value)&&t.post(route("principal.addUsuario"),{onSuccess:()=>{x(),y.value="",g.value="",_.value="",v.value=""}})};return J(()=>d.usuarios,p=>{t.idUsuario=p.idUsuario,t.nombre=p.nombre,t.apellidoP=p.apellidoP,t.apellidoM=p.apellidoM,t.tipoUsuario=p.tipoUsuario},{deep:!0}),(p,b)=>(m(),W(se,{show:i.show,"max-width":i.maxWidth,closeable:i.closeable,onClose:x},{default:O(()=>[e("div",pe,[e("form",{onSubmit:K(D,["prevent"])},[e("div",me,[e("h2",ge,h(i.title),1),e("p",be,h(d.descripcion),1),e("div",fe,[e("div",he,[xe,e("div",ye,[P(e("input",{type:"number",name:"idUsuario","onUpdate:modelValue":b[0]||(b[0]=u=>r(t).idUsuario=u),placeholder:"Ingrese id",id:"idUsuario"+i.op,class:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"},null,8,_e),[[I,r(t).idUsuario]])])]),e("div",ve,[Ue,e("div",we,[P(e("input",{type:"text",name:"nombre",id:"nombre"+i.op,"onUpdate:modelValue":b[1]||(b[1]=u=>r(t).nombre=u),placeholder:"Ingrese el nombre del usuario",class:"block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"},null,8,$e),[[I,r(t).nombre]])]),y.value!=""?(m(),k("div",ke,h(y.value),1)):A("",!0)]),e("div",Me,[Te,e("div",Pe,[P(e("input",{type:"text",name:"apellidoP",id:"apellidoP"+i.op,"onUpdate:modelValue":b[2]||(b[2]=u=>r(t).apellidoP=u),placeholder:"Ingrese el apellido paterno",class:"block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"},null,8,Se),[[I,r(t).apellidoP]])]),g.value!=""?(m(),k("div",Ee,h(g.value),1)):A("",!0)]),e("div",Ce,[Ie,e("div",Ae,[P(e("input",{type:"text",name:"apellidoP",id:"apellidoP"+i.op,"onUpdate:modelValue":b[3]||(b[3]=u=>r(t).apellidoM=u),placeholder:"Ingrese el apellido materno",class:"block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"},null,8,Ne),[[I,r(t).apellidoM]])]),_.value!=""?(m(),k("div",Be,h(_.value),1)):A("",!0)]),e("div",De,[je,e("div",Fe,[P(e("select",{name:"tipoUsuario",id:"tipoUsuario"+i.op,"onUpdate:modelValue":b[4]||(b[4]=u=>r(t).tipoUsuario=u),placeholder:"Seleccione el tipo de usuario",class:"block rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"},[ze,(m(!0),k(Q,null,ee(i.tipoUsuario,u=>(m(),k("option",{key:u.idTipoUsuario,value:u.idTipoUsuario},h(u.tipoUsuario),9,Re))),128))],8,Oe),[[te,r(t).tipoUsuario]])]),v.value!=""?(m(),k("div",Ve,h(v.value),1)):A("",!0)])])]),e("div",Le,[e("button",{type:"button",id:"cerrar"+i.op,class:"text-sm font-semibold leading-6 text-white bg-red-500 hover:bg-red-600 py-2 px-4 rounded","data-bs-dismiss":"modal",onClick:x},"Cancelar",8,We),e("button",{type:"submit",class:"bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded",disabled:r(t).processing},[Ge,M("Guardar")],8,qe)])],32)])]),_:1},8,["show","max-width","closeable"]))}},Xe={class:"mt-2 bg-white p-4 shadow rounded-lg"},Ye={class:"border-b border-gray-900/10 pb-12"},Ze={class:"text-base font-semibold leading-7 text-gray-900"},Je={class:"mt-1 text-sm leading-6 text-gray-600"},Ke={class:"mt-2 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"},Qe={class:"sm:col-span-1",hidden:""},et=e("label",{for:"idUsuario",class:"block text-sm font-medium leading-6 text-gray-900"},"id",-1),tt={class:"mt-2"},st=["id"],ot={class:"sm:col-span-1 md:col-span-3"},at=e("label",{for:"nombre",class:"block text-sm font-medium leading-6 text-gray-900"},[M("Nombre(s) "),e("span",{class:"text-red-500"},"*")],-1),it={class:"mt-2"},rt=["id"],lt={key:0,class:"text-red-500 text-xs mt-1"},nt={class:"sm:col-span-1 md:col-span-3"},dt=e("label",{for:"apellidoP",class:"block text-sm font-medium leading-6 text-gray-900"},[M("Apellido Paterno "),e("span",{class:"text-red-500"},"*")],-1),ut={class:"mt-2"},ct=["id"],pt={key:0,class:"text-red-500 text-xs mt-1"},mt={class:"sm:col-span-1 md:col-span-3"},gt=e("label",{for:"apellidoM",class:"block text-sm font-medium leading-6 text-gray-900"},[M("Apellido Materno "),e("span",{class:"text-red-500"},"*")],-1),bt={class:"mt-2"},ft=["id"],ht={key:0,class:"text-red-500 text-xs mt-1"},xt={class:"sm:col-span-2 px-4"},yt=e("label",{for:"tipoUsuario",class:"block text-sm font-medium leading-6 text-gray-900"},[M("Tipo de usuario "),e("span",{class:"text-red-500"},"*")],-1),_t={class:"mt-2"},vt=["id"],Ut=e("option",{value:"",disabled:"",selected:""},"Seleccione el tipo de usuario",-1),wt=["value"],$t={key:0,class:"text-red-500 text-xs mt-1"},kt={class:"col-span-6 sm:col-span-4 mt-2"},Mt={class:"relative"},Tt={class:"mt-6 flex items-center justify-end gap-x-6"},Pt=["id"],St=["disabled"],Et=e("i",{class:"fa-solid fa-floppy-disk mr-2"},null,-1),Ct={__name:"FormularioActualizarUsuario",props:{show:{type:Boolean,default:!1},maxWidth:{type:String,default:"2xl"},closeable:{type:Boolean,default:!0},usuarios:{type:Object,default:()=>({})},tipoUsuario:{type:Object,default:()=>({})},title:{type:String},modal:{type:String},op:{type:String},descripcion:{type:String},contrasenia:String},emits:["close"],setup(i,{emit:c}){const N=c,d=i,x=()=>{N("close"),t.reset()},t=F({_method:"PUT",idUsuario:d.usuarios.idUsuario,nombre:d.usuarios.nombre,apellidoP:d.usuarios.apellidoP,apellidoM:d.usuarios.apellidoM,contrasenia:d.usuarios.contrasenia,tipoUsuario:d.usuarios.idTipoUsuario});J(()=>d.usuarios,async l=>{t.idUsuario=l.idUsuario,t.nombre=l.nombre,t.apellidoP=l.apellidoP,t.apellidoM=l.apellidoM,t.contrasenia=l.contrasenia,t.tipoUsuario=l.idTipoUsuario},{deep:!0});const y=U(""),g=U(""),_=U(""),v=U(""),S=U(""),C=l=>typeof l=="string"&&l.trim()!=="",D=l=>l!=null,p=l=>typeof l=="string"&&l.length>=8;j(()=>p(t.contrasenia)),j(()=>/[A-Z]/.test(t.contrasenia)),j(()=>/[a-z]/.test(t.contrasenia)),j(()=>/[0-9]/.test(t.contrasenia)),j(()=>/[@$!%*?&#]/.test(t.contrasenia));const b=()=>{if(y.value=C(t.nombre)?"":"Ingrese el nombre",g.value=C(t.apellidoP)?"":"Ingrese el apellido paterno",_.value=C(t.apellidoM)?"":"Ingrese el apellido materno",v.value=D(t.tipoUsuario)?"":"Seleccione el tipo de usuario",S.value=C(t.contrasenia)?"":"Ingrese la contraseña",y.value||g.value||_.value||v.value||S.value)return;const l={};t.nombre&&(l.nombre=t.nombre),t.apellidoP&&(l.apellidoP=t.apellidoP),t.apellidoM&&(l.apellidoM=t.apellidoM),t.tipoUsuario&&(l.tipoUsuario=t.tipoUsuario),t.contrasenia&&(l.contrasenia=t.contrasenia),t.post(route("principal.actualizarUsuario",t.idUsuario),{data:l,onSuccess:()=>{x(),y.value="",g.value="",_.value="",v.value="",S.value=""}})},u=U(!1),z=()=>{u.value=!u.value};return(l,f)=>(m(),W(se,{show:i.show,"max-width":i.maxWidth,closeable:i.closeable,onClose:x},{default:O(()=>[e("div",Xe,[e("form",{onSubmit:K(b,["prevent"])},[e("div",Ye,[e("h2",Ze,h(i.title),1),e("p",Je,h(d.descripcion),1),e("div",Ke,[e("div",Qe,[et,e("div",tt,[P(e("input",{type:"number",name:"idUsuario","onUpdate:modelValue":f[0]||(f[0]=s=>r(t).idUsuario=s),placeholder:"Ingrese id",id:"idUsuario"+i.op,class:"block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"},null,8,st),[[I,r(t).idUsuario]])])]),e("div",ot,[at,e("div",it,[P(e("input",{type:"text",name:"nombre",id:"nombre"+i.op,"onUpdate:modelValue":f[1]||(f[1]=s=>r(t).nombre=s),placeholder:"Ingrese el nombre del usuario",class:"block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"},null,8,rt),[[I,r(t).nombre]])]),y.value!=""?(m(),k("div",lt,h(y.value),1)):A("",!0)]),e("div",nt,[dt,e("div",ut,[P(e("input",{type:"text",name:"apellidoP",id:"apellidoP"+i.op,"onUpdate:modelValue":f[2]||(f[2]=s=>r(t).apellidoP=s),placeholder:"Ingrese el apellido paterno",class:"block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"},null,8,ct),[[I,r(t).apellidoP]])]),g.value!=""?(m(),k("div",pt,h(g.value),1)):A("",!0)]),e("div",mt,[gt,e("div",bt,[P(e("input",{type:"text",name:"apellidoM",id:"apellidoM"+i.op,"onUpdate:modelValue":f[3]||(f[3]=s=>r(t).apellidoM=s),placeholder:"Ingrese el apellido materno",class:"block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"},null,8,ft),[[I,r(t).apellidoM]])]),_.value!=""?(m(),k("div",ht,h(_.value),1)):A("",!0)]),e("div",xt,[yt,e("div",_t,[P(e("select",{name:"tipoUsuario",id:"tipoUsuario"+i.op,"onUpdate:modelValue":f[4]||(f[4]=s=>r(t).tipoUsuario=s),placeholder:"Seleccione el tipo de usuario",class:"block rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"},[Ut,(m(!0),k(Q,null,ee(i.tipoUsuario,s=>(m(),k("option",{key:s.idTipoUsuario,value:s.idTipoUsuario},h(s.tipoUsuario),9,wt))),128))],8,vt),[[te,r(t).tipoUsuario]])]),v.value!=""?(m(),k("div",$t,h(v.value),1)):A("",!0)]),e("div",kt,[B(ne,{for:"contrasenia",value:"Contraseña"}),e("div",Mt,[B(de,{id:"contrasenia",modelValue:r(t).contrasenia,"onUpdate:modelValue":f[5]||(f[5]=s=>r(t).contrasenia=s),type:u.value?"text":"password",class:"mt-1 block w-full",autocomplete:"new-password"},null,8,["modelValue","type"]),e("button",{type:"button",class:"absolute inset-y-0 right-0 pr-3 flex items-center focus:outline-none",onClick:z},[e("i",{class:ae(["fa",u.value?"fa-eye-slash":"fa-eye"])},null,2)])])])])]),e("div",Tt,[e("button",{type:"button",id:"cerrar"+i.op,class:"text-sm font-semibold leading-6 text-white bg-red-500 hover:bg-red-600 py-2 px-4 rounded","data-bs-dismiss":"modal",onClick:x},"Cancelar",8,Pt),e("button",{type:"submit",class:"bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded",disabled:r(t).processing},[Et,M("Guardar")],8,St)])],32)])]),_:1},8,["show","max-width","closeable"]))}},It={class:"mt-0 bg-white p-4 shadow rounded-lg h-5/6"},At=e("h2",{class:"font-bold text-center text-xl pt-0"},"Usuarios",-1),Nt=e("div",{class:"my-1"},null,-1),Bt=e("div",{class:"bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mb-3"},null,-1),Dt={class:"py-3 flex flex-col md:flex-row md:items-start md:space-x-3 space-y-3 md:space-y-0"},jt=e("i",{class:"fa fa-plus mr-2"},null,-1),Ft={class:""},Ot=e("thead",null,[e("tr",{class:"text-sm leading-normal"},[e("th",{class:"py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light"}),e("th",{class:"py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light"}),e("th",{class:"py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light"}," # "),e("th",{class:"py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light"}," Nombre(s) "),e("th",{class:"py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light"}," Apellido Paterno "),e("th",{class:"py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light"}," Apellido Materno "),e("th",{class:"py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light"}," Usuario "),e("th",{class:"py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light"}," Tipo Usuario "),e("th",{class:"py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light"}," Contraseña "),e("th",{class:"py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light"}," Re "),e("th",{class:"py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light"}," Ed "),e("th",{class:"py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light"}," El ")])],-1),Y="xl",Z=!0,zt="Rellene todos los campos para poder registrar un nuevo usuario",Rt="Rellene todos los campos para poder actualizar la información de un usuario",Kt={__name:"AdminUsuarios",props:{message:{String,default:""},color:{String,default:""},usuario:{type:Object},usuarios:{type:Object},tipoUsuario:{type:Object}},setup(i){V.use(G),V.use(G);const c=i,N=U(!1),d=U(!1),x=U([]),t=F({_method:"DELETE"}),y=F({_method:"PUT"});var g={};const _=s=>{g=s,d.value=!0},v=()=>{N.value=!1},S=()=>{d.value=!1},C=s=>{x.value.includes(s)?x.value=x.value.filter(a=>a!==s):x.value.push(s);const o=document.getElementById("eliminar-button");x.value.length>0?o.removeAttribute("disabled"):o.setAttribute("disabled","")},D=(s,o)=>{X.mixin({buttonsStyling:!0}).fire({title:"¿Estas seguro que deseas eliminar los datos de "+o+"?",icon:"warning",showCancelButton:!0,confirmButtonText:'<i class="fa-solid fa-check"></i> Confirmar',cancelButtonText:'<i class="fa-solid fa-ban"></i> Cancelar'}).then(n=>{n.isConfirmed&&t.post(route("principal.eliminarUsuario",s))})},p=s=>{const o=s.idUsuario;X.mixin({buttonsStyling:!0}).fire({title:"¿Estas seguro de restaurar los intentos y/o tiempo de cambio de contraseña?",icon:"warning",showCancelButton:!0,confirmButtonText:'<i class="fa-solid fa-check"></i> Confirmar',cancelButtonText:'<i class="fa-solid fa-ban"></i> Cancelar'}).then(async n=>{if(n.isConfirmed)try{await y.post(route("principal.restUsuario",o))}catch(w){console.log("El error se origina aquí"),console.log(w)}})};ie(()=>{document.getElementById("usuariosTablaId").addEventListener("click",s=>{const o=s.target;if(o.classList.contains("usuario-checkbox")){const a=parseInt(o.getAttribute("data-id"));if(c.usuarios){const n=c.usuarios.find(w=>w.idUsuario===a);n?C(n):console.log("No se tiene usuario")}}}),$("#usuariosTablaId").on("click",".editar-button",function(){const s=$(this).data("id"),o=c.usuarios.find(a=>a.idUsuario===s);_(o)}),$("#usuariosTablaId").on("click",".eliminar-button",function(){const s=$(this).data("id"),o=c.usuarios.find(a=>a.idUsuario===s);D(s,o.usuario)}),$("#usuariosTablaId").on("click",".mostrar-password-button",function(){const s=$(this).data("id"),o=c.usuarios.find(n=>n.idUsuario===s),a=$(this).closest("td").find(".ph");a.hasClass("password-hidden")?a.removeClass("password-hidden").text(o.contrasenia):a.addClass("password-hidden").text("*".repeat(o.contrasenia.length))}),$("#usuariosTablaId").on("click",".restaurar-usuario",function(){const s=$(this).data("id"),o=c.usuarios.find(a=>a.idUsuario===s);p(o)})});const b=(s="Documento")=>{const o=new ue("landscape");o.setFontSize(12),o.text(s,14,22);const a=new Date().toLocaleDateString();o.setFontSize(8),o.text(`Fecha: ${a}`,260,22);const n=["ID","Nombre","Apellido Paterno","Apellido Materno","Usuario","Tipo De Usuario","Contraseña"],w=[];H(()=>{$("#usuariosTablaId").DataTable().rows({search:"applied"}).data().each(E=>{var q;w.push([E.idUsuario,E.nombre,E.apellidoP,E.apellidoM,E.usuario,((q=c.tipoUsuario.find(oe=>oe.idTipoUsuario===E.idTipoUsuario))==null?void 0:q.tipoUsuario)||"",E.contrasenia])}),o.autoTable({head:[n],body:w,startY:24}),o.save(`${s}.pdf`)})},u=()=>{H(()=>{const a=$("#usuariosTablaId").DataTable().rows({search:"applied"}).data().toArray().map(T=>{var R;return{ID:T.idUsuario,Nombre:T.nombre,"Apellido Paterno":T.apellidoP,"Apellido Materno":T.apellidoM,Usuario:T.usuario,"Tipo De Usuario":((R=c.tipoUsuario.find(E=>E.idTipoUsuario===T.idTipoUsuario))==null?void 0:R.tipoUsuario)||"",Contraseña:T.contrasenia}}),n=L.json_to_sheet(a),w=L.book_new();L.book_append_sheet(w,n,"Usuarios Registrados"),ce(w,"Usuarios Registrados.xlsx")})},z=[{extend:"copyHtml5",text:'<i class="fa-solid fa-copy"></i> Copiar',className:"bg-cyan-500 hover:bg-cyan-600 text-white py-1/2 px-3 rounded mb-2 jump-icon",exportOptions:{columns:[0,2]},button:!0},{title:"Usuarios registrados",text:'<i class="fa-solid fa-file-excel"></i> Excel',className:"bg-green-600 hover:bg-green-600 text-white py-1/2 px-3 rounded mb-2 jump-icon",action:()=>u()},{title:"Usuarios registrados",text:'<i class="fa-solid fa-file-pdf"></i> PDF',className:"bg-red-500 hover:bg-red-600 text-white py-1/2 px-3 rounded mb-2 jump-icon",orientation:"landscape",action:()=>b(c.title||"Usuarios Registrados")},{title:"Usuarios registrados",extend:"print",text:'<i class="fa-solid fa-print"></i> Imprimir',className:"bg-blue-500 hover:bg-blue-600 text-white py-1/2 px-3 rounded mb-2 jump-icon",exportOptions:{columns:[2,3,4,5,6,7,8]}}],l=[{data:null,render:function(s,o,a,n){return""}},{data:null,render:function(s,o,a,n){return`<input type="checkbox" class="usuario-checkbox" data-id="${a.idUsuario}" ">`}},{data:null,render:function(s,o,a,n){return n.row+1}},{data:"nombre"},{data:"apellidoP"},{data:"apellidoM"},{data:"usuario"},{data:"idTipoUsuario",render:function(s,o,a,n){const w=c.tipoUsuario.find(T=>T.idTipoUsuario===s);return w?w.tipoUsuario:""}},{data:"contrasenia",render:function(s,o,a,n){return`<div class="password-container">
                        <span class="ph password-hidden">${"*".repeat(s.length)}</span>
                        <button class="mostrar-password-button" data-id="${a.idUsuario}"><i class="fa fa-eye"></i></button>
                    </div>`}},{data:null,render:function(s,o,a,n){return`<button class="restaurar-usuario" data-id="${a.idUsuario}"><i class="fa fa-arrows-rotate"></i></button>`}},{data:null,render:function(s,o,a,n){return`<button class="editar-button" data-id="${a.idUsuario}"><i class="fa fa-pencil"></i></button>`}},{data:null,render:function(s,o,a,n){return`<button class="eliminar-button" data-id="${a.idUsuario}"><i class="fa fa-trash"></i></button>`}}],f={responsive:!0,autoWidth:!1,dom:"Bfrtip",language:{search:"Buscar",zeroRecords:"No hay registros para mostrar",info:"Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",infoEmpty:"Mostrando registros del 0 al 0 de un total de 0 registros",infoFiltered:"(filtrado de un total de _MAX_ registros)",lengthMenu:"Mostrar _MENU_ registros",paginate:{first:"Primero",previous:"Anterior",next:"Siguiente",last:"Ultimo"}},buttons:z};return(s,o)=>(m(),W(le,{title:"Usuarios",usuario:c.usuario},{default:O(()=>[e("div",It,[At,Nt,Bt,B(re),e("div",Dt,[e("button",{class:"bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded",onClick:o[0]||(o[0]=a=>N.value=!0),"data-bs-toggle":"modal","data-bs-target":"#modalCreate"},[jt,M("Agregar Usuario ")])]),e("div",Ft,[B(r(V),{class:"w-full table-auto text-sm display stripe compact cell-border order-column",id:"usuariosTablaId",responsive:!0,columns:l,data:i.usuarios,options:f},{default:O(()=>[Ot]),_:1},8,["data"])])]),B(He,{show:N.value,"max-width":Y,closeable:Z,onClose:v,title:"Añadir usuario",modal:"modalCreate",descripcion:zt,usuarios:c.usuarios,tipoUsuario:c.tipoUsuario},null,8,["show","usuarios","tipoUsuario"]),B(Ct,{show:d.value,"max-width":Y,closeable:Z,onClose:S,title:"Editar usuario",modal:"modalEdit",descripcion:Rt,usuarios:r(g),tipoUsuario:c.tipoUsuario},null,8,["show","usuarios","tipoUsuario"])]),_:1},8,["usuario"]))}};export{Kt as default};
