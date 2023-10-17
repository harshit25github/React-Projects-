import { useDispatch, useSelector } from 'react-redux';
import Button from '../../ui/Button';
import { formatCurrency } from '../../utils/helpers';
import { addItem, getCurrentQuantity } from '../cart/cartSlice';
import DeleteItem from '../cart/DeleteItem';
import UpdateCartItem from '../cart/UpdateCartItem';

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const dispatch = useDispatch();
  const currenQuantity = useSelector(getCurrentQuantity(id));
  const itemInCart = currenQuantity > 0;

  function handleAddToCart() {
    const payload = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    };

    dispatch(addItem(payload));
  }
  return (
    <li className="flex gap-4 py-2 ">
      <img src={imageUrl} alt={name} className={`h-24 ${soldOut ? 'opacity-70 grayscale' : ''}`} />
      <div className="flex flex-grow flex-col">
        <p className="text-[1.3rem] font-black text-slate-950">{name}</p>
        <p className="text-lg font-semibold capitalize italic">{ingredients.join(', ')}</p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? (
            <>
              <p>{formatCurrency(unitPrice)}</p>

              {itemInCart ? (
                <div className="flex justify-around gap-2 md:gap-5">
                  <UpdateCartItem pizzaId={id} />
                  <DeleteItem type="small" pizzaId={id} />
                </div>
              ) : (
                <Button type="small" onClick={handleAddToCart}>
                  Add To Cart
                </Button>
              )}
            </>
          ) : (
            <p className="text-sm font-medium uppercase text-slate-400">Sold out</p>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
