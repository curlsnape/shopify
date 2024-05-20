import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { productcontext } from "../utils/Context";

function Nav() {
  const [products] = useContext(productcontext);
  let uni_category =
    products && products.reduce((ac, cv) => [...ac, cv.category], []);
  uni_category = [...new Set(uni_category)];

  const color = () => {
    return `rgba(${(Math.random() * 255).toFixed()},${(
      Math.random() * 255
    ).toFixed()},${(Math.random() * 255).toFixed()},0.8)`;
  };
  return (
    <div className="w-[15%]">
      <nav className="w-full pt-[18%] flex p-6 flex-col items-center bg-zinc-200 h-full">
        <Link
          to="/create"
          className="border p-1 px-3 rounded-md border-white font-base text-sky-400 text-lg"
        >
          Add New product
        </Link>
        <hr className="pt-[0.2vh] w-[95%] mt-5 bg-white" />
        <h2 className=" w-[95%] font-[poppins]  font-semibold text-2xl mt-3 ">
          Category Filter
        </h2>
        <div className="w-[95%] mt-5 flex flex-col gap-3 ">
          {uni_category.map((c, i) => (
            <Link
              to={`/?category=${c}`}
              key={i}
              className="flex font-[poppins] items-center capitalize  text-xl font-medium gap-3 "
            >
              <span
                style={{ backgroundColor: color() }}
                className="w-4 h-4 rounded-full bg-zinc-500 flex"
              ></span>
              {c}
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
}

export default Nav;
