import React from 'react'
import Header from './components/Header'
import dynamic from 'next/dynamic';

export default function page() {
  const ComponenteProducts = dynamic(() => import('./components/ProductsList'));
  return (
    <>
      <Header />
      <ComponenteProducts />
    </>

  )
}
