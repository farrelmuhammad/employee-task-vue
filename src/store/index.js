import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      // Your state properties go here
      tasks: [],
    };
  },
  mutations: {
    // Your mutations go here
    addTask(state, task) {
      state.tasks.push(task);
    },
    deleteTask(state, index) {
      state.tasks.splice(index, 1);
    },
  },
  actions: {
    // Your actions go here
  },
  getters: {
    // Your getters go here
  },
});

export default store;
