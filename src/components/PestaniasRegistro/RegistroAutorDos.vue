<template>
  <div class="dst-container-form ">
    <div class="dst-col2">
      <form>
        <p class="dst-p-autor">
          Nombre(s):
          <input class="dst-campo-autor" type="text" name="dst-nombreAutor2" id="dst-nombreAutor2" />

          Primer Apellido:
          <input class="dst-campo-autor" type="text" name="dst-primApellidoAutor2" id="dst-primApellidoAutor2" />

          Segundo Apellido:
          <input class="dst-campo-autor" type="text" name="dst-segApellidoAutor2" id="dst-segApellidoAutor2" />
        </p>

        <p class="dst-p-autor">
          Domicilio:
          <input class="dst-campo-autor" type="text" name="dst-domAutor2" id="dst-domAutor2" />
          Colonia:
          <input class="dst-campo-autor" type="text" name="dst-colAutor2" id="dst-colAutor2" />
          Código postal:
          <input class="dst-campo-autor" type="text" name="dst-cpAutor2" id="dst-cpAutor2" />
        </p>
        <p class="dst-p-autor">
          Fecha de nacimiento:
          <input class="dst-campo-autor" type="date" id="dst-fechaNacimiento2" name="dst-fechaNacimiento2"
            value="2018-07-22" min="2000-01-01" max="2020-12-31" />
          Correo:
          <input class="dst-campo-autor" type="email" name="dst-correoAutor2" id="dst-correoAutor2" />
          Escuela:
          <input class="dst-campo-autor" type="text" name="dst-escAutor2" id="dst-escAutor2" />
        </p>

        <p class="dst-p-autor">
          Teléfono:
          <input class="dst-campo-autor" type="text" name="dst-telAutor2" id="dst-telAutor2" />

          Municipio:
          <input class="dst-campo-autor" type="text" name="dst-munAutor2" id="dst-munAutor2" />

          Localidad:
          <input class="dst-campo-autor" type="text" name="dst-locAutor2" id="dst-locAutor2" />
        </p>
        <p class="dst-p-autor">
          Sexo:
          <select class="dst-campo-autor" name="dst-sexoAutor2" id="dst-sexoAutor2">
            <option value="hombre">Hombre</option>
            <option value="mujer">Mujer</option>
            <option value="otro">Otro</option>
          </select>
        </p>

        <p>
          Adjuntar Constancia de estudios<input class="dst-input-autor" type="file" name="dst-consAutor2"
            id="dst-consAutor2" placeholder="proyecto" /><br />
          <br />
          Adjuntar Identificación oficial<input class="dst-input-autor" type="file" name="dst-idAutor2" id="dst-idAutor2"
            placeholder="proyecto" /><br />
          <br />

          Adjuntar Fotografía del participante:<input class="dst-input-autor" type="file" name="dst-fotoAutor2"
            id="dst-fotoAutor2" placeholder="proyecto" /><br />
          <br />
        </p>

        <button class="dst-button-format" id="dst-guardar" type="submit">Guardar avance</button>
      </form>
    </div>
  </div>
</template>
