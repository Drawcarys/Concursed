
<template>
  <BotonesAdministrador></BotonesAdministrador>
  <!-- <RegistroJuez id="registroCategoria"></RegistroJuez>-->
</template>

<script>
//import RegistroJuez from './Administrador/RegistroJuez.vue';
import BotonesAdministrador from './Administrador/BotonesAdministrador.vue';

export default {
  name: 'App',
  components: {
    //  RegistroJuez,
    BotonesAdministrador
  }
}

</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');

body {
  background: linear-gradient(180deg, #bdd9ff 0%, #f7f7ff 21.67%);
}
</style>