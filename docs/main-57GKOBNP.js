import{a as r,b as i,c as p,d,e as c,f as s,g as l,h as m,i as g,j as u,k as f,l as h}from"./chunk-4SN4Q4PQ.js";var a=class{constructor(t="",H="",n={}){this._titulo=t,this._texto=H,this._boton=n}get titulo(){return this._titulo}set titulo(t){this._titulo=t}get texto(){return this._texto}set texto(t){this._texto=t}get boton(){return this._boton}set boton(t){this._boton=t}};var _=(()=>{let t=class t{constructor(){this.pantalla=window.screen.width,this.responsive=new a}ngOnInit(){this.pantalla>1e3?(this.responsive.titulo=`${this.pantalla/10}px`,this.responsive.texto=`${this.pantalla/60}px`,this.responsive.boton={alto:"60px",ancho:"150px",texto:"24px"}):this.pantalla/15}};t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=r({type:t,selectors:[["app-no-found"]],standalone:!0,features:[s],decls:8,vars:0,consts:[[1,"contenedor__errorHttp"],[1,"errorHttp__guia"],[1,"errorHttp__h1"],[1,"errorHttp__p"],["routerLink","/",1,"errorHttp__a"]],template:function(o,O){o&1&&(i(0,"div",0)(1,"div",1)(2,"h1",2),c(3," ERROR 404 "),p(),i(4,"p",3),c(5,"Lo sentimos, no encontramos la secci\xF3n que busca."),p()(),i(6,"a",4),c(7,"Regresar"),p()())},dependencies:[m,f],styles:[".contenedor__errorHttp[_ngcontent-%COMP%]{width:100%;height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;color:#fff;background-color:#0d1117}.contenedor__errorHttp[_ngcontent-%COMP%]   .errorHttp__guia[_ngcontent-%COMP%]{width:90%;height:30%;display:grid;justify-items:center}.contenedor__errorHttp[_ngcontent-%COMP%]   .errorHttp__a[_ngcontent-%COMP%]{display:block;align-content:center;text-align:center;background-color:red;text-decoration:none;font-size:14pt;color:#fff;font-weight:700;margin-top:10%}@media (min-width: 300px){.contenedor__errorHttp[_ngcontent-%COMP%]   .errorHttp__guia[_ngcontent-%COMP%]   .errorHttp__h1[_ngcontent-%COMP%]{font-size:28pt}.contenedor__errorHttp[_ngcontent-%COMP%]   .errorHttp__guia[_ngcontent-%COMP%]   .errorHttp__p[_ngcontent-%COMP%]{width:80%;text-align:justify;font-size:12pt}.contenedor__errorHttp[_ngcontent-%COMP%]   .errorHttp__a[_ngcontent-%COMP%]{width:100px;height:40px}}@media (min-width: 768px){.contenedor__errorHttp[_ngcontent-%COMP%]   .errorHttp__guia[_ngcontent-%COMP%]   .errorHttp__h1[_ngcontent-%COMP%]{font-size:48pt}.contenedor__errorHttp[_ngcontent-%COMP%]   .errorHttp__guia[_ngcontent-%COMP%]   .errorHttp__p[_ngcontent-%COMP%]{text-align:center;font-size:18pt}.contenedor__errorHttp[_ngcontent-%COMP%]   .errorHttp__a[_ngcontent-%COMP%]{width:150px;height:60px}}"]});let e=t;return e})();var x=[{path:"",loadChildren:()=>import("./chunk-BUV6D2D5.js").then(e=>e.LANDING_ROUTES)},{path:"404",component:_},{path:"**",component:_}];var C={providers:[l({eventCoalescing:!0}),h(x)]};var M=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=r({type:t,selectors:[["app-root"]],standalone:!0,features:[s],decls:1,vars:0,template:function(o,O){o&1&&d(0,"router-outlet")},dependencies:[u],styles:["body[_ngcontent-%COMP%]{margin:0;padding:0}"]});let e=t;return e})();g(M,C).catch(e=>console.error(e));