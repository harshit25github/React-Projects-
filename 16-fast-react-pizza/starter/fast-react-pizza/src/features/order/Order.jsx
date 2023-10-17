// Test ID: IIDSAT

import { useLoaderData } from 'react-router-dom';
import { getOrder } from '../../services/apiRestaurant';
import { calcMinutesLeft, formatCurrency, formatDate } from '../../utils/helpers';
import { useSelector } from 'react-redux';
import OderItem from './OrderItem';
function Order() {
  // Everyone can search for all orders, so for privacy reasons we're gonna gonna exclude names or address, these are only for the restaurant staff
  const username = useSelector((state) => state.user.username);
  const order = useLoaderData();
  const { id, status, priority, priorityPrice, orderPrice, estimatedDelivery, cart } = order;
  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  return (
    <div className="space-y-8 px-4 py-4">
      <div className="flex flex-wrap justify-between gap-2">
        <h2 className="text-xl font-bold">Order #{id} Status</h2>

        <div className="space-x-4">
          {priority && (
            <span className="rounded-full bg-red-500 px-3 py-2 font-semibold uppercase text-red-100">
              Priority
            </span>
          )}
          <span className="rounded-full bg-green-500 px-3 py-2 font-semibold uppercase text-green-100">
            {status} order
          </span>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-2 bg-slate-300 px-2 py-5">
        <p className="text-lg font-semibold">
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
            : 'Order should have arrived'}
        </p>
        <p className="text-[.8rem] text-slate-500">
          (Estimated delivery: {formatDate(estimatedDelivery)})
        </p>
      </div>
      <ul className="divide-y divide-slate-300 border-b border-t">
        {cart.map((item) => (
          <OderItem item={item} key={item.id} />
        ))}
      </ul>
      <div className="flex flex-col justify-center gap-1 bg-slate-300 px-2 py-4 font-medium">
        <p>Price pizza: {formatCurrency(orderPrice)}</p>
        {priority && <p>Price priority: {formatCurrency(priorityPrice)}</p>}
        <p className="w-72 rounded-lg bg-slate-950 px-2 py-3 text-center font-semibold text-white">
          To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}
        </p>
      </div>
    </div>
  );
}

export async function loader({ params }) {
  const order = await getOrder(params.orderId);
  return order;
}
export default Order;
