import { SAVE_COMMENT, FETCH_COMMENTS } from 'actions/types';

export default (state = [], action) => {
  switch(action.type) {
    case SAVE_COMMENT:
      return [...state, action.payload];
    case FETCH_COMMENTS:
      // debugger;
      const comments = action.payload.data.map(c => c.name);
      return [...state, ...comments];
    default:
      return state;
  }
}