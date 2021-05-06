const masterPrice = document.getElementById('masterPrice');

const monthlyPrice = () => {
  masterPrice.textContent = '39.99';
};

const anuallyPrice = () => {
  masterPrice.textContent = '399.99';
};

const masterPlan = (planType) => {
  planType === 'monthly' ? monthlyPrice() : anuallyPrice();
};

export default masterPlan;
