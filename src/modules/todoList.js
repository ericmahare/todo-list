const getTodos = () => JSON.parse(localStorage.getItem('todos'));
const todosData = getTodos() === null ? [] : getTodos();

export default todosData;