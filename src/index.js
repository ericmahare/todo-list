import './main.css';
import addData from './modules/Ui.js';

// get DOM elements
const todoContainer = document.querySelector('.lists');
todoContainer.innerHTML = addData();