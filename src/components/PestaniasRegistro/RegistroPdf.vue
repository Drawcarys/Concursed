<template>
  <div class="dst-container-form">
    <div class="dst-col2">
      <p>
        Adjuntar el archivo PDF del proyecto
        <br />
      </p>
      <input type="file" name="proyecto" placeholder="proyecto" @change="adjuntarArchivo" /><br />

      <button class="dst-button-format" id="dst-guardar" type="button" @click="sendRegistroPDFData({'archivoAdjuntoPDF':this.archivoAdjuntoPDF})">Guardar avance</button>
      <button class="dst-button-subir" id="dst-finalizar" type="button" @click="InsertProyectoParticipanteAsesor(datosGeneral.nombreProyecto,datosGeneral.area,datosGeneral.categoria, datosGeneral.categoria, datosGeneral.sede,datosAutorUno.nombreAutor1, datosAutorUno.primerApellidoAutor1, datosAutorUno.segundoApellidoAutor1, datosAutorUno.coloniaAutor1,  datosAutorUno.cpAutor1,  datosAutorUno.domicilioAutor1,  datosAutorUno.fechaNacimientoAutor1,  datosAutorUno.escuelaAutor1,  datosAutorUno.localidadAutor1,   datosAutorUno.municipioAutor1,   datosAutorUno.sexoAutor1,   datosAutorUno.telefonoAutor1, datosAutorUno.correoAutor1, datosAutorUno.nombreAutor1, datosAsesor.nombreAsesor, datosAsesor.apellido1Asesor, datosAsesor.apellido2Asesor, datosAsesor.coloniaAsesor, datosAsesor.cpAsesor, datosAsesor.domicilioAsesor, datosAsesor.fechaNacAsesor, datosAsesor.institucionAsesor, datosAsesor.localidadAsesor, datosAsesor.municipioAsesor, datosAsesor.sexoAsesor, datosAsesor.telefonoAsesor, datosAsesor.correoAsesor, datosGeneral.archivoAdjunto)">Finalizar registro</button>
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag'

export default {
  data() {
    return {
      archivoAdjuntoPDF: null,
      /* nombreProyecto:"",
      areaProyecto:0,
      categoriaProyecto:0,
      modalidad:0,
      sedeProyecto:0,
      nombreAutor1:"",
      primerApellidoAutor1:"",
      segundoApellidoAutor1:"",
      coloniaAutor1:"",
      cpAutor1:0,
      domicilioAutor1:"",
      fechaNacimientoAutor1:new Date(2023,2,1),
      escuelaAutor1:"",
      localidadAutor1:"",
      municipioAutor1:"",
      sexoAutor1:0,
      telefonoAutor1:0,
      correoAutor1:"",
      curp:"", 
      nombreA:"",
      apellido1A:"",
      apellido2A:"",
      coloniaA:"",
      cpA:0,
      domicilioA:"",
      fechaNacA:new Date(2023,2,1),
      institucionA:"",
      localidadA:"",
      municipioA:"",
      sexoA:0,
      telefonoA:0,
      correoA:"",
      archivoAdjunto:null */
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
                mutation: gql`mutation insert_proyecto_one($nombreProyecto:String!, $areaProyecto:Int!, $categoriaProyecto:Int!, $modalidad:smallInt!, $sedeProyecto:Int!) {
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

    InsertProyectoParticipanteAsesor() {
      console.log(this.datosAsesor.primerApellidoAutor1)
            this.$apollo.mutate({
                mutation: gql`mutation insert_proyecto_one($nombreProyecto:String!, $areaProyecto:Int!, $categoriaProyecto:Int!, $modalidad:smallint, $sedeProyecto:Int!, $nombreAutor1:String!, $primerApellidoAutor1:String!, $segundoApellidoAutor1:String!, $coloniaAutor1:String!, $cpAutor1:Int!, $domicilioAutor1:String!, $fechaNacimientoAutor1:date!, $escuelaAutor1:String!, $localidadAutor1:String!, $municipioAutor1:String!, $sexoAutor1:Boolean, $telefonoAutor1:Int!, $correoAutor1:String!, $curp:String!, $nombreA:String!, $apellido1A:String!, $apellido2A:String!, $coloniaA:String!, $cpA:Int!, $domicilioA:String!, $fechaNacA:date!, $institucionA:String!,$localidadA:String!, $municipioA:String!, $sexoA:Boolean, $telefonoA:Int!, $correoA:String!) {
                insert_proyecto_one(object: {nombreProyecto: $nombreProyecto, sedeProyecto: $sedeProyecto, categoriaProyecto: $categoriaProyecto, areaProyecto: $areaProyecto, proy_parts: {data: {participante: {data: {persona: {data: {nombre: $nombreAutor1, apellido1: $primerApellidoAutor1, apellido2: $segundoApellidoAutor1, domicilio: $domicilioAutor1, colonia: $coloniaAutor1, cp: $cpAutor1, fechaNac: $fechaNacimientoAutor1, institucion: $escuelaAutor1, telefono: $telefonoAutor1, municipio: $municipioAutor1, localidad: $localidadAutor1, sexo: $sexoAutor1}}, correo: $correoAutor1, curp: $curp}}}}, asesors: {data: {persona: {data: {nombre: $nombreA, apellido1: $apellido1A, apellido2: $apellido2A, domicilio: $domicilioA, colonia: $coloniaA, cp: $cpA, fechaNac: $fechaNacA, institucion: $institucionA, telefono: $telefonoA, municipio: $municipioA, localidad: $localidadA, sexo: $sexoA}}, correo: $correoA}}, modalidad: $modalidad}) {
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
          nombreProyecto:this.datosGeneral.nombreProyecto,areaProyecto:this.datosGeneral.area,categoriaProyecto:this.datosGeneral.categoria, modalidad:0, sedeProyecto:this.datosGeneral.sede,nombreAutor1:this.datosAutorUno.nombreAutor1, primerApellidoAutor1:this.datosAutorUno.primerApellidoAutor1, segundoApellidoAutor1:this.datosAutorUno.segundoApellidoAutor1, coloniaAutor1:this.datosAutorUno.coloniaAutor1,  cpAutor1:this.datosAutorUno.cpAutor1,  domicilioAutor1:this.datosAutorUno.domicilioAutor1,  fechaNacimientoAutor1:this.datosAutorUno.fechaNacimientoAutor1,  escuelaAutor1:this.datosAutorUno.escuelaAutor1,  localidadAutor1:this.datosAutorUno.localidadAutor1,   municipioAutor1:this.datosAutorUno.municipioAutor1, sexoAutor1:this.datosAutorUno.sexoAutor1, telefonoAutor1:this.datosAutorUno.telefonoAutor1, correoAutor1:this.datosAutorUno.correoAutor1, curp:"", nombreA:this.datosAsesor.nombreAsesor, apellido1A:this.datosAsesor.primerApellidoAsesor, apellido2A:this.datosAsesor.segundoApellidoAsesor, coloniaA:this.datosAsesor.coloniaAsesor, cpA:this.datosAsesor.cpAsesor, domicilioA:this.datosAsesor.domicilioAsesor, fechaNacA:this.datosAsesor.fechaNacimientoAsesor, institucionA:this.datosAsesor.escuelaAsesor, localidadA:this.datosAsesor.localidadAsesor, municipioA:this.datosAsesor.municipioAsesor, sexoA:this.datosAsesor.sexoAsesor, telefonoA:this.datosAsesor.telefonoAsesor, correoA:this.datosAsesor.correoAsesor
        },

    })
    },
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
