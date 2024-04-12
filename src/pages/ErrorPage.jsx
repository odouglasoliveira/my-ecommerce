import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


function ErrorPage() {
  const navigate = useNavigate();
  useEffect(() => () => setTimeout(() => navigate("/"), 3000), [navigate])

  return (
    <>
      <section className="flex justify-center items-center min-h-full gap-12">
        <img src="/error-page.svg" alt="Icone de erro" className="w-1/6" />
        <section className="text-2xl text-center flex flex-col gap-6">
          <p className="text-3xl font-bold font-sans">Opss...</p>
          <p className="font-sans">Parece que essa página não existe!</p>
          <p>Estamos te redirecionando de volta ao nosso app!!</p>
        </section>
        <div className="loader absolute bottom-60"></div>
      </section>
    </>
  )
}

export default ErrorPage