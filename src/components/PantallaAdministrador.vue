
<template>
  <Barnav/>
  <BotonesAdministrador></BotonesAdministrador>
  <!-- <RegistroJuez id="registroCategoria"></RegistroJuez>-->
</template>

<script>
//import RegistroJuez from './Administrador/RegistroJuez.vue';
import BotonesAdministrador from './Administrador/BotonesAdministrador.vue';
import Barnav from './BarNav.vue';

export default {
  name: 'App',
    methods: {
        handleTabClick: function (tabNames) {
            this.activeTabName = tabNames;
            this.currentTab = this.tabs[tabNames];
        }
    },
    components: { BotonesAdministrador,Barnav }
}

</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');

body {
  background: linear-gradient(180deg, #bdd9ff 0%, #f7f7ff 21.67%);
}
</style>