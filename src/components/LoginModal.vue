<template>
   <form action="" id="form">
    <div class="modal dst-div" id="modal">
        <div class="modal-content">
            <div class="modal-header"><span @click="hide()" class="modal-close">&times;</span> </div>
            <div class="modal-body">
                <img class="dst-img-log" src="../assets/imgLogin.png">
                <h1 style="padding-top: 1%">Inicia Sesión</h1>
                <img src="../assets/logoLogin.png">
                <h4>¡Solo imagina lo que puedes lograr!</h4>
                <br>
                <h5>Correo Electronico</h5>
                <input class="dst-campo-login" type="email" id="dst-email" pattern=".+@globex\.com" size="30" required>
                <h5>Contraseña</h5>
                <input class="dst-campo-login" type="password" id="dst-pass" pattern=".+@globex\.com" size="30" required>
                <br>
                <button class="dst-button-entrar" type="submit">Entrar</button>
                <h5 class="modal-close" @click="AbrirRegistro()"  style="padding-top: 1% ">Olvidaste tu contraseña?</h5>
            </div>
        </div>
    </div>
   </form>
   <RegistroModal ref="RegistroModal">
   </RegistroModal>

</template>

<script>
import RegistroModal from './RegistroModal.vue'
export default {
    name: 'LoginModal',
    components:{
    RegistroModal
    },
    methods: {
        show() {
            const modal = document.getElementById('modal');
            modal.classList.add('show');
        },
        hide() {
            const modal = document.getElementById('modal');
            modal.classList.remove('show');
        },

        AbrirRegistro(){
            const registro = document.getElementById('RegistroModal');
            registro.classList.add('show');
        }

    }

};
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.dst-img-log {
    padding: 0%;
    width: 50%;
    height: 50%;
    float: left
}

.modal {
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

.modal.show {
    visibility: visible;
    opacity: 1;
}

.modal.show .modal-content {
    visibility: visible;
    opacity: 1;
    transform: scale(1);
}

.modal-content {
    text-align: center;
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

.modal-close {
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