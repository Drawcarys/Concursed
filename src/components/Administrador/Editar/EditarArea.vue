<script setup>

</script>
<template>
  <div class="vbmCol2">
    <form @submit.prevent="guardararea" v-if="!editar">

    
      <button type="submit" id="vbmIniciar">Guardar cambios</button>
    </form>

    <form @submit.prevent="actualizararea" v-else>
      <p>Nombre de la categoría:</p>
      <input type="text" name="nombrearea" id="vbmNombrearea" v-model="areaSeleccionada.nombreArea" />
      <button type="submit" id="vbmEditar">Guardar cambios</button>
      <button type="button" @click="eliminararea">Eliminar</button>
    </form>

    <table v-if="areas.length > 0">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre de la categoría</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="area in areas" :key="area.id_area">
          <td>{{ area.id_area }}</td>
          <td>{{ area.nombreArea }}</td>
          <td>
            <button @click="editararea(area)" id="vbmbotonesTabla">Editar</button>
            <button @click="eliminararea(area.id_area)" id="vbmbotonesTabla">Eliminar</button>
          </td>
        </tr>
      </tbody>
    </table>
    <p v-else>No hay categorías guardadas.</p>
  </div>
</template>

<script>
import { gql } from 'graphql-tag';

const obtenerareasQuery = gql`
  query obtenerareas {
    area {
      id_area
      nombreArea
    }
  }
`;

const guardarareaMutation = gql`
  mutation guardararea($nombreArea: String!) {
    insert_area_one(object: { nombreArea: $nombreArea }) {
      id_area
      nombreArea
    }
  }
`;

const actualizarareaMutation = gql`
  mutation actualizararea($id: Int!, $nombreArea: String!) {
    update_area_by_pk(pk_columns: { id_area: $id }, _set: { nombreArea: $nombreArea }) {
      id_area
      nombreArea
    }
  }
`;

const eliminarareaMutation = gql`
  mutation eliminararea($id: Int!) {
    delete_area_by_pk(id_area: $id) {
      id_area
    }
  }
`;

export default {
  data() {
    return {
      nombreArea: '',
      areas: [],
      editar: false,
      areaSeleccionada: null
    };
  },
  created() {
    this.obtenerareas();
  },
  methods: {
    obtenerareas() {
      this.$apollo.query({
        query: obtenerareasQuery
      })
      .then(response => {
        this.areas = response.data.area;
      })
      .catch(error => {
        console.error('Error al obtener las categorías:', error);
      });
    },
    guardararea() {
      this.$apollo.mutate({
        mutation: guardarareaMutation,
        variables: {
          nombreArea: this.nombreArea
        }
      })
      .then(response => {
        console.log('Categoría guardada:', response.data.insert_area_one);
        this.nombreArea = '';
        this.obtenerareas();
      })
      .catch(error => {
        console.error('Error al guardar la categoría:', error);
      });
    },
    editararea(area) {
      this.editar = true;
      this.areaSeleccionada = { ...area };
    },
    actualizararea() {
      this.$apollo.mutate({
        mutation: actualizarareaMutation,
        variables: {
          id: this.areaSeleccionada.id_area,
          nombreArea: this.areaSeleccionada.nombreArea
        }
      })
      .then(response => {
        console.log('Categoría actualizada:', response.data.update_area_by_pk);
        this.editar = false;
        this.areaSeleccionada = null;
        this.obtenerareas();
      })
      .catch(error => {
        console.error('Error al actualizar la categoría:', error);
      });
    },
    eliminararea(id) {
      if (confirm('¿Estás seguro de que quieres eliminar esta categoría?')) {
        this.$apollo.mutate({
          mutation: eliminarareaMutation,
          variables: {
            id: id
          }
        })
        .then(() => {
          console.log('Categoría eliminada');
          this.editar = false;
          this.areaSeleccionada = null;
          this.obtenerareas();
        })
        .catch(error => {
          console.error('Error al eliminar la categoría:', error);
        });
      }
    }
  }
}
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