import React from 'react';

import Depoiments from '../sections/Depoiments';
import Footer from '../sections/Footer';
import Marketplaces from '../sections/Marketplaces';
import Notifications from '../sections/Notifications';
import Plans from '../sections/Plans';
import Presentation from '../sections/Presentation';
import ShippingWays from '../sections/ShippingWays';
import Success from '../sections/Success';
import Steps from '../sections/Steps';

import Header from '../components/Header';

import AppProvider from '../hooks';

function Home() {
  return (
    <AppProvider>
      <main style={{ position: 'relative' }}>
        <Header />
        <Presentation />
        <Marketplaces />
        <ShippingWays />
        <Steps />
        <Depoiments />
        <Success /> 
        <Plans />
        <Notifications />
        <Footer />
      </main>
    </AppProvider>
  );
}

export default Home;
