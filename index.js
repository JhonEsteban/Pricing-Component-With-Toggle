import { getCheckboxState, setCheckboxState } from './js/localStorage.js';

const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('change', (e) => {
  const isChecked = e.target.checked;
  setCheckboxState(isChecked);
});

window.addEventListener('DOMContentLoaded', getCheckboxState);
