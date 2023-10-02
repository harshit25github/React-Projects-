import { useSelector } from "react-redux";

function Customer() {
  // subrcription creation
  const customer = useSelector((store) => store.customer);
  // as the store updates this component will again re-render
  console.log(customer);
  return <h2>👋 Welcome, {customer?.fullName}</h2>;
}

export default Customer;
