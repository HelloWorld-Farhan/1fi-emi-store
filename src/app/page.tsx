'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './page.module.css';

type Product = { id: string; slug: string; name: string; variant: string; price: number; mrp: number; imageUrl: string; };

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div style={{ padding: '40px', textAlign: 'center' }}>Loading products...</div>;
  }

  return (
    <div>
      <h1 style={{ marginBottom: '32px', fontSize: '2rem' }}>Featured Products</h1>
      <div className={styles.grid}>
        {products.map((product: Product) => (
          <Link href={`/products/${product.slug}`} key={product.id} className={styles.card}>
            <div className={styles.imageWrapper}>
              <img src={product.imageUrl} alt={product.name} />
            </div>
            <div className={styles.content}>
              <h2 className={styles.title}>{product.name}</h2>
              <p className={styles.variant}>{product.variant}</p>
              <div className={styles.price}>
                ₹{product.price.toLocaleString()}
                <span className={styles.mrp}>₹{product.mrp.toLocaleString()}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
