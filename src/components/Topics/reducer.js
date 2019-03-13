const initialState = {
  count: 0,
}

const aboutHandlers = {
  'TOPICS_ADD': state => ({ ...state, count: state.count + 1}),
  'TOPICS_SUB': state => ({ ...state, count: state.count - 1}),
};

const aboutReducer = (state = initialState, action) => (
  aboutHandlers[action.type]
    ? aboutHandlers[action.type](state, action)
    : state
);

export default aboutReducer;
