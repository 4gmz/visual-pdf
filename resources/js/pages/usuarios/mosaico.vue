<template>
  <!-- listado -->
  <div class="row listado justify-content-center">
    <div class="col-12 text-right">
      <el-tooltip content="Crear usuario" placement="bottom" effect="light">
        <i @click="modalCrearUsuario" class="mdi mdi-account-plus rounded-circle f-22 bg-whitesmoke2 cr-pointer" style="padding: 3px 5px 3px 5px;"></i>
      </el-tooltip>
    </div>
   <div @click.stop="" v-for="data in 1" class="col-lg-3 card-usuario border mx-2 my-3 px-0">
    <div class="d-flex">
     <div class="pr-2 color-left"></div>
     <div class="p-2 py-3 my-auto position-relative">
      <div class="div-bg d-none">
       <i class="mdi mdi-account-off text-white"></i>
      </div>
      <img src="/img/taylor.jpg" alt="" class="img-usuario">
      <el-popover placement="bottom" trigger="hover" width="160" >
       <button @click.stop="EditarUsuario" class="btn btn-outline text-muted2 f-12" name="button"> Editar Usuario</button>
       <button @click.stop="EliminarUsuario" class="btn btn-outline text-muted2 f-12" name="button"> Eliminar</button>
       <button @click.stop="EditarPermisoUsuario" class="btn btn-outline text-muted2 f-12" name="button"> Editar permisos</button>
       <i slot="reference" class="mdi mdi-dots-horizontal"></i>
      </el-popover>
     </div>
     <div class="p-2 f-12 text-muted2 my-auto">
      <p class="d-flex align-items-center text-muted2 f-14"> <i class="mdi mdi-account mr-2 f-19"></i> María Camila Eliecer</p>
      <p class="d-flex align-items-center text-muted2 f-14"> <img src="/img/icons/login.svg" class="mr-2" alt=""> maria_camila_air</p>
     </div>
    </div>
   </div>
   <!-- <div @click.stop="VerUsuario" v-for="data in 1" class="col-lg-3 card-usuario border mx-2 my-3 px-0">
    <div class="d-flex">
     <div class="pr-2 color-left"></div>
     <div class="p-2 my-auto position-relative">
      <div class="div-bg">
       <i class="mdi mdi-account-off text-white"></i>
      </div>
      <img src="/img/taylor.jpg" alt="" class="img-usuario">
      <el-popover placement="bottom" trigger="hover" width="160" v-model="visible_options">
       <button @click.stop="EditarUsuario" class="btn btn-outline text-muted2 f-12" name="button"> Editar Usuario</button>
       <button @click.stop="EliminarUsuario" class="btn btn-outline text-muted2 f-12" name="button"> Eliminar</button>
       <button @click.stop="EditarPermisoUsuario" class="btn btn-outline text-muted2 f-12" name="button"> Editar permisos</button>
       <i slot="reference" class="mdi mdi-dots-horizontal"></i>
      </el-popover>
     </div>
     <div class="p-2 f-12 text-muted2 my-auto">
      <p class="d-flex align-items-center text-muted2 f-14"> <i class="mdi mdi-account mr-2 f-19"></i> María Camila Eliecer</p>
      <p class="d-flex align-items-center text-muted2 f-14"> <i class="mdi mdi-login-variant mr-2 f-19"></i> Mar. 16 Jun. 2019 - 04:00 pm</p>
      <p class="d-flex align-items-center text-muted2 f-14"> <i class="mdi mdi-arrow-collapse-down mr-2 f-19"></i> Lun. 17 Jun. 2019 - 11:40 am</p>
      <p class="d-flex align-items-center text-muted2 f-14"> <i class="mdi mdi-arrow-collapse-up mr-2 f-19"></i> Lun. 17 Jun. 2019- 03:31 pm</p>
     </div>
    </div>
   </div> -->

   <modal ref="CrearUsuario" titulo="Crear archivo">

   </modal>

  </div>
</template>

<script>
export default {
  methods:{
    modalCrearUsuario(){
      this.$refs.CrearUsuario.toggle()
    }
  }
}
</script>

<style lang="scss" scoped>
.listado{
    .card-usuario{
      max-width: 354px;
      min-width: 354px;
      border-radius: 5px;
      .color-left{
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
        background: #5d5d5d;
      }
      .img-usuario{
        width: 80px;
        height: 80px;
        border-radius: 50%;
      }
      .div-bg {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        background: rgba(93, 93, 93, 0.7);
        opacity: 0.5;
        position: absolute;
        i.mdi-account-off{
          position: relative;
          top: 17px;
          left: 24px;
          font-size: 30px;
        }
      }
      i.mdi-dots-horizontal{
        position: absolute;
        right: 39px;
        font-size: 20px;
        bottom: -7px;
      }
      &:hover{
        cursor: pointer;
        box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
      }
    }
  }
</style>
