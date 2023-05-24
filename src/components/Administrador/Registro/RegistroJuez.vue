<script setup>

</script>
<template>
  <form>
    <div class="vbmmitades">
      <div class="vbmizquierdo">
        <p> Nombre(s): <br> </p><input type="text" name="nombreConcurso" class="vbmcamposIzquierdo" />

        <p> Primer apellido: <br> </p><input type="text" name="nombreConcurso" class="vbmcamposIzquierdo" />

        <p> Segundo apellido: <br> </p><input type="text" name="nombreConcurso" class="vbmcamposIzquierdo" />

        <p> Fecha de nacimiento: <br> </p><input type="date" name="nombreConcurso" class="vbmcamposIzquierdo" />

        <p> Teléfono <br> </p><input type="tel" name="nombreConcurso" class="vbmcamposIzquierdo" />

        <p> Correo electrónico <br> </p><input type="email" name="nombreConcurso" class="vbmcamposIzquierdo" />

        <p> Sede: <br> </p><input type="text" name="nombreConcurso" class="vbmcamposIzquierdo" />

        <p> Categoría: <br> </p><input type="text" name="nombreConcurso" class="vbmcamposIzquierdo" />
     
      </div>

      <div class="izquierdo">
        <p> Domicilio: <br> </p><input type="text" name="nombreConcurso" class="vbmcamposDerecho" />

        <p> Colonia: <br> </p><input type="text" name="nombreConcurso" class="vbmcamposDerecho" />

        <p> Código postal: <br> </p><input type="text" name="nombreConcurso" class="vbmcamposDerecho" />

        <p> Municipio: <br> </p><input type="text" name="nombreConcurso" class="vbmcamposDerecho" />

        <p> Localidad: <br> </p><input type="tel" name="nombreConcurso" class="vbmcamposDerecho" />

        <p> Escuela o Institución: <br> </p><input type="email" name="nombreConcurso" class="vbmcamposDerecho" />

        <p> Area: <br> </p><input type="text" name="nombreConcurso" class="vbmcamposDerecho" />
      </div>
    </div>
    <button type="submit" id="vbminiciar">Guardar cambios</button>
  </form>
</template>

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