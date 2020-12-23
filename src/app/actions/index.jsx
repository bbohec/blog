import axios from 'axios';
let nextTodoId = 2;

export const addTodo = text => {
  //let State = getState();
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  }
}

export const setVisibilityFilter = filter => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

export const toggleTodo = id => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}

export const getTodos = () => dispatch => {
  axios.get(`https://api.cosmicjs.com/v1/your-bucket-slug-name/object-type/tasks`)
    .then((response) => {
      return response.data;
    })
    .then((tasks) => {
      dispatch(getTasks(tasks))
    })
    .catch((err) => {
      console.error.bind(err);
    })
}