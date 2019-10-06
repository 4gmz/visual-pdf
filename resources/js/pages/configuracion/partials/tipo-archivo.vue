<template>
  <div class="container-fluid">
    <div class="row mx-0 f-600">Crear tipo de archivo</div>
    <div class="row mx-0">
      <div class="col-4 py-2">
        <div class="row my-3">
          <div class="col pl-4">
            <label for="">Tipo de archivo</label>
            <input type="text" class="form-control" name="" value="">
          </div>
          <span class="mdi mdi-plus-box f-22 mt-auto cr-pointer"></span>
        </div>
        <div class="row my-3" v-for="data in 3">
          <i class="mdi mdi-menu my-auto f-22 mr-2 cr-pointer"></i>
          <div class="p-2 border col tres-puntos" >Operativo</div>
          <span class="mdi mdi-close-circle text-danger cr-pointer ml-3 my-auto"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
</style>
