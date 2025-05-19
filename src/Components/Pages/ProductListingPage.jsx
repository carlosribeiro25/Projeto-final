import React from 'react';

const produtos = [
  { id: 1, nome: 'Camiseta', preco: 49.90 },
  { id: 2, nome: 'Tênis', preco: 199.90 },
  { id: 3, nome: 'Boné', preco: 29.90 }
];

export default function ProductListingPage() {
  return (
    <div>
      <h1>Lista de Produtos</h1>
      <ul>
        {produtos.map(produto => (
          <li key={produto.id}>
            {produto.nome} - R${produto.preco.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
}
