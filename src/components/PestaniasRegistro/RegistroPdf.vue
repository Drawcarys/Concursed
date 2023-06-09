<template>
  <div class="dst-container-form">
    <div class="dst-col2">
      <p>
        Adjuntar el archivo PDF del proyecto
        <br />
      </p>
      <input type="file" name="proyecto" placeholder="proyecto" @change="adjuntarArchivo" /><br />

      <button class="dst-button-format" id="dst-guardar" type="button" @click="sendRegistroPDFData({'archivoAdjuntoPDF':this.archivoAdjuntoPDF})">Guardar avance</button>
      <button class="dst-button-subir" id="dst-finalizar" type="button" @click="InsertProyecto(datosGeneral.nombreProyecto, datosGeneral.areaProyecto, datosGeneral.categoriaProyecto, datosGeneral.modalidad, datosGeneral.sede)">Finalizar registro</button>
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag'

export default {
  data() {
    return {
      archivoAdjuntoPDF: null,
    };
  },
  methods: {
    adjuntarArchivo(event) {
      this.archivoAdjuntoPDF = event.target.files[0];
    },
    sendRegistroPDFData(args) {
      this.$emit('argsRegistroPDF',args)
    },

    InsertProyecto() {
      console.log(this.datosGeneral)
            this.$apollo.mutate({
                mutation: gql`mutation insert_proyecto_one($nombreProyecto:String!, $areaProyecto:Int!, $categoriaProyecto:Int!, $modalidad:smallint!, $sedeProyecto:Int!) {
                insert_proyecto_one(object: {nombreProyecto: $nombreProyecto, areaProyecto: $areaProyecto, categoriaProyecto: $categoriaProyecto, modalidad: $modalidad, sedeProyecto: $sedeProyecto}) {
                nombreProyecto
                areaProyecto
                categoriaProyecto
                modalidad
                sedeProyecto
            }
        }`,
        variables: {
            nombreProyecto: this.datosGeneral.nombreProyecto, areaProyecto: this.datosGeneral.area, categoriaProyecto: this.datosGeneral.categoria, modalidad: 0, sedeProyecto: this.datosGeneral.sede
        },

    })
      this.refreshCount++;
    },

    InsertParticipanteUno() {
            this.$apollo.mutate({
                mutation: gql`mutation insert_participante_one($nombre:String!,$apellido1:String!, $apellido2:String!, $colonia:String!, $cp:Int!, $domicilio:String!, $institucion:String!, $localidad:String!, $municipio:String!, $sexo:Boolean!, $telefono:Int!, $curp:String!) {
                insert_participante_one(object: {persona: {data: {nombre: $nombre, apellido1: $apellido1, apellido2: $apellido2, colonia: $colonia, cp: $cp, domicilio: $domicilio, fechaNac: $fechaNac, institucion: $institucion, localidad: $localidad, municipio: $municipio, sexo: $sexo, telefono: $telefono}}, correo: $correo, curp: $curp, pswrd: $pswrd}) {
                persona {
                    nombre
                }
            }
        }`,
        variables: {
            nombre: this.datosAutorUno.nombreAutor1, apellido1: this.datosAutorUno.primerApellidoAutor1, apellido2: this.datosAutorUno.segundoApellidoAutor1, colonia: this.datosAutorUno.coloniaAutor1, cp: this.datosAutorUno.cpAutor1, domicilio: this.datosAutorUno.domicilioAutor1, fechaNac: this.datosAutorUno.fechaNacimientoAutor1, institucion: this.datosAutorUno.escuelaAutor1, localidad: this.datosAutorUno.localidad, municipio: this.datosAutorUno.municipio, sexo: this.datosAutorUno.sexoAutor1, telefono: this.datosAutorUno.telefono, correo: this.datosAutorUno.correoAutor1
        },

    })
      this.refreshCount++;
    },

    Registrar(){
      
    }
  },
  //props:['datosGeneral','datosAutorUno','datosAutorDos','datosAsesor'],
  props:{
    datosGeneral: [],
    datosAutorUno: [],
    datosAutorDos: [],
    datosAsesor: []
  }
};
</script>

<style>
.dst-button-subir {
  width:15%;
  height: 100%;
  left: 50%;
  top: 5%;

  padding: 7px 20px;
  margin: 5%;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 20%;
  font-size: 80%;
  line-height: 100%;

  color: #f7f7ff;

  box-sizing: border-box;

  background: #19376d;
  border: 1px solid #19376d;
  border-radius: 100px;
}
</style>
