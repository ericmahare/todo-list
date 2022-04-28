import Interactive from './interactive.js';
import todosData from './todoList.js';
import addData from './Ui.js';
// get dom elements
const todoContainer = document.querySelector('.lists');
const input = document.querySelector('.input');
const form = document.querySelector('#todo-form');

let todos = todosData;
// update Dom function
const upDateFunc = (todos) => {
  let result = '';
  todos.forEach((todo) => {
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
    todoContainer.innerHTML = result;
  });
};

class Rud {
  // Read todos
  static read = () => {
    todoContainer.innerHTML = addData();
  }

  // update todos
  static update = () => {
    const move = document.body.querySelectorAll('.move');
    const trash = document.body.querySelectorAll('.trash');
    const lists = document.body.querySelectorAll('.list-input');
    const singleTodos = document.body.querySelectorAll('.single-todo');
    // update function
    const updateTodo = (event, set1, set2, bgC) => {
      document.body.addEventListener(event, (e) => {
        const id = e.target.dataset.set;
        lists.forEach((list) => {
          if (list.dataset.set === id) {
            list.style.backgroundColor = bgC;
            move.forEach((element) => {
              if (element.dataset.set === id) {
                element.style.display = set1;
              }
            });
            trash.forEach((element) => {
              if (element.dataset.set === id) {
                element.style.display = set2;
              }
            });
            singleTodos.forEach((element) => {
              if (element.dataset.set === id) {
                element.style.backgroundColor = bgC;
              }
            });
          }
        });
      });
    };
    // focusout event
    updateTodo('focusout', 'block', 'none', '');
    // click event
    updateTodo('click', 'none', 'block', '#f5efc6');

    document.body.addEventListener('submit', (e) => {
      e.preventDefault();
      if (e.target.classList.contains('upt-form')) {
        const id = parseInt(e.target.dataset.set, 10);
        const data = todos.find((todo) => todo.index === id);
        const lsInput = document.querySelectorAll('.list-input');
        lsInput.forEach((input) => {
          if (Number(input.dataset.set) === id) {
            if (input.value !== '') {
              const info = `${input.value}`;
              data.description = info;
              todos[id - 1] = data;
              // update the DOM
              upDateFunc(todos);
              this.update();
              localStorage.setItem('todos', JSON.stringify(todos));
            }
          }
        });
      }
    });
  }

  // add todos
  static addTodos = () => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      e.preventDefault();
      if (input.value === '') {
        todos = [...todos];
      } else {
        const newTodo = {
          index: todos.length + 1,
          description: input.value,
          completed: false,
        };
        todos.push(newTodo);
        // clear the input
        input.value = '';
        // update the DOM
        upDateFunc(todos);
        this.update();
        localStorage.setItem('todos', JSON.stringify(todos));
      }
    });
  }

  // delete todos
  static delete = () => {
    document.body.addEventListener('click', (e) => {
      if (e.target.classList.contains('single-todo')) {
        const id = parseInt(e.target.dataset.set, 10);
        const newData = todos.filter((todo) => todo.index !== id);
        const datas = newData.map((data, idx) => ({ ...data, index: idx + 1 }));
        todos = datas;
        // store data to local storage
        localStorage.setItem('todos', JSON.stringify(datas));
        // update UI
        upDateFunc(todos);
        window.location.reload();
      }
    });
  };

  static toggleComplete = () => {
    const interactive = new Interactive(todos);
    interactive.toggleComplete();
  }

  static clearCompleted = () => {
    // get the clear function
    const clear = new Interactive(todos);
    clear.clearComplete();
  }
}

export default Rud;