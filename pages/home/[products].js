import Layout from "@components/Layout";
import Product from "@modules/Home/Product";
import productsData from "@modules/Home/utils/productsList.json";
import { useRouter } from "next/router";

const Products = ({ uniqueProductIds }) => {
  const router = useRouter();
  const productId = router.query.products;
  return (
    <Layout display={{ navbar: false, titlebar: false, footer: false }}>
      <Product productId={productId} />
    </Layout>
  );
};

export default Products;

export const getStaticPaths = async () => {
  const uniqueProductIds = [
    ...new Set(productsData.map((product) => product.product_id)),
  ];

  const paths = uniqueProductIds.map((productId) => ({
    params: { products: productId.toString() }, // Use "products" here
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async () => {
  const uniqueProductIds = [
    ...new Set(productsData.map((product) => product.product_id)),
  ];

  return {
    props: {
      uniqueProductIds,
    },
  };
};
