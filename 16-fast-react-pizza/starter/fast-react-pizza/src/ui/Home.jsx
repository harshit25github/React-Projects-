import CreateUser from '../features/user/CreateUser';
import { useSelector } from 'react-redux';
import Button from './Button';
import { useNavigate } from 'react-router-dom';
function Home() {
  const navigate = useNavigate();
  const username = useSelector((state) => state.user.username);
  return (
    <div className="text-Gray-950 mb-10 mt-8 px-3 text-center text-xl font-semibold">
      <h1 className="mb-8">
        The best pizza.
        <br />
        Straight out of the oven, straight to you.
      </h1>
      {username === '' ? <CreateUser /> : <Button to={'/menu'}>Open Menu</Button>}
    </div>
  );
}

export default Home;
