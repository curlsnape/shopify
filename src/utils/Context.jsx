// import axios from '../utils/Axios'
import React, { createContext, useEffect, useState } from 'react'
export const productcontext = createContext()
const Context = (props) => {
  const [products, setproducts] = useState(JSON.parse(localStorage.getItem('products'))||null)
//   const getdata = async()=>{
// try {
//   const{data} = await axios('/products')
//   // console.log(data)
//   setproducts(data)
// } catch (error) {
//   console.log(error)
// }
//   }
  useEffect(()=>{
// getdata()
  },[])
  return (
    <productcontext.Provider value={[products, setproducts]}>{props.children}</productcontext.Provider>
  )
}

export default Context