import { createStore } from "vuex";
import state from "./modules/juegosState";
import actions from "./modules/juegosActions";
import mutations from "./modules/juegosMutations";

export default createStore({
    state,
    actions,
    mutations
});