import { useSelector } from 'react-redux';
import ProductCard from './ProductCard';

function BoxProducts() {
  const products = useSelector(state => state.products[0]);
  return (
    <>
    <section className='flex flex-wrap gap-12 p-12 justify-center'>
    {products?.map(product => (
      <ProductCard key={product.id} title={product.title} thumbnail={product.thumbnail} price={product.price} />
    ))}
    </section>
    </>
  )
}

export default BoxProducts;
