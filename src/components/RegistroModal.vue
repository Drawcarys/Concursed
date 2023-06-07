<template>
    <form action="" id="form">
     <div class="RegistroModal dst-div" id="RegistroModal">
        <div class="modal-content">
            <div class="modal-header"><span @click="hide()" class="modal-close">&times;</span> </div>
            <div class="modal-body">
                <h1 style="padding-top: 1% ">Registrarse</h1>
                
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

.RegistroModal.show .modal-content {
    visibility: visible;
    opacity: 1;
    transform: scale(1);
}

.modal-content {
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


.modal-header {
    display: flex;
    justify-content: end;
    align-items: center;
    padding: 5px 10px;
    border-bottom: 1px solid #eee;
}

.modal-close{
    cursor: pointer;
}

.title-login {
    margin-top: 1%;
}

.dst-campo-login {
    -moz-border-radius: 10px;
    -webkit-border-radius: 10px;
    border-radius: 6px;
    background: #f7f7ff;
    border: 1px solid rgba(0, 0, 0, 0.17);
    padding: 0 4px 0px 4px;
    width: 25%;
    height: 30px;
    margin-left: 1%;
    margin-right: 1%;
    margin: 2%;
}

.dst-button-entrar {
    width: 20%;
    height: 42px;
    color: white;
    background: #0B2447;
    border-radius: 10px;
}
</style>