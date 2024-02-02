import React, { useEffect } from 'react';
import { productApi } from '../../utils/api/productApi';
import ProductList from '../../components/ProductList/ProductList';
import styles from './HomePage.module.css';


export default function HomePage() {
  const [getProducts, { data, isSuccess, isLoading, isError, error }] =
    productApi.useGetProductsMutation();

  const handleClick = () => {
    getProducts();
  }

  useEffect(() => {
    data && console.log(data);
    isError && console.log(error);
  }, [data]);

  return (
    <>
      <h1>Home Page</h1>
      <button
        onClick={handleClick}
        disabled={isLoading}
      >
        Получить данные
      </button>
      {isSuccess && data && (
        <section className={styles.productContainer}>
          <ProductList data={data} />
        </section>
      )}
    </>
  );
}
