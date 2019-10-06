<template>
  <div ref="modal-gbp" class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div :class="`modal-dialog modal-dialog-centered ${tamano ? tamano:''}`" role="document">
      <div class="modal-content">
        <div class="modal-header custom-modal-header">
          <div class="w-100">
            <div class="row py-2">
              <div class="col-sm-3 my-auto">
                <img src="/img/default/logo-empresa-modal.png" alt="" width="60" height="31">
              </div>
              <div class="col-sm-6 text-center my-auto text-center">
                <p v-if="titulo" class="modal-title f-600 f-14 my-2">{{titulo}}</p>
              </div>
              <div class="col-sm-3"></div>
            </div>
            <span class="cerrar-modal" data-dismiss="modal" aria-label="Close" aria-hidden="true">&times;</span>
          </div>
        </div>
        <div class="modal-body">
          <slot></slot>
        </div>
        <div v-if="footer" class="modal-footer">
          <button type="button" name="button" class="btn btn-modal-cerrar py-1" data-dismiss="modal" aria-label="Close">Cerrar</button>
          <button @click="$emit('accionAceptar')" type="button" name="button" class="btn btn-modal-oscuro py-1">Aceptar</button>
        </div>
        <div v-else class="modal-footer">
          <button type="button" name="button" class="btn btn-modal-cerrar py-1" data-dismiss="modal" aria-label="Close">Cerrar</button>
          <button @click="$emit('accionGuardar')" type="button" name="button" class="btn btn-modal-oscuro py-1">Guardar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript" >
export default {
  name:'modalGbp',
  // props:['titulo','tamano'],
  props:{
    titulo:{
      type: String,
      required: true
    },
    tamano:{
      type: String,
      required: true
    },
    footer: {
      type: Boolean,
      default: false
    },
  },
  methods:{
    toggle(){
      $(this.$refs['modal-gbp']).modal('toggle');
    }
  }
}
</script>

<style lang="scss" scoped>
span.cerrar-modal {
  z-index: 1;
  color: #000;
  font-size: 33px;
  position: absolute;
  top: 3px;
  right: 9px;
  cursor: pointer;
}
.custom-modal-header {
  padding: 0px 10px !important;
}
.modal-footer{
  background: #F5F5F5;
  padding: 10px;
}
.btn-modal-cerrar{
  background: #dddddd;
  color:#5d5d5d;
  border-radius: 4px;
  font-size: 12px;
}
.btn-modal-oscuro{
  background: #000000;
  color:#fff;
  border-radius: 4px;
  font-size: 12px;
}
</style>
