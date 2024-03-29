import {useSelector} from 'react-redux'

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';


function App() {
  const cartIsShown = useSelector(state => state.cart.isShown)
  return (
    <Layout>
     {cartIsShown &&  <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
