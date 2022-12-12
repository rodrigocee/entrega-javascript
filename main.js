const pizzas = [
  {
    id: 1,
    name: "Muzzarella",
    ingredientes: [
      "queso muzzarela", 
      "salsa de tomate", 
      "aceitunas"],
    precio: 500,
    image: './images/muzza.png'
  },
  {
    id: 2,
    name: "Especial",
    ingredientes: [
      "queso muzzarela",
      "salsa de tomate",
      "jamón cocido",
      "morrón",
    ],
    precio: 530,
    image: './images/especial.png'
  },
  {
    id: 3,
    name: "Fugazzetta",
    ingredientes: [
      "queso muzzarela", 
      "queso cuartirolo",
      "cebolla"],
    precio: 640,
    image: './images/fuga.png'
  },
  {
    id: 4,
    name: "Napolitana",
    ingredientes: [
      "queso muzzarela",
      "salsa de tomate",
      "rodajas de tomate",
      "albahaca",
    ],
    precio: 580,
    image: './images/napolitana.png'
  },
  {
    id: 5,
    name: "Calabresa",
    ingredientes: [
      "queso muzzarella",
      "salsa de tomate",
      "longaniza calabresa",
    ],
    precio: 620,
    image: './images/calabresa.png'
  },
  {
    id: 6,
    name: "de Rúcula",
    ingredientes: [
      "queso muzzarella",
      "queso parmesano",
      "rúcula",
      "jamón crudo",
    ],
    precio: 650,
    image: './images/rucula.png'
  },
  {
    id: 7,
    name: "Marinara",
    ingredientes: ["salsa de tomate", "orégano", "ajo", "albahaca"],
    precio: 550,
    image: './images/marinara.png'
  },
];

// dom

const formInput = document.getElementById('input-form');
const numberInput = document.getElementById('number-input');
const searchResult = document.getElementById('search-display');

const saveToLocalStorage = (element) => {
  localStorage.setItem("pizza", JSON.stringify(element));
};

// elemento o error

const showError = (message) => {
  searchResult.innerHTML = `<span id ="error">${message}</span>`;
  searchResult.style.backgroundImage = "url('./images/nohay.png')";
};

const showPizza = (pizza) => {
  searchResult.innerHTML = `
  <div id="result" style="background-image: url(${pizza.image});">
            <h2>${pizza.name}</h2>
            <h3>$${pizza.precio}</h3>
            <span>Ingredientes: ${pizza.ingredientes.join(", ")}</span>
          </div>
  `;
}

// validación

const isEmpty = (value) => !value.length;

const inputIsValid = () => {
    let valid = false;
    let input = numberInput.value;
    if (isEmpty(input)) {
        showError('Primero ingresá un ID')
    } else if (isNaN(input)) {
        showError('El ID solo debe contener números')
    } else if (!pizzas.find(e => e.id === parseInt(input))) {
        showError('No se encontró 🤔')
    } else {
      valid = true;
    }
    return valid;
}

// submit

formInput.addEventListener('submit', (e) => {
    e.preventDefault();
    if (inputIsValid()) {
      let pizzaToRender = pizzas.find(e => e.id === parseInt(numberInput.value));
      showPizza(pizzaToRender)
      saveToLocalStorage(pizzaToRender);
    }
    formInput.reset()
});

// iniciar con ultimo guardado

function init() {
  const pizza = JSON.parse(localStorage.getItem("pizza")) || '';
  if (pizza !== '') showPizza(pizza); 
}
init();