import { createApp } from 'vue'
import PantallaAdministrador from './components/PantallaAdministrador.vue'

import DatosConcurso from './components/Administrador/DatosConcurso.vue';
import BotonesAdministrador from './components/Administrador/BotonesAdministrador.vue';

createApp(BotonesAdministrador).mount('#botonesAdministrador');
createApp(DatosConcurso).mount('#datosConcurso');
createApp(PantallaAdministrador).mount('#pantallaAdministrador')
import App from './App.vue'
import PantallaPrincipal from './PantallaPrincipal.vue'
import JuezPantalla_principal from './JuezPantalla_principal.vue'
createApp(App).mount('#app')
createApp(PantallaPrincipal).mount('#pantallaPrincipal')
createApp(JuezPantalla_principal).mount('#juezPantallaPrincipal')
import RegistroProyecto from './components/RegistroProyecto.vue'


createApp(RegistroProyecto).mount('#registroProyecto')