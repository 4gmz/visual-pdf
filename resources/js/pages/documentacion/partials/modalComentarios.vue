<template>
  <section class="ModalComentarios">
    <modal-right ref="ComentarArchivo" titulo="Comentarios" tamano="modal-xl">
      <template v-slot:modalbody>
        <div class="row">
          <div class="col-12 text-center">
            <textarea name="name" rows="4" class="form-control br-4" placeholder="Añadir un comentario"></textarea>
            <button type="button" name="button" class="btn btn-comentar">Comentar</button>
          </div>
        </div>
        <div class="row listado-comentarios mt-4">
           <div v-for="data in 20" class="col-12 my-2">
             <!-- <i @click="DescartarComentario" class="mdi mdi-close-circle text-danger cr-pointer"></i> -->
             <div class="d-flex flex-row bg-whitesmoke br-3">
               <div class="p-2">
                 <img src="/img/default/scarlett.jpg" alt="" width="46" height="46" class="rounded-circle">
               </div>
               <div class="p-2">
                 <p class="f-600 f-12 text-muted2 mb-1">Maria Fernando Quintero</p>
                 <p class="f-10 lh-19 text-muted2 descripcion-contenido mb-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa voluptate sequi, itaque tempore maxime autem nam quam earum est temporibus non in, neque ea aliquid.</p>
                 <p class="f-12 text-muted"> 10 de Mar. de 2019 <span class="text-info2 float-right cr-pointer">Ver más</span> </p>
               </div>
             </div>
           </div>
        </div>
      </template>
    </modal-right>
    <!-- <modal-descartar-comentario ref="descartarComentario" /> -->
  </section>
</template>

<script>
// import modalDescartarComentario from './modalDescartarComentario';
export default {
  components:{
    // modalDescartarComentario
  },
  methods:{
    toggle(){
      this.$refs.ComentarArchivo.toggle();
    },
    // DescartarComentario(){
    //   this.$refs.descartarComentario.toggle();
    // },
  }
}
</script>

<style lang="scss" >
.ModalComentarios{
  @media  screen and (max-width: 1366px) {
    .listado-comentarios{
      height: 55vh !important;
    }
  }
  .listado-comentarios{
    height: 72vh;
    overflow: scroll;
    overflow-x: hidden;
    i.mdi.mdi-close-circle {
      position: absolute;
      right: 21px;
      top: 2px;
    }
    p.descripcion-contenido{
      max-height: 54px;
      overflow: hidden;
    }
  }
}
</style>
