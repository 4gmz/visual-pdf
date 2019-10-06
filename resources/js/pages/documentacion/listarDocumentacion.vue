<template>
  <section class="section-listar-documentacion">
    <!-- top -->
    <div class="row contenedor-top">
      <div class="col-12  d-flex my-auto">
        <input type="search" name="" value="" placeholder="Buscar" class="form-control br-4" style="max-width:345px">
        <button type="button" name="button" class="btn br-4 btn-sm py-0 border px-1 ml-auto position-relative active" data-toggle="tooltip" data-placement="left" title="Realizar BackUp">
          <i class="mdi mdi-file-plus cr-pointer f-19 mx-1"></i>
        </button>
        <button type="button" name="button" class="btn br-4 btn-sm py-0 border px-1 mx-1 ml-2  position-relative active" data-toggle="tooltip" data-placement="left" title="Editar permisos">
          <i class="mdi mdi-folder-plus cr-pointer f-19 mx-1"></i>
        </button>
        <button type="button" name="button" class="btn br-4 btn-sm py-0 border px-1 mx-1 ml-2 position-relative active" data-toggle="tooltip" data-placement="left" title="Eliminar">
          <i class="mdi mdi-format-list-bulleted-square cr-pointer f-19 mx-1"></i>
        </button>
        <button type="button" name="button" class="btn br-4 btn-sm py-0 border px-1 mx-1 active" data-toggle="tooltip" data-placement="left" title="Editar usuario">
          <i class="mdi mdi-view-grid cr-pointer f-19 mx-1 "></i>
        </button>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <!-- tabla -->
        <div class="row my-3">
          <div class="col-12">
            <el-table :data="tableData" border style="width: 100%">
              <el-table-column sortable prop="folder_name" label="Nombre">
                <template slot-scope="scope">
                  <p class="d-flex"><i class="mdi mdi-file-pdf-box f-18 mr-1"></i> Nombre del archivo</p>
                </template>
              </el-table-column>
              <el-table-column sortable prop="last_update" label="Última modificación">
              </el-table-column>
              <el-table-column sortable prop="size" label="Tamaño del archivo">
              </el-table-column>
              <el-table-column sortable prop="views_totales" label="Vistas totales">
              </el-table-column>
              <el-table-column sortable prop="views_last_month" label="Vistas últ. mes">
                <template slot-scope="scope">
                  <button @click="ComentarArchivo" type="button" name="button" class="btn br-4 btn-sm py-0 border px-1 mx-1 active" data-toggle="tooltip" data-placement="left" title="Comentar archivo">
                    <i class="mdi mdi-message-reply-text cr-pointer f-19 mx-1 "></i>
                  </button>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </div>
      </div>
    </div>
    <modal-comentarios ref="ComentarArchivo" />
  </section>
</template>

<script>
import modalComentarios from './partials/modalComentarios';
export default {
  components:{
    modalComentarios,
  },
  data(){
    return{
      tableData: [
        { folder_name:'', last_update: '03 Sep. 2019', size: '150 MB', views_totales:'0', views_last_month:'10' },
        { folder_name:'', last_update: '10 Nov. 2019', size: '150 MB', views_totales:'0', views_last_month:'10' },
        { folder_name:'', last_update: '26 Feb. 2019', size: '10 MB',  views_totales:'0', views_last_month:'10' },
        { folder_name:'', last_update: '26 Feb. 2019', size: '55 MB',  views_totales:'0', views_last_month:'10' },
        { folder_name:'', last_update: '05 Sep. 2018', size: '100 MB', views_totales:'0', views_last_month:'10' },
        { folder_name:'', last_update: '26 Feb. 2019', size: '150 MB', views_totales:'0', views_last_month:'10' },
        { folder_name:'', last_update: '11 Oct. 2019', size: '150 MB', views_totales:'0', views_last_month:'10' },
        { folder_name:'', last_update: '03 Sep. 2019', size: '150 MB', views_totales:'0', views_last_month:'10' },
        { folder_name:'', last_update: '10 Nov. 2019', size: '150 MB', views_totales:'0', views_last_month:'10' },
        { folder_name:'', last_update: '26 Feb. 2019', size: '10 MB',  views_totales:'0', views_last_month:'10' },
        { folder_name:'', last_update: '26 Feb. 2019', size: '55 MB',  views_totales:'0', views_last_month:'10' },
        { folder_name:'', last_update: '05 Sep. 2018', size: '100 MB', views_totales:'0', views_last_month:'10' },
        { folder_name:'', last_update: '26 Feb. 2019', size: '150 MB', views_totales:'0', views_last_month:'10' },
        { folder_name:'', last_update: '11 Oct. 2019', size: '150 MB', views_totales:'0', views_last_month:'10' },
        { folder_name:'', last_update: '03 Sep. 2019', size: '150 MB', views_totales:'0', views_last_month:'10' },
        { folder_name:'', last_update: '10 Nov. 2019', size: '150 MB', views_totales:'0', views_last_month:'10' },
        { folder_name:'', last_update: '26 Feb. 2019', size: '10 MB',  views_totales:'0', views_last_month:'10' },
        { folder_name:'', last_update: '26 Feb. 2019', size: '55 MB',  views_totales:'0', views_last_month:'10' },
        { folder_name:'', last_update: '05 Sep. 2018', size: '100 MB', views_totales:'0', views_last_month:'10' },
        { folder_name:'', last_update: '26 Feb. 2019', size: '150 MB', views_totales:'0', views_last_month:'10' },
        { folder_name:'', last_update: '11 Oct. 2019', size: '150 MB', views_totales:'0', views_last_month:'10' },
        { folder_name:'', last_update: '03 Sep. 2019', size: '150 MB', views_totales:'0', views_last_month:'10' },
        { folder_name:'', last_update: '10 Nov. 2019', size: '150 MB', views_totales:'0', views_last_month:'10' },
        { folder_name:'', last_update: '26 Feb. 2019', size: '10 MB',  views_totales:'0', views_last_month:'10' },
        { folder_name:'', last_update: '26 Feb. 2019', size: '55 MB',  views_totales:'0', views_last_month:'10' },
        { folder_name:'', last_update: '05 Sep. 2018', size: '100 MB', views_totales:'0', views_last_month:'10' },
        { folder_name:'', last_update: '26 Feb. 2019', size: '150 MB', views_totales:'0', views_last_month:'10' },
        { folder_name:'', last_update: '11 Oct. 2019', size: '150 MB', views_totales:'0', views_last_month:'10' },
        { folder_name:'', last_update: '03 Sep. 2019', size: '150 MB', views_totales:'0', views_last_month:'10' },
        { folder_name:'', last_update: '10 Nov. 2019', size: '150 MB', views_totales:'0', views_last_month:'10' },
        { folder_name:'', last_update: '26 Feb. 2019', size: '10 MB',  views_totales:'0', views_last_month:'10' },
        { folder_name:'', last_update: '26 Feb. 2019', size: '55 MB',  views_totales:'0', views_last_month:'10' },
        { folder_name:'', last_update: '05 Sep. 2018', size: '100 MB', views_totales:'0', views_last_month:'10' },
        { folder_name:'', last_update: '26 Feb. 2019', size: '150 MB', views_totales:'0', views_last_month:'10' },
        { folder_name:'', last_update: '11 Oct. 2019', size: '150 MB', views_totales:'0', views_last_month:'10' },
      ],
    }
  },
  mounted(){
    $('[data-toggle="tooltip"]').tooltip();

  },
  methods:{
    ComentarArchivo(){
      this.$refs.ComentarArchivo.toggle();
    },
  },
}
</script>

<style lang="scss" scoped>
.section-listar-documentacion{
  .contenedor-top{
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
    padding: 13px 0px;
    button{
      color: #dbdbdb;
      &.active{
        color:#5d5d5d !important;
      }
    }
  }
}
</style>
