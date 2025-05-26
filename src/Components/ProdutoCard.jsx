

export default function ProdutoCard() {
    return (
        <>
            <div className="bg-white rounded-2x p-1.5  cols-1 gap-4  ">

                <img className="cursor-pointer rounded-md" src="https://drip-store.netlify.app/assets/images/trending-products/product-image.png"

                    alt=""
                    width={292}
                    height={321}
                />

                <div className="bg-gray-100">
                    <p className="text-lime-700 cursor-pointer text-ms font-bold "> Tênis </p>
                    <p className=" font-bold " >Tênis Nike-13 Feminino</p>

                    <s className="text-gray-500 cursor-pointer text-lg ">$200</s><span className=" cursor-pointer font-black"> $ 100</span>
                </div>

            </div>


        </>
    )
}