import changePlans from './changePlans.js';

const checkbox = document.getElementById('checkbox');

const getCheckboxState = () => {
  if (localStorage.getItem('checkboxState')) {
    checkbox.checked = JSON.parse(localStorage.getItem('checkboxState'));
    changePlans(JSON.parse(localStorage.getItem('checkboxState')));
  } else {
    checkbox.checked = false;
    changePlans(false);
  }
};

const setCheckboxState = (checkboxState) => {
  localStorage.setItem('checkboxState', JSON.stringify(checkboxState));
  changePlans(checkboxState);
};

export { getCheckboxState, setCheckboxState };
