import { useState } from 'react';
import { fetchProductsList } from '../utils/fetchFunctions'
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';


function Header() {
  const [searchedItem, setSearchedItem] = useState('');
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setSearchedItem(event.target.value)
  }

  const searchProduct = async () => {
    try {
      const products = await fetchProductsList(searchedItem);
      console.log(products)
      dispatch({type: 'REMOVE_PRODUCTS', payload: []})
      dispatch({type: 'ADD_PRODUCTS', payload: products})
    } catch (error) {
      dispatch({type: 'REMOVE_PRODUCTS', payload: []})
      console.warn(error)
    }
  }

  return (
    <>
      <header className="flex justify-between px-20 h-24 bg-cyan-800">
        <section className="flex justify-center items-center gap-4">
          <Link to={"/"} className="flex justify-center items-center gap-2">
            <img src="/logo.svg" alt="icone do e-commerce" width={40} height={40} />
            <h1 className="text-xl font-semibold text-white">My E-commerce</h1>
          </Link>
        </section>
        <section className="flex justify-center items-center w-96">
          <input onChange={() => handleChange(event)} value={searchedItem} placeholder="O que você gostaria de comprar?" className="border outline-none focus:border-cyan-500 transition-colors p-2 w-full" type="text" />
          <button onClick={searchProduct} className="bg-white p-2 border hover:bg-slate-50 active:bg-slate-100 transition-colors">Buscar</button>
        </section>
        <section className="flex justify-center items-center gap-4">
          <Link to={"/cart"} className="flex justify-center items-center gap-2">
            <img src="/cart.svg" alt="icone do carrinho de compras" width={30} height={30} />
          </Link>
        </section>
      </header>
    </>
  )
}

export default Header