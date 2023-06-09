<script>
import RegistroGeneral from './PestaniasRegistro/RegistroGeneral.vue';
import RegistroAutorUno from './PestaniasRegistro/RegistroAutorUno.vue';
import RegistroAutorDos from './PestaniasRegistro/RegistroAutorDos.vue';
import RegistroAsesor from './PestaniasRegistro/RegistroAsesor.vue';
import RegistroPdf from './PestaniasRegistro/RegistroPdf.vue';
import Barnav from './BarNav.vue';
import { ALL_ADMINS, ALL_AREAS, ALL_CATEGORIAS, ALL_JUECES, ALL_PARTICIPANTES, ALL_PROYECTOS} from '../graphql'
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
        argsGeneral:[],
        argsAutorUno:[],
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
        fechaNac: new Date(2001,2,3), 
        institucion: "", 
        localidad: "", 
        municipio: "", 
        sexo: true, 
        telefono: 0, 
        rfc: "",
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
        proyecto:ALL_PROYECTOS
    },
    methods: {
        handleTabClick: function (tabNames) {
            this.activeTabName = tabNames;
            this.currentTab = this.tabs[tabNames];
        },

        getGeneralData (value) {
            this.args = value
            console.log(value)
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
                mutation: gql`mutation insert_asesor_one($nombre:String!,$apellido1:String!, $apellido2:String!, $colonia:String!, $cp:Int!, $domicilio:String!, $institucion:String!, $localidad:String!, $municipio:String!, $sexo:Boolean!, $telefono:Int!, $rfc:String!) {
                insert_asesor_one(object: {persona: {data: {nombre: $nombre, apellido1: $apellido1, apellido2: $apellido2, colonia: $colonia, cp: $cp, domicilio: $domicilio, fechaNac: $fechaNac, institucion: $institucion, localidad: $localidad, municipio: $municipio, sexo: $sexo, telefono: $telefono}}, rfc: $rfc}) {
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
                rfc
            }
        }`,
        variables: {
            nombre: this.nombre, apellido1: this.apellido1 , apellido2: this.apellido2 , colonia: this.colonia, cp: this.cp, domicilio: this.domicilio, fechaNac: this.fechaNac, institucion: this.institucion, localidad: this.localidad, municipio: this.municipio, sexo: this.sexo, telefono: this.telefono, rfc: this.rfc
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
                insert_participante_one(object: {persona: {data: {nombre: $nombre, apellido1: $apellido1, apellido2: $apellido2, colonia: $colonia, cp: $cp, domicilio: $domicilio, fechaNac: $fechaNac, institucion: $institucion, localidad: $localidad, municipio: $municipio, sexo: $sexo, telefono: $telefono}}, correo: $correo, curp: $curp, pswrd: $pswrd}) {
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
                pswrd
            }
        }`,
        variables: {
            nombre: this.nombre, apellido1: this.apellido1, apellido2: this.apellido2, colonia: this.colonia, cp: this.cp, domicilio: this.domicilio, fechaNac: this.fechaNac, institucion: this.institucion, localidad: this.localidad, municipio: this.municipio, sexo: this.sexo, telefono: this.telefono, correo: this.correo ,curp: this.curp, pswrd: this.pswrd
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
    <hr/>
    <!-- <table v-bind:key="refreshCount">
          <thead>
            <tr>
              <th scope="col">Correo</th>
              <th scope="col">Pass</th>
              <th scope="col">Nombre</th>
              <th scope="col">ID</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for='adm in admin' v-bind:key="adm">
              <th scope="row">{{ adm.correo }}</th>
              <td>{{ adm.pswrd }}</td>
              <td>{{ adm.nombre }}</td>
              <td>{{ adm.id_admin }}</td>
            </tr>
        </tbody>
    </table> 
    {{InsertAdmin(correo, nombre, pswrd) }} --> 
    <hr/>
    <div class="dst-container dst-div">
        <component :is="currentTab" @argsGeneral="getGeneralData" @argsAutorUno="getGeneralData" />
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