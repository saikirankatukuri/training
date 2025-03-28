const products = [
    { id: 1, name: "Laptop", price: 75000, category: "Electronics" },
    { id: 2, name: "Phone", price: 50000, category: "Electronics" },
    { id: 3, name: "Shoes", price: 3000, category: "Fashion" },
    { id: 4, name: "Watch", price: 15000, category: "Accessories" },
    { id: 5, name: "Tablet", price: 40000, category: "Electronics" }
  ];
  
  const electronics = products.filter(product => product.category === "Electronics");
  console.log("Electronics products:", electronics);
  
  const totalPrice = products.reduce((acc, product) => acc + product.price, 0);
  console.log("Total price of all products:", totalPrice);
  
  const sortedByPrice = [...products].sort((a, b) => a.price - b.price);
  console.log("Products sorted by price:", sortedByPrice);
  
  const mostExpensive = products.reduce((max, product) => (product.price > max.price ? product : max), products[0]);
  console.log("Most expensive product:", mostExpensive);
  
  const updatedProducts = products.filter(product => product.id !== 3);
  console.log("Updated products list:", updatedProducts);