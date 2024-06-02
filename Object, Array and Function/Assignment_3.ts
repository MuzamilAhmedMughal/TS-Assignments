import inquirer from "inquirer";

// Basic Arrays: Product Inventory

type Product = {
    name: string,
    price: number,
    inventory: {
        stock: number,
        colorOptions: string[]
    }
};

let products: Product[] = [
    {
        name: "pc",
        price: 1200,
        inventory: {
            stock: 50,
            colorOptions: ["black", "red"]
        }
    },
    {
        name: "laptop",
        price: 1800,
        inventory: {
            stock: 100,
            colorOptions: ["white", "blue"]
        }
    },
    {
        name: "phone",
        price: 1250,
        inventory: {
            stock: 200,
            colorOptions: ["red", "black"]
        }
    }
];

for (let i = 0; i < products.length; i++) {
    let product = products[i];
    console.log(`Name: ${product.name}`);
    console.log(`Price: $${product.price.toFixed(2)}`);
    console.log(`Stock: ${product.inventory.stock}`);
    console.log(`Available Colors: ${product.inventory.colorOptions.join(", ")}`);
    console.log("---------------------------");
}

let userAns = await inquirer.prompt([
    {
        name: "product",
        type: "list",
        choices: ["pc", "laptop", "phone"],
        message: "Select which product you want to see?"
    },
    {
        name: "newColor",
        type: "list",
        choices: ["red", "blue"],
        message: "Select the color:" 
    }
]);

let changeColor = (product: Product, newColor: string) => {
    if (!product.inventory.colorOptions.includes(newColor)) {
        console.log(`\nColor ${newColor} is not available for ${product.name}.`);
        return;
    }

    const originalPrice = product.price;

    switch (newColor.toLowerCase()) {
        case "red":
            product.price = originalPrice * 1.10;
            break;
        case "blue":
            product.price = originalPrice * 0.95;
            break;
        default:
            product.price = originalPrice;
            break;
    }

    console.log(`\n${product.name} color changed to ${newColor}. New price: $${product.price.toFixed(2)}`);
}

let givenProduct = userAns.product;
let targetedProduct = products[0];

switch (givenProduct) {
    case "pc":
        targetedProduct = products[0];
        break;
    case "laptop":
        targetedProduct = products[1];
        break;
    case "phone": 
        targetedProduct = products[2];
        break; 
}

changeColor(targetedProduct, userAns.newColor);

console.log(`\nProduct Name: ${targetedProduct.name} \nProduct Price: $${targetedProduct.price}`);

let finalCall = await inquirer.prompt({
    name: "end",
    type: "confirm",
    message: "Do you want to buy this Product?"
});

if (finalCall.end) {
    console.log(`You bought this ${givenProduct}, for $${targetedProduct.price} ! \nThanks for Shopping :)`);
}
else{
    console.log("You missed a big deal :( \nBetter Luck next time!");
}