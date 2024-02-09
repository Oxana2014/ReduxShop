import {useSelector} from 'react-redux'

import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import cart from '../../store/cart';

const Cart = (props) => {
const cartItems = useSelector(state => state.cart.items)
console.log("cart items: ", cartItems)

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems.length > 0 && cartItems.map(item => <CartItem key={item.id} {...item}  /> )}
        {/* <CartItem
          item={{ title: 'Test Item', quantity: 3, total: 18, price: 6 }}
        /> */}
      </ul>
    </Card>
  );
};

export default Cart;
