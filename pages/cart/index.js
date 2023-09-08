import Layout from "@components/Layout";
import CartComponent from "@modules/Cart";

const Favorites = () => {
  return (
    <Layout display={{ navbar: false, titlebar: false, footer: false }}>
      <CartComponent />
    </Layout>
  );
};

export default Favorites;
