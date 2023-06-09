<script setup>

</script>
<template>
  <div class="vbmCol2">
    <form @submit.prevent="guardarCategoria">
      <p>Nombre de la categoría:</p>
      <input type="text" name="nombreCategoria" id="vbmNombreCategoria" v-model="nombreCategoria" />
      <button type="submit" id="vbmIniciar">Guardar cambios</button>
    </form>
  </div>
</template>

<script>
import { gql } from 'graphql-tag';

const guardarCategoriaMutation = gql`
  mutation GuardarCategoria($nombreCategoria: String!) {
    insert_categoria_one(object: { nombreCategoria: $nombreCategoria }) {
      id_categoria
      nombreCategoria
    }
  }
`;

export default {
  data() {
    return {
      nombreCategoria: ''
    };
  },
  methods: {
    guardarCategoria() {
      this.$apollo
        .mutate({
          mutation: guardarCategoriaMutation,
          variables: {
            nombreCategoria: this.nombreCategoria
          }
        })
        .then(response => {
          const categoriaGuardada = response.data.insert_categoria_one;
          console.log('Categoría guardada:', categoriaGuardada);
          // Puedes hacer cualquier otra acción aquí, como actualizar la lista de categorías
          // o mostrar un mensaje de éxito al usuario.
        })
        .catch(error => {
          console.error('Error al guardar la categoría:', error);
          // Puedes mostrar un mensaje de error al usuario si ocurre algún problema.
        });
    }
  }
};
</script>





<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500&display=swap');

#vbmNombreCategoria {
  width: 150%;
  height: 40px;

}
#vbmDescripcionCategoria{
  width: 150%;
  height: 300px;
}

#vbmCol2 {
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

.vbmCol2 {
  margin-top: 5%;
}

#vbmIniciar {
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