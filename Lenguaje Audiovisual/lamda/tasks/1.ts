type Product = {
    id: number;
    description: string;
    price: number;
};

let products: Product[] = [
    { id: 1, description: 'Smartphone', price: 200 },
    { id: 2, description: 'Laptop', price: 1000 },
    { id: 3, description: 'Mouse', price: 30 },
    { id: 4, description: 'Keyboard', price: 50 },
    { id: 5, description: 'Headphones', price: 45 },
];

let expensiveProducts = products;
products.filter(products => products.price >  50)

console.log(expensiveProducts);

products => products.description ="";