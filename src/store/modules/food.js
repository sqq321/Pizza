const state = {
    food: {},
};
const getters = {
    food: state => state.food,

};
const mutations = {
    setFood: (state, food) => state.food = food
};
const actions = {
    setFoodAsync: ({ commit }, food) => commit("setFood", food)
};

export default {
    state, getters, mutations, actions
}
