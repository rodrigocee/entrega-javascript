const pizzas = [
  {
    id: 1,
    name: "Mozzarella",
    ingredientes: [
      "queso muzzarela", 
      "salsa de tomate", 
      "aceitunas"],
    precio: 500,
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
  },
  {
    id: 3,
    name: "Fugazzetta",
    ingredientes: [
      "queso muzzarela", 
      "queso cuartirolo",
      "cebolla"],
    precio: 640,
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
  },
  {
    id: 7,
    name: "Marinara",
    ingredientes: ["salsa de tomate", "orégano", "ajo", "albahaca"],
    precio: 550,
  },
];

const formInput = document.getElementById('input-form');
const numberInput = document.getElementById('id-input');

const isEmpty = (value) => !value.length;
const isNumber = (value) => /[0-9]/.test(value);

const showError = (message) => {
    let errorContainer = document.getElementById("error");
    errorContainer.textContent = message;
};

const clearError = () => {
    let errorContainer = document.getElementById("error");
    errorContainer.textContent = '';
};

const showInput = (txt) => {
    let contenedorHTML = document.getElementById('container');
    contenedorHTML.innerHTML = txt;
}

const clearInput = () => {
    let contenedorHTML = document.getElementById('container');
    contenedorHTML.innerHTML = '';
}

const isValid = () => {
    let valid = false;
    let input = numberInput.value;
    if (isEmpty(input)) {
        showError('Ingresá un ID')
        clearInput();
    } else if (!isNumber(input)) {
        showError('El ID solo debe contener números')
        clearInput();
    } else {
        valid = true;
        clearError()
    } return valid
};

const renderPizza = (pizza) => `<h2>${pizza.name}</h2>
<h3>$${pizza.precio}</h3>`

formInput.addEventListener('submit', (e) => {
    e.preventDefault();
    if (isValid()) {
        let HTMLcontent = '';
        let inputFind = pizzas.find(pizza => pizza.id === parseInt(numberInput.value));
        inputFind === undefined ? showError('No se encontro el ID') 
        : HTMLcontent = renderPizza(inputFind);
        showInput(HTMLcontent)
    }   
    formInput.reset()
});