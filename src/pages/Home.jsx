import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

function Home() {
  const { data, isPending, error } = useFetch("https://fakestoreapi.com/products");

  if (isPending) return <p className="text-center text-gray-500 mt-10">Loading...</p>;
  if (error) return <p className="text-center text-red-600 mt-10">Error: {error}</p>;

  return (
    <div className="px-6 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {data?.length > 0 ? (
        data.map((product) => (
          <Link
            to={`/product/${product.id}`}
            key={product.id}
            className="bg-white rounded-xl p-5 shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <img
              className="mx-auto h-48 w-full object-contain rounded-md"
              src={product.image}
              alt={product.title}
            />
            <h2 className="text-base font-semibold mt-4 line-clamp-1">{product.title}</h2>
            <p className="text-sm text-gray-600 mt-2 line-clamp-2">
              {product.description}
            </p>
            <div className="mt-3 flex items-center justify-between">
              <span className="text-lg font-bold text-green-600">${product.price}</span>
              <span className="text-sm bg-fuchsia-100 text-fuchsia-700 px-2 py-1 rounded-md">
                {product.category}
              </span>
            </div>
            <p className="mt-2 text-sm text-yellow-600 font-medium">⭐ Rating: {product.rating?.rate}</p>
          </Link>
        ))
      ) : (
        <p className="col-span-full text-center text-gray-500">No products found.</p>
      )}
    </div>
  );
}

export default Home;
