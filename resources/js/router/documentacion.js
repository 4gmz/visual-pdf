export default [
  {
    path:'/documentacion',
    name:'documentacion.listar',
    component:()=>import('~/pages/documentacion/listarDocumentacion').then(m=>m.default || m),
  }
]
