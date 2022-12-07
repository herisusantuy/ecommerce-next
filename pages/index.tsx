import { useEffect } from 'react';
import type { InferGetServerSidePropsType } from 'next';
import getAllProducts from '../framework/shopify/product/get-all-products';

export async function getStaticProps() {
  const products = await getAllProducts();
  console.log(
    '🚀 ~ file: index.tsx ~ line 7 ~ getStaticProps ~ products',
    products
  );
  return {
    props: {
      products
    }
    // revalidate: 4 * 60 * 60
  };
}

export default function Home({
  products
}: InferGetServerSidePropsType<typeof getStaticProps>) {
  return <div>{JSON.stringify(products)}</div>;
}
