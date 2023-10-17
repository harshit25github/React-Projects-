import { useLoaderData } from 'react-router-dom';
import { getMenu } from '../../services/apiRestaurant';
import MenuItems from './MenuItem';

function Menu() {
  const menu = useLoaderData();
  console.log(menu);
  return (
    <ul className="divide-y divide-slate-300 px-2">
      {menu.map((el) => (
        <MenuItems pizza={el} key={el.id} />
      ))}
    </ul>
  );
}
// this loader could be anywhere in the code
export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
