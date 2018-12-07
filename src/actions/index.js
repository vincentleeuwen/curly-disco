import { SAVE_COMMENT, FETCH_COMMENTS, CHANGE_AUTH } from 'actions/types';
import axios from 'axios';

export const saveComment = comment => ({ type: SAVE_COMMENT, payload: comment });

export const fetchComments = () => {
  const url = 'http://jsonplaceholder.typicode.com/comments';
  const response = axios.get(url);

  return {
    type: FETCH_COMMENTS,
    payload: response
  }
};

export const changeAugh = isLoggedIn => ({ type: CHANGE_AUTH, payload: isLoggedIn })
