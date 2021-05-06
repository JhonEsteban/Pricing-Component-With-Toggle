import basicPlan from './plans/basicPlan.js';
import masterPlan from './plans/masterPlan.js';
import professionalPlan from './plans/professionalPlan.js';

const anuallyPlan = () => {
  const planType = 'anually';

  basicPlan(planType);
  professionalPlan(planType);
  masterPlan(planType);
};

const monthlyPlan = () => {
  const planType = 'monthly';

  basicPlan(planType);
  professionalPlan(planType);
  masterPlan(planType);
};

const changePlans = (checkboxState) => {
  checkboxState ? monthlyPlan() : anuallyPlan();
};

export default changePlans;
