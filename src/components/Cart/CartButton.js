import {useDispatch, useSelector} from 'react-redux'

import { cartActions } from '../../store/cart';
import classes from './CartButton.module.css';

const CartButton = (props) => {
const cartItems = useSelector(state => state.cart.items)
  const dispatch = useDispatch()

  const cartQuantity = cartItems.reduce((acc, item) =>acc + item.quantity ,0)

function handleToggleCart() {
  dispatch(cartActions.toggleCart())
}

  return (
    <button onClick={handleToggleCart} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
