class Pizza {
    constructor(id, name, ingredientes, precio) {
        this.id = id;
        this.name = name;
        this.ingredientes = ingredientes;
        this.precio = precio;
    }
}

const pizzas = [
    mozzarella = new Pizza(1, "Mozzarella", ["queso muzzarela", "salsa de tomate", "aceitunas"], 500),
    especial = new Pizza(2, "Especial", ["queso muzzarela", "salsa de tomate", "jamón cocido", "morrón"], 530),
    fugazzetta = new Pizza(3, "Fugazzetta", ["queso cuartirolo", "cebolla"], 640),
    napolitana = new Pizza (4, "Napolitana", ["queso muzzarela", "salsa de tomate", "rodajas de tomate", "albahaca"], 580),
    calabresa = new Pizza(5, "Calabresa", ["queso muzzarella", "salsa de tomate", "longaniza calabresa"], 620),
    rucula = new Pizza(6, "de Rúcula", ["queso muzzarella", "queso parmesano", "rúcula", "jamón crudo"], 650),
    marinara = new Pizza(7, "Marinara", ["salsa de tomate", "orégano", "ajo", "albahaca"], 550)
]

//Imprimir las pizzas que tienen un ID impar

for (let i = 0; i < pizzas.length; i++) {
    if (pizzas[i].id % 2 === 1) {
        console.log(`La pizza ${pizzas[i].name} tiene un Id impar`);
    };
}

// Imprimir las pizzas que salen menos de $600

for (let i = 0; i < pizzas.length; i++) {
    if (pizzas[i].precio < 600) {
        console.log(`La pizza ${pizzas[i].name} sale $${pizzas[i].precio}, menos de $600`);
    };
}

// El nombre de cada pizza con su precio

for (let i = 0; i < pizzas.length; i++) {
    console.log(`La pizza ${pizzas[i].name} sale $${pizzas[i].precio}`);
}

// Ingredientes de cada pizza con iteración adentro de iteración

for (let i = 0; i < pizzas.length; i++) {
    let ingredientesDePizza = "";
    for (let j = 0; j < pizzas[i].ingredientes.length; j++) {
        ingredientesDePizza += pizzas[i].ingredientes[j] + "- "
    }
    console.log(`Los ingredientes de la piza ${pizzas[i].name} son: ${ingredientesDePizza} `)
}

// mismo ejercicio, otra resolución

for (let i = 0; i < pizzas.length; i++) {
    let ingredientesDePizza = pizzas[i].ingredientes.join(", ")
    console.log(`Los ingredientes de nuestra pizza ${pizzas[i].name} son: ${ingredientesDePizza.toLowerCase()}`)
}


