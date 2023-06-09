<script setup>

</script>
<template>
  <div>
    <button @click="verDatos()">Ver datos</button>

    <v-dialog v-model="mostrarDialogo" max-width="500px">
      <v-card>
        <v-card-title>
          Datos de áreas
        </v-card-title>
        <v-card-text>
          <table id="tablaAreas">
            <tr>
              <th>ID</th>
              <th>Nombre</th>
            </tr>
            <tr v-for="area in registros" :key="area.id_area">
              <td>{{ area.id_area }}</td>
              <td>{{ area.nombreArea }}</td>
            </tr>
          </table>
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" text @click="mostrarDialogo = false">Cerrar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { gql } from 'graphql-tag';

export default {
  data() {
    return {
      registros: [], // Variable para almacenar los registros de áreas
      mostrarDialogo: false, // Controla la visibilidad del diálogo
    };
  },
  methods: {
    getAreas() {
      this.$apollo
        .query({
          query: gql`
            query MyQuery {
              area {
                id_area
                nombreArea
              }
            }
          `,
        })
        .then((response) => {
          const areas = response.data.area;
          console.log(areas); // Opcional: puedes mostrar los datos en la consola para verificarlos

          this.registros = areas; // Asigna los datos a la variable "registros"
          this.mostrarDialogo = true; // Muestra el diálogo con los datos
        })
        .catch((error) => {
          console.error(error);
        });
    },
    verDatos() {
      this.getAreas();
    },
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