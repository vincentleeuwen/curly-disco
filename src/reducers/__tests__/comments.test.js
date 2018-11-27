import commentsReducer from 'reducers/comments';
import { SAVE_COMMENT } from 'actions/types';

it('handles actions of type SAVE_COMMENT', () => {
  const comment = 'comment';
  const action = {
    type: SAVE_COMMENT,
    payload: comment,
  }
  expect(commentsReducer([], action)).toEqual([comment]);
});

it('handles action with unknown type', () => {
  const action = {
    type: 'UNKNOWN',
    payload: 'foo bar'
  }
  expect(commentsReducer([], action)).toEqual([]);
});