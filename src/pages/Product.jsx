import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

function Product() {
  const { id } = useParams();
  const {
    data: product,
    isPending,
    error,
  } = useFetch(`https://fakestoreapi.com/products/${id}`);

  if (isPending) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <div className="badge badge-soft badge-primary m-auto">
        <h1>Product - {id}</h1>
      </div>

      {product && (
        <div className="p-4 m-auto rounded-lg w-96 shadow-md">
          <img
            className="m-auto h-40 w-40 object-cover rounded-md"
            src={product.image}
            alt={product.title}
          />
          <h2 className="text-lg font-semibold mt-2">{product.title}</h2>
          <p className="text-gray-600 mt-2">{product.description}</p>
          <div className="badge badge-outline mt-2 badge-accent">
            {product.price} $
          </div>
          <p className="mt-2">{product.category}</p>
          <p className="mt-2 text-fuchsia-800">Rating: {product.rating?.rate}</p>
        </div>
      )}
    </div>
  );
}

export default Product;
