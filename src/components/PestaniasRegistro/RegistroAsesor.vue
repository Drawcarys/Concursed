<template>
  <div class="dst-container-form ">
    <div class="dst-col2">
      <form>
        <p class="dst-p-autor">
          Nombre(s):
          <input class="dst-campo-autor" type="text" name="dst-nombreAsesor" id="dst-nombreAsesor" />

          Primer Apellido:
          <input class="dst-campo-autor" type="text" name="dst-primApellidoAsesor" id="dst-primApellidoAsesor" />

          Segundo Apellido:
          <input class="dst-campo-autor" type="text" name="dst-segApellidoAsesor" id="dst-segApellidoAsesor" />
        </p>

        <p class="dst-p-autor">
          Domicilio:
          <input class="dst-campo-autor" type="text" name="dst-domAsesor" id="dst-domAsesor" />
          Colonia:
          <input class="dst-campo-autor" type="text" name="dst-colAsesor" id="dst-colAsesor" />
          Código postal:
          <input class="dst-campo-autor" type="text" name="dst-cpAsesor" id="dst-cpAsesor" />
        </p>
        <p class="dst-p-autor">
          Fecha de nacimiento:
          <input class="dst-campo-autor" type="date" id="dst-fechaNacimientoAsesor" name="dst-fechaNacimientoAsesor"
            value="2018-07-22" min="2000-01-01" max="2020-12-31" />
          Correo:
          <input class="dst-campo-autor" type="text" name="dst-correoAsesor" id="dst-correoAsesor" />
          Escuela:
          <input class="dst-campo-autor" type="text" name="dst-escAsesor" id="dst-escAsesor" />
        </p>

        <p class="dst-p-autor">
          Teléfono:
          <input class="dst-campo-autor" type="text" name="dst-telAsesor" id="dst-telAsesor" />

          Municipio:
          <input class="dst-campo-autor" type="text" name="dst-munAsesor" id="dst-munAsesor" />

          Localidad:
          <input class="dst-campo-autor" type="text" name="dst-locAsesor" id="dst-locAsesor" />
        </p>
        <p class="dst-p-autor">
          Sexo:
          <select class="dst-campo-autor" name="dst-sexoAsesor" id="dst-sexoAsesor">
            <option value="hombre">Hombre</option>
            <option value="mujer">Mujer</option>
            <option value="otro">Otro</option>
          </select>
        </p>
        <p class="dst-p-autor">
          Descripción de su participación en el proyecto:
          <input class="dst-campo" type="text" name="dst-participacionAsesor" id="dst-participacionAsesor" />
        </p>

        <p>

          Adjuntar comprobante del asesor:<input class="dst-input-autor" type="file" name="dst-comprobanteAsesor"
          id="dst-comprobanteAsesor" placeholder="comprobanteAsesor" /><br>
          <br>

        </p>

        <button class="dst-button-format" id="dst-guardar" type="submit">Guardar avance</button>
      </form>
    </div>
  </div>
</template>