import { createApp } from 'vue'
import PantallaAdministrador from './components/PantallaAdministrador.vue'

import DatosConcurso from './components/Administrador/DatosConcurso.vue';
import BotonesAdministrador from './components/Administrador/BotonesAdministrador.vue';

createApp(BotonesAdministrador).mount('#botonesAdministrador');
createApp(DatosConcurso).mount('#datosConcurso');
createApp(PantallaAdministrador).mount('#pantallaAdministrador')
import App from './App.vue'

createApp(App).mount('#app')

import { createApp } from 'vue'

import RegistroProyecto from './components/RegistroProyecto.vue'


createApp(RegistroProyecto).mount('#registroProyecto')