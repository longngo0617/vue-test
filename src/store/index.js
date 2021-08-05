import { createStore } from "vuex";

export default createStore({
  state: {
    count:0,
  },
  mutations: {
    INC(state,by) {
      state.count += by
    }
  },
});
