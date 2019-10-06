export default [
    {
        path:'/configuracion',
        name:'configuracion',
        component:()=>import('~/pages/configuracion/index').then(m=>m.default || m),
        // redirect:{ name:'configuracion.tipo-archivo' },
        children:[
            {
                path:'tipo-archivo',
                name:'configuracion.tipo-archivo',
                component:()=>import('~/pages/configuracion/partials/tipo-archivo').then(m => m.default || m),
            },

        ]
    }
]
