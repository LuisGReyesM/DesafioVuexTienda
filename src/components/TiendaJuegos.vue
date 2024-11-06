
<template>
  <div class="bordered-div">
    <h1 class="centered-title">Tienda 32 Bits</h1>
    <h3 class="centered-subtitle">Listado de juegos</h3>
      <table v-if="games && games.length" class="centered-table">
          <thead>
              <tr>
                  <th>ID</th>
                  <th>NOMBRE</th>
                  <th>STOCK</th>
                  <th>PRECIO</th>
                  <th>COLOR</th>
                  <th>ACCIONES</th> 
              </tr>
          </thead>
          <tbody>
              <tr v-for="game in games" :key="game.id">
                  <td>{{ game.codigo }}</td>
                  <td>{{ game.nombre.toUpperCase() }}</td>
                  <td>{{ game.stock }}</td>
                  <td>{{ game.precio }}</td>
                  <td>{{ game.color.toUpperCase() }}</td>

                  <td>
                    <div class="button-group">
                          <button @click="increaseStock(game.codigo)">+</button>
                          <button @click="decreaseStock(game.codigo)">-</button>
                      </div>
                  </td>
              </tr>
          </tbody>
      </table>
      <p v-else>No hay juegos disponibles.</p>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
    name: "TiendaJuegos",
    computed: {
        //... es un spread operador ( separa cada uno de los elementos)
        ...mapState(["games"]),
    },
    methods: {
        ...mapActions(["getListGames", "increaseStock", "decreaseStock"]),      
    }, 
    mounted() {
        this.getListGames(); // Llama a la acción para obtener el listado de juegos cuando el componente se monta
    },
}
</script>

<style scoped>

.bordered-div {
    border: 2px solid #000; /* 2 píxeles de grosor, sólido, color negro */
    padding: 10px; /* Espaciado interno */
    margin: 0 auto; /* Centra la tabla horizontalmente */
    max-width: 800px; /* Limita el ancho de la div */
    padding-bottom: 30px;

    
}

.centered-title, .centered-subtitle {
    text-align: center; /* Centra el texto */
}

.centered-table {  
    margin: 0 auto; /* Centra la tabla horizontalmente */
    border-collapse: collapse; /* Colapsa los bordes */
}

th, td {
    padding: 8px; /* Espaciado interno */
    text-align: left; /* Alineación de texto */
    border: 1px solid #ddd; /* Borde para celdas */
}

th {
    background-color: #f2f2f2; /* Color de fondo para los encabezados */
}

.button-group {
    display: flex; /* Usa flexbox para alinear los botones en fila */
    gap: 10px; /* Espacio entre los botones */
}

button {
    background-color: #4CAF50; /* Color de fondo del botón */
    color: white; /* Color del texto */
    border: none; /* Sin borde */
    padding: 5px 10px; /* Espaciado interno del botón */
    cursor: pointer; /* Cambia el cursor al pasar por encima */
}

button:hover {
    background-color: #45a049; /* Color de fondo del botón al pasar por encima */
}
</style>