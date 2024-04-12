import PropTypes from 'prop-types';
import Swal from 'sweetalert2'


function ProductCard({ title, price, thumbnail }) {

  function addToCart() {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Produto adicionado ao carrinho com sucesso.",
      showConfirmButton: false,
      timer: 1200
    });
  }

  function convertToBRL(number) {
      let value = parseFloat(number).toFixed(2);
      value = 'R$ ' + value.replace('.', ',');
      return value;
  }
  return (
    <>
      <section className='flex w-1/4 rounded-md border-2 p-4 gap-4'>
        <img className='max-h-32' src={thumbnail} alt="Imagem do produto" />
        <section className='flex flex-col text-center'>
          <p>{ title }</p>
          <span className='font-bold'>{ convertToBRL(price) }</span>
          <section className='flex justify-evenly gap-4'>
            <button onClick={addToCart} className='border py-2 w-40 rounded-2xl bg-blue-600 transition-colors hover:bg-blue-700 text-white font-bold'>Adicionar ao carrinho</button>
            <button className='border py-2 px-8 text-white font-bold rounded-2xl bg-emerald-600 hover:bg-emerald-700 transition-colors'>Comprar</button>
          </section>
        </section>
      </section>
    </>
  )
}

ProductCard.propTypes = {
  title: PropTypes.string,
  price: PropTypes.number,
  thumbnail: PropTypes.string,
}

export default ProductCard;
