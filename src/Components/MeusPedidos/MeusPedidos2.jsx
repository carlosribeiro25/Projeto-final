import React from 'react';

const pedidos = [
  {
    numero: '4495810492',
    status: 'Finalizado',
    
    statusColor: 'text-green-600',
    produto: 'Tênis Nike Revolution 6 Next Nature Masculino',
  },
  {
    numero: '4495810492',
    status: 'Cancelado',
    statusColor: 'text-red-600',
    produto: 'Tênis Nike Revolution 6 Next Nature Masculino',
  },
  {
    numero: '4495810492',
    status: 'Finalizado',
 
    statusColor: 'text-green-600',
    produto: 'Tênis Nike Revolution 6 Next Nature Masculino',
  },
  {
    numero: '4495810492',
    status: 'Finalizado',
   
    statusColor: 'text-green-600',
    produto: 'Tênis Nike Revolution 6 Next Nature Masculino',
  },
  {
    numero: '2234981932',
    status: 'Produto em trânsito',
    
    statusColor: 'text-yellow-600',
    produto: 'Tênis Nike Revolution 6 Next Nature Masculino',
  },
  
];

export default function MeusPedidos2() {
  return (
    <div className="p-4 space-y-6 justify-between w-160 h-100 mx-auto   bg-white">
        <br /><br />
           <div className='justify-between flex aling-itens-end '>
      <h2 className="text-2xl font-bold mb-4 justify-end">Meus Pedidos</h2>    
        <p className="text-2xl font-medium mb-4 ">Status</p>
      </div>
      <br />
      <hr />
      {pedidos.map((pedido, index) => (
        <div
          key={index}
          className="flex justify-between    p-4  bg-white"
        >
            <img width={90} height={80} src="src/public/Tenis.png" alt="" /><br />
            <div className="w-2/3 text-start">
            {pedido.numero && (
              <p className="text-sm text-gray-700" >Pedido nº {pedido.numero}</p>
            )}
            <p className="text-gray-800 mt-1 font-semibold">{pedido.produto}</p>
          </div>

          <div className="w-1/8">
            {pedido.status && (
              <p className={`${pedido.statusColor} font-semibold`}>
                {pedido.statusIcon} {pedido.status}
              </p>
            )}
          </div>
         
        </div>
      ))}
    </div>
  );
}
