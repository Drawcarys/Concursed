<script setup>
const days = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"];
const meses =["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre",];

</script>

<template>
    <div class="registerALRL">
        <h1 style="font-family: 'Roboto', sans-serif; font-weight: 900; position: relative; left: 10%;">Registrarse</h1>
        <p style="font-family: 'Roboto', sans-serif; position: relative; left: 10%; top: -3%;">Es rápido y fácil</p>
        <p style="font-family: 'Roboto', sans-serif; position: relative; left: 10%; top: 5%;">Nombre</p>
        <input id="input" type="Nombre" style="border: 2px solid #D9D9D9; border-radius: 10px; width: 150px; height: 30px; font-size: 15px; position: relative; left: 7%; top: 5%;" placeholder="Nombre" >
        <p style="font-family: 'Roboto', sans-serif; position: relative; left: 30%; top: -7%;">Apellido</p>
        <input id="input" type="Nombre" style="border: 2px solid #D9D9D9; border-radius: 10px; width: 150px; height: 30px; font-size: 15px; position: relative; left: 26%; top: -7%;" placeholder="Apellido" >
    
        <p style="font-family: 'Roboto', sans-serif; position: relative; left: 8%; top: -5%;">Correo Electrónico</p>
        <input id="input" type="Nombre" style="border: 2px solid #D9D9D9; border-radius: 10px; width: 390px; height: 30px; font-size: 15px; position: relative; left: 6%; top: -5%;" placeholder="Correo electrónico" >
        <p style="font-family: 'Roboto', sans-serif; position: relative; left: 8%; top: -4%;">Confirma tu correo electrónico</p>
        <input id="input" type="Nombre" style="border: 2px solid #D9D9D9; border-radius: 10px; width: 390px; height: 30px; font-size: 15px; position: relative; left: 6%; top: -4%;" placeholder="Confirma tu correo electrónico" >
    
        <p style="font-family: 'Roboto', sans-serif; position: relative; left: 8%; top: -5%;">Contraseña</p>
        <input id="input" type="Nombre" style="border: 2px solid #D9D9D9; border-radius: 10px; width: 390px; height: 30px; font-size: 15px; position: relative; left: 6%; top: -5%;" placeholder="Contraseña" >
        <p style="font-family: 'Roboto', sans-serif; position: relative; left: 8%; top: -4%;">Confirma tu contraseña</p>
        <input id="input" type="Nombre" style="border: 2px solid #D9D9D9; border-radius: 10px; width: 390px; height: 30px; font-size: 15px; position: relative; left: 6%; top: -4%;" placeholder="Confirma tu contraseña" >
    
        <div style="width: 410px; height: 400px; border-radius: 50%; background-color: #77B1FF; position: relative; left: 55%; top: -80%;">
            <img src="@/assets/Designer.png" style="position: relative; right: 5%; top: -10%; width: 450px;">
        </div>

        <p  style="font-family: 'Roboto', sans-serif; position: relative; left: 65%; top: -75%;">Fecha de nacimiento</p>
        
        <select name="dia" id="diaALRL" style="position: relative; left: 50%; top: -73%; width: 150px; height:30px; border-radius: 10px;border: 2px solid #D9D9D9;">
            <option value="" v-for="(categorias,index) in days" :key="index">
                {{ categorias }}
            </option>
        </select>

        <select name="meses" id="mesesALRL" style="position: relative; left: 55%; top: -73%; width: 150px; height:30px; border-radius: 10px;border: 2px solid #D9D9D9;">
            <option value="" v-for="(categorias,index) in meses" :key="index">
                {{ categorias }}
            </option>
        </select>

        <select name="years" id="yearsALRL" style="position: relative; left: 60%; top: -73%; width: 150px; height:30px; border-radius: 10px;border: 2px solid #D9D9D9;">
                <option value="" v-for="(item, index) in 2023" :key="index">
                   {{2023-index}}
                </option>
        </select>

        <p style="position: relative; top: -73%; left: 55%; font-family: 'Roboto', sans-serif;">Sexo</p>
        <select name="sexo" id="sexoALRL" style="position: relative; left: 50%; top: -73%; width: 150px; height:30px; border-radius: 10px;border: 2px solid #D9D9D9;">
            <option value="">
                Masculino
            </option>
            <option value="">
                Femenino
            </option>
            <option value="">
                Otro
            </option>
        </select>

        <button class="buttonregistrerALRL">Registrarse</button>

        <img src="@/assets/cerrar.png" id="imgALRL">

    </div>
</template>

<style>

#imgALRL{
    width: 20px;
    position: relative;
    top: -160%;
    left: 65%;
}

.registerALRL{
    width: 1200px;
    height: 700px;
    border: 1px solid black;
    border-radius: 10px;
    position: relative;
    top: 40px;
    left: 15%;
}


#input::placeholder{
    position: relative;
    left: 5%;
    color: #C2C2C2;
   }


 .buttonregistrerALRL{
    position: relative;
    border: 0px;
    color: white;
    font-size: 18px;
    background-color: #19376D;
    height: 50px;
    width: 200px;
    top: -74%;
    left: 60%;
    border-radius: 10px;
 }  
</style>