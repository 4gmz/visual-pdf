<template>
  <div class="main-layout" style="margin-left:185px;">
    <navbar />

    <div class="container-fluid">
      <menu-lateral/>
      <child />
    </div>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar'
import menuLateral from './menuLateral'
export default {
  name: 'MainLayout',

  components: {
    Navbar,
    menuLateral,
  }
}
</script>
