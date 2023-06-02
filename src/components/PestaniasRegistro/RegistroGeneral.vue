<template>
  <div class="dst-container-form ">
    <div class="dst-col2">
      <form>
        <p class="dst-p-general">
          Nombre del proyecto:
          <input class="dst-campo" type="text" name="dst-nombreProyecto" id="dst-nombreProyecto" />
        </p>

        <p class="dst-p-general">
          Sede:
          <select class="dst-select" name="dst-sede" id="dst-sede">
            <option value="sede1">Sede 1</option>
          </select>
        </p>

        <p class="dst-p-general">
          Categoria:
          <select class="dst-select" name="dst-categoria" id="dst-categoria">
            <option value="categoria1">categoria 1</option>
          </select>
        </p>

        <p class="p-general">
          Autores del proyecto:
          <select class="dst-select" name="dst-autores" id="dst-autores">
            <option value="autores1">autores 1</option>
          </select>
        </p>


        <p class="dst-p-general">
          Área:
          <select class="dst-select" name="dst-area" id="dst-area">
            <option value="area1">area 1</option>
          </select>
        </p>

        <p class="dst-p-general">
          Asesor de proyecto:
          <input class="dst-radio" type="radio" id="dst-asesor" name="dst-asesor" value="si">
          <label for="dst-asesor">Si</label>
          <input class="dst-radio" type="radio" id="dst-asesor" name="dst-asesor" value="no">
          <label for="dst-asesor">No</label><br>
        </p>

        <p class="dst-p-general" >
          Adjuntar Foto del proyecto
          Formato jpg, png, gif tamaño maximo, 2mg <br> </p><input type="file" name="dst-proyecto"
          placeholder="proyecto" /><br>

        <button class="dst-button-format" id="dst-guardar" type="submit">Guardar avance</button>
      </form>
    </div>
  </div>
</template>

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
