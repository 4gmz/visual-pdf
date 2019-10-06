<template>
    <div ref="modal-gbp" class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div :class="`modal-dialog modal-dialog-centered ${tamano ? tamano:''}`" role="document">
            <div class="modal-content">
                <div class="modal-header custom-modal-header">
                    <div class="w-100">
                        <div class="row">
                            <div class="col-sm-12 my-auto">
                                <p v-if="titulo" class="modal-title f-600 f-18 my-2"> <i :class="`${icono ? icono:''}`"></i> {{titulo}}</p>
                            </div>
                        </div>
                        <span class="cerrar-modal" data-dismiss="modal" aria-label="Close" aria-hidden="true">&times;</span>
                    </div>
                </div>
                <div class="modal-body">
                    <slot></slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script type="text/javascript" >
export default {
    // inject:['$validator'],
    name:'modalGbp',
    props:['titulo','tamano','icono'],
    methods:{
        toggle(){
            $(this.$refs['modal-gbp']).modal('toggle');
            // console.log('modal');
        }
    }
}
</script>

<style lang="scss" scoped>
span.cerrar-modal {
    z-index: 1;
    color: darkgray;
    font-size: 43px;
    position: absolute;
    top: -12px;
    right: 9px;
    cursor: pointer;
}
.custom-modal-header {
    padding: 0px 10px !important;
}
</style>
