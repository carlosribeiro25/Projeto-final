
  
export default function ProdutoCard(){
    return (
        <>
            <div className="bg-gray-100 p-1.5  cols-1 gap-4  ">
                
              <img className="cursor-pointer rounded-xl" src="https://th.bing.com/th/id/OPHS.ECXLkmuQhvjvdQ474C474?w=248&h=248&c=17&o=5&pid=21.1"
              
               alt="" 
               width={292}
               height={321}
                  />
                  <p className="text-lime-700 cursor-pointer text-ms font-bold "> Tênis </p>
                  <p className=" font-bold " >Tênis Nike-13 Feminino</p>
                  
                  <s className="text-gray-500 cursor-pointer text-lg ">$200</s><span className=" cursor-pointer font-black"> $ 100</span>
             

            </div>
            
        
        </>
    )
}