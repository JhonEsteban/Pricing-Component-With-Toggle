const basicPrice = document.getElementById('basicPrice');

const monthlyPrice = () => {
  basicPrice.textContent = '19.99';
};

const anuallyPrice = () => {
  basicPrice.textContent = '199.99';
};

const basicPlan = (planType) => {
  planType === 'monthly' ? monthlyPrice() : anuallyPrice();
};

export default basicPlan;
