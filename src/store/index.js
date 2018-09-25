import Vue from "vue";
import Vuex from "vuex";
import results from "./modules/results";
import anime from "./modules/anime";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        results,
        anime
    }
});
