<script setup>

</script>
<template>
  <form action="javascript:void(0);">
    <div class="vbmmitades">
      <div class="vbmizquierdo">
  <p> Nombre(s): <br> </p><input type="text" name="nombreConcurso" class="vbmcamposIzquierdo" v-model="nombres" />

  <p> Primer apellido: <br> </p><input type="text" name="nombreConcurso" class="vbmcamposIzquierdo" v-model="primerApellido" />

  <p> Segundo apellido: <br> </p><input type="text" name="nombreConcurso" class="vbmcamposIzquierdo" v-model="segundoApellido" />

  <p> Fecha de nacimiento: <br> </p><input type="date" name="nombreConcurso" class="vbmcamposIzquierdo" v-model="fechaNacimiento" />

  <p> Teléfono <br> </p><input type="tel" name="nombreConcurso" class="vbmcamposIzquierdo" v-model="telefono" />

  <p> Correo electrónico <br> </p><input type="email" name="nombreConcurso" class="vbmcamposIzquierdo" v-model="correoElectronico" />

  <p> Sede: <br> </p><input type="text" name="nombreConcurso" class="vbmcamposIzquierdo" v-model="sede" />

  <p> Categoría: <br> </p><input type="text" name="nombreConcurso" class="vbmcamposIzquierdo" v-model="categoria" />
</div>


<div class="izquierdo">
  <p> Domicilio: <br> </p><input type="text" name="nombreConcurso" class="vbmcamposDerecho" v-model="domicilio" />

  <p> Colonia: <br> </p><input type="text" name="nombreConcurso" class="vbmcamposDerecho" v-model="colonia" />

  <p> Código postal: <br> </p><input type="text" name="nombreConcurso" class="vbmcamposDerecho" v-model="codigoPostal" />

  <p> Municipio: <br> </p><input type="text" name="nombreConcurso" class="vbmcamposDerecho" v-model="municipio" />

  <p> Localidad: <br> </p><input type="tel" name="nombreConcurso" class="vbmcamposDerecho" v-model="localidad" />

  <p> Escuela o Institución: <br> </p><input type="email" name="nombreConcurso" class="vbmcamposDerecho" v-model="escuelaInstitucion" />

  <p> Área: <br> </p><input type="text" name="nombreConcurso" class="vbmcamposDerecho" v-model="area" />
</div>

    </div>
    <button type="submit" id="vbminiciar">Guardar cambios</button>
  </form>
</template>
<script>
export default {
  data() {
    return {
      nombres: '',
      primerApellido: '',
      segundoApellido: '',
      fechaNacimiento: '',
      telefono: '',
      correoElectronico: '',
      sede: '',
      categoria: '',
      domicilio: '',
      colonia: '',
      codigoPostal: '',
      municipio: '',
      localidad: '',
      escuelaInstitucion: '',
      area: ''
    };
  }
}




</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500&display=swap');

.vbmcamposIzquierda {
  width: 150%;
  height: 40px;

}

#vbmcol2 {
  width: 60%;
  display: flex;
  justify-content: center;
  margin-top: 3%;
  border-style: solid;
  box-sizing: border-box;
  border: 1px solid #333d48;
  border-radius: 17px;
  padding-top: 3%;

}

.vbmcol2 {
  margin-top: 5%;
}

.vbmmitades {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

#vbminiciar{
  margin-top:5%;
}
</style>