import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import food from './modules/food'

// import isLogin from './modules/isLogin'
import loading from './modules/loading'


Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        user,
        food,
        loading,

    }
})
