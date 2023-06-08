<script setup>

</script>
<template>
  <table id="vbmEditarArea">
    <tr v-for="registro in registros" :key="registro.id">
      <td>{{ registro.nombre }}</td>
      <td>
        <button @click="editarRegistro(registro.id)">Editar</button>
      </td>
      <td>
        <button @click="eliminarRegistro(registro.id)">Eliminar</button>
      </td>
    </tr>
  </table>
</template>

<script>
export default {
  data() {
    return {
      registros: [], // guardar los registros obtenidos de la base de datos
    };
  },
  methods: {
    cargarRegistros() {
      // obtener los registros desde la base de datos
     
    },
    editarRegistro(id) {
      // redireccionar a la página de "EditarRegistro"
      
      this.$router.push(`/EditarArea/${id}`);
    },
    eliminarRegistro() {
      //  eliminar el registro desde la base de datos
      

    },
  },
  mounted() {
    // Cargamos los registros al montar el componente
    this.cargarRegistros();
  },
};
</script>


<style>
 #vbmEditarArea {
  font-family: Ubuntu;
    border-collapse: collapse;
    width: 100%;
  }
  
  #vbmEditarArea td, #vbmEditarArea th {  
    padding: 8px;
    width:300px;
    height:80px;
  }
  
  #vbmEditarArea td{
      border-bottom: 1px solid #333D48;
  }
  
  #vbmBotonEditarArea{
  width: 150px;
  height: 50px;
  
  font-family: Poppins;
  background: #30649D;
  color: #F7F7FF;
  border: none;
  border-radius: 6px;
  }
  

</style>