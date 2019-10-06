export default [
    {
        path:'/usuarios',
        name:'usuarios',
        component:()=>import('~/pages/usuarios/mosaico').then(m=>m.default || m),
        // redirect:{ name:'configuracion.tipo-archivo' },

    }
]
