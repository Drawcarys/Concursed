<template>
  <div class="dst-container-form ">
    <div class="dst-col2">
        <p>
      Adjuntar el archivo PDF del proyecto
      <br />
    </p>
    <input type="file" name="proyecto" placeholder="proyecto" /><br />

    <button class="dst-button-format" id="dst-guardar" type="submit">Guardar avance</button>
    <button class="dst-button-subir" id="dst-finalizar" type="submit">Finalizar registro</button>
    </div>
  </div>
</template>

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
