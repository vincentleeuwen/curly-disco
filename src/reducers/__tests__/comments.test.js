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