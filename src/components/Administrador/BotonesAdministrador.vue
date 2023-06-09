<script>
import DatosConcurso from './DatosConcurso.vue';
import RegistroCategoria from './Registro/RegistroCategoria.vue';
import RegistroJuez from './Registro/RegistroJuez.vue';
import RegistroSede from './Registro/RegistroSede.vue';
import RegistroArea from './Registro/RegistroArea.vue';
import VerProyectos from './VerProyectos.vue';
import VerResultados from './VerResultados.vue';
import EditarJueces from './Editar/EditarJueces.vue';
import EditarCategoria from './Editar/EditarCategoria.vue';
import EditarSede from './Editar/EditarSede.vue';
import EditarArea from './Editar/EditarArea.vue';


const arrayBotones = ["Iniciar concurso", "Editar concurso", "Registrar categoría", "Editar categoría",
  "Registrar sede", "Editar sede", "Registrar área", "Editar área", "Registrar juez", "Editar juez", "Ver proyectos", "Ver resultados"];
const botonesNombre = [1, 2, 3, 4, 5];
export default {
  data: () => ({
    arrayBotones,
    vistaDatos: false,
    indice: 0
  }),
  methods: {
    handleTabClick: function (tabNames) {
      botonesNombre;
      this.activeTabName = tabNames;
      this.currentTab = this.tabs[tabNames];
    },
    di: function (mensaje) {
      mensaje == 0;
      if (mensaje == 0) {
        // this.vistaDatos=true
        this.indice = 0;
      } else if (mensaje == 1) {
        this.indice = 1;
      } else if (mensaje == 2) {
        this.indice = 2;
      }else if (mensaje ==3){
        this.indice = 3;
      } else if (mensaje ==4){
        this.indice = 4;
      } else if (mensaje ==5){
        this.indice = 5;
      } else if (mensaje ==6){
        this.indice = 6;
      } else if (mensaje ==7){
        this.indice = 7;
      } else if (mensaje ==8){
        this.indice = 8;
      } else if (mensaje ==9){
        this.indice = 9;
      } else if (mensaje ==10){
        this.indice = 10;
      } else if (mensaje ==11){
        this.indice = 11;
      }
    },
  },
  components: { DatosConcurso, RegistroCategoria, RegistroJuez, RegistroSede, RegistroArea, 
    VerProyectos, VerResultados, 
    EditarJueces, EditarCategoria, EditarSede, EditarArea }
}
</script>
<template>
  <div id="componens">
    <div id="botonesAdmin1">
      <button v-for="(boton, index) in arrayBotones" :key="index" class="botonesAdmin" v-on:click=di(index)>
        {{ boton }}
      </button>
    </div>
    <div id="vbmregistroCat" v-if="indice==0">
      <DatosConcurso />
    </div>
    <div id="vbmregistroCat" v-if="indice==1">
      <DatosConcurso />
    </div>
    <div id="vbmregistroCat" v-if="indice==2">
      <RegistroCategoria id="vbmregistroCategoria" />
      </div>
    <div id="vbmeditarCat" v-if="indice===3">
      <EditarCategoria/>
    </div>
    <div id="vbmregistroCat" v-if="indice==4">
      <RegistroSede id="vbmregistroCategoria" />
      </div>
    <div id="vbmeditarCat" v-if="indice===5">
      <EditarSede />
    </div>
    <div id="vbmregistroCat" v-if="indice==6">
      <RegistroArea id="vbmregistroCategoria" />
      </div>
    <div id="vbmeditarCat" v-if="indice===7">
      <EditarArea />
    </div>
    <div id="vbmregistroCat" v-if="indice===8">
      <RegistroJuez />
    </div>
    <div id="vbmregistroJuez" v-if="indice===9">
      <EditarJueces />
    </div>
    <div id="vbmregistroJuez" v-if="indice===10">
      <VerProyectos />
    </div>
    <div id="vbmregistroJuez" v-if="indice===11">
      <VerResultados />
    </div>
  </div>
</template>


<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');


.botonesAdmin {
  background-color: #30649D;
  color: #F7F7FF;
  width: 370px;
  height: 60px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 3%;
  margin-left: 5%;
  border-radius: 22px;
  font-family: 'Poppins', sans-serif;
  font-size: 24px;
}

.botonesAdmin:focus { 
  padding: 30px; 
  background-color: #BDD5EA; 
  color: #577399; 
} 

#botonesAdmin1 {
    width: 600px;
    margin-left: 10%;
    position: relative;
    display: block;
}

#vbmdatosConc {
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

#vbmregistroCat {
    width: 60%;
    height: 800px;
    display: flex;
    justify-content: center;
    margin-top: 3%;
    border-style: solid;
    box-sizing: border-box;
    border: 1px solid #333d48;
    border-radius: 17px;
    padding-top:3%;
    
}

#vbmeditarCat{
   
}

#vbmregistroCategoria{
  justify-content: center;
  margin-right:20%;
}
#componens {
    display: flex;
    width: 80%;
}

@media (max-width: 1250px) {
  #componens {
    position: relative;
    display: block;
  }

  #vbmdatosConc {
    position: relative;
    display: block;
  }
}
</style>