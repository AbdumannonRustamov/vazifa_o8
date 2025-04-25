import React from "react";
import { Link } from "react-router-dom";
import { useGetProductsQuery } from "../services/apiSlice";

const Home = () => {
  const { data: products, isLoading, error } = useGetProductsQuery();

  if (isLoading) return <p className="text-center text-lg">Yuklanmoqda...</p>;
  if (error) return <p className="text-center text-red-500">Xatolik: {error.error}</p>;

  return (
    <div className="px-4 py-8">
      <h2 className="text-2xl font-bold text-center mb-6">Mahsulotlar</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products?.map((product) => (
          <Link
            to={`/product/${product.id}`}
            key={product.id}
            className="card shadow-lg bg-base-100 hover:scale-105 transition-transform duration-300"
          >
            <figure className="p-4">
              <img src={product.image} alt={product.title} className="h-40 object-contain" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-base">
                {product.title.length > 40 ? product.title.slice(0, 40) + "..." : product.title}
              </h2>
              <p className="text-sm text-gray-500">{product.category}</p>
              <div className="text-lg font-semibold">{product.price} $</div>
              <div className="mt-2 badge badge-outline">Reyting: {product.rating.rate}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
