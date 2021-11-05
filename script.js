const cardTemplate = document.querySelector(
  '[data-id="card-template"]'
).innerHTML;
const $cardsWrapper = document.querySelector('[data-id="cards-wrapper"]');

const defaultAnimal = "cats";

const populateCards = async (selectedAnimal) => {
  $cardsWrapper.innerHTML = "";
  const animals = await fetch("mock.json")
    .then((res) => res.json())
    .then(
      (value) =>
        new Promise((resolve) => {
          setTimeout(() => {
            resolve(value);
          }, 1500);
        })
    );

  const currentAnimal = animals[selectedAnimal];

  const cards = currentAnimal
    .map((animal) =>
      cardTemplate
        .replace("{{image}}", animal.image)
        .replace("{{title}}", animal.title)
        .replace("{{content}}", animal.content)
    )
    .join("");

  $cardsWrapper.innerHTML = cards;
};

populateCards(defaultAnimal);
