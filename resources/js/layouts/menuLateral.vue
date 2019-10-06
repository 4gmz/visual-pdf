<template>
  <div class="sidenav barra-left">
    <div class="px-2">
      <div class="logo-empresa" href="#">
        <img src="/img/logo/logo-essi.svg" alt="" width="100">
      </div>
    </div>
    <router-link :to="{ name: 'unidades.listar.tipos', params: {} }" class="f-12">
      <p class="d-flex align-items-center">
        <i class="mdi f-20 mr-2 mdi-view-dashboard"></i>
        Dashboard
      </p>
    </router-link>
    <router-link :to="{ name: 'documentacion.listar' }" class="f-12">
      <p class="d-flex align-items-center">
        <i class="mdi f-20 mr-2 mdi-file-multiple"></i>
        Documentación
      </p>
    </router-link>
    <router-link :to="{ name: 'usuarios', params: {} }" class="f-12">
      <p class="d-flex align-items-center">
        <i class="mdi f-20 mr-2 mdi-file-multiple"></i>
        Usuarios
      </p>
    </router-link>
    <router-link :to="{ name: 'configuracion.tipo-archivo', params: {} }" class="f-12">
      <p class="d-flex align-items-center">
        <i class="mdi f-20 mr-2 mdi-settings"></i>
        Configuraciones
      </p>
    </router-link>
  </div>
</template>
<script>
export default {
  components: {
  },
}
</script>
<style lang="scss" scoped>
.barra-left{
  &.sidenav {
    height: 100%;
    width: 183px;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: #f5f5f5;
    overflow-x: hidden;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
    // padding-top: 20px;
  }
  &.sidenav a {
    padding: 6px 8px 6px 16px;
    text-decoration: none;
    font-size: 25px;
    color: #002C56;
    display: block;
    margin: 6px;
    border-radius: 3px;
    &:hover{
      background: #bfb9b9;
      color: #fff;
    }
  }
  a.router-link-exact-active.router-link-active {
    background: #002C56;
    color: white !important;
  }
  @media screen and (max-height: 450px) {
    .sidenav {padding-top: 15px;}
    .sidenav a {font-size: 18px;}
  }
  .logo-empresa{
    text-align: center;
    padding: 27px 0px;
    border-bottom: 1px solid #dee2e6 !important;
  }
}
</style>
