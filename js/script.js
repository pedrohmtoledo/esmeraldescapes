import { experiences } from './experiences.js';
import { loadExperiences } from './dom.js';
import { filterHandler } from './handlers.js';

const categoryFilter = document.querySelector('#categoryfilter');
const priceFilter = document.querySelector('#priceFilter');

categoryFilter.addEventListener('change', () => {
  filterHandler(categoryFilter.value.toLowerCase(), priceFilter.value);
});

priceFilter.addEventListener('change', () => {
  filterHandler(categoryFilter.value.toLowerCase(), priceFilter.value);
});

loadExperiences(experiences);
