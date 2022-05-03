

import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'

import DeFiLayout from '../layout/defi';
import ChartLayout from '../layout/chart';

const layouts = {
  DeFi: DeFiLayout,
  Chart: ChartLayout,
};


function MyApp({ Component, pageProps }) {
  const Layout = layouts[Component.layout] || ((children) => <>{children}</>);
  return (<Layout><Component {...pageProps} /></Layout>)
}

export default MyApp;