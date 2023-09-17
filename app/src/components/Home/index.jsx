import React, { useEffect, useState } from "react";
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const productsFromDB = await fetchProductsFromDatabase();
        setProducts(productsFromDB);
      } catch (error) {
        console.error("Erro ao buscar produtos do banco de dados:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="container">
      <h1>Produtos</h1>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>Preço: ${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
