const clearBtn = document.querySelector('#clearBtn');
const todoContainer = document.querySelector('.lists');

class Interactive {
  constructor(todos) {
    this.todos = todos;
  }

  toggleComplete = () => {
    document.body.addEventListener('click', (e) => {
      const listInput = document.querySelectorAll('.list-input');
      if (e.target.classList.contains('check')) {
        if (e.target.checked) {
          const id = e.target.dataset.set;
          listInput.forEach((todo) => {
            if (todo.dataset.set === id) {
              todo.classList.add('checked');
              const dataId = parseInt(e.target.dataset.set, 10);
              const data = this.todos.find((todo) => todo.index === dataId);
              data.completed = true;
              this.todos[dataId - 1] = data;
              localStorage.setItem('todos', JSON.stringify(this.todos));
            }
          });
        } else if (!e.target.checked) {
          const id = e.target.dataset.set;
          listInput.forEach((todo) => {
            if (todo.dataset.set === id) {
              todo.classList.remove('checked');
              const dataId = parseInt(e.target.dataset.set, 10);
              const data = this.todos.find((todo) => todo.index === dataId);
              data.completed = false;
              this.todos[dataId - 1] = data;
              localStorage.setItem('todos', JSON.stringify(this.todos));
            }
          });
        }
      }
    });
  }

  clearComplete = () => {
    clearBtn.addEventListener('click', (e) => {
      const data = this.todos.filter((todo) => todo.completed === false);
      e.preventDefault();
      if (data.length) {
        const newData = data.map((todo, index) => {
          todo.index = index + 1;
          return todo;
        });
        this.todos = newData;
        // update the DOM
        let result = '';
        this.todos.forEach((todo) => {
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
        // save data to local storage
        localStorage.setItem('todos', JSON.stringify(this.todos));
        window.location.reload();
      }
    });
  }
}

export default Interactive;