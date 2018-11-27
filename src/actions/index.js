import { SAVE_COMMENT } from 'actions/types';

export const saveComment = comment => ({ type: SAVE_COMMENT, payload: comment });