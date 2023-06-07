<template> 
  <header>
    <nav class="navbar">
      <div class="dropdown">
        <button @click="openModal()" class="dropbtn">Login 
          <i class="fa fa-caret-down"></i>
        </button>
        <div class="dropdown-content">
          <a href="#"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>library-outline</title><path d="M12 14.27L10.64 13C9.09 11.57 7.16 10.57 5 10.18V17.13C7.61 17.47 10 18.47 12 19.95C14 18.47 16.39 17.47 19 17.13V10.18C16.84 10.57 14.91 11.57 13.36 13M19 8.15C19.65 8.05 20.32 8 21 8V19C17.5 19 14.36 20.35 12 22.54C9.64 20.35 6.5 19 3 19V8C3.68 8 4.35 8.05 5 8.15C7.69 8.56 10.1 9.78 12 11.54C13.9 9.78 16.31 8.56 19 8.15M12 6C12.27 6 12.5 5.9 12.71 5.71C12.9 5.5 13 5.27 13 5S12.9 4.5 12.71 4.29C12.5 4.11 12.27 4 12 4S11.5 4.11 11.29 4.29C11.11 4.5 11 4.74 11 5S11.11 5.5 11.29 5.71C11.5 5.9 11.74 6 12 6M14.12 7.12C13.56 7.68 12.8 8 12 8S10.44 7.68 9.88 7.12C9.32 6.56 9 5.8 9 5S9.32 3.44 9.88 2.88C10.44 2.32 11.2 2 12 2S13.56 2.32 14.12 2.88 15 4.2 15 5 14.68 6.56 14.12 7.12Z" /></svg>Guía</a>
          <a href="#"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>page-next-outline</title><path d="M22,3H5A2,2 0 0,0 3,5V9H5V5H22V19H5V15H3V19A2,2 0 0,0 5,21H22A2,2 0 0,0 24,19V5A2,2 0 0,0 22,3M7,15V13H0V11H7V9L11,12L7,15M20,13H13V11H20V13M20,9H13V7H20V9M17,17H13V15H17V17Z" /></svg>Registrar Proyecto</a>
          <a href="#"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>close-box-multiple-outline</title><path d="M20 2H8C6.9 2 6 2.9 6 4V16C6 17.11 6.9 18 8 18H20C21.11 18 22 17.11 22 16V4C22 2.9 21.11 2 20 2M20 16H8V4H20V16M4 6V20H18V22H4C2.9 22 2 21.11 2 20V6H4M9.77 12.84L12.6 10L9.77 7.15L11.17 5.75L14 8.6L16.84 5.77L18.24 7.17L15.4 10L18.23 12.84L16.83 14.24L14 11.4L11.17 14.24L9.77 12.84Z" /></svg>Cerrar sesión</a>
        </div>
      </div> 

     
      <router-link to="/"><span></span></router-link>
      <a href="#Titulo" @click="scrollToSection">Inicio</a>
       <a href="#Titulo2" @click="scrollToSection">Convocatoria</a>
       <a href=".block4" @click="scrollToSection">Acerca</a>
       <a href=".block5" @click="scrollToSection">Contactanos</a>
      

    </nav>
  </header>
  <LoginModal ref="modal">
  </LoginModal>
</template>


<script>
import LoginModal from './LoginModal.vue'
import router from '../router';

export default{
  name: 'BarNav',
  components:{
    LoginModal
  },
  methods:{
    openModal(){
     const modal = document.getElementById("modal");
     modal.classList.add("show");
    },
    goToHome(){
      router.push('/')
    },
    // goToHome:()=>{
    //   this.$router.push('/RegistrarProyecto')
    // }
    scrollToSection(event) {
  event.preventDefault();

  let sectionId = event.target.getAttribute('href');
  
  const currentPath = window.location.pathname;
  
  // Redirigir a la página de inicio si la ruta no es la página principal
  if (currentPath !== '/') {
    return router.push('/');
  }

  const element = document.querySelector(sectionId);

  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}


  },
  
 
}

</script>

<style scoped>
body{
  background: linear-gradient(180deg, #BDD9FF 0%, #F7F7FF 21.67%);
}


.navbar {

  
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
 
}


.navbar a {
  float: right;
  font-size: 16px;
  color: black;
  text-align: right;
  padding: 12px 16px;
  text-decoration: none;
  font-family: 'Ubuntu', sans-serif;
    font-size: 20px;

}

.dropdown {
  padding-top:.2%;
  padding-right: 2%;
  float: right ;
  overflow: hidden;

}

.dropdown .dropbtn {
  font-size: 12px;  
  border: none;
  outline: none;
  color: black;
  font-family: 'Ubuntu', sans-serif;
    font-size: 20px;
  padding: 10px 10px;
  background-color: inherit;
  text-decoration: none;
  margin: 0;
}

.navbar a:hover, .dropdown:hover .dropbtn {
  color: white;
}

.dropdown-content {
  display: none;
  position: fixed;
  background-color: #f9f9f9;
  min-width: 160px;

  z-index: 1;
}

.dropdown-content a {
  float: none;
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}

.dropdown-content a:hover {
  background-color: #ddd;
  color: #000;
}

.dropdown:hover .dropdown-content {
  display: block;
}

svg{
 width: 25%;
 height: 25%;
 padding: 2%;
}
</style>