<template>
  <div class="home">
    <h1>Bienvenido a la Tienda de Juegos</h1>
    <TiendaJuegos />
    
    <!-- Agregar enlaces de navegación -->
    <router-link to="/">Inicio</router-link>
    <router-link to="/about">Acerca de</router-link>
  </div>
</template>

<script>
import TiendaJuegos from '../components/TiendaJuegos.vue';

export default {
  name: 'HomeView',
  components: {
    TiendaJuegos, // Asegúrate de que TiendaJuegos esté correctamente importado
  },
}
</script>

<style scoped>
/* Estilos opcionales aquí */
</style>
