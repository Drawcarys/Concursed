<template>
  <div class="dst-container-form ">
    <div class="dst-col2">
      <form action="javascript:void(0);">
        <p class="dst-p-autor">
          Nombre(s):
          <input class="dst-campo-autor" type="text" name="dst-nombreAsesor" id="dst-nombreAsesor" v-model="nombreAsesor" />

          Primer Apellido:
          <input class="dst-campo-autor" type="text" name="dst-primApellidoAsesor" id="dst-primApellidoAsesor" v-model="primerApellidoAsesor" />

          Segundo Apellido:
          <input class="dst-campo-autor" type="text" name="dst-segApellidoAsesor" id="dst-segApellidoAsesor" v-model="segundoApellidoAsesor" />
        </p>

        <p class="dst-p-autor">
          Domicilio:
          <input class="dst-campo-autor" type="text" name="dst-domAsesor" id="dst-domAsesor" v-model="domicilioAsesor" />
          Colonia:
          <input class="dst-campo-autor" type="text" name="dst-colAsesor" id="dst-colAsesor" v-model="coloniaAsesor" />
          Código postal:
          <input class="dst-campo-autor" type="text" name="dst-cpAsesor" id="dst-cpAsesor" v-model="cpAsesor" />
        </p>
        <p class="dst-p-autor">
          Fecha de nacimiento:
          <input class="dst-campo-autor" type="date" id="dst-fechaNacimientoAsesor" name="dst-fechaNacimientoAsesor"
           min="2000-01-01" max="2020-12-31" v-model="fechaNacimientoAsesor" />
          Correo:
          <input class="dst-campo-autor" type="text" name="dst-correoAsesor" id="dst-correoAsesor" v-model="correoAsesor" />
          Escuela:
          <input class="dst-campo-autor" type="text" name="dst-escAsesor" id="dst-escAsesor" v-model="escuelaAsesor" />
        </p>

        <p class="dst-p-autor">
          Teléfono:
          <input class="dst-campo-autor" type="text" name="dst-telAsesor" id="dst-telAsesor" v-model="telefonoAsesor" />

          Municipio:
          <input class="dst-campo-autor" type="text" name="dst-munAsesor" id="dst-munAsesor" v-model="municipioAsesor" />

          Localidad:
          <input class="dst-campo-autor" type="text" name="dst-locAsesor" id="dst-locAsesor" v-model="localidadAsesor" />
        </p>
        <p class="dst-p-autor">
          Sexo:
          <select class="dst-campo-autor" name="dst-sexoAsesor" id="dst-sexoAsesor" v-model="sexoAsesor">
            <option value="hombre">Hombre</option>
            <option value="mujer">Mujer</option>
            <option value="otro">Otro</option>
          </select>
        </p>
        <p class="dst-p-autor">
          Descripción de su participación en el proyecto:
          <input class="dst-campo" type="text" name="dst-participacionAsesor" id="dst-participacionAsesor" v-model="participacionAsesor" />
        </p>

        <p>
          Adjuntar comprobante del asesor:<input class="dst-input-autor" type="file" name="dst-comprobanteAsesor"
          id="dst-comprobanteAsesor" placeholder="comprobanteAsesor" @change="onComprobanteChange" /><br>
          <br>

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
      nombreAsesor: '',
      primerApellidoAsesor: '',
      segundoApellidoAsesor: '',
      domicilioAsesor: '',
      coloniaAsesor: '',
      cpAsesor: '',
      fechaNacimientoAsesor: '',
      correoAsesor: '',
      escuelaAsesor: '',
      telefonoAsesor: '',
      municipioAsesor: '',
      localidadAsesor: '',
      sexoAsesor: '',
      participacionAsesor: '',
      comprobanteAsesor: null
    };
  },
  methods: {
    onComprobanteChange(event) {
      const file = event.target.files[0];
      this.comprobanteAsesor = file;
    }
  }
}

</script>