<script setup>
</script>
<template>
  <div>
    <div class="vbmcol2">
      <form @submit.prevent="guardarArea">
        <p>Nombre del área:</p>
        <input id="nombreArea" type="text" name="registroArea" v-model="nombreArea" />
        <button type="submit" id="vbminiciar">Guardar cambios</button>
      </form>
    </div>

    <table id="tablaAreas">
      <tr>
        <th>Área</th>
        <th>Acciones</th>
      </tr>
      <tr v-for="area in areasRegistradas" :key="area.id">
        <td>{{ area.nombreArea }}</td>
        <td>
          <button @click="eliminarArea(area.id)">Eliminar área</button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import { gql } from 'graphql-tag';

const insertAreaMutation = gql`
  mutation InsertArea($nombreArea: String!) {
    insert_area_one(object: { nombreArea: $nombreArea }) {
      nombreArea
    }
  }
`;

const deleteAreaMutation = gql`
  mutation DeleteArea($id: Int!) {
    delete_area_by_pk(id: $id) {
      id
    }
  }
`;

export default {
  data() {
    return {
      nombreArea: '',
      areasRegistradas: [],
    };
  },
  methods: {
    guardarArea() {
      this.$apollo
        .mutate({
          mutation: insertAreaMutation,
          variables: {
            nombreArea: this.nombreArea,
          },
        })
        .then((response) => {
          const areaGuardada = response.data.insert_area_one;
          console.log('Área guardada:', areaGuardada);
          // Puedes hacer cualquier otra acción aquí, como actualizar la lista de áreas
          // o mostrar un mensaje de éxito al usuario.
        })
        .catch((error) => {
          console.error('Error al guardar el área:', error);
          // Puedes mostrar un mensaje de error al usuario si ocurre algún problema.
        });
    },
    eliminarArea(id) {
      this.$apollo
        .mutate({
          mutation: deleteAreaMutation,
          variables: {
            id: id,
          },
        })
        .then((response) => {
          console.log('Área eliminada:', response.data.delete_area_by_pk);
          // Puedes hacer cualquier otra acción aquí, como actualizar la lista de áreas
          // o mostrar un mensaje de éxito al usuario.
        })
        .catch((error) => {
          console.error('Error al eliminar el área:', error);
          // Puedes mostrar un mensaje de error al usuario si ocurre algún problema.
        });
    },
    getAreas() {
      this.$apollo
        .query({
          query: gql`
            query GetAreas {
              area {
                id
                nombreArea
              }
            }
          `,
        })
        .then((response) => {
          const areas = response.data.area;
          console.log(areas); // Opcional: puedes mostrar los datos en la consola para verificarlos

          this.areasRegistradas = areas; // Asigna los datos a la variable "areasRegistradas"
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
  created() {
    this.getAreas();
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500&display=swap');

#vbmnombreCategoria {
  width: 150%;
  height: 40px;
}
#vbmcol2 {
    width: 60%;
    display: flex;
    justify-content: center;
    margin-top: 3%;
    border-style: solid;
    box-sizing: border-box;
    border: 1px solid #333d48;
    border-radius: 17px;
    padding-top:3%;
    
}

.col2 {
  margin-top: 5%;
}

#vbminiciar {
  width: 180px;
  height: 44.87px;
  font-family: 'Poppins', sans-serif;
  background-color: #19376D;
  font-size: 16px;
  color: #F7F7FF;
  position: absolute;
  top: 70%;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 52%;
  margin-bottom: 5%;
  margin-left: 8%;
  border-radius: 15px;

}
</style>