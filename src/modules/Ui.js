import todosData from './todoList.js';

const addData = () => {
  let result = '';
  todosData.forEach((todo) => {
    const { description, index, completed } = todo;
    const data = `
      <li class="single-todo" data-set=${index}>
        <span class="todo-value">
          <input type="checkbox" class="check" data-set=${index} ${completed ? 'checked' : ''}>
         <form class="upt-form" data-set=${index}> 
            <input type="text" class="input list-input ${completed ? 'checked' : ''}" value="${description}" data-set=${index}>
          </form>
        </span>
          <span class="move" data-set=${index}><i class="fa-solid fa-ellipsis-vertical"></i></span>
          <span class="trash" data-set=${index}><i class="fa-solid fa-trash del"></i></span>
      </li>
    `;
    result += data;
  });
  return result;
};

export default addData;