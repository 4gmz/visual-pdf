<template>
  <div class="container-fluid">
    <div class="row mx-0 f-600">Crear mensaje en cinta informativa</div>
    <div class="row mx-0">
      <div class="col-xl-7 col-sm-12 py-2">
        <div class="row my-3">
          <div class="col pl-4">
            <label for="">Mensaje</label>
            <input type="text" class="form-control" name="" value="">
          </div>
          <span class="mdi mdi-plus-box f-22 mt-auto cr-pointer"></span>
        </div>
        <div class="row mt-3 mx-0 justify-content-between pl-3">
          <span>Mensaje</span>
          <span>Activo</span>
        </div>
        <div class="row my-3" v-for="(data,k) in 3" :key="k">
          <i class="mdi mdi-menu my-auto f-22 mr-2 cr-pointer"></i>
          <div class="p-2 border col tres-puntos" >Todo empieza en casa. El 46% de nuestra energía es generada en celdas solares</div>
          <span class="mdi mdi-close-circle text-danger cr-pointer ml-3 my-auto"></span>
          <div class="col-1 my-auto">
            <!-- <el-checkbox ></el-checkbox> -->
            <input type="checkbox" name="activo" :id="`cbx-${k}`" class="cbx" hidden>
            <label :for="`cbx-${k}`" class="cbx"></label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
      return {
        checked: true
      };
    }
}
</script>
<style lang="css" scoped>
.cbx {
  position: relative;
  top: 1px;
  width: 17px;
  height: 17px;
  border: 1px solid #c8ccd4;
  border-radius: 3px;
  vertical-align: middle;
  transition: background 0.1s ease;
  cursor: pointer;
}
.cbx:after {
  content: '';
  position: absolute;
  top: 1px;
  left: 5px;
  width: 5px;
  height: 11px;
  opacity: 0;
  transform: rotate(45deg) scale(0);
  border-right: 2px solid #fff;
  border-bottom: 2px solid #fff;
  transition: all 0.3s ease;
  transition-delay: 0.15s;
}
.lbl {
  margin-left: 5px;
  vertical-align: middle;
  cursor: pointer;
}
.cbx:checked ~ .cbx {
  border-color: transparent;
  background: #5D5D5D;
  animation: jelly 0.6s ease;
}
.cbx:checked ~ .cbx:after {
  opacity: 1;
  transform: rotate(45deg) scale(1);
}
.cntr {
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  text-align: center;
}
@-moz-keyframes jelly {
  from {
    transform: scale(1, 1);
  }
  30% {
    transform: scale(1.25, 0.75);
  }
  40% {
    transform: scale(0.75, 1.25);
  }
  50% {
    transform: scale(1.15, 0.85);
  }
  65% {
    transform: scale(0.95, 1.05);
  }
  75% {
    transform: scale(1.05, 0.95);
  }
  to {
    transform: scale(1, 1);
  }
}
@-webkit-keyframes jelly {
  from {
    transform: scale(1, 1);
  }
  30% {
    transform: scale(1.25, 0.75);
  }
  40% {
    transform: scale(0.75, 1.25);
  }
  50% {
    transform: scale(1.15, 0.85);
  }
  65% {
    transform: scale(0.95, 1.05);
  }
  75% {
    transform: scale(1.05, 0.95);
  }
  to {
    transform: scale(1, 1);
  }
}
@-o-keyframes jelly {
  from {
    transform: scale(1, 1);
  }
  30% {
    transform: scale(1.25, 0.75);
  }
  40% {
    transform: scale(0.75, 1.25);
  }
  50% {
    transform: scale(1.15, 0.85);
  }
  65% {
    transform: scale(0.95, 1.05);
  }
  75% {
    transform: scale(1.05, 0.95);
  }
  to {
    transform: scale(1, 1);
  }
}
@keyframes jelly {
  from {
    transform: scale(1, 1);
  }
  30% {
    transform: scale(1.25, 0.75);
  }
  40% {
    transform: scale(0.75, 1.25);
  }
  50% {
    transform: scale(1.15, 0.85);
  }
  65% {
    transform: scale(0.95, 1.05);
  }
  75% {
    transform: scale(1.05, 0.95);
  }
  to {
    transform: scale(1, 1);
  }
}

</style>
