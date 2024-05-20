import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { productcontext } from "../utils/Context";

function Update() {
  const [products, setproducts] = useContext(productcontext);
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setproduct] = useState({
    title: "",
    image: "",
    category: "",
    price: "",
    description: "",
  });

  const updateproduct = (e) => {
    console.log(e.target.name, e.target.value);
    setproduct({ ...product, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    setproduct(products.filter((p) => p.id == id)[0]);
  }, [id]);

  const addproducthandler = (e) => {
    e.preventDefault();

    if (
      product.title.trim().length < 5 ||
      product.image.trim().length < 5 ||
      product.category.trim().length < 5 ||
      product.price.trim().length < 1 ||
      product.description.trim().length < 5
    ) {
      alert("Please fill all the fields");
      return;
    }
    const pi = products.findIndex((p) => p.id == id);
    const copydata = [...products];
    copydata[pi] = { ...products[pi], ...product };
    console.log(copydata);
    setproducts(copydata);
    localStorage.setItem("products", JSON.stringify(copydata));
    navigate(-1);
  };
  return (
    <div className="w-full pt-[5%] h-full ">
      <form
        className="w-1/2 mx-auto flex flex-col items-center gap-5"
        action=""
        onSubmit={addproducthandler}
      >
        <h1 className="text-4xl font-semibold text-center mb-10">
          Add New Product
        </h1>

        <input
          className="font-medium text-xl font-[poppins]  text-zinc-600 outline-none w-full px-3 py-1 rounded-md bg-zinc-100"
          placeholder="Image URL"
          type="url"
          name="image"
          onChange={updateproduct}
          value={product && product.image}
        />
        <input
          className="font-base text-xl font-[poppins]  text-zinc-600 font-medium outline-none w-full px-3 py-1 rounded-md bg-zinc-100"
          placeholder="Title"
          type="text"
          name="title"
          onChange={updateproduct}
          value={product && product.title}
        />
        <div className="flex w-full gap-10">
          <input
            className="font-base text-xl text-zinc-600 font-medium font-[poppins] outline-none w-[48%] px-3 py-1 rounded-md bg-zinc-100"
            placeholder="Category"
            type="text"
            name="category"
            onChange={updateproduct}
            value={product && product.category}
          />
          <input
            className="font-base text-xl text-zinc-600 font-[poppins] font-medium outline-none w-[48%] px-3 py-1 rounded-md bg-zinc-100"
            placeholder="Price"
            type="number"
            name="price"
            onChange={updateproduct}
            value={product && product.price}
          />
        </div>
        <textarea
          placeholder="Add Product Information here..."
          className="p-3 font-base text-xl text-zinc-600 font-medium font-[poppins]  h-[40%] w-full bg-zinc-100"
          name="description"
          onChange={updateproduct}
          value={product && product.description}
          rows="10"
        ></textarea>
        <button className="border py-2 mt-2 px-6 w-fit rounded-full font-[poppins] border-zinc-300    text-white font-medium text-lg bg-blue-600">
          Update Product
        </button>
      </form>
    </div>
  );
}

export default Update;
