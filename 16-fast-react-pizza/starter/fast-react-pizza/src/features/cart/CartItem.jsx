import { useDispatch } from 'react-redux';
import Button from '../../ui/Button';
import { formatCurrency } from '../../utils/helpers';
import { deleteItem } from './cartSlice';
import UpdateCartItem from './UpdateCartItem';
function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;
  const dispatch = useDispatch();

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p>
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-4">
        <p>{formatCurrency(totalPrice)}</p>
        <UpdateCartItem pizzaId={pizzaId} />
        <Button type="small" onClick={() => dispatch(deleteItem(pizzaId))}>
          Delete
        </Button>
      </div>
    </li>
  );
}

export default CartItem;
