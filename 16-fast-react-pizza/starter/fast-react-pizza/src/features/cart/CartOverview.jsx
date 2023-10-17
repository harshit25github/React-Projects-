import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getTotalPrice, getTotalQuatity } from './cartSlice';
import { formatCurrency } from '../../utils/helpers';
function CartOverview() {
  const totalPrice = useSelector((state) => getTotalPrice(state));
  const totalQuantity = useSelector((state) => getTotalQuatity(state));
  if (totalQuantity === 0) return null;
  return (
    <div className="flex h-14   items-center justify-between bg-slate-950 px-4  text-sm text-slate-50 md:text-base">
      <p className="space-x-4 font-semibold">
        <span>{totalQuantity} pizzas</span>
        <span>{formatCurrency(totalPrice)}</span>
      </p>
      <Link to={'/cart'}>Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
