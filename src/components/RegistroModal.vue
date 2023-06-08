<template>
    <form action="" id="form">
     <div class="RegistroModal dst-div" id="RegistroModal">
        <div class="registro-content">
            <div class="modalRegistro-header"><span @click="hide()" class="modalRegistro-close">&times;</span> </div>
            <div class="modal-body">
                <h1 style="">Registrarse</h1>
                
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
    align-items: center;
    padding: 5px 10px;
}

.modalRegistro-close{
    cursor: pointer;
}

</style>