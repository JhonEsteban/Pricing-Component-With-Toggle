const professionalPrice = document.getElementById('professionalPrice');

const monthlyPrice = () => {
  professionalPrice.textContent = '24.99';
};

const anuallyPrice = () => {
  professionalPrice.textContent = '249.99';
};

const professionalPlan = (planType) => {
  planType === 'monthly' ? monthlyPrice() : anuallyPrice();
};

export default professionalPlan;
