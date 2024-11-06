export default {
    // Cambia el stock de los juegos por el listado que se recibe
    changeStock(state, games) {
        state.games = games;
    },
    
    // Incrementa el stock del juego identificado por gameId
    increase(state, codigo) {
        const game = state.games.find(g => g.codigo === codigo); // Encuentra el juego
        if (game) {
            game.stock += 1; // Aumenta el stock en 1
        }
    },
    
    // Disminuye el stock del juego identificado por gameId
    decrease(state, codigo) {
        const game = state.games.find(g => g.codigo === codigo); // Encuentra el juego
        if (game && game.stock > 0) {
            game.stock -= 1; // Disminuye el stock en 1 solo si es mayor que 0
        }
    },
};
