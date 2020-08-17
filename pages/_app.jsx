import 'materialize-css/dist/css/materialize.min.css';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  return <Layout>
    <Component {...pageProps} />
  </Layout>
}

export default MyApp
