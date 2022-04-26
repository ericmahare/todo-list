import todos from './todoList.js';

const addData = () => {
  let result = '';
  todos.forEach((todo) => {
    const { description } = todo;
    const data = `
      <li class="todo-value flex">
        <span><input type="checkbox" class="check">${description}</span>
        <span class="move"><i class="fa-solid fa-ellipsis-vertical"></i></span>
      </li>
    `;
    result += data;
  });
  return result;
};

export default addData;