import axios from "axios";

export default {
    async getListGames({ commit }) {
        try {
            const response = await axios.get('/src/db/juegos.json');

            // Convertir el stock a número para cada juego
            const gamesWithNumericStock = response.data.map(game => ({
                ...game,
                stock: Number(game.stock) // Convierte el stock a número
            }));
            
            commit('changeStock', gamesWithNumericStock); // Guarda los juegos en el estado
        } catch (error) {
            console.error("Error al obtener el listado de juegos:", error);
        }
    },

    increaseStock({ commit }, codigo) {
        commit("increase", codigo); // Llama a la mutación para incrementar el stock
    },

    decreaseStock({ commit }, codigo) {
        commit("decrease", codigo); // Llama a la mutación para decrementar el stock
    },
};






