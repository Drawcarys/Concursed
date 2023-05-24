<script setup>

</script>
<template>

<table id="vbmtablaCategoria">
 
  <tr>
    <td>John Doe</td>
    <td><button id="botonesTabla">Editar</button></td>
    <td><button id="botonesTabla">Eliminar</button></td>
  </tr>
  <tr>
    <td>John Doe</td>
    <td><button id="botonesTabla">Editar</button></td>
    <td><button id="botonesTabla">Eliminar</button></td>
  </tr>
  <tr>
    <td>John Doe</td>
    <td><button id="botonesTabla">Editar</button></td>
    <td><button id="botonesTabla">Eliminar</button></td>
  </tr>


</table>

</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500&display=swap');

#vbmtablaCategoria {
    font-family: Ubuntu;
    border-collapse: collapse;
    width: 100%;
}

#vbmtablaCategoria td,
#vbmtablaCategoria th {
    padding: 8px;
    width: 300px;
    height: 80px;
}

#vbmtablaCategoria td {
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