<template>
    <form action="javascript:void(0);" id="form">
        <div class="RegistroModal dst-div" id="RegistroModal">
            <div class="registro-content">
                <div class="modalRegistro-header"><span @click="hide()" class="modalRegistro-close">&times;</span> </div>
                <div class="modal-body">
                    <h1 id="tituloALRL">Registrarse</h1>
                    <p  id="text1ALRL">Es rápido y fácil
                    </p>
                    <p  id="text2ALRL">Nombre</p>
                    <input id="input1" type="Nombre"
                        placeholder="Nombre" v-model="nombre">
                    <p id="text3ALRL">Apellido Paterno</p>
                    <input id="input2"
                        placeholder="Paterno" v-model="apellido1">
                    <p id="text3ALRL">Apellido Materno</p>
                    <input id="input2"
                        placeholder="Materno" v-model="apellido2">

                    <p id="text4ALRL">Correo Electrónico</p>
                    <input id="input3"  placeholder="Correo electrónico" v-model="correo">
                    <p id="text5ALRL" >Confirma tu correo electrónico</p>
                    <input id="input4" placeholder="Confirma tu correo electrónico" v-model="c_correo">    
                    
                    <p id="text6ALRL" >Contraseña</p>
                    <input id="input5"  placeholder="Contraseña" type="password" v-model="password">
                    <p id="text7ALRL" >Confirma tu contraseña</p>
                    <input id="input6" placeholder="Confirma tu contraseña" type="password" v-model="c_password">
                
                    <div id="circuloALRL" >
                        <img id="imgALRL" src="@/assets/Designer.png" >
                    </div>
                    
                    <p id="text8ALRL">Fecha de nacimiento</p>
        
                    <select name="dia" id="diaALRL" v-model="dia">
                    <option value="" v-for="(categorias,index) in 31" :key="index">
                    {{ 31-index }}
                    </option>
                    </select>

                    <select name="meses" id="mesesALRL" v-model="mes">
                    <option value="" v-for="(categorias,index) in 12" :key="index">
                    {{ 12-index }}
                    </option>
                    </select>

                    <select name="years" id="yearsALRL" v-model="año">
                    <option value="" v-for="(item, index) in 2023" :key="index">
                    {{2023-index}}
                    </option>
                    </select>
                    

                    <p id="text9ALRL">Sexo</p>
                    <select name="sexo" id="sexoALRL" v-model="sexo">
                    <option value=true>
                    Masculino
                    </option>
                    <option value=false>
                    Femenino
                    </option>
                    <option value=false>
                    Otro
                    </option>
                    </select>
                
                    <button class="buttonregistrerALRL" @click="RegistrarPersona(apellido1, apellido2, fecha, nombre, sexo, correo, password)">Registrarse</button>
                
                
                </div>
            </div>
        </div>
    </form>
</template>
 
<script scoped>

import gql from 'graphql-tag'

export default {
    name: 'RegistroModal',
    data () {
      return {
        email: '',
        nombre: '',
        password: '',
        apellido:'',
        dia:0,
        mes:0,
        año:0,
        sexo:true,
        fecha:new Date(2001,2,3)
      }
    },
    methods: {
        show() {
            const RegistroModal = document.getElementById('RegistroModal');
            RegistroModal.classList.add('show');
        },
        hide() {
            const RegistroModal = document.getElementById('RegistroModal');
            RegistroModal.classList.remove('show');
        },

        RegistrarPersona(){
            this.$apollo.mutate({
                mutation: gql`mutation insert_persona_one($apellido1:String!, $apellido2:String! $fecha:date!, $nombre:String!, $sexo:Boolean!, $correo:String!, $password:String!) {
                    insert_persona(objects: {apellido1: $apellido1, apellido2: $apellido2, fechaNac: $fecha, nombre: $nombre, sexo: $sexo, participantes: {data: {correo: $correo, pswrd: $password, curp: ""}}, domicilio: "", colonia: "", cp: 10, telefono: 10, municipio: "", localidad: "", institucion: ""}) {
                    returning {
                        id_persona
                        }
                    }
                }`,
                variables: {
                    apellido1: this.apellido1, apellido2: this.apellido2, fecha: this.fecha, nombre: this.nombre, sexo: this.sexo, correo: this.correo, password: this.password
                },
            })
        },

    },

};
</script>
 
<style scoped>
.RegistroModal {
    position: fixed;
    display: flex;
    align-items: center;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.4);
    visibility: hidden;
    opacity: 0;
    transition: opacity 0.4s ease-in-out, visibility 0.4s ease-in-out;
    z-index: 10;
}

.RegistroModal.show {
    visibility: visible;
    opacity: 1;
}

.RegistroModal.show .registro-content {
    visibility: visible;
    opacity: 1;
    transform: scale(1);
}

.registro-content {
    min-width: 50%;
    width: 70%;
    height: 70%;
    background: white;
    margin: auto;
    border-radius: 5px;
    visibility: hidden;
    opacity: 0;
    transform: scale(0.5);
    transition: opacity 0.4s ease-in-out, visibility 0.4s ease-in-, transform 0.4s ease-in-out;
}
.modalRegistro-header {
    display: flex;
    justify-content: end;
    margin: 0px 10px;
}
.modalRegistro-close {
    cursor: pointer;
}

.modal-body{
    height: 90%;
}

#tituloALRL{
    font-family: 'Roboto', sans-serif;
    font-weight: 900;  
    position: relative; 
    left: -36%; 
    top: -3%;
}


#text1ALRL{
    font-family: 'Roboto', sans-serif;
    
    position: relative; 
    left: -40%; 
    top: -3%;
}

#text2ALRL{
    font-family: 'Roboto', sans-serif;
     position: relative; 
     left: -42%; 
     top: 5%;
}

#input1{
    border: 2px solid #D9D9D9; 
    border-radius: 10px; 
    width: 150px; 
    height: 30px; 
    font-size: 15px;
     position: relative; 
     left: -40%; 
     top: 5%;
}

#text3ALRL{
    font-family: 'Roboto', sans-serif; 
    position: relative; 
    left: -20%; 
    top: -8%;
}

#input2{
    border: 2px solid #D9D9D9; 
    border-radius: 10px;
     width: 150px; 
     height: 30px; 
     font-size: 15px; 
     position: relative; 
     left: -20%; 
     top: -7%;
}

#text4ALRL{
    font-family: 'Roboto', sans-serif; 
    position: relative; 
    left: -40%; 
    top: -5%;
}

#input3{
    border: 2px solid #D9D9D9; 
    border-radius: 10px; 
    width: 390px; 
    height: 30px; 
    font-size: 15px; 
    position: relative; 
    left: -32%; 
    top: -5%;
}

#text5ALRL{
    font-family: 'Roboto', sans-serif; 
    position: relative; 
    left: -36%; 
    top: -4%;
}

#input4{
    border: 2px solid #D9D9D9; 
    border-radius: 10px; 
    width: 390px; 
    height: 30px; 
    font-size: 15px; 
    position: relative; 
    left: -32%; 
    top: -4%;
}

#text6ALRL{
    font-family: 'Roboto', sans-serif; 
    position: relative; 
    left: -42%; 
    top: -1%;
}

#input5{
    border: 2px solid #D9D9D9; 
    border-radius: 10px; 
    width: 390px; 
    height: 30px; 
    font-size: 15px; 
    position: relative; 
    left: -32%; 
    top: -2%;
}

#text7ALRL{
    font-family: 'Roboto', sans-serif; 
    position: relative; 
    left: -38.5%; 
    top: 1%;
}

#input6{
    border: 2px solid #D9D9D9; 
    border-radius: 10px; 
    width: 390px; 
    height: 30px; 
    font-size: 15px; 
    position: relative; 
    left: -32%; 
    top: 0%;
}

#circuloALRL{
    width: 410px; 
    height: 400px; 
    border-radius: 50%; 
    background-color: #77B1FF; 
    position: relative; 
    left: 55%; 
    top: -90%;
}

#imgALRL{
    position: relative; 
    left: -5%;
    top: -10%; 
    width: 450px;
}

#text8ALRL{
    font-family: 'Roboto', sans-serif; 
    position: relative; 
    left: 21%; 
    top: -85%;
}

#diaALRL{
    position: relative; 
    left: 15%; 
    top: -85%; 
    width: 150px; 
    height:30px; 
    border-radius: 10px;
    border: 2px solid #D9D9D9;
}

#mesesALRL{
    position: relative; 
    left: 20%; 
    top: -84.5%; 
    width: 150px; 
    height:30px; 
    border-radius: 10px;
    border: 2px solid #D9D9D9;
}

#yearsALRL{
    position: relative; 
    left: 25%; 
    top: -84.5%; 
    width: 150px; 
    height:30px; 
    border-radius: 10px;
    border: 2px solid #D9D9D9;
}

#text9ALRL{
    position: relative; 
    top: -83%; 
    left: 1%; 
    font-family: 'Roboto', sans-serif;
}

#sexoALRL{
    position: relative; 
    left: 12%; 
    top: -83%; 
    width: 150px;
    height:30px; 
    border-radius: 10px;
    border: 2px solid #D9D9D9;
}

.buttonregistrerALRL{
    position: relative;
    border: 0px;
    color: white;
    font-size: 18px;
    background-color: #19376D;
    height: 50px;
    width: 200px;
    top: -85%;
    left:20%;
    border-radius: 10px;
 } 
</style>