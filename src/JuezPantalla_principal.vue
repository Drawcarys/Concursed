<script setup>
const arrayCat = ["Nombre1", "Nombre2", "Nombre3", "Nombre4", "Nombre5"];

function abrir() {
    document.getElementById("elementsALRL").style.display="block";
}

function cerrar() {
    document.getElementById("elementsALRL").style.display="none";
}

</script>


<template>
    <div class="fondo">
        <h1 id="evaALRL" >Evaluación</h1>
        <h1 id="cateALRL" >Categoría:</h1>
        <h1 id="nombALRL" >Nombre_categoria</h1>
        <ul id="listALRL">
            <li v-for="(categorias,index) in arrayCat" :key="index">
               {{ categorias }} <button class="button1ALRL">Calificar</button> <div id="sepaALRL"></div>
            </li>
        </ul>

        <div class="ALRL_resul" id="elementsALRL">
            <p id="text1ALRL">Calidad del <br> resumen <br> documental</p>
            <P id="text2ALRL">10</P>
            <p id="text3ALRL">Presentación <br> del prototipo</p>
            <P id="text4ALRL">40</P>
            <p id="text5ALRL">Identificación <br> del problema</p>
            <P id="text6ALRL">10</P>
            <p id="text7ALRL">Propuesta de <br>solución</p>
            <P id="text8ALRL">20</P>
            <p id="text9ALRL">Elemento <br> creativo</p>
            <P id="text10ALRL" >20</P>
            <p id="text11ALRL">Total</p>
            <p id="text12ALRL">100</p>
            
                <img src="@/assets/cerrar.png" id="imgALRL" @mousedown="cerrar">
            
            
            <button class="button2ALRL">Calificar</button>
        </div>
    
    </div>
    
</template>

<style>
@media (min-width: 400px) {
    #evaALRL{
        font-size: 25px; 
        font-family: 'Poppins' sans-serif; 
        position: relative; 
        left: 45%; 
        top: 10%;
    }

    #cateALRL{
        font-size: 25px; 
        font-family: 'Poppins' sans-serif; 
        position: relative; 
        left: 45%; 
        top: 10%;
    }

    #nombALRL{
        font-size: 25px; 
        font-family: 'Poppins' sans-serif; 
        position: relative; 
        left: 51%; 
        top: 6.2%;
    }

    #listALRL{
        list-style: none; 
        font-weight: bold; 
        font-size: 20px; 
        position: relative; 
        top: 15%;
    }

    #sepaALRL{
        background-color: black; 
        height: 1px; 
        width: 94%;
    }

    #text1ALRL{
        font-size: 20px; 
        font-family: 'Poppins'sans-serif; 
        position: relative; 
        left: 10%; 
        top:25%;
    }

    #text2ALRL{
        font-size: 20px; 
        font-family: 'Poppins' sans-serif; 
        position: relative; 
        left: 13%; 
        top:25%;
    }

    #text3ALRL{
        font-size: 20px; 
        font-family: 'Poppins' sans-serif; 
        position: relative; 
        left: 30%; 
        top:1%;
    }

    #text4ALRL{
        font-size: 20px; 
        font-family: 'Poppins' sans-serif; 
        position: relative; 
        left: 33%; 
        top:4%;
    }

    #text5ALRL{
        font-size: 20px; 
        font-family: 'Poppins' sans-serif; 
        position: relative; 
        left: 50%; 
        top: -20%;
    }

    #text6ALRL{
        font-size: 20px; 
        font-family: 'Poppins' sans-serif; 
        position: relative; 
        left: 53%; 
        top:-17%;
    }

    #text7ALRL{
        font-size: 20px; 
        font-family: 'Poppins' sans-serif; 
        position: relative; 
        left: 70%; 
        top: -42%;
    }

    #text8ALRL{
        font-size: 20px; 
        font-family: 'Poppins' sans-serif; 
        position: relative; 
        left: 73%; 
        top:-38%;
    }

    #text9ALRL{
        font-size: 20px; 
        font-family: 'Poppins' sans-serif; 
        position: relative; 
        left: 88%; 
        top: -63%;
    }

    #text10ALRL{
        font-size: 20px; 
        font-family: 'Poppins' sans-serif; 
        position: relative; 
        left: 90%; 
        top:-60%;
    }

    #text11ALRL{
        font-size: 20px; 
        font-family: 'Poppins' sans-serif; 
        position: relative; 
        left: 75%; 
        top: -25%;
    }

    #text12ALRL{
        font-size: 20px; 
        font-family: 'Poppins' sans-serif; 
        position: relative; 
        left: 80%; 
        top: -33.5%;
    }

    .button1ALRL{
        position: relative;
        margin: 15px ;
        border: 0px;
        color: white;
        font-size: 18px;
        background-color: #30649D;
        height: 30px;
        width: 150px;
        left: 80%;
        border-radius: 5px;
    }
}

@media (min-width: 1000px) {
    #evaALRL{
        font-size: 25px; 
        font-family: 'Poppins' sans-serif; 
        position: relative; 
        left: 45%; 
        top: 10%;
    }

    #cateALRL{
        font-size: 25px; 
        font-family: 'Poppins' sans-serif; 
        position: relative; 
        left: 45%; 
        top: 10%;
    }

    #nombALRL{
        font-size: 25px; 
        font-family: 'Poppins' sans-serif; 
        position: relative; 
        left: 51%; 
        top: 6.2%;
    }

    #listALRL{
        list-style: none; 
        font-weight: bold; 
        font-size: 20px; 
        position: relative; 
        top: 15%;
    }

    #sepaALRL{
        background-color: black; 
        height: 1px; 
        width: 94%;
    }

    #text1ALRL{
        font-size: 20px; 
        font-family: 'Poppins'sans-serif; 
        position: relative; 
        left: 10%; 
        top:25%;
    }

    #text2ALRL{
        font-size: 20px; 
        font-family: 'Poppins' sans-serif; 
        position: relative; 
        left: 13%; 
        top:25%;
    }

    #text3ALRL{
        font-size: 20px; 
        font-family: 'Poppins' sans-serif; 
        position: relative; 
        left: 30%; 
        top:1%;
    }

    #text4ALRL{
        font-size: 20px; 
        font-family: 'Poppins' sans-serif; 
        position: relative; 
        left: 33%; 
        top:4%;
    }

    #text5ALRL{
        font-size: 20px; 
        font-family: 'Poppins' sans-serif; 
        position: relative; 
        left: 50%; 
        top: -20%;
    }

    #text6ALRL{
        font-size: 20px; 
        font-family: 'Poppins' sans-serif; 
        position: relative; 
        left: 53%; 
        top:-17%;
    }

    #text7ALRL{
        font-size: 20px; 
        font-family: 'Poppins' sans-serif; 
        position: relative; 
        left: 70%; 
        top: -42%;
    }

    #text8ALRL{
        font-size: 20px; 
        font-family: 'Poppins' sans-serif; 
        position: relative; 
        left: 73%; 
        top:-38%;
    }

    #text9ALRL{
        font-size: 20px; 
        font-family: 'Poppins' sans-serif; 
        position: relative; 
        left: 88%; 
        top: -63%;
    }

    #text10ALRL{
        font-size: 20px; 
        font-family: 'Poppins' sans-serif; 
        position: relative; 
        left: 90%; 
        top:-60%;
    }

    #text11ALRL{
        font-size: 20px; 
        font-family: 'Poppins' sans-serif; 
        position: relative; 
        left: 75%; 
        top: -25%;
    }

    #text12ALRL{
        font-size: 20px; 
        font-family: 'Poppins' sans-serif; 
        position: relative; 
        left: 80%; 
        top: -33.5%;
    }

    .button1ALRL{
        position: relative;
        margin: 15px ;
        border: 0px;
        color: white;
        font-size: 18px;
        background-color: #30649D;
        height: 30px;
        width: 150px;
        left: 80%;
        border-radius: 5px;
    }
}

@media (min-width: 1400px) {
    #evaALRL{
        font-size: 25px; 
        font-family: 'Poppins' sans-serif; 
        position: relative; 
        left: 45%; 
        top: 10%;
    }

    #cateALRL{
        font-size: 25px; 
        font-family: 'Poppins' sans-serif; 
        position: relative; 
        left: 45%; 
        top: 10%;
    }

    #nombALRL{
        font-size: 25px; 
        font-family: 'Poppins' sans-serif; 
        position: relative; 
        left: 51%; 
        top: 6.2%;
    }

    #listALRL{
        list-style: none; 
        font-weight: bold; 
        font-size: 20px; 
        position: relative; 
        top: 15%;
    }

    #sepaALRL{
        background-color: black; 
        height: 1px; 
        width: 94%;
    }

    #text1ALRL{
        font-size: 20px; 
        font-family: 'Poppins'sans-serif; 
        position: relative; 
        left: 10%; 
        top:25%;
    }

    #text2ALRL{
        font-size: 20px; 
        font-family: 'Poppins' sans-serif; 
        position: relative; 
        left: 13%; 
        top:25%;
    }

    #text3ALRL{
        font-size: 20px; 
        font-family: 'Poppins' sans-serif; 
        position: relative; 
        left: 30%; 
        top:1%;
    }

    #text4ALRL{
        font-size: 20px; 
        font-family: 'Poppins' sans-serif; 
        position: relative; 
        left: 33%; 
        top:4%;
    }

    #text5ALRL{
        font-size: 20px; 
        font-family: 'Poppins' sans-serif; 
        position: relative; 
        left: 50%; 
        top: -20%;
    }

    #text6ALRL{
        font-size: 20px; 
        font-family: 'Poppins' sans-serif; 
        position: relative; 
        left: 53%; 
        top:-17%;
    }

    #text7ALRL{
        font-size: 20px; 
        font-family: 'Poppins' sans-serif; 
        position: relative; 
        left: 70%; 
        top: -42%;
    }

    #text8ALRL{
        font-size: 20px; 
        font-family: 'Poppins' sans-serif; 
        position: relative; 
        left: 73%; 
        top:-38%;
    }

    #text9ALRL{
        font-size: 20px; 
        font-family: 'Poppins' sans-serif; 
        position: relative; 
        left: 88%; 
        top: -63%;
    }

    #text10ALRL{
        font-size: 20px; 
        font-family: 'Poppins' sans-serif; 
        position: relative; 
        left: 90%; 
        top:-60%;
    }

    #text11ALRL{
        font-size: 20px; 
        font-family: 'Poppins' sans-serif; 
        position: relative; 
        left: 75%; 
        top: -25%;
    }

    #text12ALRL{
        font-size: 20px; 
        font-family: 'Poppins' sans-serif; 
        position: relative; 
        left: 80%; 
        top: -33.5%;
    }

    .button1ALRL{
        position: relative;
        margin: 15px ;
        border: 0px;
        color: white;
        font-size: 18px;
        background-color: #30649D;
        height: 30px;
        width: 150px;
        left: 80%;
        border-radius: 5px;
    }
}



body{
    padding: 0px;
    margin: -15px;
}
.fondo{
    width: 100%;
    height: 70em;
    background: linear-gradient(180deg, #BDD9FF 0%, #F7F7FF 50.83%);
}



</style>