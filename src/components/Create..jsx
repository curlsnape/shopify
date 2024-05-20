import React, { useContext, useState } from "react";
import { productcontext } from "../utils/Context";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Create() {
  const [products, setproducts] = useContext(productcontext);
  const navigate = useNavigate();

  const [image, setimage] = useState("");
  const [title, settitle] = useState("");
  const [category, setcategory] = useState("");
  const [price, setprice] = useState("");
  const [description, setdescription] = useState("");

  const addproducthandler = (e) => {
    e.preventDefault();

    if (
      title.trim().length < 5 ||
      image.trim().length < 5 ||
      category.trim().length < 5 ||
      price.trim().length < 1 ||
      description.trim().length < 5
    ) {
      alert("Please fill all the fields");
      return;
    }

    const product = {
      id: nanoid(),
      image,
      title,
      category,
      price,
      description,
    };
    setproducts([...products, product]);
    localStorage.setItem("products", JSON.stringify([...products, product]));
    toast.success("Product Added Successfully");
    navigate("/");
  };
  return (
    <div className="w-full pt-[5%] h-full ">
      <form
        className="w-1/2 mx-auto flex flex-col items-center gap-5"
        action=""
        onSubmit={addproducthandler}
      >
        <h1 className="text-4xl  font-semibold text-center mb-10">
          Add New Product
        </h1>

        <input
          className="font-medium text-xl font-[poppins]  outline-none w-full px-3 py-1 rounded-md bg-zinc-100"
          placeholder="Image URL"
          type="url"
          onChange={(e) => setimage(e.target.value)}
          value={image}
        />
        <input
          className="font-base text-xl font-[poppins]  font-medium outline-none w-full px-3 py-1 rounded-md bg-zinc-100"
          placeholder="Title"
          type="text"
          onChange={(e) => settitle(e.target.value)}
          value={title}
        />
        <div className="flex font-[poppins] w-full gap-10">
          <input
            className="font-base text-xl font-medium   outline-none w-[48%] px-3 py-1 rounded-md bg-zinc-100"
            placeholder="Category"
            type="text"
            onChange={(e) => setcategory(e.target.value)}
            value={category}
          />
          <input
            className="font-base text-xl  font-medium outline-none w-[48%] px-3 py-1 rounded-md bg-zinc-100"
            placeholder="Price"
            type="number"
            onChange={(e) => setprice(e.target.value)}
            value={price}
          />
        </div>
        <textarea
          placeholder="Add Product Information here..."
          className="p-3 font-base text-xl font-medium font-[poppins]  h-[40%] w-full bg-zinc-100"
          //   name="description"
          onChange={(e) => setdescription(e.target.value)}
          value={description}
          rows="10"
        ></textarea>
        <button className="border py-2 mt-2 px-6 w-fit font-[poppins] rounded-full border-zinc-300    text-white font-medium text-lg bg-blue-600">
          Add Product
        </button>
      </form>
    </div>
  );
}

export default Create;
