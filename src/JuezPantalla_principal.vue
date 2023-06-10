<script>
import gql from 'graphql-tag'

export default{
    methods: {

        data(){
            return{
                argsProyectos: [],
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
                id_juez:0,
                id_proyecto:0
            }
        },

        abrir() {
            document.getElementById("elementsALRL").style.display="block";
        },

        cerrar() {
            document.getElementById("elementsALRL").style.display="none";
        },

        VerProyectosJuez() {
            this.$apollo.mutate({
                mutation: gql`query mostrar_proyectos_juez($sedeProyecto:Int!, $categoriaProyecto:Int!){
                proyecto(where: {sedeProyecto: {_eq: $sedeProyecto}, categoriaProyecto: {_eq: $categoriaProyecto}}) {
                folio
                nombreProyecto
                }
            }`,
            variables: {
                sedeProyecto: this.sedeProyecto, categoriaProyecto: this.categoriaProyecto
            },

        })
        this.refreshCount++;
        },

        CalificarPostgradoSuperiorMedio() {
            this.$apollo.mutate({
                mutation: gql`mutation insertar_calificacion_juez($calidad_resumen:Int!, $definicion_mercado:Int!, $elemento_creativo:Int!, $elemento_innovacion:Int!, $factibilidad:Int!, $identificacion_problema:Int!, $presentacion_prototipo:Int!, $propuesta_solucion:Int!, $total:Int!, $id_juez:Int!, $id_proyecto:Int!) {
                insert_calificacion_one(object: {calidad_resumen: $calidad_resumen, definicion_mercado: $definicion_mercado, elemento_creativo: $elemento_creativo, elemento_innovacion: $elemento_innovacion, factibilidad: $factibilidad, identificacion_problema: $identificacion_problema, presentacion_prototipo: $presentacion_prototipo, propuesta_solucion: $propuesta_solucion, total: $total, juez_proy_calis: {data: {id_juezFJPC: $id_juez, id_proyectoFJPC: $id_proyecto}}}) {
                id_calificacion
            }`,
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
    }
}

</script>


<template>
    <div class="fondo">
        <h1 id="evaALRL" >Evaluación</h1>
        <h1 id="cateALRL" >Areas:</h1>
        <h1 id="nombALRL" >Nombre_categoria</h1>
        <ul id="listALRL">
            <li>
               Ciencias <button class="button1ALRL" @mousedown="abrir">Calificar</button> <div id="sepaALRL"></div>
            </li>
            <li>
               Tecnología <button class="button1ALRL" @mousedown="abrir">Calificar</button> <div id="sepaALRL"></div>
            </li>
            <li>
               Alimentos <button class="button1ALRL" @mousedown="abrir">Calificar</button> <div id="sepaALRL"></div>
            </li>
            <li>
               Sociedad <button class="button1ALRL" @mousedown="abrir">Calificar</button> <div id="sepaALRL"></div>
            </li>
            <li>
               Salud <button class="button1ALRL" @mousedown="abrir">Calificar</button> <div id="sepaALRL"></div>
            </li>
        </ul>

        <div class="ALRL_resul" id="elementsALRL">
            <p id="text1ALRL">Calidad del <br> resumen <br> documental</p>
            <P id="text2ALRL">10</P>
            <p id="text3ALRL">Presentación <br> del prototipo</p>
            <P id="text4ALRL">40</P>
            <p id="text5ALRL">Identificación <br> del problema</p>
            <P id="text6ALRL">10</P>
            <p id="text7ALRL">Propuesta de <br>solución</p>
            <P id="text8ALRL">20</P>
            <p id="text9ALRL">Elemento <br> creativo</p>
            <P id="text10ALRL" >20</P>
            <p id="text11ALRL">Total</p>
            <p id="text12ALRL">100</p>
            
                <img src="@/assets/cerrar.png" id="imgALRL" @mousedown="cerrar">
            
            
            <button class="button2ALRL">Calificar</button>
        </div>
    
    </div>
    
</template>

<style scoped>

@media (min-width: 800px) {
    #evaALRL{
        font-size: 25px; 
        font-family: 'Poppins' sans-serif; 
        position: relative; 
        left: -5%; 
        top: 10%;
    }

    #cateALRL{
        font-size: 25px; 
        font-family: 'Poppins' sans-serif; 
        position: relative; 
        left: -10%; 
        top: 10%;
    }

    #nombALRL{
        font-size: 25px; 
        font-family: 'Poppins' sans-serif; 
        position: relative; 
        left: 12%; 
        top: 7.3%;
    }

    #listALRL{
        list-style: none; 
        font-weight: bold; 
        font-size: 20px; 
        position: relative;
        top: 15%;
        left: -30%;
    }

    #sepaALRL{
        background-color: black;
        height: 1px;
        width: 94%;
        position: relative;
        left: 34%;
    }
    .ALRL_resul{
        width: 700px;
        height: 500px;
        border-radius: 10px;
        border: 1px solid;
        background-color: #F7F7FF;
        position: relative;
        left: 15%;
        top: -20%;
        display: none;
    }

    #text1ALRL{
        font-size: 17px; 
        font-family: 'Poppins'sans-serif; 
        position: relative; 
        left: -35%; 
        top:25%;
    }

    #text2ALRL{
        font-size: 17px; 
        font-family: 'Poppins' sans-serif; 
        position: relative; 
        left: -35%; 
        top:25%;
    }

    #text3ALRL{
        font-size: 17px; 
        font-family: 'Poppins' sans-serif; 
        position: relative; 
        left: -13%; 
        top:-2%;
    }

    #text4ALRL{
        font-size: 17px; 
        font-family: 'Poppins' sans-serif; 
        position: relative; 
        left: -13%; 
        top:4%;
    }

    #text5ALRL{
        font-size: 17px; 
        font-family: 'Poppins' sans-serif; 
        position: relative; 
        left: 7%; 
        top: -23%;
    }

    #text6ALRL{
        font-size: 17px; 
        font-family: 'Poppins' sans-serif; 
        position: relative; 
        left: 7%; 
        top:-18%;
    }

    #text7ALRL{
        font-size: 17px; 
        font-family: 'Poppins' sans-serif; 
        position: relative; 
        left: 26%; 
        top: -45%;
    }

    #text8ALRL{
        font-size: 17px; 
        font-family: 'Poppins' sans-serif; 
        position: relative; 
        left: 26%; 
        top:-40%;
    }

    #text9ALRL{
        font-size: 17px; 
        font-family: 'Poppins' sans-serif; 
        position: relative; 
        left: 43%; 
        top: -67%;
    }

    #text10ALRL{
        font-size: 17px; 
        font-family: 'Poppins' sans-serif; 
        position: relative; 
        left: 43%; 
        top:-62%;
    }

    #text11ALRL{
        font-size: 17px; 
        font-family: 'Poppins' sans-serif; 
        position: relative; 
        left: 15%; 
        top: -40%;
    }

    #text12ALRL{
        font-size: 17px; 
        font-family: 'Poppins' sans-serif; 
        position: relative; 
        left: 22%; 
        top: -48.5%;
    }

    .button1ALRL{
        position: relative;
        margin: 15px ;
        border: 0px;
        color: white;
        font-size: 18px;
        background-color: #30649D;
        height: 30px;
        width: 150px;
        left: 70%;
        border-radius: 5px;
    }
    .button2ALRL{
        position: relative;
        margin: 15px ;
        border: 0px;
        color: white;
        font-size: 18px;
        background-color: #30649D;
        height: 30px;
        width: 150px;
        left: 35%;
        top: -60%;
        border-radius: 5px;
    }

    #imgALRL{
        width: 20px;
        position: relative;
        top: -125%;
        left: 55%;
    }
}

@media (min-width: 1400px) {
    #evaALRL{
        font-size: 25px; 
        font-family: 'Poppins' sans-serif; 
        position: relative; 
        left: -5%; 
        top: 10%;
    }

    #cateALRL{
        font-size: 25px; 
        font-family: 'Poppins' sans-serif; 
        position: relative; 
        left: -10%; 
        top: 10%;
    }

    #nombALRL{
        font-size: 25px; 
        font-family: 'Poppins' sans-serif; 
        position: relative; 
        left: 1%; 
        top: 7.3%;
    }

    #listALRL{
        list-style: none; 
        font-weight: bold; 
        font-size: 20px; 
        position: relative;
        top: 15%;
        left: -35%;
    }

    #sepaALRL{
        background-color: black;
        height: 1px;
        width: 94%;
        position: relative;
        left: 38%;
    }
    .ALRL_resul{
        width: 1200px;
        height: 500px;
        border-radius: 10px;
        border: 1px solid;
        background-color: #F7F7FF;
        position: relative;
        left: 15%;
        top: -20%;
        display: none;
    }

    #text1ALRL{
        font-size: 20px; 
        font-family: 'Poppins'sans-serif; 
        position: relative; 
        left: -35%; 
        top:25%;
    }

    #text2ALRL{
        font-size: 20px; 
        font-family: 'Poppins' sans-serif; 
        position: relative; 
        left: -35%; 
        top:25%;
    }

    #text3ALRL{
        font-size: 20px; 
        font-family: 'Poppins' sans-serif; 
        position: relative; 
        left: -13%; 
        top:-5%;
    }

    #text4ALRL{
        font-size: 20px; 
        font-family: 'Poppins' sans-serif; 
        position: relative; 
        left: -13%; 
        top:1%;
    }

    #text5ALRL{
        font-size: 20px; 
        font-family: 'Poppins' sans-serif; 
        position: relative; 
        left: 7%; 
        top: -30%;
    }

    #text6ALRL{
        font-size: 20px; 
        font-family: 'Poppins' sans-serif; 
        position: relative; 
        left: 7%; 
        top:-23%;
    }

    #text7ALRL{
        font-size: 20px; 
        font-family: 'Poppins' sans-serif; 
        position: relative; 
        left: 24%; 
        top: -54%;
    }

    #text8ALRL{
        font-size: 20px; 
        font-family: 'Poppins' sans-serif; 
        position: relative; 
        left: 24%; 
        top:-47%;
    }

    #text9ALRL{
        font-size: 20px; 
        font-family: 'Poppins' sans-serif; 
        position: relative; 
        left: 40%; 
        top: -79%;
    }

    #text10ALRL{
        font-size: 20px; 
        font-family: 'Poppins' sans-serif; 
        position: relative; 
        left: 40%; 
        top:-71%;
    }

    #text11ALRL{
        font-size: 20px; 
        font-family: 'Poppins' sans-serif; 
        position: relative; 
        left: 15%; 
        top: -40%;
    }

    #text12ALRL{
        font-size: 20px; 
        font-family: 'Poppins' sans-serif; 
        position: relative; 
        left: 20%; 
        top: -49%;
    }

    .button1ALRL{
        position: relative;
        margin: 15px ;
        border: 0px;
        color: white;
        font-size: 18px;
        background-color: #30649D;
        height: 30px;
        width: 150px;
        left: 70%;
        border-radius: 5px;
    }
    .button2ALRL{
        position: relative;
        margin: 15px ;
        border: 0px;
        color: white;
        font-size: 18px;
        background-color: #30649D;
        height: 30px;
        width: 150px;
        left: 35%;
        top: -61.5%;
        border-radius: 5px;
    }

    #imgALRL{
        width: 20px;
        position: relative;
        top: -145%;
        left: 50%;
    }
}

body{
    padding: 0px;
    margin: -15px;
}
.fondo{
    width: 100%;
    height: 70em;
    background: linear-gradient(180deg, #BDD9FF 0%, #F7F7FF 50.83%);
}



</style>