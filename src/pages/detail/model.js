export default {
  namespace: 'detail',
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
