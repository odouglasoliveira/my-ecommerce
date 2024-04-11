import { Link } from "react-router-dom";


function Header() {

  return (
    <>
      <header className="flex justify-between px-20 h-20 border-b-2 bg-slate-200">
        <Link to={"/"} className="flex justify-center items-center gap-2">
        <section className="flex justify-center items-center gap-4">
          <img src="/logo.svg" alt="icone do e-commerce" width={40} height={40} />
          <h1 className="text-2xl font-semibold">My E-commerce</h1>
        </section>
        </Link>
        <section className="flex justify-center items-center gap-4">
          <input className="border-2 rounded-lg outline-none focus:border-cyan-500 transition-colors px-2" type="text" />
          <button className="text-xl border rounded-lg px-6 bg-cyan-500 text-white hover:bg-cyan-600 transition-colors">Pesquisar</button>
        </section>
        <section className="flex justify-center items-center gap-4">
          <Link to={"/cart"} className="flex justify-center items-center gap-2">
            <p className="text-xl">Meu carrinho</p>
            <img src="/cart.svg" alt="icone do carrinho de compras" width={40} height={40} />
          </Link>
        </section>
      </header>
    </>
  )
}

export default Header