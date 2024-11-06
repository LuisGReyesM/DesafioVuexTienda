<template>
  <div class="home">
    <h1>Bienvenido a la Tienda de Juegos</h1>
    <TiendaJuegos />  
  </div>
</template>

<script>
import TiendaJuegos from '../components/TiendaJuegos.vue';

export default {
  name: 'HomeView',
  components: {
    TiendaJuegos, 
  },
}
</script>

<style scoped>

</style>
