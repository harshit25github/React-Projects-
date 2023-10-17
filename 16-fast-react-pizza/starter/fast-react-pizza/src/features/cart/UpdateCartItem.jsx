import React from 'react';
import Button from '../../ui/Button';
import { useDispatch, useSelector } from 'react-redux';
import { decreaseItemQuatity, getCurrentQuantity, increaseItemQuatity } from './cartSlice';

function UpdateCartItem({ pizzaId, type = 'round' }) {
  const dispatch = useDispatch();
  const currenQuantity = useSelector(getCurrentQuantity(pizzaId));
  const NoItemPresent = currenQuantity < 1;

  return (
    <div className="flex items-center gap-2 md:gap-4">
      <Button
        type={type}
        disabled={NoItemPresent}
        onClick={() => dispatch(decreaseItemQuatity(pizzaId))}
      >
        -
      </Button>
      <span className="font-extrabold">{currenQuantity}</span>
      <Button type={type} onClick={() => dispatch(increaseItemQuatity(pizzaId))}>
        +
      </Button>
    </div>
  );
}

export default UpdateCartItem;
