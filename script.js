const cardTemplate = document.querySelector('[data-id="card-template"]').innerHTML;
const $cardsWrapper = document.querySelector('[data-id="cards-wrapper"]');

const defaultAnimal = 'dogs';

const populateCards = async (selectedAnimal) => {
  const animals = await fetch('mock.json')
    .then(res => res.json())
    
  const currentAnimal = animals[selectedAnimal]

  const cards = currentAnimal.map((animal) => 
    cardTemplate.replace('{{image}}', animal.image)
      .replace('{{title}}', animal.title)
      .replace('{{content}}', animal.content)
  ).join('');

  $cardsWrapper.innerHTML = cards;
}

populateCards(defaultAnimal)