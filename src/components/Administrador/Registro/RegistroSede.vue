<script setup>

</script>
<template>
  <div class="vbmCol2">
    <form>
      <p>
        Nombre de la sede: <br> </p><input type="text" name="nombreConcurso" id="vbmNombreSede" v-model="nombreSede" />

      <button type="submit" id="vbmIniciar">Guardar cambios</button>
    </form>
  </div>
</template>


<script>
export default {
  data() {
    return {
      nombreSede: ''
    };
  }
}


</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500&display=swap');

#vbmNombreCategoria {
  width: 150%;
  height: 40px;

}

#vbmCol2 {
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

.vbmCol2 {
  margin-top: 5%;
}

#vbmIniciar {
  width: 180px;
  height: 44.87px;
  font-family: 'Poppins', sans-serif;
  background-color: #19376D;
  font-size: 16px;
  color: #F7F7FF;
  position: absolute;
  top: 70%;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 52%;
  margin-bottom: 5%;
  margin-left: 8%;
  border-radius: 15px;

}
</style>