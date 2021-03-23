const qs = (selector, parent = document) => parent.querySelector(selector);
const qsa = (selector, parent = document) => parent.querySelectorAll(selector);
const onEvent = (event, el, fn) => el.addEventListener(event, fn);

const todoListEl = qs('.todoList');
const inputEl = qs('.todoInput');
const addBtnEl = qs('.addWrap .btn', qs('.container'));

const fetchData = (url, options = {}) => window.fetch(url).then((res) => res.json());

export { qs, qsa, onEvent, fetchData, todoListEl, inputEl, addBtnEl };
