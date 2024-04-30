console.clear();

const form = document.querySelector('[data-js="card-form"]');
const textInput = document.querySelector('[data-js="text-input"]');
const cardContainer = document.querySelector('[data-js="card-container"]');

// Figure out how to create an element

const newCard = document.createElement("li");
newCard.classList.add("card");
newCard.textContent = "Hello World";

// Figure out how to add that element to the page
cardContainer.append(newCard);

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const newCard = document.createElement("li");
  // newCard.classList.add("card");
  // const cardHeading = document.createElement("h2");
  // cardHeading.textContent = "I am the heading";
  // newCard.append(cardHeading);
  // const cardContent = document.createElement("p");
  // cardContent.textContent = textInput.value;
  // newCard.append(cardContent);
  newCard.innerHTML = `
    <h2>This is the heading</h2>
    <p>${textInput.value}</p>
  `;

  cardContainer.append(newCard);

  event.target.reset();
  textInput.focus();
  // cardContainer.innerHTML = "";
});

// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   console.log("sanity check?");
//   // read the value from the input...
//   // we could use formData
//   // we could use the elements
//   // or user the textInput ref we have
//   console.log("textInput.value: ", textInput.value);

//   const newCard = document.createElement("li");
//   newCard.classList.add("card");
//   newCard.textContent = textInput.value;

//   // Figure out how to add that element to the page
//   cardContainer.append(newCard);

//   event.target.reset();
//   textInput.focus();
// });
