<template>
    <form action="javascript:void(0);" id="form">
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
                    <input class="dst-campo-login" type="email" id="dst-email" pattern=".+@globex\.com" size="30"
                        v-model="correo" required>
                    <h5>Contraseña</h5>
                    <input class="dst-campo-login" type="password" id="dst-pass" pattern=".+@globex\.com" size="30"
                        v-model="password" required>
                    <br>
                    <p>
                        Tipo de usuario:
                        <select class="dst-campo-us" name="dst-tipoususario" id="dst-tipoususario" v-model="tipoUser">
                            <option value='usuario'>usuario</option>
                            <option value='Juez'>Juez</option>
                            <option value='Administrador'>Administrador</option> 
                        </select>
                    </p>
                    <button class="dst-button-entrar" type="submit" @click="AuthChose(tipoUser)">Entrar</button>
                    <h5 class="modal-close" @click="AbrirRegistro()" style="padding-top: 1% ">¿No tienes cuenta? Crea una
                    </h5>
                </div>
            </div>
        </div>
    </form>
    <RegistroModal ref="RegistroModal">
    </RegistroModal>
</template>

<script>
import gql from 'graphql-tag'
import RegistroModal from './RegistroModal.vue'
export default {
    name: 'LoginModal',
    data() {
        return {
            correo: '',
            login: false,
            nombre: '',
            password: '',
            usuario: [],
            juez: [],
            admin: [],
            tipoUser: 'usuario'
        }
    },
    apollo: {
        usuario: {
            query: gql`query loginResult($password: String!, $correo: String!) {
                usuarios(where: {pswrd: {_eq: $password}, _and: {correo: {_eq: $correo}}}) {
                    correo
                }
            }`,
            variables() {
                return {
                    password: this.password, correo: this.correo
                }
            }
        },
        juez: {
            query: gql`query loginResult($password: String!, $correo: String!) {
                juez(where: {pswrd: {_eq: $password}, _and: {correo: {_eq: $correo}}}) {
                    correo
                }
            }`,
            variables() {
                return {
                    password: this.password, correo: this.correo
                }
            }
        },
        admin: {
            query: gql`query loginResult($password: String!, $correo: String!) {
                admin(where: {pswrd: {_eq: $password}, _and: {correo: {_eq: $correo}}}) {
                    correo
                }
            }`,
            variables() {
                return {
                    password: this.password, correo: this.correo
                }
            }
        }
    },
    components: {
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
        redireccionarRegistrarUsuario() {
            this.$router.push('/RegistroModal');
        },

        AbrirRegistro() {
            this.hide();
            const registro = document.getElementById('RegistroModal');
            registro.classList.add('show');
        },
        AuthUsuario() {
            if (this.usuario.length > 0) {
                this.$router.push('/RegistrarProyecto');
            }
            else {
                console.log(this.usuario.length);
            }
        },
        AuthJuez() {
            if (this.juez.length > 0) {
                this.$router.push('/JuezPantalla');
            }
            else {
                console.log(this.usuario.length);
            }
        },
        AuthAdmin() {
            if (this.admin.length > 0) {
                this.$router.push('/PantallaAdministrador');
            }
            else {
                console.log(this.usuario.length);
            }
        },
        AuthChose(op){
            switch(op){
                case 'usuario':
                console.log(this.usuario.length);
                    this.AuthUsuario()
                    console.log(op);
                    break;
                case 'Juez':
                console.log(this.usuario.length);
                    this.AuthJuez()
                    console.log(op);
                    break;
                case 'Administrador':
                console.log(this.usuario.length);
                    this.AuthAdmin()
                    console.log(op);
                    break;
                default:
                    console.log(op);
                    break;
            }
        }


    },
};
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.dst-campo-us {
  -moz-border-radius: 10px;
  -webkit-border-radius: 10px;
  border-radius: 15px;
  background: #f7f7ff;
  border: 1px solid rgba(0, 0, 0, 0.17);
  padding: 0 3px 0 3px;
  width: 15%;
  height: 25px;
  margin-left: 1%;
  margin-right: 1%;
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
    padding: 0 0px 0px 0px;
    width: 25%;
    height: 30px;
    margin-left: 1%;
    margin-right: 1%;
    margin: 1%;
}

.dst-button-entrar {
    width: 20%;
    height: 42px;
    margin-top: 1%;
    color: white;
    background: #0B2447;
    border-radius: 10px;
}
</style>