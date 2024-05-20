import React, { useContext, useEffect, useState } from "react";
import Nav from "./Nav";
import { Link, useLocation } from "react-router-dom";
import { productcontext } from "../utils/Context";
import Loading from "./Loading";
import axios from "../utils/Axios";

function Home() {
  const [products] = useContext(productcontext);
  const[filterprod,setfilterprod]=useState(null)
  const { search } = useLocation();
  const category = decodeURIComponent(search.split("=")[1]);
  // const getfilteredprod = async () => {
  //   try {
  //     const { data } = await axios(`/products/category/${category}`);
  //     setfilterprod(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  useEffect(()=>{
    if(!filterprod || category == 'undefined') setfilterprod(products)
if(category != 'undefined')
{
  setfilterprod(products.filter(p=>p.category == category))
  // getfilteredprod()
}
  },[category,products])
  return products ? (
    <>
      <Nav />
      <div className="w-[85%] overflow-x-hidden p-10 pt-[6%] gap-5 overflow-y-auto flex flex-wrap bg-zinc-100">
        {filterprod && filterprod.map((p, i) => (
          <Link
            key={i}
            to={`/details/${p.id}`}
            className="card p-4 h-[35vh] w-[18%] bg-white rounded border flex flex-col items-center gap-4 shadow hover:shadow-2xl"
          >
            <div
              style={{
                backgroundImage: `url(${p.image})`,
              }}
              className="h-[65%] w-full bg-center hover:scale-105 bg-no-repeat bg-contain "
            ></div>

            <h2 className="font-semibold font-[poppins] text-center text-sm hover:text-gray-600">
              {p.title}
            </h2>
          </Link>
        ))}
      </div>
    </>
  ) : (
    <Loading />
  );
}

export default Home;
