import { Form, redirect, useActionData, useNavigation } from 'react-router-dom';
import { createOrder } from '../../services/apiRestaurant';
import Button from '../../ui/Button';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, getCart } from '../cart/cartSlice';
import store from '../../store';
import { fetchAddress } from '../user/userSlice';

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(str);

const fakeCart = [
  {
    pizzaId: 12,
    name: 'Mediterranean',
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: 'Vegetale',
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: 'Spinach and Mushroom',
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function CreateOrder() {
  const { username, status: addressStatus, address, position } = useSelector((state) => state.user);
  console.log(addressStatus);
  // const { username } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const isLoadingAddress = addressStatus === 'loading';
  // const [withPriority, setWithPriority] = useState(false);
  const cart = useSelector(getCart);
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  // result of action we can get by here , but mostly it is used fro error handling

  const formErrors = useActionData();

  return (
    <div className="px-4 py-6">
      <h2 className="mb-8 text-[1.2rem] font-extrabold sm:text-[2rem]">
        Ready to order? Let's go!
      </h2>

      <Form method="POST">
        <div className="mb-5 flex flex-col gap-2 sm:flex-row">
          <label className="sm:basis-40">First Name</label>
          <input
            type="text"
            name="customer"
            required
            className="input grow"
            defaultValue={username}
          />
        </div>

        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Phone number</label>
          <div className="grow">
            <input type="tel" name="phone" required className="input w-full" />
            {formErrors?.phone && (
              <div className="mt-2 rounded-xl bg-red-100 px-4 text-[.8rem] font-semibold tracking-wide text-red-700 ">
                *{formErrors.phone}*
              </div>
            )}
          </div>
        </div>

        <div className="relative mb-5 flex flex-col gap-2 sm:flex-row">
          <label className="sm:basis-40">Address</label>
          <div className="grow">
            <input
              type="text"
              name="address"
              required
              className="input w-full"
              defaultValue={address}
              disabled={isLoadingAddress}
            />
          </div>
          {!position.latitude && (
            <span className="absolute right-[3px] top-[1.7px]">
              <Button
                disabled={isLoadingAddress}
                type="small"
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(fetchAddress());
                }}
              >
                Get Position
              </Button>
            </span>
          )}
        </div>

        <div className="mb-5 flex items-center  gap-7">
          <input
            type="checkbox"
            name="priority"
            id="priority"
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
            className="h-6 w-6  accent-sky-400 focus:outline-none"
          />
          <label htmlFor="priority" className="font-extrabold">
            Want to yo give your order priority?
          </label>
        </div>

        <div>
          {/*MUST READ ---  Since we need a order detail as well wich will come from some where from the state management which only can be use by the component \
          , to use it from the Form action we will create  a hack --> we will pass all that data to the to input value and make it hidden */}
          <input value={JSON.stringify(cart)} type="hidden" name="cart" />
          <Button type="primary" disabled={isSubmitting}>
            {isSubmitting ? 'Placing order ...' : 'Order Now'}
          </Button>
        </div>
      </Form>
    </div>
  );
}

export async function action({ request }) {
  // 1. take out the formdata
  const formData = await request.formData();
  // console.log(formData);
  // 2. convert formdata into readable object
  const data = Object.fromEntries(formData);
  // 3 taking the component state in a cart format
  const oder = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === 'on',
  };
  console.log(oder);

  const errors = {};
  if (!isValidPhone(oder.phone)) {
    errors.phone = 'Please give the valid mobile number ';
  }
  if (Object.keys(errors).length > 0) return errors;
  const newOrder = await createOrder(oder);

  store.dispatch(clearCart());

  return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;
