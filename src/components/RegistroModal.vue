<template>
    <form action="" id="form">
        <div class="RegistroModal dst-div" id="RegistroModal">
            <div class="registro-content">
                <div class="modalRegistro-header"><span @click="hide()" class="modalRegistro-close">&times;</span> </div>
                <div class="modal-body">
                    <h1 id="tituloALRL">Registrarse</h1>
                    <p  id="text1ALRL">Es rápido y fácil
                    </p>
                    <p  id="text2ALRL">Nombre</p>
                    <input id="input1" type="Nombre"
                        placeholder="Nombre">
                    <p id="text3ALRL" style="font-family: 'Roboto', sans-serif; position: relative; left: 30%; top: -7%;">Apellido</p>
                    <input id="input2" type="Nombre"
                        style="border: 2px solid #D9D9D9; border-radius: 10px; width: 150px; height: 30px; font-size: 15px; position: relative; left: 26%; top: -7%;"
                        placeholder="Apellido">
                </div>
            </div>
        </div>
    </form>
</template>
 
<script>

export default {
    name: 'RegistroModal',
    methods: {
        show() {
            const RegistroModal = document.getElementById('RegistroModal');
            RegistroModal.classList.add('show');
        },
        hide() {
            const RegistroModal = document.getElementById('RegistroModal');
            RegistroModal.classList.remove('show');
        },
    }

};
</script>
 
<style scoped>
.RegistroModal {
    position: fixed;
    display: flex;
    align-items: center;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.4);
    visibility: hidden;
    opacity: 0;
    transition: opacity 0.4s ease-in-out, visibility 0.4s ease-in-out;
}

.RegistroModal.show {
    visibility: visible;
    opacity: 1;
}

.RegistroModal.show .registro-content {
    visibility: visible;
    opacity: 1;
    transform: scale(1);
}

.registro-content {
    min-width: 50%;
    width: 70%;
    background: white;
    margin: auto;
    border-radius: 5px;
    visibility: hidden;
    opacity: 0;
    transform: scale(0.5);
    transition: opacity 0.4s ease-in-out, visibility 0.4s ease-in-, transform 0.4s ease-in-out;
}
.modalRegistro-header {
    display: flex;
    justify-content: end;
    margin: 0px 10px;
}
.modalRegistro-close {
    cursor: pointer;
}

#tituloALRL{
    font-family: 'Roboto', sans-serif;
    font-weight: 900;  
    position: relative; 
    left: -36%; 
    top: -3%;
}

#text1ALRL{
    font-family: 'Roboto', sans-serif;
    
    position: relative; 
    left: -40%; 
    top: -3%;
}

#text2ALRL{
    font-family: 'Roboto', sans-serif;
     position: relative; 
     left: -42%; 
     top: 5%;
}

#input1{
    border: 2px solid #D9D9D9; 
    border-radius: 10px; 
    width: 150px; 
    height: 30px; 
    font-size: 15px;
     position: relative; 
     left: -40%; 
     top: 5%;
}


</style>