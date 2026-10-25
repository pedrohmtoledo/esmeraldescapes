import { loadExperiences } from './dom';

export function filterHandler(category, price) {
  console.log('test');
  let filteredExperiences = experiences.filter((exp) => {
    if (category === 'all') return exp;
    return exp.category === category;
  });

  filteredExperiences = filteredExperiences.filter((exp) => {
    if (price === '0') {
      return exp;
    } else if (price === '1') {
      return exp.price <= 150;
    } else if (price === '2') {
      return exp.price > 150 && exp.price <= 400;
    } else if (price === '3') {
      return exp.price > 400;
    }
  });

  loadExperiences(filteredExperiences);
}
