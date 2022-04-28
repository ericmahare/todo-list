import './main.css';
import Rud from './modules/rud.js';
// load data to the document
document.addEventListener('DOMContentLoaded', () => {
  Rud.read();
  Rud.update();
  Rud.addTodos();
  Rud.delete();
  Rud.toggleComplete();
  Rud.clearCompleted();
});