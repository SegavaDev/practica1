import{b as C}from"./chunk-4GAC36MX.js";import{a as v,d as T}from"./chunk-O4N4ND4E.js";import{A as d,C as p,G as l,K as o,L as s,M as f,O as _,R as h,U as g,ba as u,n as c,w as r,x as m}from"./chunk-JVWXQSRV.js";function M(a,t){a&1&&f(0,"app-nav")}var b=(()=>{let t=class t{constructor(e){this.localStorageService=e,this.columnas=["#","Nombre","Descripcion","Fecha","Links","Estado"],this.tareasTerminadas=[],this.btnAcciones=!1,this.mostrarNav=!0}ngOnInit(){this.localStorageService.tareas$.subscribe(e=>this.tareasTerminadas=e.terminadas),this.configDataTabla={columnas:this.columnas,data:this.tareasTerminadas,btnsAccion:this.btnAcciones}}mostrarNavbar(e){this.mostrarNav=e}hayTareas(){return this.tareasTerminadas.length>0}};t.\u0275fac=function(n){return new(n||t)(m(T))},t.\u0275cmp=c({type:t,selectors:[["app-tareas-terminadas"]],standalone:!0,features:[g],decls:8,vars:2,consts:[[1,"contenedor__vista"],[1,"contenedor__apps"],[1,"contenedor__fijo"],[1,"contenedor__titulo"],[3,"mostrarNav","configData"]],template:function(n,i){n&1&&(o(0,"div",0),d(1,M,1,0,"app-nav"),o(2,"div",1)(3,"div",2)(4,"div",3)(5,"h1"),h(6,"Tareas Finalizadas"),s()()(),o(7,"app-tabla-tareas",4),_("mostrarNav",function(x){return i.mostrarNavbar(x)}),s()()()),n&2&&(r(),l(i.mostrarNav?1:-1),r(6),p("configData",i.configDataTabla))},dependencies:[u,v,C],styles:[".contenedor__fijo[_ngcontent-%COMP%]{width:100%;height:100px}.contenedor__fijo[_ngcontent-%COMP%]   .contenedor__titulo[_ngcontent-%COMP%]{width:100%;min-width:320px;height:100px;display:flex;align-items:center;justify-items:center;background-color:#00f;position:fixed;top:0}.contenedor__fijo[_ngcontent-%COMP%]   .contenedor__titulo[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{color:#fff;font-weight:700;margin-left:2%;padding:5px;border:2px gray dashed;position:fixed;z-index:100;background-color:#00f}@media (max-width: 350px){.contenedor__fijo[_ngcontent-%COMP%]   .contenedor__titulo[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:18pt}}"]});let a=t;return a})();var w=[{path:"",component:b,data:{title:"Tareas finalizadas",favicon:"tareas.svg"}}];export{w as TAREAS_TERMINADAS_ROUTES};
