import JsonPlaceHolder from '../apis/JsonPlaceHolder';

export const fetchPosts = () =>  async dispatch => {
    const response = await JsonPlaceHolder.get('/posts');
    dispatch({  type: 'FETCH_POSTS',   payload: response.data  })
};
  

// export const fetchPosts = () => {
//   return async function (dispatch, getState) {

//     const response = await JsonPlaceHolder.get('/posts');
    
//     dispatch({
//       type: 'FETCH_POSTS',
//       payload: response.data

//     })
//   };
// };