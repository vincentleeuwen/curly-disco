import { saveComment } from 'actions';
import { SAVE_COMMENT } from 'actions/types';

describe('saveComment', () => {
  it('has a type of "SAVE_COMMENT"', () => {
    const action = saveComment('New Comment');
    expect(action.type).toBe(SAVE_COMMENT);
  })
  
  it('produces an action that has a payload of the new comments text', () => {
    const action = saveComment('New Comment');
    expect(action.payload).toBe('New Comment');
  })
});