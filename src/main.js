import { createApp } from 'vue'
import PantallaAdministrador from './components/PantallaAdministrador.vue'

import DatosConcurso from './components/Administrador/DatosConcurso.vue';
import BotonesAdministrador from './components/Administrador/BotonesAdministrador.vue';

createApp(BotonesAdministrador).mount('#botonesAdministrador');
createApp(DatosConcurso).mount('#datosConcurso');
createApp(PantallaAdministrador).mount('#pantallaAdministrador')

