// Crea una interface Product con name, price, etc. Crea una interface Inventory que contenga un array de Product 
// y funciones para agregar y buscar productos.


interface IProduct {

    name:string;
    price:number;


}

interface IInventory {

    products: IProduct[];

}


function addproduct (inventory: IInventory, product: IProduct): void {
    inventory.products.push(product);


}

function findProductByName(inventory: IInventory, productName: string): IProduct | undefined {
    return inventory.products.find(product => product.name === productName);
}

const inventory: IInventory = {
    products: []
};

const newProduct: IProduct = {
    name: "Chocorramo",
    price: 4000
};

addproduct(inventory, newProduct);
console.log(newProduct);

const searchResult = findProductByName(inventory, "Chocorramo");
if (searchResult) {
    console.log("Producto encontrado:");
} else {
    console.log("Producto no encontrado.");
}




