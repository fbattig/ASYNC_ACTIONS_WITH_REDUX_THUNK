
import { combineReducers } from 'redux';
import { fetchPosts } from './postsReducer';

export default combineReducers({
    posts: fetchPosts  
});