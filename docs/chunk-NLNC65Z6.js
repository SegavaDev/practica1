import{a as e,b as x}from"./chunk-4GAC36MX.js";import{a as C,c as S,d as b}from"./chunk-O4N4ND4E.js";import{A as u,C as f,G as v,K as o,L as m,M as _,O as h,R as g,U as A,ba as T,n as d,w as l,x as p}from"./chunk-JVWXQSRV.js";function O(n,i){n&1&&_(0,"app-nav")}var M=(()=>{let i=class i{constructor(t){this.localStorageService=t,this.columnas=["#","Nombre","Descripcion","Fecha","Links","Estado","Acciones"],this.tareasActivas=[],this.btnAcciones=!0,this.mostrarNav=!0}ngOnInit(){this.localStorageService.tareas$.subscribe(t=>this.tareasActivas=t.activas),this.configDataTabla={columnas:this.columnas,data:this.tareasActivas,btnsAccion:this.btnAcciones}}mostrarNavbar(t){this.mostrarNav=t}hayTareas(){return this.tareasActivas.length>0}router(t){switch(t.accion){case e.Crear:this.guardarTarea(t.data);return;case e.Guardar:return;case e.Actualizar:this.modificar(t);return;case e.Eliminar:this.eliminar(t);return;case e.Buscar:return;case e.Finalizar:this.finalizar(t);return;case e.Pausar:return}}guardarTarea(t){this.mostrarNav=!1,this.tareasActivas.push(t),this.localStorageService.actualizarTareasActivas(this.tareasActivas)}modificar(t){let a={eliminar:!1,indice:t.index,tarea:t.data};this.localStorageService.actualizarEstado(a)}eliminar(t){t.index!==-1&&(this.tareasActivas.splice(t.index,1),this.localStorageService.actualizarTareasActivas(this.tareasActivas))}finalizar(t){let{index:a,data:r}=t;r.estado=S.Finalizado;let s={eliminar:!0,indice:a,tarea:r};this.localStorageService.actualizarEstado(s)}};i.\u0275fac=function(a){return new(a||i)(p(b))},i.\u0275cmp=d({type:i,selectors:[["app-tareas-activas"]],standalone:!0,features:[A],decls:8,vars:2,consts:[[1,"contenedor__vista"],[1,"contenedor__apps"],[1,"contenedor__fijo"],[1,"contenedor__titulo"],[3,"mostrarNav","sacarData","configData"]],template:function(a,r){a&1&&(o(0,"div",0),u(1,O,1,0,"app-nav"),o(2,"div",1)(3,"div",2)(4,"div",3)(5,"h1"),g(6,"Tareas activas"),m()()(),o(7,"app-tabla-tareas",4),h("mostrarNav",function(c){return r.mostrarNavbar(c)})("sacarData",function(c){return r.router(c)}),m()()()),a&2&&(l(),v(r.mostrarNav?1:-1),l(6),f("configData",r.configDataTabla))},dependencies:[T,C,x],styles:[".contenedor__fijo[_ngcontent-%COMP%]{width:100%;height:100px}.contenedor__fijo[_ngcontent-%COMP%]   .contenedor__titulo[_ngcontent-%COMP%]{width:100%;min-width:320px;height:100px;display:flex;align-items:center;justify-items:center;background-color:#00f;position:fixed;top:0}.contenedor__fijo[_ngcontent-%COMP%]   .contenedor__titulo[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{color:#fff;font-weight:700;margin-left:2%;padding:5px;border:2px gray dashed;position:fixed;z-index:100;background-color:#00f}@media (max-width: 350px){.contenedor__fijo[_ngcontent-%COMP%]   .contenedor__titulo[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:18pt}}"]});let n=i;return n})();var k=[{path:"",component:M,data:{title:"Tareas activas",favicon:"tareas.svg"}}];export{k as TAREAS_ACTIVAS_ROUTES};
