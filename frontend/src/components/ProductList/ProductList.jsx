import React from 'react';
import CardItem from '../CardItem/CardItem';
import styles from './ProductList.module.css';

export default function ProductList({ data }) {
  return (
    <ul className={styles.list}>
      {data.map(item => <CardItem key={item.id} item={item} />)}
    </ul>
  );
}
