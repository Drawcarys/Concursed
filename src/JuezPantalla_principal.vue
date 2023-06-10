<script>
import gql from "graphql-tag";
//import {VIEW_PROYECTOS} from './graphql';

export default {
  data: () => ({
    sedeProyecto: 1,
    categoriaProyecto: 1,
    calidad_resumen: 0,
    definicion_mercado: 0,
    elemento_creativo: 0,
    elemento_innovacion: 0,
    factibilidad: 0,
    identificacion_problema: 0,
    presentacion_prototipo: 0,
    propuesta_solucion: 0,
    total: 0, 
    id_juez:87,
    id_proyecto:0
  }),

  apollo: {
    proyecto: {
        query: gql`
        query mostrar_proyectos($sedeProyecto:Int!, $categoriaProyecto:Int!) {
        proyecto(
        where: {
        sedeProyecto: { _eq: $sedeProyecto }
        categoriaProyecto: { _eq: $categoriaProyecto }
        }
            )   {
            nombreProyecto
            }
        }
    `,
    variables() {
        return{
            sedeProyecto: this.sedeProyecto, categoriaProyecto: this.categoriaProyecto
        }
     },
    } 
    },

  methods: {
    VerProyectosJuez() {
      this.$apollo.mutate({
        mutation: gql`
          query mostrar_proyectos_juez($sedeProyecto:Int!, $categoriaProyecto:Int!) {
            proyecto(
              where: {
                sedeProyecto: { _eq: $sedeProyecto }
                categoriaProyecto: { _eq: $categoriaProyecto }
              }
            ) {
              nombreProyecto
            }
          }
        `,
        variables: {
                sedeProyecto: 1, categoriaProyecto: 1
            },
      })
      this.refreshCount++;
    },

    CalificarPostgradoSuperiorMedio() {
      this.$apollo.mutate({
        mutation: gql`
          mutation insertar_calificacion_juez {
            insert_calificacion_one(
              object: {
                calidad_resumen: $calidad_resumen
                definicion_mercado: $definicion_mercado
                elemento_creativo: $elemento_creativo
                elemento_innovacion: $elemento_innovacion
                factibilidad: $factibilidad
                identificacion_problema: $identificacion_problema
                presentacion_prototipo: $presentacion_prototipo
                propuesta_solucion: $propuesta_solucion
                total: $total
                juez_proy_calis: {
                  data: { id_juezFJPC: $id_juez, id_proyectoFJPC: $id_proyecto }
                }
              }
            ) {
              total
              juez_proy_calis {
                id_calificacionFJPC
                id_juezFJPC
                id_proyectoFJPC
              }
            }
          }
        `,
        variables: {
                calidad_resumen: this.calidad_resumen, definicion_mercado: this.definicion_mercado, elemento_creativo: this.elemento_creativo, elemento_innovacion: this.elemento_innovacion, factibilidad: this.factibilidad, identificacion_problema: this.identificacion_problema, presentacion_prototipo: this.presentacion_prototipo, propuesta_solucion: this.propuesta_solucion, total: this.total, id_juez: this.id_juez, id_proyecto: this.id_proyecto
            },
      })
      this.refreshCount++;
    },

        CalificarJuvenil() {
            this.$apollo.mutate({
                mutation: gql`mutation insertar_calificacion_juez($calidad_resumen:Int!, $elemento_creativo:Int!, $elemento_innovacion:Int!, $identificacion_problema:Int!, $presentacion_prototipo:Int!, $propuesta_solucion:Int!, $total:Int!, $id_juez:Int!, $id_proyecto:Int!) {
                insert_calificacion_one(object: {calidad_resumen: $calidad_resumen, elemento_creativo: $elemento_creativo, elemento_innovacion: $elemento_innovacion, identificacion_problema: $identificacion_problema, presentacion_prototipo: $presentacion_prototipo, propuesta_solucion: $propuesta_solucion, total: $total, juez_proy_calis: {data: {id_juezFJPC: $id_juez, id_proyectoFJPC: $id_proyecto}}}) {
                id_calificacion
            }`,
            variables: {
                calidad_resumen: this.calidad_resumen, elemento_creativo: this.elemento_creativo, elemento_innovacion: this.elemento_innovacion, identificacion_problema: this.identificacion_problema, presentacion_prototipo: this.presentacion_prototipo, propuesta_solucion: this.propuesta_solucion, total: this.total, id_juez: this.id_juez, id_proyecto: this.id_proyecto
            },

        })
        this.refreshCount++;
        },

        CalificarKids() {
            this.$apollo.mutate({
                mutation: gql`mutation insertar_calificacion_juez ($calidad_resumen:Int!, $elemento_creativo:Int!, $identificacion_problema:Int!, $presentacion_prototipo:Int!, $propuesta_solucion:Int!, $total:Int!, $id_juez:Int!, $id_proyecto:Int!) {
                insert_calificacion_one(object: {calidad_resumen: $calidad_resumen, elemento_creativo: $elemento_creativo, identificacion_problema: $identificacion_problema, presentacion_prototipo: $presentacion_prototipo, propuesta_solucion: $propuesta_solucion, total: $total, juez_proy_calis: {data: {id_juezFJPC: $id_juez, id_proyectoFJPC: $id_proyecto}}}) {
                id_calificacion
            }`,
            variables: {
                calidad_resumen: this.calidad_resumen, elemento_creativo: this.elemento_creativo, identificacion_problema: this.identificacion_problema, presentacion_prototipo: this.presentacion_prototipo, propuesta_solucion: this.propuesta_solucion, total: this.total, id_juez: this.id_juez, id_proyecto: this.id_proyecto
            },

        })
        this.refreshCount++;
        },

    abrir() {
      document.getElementById("elementsALRL").style.display = "block";
    },

    cerrar() {
      document.getElementById("elementsALRL").style.display = "none";
    },
  },

};
</script>

<template>
  <div class="fondo">
    <h1 id="evaALRL">Evaluación</h1>
    <h1 id="cateALRL">Proyectos</h1>
    <h1 id="nombALRL">Nombre Proyectos</h1>
    <ul id="listALRL">
      <li v-for='item in proyecto' v-bind:key="item">
        {{ item.nombreProyecto }}
        <button class="button1ALRL" @mousedown="abrir">Calificar</button>
        <div id="sepaALRL"></div>
      </li>
    </ul>
    <div class="ALRL_resul" id="elementsALRL">
      <img src="@/assets/cerrar.png" id="imgALRL" @mousedown="cerrar" />
      <div class="dst-calificar">
        <div>
          <p>
            Calidad del <br />
            resumen <br />
            documental
          </p>
          <input class="dst-input" type="number" v-model="calidad_resumen"/>
        </div>
        <div>
          <p>
            Presentación <br />
            del prototipo
          </p>
          <input class="dst-input" type="number" v-model="presentacion_prototipo" />
        </div>
        <div>
          <p>
            Identificación <br />
            del problema
          </p>
          <input class="dst-input" type="number" v-model="identificacion_problema" />
        </div>
        <div>
          <p>Propuesta de <br />solución</p>
          <input class="dst-input" type="number" v-model="propuesta_solucion"/>
        </div>
        <div>
          <p>
            Elemento <br />
            creativo
          </p>
          <input class="dst-input" type="number" v-model="elemento_creativo"/>
        </div>
      </div>

      <div>
        <div class="dst-total">
          <p>Total: </p>
          <p>{{total}}</p>
        </div>
        <button @click="CalificarKids(calidad_resumen, elemento_creativo, identificacion_problema, presentacion_prototipo, propuesta_solucion, total, id_juez, id_proyecto)" class="button2ALRL">Calificar</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}

@media (min-width: 800px) {
  #evaALRL {
    font-size: 25px;
    font-family: "Poppins" sans-serif;
    position: relative;
    left: -5%;
    top: 10%;
  }

  #cateALRL {
    font-size: 25px;
    font-family: "Poppins" sans-serif;
    position: relative;
    left: -10%;
    top: 10%;
  }

  #nombALRL {
    font-size: 25px;
    font-family: "Poppins" sans-serif;
    position: relative;
    left: 12%;
    top: 7.3%;
  }

  #listALRL {
    list-style: none;
    font-weight: bold;
    font-size: 20px;
    position: relative;
    top: 15%;
    left: -30%;
  }

  #sepaALRL {
    background-color: black;
    height: 1px;
    width: 94%;
    position: relative;
    left: 34%;
  }

  .dst-calificar {
    display: flex;
    flex-direction: row;
    margin-top: 10%;
    
  }

  .dst-total{
    display: flex;
    flex-direction: row;
    position: relative;
    margin-top: 5%;
    left: 45%;
  }

  .dst-input {
    height: 25px;
    width: 50%;
  }

  .ALRL_resul {
    width: 700px;
    height: 500px;
    border-radius: 10px;
    border: 1px solid;
    background-color: #f7f7ff;
    position: relative;
    left: 15%;
    top: -20%;
    display: none;
  }

  #text1ALRL {
    font-size: 17px;
    font-family: "Poppins" sans-serif;
  }

  #text2ALRL {
    font-size: 17px;
    font-family: "Poppins" sans-serif;
    position: relative;
    left: -35%;
    top: 25%;
  }

  #text3ALRL {
    font-size: 17px;
    font-family: "Poppins" sans-serif;
    position: relative;
    left: -13%;
    top: -2%;
  }

  #text4ALRL {
    font-size: 17px;
    font-family: "Poppins" sans-serif;
    position: relative;
    left: -13%;
    top: 4%;
  }

  #text5ALRL {
    font-size: 17px;
    font-family: "Poppins" sans-serif;
    position: relative;
    left: 7%;
    top: -23%;
  }

  #text6ALRL {
    font-size: 17px;
    font-family: "Poppins" sans-serif;
    position: relative;
    left: 7%;
    top: -18%;
  }

  #text7ALRL {
    font-size: 17px;
    font-family: "Poppins" sans-serif;
    position: relative;
    left: 26%;
    top: -45%;
  }

  #text8ALRL {
    font-size: 17px;
    font-family: "Poppins" sans-serif;
    position: relative;
    left: 26%;
    top: -40%;
  }

  #text9ALRL {
    font-size: 17px;
    font-family: "Poppins" sans-serif;
    position: relative;
    left: 43%;
    top: -67%;
  }

  #text10ALRL {
    font-size: 17px;
    font-family: "Poppins" sans-serif;
    position: relative;
    left: 43%;
    top: -62%;
  }

  #text11ALRL {
    font-size: 17px;
    font-family: "Poppins" sans-serif;
    position: relative;
    left: 15%;
    top: -40%;
  }

  #text12ALRL {
    font-size: 17px;
    font-family: "Poppins" sans-serif;
    position: relative;
    left: 22%;
    top: -48.5%;
  }

  .button1ALRL {
    position: relative;
    margin: 15px;
    border: 0px;
    color: white;
    font-size: 18px;
    background-color: #30649d;
    height: 30px;
    width: 150px;
    left: 70%;
    border-radius: 5px;
  }

  .button2ALRL {
    position: relative;
    margin: 10px;
    border: 0px;
    color: white;
    font-size: 18px;
    background-color: #30649d;
    height: 30px;
    width: 150px;
    left: 35%;
    border-radius: 5px;
  }

  #imgALRL {
    width: 20px;
    position: relative;
    margin-top: 1%;
    left: 45%;
  }
}

@media (min-width: 1400px) {
  #evaALRL {
    font-size: 25px;
    font-family: "Poppins" sans-serif;
    position: relative;
    left: -5%;
    top: 10%;
  }

  #cateALRL {
    font-size: 25px;
    font-family: "Poppins" sans-serif;
    position: relative;
    left: -10%;
    top: 10%;
  }

  #nombALRL {
    font-size: 25px;
    font-family: "Poppins" sans-serif;
    position: relative;
    left: 1%;
    top: 7.3%;
  }

  #listALRL {
    list-style: none;
    font-weight: bold;
    font-size: 20px;
    position: relative;
    top: 15%;
    left: -35%;
  }

  #sepaALRL {
    background-color: black;
    height: 1px;
    width: 94%;
    position: relative;
    left: 38%;
  }

  .ALRL_resul {
    width: 1200px;
    height: 500px;
    border-radius: 10px;
    border: 1px solid;
    background-color: #f7f7ff;
    position: relative;
    left: 15%;
    top: -20%;
    display: none;
  }

  #text1ALRL {
    font-size: 20px;
    font-family: "Poppins" sans-serif;
    position: relative;
    left: -35%;
    top: 25%;
  }

  #text2ALRL {
    font-size: 20px;
    font-family: "Poppins" sans-serif;
    position: relative;
    left: -35%;
    top: 25%;
  }

  #text3ALRL {
    font-size: 20px;
    font-family: "Poppins" sans-serif;
    position: relative;
    left: -13%;
    top: -5%;
  }

  #text4ALRL {
    font-size: 20px;
    font-family: "Poppins" sans-serif;
    position: relative;
    left: -13%;
    top: 1%;
  }

  #text5ALRL {
    font-size: 20px;
    font-family: "Poppins" sans-serif;
    position: relative;
    left: 7%;
    top: -30%;
  }

  #text6ALRL {
    font-size: 20px;
    font-family: "Poppins" sans-serif;
    position: relative;
    left: 7%;
    top: -23%;
  }

  #text7ALRL {
    font-size: 20px;
    font-family: "Poppins" sans-serif;
    position: relative;
    left: 24%;
    top: -54%;
  }

  #text8ALRL {
    font-size: 20px;
    font-family: "Poppins" sans-serif;
    position: relative;
    left: 24%;
    top: -47%;
  }

  #text9ALRL {
    font-size: 20px;
    font-family: "Poppins" sans-serif;
    position: relative;
    left: 40%;
    top: -79%;
  }

  #text10ALRL {
    font-size: 20px;
    font-family: "Poppins" sans-serif;
    position: relative;
    left: 40%;
    top: -71%;
  }

  #text11ALRL {
    font-size: 20px;
    font-family: "Poppins" sans-serif;
    position: relative;
    left: 15%;
    top: -40%;
  }

  #text12ALRL {
    font-size: 20px;
    font-family: "Poppins" sans-serif;
    position: relative;
    left: 20%;
    top: -49%;
  }

  .button1ALRL {
    position: relative;
    margin: 15px;
    border: 0px;
    color: white;
    font-size: 18px;
    background-color: #30649d;
    height: 30px;
    width: 150px;
    left: 70%;
    border-radius: 5px;
  }

  .button2ALRL {
    position: relative;
    margin: 15px;
    border: 0px;
    color: white;
    font-size: 18px;
    background-color: #30649d;
    height: 30px;
    width: 150px;
    left: 35%;
    top: -61.5%;
    border-radius: 5px;
  }

  #imgALRL {
    width: 20px;
    position: relative;
  }
}

body {
  padding: 0px;
  margin: -15px;
}

.fondo {
  width: 100%;
  height: 70em;
  background: linear-gradient(180deg, #bdd9ff 0%, #f7f7ff 50.83%);
}
</style>
