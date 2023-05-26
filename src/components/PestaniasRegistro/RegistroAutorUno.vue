<template>
  <div class="dst-container-form ">
    <div class="dst-col2">
      <form>
        <p class="dst-p-autor">
          Nombre(s):
          <input
            class="dst-campo-autor"
            type="text"
            name="dst-nombreAutor1"
            id="dst-nombreAutor1"
          />

          Primer Apellido:
          <input
            class="dst-campo-autor"
            type="text"
            name="dst-PrimApellidoAutor1"
            id="dst-PrimApellidoAutor1"
          />

          Segundo Apellido:
          <input
            class="dst-campo-autor"
            type="text"
            name="dst-SegApellidoAutor1"
            id="dst-SegApellidoAutor1"
          />
        </p>

        <p class="dst-p-autor">
          Domicilio:
          <input
            class="dst-campo-autor"
            type="text"
            name="dst-DomAutor1"
            id="dst-DomAutor1"
          />
          Colonia:
          <input
            class="dst-campo-autor"
            type="text"
            name="dst-ColAutor1"
            id="dst-ColAutor1"
          />
          Código postal:
          <input
            class="dst-campo-autor"
            type="text"
            name="dst-CPAutor1"
            id="dst-CPAutor1"
          />
        </p>
        <p class="dst-p-autor">
          Fecha de nacimiento:
          <input
            class="dst-campo-autor"
            type="date"
            id="dst-fechaNacimiento"
            name="dst-fechaNacimiento"
            value="2018-07-22"
            min="2000-01-01"
            max="2020-12-31"
          />
          Correo:
          <input
            class="dst-campo-autor"
            type="email"
            name="dst-correoAutor1"
            id="dst-correoAutor1"
          />
          Escuela:
          <input
            class="dst-campo-autor"
            type="text"
            name="dst-EscAutor1"
            id="dst-EscAutor1"
          />
        </p>

        <p class="dst-p-autor">
          Teléfono:
          <input
            class="dst-campo-autor"
            type="text"
            name="dst-TelAutor1"
            id="dst-TelAutor1"
          />

          Municipio:
          <input
            class="dst-campo-autor"
            type="text"
            name="dst-MunAutor1"
            id="dst-MunAutor1"
          />

          Localidad:
          <input
            class="dst-campo-autor"
            type="text"
            name="dst-LocAutor1"
            id="dst-LocAutor1"
          />
        </p>
        <p class="dst-p-autor">
          Sexo:
          <select class="dst-campo-autor" name="dst-sexoAutor1" id="dst-sexoAutor1">
            <option value="hombre">Hombre</option>
            <option value="mujer">Mujer</option>
            <option value="otro">Otro</option>
          </select>
        </p>

        <p>
          Adjuntar Constancia de estudios<input
            class="dst-input-autor"
            type="file"
            name="dst-consAutor2"
            id="dst-consAutor2"
            placeholder="proyecto"
          /><br />
          <br />
          Adjuntar Identificación oficial<input
            class="dst-input-autor"
            type="file"
            name="dst-idAutor2"
            id="dst-idAutor2"
            placeholder="proyecto"
          /><br />
          <br />

          Adjuntar Fotografía del participante:<input
            class="dst-input-autor"
            type="file"
            name="dst-fotoAutor2"
            id="dst-fotoAutor2"
            placeholder="proyecto"
          /><br />
          <br />
        </p>

        <button class="dst-button-format" id="dst-guardar" type="submit">Guardar avance</button>
      </form>
    </div>
  </div>
</template>

<style>
.dst-p-autor {
  padding: 1%;
}
.dst-input-autor {
  margin-left: 1%;
  margin-right: 1%;
}

.dst-campo-autor {
  -moz-border-radius: 10px;
  -webkit-border-radius: 10px;
  border-radius: 15px;
  background: #f7f7ff;
  border: 1px solid rgba(0, 0, 0, 0.17);
  padding: 0 4px 0 4px;
  width: 15%;
  height: 20px;
  margin-left: 1%;
  margin-right: 1%;
}
</style>
