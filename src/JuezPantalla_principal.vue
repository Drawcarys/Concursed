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
        <h1 style="font-size: 25px; font-family: 'Poppins' sans-serif; position: relative; left: 45%; top: 10%;">Evaluación</h1>
        <h1 style="font-size: 25px; font-family: 'Poppins' sans-serif; position: relative; left: 45%; top: 10%;">Categoría:</h1>
        <h1 style="font-size: 25px; font-family: 'Poppins' sans-serif; position: relative; left: 55%; top: 6.2%;">Nombre_categoria</h1>
        <ul style="list-style: none; font-weight: bold; font-size: 20px; position: relative; top: 15%;">
            <li v-for="(categorias,index) in arrayCat" :key="index">
               {{ categorias }} <button class="button1ALRL" @mousedown="abrir">Calificar</button> <div style="background-color: black; height: 1px; width: 94%;"></div>
            </li>
        </ul>
        
        <div class="ALRL_resul" id="elementsALRL">
            <p style="font-size: 20px; font-family: 'Poppins'sans-serif; position: relative; left: 10%; top:25%;">Calidad del <br> resumen <br> documental</p>
            <P style="font-size: 20px; font-family: 'Poppins' sans-serif; position: relative; left: 13%; top:25%;">10</P>
            <p style="font-size: 20px; font-family: 'Poppins' sans-serif; position: relative; left: 30%; top:1%;">Presentación <br> del prototipo</p>
            <P style="font-size: 20px; font-family: 'Poppins' sans-serif; position: relative; left: 33%; top:4%;">40</P>
            <p style="font-size: 20px; font-family: 'Poppins' sans-serif; position: relative; left: 50%; top: -20%;">Identificación <br> del problema</p>
            <P style="font-size: 20px; font-family: 'Poppins' sans-serif; position: relative; left: 53%; top:-17%;">10</P>
            <p style="font-size: 20px; font-family: 'Poppins' sans-serif; position: relative; left: 70%; top: -42%;">Propuesta de <br>solución</p>
            <P style="font-size: 20px; font-family: 'Poppins' sans-serif; position: relative; left: 73%; top:-38%;">20</P>
            <p style="font-size: 20px; font-family: 'Poppins' sans-serif; position: relative; left: 88%; top: -63%;">Elemento <br> creativo</p>
            <P style="font-size: 20px; font-family: 'Poppins' sans-serif; position: relative; left: 90%; top:-60%;">20</P>
            <p style="font-size: 20px; font-family: 'Poppins' sans-serif; position: relative; left: 75%; top: -25%;">Total</p>
            <p style="font-size: 20px; font-family: 'Poppins' sans-serif; position: relative; left: 80%; top: -33.5%;">100</p>
            
                <img src="@/assets/cerrar.png" id="imgALRL" @mousedown="cerrar">
            
            
            <button class="button2ALRL">Calificar</button>
        </div>

    </div>
    
</template>

<style>
body{
    padding: 0px;
    margin: -15px;
}
.fondo{
    width: 100%;
    height: 70em;
    background: linear-gradient(180deg, #BDD9FF 0%, #F7F7FF 50.83%);
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

.button2ALRL{
    position: relative;
    margin: 15px ;
    border: 0px;
    color: white;
    font-size: 18px;
    background-color: #30649D;
    height: 30px;
    width: 150px;
    left: 84%;
    top: -46%;
    border-radius: 5px;
}

.ALRL_resul{
    width: 1200px;
    height: 500px;
    border-radius: 10px;
    border: 1px solid;
    background-color: #F7F7FF;
    position: relative;
    left: 15%;
    top: -25%;
    display: none;
}
#imgALRL{
    width: 20px;
    position: relative;
    top: -130%;
    left: 95%;
}

</style>