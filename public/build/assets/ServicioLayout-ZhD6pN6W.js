import{z as b,r as l,A as y,s as g,o as u,c as f,a as e,t as n,B as w,f as o,b as h,d as $,H as S,h as U}from"./app-efQr6Bw9.js";import"./jspdf.plugin.autotable-Dt7B0CLS.js";const j={class:"bg-cyan-500 text-white shadow w-full flex items-center justify-between md:max-h-12 h-24 rounded-sm"},k={class:"flex items-center h-full"},C=e("i",{class:"fas fa-bars text-white text-lg"},null,-1),N=[C],L={class:"h-full"},T=["src"],B=w('<div class="flex items-center h-full"><div class="md:flex items-center justify-center text-center hidden"><h1 class="md:font-bold md:text-5xl font-semibold text-4x"> Choferes del Sur </h1></div><div class="flex items-center justify-center text-center md:hidden"><h1 class="md:font-bold md:text-2xl font-semibold text-lg">Choferes del sur</h1></div></div>',1),D={class:"flex items-center h-full"},M={class:"flex items-center text-center h-full justify-center mx-1"},P={class:"flex items-center text-center h-full justify-center mx-1"},O=e("i",{class:"fas fa-user text-white font-thin mx-1"},null,-1),V={class:"text-white font-['DM Sans'] mx-1"},z={__name:"TopContentServ",props:{usuario:{type:Object}},setup(r){const t=b(),i=l(!0),_=l("success"),p=l(""),m=r,v=l(""),x=()=>{sideNav.classList.toggle("hidden")};return y(async()=>{var s,a,d,c;_.value=((a=(s=t.props.jetstream)==null?void 0:s.flash)==null?void 0:a.bannerStyle)||"success",p.value=((c=(d=t.props.jetstream)==null?void 0:d.flash)==null?void 0:c.banner)||"",i.value=!0}),g(async()=>{try{const a=(await axios.get(route("obtenerUser"))).data.idTipoUsuario,c=(await axios.get(route("obtenerTipoUser",a))).data.tipoUsuario;v.value=c}catch(s){v.value="Sin asignar",console.log("Error: "+s)}}),(s,a)=>(u(),f("div",j,[e("div",k,[e("div",{class:"md:hidden flex items-center pe-2 mx-1"},[e("button",{id:"menuBtn",onClick:x},N)]),e("div",L,[e("img",{src:"https://i.postimg.cc/dh2vL0LL/Logo-Choferes-Del-Sur-SF.png",class:"custom-img-size border-2 border-cyan-500 object-cover rounded-lg"},null,8,T)])]),B,e("div",D,[e("div",M,[e("div",P,[O,e("i",V,n(" "+m.usuario.tipoUsuario2.charAt(0).toUpperCase()+m.usuario.tipoUsuario2.slice(1)),1)])])])]))}},E={class:"flex flex-col"},A=["href"],F=e("i",{class:"fas fa-home mr-2"},null,-1),H=["href"],R=e("i",{class:"fa fa-list-alt","aria-hidden":"true"},null,-1),I=["href"],q=e("i",{class:"fa fa-bus","aria-hidden":"true"},null,-1),G=["href"],J=e("i",{class:"fa fa-id-card","aria-hidden":"true"},null,-1),K=["href"],Q=e("i",{class:"fa fa-briefcase","aria-hidden":"true"},null,-1),W=["href"],X=e("i",{class:"fa fa-map","aria-hidden":"true"},null,-1),Y=["href"],Z=e("i",{class:"fa fa-folder-open","aria-hidden":"true"},null,-1),ee=["href"],te=e("i",{class:"fa fa-user","aria-hidden":"true"},null,-1),oe={__name:"OpcionesNavServ",props:{},setup(r){return(t,i)=>(u(),f("div",E,[e("a",{class:"menu-button block text-white py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-white",href:t.route("servicio.inicio")},[F,o(" Inicio ")],8,A),e("a",{class:"menu-button block text-white py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-white",href:t.route("servicio.formarUni")},[R,o(" Formar Unidades ")],8,H),e("a",{class:"menu-button block text-white py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-white",href:t.route("servicio.unidades")},[q,o(" Unidades ")],8,I),e("a",{class:"menu-button block text-white py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-white",href:t.route("servicio.operadores")},[J,o(" Operadores ")],8,G),e("a",{class:"menu-button block text-white py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-white",href:t.route("servicio.sociosPrestadores")},[Q,o(" Socios y Prestadores ")],8,K),e("a",{class:"menu-button block text-white py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-white",href:t.route("servicio.rutas")},[X,o(" Rutas ")],8,W),e("a",{class:"menu-button block text-white py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-white",href:t.route("servicio.reportes")},[Z,o(" Reportes ")],8,Y),e("a",{class:"menu-button block text-white py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-white",href:t.route("servicio.perfil")},[te,o(" Perfil ")],8,ee)]))}},se={class:"flex flex-col h-screen bg-gray-100"},re={class:"flex-1 flex overflow-hidden"},ie={class:"p-2 bg-gray-800 w-full md:w-60 flex flex-col",id:"sideNav"},ae={class:"w-60 h-16 justify-start items-center px-2 inline-flex"},ne=e("div",{class:"w-12 h-12 relative"},[e("div",{class:"w-12 h-12 left-0 top-0 absolute bg-zinc-300 rounded-full"},[e("img",{class:"w-12 h-12 left-0 top-0 absolute",src:"https://cdn-icons-png.flaticon.com/512/9069/9069049.png"})])],-1),ce={class:"flex-col justify-start items-center inline-flex"},le={class:"text-center text-white text-base font-semibold font-['DM Sans'] px-2"},de={class:"text-center text-white text-sm font-normal font-['DM Sans']"},he=e("div",{class:"bg-gradient-to-r from-white to-white h-px mt-2"},null,-1),ue=e("div",{class:"bg-gradient-to-r from-white to-white h-px mt-2"},null,-1),fe=["href"],_e=e("i",{class:"fas fa-sign-out-alt mr-2"},null,-1),me={class:"flex-1 p-4 overflow-y-auto"},xe={__name:"ServicioLayout",props:{title:String,usuario:{type:Object}},setup(r){const t=r;return(i,_)=>(u(),f("div",se,[h($(S),{title:r.title},null,8,["title"]),h(z,{usuario:t.usuario},null,8,["usuario"]),e("div",re,[e("div",ie,[e("nav",null,[e("div",ae,[ne,e("div",ce,[e("div",le,n(t.usuario.nombre)+" "+n(t.usuario.apellidoP)+" "+n(t.usuario.apellidoM),1),e("div",de,n(t.usuario.usuario),1)])]),he,h(oe)]),ue,e("a",{class:"logout-button block text-white py-2.5 px-4 my-2 rounded transition duration-200 hover:bg-gradient-to-r hover:from-red-500 hover:to-red-500 hover:text-white mt-auto",href:i.route("cerrarSesion")},[_e,o(" Cerrar sesión ")],8,fe)]),e("div",me,[e("main",null,[U(i.$slots,"default")])])])]))}};export{xe as _};
