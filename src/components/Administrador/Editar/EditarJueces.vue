<script setup>

</script>
<template>
  <table id="vbmtablaJueces">
    <tr>
      <th>Nombre</th>
      <th>Área</th>
      <th>Categoría</th>
      <th>Sede</th>
      <th></th>
      <th></th>
    </tr>
    <tr>
      <td>John Doe</td>
      <td>Medicina y Salud</td>
      <td>Preescolar</td>
      <td>El Mante</td>
      <td><button id="botonesTabla">Editar</button></td>
      <td><button id="botonesTabla">Eliminar</button></td>
    </tr>
    <tr>
      <td>John Doe</td>
      <td>Medicina y Salud</td>
      <td>Preescolar</td>
      <td>El Mante</td>
      <td><button id="botonesTabla">Editar</button></td>
      <td><button id="botonesTabla">Eliminar</button></td>
    </tr>
    <tr>
      <td>John Doe</td>
      <td>Medicina y Salud <br></td>
      <td>Preescolar</td>
      <td>El Mante</td>
      <td><button id="botonesTabla">Editar</button></td>
      <td><button id="botonesTabla">Eliminar</button></td>
    </tr>


  </table>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500&display=swap');

#vbmtablaJueces {
  font-family: Ubuntu;
  border-collapse: collapse;
  width: 100%;
  margin-top:5%;
  margin-left:5%;

}

#vbmtablaJueces td,
#vbmtablaJueces th {
  padding: 8px;
  width: 300px;
  height: 80px;
}

#vbmtablaJueces td {
  border-bottom: 1px solid #333D48;
}

#botonesTabla {
  width: 150px;
  height: 50px;

  font-family: Poppins;
  background: #30649D;
  color: #F7F7FF;
  border: none;
  border-radius: 6px;
}
</style>