<template>
  <table id="tablaCalificaciones">
    <thead>
      <tr>
        <th>Proyecto</th>
        <th>Calificación Total</th>
        <th>Promedio</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="proyecto in proyectos" :key="proyecto.id_calificacion">
        <td>{{ proyecto.id_calificacion }}</td>
        <td>{{ proyecto.total }}</td>
        <td>{{ proyecto.promedio }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { gql } from 'apollo-boost';

export default {
  data() {
    return {
      proyectos: [],
    };
  },
  created() {
    this.obtenerCalificaciones();
  },
  methods: {
    obtenerCalificaciones() {
      this.$apollo.query({
        query: gql`
          query {
            calificaciones {
              id_calificacion
              calidad_resumen
              presentacion_prototipo
              identificacion_problema
              propuesta_solucion
              elemento_creativo
              elemento_innovacion
              definicion_mercado
              factibilidad
            }
          }
        `,
      })
        .then(response => {
          const calificaciones = response.data.calificaciones;

          // Calcular la calificación total y el promedio para cada proyecto
          const proyectosCalculados = calificaciones.map(calificacion => {
            const {
              calidad_resumen,
              presentacion_prototipo,
              identificacion_problema,
              propuesta_solucion,
              elemento_creativo,
              elemento_innovacion = 0,
              definicion_mercado,
              factibilidad,
            } = calificacion;

            const total = (
              calidad_resumen +
              presentacion_prototipo +
              identificacion_problema +
              propuesta_solucion +
              elemento_creativo +
              elemento_innovacion +
              definicion_mercado +
              factibilidad
            );

            const promedio = total / 8; // Dividir entre el número de criterios de calificación

            return {
              ...calificacion,
              total,
              promedio,
            };
          });

          this.proyectos = proyectosCalculados;
        })
        .catch(error => {
          console.error('Error al obtener las calificaciones:', error);
        });
    },
  },
}

</script>




<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500&display=swap');

#vbmverProyectos {
  font-family: Ubuntu;
  border-collapse: collapse;
  width: 100%;
  margin-top:5%;
  margin-left:5%;

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