//import { createApp, h, provide } from 'vue'
import { createApp,h} from 'vue'
import PantallaAdministrador from './components/PantallaAdministrador.vue'

import DatosConcurso from './components/Administrador/DatosConcurso.vue';
import BotonesAdministrador from './components/Administrador/BotonesAdministrador.vue';

import router from './router';
import vueRouter from 'vue-router';


createApp(BotonesAdministrador).mount('#botonesAdministrador');
createApp(DatosConcurso).mount('#datosConcurso');
createApp(PantallaAdministrador).mount('#pantallaAdministrador')
import App from './App.vue'
import PantallaPrincipal from './PantallaPrincipal.vue'
import JuezPantalla_principal from './JuezPantalla_principal.vue'

createApp(PantallaPrincipal).mount('#pantallaPrincipal')
createApp(JuezPantalla_principal).mount('#juezPantallaPrincipal')
import RegistroProyecto from './components/RegistroProyecto.vue'


createApp(RegistroProyecto).mount('#registroProyecto')


//-----------------------------------


import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client/core";

/* import {
  provideApolloClient,
  DefaultApolloClient,
} from "@vue/apollo-composable"; */



import { setContext } from '@apollo/client/link/context';
import {createApolloProvider} from '@vue/apollo-option'



const httpLink = createHttpLink({
 uri: 'https://saved-seahorse-42.hasura.app/v1/graphql',
});

const authLink = setContext((_, { headers }) => {
  return {
  headers: {
       ...headers, 'x-hasura-admin-secret': 'cQY41NARiA9l23X00Ge72Di0JIz9fyHXsEc3uP4SrPAN85BlSY4PuIVN2LOChKKb'
     }
   }
});



const client = new ApolloClient({
 link: authLink.concat(httpLink),
 cache: new InMemoryCache()
});


const apolloProvider = createApolloProvider({defaultClient:client})



const app = createApp({
  render: () => h(App),
});
app.use(vueRouter);



const AppCA = createApp(App).use(router);

AppCA.use(vueRouter);

AppCA.use(apolloProvider);

AppCA.mount('#app');