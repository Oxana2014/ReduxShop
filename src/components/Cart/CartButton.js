import {useDispatch} from 'react-redux'

import { cartActions } from '../../store/cart';
import classes from './CartButton.module.css';

const CartButton = (props) => {

  const dispatch = useDispatch()

function handleToggleCart() {
  dispatch(cartActions.toggleCart())
}

  return (
    <button onClick={handleToggleCart} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
