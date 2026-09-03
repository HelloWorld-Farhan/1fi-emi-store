'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import styles from './product.module.css';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

type ProductDetail = { name: string; variant: string; price: number; mrp: number; imageUrl: string; emiPlans: { id: string; monthlyPayment: number; tenureMonths: number; interestRate: number; cashbackAmount: number; }[]; allFinishes?: { slug: string; variant: string; }[]; error?: string; slug?: string; };

export default function ProductDetails() {
  const params = useParams();
  const router = useRouter();
  const [product, setProduct] = useState<ProductDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedPlanId, setSelectedPlanId] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    if (!params.slug) return;
    
    fetch(`/api/products/${params.slug}`)
      .then(res => res.json())
      .then(data => {
        setProduct(data);
        if (data.emiPlans && data.emiPlans.length > 0) {
          setSelectedPlanId(data.emiPlans[0].id);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, [params.slug]);

  if (loading) {
    return <div style={{ padding: '40px', textAlign: 'center' }}>Loading details...</div>;
  }

  if (!product || product.error) {
    return <div style={{ padding: '40px', textAlign: 'center' }}>Product not found.</div>;
  }

  const handleProceed = () => {
    setIsProcessing(true);
    setTimeout(() => {
      alert(`Successfully proceeded with ${product.name} on the selected EMI plan!`);
      setIsProcessing(false);
      router.push('/');
    }, 1000);
  };

  return (
    <div>
      <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '32px', color: 'var(--text-muted)' }}>
        <ArrowLeft size={20} /> Back to products
      </Link>
      
      <div className={styles.container}>
        {/* Left Column */}
        <div className={styles.leftColumn}>
          <div className={styles.productHeader}>
            <span className={styles.badge}>NEW</span>
            <h1 className={styles.title}>{product.name}</h1>
            <p className={styles.variant}>{product.variant}</p>
          </div>
          
          <div className={styles.imageSection}>
            <img src={product.imageUrl} alt={product.name} />
          </div>
          
          <div className={styles.finishes}>
            <p>Available in {product.allFinishes?.length || 1} finishes</p>
            <div className={styles.dots}>
              {product.allFinishes?.map((finish) => {
                let dotColor = '#e2e2e2';
                const v = finish.variant.toLowerCase();
                if (v.includes('gold') || v.includes('natural')) dotColor = '#E3D7B7';
                else if (v.includes('black')) dotColor = '#2F2F2F';
                else if (v.includes('gray') || v.includes('grey') || v.includes('titanium')) dotColor = '#7A7A7A';
                else if (v.includes('silver') || v.includes('white')) dotColor = '#F5F5F0';

                return (
                  <Link href={`/products/${finish.slug}`} key={finish.slug}>
                    <span 
                      className={`${styles.dot} ${product.slug === finish.slug || params.slug === finish.slug ? styles.dotSelected : ''}`}
                      style={{ backgroundColor: dotColor }}
                      title={finish.variant}
                    ></span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className={styles.detailsSection}>
          <div className={styles.priceContainer}>
            <span className={styles.price}>₹{product.price.toLocaleString()}</span>
            <span className={styles.mrp}>₹{product.mrp.toLocaleString()}</span>
          </div>

          <div className={styles.sectionTitle}>
            <span>EMI plans backed by mutual funds</span>
          </div>

          <div className={styles.emiPlansList}>
            {product.emiPlans.map((plan) => (
              <div 
                key={plan.id} 
                className={`${styles.emiPlanCard} ${selectedPlanId === plan.id ? styles.selected : ''}`}
                onClick={() => setSelectedPlanId(plan.id)}
              >
                <div className={styles.radio}>
                  <div className={styles.radioInner}></div>
                </div>
                <div className={styles.planDetails}>
                  <div className={styles.planMainRow}>
                    <span className={styles.planMonthly}>₹{plan.monthlyPayment.toLocaleString()} x {plan.tenureMonths} months</span>
                    <span className={styles.planInterest}>{plan.interestRate === 0 ? '0% interest' : `${plan.interestRate}% interest`}</span>
                  </div>
                  {plan.cashbackAmount > 0 && (
                    <span className={styles.planCashback}>Additional cashback of ₹{plan.cashbackAmount.toLocaleString()}</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <button 
            className={styles.proceedBtn} 
            disabled={!selectedPlanId || isProcessing}
            onClick={handleProceed}
          >
            {isProcessing ? 'Processing...' : 'Proceed'}
          </button>
        </div>
      </div>
    </div>
  );
}
