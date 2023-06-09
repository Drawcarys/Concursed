<script setup>

</script>
<template>
  <div class="vbmCol2">
    <form @submit.prevent="guardarCategoria" v-if="!editar">

    
      <button type="submit" id="vbmIniciar">Guardar cambios</button>
    </form>

    <form @submit.prevent="actualizarCategoria" v-else>
      <p>Nombre de la categoría:</p>
      <input type="text" name="nombreCategoria" id="vbmNombreCategoria" v-model="categoriaSeleccionada.nombreCategoria" />
      <button type="submit" id="vbmEditar">Guardar cambios</button>
      <button type="button" @click="eliminarCategoria">Eliminar</button>
    </form>

    <table v-if="categorias.length > 0">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre de la categoría</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="categoria in categorias" :key="categoria.id_categoria">
          <td>{{ categoria.id_categoria }}</td>
          <td>{{ categoria.nombreCategoria }}</td>
          <td>
            <button @click="editarCategoria(categoria)" id="vbmbotonesTabla">Editar</button>
            <button @click="eliminarCategoria(categoria.id_categoria)" id="vbmbotonesTabla">Eliminar</button>
          </td>
        </tr>
      </tbody>
    </table>
    <p v-else>No hay categorías guardadas.</p>
  </div>
</template>

<script>
import { gql } from 'graphql-tag';

const obtenerCategoriasQuery = gql`
  query obtenerCategorias {
    categoria {
      id_categoria
      nombreCategoria
    }
  }
`;

const guardarCategoriaMutation = gql`
  mutation guardarCategoria($nombreCategoria: String!) {
    insert_categoria_one(object: { nombreCategoria: $nombreCategoria }) {
      id_categoria
      nombreCategoria
    }
  }
`;

const actualizarCategoriaMutation = gql`
  mutation actualizarCategoria($id: Int!, $nombreCategoria: String!) {
    update_categoria_by_pk(pk_columns: { id_categoria: $id }, _set: { nombreCategoria: $nombreCategoria }) {
      id_categoria
      nombreCategoria
    }
  }
`;

const eliminarCategoriaMutation = gql`
  mutation eliminarCategoria($id: Int!) {
    delete_categoria_by_pk(id_categoria: $id) {
      id_categoria
    }
  }
`;

export default {
  data() {
    return {
      nombreCategoria: '',
      categorias: [],
      editar: false,
      categoriaSeleccionada: null
    };
  },
  created() {
    this.obtenerCategorias();
  },
  methods: {
    obtenerCategorias() {
      this.$apollo.query({
        query: obtenerCategoriasQuery
      })
      .then(response => {
        this.categorias = response.data.categoria;
      })
      .catch(error => {
        console.error('Error al obtener las categorías:', error);
      });
    },
    guardarCategoria() {
      this.$apollo.mutate({
        mutation: guardarCategoriaMutation,
        variables: {
          nombreCategoria: this.nombreCategoria
        }
      })
      .then(response => {
        console.log('Categoría guardada:', response.data.insert_categoria_one);
        this.nombreCategoria = '';
        this.obtenerCategorias();
      })
      .catch(error => {
        console.error('Error al guardar la categoría:', error);
      });
    },
    editarCategoria(categoria) {
      this.editar = true;
      this.categoriaSeleccionada = { ...categoria };
    },
    actualizarCategoria() {
      this.$apollo.mutate({
        mutation: actualizarCategoriaMutation,
        variables: {
          id: this.categoriaSeleccionada.id_categoria,
          nombreCategoria: this.categoriaSeleccionada.nombreCategoria
        }
      })
      .then(response => {
        console.log('Categoría actualizada:', response.data.update_categoria_by_pk);
        this.editar = false;
        this.categoriaSeleccionada = null;
        this.obtenerCategorias();
      })
      .catch(error => {
        console.error('Error al actualizar la categoría:', error);
      });
    },
    eliminarCategoria(id) {
      if (confirm('¿Estás seguro de que quieres eliminar esta categoría?')) {
        this.$apollo.mutate({
          mutation: eliminarCategoriaMutation,
          variables: {
            id: id
          }
        })
        .then(() => {
          console.log('Categoría eliminada');
          this.editar = false;
          this.categoriaSeleccionada = null;
          this.obtenerCategorias();
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
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500&display=swap');

#vbmtablaCategoria {
    font-family: Ubuntu;
    border-collapse: collapse;
    width: 100%;
}

#vbmtablaCategoria td,
#vbmtablaCategoria th {
    padding: 10px;
    width: 300px;
    height: 80px;
}

#vbmtablaCategoria td {
    border-bottom: 1px solid #333D48;
}

#vbmbotonesTabla {
    width: 150px;
    height: 50px;

    padding: 2%;

    font-family: Poppins;
    background: #30649D;
    color: #F7F7FF;
    border: none;
    border-radius: 6px;
}
</style>