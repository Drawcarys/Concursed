<script>
import RegistroGeneral from './PestaniasRegistro/RegistroGeneral.vue';
import RegistroAutorUno from './PestaniasRegistro/RegistroAutorUno.vue';
import RegistroAutorDos from './PestaniasRegistro/RegistroAutorDos.vue';
import RegistroAsesor from './PestaniasRegistro/RegistroAsesor.vue';
import RegistroPdf from './PestaniasRegistro/RegistroPdf.vue';
import Barnav from './BarNav.vue';
import { ALL_ADMINS, ALL_AREAS, ALL_CATEGORIAS, ALL_JUECES, ALL_PARTICIPANTES, ALL_PROYECTOS, ALL_SEDES} from '../graphql'
import gql from 'graphql-tag'

// eslint-disable-next-line no-unused-vars
const tabNames = {
    GENERAlES: 'Datos generales',
    AUTORUNO: 'Autor 1',
    AUTORDOS: 'Autor 2',
    ASESOR: 'Asesor',
    PDF: 'PDF'
}

export default {
    name: 'RegistroProyecto',
    data(){
        return{
        argsGeneral:{
            
        },
        argsAutorUno:[],
        argsAutorDos:[],
        argsAsesor:[],
        argsRegistroPDF:[],
        argsProyecto:[],
        currentTab: null,
        activeTabName: null,
        admin: [],
        pswrd:"",
        nombre:"",
        correo:"",
        nombreArea:"",
        apellido1: "" , 
        apellido2: "" , 
        colonia: "", 
        cp: 0, 
        domicilio: "", 
        fechaNac: new Date("2016-07-20T17:30:15+05:30"), 
        institucion: "", 
        localidad: "", 
        municipio: "", 
        sexo: true, 
        telefono: 0,
        nombreA:"",
        correoA:"",
        apellido1A: "" , 
        apellido2A: "" , 
        coloniaA: "", 
        cpA: 0, 
        domicilioA: "", 
        fechaNacA: new Date("2016-07-20T17:30:15+05:30"), 
        institucionA: "", 
        localidadA: "", 
        municipioA: "", 
        sexoA: true, 
        telefonoA: 0,
        id_categoria:1,
        id_sede:1,
        tabNames,
        nombreProyecto: '',
        sede: '',
        categoria: '',
        autores: [],
        area: '',
        asesor: '',
        archivoAdjunto: null,
        tabs: {
            [tabNames.GENERAlES]: RegistroGeneral,
            [tabNames.AUTORUNO]: RegistroAutorUno,
            [tabNames.AUTORDOS]: RegistroAutorDos,
            [tabNames.ASESOR]: RegistroAsesor,
            [tabNames.PDF]: RegistroPdf
        }
        }
    },
    computed:{
        console: ()=> console
    },
    component: {
        RegistroGeneral
    },
    apollo: {
        admin:ALL_ADMINS,
        area:ALL_AREAS,
        categoria:ALL_CATEGORIAS,
        juez:ALL_JUECES,
        participante:ALL_PARTICIPANTES,
        proyecto:ALL_PROYECTOS,
        sede:ALL_SEDES
    },
    methods: {
        handleTabClick: function (tabNames) {
            this.activeTabName = tabNames;
            this.currentTab = this.tabs[tabNames];
        },

        getGeneralData (value) {
            this.argsGeneral = value
            //console.log(value)
        },
        getAutorUnoData (value) {
            this.argsAutorUno = value
            //console.log(value)
        },
        getAutorDosData (value) {
            this.argsAutorDos = value
            //console.log(value)
        },
        getAsesorData (value) {
            this.argsAsesor = value
            //console.log(value)
        },
        getRegistroPDFData (value) {
            this.argsRegistroPDF = value
            //console.log(value)
        },

        InsertAdmin() {
            this.$apollo.mutate({
                mutation: gql`mutation insert_admin_one($correo:String!,$nombre:String!,$pswrd:String!) {
                insert_admin_one(object: {correo: $correo, nombre: $nombre, pswrd: $pswrd}) {
                correo
                nombre
                pswrd
            }
        }`,
        variables: {
            correo: this.correo, nombre: this.nombre, pswrd: this.pswrd
        },

    })
      this.refreshCount++;
    },

        InsertArea() {
            this.$apollo.mutate({
                mutation: gql`mutation insert_area_one($nombreArea:String!) {
                insert_area_one(object: {nombreArea: $nombreArea}) {
                nombreArea
            }
        }`,
        variables: {
            nombreArea: this.nombreArea
        },

    })
      this.refreshCount++;
    },

        InsertAsesor() {
            this.$apollo.mutate({
                mutation: gql`mutation insert_asesor_one($nombre:String!,$apellido1:String!, $apellido2:String!, $colonia:String!, $cp:Int!, $domicilio:String!, $institucion:String!, $localidad:String!, $municipio:String!, $sexo:Boolean!, $telefono:Int!) {
                insert_asesor_one(object: {persona: {data: {nombre: $nombre, apellido1: $apellido1, apellido2: $apellido2, colonia: $colonia, cp: $cp, domicilio: $domicilio, fechaNac: $fechaNac, institucion: $institucion, localidad: $localidad, municipio: $municipio, sexo: $sexo, telefono: $telefono}}, correo: $correo}) {
                persona {
                    nombre
                    apellido1
                    apellido2
                    colonia
                    cp
                    domicilio
                    fechaNac
                    institucion
                    localidad
                    municipio
                    sexo
                    telefono
                }
                correo
            }
        }`,
        variables: {
            nombre: this.nombre, apellido1: this.apellido1 , apellido2: this.apellido2 , colonia: this.colonia, cp: this.cp, domicilio: this.domicilio, fechaNac: this.fechaNac, institucion: this.institucion, localidad: this.localidad, municipio: this.municipio, sexo: this.sexo, telefono: this.telefono, correo: this.correo
        },

    })
      this.refreshCount++;
    },

        InsertCategoria() {
            this.$apollo.mutate({
                mutation: gql`mutation insert_categoria_one($nombreCategoria:String!) {
                insert_categoria_one(object: {nombreCategoria: $nombreCategoria}) {
                nombreCategoria
            }
        }`,
        variables: {
            nombreCategoria: this.nombreCategoria
        },

    })
      this.refreshCount++;
    },

        InsertJuez() {
            this.$apollo.mutate({
                mutation: gql`mutation insert_juez_one($nombre:String!,$apellido1:String!, $apellido2:String!, $colonia:String!, $cp:Int!, $domicilio:String!, $fechaNac:date!, $institucion:String!, $localidad:String!, $municipio:String!, $sexo:Boolean!, $telefono:Int!, $correo:String!, $pswrd:String!, $id_categoria:Int!, $id_sede:Int!) {
                insert_juez_one(object: {persona: {data: {nombre: $nombre, apellido1: $apellido1, apellido2: $apellido2, colonia: $colonia, cp: $cp, domicilio: $domicilio, fechaNac: $fechaNac, institucion: $institucion, localidad: $localidad, municipio: $municipio, sexo: $sexo, telefono: $telefono}}, correo: $correo, pswrd: $pswrd, juez_sede_cates: {data: {id_categoriaFJSC: $id_categoria, id_sedeFJSC: $id_sede}}}) {
                persona {
                    nombre
                    apellido1
                    apellido2
                    colonia
                    cp
                    domicilio
                    fechaNac
                    institucion
                    localidad
                    municipio
                    sexo
                    telefono
                }
                correo
                pswrd
                juez_sede_cates {
                    id_categoriaFJSC
                    id_sedeFJSC
                }
            }
        }`,
        variables: {
            nombre: this.nombre, apellido1: this.apellido1, apellido2: this.apellido2, colonia: this.colonia, cp: this.cp, domicilio: this.domicilio, fechaNac: this.fechaNac, institucion: this.institucion, localidad: this.localidad, municipio: this.municipio, sexo: this.sexo, telefono: this.telefono, correo: this.correo, pswrd: this.pswrd, id_categoria: this.id_categoria, id_sede: this.id_sede
        },

    })
      this.refreshCount++;
    },

        InsertParticipante() {
            this.$apollo.mutate({
                mutation: gql`mutation insert_participante_one($nombre:String!,$apellido1:String!, $apellido2:String!, $colonia:String!, $cp:Int!, $domicilio:String!, $institucion:String!, $localidad:String!, $municipio:String!, $sexo:Boolean!, $telefono:Int!, $curp:String!) {
                insert_participante_one(object: {persona: {data: {nombre: $nombre, apellido1: $apellido1, apellido2: $apellido2, colonia: $colonia, cp: $cp, domicilio: $domicilio, fechaNac: $fechaNac, institucion: $institucion, localidad: $localidad, municipio: $municipio, sexo: $sexo, telefono: $telefono}}, correo: $correo, curp: $curp}) {
                persona {
                    nombre
                    apellido1
                    apellido2
                    colonia
                    cp
                    domicilio
                    fechaNac
                    institucion
                    localidad
                    municipio
                    sexo
                    telefono
                }
                correo
                curp
            }
        }`,
        variables: {
            nombre: this.nombre, apellido1: this.apellido1, apellido2: this.apellido2, colonia: this.colonia, cp: this.cp, domicilio: this.domicilio, fechaNac: this.fechaNac, institucion: this.institucion, localidad: this.localidad, municipio: this.municipio, sexo: this.sexo, telefono: this.telefono, correo: this.correo ,curp: this.curp
        },

    })
      this.refreshCount++;
    },

        InsertProyecto() {
            this.$apollo.mutate({
                mutation: gql`mutation insert_proyecto_one($nombreProyecto:String!, $areaProyecto:Int!, $categoriaProyecto:Int!, $modalidad:Int!, $sedeProyecto:Int!) {
                insert_proyecto_one(object: {nombreProyecto: $nombreProyecto, areaProyecto: $areaProyecto, categoriaProyecto: $categoriaProyecto, modalidad: $modalidad, sedeProyecto: $sedeProyecto}) {
                nombreProyecto
                areaProyecto
                categoriaProyecto
                modalidad
                sedeProyecto
            }
        }`,
        variables: {
            nombreProyecto: this.nombreProyecto, areaProyecto: this.areaProyecto, categoriaProyecto: this.categoriaProyecto, modalidad: this.modalidad, sedeProyecto: this.sedeProyecto
        },

    })
      this.refreshCount++;
    },


    InsertProyectoParticipanteAsesor() {
            this.$apollo.mutate({
                mutation: gql`mutation insert_proyecto_participante_asesor($nombreProyecto:String!, $areaProyecto:Int!, $categoriaProyecto:Int!, $modalidad:Int!, $sedeProyecto:Int!) {
                insert_proyecto_participante_asesor(object: {nombreProyecto: $nombreProyecto, sedeProyecto: $sedeProyecto, categoriaProyecto: $categoriaProyecto, areaProyecto: $areaProyecto, proy_parts: {data: {participante: {data: {persona: {data: {nombre: $nombre, apellido1: $apellido1, apellido2: $apellido2, domicilio: $domicilio, colonia: $colonia, cp: $cp, fechaNac: $fechaNac, institucion: $institucion, telefono: $telefono, municipio: $municipio, localidad: $localidad, sexo: $sexo}}, correo: $correo, curp: $curp}}}}, asesors: {data: {persona: {data: {nombre: $nombreA, apellido1: $apellido1A, apellido2: $apellido2A, domicilio: $domicilioA, colonia: $coloniaA, cp: $cpA, fechaNac: $fechaNacA, institucion: $institucionA, telefono: $telefonoA, municipio: $municipioA, localidad: $localidadA, sexo: $sexoA}}, correoA: $correoA}}, modalidad: $modalidad}) {
                folio
                proy_parts {
                    participante {
                        id_participante
                    }
                }
                asesors {
                    id_asesor
                }
            }
        }`,
        variables: {
            nombreProyecto: this.nombreProyecto, areaProyecto: this.areaProyecto, categoriaProyecto: this.categoriaProyecto, modalidad: this.modalidad, sedeProyecto: this.sedeProyecto, nombre: this.nombre, apellido1: this.apellido1, apellido2: this.apellido2, colonia: this.colonia, cp: this.cp, domicilio: this.domicilio, fechaNac: this.fechaNac, institucion: this.institucion, localidad: this.localidad, municipio: this.municipio, sexo: this.sexo, telefono: this.telefono, correo: this.correo ,curp: this.curp, nombreA: this.nombreA, apellido1A: this.apellido1A , apellido2A: this.apellido2A , coloniaA: this.coloniaA, cpA: this.cpA, domicilioA: this.domicilioA, fechaNacA: this.fechaNacA, institucionA: this.institucionA, localidadA: this.localidadA, municipioA: this.municipioA, sexoA: this.sexoA, telefonoA: this.telefonoA, correoA: this.correoA
        },

    })
      this.refreshCount++;
    },
        

        InsertSede() {
            this.$apollo.mutate({
                mutation: gql`mutation insert_sede_one($nombreSede:String!) {
                insert_sede_one(object: {nombreSede: $nombreSede}) {
                nombreSede
            }
        }`,

        variables: {
            correo: this.correo, nombre: this.nombre, pswrd: this.pswrd
        },

      })
      this.refreshCount++;
    },
    },
    components: { Barnav }
}
</script>

<template>
    <Barnav/>
    <div class="dst-container dst-div">
        <component :datosGeneral="argsGeneral" :datosAutorUno="argsAutorUno"  :datosAutorDos="argsAutorDos" :datosAsesor="argsAsesor" :is="currentTab" @argsGeneral="getGeneralData" @argsAutorUno="getAutorUnoData" @argsAutorDos="getAutorDosData" @argsAsesor="getAsesorData" @argsRegistroPDF="getRegistroPDFData"/>
        <div class="dst-tabs-container">
            <div class="dst-tabs-item" @click="handleTabClick(tabNames.GENERAlES)"
                :class="{ 'dst-tabs-item-active': activeTabName === tabNames.GENERAlES }">
                Datos generales
            </div>
            <div class="dst-tabs-item" @click="handleTabClick(tabNames.AUTORUNO)"
                :class="{ 'dst-tabs-item-active': activeTabName === tabNames.AUTORUNO }">
                Autor 1
            </div>
            <div class="dst-tabs-item" @click="handleTabClick(tabNames.AUTORDOS)"
                :class="{ 'dst-tabs-item-active': activeTabName === tabNames.AUTORDOS }">
                Autor 2
            </div>
            <div class="dst-tabs-item" @click="handleTabClick(tabNames.ASESOR)"
                :class="{ 'dst-tabs-item-active': activeTabName === tabNames.ASESOR }">
                Asesor
            </div>
            <div class="dst-tabs-item" @click="handleTabClick(tabNames.PDF)"
                :class="{ 'dst-tabs-item-active': activeTabName === tabNames.PDF }">
                PDF
            </div>
        </div>
    </div>
    
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500&display=swap');

.dst-div {
    font-family: 'Ubuntu', sans-serif;
    font-size: 20px;
    font-weight: 500;
}

.dst-container {
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    text-align: center;

}

.dst-tabs-container {
    display: flex;
   
}

.dst-tabs-item {
    border-top: 8px solid #77B1FF;
    border-radius: 10px;
    padding: 10px;
    cursor: pointer;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: -.01em;
    
}

.dst-tabs-item-active,
.dst-tabs-item:hover {
    background-color: #77B1FF;
    color: white;
}
</style>