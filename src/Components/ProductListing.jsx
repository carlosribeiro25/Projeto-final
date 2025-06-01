
import ProdutoCard from "./ProdutoCard";

 export default function ProductListing() {
  return (
    <>
      <section className="gap-8">
        <div className=" mt-14 flex gap-20">
          <div className=" mx-8 justify-items-stretch gap-8 gap-y-8 p-4 grid grid-cols-3">
            <ProdutoCard />
            <ProdutoCard />
            <ProdutoCard />
            <ProdutoCard />
            <ProdutoCard />
            <ProdutoCard />
            <ProdutoCard />
            <ProdutoCard />
            <ProdutoCard />
          </div>
        </div>
      </section>
    </>
  );
};


