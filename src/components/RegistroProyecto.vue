<script>
import RegistroGeneral from './PestaniasRegistro/RegistroGeneral.vue';
import RegistroAutorUno from './PestaniasRegistro/RegistroAutorUno.vue';
import RegistroAutorDos from './PestaniasRegistro/RegistroAutorDos.vue';
import RegistroAsesor from './PestaniasRegistro/RegistroAsesor.vue';
import RegistroPdf from './PestaniasRegistro/RegistroPdf.vue';
import Barnav from './BarNav.vue';
import { ALL_ADMINS} from '../graphql'
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
        currentTab: null,
        activeTabName: null,
        admin: [],
        pswrd:"123",
        nombre:"aaaaa",
        correo:"23232",
        tabNames,
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
        admin:ALL_ADMINS
    },
    methods: {
        handleTabClick: function (tabNames) {
            this.activeTabName = tabNames;
            this.currentTab = this.tabs[tabNames];
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
        <component :is="currentTab" />
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