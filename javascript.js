const pizzas = [
    {id: 1, name: "Mozzarella", ingredientes: ["queso muzzarela", "salsa de tomate", "aceitunas"], precio: 500},
    {id: 2, name: "Especial", ingredientes: ["queso muzzarela", "salsa de tomate", "jamón cocido", "morrón"], precio: 530},
    {id: 3, name: "Fugazzetta", ingredientes: ["queso muzzarela", "queso cuartirolo", "cebolla"], precio: 640},
    {id: 4, name: "Napolitana", ingredientes: ["queso muzzarela", "salsa de tomate", "rodajas de tomate", "albahaca"], precio: 580},
    {id: 5, name: "Calabresa", ingredientes: ["queso muzzarella", "salsa de tomate", "longaniza calabresa"], precio: 620},
    {id: 6, name: "de Rúcula", ingredientes: ["queso muzzarella", "queso parmesano", "rúcula", "jamón crudo"], precio: 650},
    {id: 7, name: "Marinara", ingredientes: ["salsa de tomate", "orégano", "ajo", "albahaca"], precio: 550}
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


