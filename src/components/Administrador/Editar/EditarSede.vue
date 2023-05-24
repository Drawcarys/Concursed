<script setup>

</script>
<template>
    <table id="vbmTablaSede">

        <tr>
            <td>John Doe</td>
            <td><button id="vbmbotonesTabla">Editar</button></td>
            <td><button id="vbmbotonesTabla">Eliminar</button></td>
        </tr>
        <tr>
            <td>John Doe</td>
            <td><button id="vbmbotonesTabla">Editar</button></td>
            <td><button id="vbmbotonesTabla">Eliminar</button></td>
        </tr>
        <tr>
            <td>John Doe</td>
            <td><button id="vbmbotonesTabla">Editar</button></td>
            <td><button id="vbmbotonesTabla">Eliminar</button></td>
        </tr>


    </table>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500&display=swap');

#vbmTablaSede {
    font-family: Ubuntu;
    border-collapse: collapse;
    width: 100%;
}

#vbmTablaSede td,
#vbmTablaSede th {
    padding: 8px;
    width: 300px;
    height: 80px;
}

#vbmTablaSede td {
    border-bottom: 1px solid #333D48;
}

#vbmbotonesTabla {
    width: 150px;
    height: 50px;

    font-family: Poppins;
    background: #30649D;
    color: #F7F7FF;
    border: none;
    border-radius: 6px;
}
</style>