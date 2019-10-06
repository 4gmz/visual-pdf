<template>
	<div class="container-fluid">

		<div class="row page-ajustes">
			<div class="col-md-12">
				<el-tabs v-model="activeName" @tab-click="handleClick">
			    <el-tab-pane label="Tipos de archivo" name="first">
						<tipo-archivo/>
					</el-tab-pane>
			    <el-tab-pane label="Cinta informativa" name="second">
						<cinta-informativa/>
					</el-tab-pane>
			  </el-tabs>
			</div>
		</div>

		<router-view
		:key="$route.path"
		/>

	</div>
</template>

<script>
import  tipoArchivo from './partials/tipo-archivo'
import  cintaInformativa from './partials/cinta-informativa'
export default {
		components:{
			tipoArchivo,
			cintaInformativa,
		},
    data() {
      return {
        activeName: 'first'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
</script>

<style lang="scss"  >
.page-ajustes {
	.el-tabs__item {
    color: #5D5D5D;
		font-weight: 600;
	}
	.el-tabs__active-bar {
		background: #5D5D5D;
	}
}
</style>
