import Layout from "@components/Layout";
import CompletePage from "@modules/StaticPages/Complete";

const Favorites = () => {
  return (
    <Layout display={{ navbar: false, titlebar: false, footer: false }}>
      <CompletePage />
    </Layout>
  );
};

export default Favorites;
