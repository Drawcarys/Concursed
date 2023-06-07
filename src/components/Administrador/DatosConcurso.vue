<script setup>

</script>
<template>
  <div class="vbmCol2">
    <form>
      <p>
        Nombre del concurso: <br> </p><input type="text" name="nombreConcurso" id="vbmNombreConcurso" v-model="nombreConcurso" />
      <div class="vbmFechasContenedor">
        <div class="vbmfechas">
          <p>
            Fecha de inicio: <br> </p>

          <input type="date" name="fechaInicio" v-model="fechaInicio" />
        </div>
        <div class="vbmfechas">
          <p>
            Fecha de termino:<br> </p>
          <input type="date" name="fechaTermino" v-model="fechaTermino" />
        </div>
      </div>

      <div class="vbmconvocatoria">
        <p>
          Adjuntar convocatoria: <br> </p><input type="file" name="adjuntarConvocatoria" class="form-control" @change="onConvocatoriaChange" />
      </div>

      <button type="submit" id="vbmIniciar">Guardar cambios</button>
    </form>
  </div>
</template>


<script>

export default {
  data() {
    return {
      nombreConcurso: '',
      fechaInicio: '',
      fechaTermino: '',
      convocatoria: null
    };
  },
  methods: {
    onConvocatoriaChange(event) {
      const file = event.target.files[0];
      this.convocatoria = file;
    }
  }
}


</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500&display=swap');



div {
  font-family: 'Ubuntu', sans-serif;
  font-size: 20px;
  font-weight: 500;

}

.vbmCol2 {
  margin-top: 5%;
}

input {
  -moz-border-radius: 10px;
  -webkit-border-radius: 10px;
  border-radius: 20px;
  border: 1px solid #CDCDD4;
  padding: 0 4px 0 4px;
  width: 97%;
  height: 40px;
  padding-left: 20px;
  padding-right: 20px;
}

#vbmnombreConcurso {
  width: 100%;
}

.vbmfechas {
  display: flex;
  flex-direction: column;
  margin-top: 10%;

}

.vbmFechasContenedor {
  display: grid;
  grid-template-columns: 1fr 1fr;

}

.vbmconvocatoria {
  display: flex;
  flex-direction: column;
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

@media (max-width: 1250px) {
  input {
    position: relative;
    display: block;
  }
}
</style>