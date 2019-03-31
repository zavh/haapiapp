import { ADD_ARTICLE, REMOVE_ARTICLE, EDIT_ARTICLE, ADD_SESSION } from "../constants/action-types";


export function addArticle(payload) {
  return { type: ADD_ARTICLE, payload };
};

export function removeArticle(payload) {
  return { type: REMOVE_ARTICLE, payload };
};

export function editArticle(payload) {
  return { type: EDIT_ARTICLE, payload };
};

export function addSession(payload) {
  return { type: ADD_SESSION, payload };
};
