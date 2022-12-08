import { useEffect } from 'react';
import type { InferGetServerSidePropsType } from 'next';
import getAllProducts from '@framework/product/get-all-products';

export async function getStaticProps() {
  const products = await getAllProducts();
  return {
    props: {
      products
    },
    revalidate: 4 * 60 * 60
  };
}

export default function Home({
  products
}: InferGetServerSidePropsType<typeof getStaticProps>) {
  return <div>{JSON.stringify(products)}</div>;
}
