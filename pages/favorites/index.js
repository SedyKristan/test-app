import Layout from "@components/Layout";
import FavoritesComponent from "@modules/Favorites";

const Favorites = () => {
  return (
    <Layout
      display={{ navbar: true, titlebar: false, footer: false }}
      module="Favorites"
    >
      <FavoritesComponent />
    </Layout>
  );
};

export default Favorites;
