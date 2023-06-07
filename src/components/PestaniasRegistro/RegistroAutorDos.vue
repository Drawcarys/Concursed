<template>
  <div class="dst-container-form">
    <div class="dst-col2">
      <form>
        <p class="dst-p-autor">
          Nombre(s):
          <input class="dst-campo-autor" type="text" name="dst-nombreAutor2" id="dst-nombreAutor2" v-model="nombreAutor2" />

          Primer Apellido:
          <input class="dst-campo-autor" type="text" name="dst-primApellidoAutor2" id="dst-primApellidoAutor2" v-model="primerApellidoAutor2" />

          Segundo Apellido:
          <input class="dst-campo-autor" type="text" name="dst-segApellidoAutor2" id="dst-segApellidoAutor2" v-model="segundoApellidoAutor2" />
        </p>

        <p class="dst-p-autor">
          Domicilio:
          <input class="dst-campo-autor" type="text" name="dst-domAutor2" id="dst-domAutor2" v-model="domicilioAutor2" />
          Colonia:
          <input class="dst-campo-autor" type="text" name="dst-colAutor2" id="dst-colAutor2" v-model="coloniaAutor2" />
          Código postal:
          <input class="dst-campo-autor" type="text" name="dst-cpAutor2" id="dst-cpAutor2" v-model="cpAutor2" />
        </p>
        <p class="dst-p-autor">
          Fecha de nacimiento:
          <input class="dst-campo-autor" type="date" id="dst-fechaNacimiento2" name="dst-fechaNacimiento2"
            value="2018-07-22" min="2000-01-01" max="2020-12-31" v-model="fechaNacimientoAutor2" />
          Correo:
          <input class="dst-campo-autor" type="email" name="dst-correoAutor2" id="dst-correoAutor2" v-model="correoAutor2" />
          Escuela:
          <input class="dst-campo-autor" type="text" name="dst-escAutor2" id="dst-escAutor2" v-model="escuelaAutor2" />
        </p>

        <p class="dst-p-autor">
          Teléfono:
          <input class="dst-campo-autor" type="text" name="dst-telAutor2" id="dst-telAutor2" v-model="telefonoAutor2" />

          Municipio:
          <input class="dst-campo-autor" type="text" name="dst-munAutor2" id="dst-munAutor2" v-model="municipioAutor2" />

          Localidad:
          <input class="dst-campo-autor" type="text" name="dst-locAutor2" id="dst-locAutor2" v-model="localidadAutor2" />
        </p>
        <p class="dst-p-autor">
          Sexo:
          <select class="dst-campo-autor" name="dst-sexoAutor2" id="dst-sexoAutor2" v-model="sexoAutor2">
            <option value="hombre">Hombre</option>
            <option value="mujer">Mujer</option>
            <option value="otro">Otro</option>
          </select>
        </p>

        <p>
          Adjuntar Constancia de estudios<input class="dst-input-autor" type="file" name="dst-consAutor2"
            id="dst-consAutor2" placeholder="proyecto" @change="CargarConstancia" /><br />
          <br />
          Adjuntar Identificación oficial<input class="dst-input-autor" type="file" name="dst-idAutor2" id="dst-idAutor2"
            placeholder="proyecto" @change="CargarIdentificacion" /><br />
          <br />

          Adjuntar Fotografía del participante:<input class="dst-input-autor" type="file" name="dst-fotoAutor2"
            id="dst-fotoAutor2" placeholder="proyecto" @change="CargarFoto" /><br />
          <br />
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
      nombreAutor2: '',
      primerApellidoAutor2: '',
      segundoApellidoAutor2: '',
      domicilioAutor2: '',
      coloniaAutor2: '',
      cpAutor2: '',
      fechaNacimientoAutor2: '',
      correoAutor2: '',
      escuelaAutor2: '',
      telefonoAutor2: '',
      municipioAutor2: '',
      localidadAutor2: '',
      sexoAutor2: '',
      constanciaAutor2: null,
      identificacionAutor2: null,
      fotoAutor2: null
    };
  },
  methods: {
    CargarConstancia(event) {
      const file = event.target.files[0];
      this.constanciaAutor2 = file;
    },
    CargarIdentificacion(event) {
      const file = event.target.files[0];
      this.identificacionAutor2 = file;
    },
    CargarFoto(event) {
      const file = event.target.files[0];
      this.fotoAutor2 = file;
    }
  }
}
</script>
