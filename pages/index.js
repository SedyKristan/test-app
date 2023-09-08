import Layout from '@components/Layout';
import LandingPage from '@modules/StaticPages/LandingPage';

const Home = () => {
  return (
    <Layout title="Beauty home" display={{ navbar: false, titlebar: false, footer: false }}>
      <LandingPage />
    </Layout>
  )
}

export default Home;