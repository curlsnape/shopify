// import axios from "../utils/Axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Loading from "./Loading";
import { productcontext } from "../utils/Context";

function Details() {
  const navigate = useNavigate();
  const [products, setproducts] = useContext(productcontext);
  const { id } = useParams();
  const [product, setproduct] = useState(null);

  // const singleproduct = async()=>{
  //   try {
  //     const{data} = await axios(`/products/${id}`)
  //     setproduct(data)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
  const removehandler = (id) => {
    const filteredproducts = products.filter((p) => p.id !== id);
    setproducts(filteredproducts);
    localStorage.setItem("products", JSON.stringify(filteredproducts));
    navigate("/");
  };

  useEffect(() => {
    // singleproduct()

    if (!product) {
      setproduct(products.filter((p) => p.id == id)[0]);
    }
  }, []);

  return product ? (
    <div className="w-[75%] h-[80%]  m-auto flex gap-20 justify-center items-center">
      <img
        className="h-[60%] w-fit object-cover"
        src={`${product.image}`}
        alt=""
      />
      <div className="content font-[poppins]  w-[45%]">
        <h2 className="font-semibold font-[poppins] text-2xl mb-2">
          {product.title}
        </h2>
        <h4 className="font-semibold text-lg font-[poppins] mb-1 opacity-70">
          {product.category}
        </h4>
        <h4 className="font-semibold text-lg w-fit p-1 font-[poppins] rounded border tracking-wide mb-4 opacity-85">
          $ {product.price}
        </h4>
        <p className="font-semibold text-base font-[poppins] mb-5">
          {product.description}
        </p>
        <Link
          to={`/update/${product.id}`}
          className="py-[0.29vw] font-semibold px-6 text-base bg-blue-600 text-white  mr-5 rounded-md"
        >
          Edit
        </Link>
        <button
          onClick={() => removehandler(id)}
          className="py-1 font-semibold px-6 text-base bg-blue-600 text-white   rounded-md"
        >
          Delete
        </button>
      </div>
    </div>
  ) : (
    <Loading />
  );
}

export default Details;
