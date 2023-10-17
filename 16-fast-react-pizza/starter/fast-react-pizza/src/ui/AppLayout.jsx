import React from 'react';
import Header from './Header';
import CartOverview from '../features/cart/CartOverview';
import { Outlet, useNavigation } from 'react-router-dom';
import Loader from './Loader';

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';
  console.log(navigation, isLoading);

  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      <Header />
      <div className=" overflow-scroll">
        <main className="mx-auto max-w-3xl">{isLoading ? <Loader /> : <Outlet />}</main>
      </div>
      {/* <main className="flex items-center justify-center overflow-scroll ">
        {isLoading ? <Loader /> : <Outlet />}
      </main> */}

      <CartOverview />
    </div>
  );
}

export default AppLayout;
