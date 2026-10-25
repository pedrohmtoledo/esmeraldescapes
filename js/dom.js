const exp = document.querySelector('#experiences');
const cards = document.createElement('div');
cards.setAttribute('class', 'cards');

export function loadExperiences(listOfExperiences) {
  cards.innerHTML = '';

  listOfExperiences.forEach((exp) => {
    const card = document.createElement('div');
    card.setAttribute('class', 'card');

    const img = document.createElement('img');
    img.setAttribute('class', 'card-img');
    let imgSrc = `../${exp.image}`;
    img.src = imgSrc;

    const cardBody = document.createElement('div');
    cardBody.setAttribute('class', 'card-body');

    const tag = document.createElement('span');
    tag.setAttribute('class', 'card-tag');
    tag.innerHTML += exp.category;

    const title = document.createElement('h3');
    title.setAttribute('class', 'card-title');
    title.innerHTML += exp.title;

    const location = document.createElement('p');
    location.setAttribute('class', 'card-location');
    location.innerHTML += exp.location;

    const description = document.createElement('p');
    description.setAttribute('class', 'card-description');
    description.innerHTML += exp.description;

    const footer = document.createElement('div');
    footer.setAttribute('class', 'card-footer');

    const duration = document.createElement('span');
    duration.setAttribute('class', 'card-duration');
    duration.innerHTML += exp.duration;

    const price = document.createElement('span');
    price.setAttribute('class', 'card-price');
    price.innerHTML += `€${exp.price}`;

    footer.append(duration, price);
    cardBody.append(tag, title, location, description, footer);
    card.append(img, cardBody);
    cards.appendChild(card);
  });
  exp.appendChild(cards);
}
