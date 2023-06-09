<template>
    <form action="javascript:void(0);" id="form">
        <div class="RegistroModal dst-div" id="RegistroModal">
            <div class="registro-content">
                <div class="modalRegistro-header"><span @click="hide()" class="modalRegistro-close">&times;</span> </div>
                <div class="modal-body">
                    <h1 id="tituloALRL">Registrarse</h1>
                    <p id="text1ALRL">Es rápido y fácil
                    </p>

                    <div class="contenido-vbm">

                        <p id="text4ALRL">Correo Electrónico</p>
                        <input id="input3" placeholder="Correo electrónico" v-model="correo">
                        <p id="text5ALRL">Confirma tu correo electrónico</p>
                        <input id="input4" placeholder="Confirma tu correo electrónico" v-model="c_correo">

                        <p id="text6ALRL">Contraseña</p>
                        <input id="input5" placeholder="Contraseña" type="password" v-model="password">
                        <p id="text7ALRL">Confirma tu contraseña</p>
                        <input id="input6" placeholder="Confirma tu contraseña" type="password" v-model="c_password">
                    </div>
                        <div id="circuloALRL">
                            <img id="imgALRL" src="@/assets/Designer.png">
                        </div>
                    <button class="buttonregistrerALRL"
                        @click="RegistrarPersona(apellido1, apellido2, fecha, nombre, sexo, correo, password)">Registrarse</button>


                </div>
            </div>
        </div>
    </form>
</template>
 
<script scoped>

import gql from 'graphql-tag'

export default {
    name: 'RegistroModal',
    data() {
        return {
            email: '',
            nombre: '',
            password: '',
            apellido: '',
            dia: 0,
            mes: 0,
            año: 0,
            sexo: true,
            fecha: new Date(2001, 2, 3)
        }
    },
    methods: {
        show() {
            const RegistroModal = document.getElementById('RegistroModal');
            RegistroModal.classList.add('show');
        },
        hide() {
            const RegistroModal = document.getElementById('RegistroModal');
            RegistroModal.classList.remove('show');
        },

        RegistrarPersona() {
            this.$apollo.mutate({
                mutation: gql`mutation insert_usuario($correo:String!, $password:String!) {
                    insert_usuario(objects: {correo: $correo, pswrd: $password}) {
                    returning {
                        correo
                        }
                    }
                }`,
                variables: {
                    correo: this.correo, password: this.password
                },
            })
        },

    },

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
    z-index: 10;
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
    height: 70%;
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

.modal-body {
    height: 90%;
}

.contenido-vbm {
    margin-top: 3%;
}

#tituloALRL {
    font-family: 'Roboto', sans-serif;
    font-weight: 900;
    position: relative;
    left: -36%;
    top: -3%;
}


#text1ALRL {
    font-family: 'Roboto', sans-serif;

    position: relative;
    left: -40%;
    top: -3%;
}

#text2ALRL {
    font-family: 'Roboto', sans-serif;
    position: relative;
    left: -42%;
    top: 5%;
}

input {
    margin-bottom: 1%;
}

#input1 {
    border: 2px solid #D9D9D9;
    border-radius: 10px;
    width: 150px;
    height: 30px;
    font-size: 15px;
    position: relative;
    left: -40%;
    top: 5%;
}

#text4ALRL {
    font-family: 'Roboto', sans-serif;
    position: relative;
    left: -40%;
    top: -5%;
}

#input3 {
    border: 2px solid #D9D9D9;
    border-radius: 10px;
    width: 390px;
    height: 30px;
    font-size: 15px;
    position: relative;
    left: -32%;
    top: -5%;
}

#text5ALRL {
    font-family: 'Roboto', sans-serif;
    position: relative;
    left: -36%;
    top: -4%;
}

#input4 {
    border: 2px solid #D9D9D9;
    border-radius: 10px;
    width: 390px;
    height: 30px;
    font-size: 15px;
    position: relative;
    left: -32%;
    top: -4%;
}

#text6ALRL {
    font-family: 'Roboto', sans-serif;
    position: relative;
    left: -42%;
    top: -1%;
}

#input5 {
    border: 2px solid #D9D9D9;
    border-radius: 10px;
    width: 390px;
    height: 30px;
    font-size: 15px;
    position: relative;
    left: -32%;
    top: -2%;
}

#text7ALRL {
    font-family: 'Roboto', sans-serif;
    position: relative;
    left: -38.5%;
    top: 1%;
}

#input6 {
    border: 2px solid #D9D9D9;
    border-radius: 10px;
    width: 390px;
    height: 30px;
    font-size: 15px;
    position: relative;
    left: -32%;
    top: 0%;
}

#circuloALRL {
    width: 200px;
    height: 190px;
    border-radius: 50%;
    background-color: #77B1FF;
    position: relative;
    left: 50%;
    top: -80%;
    
    margin-top:17%;
}

#imgALRL {
    position: relative;
    left: -5%;
    top: -10%;
    width: 450px;

}


#text8ALRL {
    font-family: 'Roboto', sans-serif;
    position: relative;
    left: 21%;
    top: -85%;
}

.buttonregistrerALRL {
    position: absolute;
    border: 0px;
    color: white;
    font-size: 18px;
    background-color: #19376D;
    height: 50px;
    width: 200px;
    top: -85%;
    left: 20%;
    border-radius: 10px;
    margin-right:25%;
    margin-top:4%;
}

@media (min-width: 700px) {

    .registro-content {
        min-width: 50%;
        width: 80%;
        height: 90%;
        background: white;
        margin: auto;
        border-radius: 5px;
        visibility: hidden;
        opacity: 0;
        transform: scale(0.5);
        transition: opacity 0.4s ease-in-out, visibility 0.4s ease-in-, transform 0.4s ease-in-out;
    }

    #tituloALRL {
        font-family: 'Roboto', sans-serif;
        font-size: 25px;
        font-weight: 900;
        position: relative;
        left: 0%;
        top: -3%;
    }

    #text1ALRL {
        font-family: 'Roboto', sans-serif;
        font-size: 18px;
        position: relative;
        left: 0%;
        top: -3%;
    }

    #text2ALRL {
        font-family: 'Roboto', sans-serif;
        font-size: 18px;
        position: relative;
        left: -33%;
        top: -4%;
    }

    #input1 {
        border: 2px solid #D9D9D9;
        border-radius: 10px;
        width: 150px;
        height: 30px;
        font-size: 15px;
        position: relative;
        left: 10%;
        top: -6%;
    }

    #circuloALRL {
        width: 200px;
        height: 190px;
        border-radius: 50%;
        background-color: #77B1FF;
        position: relative;
        left: 50%;
        top: -80%;
    }

    #imgALRL {
        position: relative;
        left: -15%;
        top: -20%;
        width: 250px;
    }

    #text4ALRL {
        font-family: 'Roboto', sans-serif;
        font-size: 18px;
        position: relative;
        left: -27%;
        top: -6%;
    }

    #input3 {
        border: 2px solid #D9D9D9;
        border-radius: 10px;
        width: 390px;
        height: 30px;
        font-size: 15px;
        position: relative;
        left: 10%;
        top: -8%;
    }

    #text5ALRL {
        font-family: 'Roboto', sans-serif;
        font-size: 18px;
        position: relative;
        left: -19%;
        top: -7%;
    }

    #input4 {
        border: 2px solid #D9D9D9;
        border-radius: 10px;
        width: 390px;
        height: 30px;
        font-size: 15px;
        position: relative;
        left: 10%;
        top: -9%;
    }

    #text6ALRL {
        font-family: 'Roboto', sans-serif;
        font-size: 18px;
        position: relative;
        left: -32%;
        top: -8%;
    }

    #input5 {
        border: 2px solid #D9D9D9;
        border-radius: 10px;
        width: 390px;
        height: 30px;
        font-size: 15px;
        position: relative;
        left: 10%;
        top: -10%;
    }

    #text7ALRL {
        font-family: 'Roboto', sans-serif;
        font-size: 18px;
        position: relative;
        left: -23%;
        top: -9%;
    }

    #input6 {
        border: 2px solid #D9D9D9;
        border-radius: 10px;
        width: 390px;
        height: 30px;
        font-size: 15px;
        position: relative;
        left: 10%;
        top: -11%;
    }

    #text8ALRL {
        font-family: 'Roboto', sans-serif;
        font-size: 18px;
        position: relative;
        left: -25%;
        top: -40%;
    }


    .buttonregistrerALRL {
        position: relative;
        border: 0px;
        color: white;
        font-size: 16px;
        background-color: #19376D;
        height: 35px;
        width: 180px;
        top: -43%;
        left: 10%;
        border-radius: 10px;
    }

    @media (min-width: 1000px) {
        .registro-content {
            min-width: 50%;
            width: 70%;
            height: 70%;
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

        .modal-body {
            height: 90%;
        }

        #tituloALRL {
            font-family: 'Roboto', sans-serif;
            font-size: 40px;
            font-weight: 900;
            position: relative;
            left: -36%;
            top: -3%;
        }


        #text1ALRL {
            font-family: 'Roboto', sans-serif;
            font-size: 20px;
            position: relative;
            left: -40%;
            top: -3%;
        }

        #text2ALRL {
            font-family: 'Roboto', sans-serif;
            position: relative;
            left: -43%;
            top: -2%;
        }

        #input1 {
            border: 2px solid #D9D9D9;
            border-radius: 10px;
            width: 150px;
            height: 30px;
            font-size: 15px;
            position: relative;
            left: -40%;
            top: -4%;
        }

        #input2 {
            border: 2px solid #D9D9D9;
            border-radius: 10px;
            width: 150px;
            height: 30px;
            font-size: 15px;
            position: relative;
            left: -20%;
            top: -18.5%;
        }

        #text4ALRL {
            font-family: 'Roboto', sans-serif;
            position: relative;
            left: -39.5%;
            top: -18%;
        }

        #input3 {
            border: 2px solid #D9D9D9;
            border-radius: 10px;
            width: 390px;
            height: 30px;
            font-size: 15px;
            position: relative;
            left: -30%;
            top: -20%;
        }

        #text5ALRL {
            font-family: 'Roboto', sans-serif;
            position: relative;
            left: -35.5%;
            top: -19%;
        }

        #input4 {
            border: 2px solid #D9D9D9;
            border-radius: 10px;
            width: 390px;
            height: 30px;
            font-size: 15px;
            position: relative;
            left: -30%;
            top: -21%;
        }

        #text6ALRL {
            font-family: 'Roboto', sans-serif;
            position: relative;
            left: -42%;
            top: -20%;
        }

        #input5 {
            border: 2px solid #D9D9D9;
            border-radius: 10px;
            width: 390px;
            height: 30px;
            font-size: 15px;
            position: relative;
            left: -30%;
            top: -22%;
        }

        #text7ALRL {
            font-family: 'Roboto', sans-serif;
            position: relative;
            left: -38%;
            top: -20%;
        }

        #input6 {
            border: 2px solid #D9D9D9;
            border-radius: 10px;
            width: 390px;
            height: 30px;
            font-size: 15px;
            position: relative;
            left: -30%;
            top: -23%;
        }

        #circuloALRL {
            width: 310px;
            height: 300px;
            border-radius: 50%;
            background-color: #77B1FF;
            position: relative;
            left: 55%;
            top: -115%;
        }

        #imgALRL {
            position: relative;
            left: -5%;
            top: -10%;
            width: 350px;
        }

        #text8ALRL {
            font-family: 'Roboto', sans-serif;
            position: relative;
            left: 20%;
            top: -110%;
        }

        .buttonregistrerALRL {
            position: relative;
            border: 0px;
            color: white;
            font-size: 18px;
            background-color: #19376D;
            height: 50px;
            width: 200px;
            top: -112%;
            left: 30%;
            border-radius: 10px;
        }
    }

}
</style>