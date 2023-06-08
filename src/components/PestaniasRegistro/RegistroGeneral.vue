<template>
  <div class="dst-container-form">
    <div class="dst-col2">
      <form>
        <p class="dst-p-general">
          Nombre del proyecto:
          <input class="dst-campo" type="text" name="dst-nombreProyecto" id="dst-nombreProyecto" v-model="nombreProyecto" />
        </p>

        <p class="dst-p-general">
          Sede:
          <select class="dst-select" name="dst-sede" id="dst-sede" v-model="sede">
            <option value="sede1">Sede 1</option>
          </select>
        </p>

        <p class="dst-p-general">
          Categoría:
          <select class="dst-select" name="dst-categoria" id="dst-categoria" v-model="categoria">
            <option value="categoria1">Categoría 1</option>
          </select>
        </p>

        <p class="p-general">
          Autores del proyecto:
          <select class="dst-select" name="dst-autores" id="dst-autores" v-model="autores">
            <option value="autores1">Autores 1</option>
          </select>
        </p>

        <p class="dst-p-general">
          Área:
          <select class="dst-select" name="dst-area" id="dst-area" v-model="area">
            <option value="area1">Área 1</option>
          </select>
        </p>

        <p class="dst-p-general">
          Asesor de proyecto:
          <input class="dst-radio" type="radio" id="dst-asesor" name="dst-asesor" value="si" v-model="asesor">
          <label for="dst-asesor">Si</label>
          <input class="dst-radio" type="radio" id="dst-asesor" name="dst-asesor" value="no" v-model="asesor">
          <label for="dst-asesor">No</label><br>
        </p>

        <p class="dst-p-general">
          Adjuntar Foto del proyecto
          Formato jpg, png, gif tamaño máximo, 2mg <br>
          <input type="file" name="dst-proyecto" placeholder="proyecto" @change="adjuntarArchivo" /><br>
        </p>

        <button class="dst-button-format" id="dst-guardar" type="submit">Guardar avance</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nombreProyecto: '',
      sede: '',
      categoria: '',
      autores: '',
      area: '',
      asesor: '',
      archivoAdjunto: null,
    };
  },
  methods: {
    adjuntarArchivo(event) {
      this.archivoAdjunto = event.target.files[0];
    },
  },
};
</script>

<style>
.dst-container-form {
  width: 60%;
  height: 60%;
  background: #f7f7ff;
  box-shadow: 20px 20px 20px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
}
.dst-p-general{
  margin-top: 2%;
  margin-left: 2%;
}

.dst-button-format {
  width: 15%;
  height:100%;
  left: 50%;
  top:5%;

  padding: 7px 20px;
  margin: 2%;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 20%;
  font-size: 80%;
  line-height: 100%;


  color: #F7F7FF;

  box-sizing: border-box;

  background: #19376D;
  border: 1px solid #19376D;
  border-radius: 100px;

}

.dst-radio {
  width: 20px;
  height: 20px;
}

.dst-col2 {
  margin-top: 5%;
}

.dst-select {
  box-sizing: border-box;
  -moz-border-radius: 10px;
  -webkit-border-radius: 10px;
  border-radius: 15px;
  background: #f7f7ff;
  border: 1px solid rgba(0, 0, 0, 0.17);
  padding: 0 4px 0 4px;
  width: 50%;
  height: 40px;
}

.dst-campo {
  -moz-border-radius: 10px;
  -webkit-border-radius: 10px;
  border-radius: 15px;
  background: #f7f7ff;
  border: 1px solid rgba(0, 0, 0, 0.17);
  padding: 0 4px 0 4px;
  width: 50%;
  height: 40px;
}
</style>
