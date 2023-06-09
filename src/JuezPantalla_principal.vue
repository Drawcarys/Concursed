<script>
import gql from 'graphql-tag'

export default{
    methods: {
        VerProyectosJuez() {
            this.$apollo.mutate({
                mutation: gql`query mostrar_proyectos_juez {
                mostrar_proyectos_juez(where: {sedeProyecto: {_eq: $sedeProyecto}, categoriaProyecto: {_eq: $categoriaProyecto}}) {
                folio
                nombreProyecto
                }
            }`,

        })
        this.refreshCount++;
        },

        CalificarPostgradoSuperiorMedio() {
            this.$apollo.mutate({
                mutation: gql`mutation insertar_calificacion_juez {
                insert_calificacion_one(object: {calidad_resumen: $calidad_resumen, definicion_mercado: $definicion_mercado, elemento_creativo: $elemento_creativo, elemento_innovacion: $elemento_innovacion, factibilidad: $factibilidad, identificacion_problema: $identificacion_problema, presentacion_prototipo: $presentacion_prototipo, propuesta_solucion: $propuesta_solucion, total: $total, juez_proy_calis: {data: {id_juezFJPC: $id_juez, id_proyectoFJPC: $id_proyecto}}}) {
                total
                juez_proy_calis {
                    id_calificacionFJPC
                    id_juezFJPC
                    id_proyectoFJPC
                    }
                }
            }`,

        })
        this.refreshCount++;
        },

        CalificarJuvenil() {
            this.$apollo.mutate({
                mutation: gql`mutation insertar_calificacion_juez {
                insert_calificacion_one(object: {calidad_resumen: $calidad_resumen, elemento_creativo: $elemento_creativo, elemento_innovacion: $elemento_innovacion, identificacion_problema: $identificacion_problema, presentacion_prototipo: $presentacion_prototipo, propuesta_solucion: $propuesta_solucion, total: $total, juez_proy_calis: {data: {id_juezFJPC: $id_juez, id_proyectoFJPC: $id_proyecto}}}) {
                total
                juez_proy_calis {
                    id_calificacionFJPC
                    id_juezFJPC
                    id_proyectoFJPC
                    }
                }
            }`,

        })
        this.refreshCount++;
        },

        CalificarKids() {
            this.$apollo.mutate({
                mutation: gql`mutation insertar_calificacion_juez {
                insert_calificacion_one(object: {calidad_resumen: $calidad_resumen, elemento_creativo: $elemento_creativo, identificacion_problema: $identificacion_problema, presentacion_prototipo: $presentacion_prototipo, propuesta_solucion: $propuesta_solucion, total: $total, juez_proy_calis: {data: {id_juezFJPC: $id_juez, id_proyectoFJPC: $id_proyecto}}}) {
                total
                juez_proy_calis {
                    id_calificacionFJPC
                    id_juezFJPC
                    id_proyectoFJPC
                    }
                }
            }`,

        })
        this.refreshCount++;
        },
    }
}

</script>


<template>
    <div class="fondo">
        <h1 style="font-size: 25px; font-family: 'Poppins' sans-serif; position: relative; left: 45%; top: 10%;">Evaluación</h1>
        <h1 style="font-size: 25px; font-family: 'Poppins' sans-serif; position: relative; left: 45%; top: 10%;">Categoría:</h1>
        <h1 style="font-size: 25px; font-family: 'Poppins' sans-serif; position: relative; left: 51%; top: 6.2%;">Nombre_categoria</h1>
        <ul style="list-style: none; font-weight: bold; font-size: 20px; position: relative; top: 15%;">
            <li v-for="(categorias,index) in arrayCat" :key="index">
               {{ categorias }} <button class="button1ALRL">Calificar</button> <div style="background-color: black; height: 1px; width: 94%;"></div>
            </li>
        </ul>
    
    </div>
    
</template>

<style>
body{
    padding: 0px;
    margin: -15px;
}
.fondo{
    width: 100%;
    height: 70em;
    background: linear-gradient(180deg, #BDD9FF 0%, #F7F7FF 50.83%);
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
    left: 80%;
    border-radius: 5px;
}

</style>