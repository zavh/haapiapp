import { ADD_ARTICLE, REMOVE_ARTICLE, EDIT_ARTICLE, ADD_SESSION } from "../constants/action-types";
const initialState = {
  session: {}
};
function rootReducer(state = initialState, action) {
  if (action.type === ADD_ARTICLE) {
    return Object.assign({}, state, {
      articles: state.articles.concat(action.payload)
    });
  }
  if (action.type === REMOVE_ARTICLE) {
    const prunedIDS = state.articles.filter((item,index) => {
      if(index !== parseInt(action.payload.id))
        return item;
      return null;
    });
    return Object.assign({}, {
      articles: prunedIDS
    });
  }
  if (action.type === EDIT_ARTICLE) {
    //console.log(action);
    let articles = [...state.articles];
    articles[action.payload.index]['title'] = 'Edited';
    return Object.assign({}, {
      articles: articles
    });
  }
  if (action.type === ADD_SESSION){
    return Object.assign({}, state, {
      session: action.payload
    });
  }

  return state;
}
export default rootReducer;
