<script>
import Barnav from './components/BarNav.vue';

export default {
  name: 'App',
    methods: {
        handleTabClick: function (tabNames) {
            this.activeTabName = tabNames;
            this.currentTab = this.tabs[tabNames];
        }
    },
    components: { Barnav }
}



</script>
<template>
  <Barnav/>
<div class="block1">
  <p id="Titulo" class="Titulo2">Desarrollo de   <br>aprendizaje en línea<br>para la enseñanza de<br>habilidades técnicas</p>
  <button class="Boton1">nuestra convocatoria</button>
<p id="Parrafo1">
  ¡Bienvenido a Concursed! La plataforma donde la creatividad y la <br>competencia se unen para brindarte la oportunidad de demostrar tus <br>habilidades y ganar grandes premios. Participa en nuestros concursos de <br>proyectos de creatividad, donde podrás presentar tus ideas y proyectos <br>para que sean evaluados por nuestros jueces expertos.</p>
    <img src="./assets/camp1.png" class="camp1">
  
</div>

<div class="block2">
  <div id="plan1">
    <h3 id="titulotecALRL">Tecnología</h3>
    <p  id="texttecALRL">Conocimientos, herramientas y técnicas que utilizamos <br> 
      para resolver problemas y satisfacer necesidades</p>
        <img src="./assets/operando.png" id="icon1">
  </div>

  <div id="plan2">
    <h3 id="titulosaluALRL">Salud</h3>
    <p id="textsalucALRL">La salud es un estado de completo bienestar físico, mental y social</p>
        <img src="./assets/latido-del-corazon.png" id="icon2">
  </div>

  <div id="plan3">
    <h3  id="tituloambiALRL">Medio Ambiente</h3>
    <p  id="textambiALRL">Elementos naturales, como el aire, el agua y la tierra</p>
        <img src="./assets/ecologia-y-medioambiente.png" id="icon3">
  </div>

  <h1 id="cateALRL">Categorias</h1>

  <div id="grisALRL">
    <p>.</p>
  </div>

</div>

<div class="block3">
  <h1 id="Titulo2">Convocatoria</h1>
<p id="Parrafo2">
  ¡Es hora de dejar volar tu imaginación! En nuestro próximo <br> concurso de proyectos de creatividad, buscamos ideas <br>innovadoras y originales en el tema de [tema del concurso]. Si <br>eres un creador, emprendedor o simplemente alguien<br> apasionado por la creatividad, ¡este es tu momento de brillar!</p>
  <h6 style="font-size: 24px; font-family: 'Poppins', sans-serif; color: #19376D; font-weight: 900; margin: 0 9%;">Categorias</h6>
  <ul style="font-size: 24px; font-family: 'Poppins', font-weight: 900; sans-serif; margin: 15px 8%;">
  <li v-for="(categorias,index) in arrayCat" :key="index">
      {{ categorias }}
  </li>
</ul>

<button class="Boton2">Descarga la aquí!</button>

    <img src="./assets/camp3.png" class="camp2">
  
</div>

<div class="block4">
  <h4  id="acercaALRL">Acerca de nosotros</h4>
  <h4 id="objeALRL" >Objetivo</h4>
  <img id="img1ALRL" src="./assets/present.png" class="img1">
  <h4 id="seguALRL" >Seguridad</h4>
  <img id="img2ALRL" src="./assets/present2.png" class="img2">
  <h4 id="fechaALRL" >Fechas</h4>
  <img id="img3ALRL" src="./assets/present3.png" class="img3">
  
  <p id="text1ALRL">El objetivo general es impulsar la <br> creatividad y la innovación, <br>mediante la organización de un <br>concurso de proyectos de <br>creatividad que fomente la <br>presentación de ideas originales <br>e innovadoras en diferentes <br>áreas. </p>
  
  <p id="text2ALRL"> la gestión de acceso a la <br>información, la vigilancia de la red y <br>la formación de los empleados sobre<br> la importancia de la seguridad de la <br>información. Al asegurar la <br>confidencialidad de los datos, se <br> protege la información sensible de la <br>empresa de accesos no autorizados, <br>lo que puede reducir el riesgo de <br>pérdida financiera o de reputación <br>para la organización.</p>
 
  <p id="text3ALRL">completar un proyecto antes de la <br>fecha límite establecida. Para lograr <br>este objetivo, se pueden establecer<br> plazos intermedios y objetivos <br>específicos a lo largo del proyecto <br>para garantizar que se esté <br>avanzando de manera constante y <br>que se cumpla con la fecha límite <br>final. Además, se puede asignar <br>recursos adecuados, identificar y <br>abordar problemas de manera <br>oportuna, y tener un plan de <br>contingencia en caso de que surjan <br>problemas imprevistos.</p>
 
    <div id="lineALRL">
      <p>.</p>
    </div>
</div>

<div class="block5">
  <h1 style="font-size: 16px; font-family: 'Poppins', sans-serif; font-weight: 900; font-size: 30px; position: relative; left: 20%; top: 10%;">Contactanos</h1>
  <input id="input" type="Nombre" style="border: 2px solid #D9D9D9; border-radius: 10px; width: 250px; height: 50px; font-size: 15px; position: relative; left: 15%; top: 20%;" placeholder="Nombre" >
  <input id="input" type="Nombre" style="border: 2px solid #D9D9D9; border-radius: 10px; width: 250px; height: 50px; font-size: 15px; position: relative; left: 20%; top: 20%;" placeholder="Apellidos" >
  <input id="input" type="Nombre" style="border: 2px solid #D9D9D9; border-radius: 10px; width: 600px; height: 50px; font-size: 15px; position: relative; left: -12.5%; top: 40%;" placeholder="Correo electronico" >
  <input id="input" type="Nombre" style="border: 2px solid #D9D9D9; border-radius: 10px; width: 600px; height: 150px; font-size: 15px; position: relative; left: -44.4%; top: 65%;" placeholder="Escribe tu mensaje ..." >
  <img src="./assets/Notifications_Isometric.png" style="position: relative; left: 55%;">
  <button id="boton2">Enviar</button>
</div>
  
  
<div class="block6">
  <h2 style="color: white; position: relative; left: 5%; top: 10%;">TecTitans</h2>
  <p style="color: white; position: relative; left: 5%; top: 10%;">Copyright © [2023] [TecTitans]. Todos los derechos reservados</p>
  <h5 style="color: white; position: relative; left: 60%; top: -35%;">Asociados</h5>
  <ul style="list-style: none; color: white; position: relative; left: 56%; top: -35%;">
    <li v-for="(categorias,index) in empresas" :key="index" >
      {{ categorias }}
  </li>
  </ul>
  <h5 style="color: white; position: relative; left: 77%; top: -112%;">Soporte</h5>
  <ul style="list-style: none; color: white; position: relative; left: 77%; top: -112%;">
    <li v-for="(categorias,index) in soporte" :key="index" >
      {{ categorias }}
  </li>
  </ul>
  <h5 style="color: white; position: relative; left: 90%; top: -182%;">Unete a nosotros</h5>
</div>
</template>

<style>
body{
	margin: 0 ;
	padding: 0 ;

}

@media (min-width: 250px) {
  #Titulo{
    position: relative;
    font-size: 15px;
    font-family: 'Roboto', sans-serif;
    font-weight: 900;
    top: 10%;
    left: 5%;
  }

  .Boton1{
    position: relative;
    border: 0px;
    color: white;
    font-size: 18px;
    background-color: #19376D;
    height: 50px;
    width: 200px;
    top: 15%;
    left: 5%;
    border-radius: 10px;
  }

  #Parrafo1{
    position: relative;
    font-family: 'Poppins', sans-serif;
    top: 26%;
    left: 5%;
    font-size: 10px;
    text-align: center;
  }

  .camp1{
    position: relative;
    top: 100px;
    left: 7%;
    width: 400px;
   }
}

@media (min-width: 1000px) {
  #Titulo{
    position: relative;
    font-size: 35px;
    font-family: 'Roboto', sans-serif;
    font-weight: 900;
    top: 20%;
    left: -25%;
  }

  .Boton1{
    position: relative;
    border: 0px;
    color: white;
    font-size: 18px;
    background-color: #19376D;
    height: 50px;
    width: 200px;
    top: 23%;
    left: -34%;
    border-radius: 10px;
  }

  #Parrafo1{
    position: relative;
    font-family: 'Poppins', sans-serif;
    font-size: 20px;
    top: 26%;
    left: -10%;
  }

  .camp1{
    position: relative;
    top: -450px;
    left: 20%;
    width: 550px;
   }
}

@media (min-width: 1200px) {
  #Titulo{
    position: relative;
    font-size: 35px;
    font-family: 'Roboto', sans-serif;
    font-weight: 900;
    top: 20%;
    left: -25%;
  }

  .Boton1{
    position: relative;
    border: 0px;
    color: white;
    font-size: 18px;
    background-color: #19376D;
    height: 50px;
    width: 200px;
    top: 23%;
    left: -30%;
    border-radius: 10px;
  }

  #Parrafo1{
    position: relative;
    font-family: 'Poppins', sans-serif;
    font-size: 20px;
    top: 26%;
    left: -20%;
  }

  .camp1{
    position: relative;
    top: -400px;
    left: 20%;
    width: 650px;
   }
}

@media (min-width: 250px) {
  #plan1{
    position: relative;
    top: 20%;
    left: 12%;
    width: 450px;
    height: 100px;
    border: 2px solid #D9D9D9;
    border-radius: 10px;
    box-shadow: 6px 6px 5px #D9D9D9;
  }

#titulotecALRL{
  margin: 5px 25px; 
  font-family: 'Roboto', sans-serif;
  font-size: 22px;
  font-weight: 900;
  text-align: left; 
}

#texttecALRL{
  margin: 10px 15px; 
  font-family: 'Roboto',sans-serif;
  text-align: left; 
  font-size: 13px
  
}

#icon1{
  position: relative;
  width: 70px;
  left: 40%;
  top: -80%;
  background-color: #4D96FF;
  border-radius: 5px;
  
}
#plan2{
  position: relative;
  top:30%;
  left: 12%;
  width: 450px;
  height: 100px;
  border: 2px solid #D9D9D9;
  border-radius: 10px;
  box-shadow: 6px 6px 5px #D9D9D9;
}

#titulosaluALRL{
  margin: 5px 25px;
  font-family: 'Roboto', sans-serif;
  font-size: 22px;
  font-weight: 900;
  text-align: left; 
}
#textsalucALRL{
  margin: 10px 15px; 
  font-family: 'Roboto', sans-serif;
  text-align: left;  
  font-size: 13px
}

#icon2{
  position: relative;
  width: 70px;
  left: 40%;
  top: -60%;
  background-color: #FF6B6B;
  border-radius: 5px;
  
}



#plan3{
  position: relative;
  top: 40%;
  left: 12%;
  width: 450px;
  height: 100px;
  border: 2px solid #D9D9D9;
  border-radius: 10px;
  box-shadow: 6px 6px 5px #D9D9D9;
}

#tituloambiALRL{
  margin: 5px 25px;
  font-family: 'Roboto', sans-serif;
  font-size: 22px;
  font-weight: 900;
  text-align: left; 
}

#textambiALRL{
  margin: 10px 15px; 
  font-family: 'Roboto', sans-serif;
  text-align: left; 
  font-size: 13px
}

#icon3{
  position: relative;
  width: 70px;
  left: 35%;
  top: -65%;
  background-color: #6BCB77;
  border-radius: 5px;
  
}

#cateALRL{
  font-weight: 800; 
  font-family: 'Roboto', sans-serif; 
  position: relative; 
  left: 1%; 
  top: 45%;
}

#grisALRL{
  width: 100px; 
  color: #D9D9D9;
  background-color: #D9D9D9; 
  border-radius: 10px; 
  position: relative; 
  top: 48%; 
  left: 44%;
}

  }

@media (min-width: 1000px) {
  #plan1{
    position: relative;
    top: 20%;
    left: 20%;
    width: 500px;
    height: 100px;
    border: 2px solid #D9D9D9;
    border-radius: 10px;
    box-shadow: 6px 6px 5px #D9D9D9;
  }

#titulotecALRL{
  margin: 5px 25px; 
  font-family: 'Roboto', sans-serif;
  font-size: 22px;
  font-weight: 900;
  text-align: left; 
}

#texttecALRL{
  margin: 10px 15px; 
  font-family: 'Roboto',sans-serif;
  text-align: left; 
  font-size: 13px
  
}

#icon1{
  position: relative;
  width: 70px;
  left: 40%;
  top: -80%;
  background-color: #4D96FF;
  border-radius: 5px;
  
}
#plan2{
  position: relative;
  top:30%;
  left: 20%;
  width: 500px;
  height: 100px;
  border: 2px solid #D9D9D9;
  border-radius: 10px;
  box-shadow: 6px 6px 5px #D9D9D9;
}

#titulosaluALRL{
  margin: 5px 25px;
  font-family: 'Roboto', sans-serif;
  font-size: 22px;
  font-weight: 900;
  text-align: left; 
}
#textsalucALRL{
  margin: 10px 15px; 
  font-family: 'Roboto', sans-serif;
  text-align: left;  
  font-size: 13px
}

#icon2{
  position: relative;
  width: 70px;
  left: 40%;
  top: -60%;
  background-color: #FF6B6B;
  border-radius: 5px;
  
}



#plan3{
  position: relative;
  top: 40%;
  left: 20%;
  width: 500px;
  height: 100px;
  border: 2px solid #D9D9D9;
  border-radius: 10px;
  box-shadow: 6px 6px 5px #D9D9D9;
}

#tituloambiALRL{
  margin: 5px 25px;
  font-family: 'Roboto', sans-serif;
  font-size: 22px;
  font-weight: 900;
  text-align: left; 
}

#textambiALRL{
  margin: 10px 15px; 
  font-family: 'Roboto', sans-serif;
  text-align: left; 
  font-size: 13px
}

#icon3{
  position: relative;
  width: 70px;
  left: 35%;
  top: -65%;
  background-color: #6BCB77;
  border-radius: 5px;
  
}

#cateALRL{
  font-weight: 800; 
  font-family: 'Roboto', sans-serif; 
  position: relative; 
  left: 1%; 
  top: 45%;
}

#grisALRL{
  width: 100px; 
  color: #D9D9D9;
  background-color: #D9D9D9; 
  border-radius: 10px; 
  position: relative; 
  top: 48%; 
  left: 44%;
}

  }

@media (min-width: 1200px) {
  #plan1{
    position: relative;
    top: 20%;
    left: 10%;
    width: 500px;
    height: 100px;
    border: 2px solid #D9D9D9;
    border-radius: 10px;
    box-shadow: 6px 6px 5px #D9D9D9;
  }

#titulotecALRL{
  margin: 5px 25px; 
  font-family: 'Roboto', sans-serif;
  font-size: 22px;
  font-weight: 900;
  text-align: left; 
}

#texttecALRL{
  margin: 10px 15px; 
  font-family: 'Roboto',sans-serif;
  text-align: left; 
  font-size: 13px
  
}

#icon1{
  position: relative;
  width: 70px;
  left: 40%;
  top: -80%;
  background-color: #4D96FF;
  border-radius: 5px;
  
}
#plan2{
  position: relative;
  top: 6%;
  left: 60%;
  width: 500px;
  height: 100px;
  border: 2px solid #D9D9D9;
  border-radius: 10px;
  box-shadow: 6px 6px 5px #D9D9D9;
}

#titulosaluALRL{
  margin: 5px 25px;
  font-family: 'Roboto', sans-serif;
  font-size: 22px;
  font-weight: 900;
  text-align: left; 
}
#textsalucALRL{
  margin: 10px 15px; 
  font-family: 'Roboto', sans-serif;
  text-align: left;  
  font-size: 13px
}

#icon2{
  position: relative;
  width: 70px;
  left: 40%;
  top: -60%;
  background-color: #FF6B6B;
  border-radius: 5px;
  
}



#plan3{
  position: relative;
  top: 20%;
  left: 35%;
  width: 500px;
  height: 100px;
  border: 2px solid #D9D9D9;
  border-radius: 10px;
  box-shadow: 6px 6px 5px #D9D9D9;
}

#tituloambiALRL{
  margin: 5px 25px;
  font-family: 'Roboto', sans-serif;
  font-size: 22px;
  font-weight: 900;
  text-align: left; 
}

#textambiALRL{
  margin: 10px 15px; 
  font-family: 'Roboto', sans-serif;
  text-align: left; 
  font-size: 13px
}

#icon3{
  position: relative;
  width: 70px;
  left: 35%;
  top: -65%;
  background-color: #6BCB77;
  border-radius: 5px;
  
}

#cateALRL{
  font-weight: 800; 
  font-family: 'Roboto', sans-serif; 
  position: relative; 
  left: 1%; 
  top: 30%;
}

#grisALRL{
  width: 100px; 
  color: #D9D9D9;
  background-color: #D9D9D9; 
  border-radius: 10px; 
  position: relative; 
  top: 40%; 
  left: 48%;
}

  }


  @media (min-width: 400px) {
    #acercaALRL{
      font-size: 35px; 
      font-family: 'Poppins', sans-serif; 
      font-weight: 900; 
      position: relative; 
      left: 10%;
      top: 1%;
    }
    #objeALRL{
      font-size: 30px; 
      font-family: 'Poppins', sans-serif; 
      position: relative; 
      left: 15%; 
      color: #333D48;
      top: 4%;
    }
    .img1{
      position: relative;
      top: 1%;
      left: 15%;
      width: 200px;
     }
    #seguALRL{
      font-size: 30px; 
      font-family: 'Poppins', sans-serif; 
      position: relative; 
      left: 15%; 
      top: 1%; 
      color: #333D48;
    }
  
    .img2{
      position: relative;
      top: -5%;
      left: 15%;
      width: 250px;
     }
    
    #fechaALRL{
      font-size: 30px; 
      font-family: 'Poppins', sans-serif; 
      position: relative; 
      left: 15%; 
      top: -10%; 
      color: #333D48;
    }
    
    .img3{
      position: relative;
      top: -15%;
      left: 15%;
      width: 250px;
     }
      
    #lineALRL{
      width: 50%; 
      background-color: #BBC1C8; 
      border-radius: 15px; 
      color: #BBC1C8; 
      position: relative; 
      top: -145%; 
      height: 5px;
      left: 40%;
    }
  }  

@media (min-width: 1000px) {
  #acercaALRL{
    font-size: 35px; 
    font-family: 'Poppins', sans-serif; 
    font-weight: 900; 
    position: relative; 
    left: 10%;
    top: 1%;
  }
  #objeALRL{
    font-size: 30px; 
    font-family: 'Poppins', sans-serif; 
    position: relative; 
    left: -25%; 
    color: #333D48;
    top: 4%;
  }
  .img1{
    position: relative;
    top: 1%;
    left: -25%;
    width: 250px;
   }

   #text1ALRL{
    font-size: 16px; 
    font-family: 'Poppins', sans-serif;  
    position: relative; 
    left: -25%; 
    top: -70%;
  }
  
  #seguALRL{
    font-size: 30px; 
    font-family: 'Poppins', sans-serif; 
    position: relative; 
    left: 10%; 
    top: -35%; 
    color: #333D48;
  }

  .img2{
    position: relative;
    top: -40%;
    left: 10%;
    width: 250px;
   }

   #text2ALRL{
    font-size: 16px; 
    font-family: 'Poppins', sans-serif;  
    position: relative; 
    left: 10%; 
    top: -100%;
  }
  
  #fechaALRL{
    font-size: 30px; 
    font-family: 'Poppins', sans-serif; 
    position: relative; 
    left: 42%; 
    top: -74%; 
    color: #333D48;
  }
  
  .img3{
    position: relative;
    top: -80%;
    left: 42%;
    width: 250px;
   }
  
  #text3ALRL{
    font-size: 16px; 
    font-family: 'Poppins', sans-serif;  
    position: relative; 
    left: 40%; 
    top: -145%;
  }
    
  #lineALRL{
    width: 50%; 
    background-color: #BBC1C8;
    border-radius: 15px; 
    color: #BBC1C8; 
    position: relative; 
    top: -145%; 
    height: 5px;
    left: 30%;
  }
}

@media (min-width: 1400px) {
  #acercaALRL{
    font-size: 35px; 
    font-family: 'Poppins', sans-serif; 
    font-weight: 900; 
    position: relative; 
    left: 1%;
    top: 1%;
  }
  #objeALRL{
    font-size: 30px; 
    font-family: 'Poppins', sans-serif; 
    position: relative; 
    left: -30%; 
    color: #333D48;
    top: 4%;
  }
  .img1{
    position: relative;
    top: 1%;
    left: -30%;
    width: 250px;
   }

   #text1ALRL{
    font-size: 16px; 
    font-family: 'Poppins', sans-serif;  
    position: relative; 
    left: -30%; 
    top: -70%;
  }
  
  #seguALRL{
    font-size: 30px; 
    font-family: 'Poppins', sans-serif; 
    position: relative; 
    left: 1%; 
    top: -35%; 
    color: #333D48;
  }

  .img2{
    position: relative;
    top: -40%;
    left: 1%;
    width: 250px;
   }

   #text2ALRL{
    font-size: 16px; 
    font-family: 'Poppins', sans-serif;  
    position: relative; 
    left: 1%; 
    top: -100%;
  }
  
  #fechaALRL{
    font-size: 30px; 
    font-family: 'Poppins', sans-serif; 
    position: relative; 
    left: 35%; 
    top: -74%; 
    color: #333D48;
  }
  
  .img3{
    position: relative;
    top: -80%;
    left: 35%;
    width: 250px;
   }
  
  #text3ALRL{
    font-size: 16px; 
    font-family: 'Poppins', sans-serif;  
    position: relative; 
    left: 35%; 
    top: -145%;
  }
    
  #lineALRL{
    width: 50%; 
    background-color: #BBC1C8;
    border-radius: 15px; 
    color: #BBC1C8; 
    position: relative; 
    top: -145%; 
    height: 5px;
    left: 30%;
  }
}






  #Titulo2{
    position: relative;
    color: #577399;
    font-size: 96px;
    font-family: 'Roboto', sans-serif;
    top: 20px;
    padding: 0 150px;
  }

  #Parrafo2{
    position: relative;
    font-family: 'Poppins', sans-serif;
    font-size: 25px;
    top: 1%;
    left: 150px;
  }

  .Boton2{
    position: relative;
    border: 0px;
    color: white;
    background-color: #19376D;
    font-size: 15px;
    height: 50px;
    width: 200px;
    top: -60%;
    left: 150px;
    border-radius: 10px;
  }

  .camp2{
    position: relative;
    top: -300px;
    left: 35%;
    width: 550px;
   }

   

  

   

   #input::placeholder{
    position: relative;
    left: 5%;
    color: #C2C2C2;
   }

   #boton2{
    position: relative;
    border: 0px;
    color: white;
    font-size: 18px;
    background-color: #19376D;
    height: 50px;
    width: 200px;
    top: 20%;
    left: 15%;
    border-radius: 10px;
  }
  

  .block1{
    width: 100%;
    height: 750px;
    background: linear-gradient(180deg, #BDD9FF 0%, #F7F7FF 50.83%);
  }

  .block2{
    width: 100%;
    height: 750px;
  }

  .block3{
    width: 100%;
    height: 750px;
    background: linear-gradient(180deg, #BDD9FF 0%, #F7F7FF 50.83%);
  }

  .block4{
    width: 100%;
    height: 750px;
  }

  .block5{
    width: 100%;
    height: 950px;
  }

  .block6{
    width: 100%;
    height: 190px;
    background-color: #19376D;
  }
</style>


