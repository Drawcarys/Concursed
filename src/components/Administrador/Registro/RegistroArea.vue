<script setup>

</script>
<template>
  <div class="vbmcol2">
    <form @submit.prevent="guardarArea">
      <p>Nombre del área:</p>
      <input id="nombreArea" type="text" name="registroArea" v-model="nombreArea" />
      <button type="submit" id="vbminiciar">Guardar cambios</button>
    </form>
  </div>
</template>

<script>
import { gql } from 'graphql-tag';

const guardarAreaMutation = gql`
  mutation guardarArea($nombreArea: String!) {
    guardarArea(nombreArea: $nombreArea) {
      id
      nombreArea
    }
  }
`;

export default {
  data() {
    return {
      nombreArea: '',
    };
  },
  methods: {
    guardarArea() {
      this.$apollo.mutate({
        mutation: guardarAreaMutation,
        variables: {
          nombreArea: this.nombreArea
        }
      })
      .then(response => {
        console.log('Área guardada:', response.data.guardarArea);
        // Restablecer el campo de nombre del área después de guardar
        this.nombreArea = '';
      })
      .catch(error => {
        console.error('Error al guardar el área:', error);
      });
    }
  }
}
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