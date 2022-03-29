// Подключение выпадающего меню на choices.js
import Choices from 'choices.js';
const element = document.getElementById('broadcastsAuthorsSelect');
const choices = new Choices(element, {
  searchEnabled: false,
  itemSelectText: '',
});
