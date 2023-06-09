<template>
  <div>
    <table id="vbmverProyectos">
      <tr>
        <th>Nombre</th>
        <th>Calificación General</th>
        <th>Área</th>
        <th>Categoría</th>
        <th></th>
        <th></th>
      </tr>
      <tr v-for="proyecto in proyectos" :key="proyecto.id">
        <td>{{ proyecto.nombre }}</td>
        <td>{{ proyecto.calificacion }}</td>
        <td>{{ proyecto.area }}</td>
        <td>{{ proyecto.categoria }}</td>
        <td><button id="botonesTabla" @click="verProyecto(proyecto.id)">Ver</button></td>
        <td><button id="botonesTabla" @click="gestionarProyecto(proyecto.id)">Gestionar</button></td>
      </tr>
    </table>
  </div>
</template>

<script setup>
import { gql } from 'apollo-boost';
import { ref } from 'vue';

const proyectos = ref([]);

const obtenerProyectos = () => {
  this.$apollo
    .query({
      query: gql`
        query {
          proyectos {
            id
            nombre
            calificacion
            area
            categoria
            # Otros campos del proyecto que necesites
          }
        }
      `,
    })
    .then(response => {
      proyectos.value = response.data.proyectos;
    })
    .catch(error => {
      console.log(error)
      // Manejo de errores
    });
};

 const verProyecto = id => {
  const proyecto = proyectos.value.find(p => p.id === id);
  if (proyecto) {
    // mostrar los detalles del proyecto con el ID proporcionado
    console.log(`Detalles del proyecto con ID ${id}:`, proyecto);
  }
}

const gestionarProyecto = id => {
  console.log('ID del proyecto:', id);
  //  gestionar el proyecto con el ID proporcionado
};

obtenerProyectos();
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500&display=swap');

#vbmverProyectos {
  font-family: Ubuntu;
  border-collapse: collapse;
  width: 100%;
  margin-top: 5%;
  margin-left: 5%;

}

#vbmverProyectos td,
#vbmverProyectos th {
  padding: 8px;
  width: 300px;
  height: 80px;
}

#vbmverProyectos td {
  border-bottom: 1px solid #333D48;
}

#botonesTabla {
  width: 150px;
  height: 50px;

  font-family: Poppins;
  background: #30649D;
  color: #F7F7FF;
  border: none;
  border-radius: 6px;
}
</style>