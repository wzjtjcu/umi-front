export default {
  namespace: 'home',
  state: {},
  effects: {},
  reducers: {
    changeState(state, { payload = {} }) {
      return {
        ...state,
        ...payload,
      };
    },
  },
};
