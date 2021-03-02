import React, { useState, useEffect } from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Homepage from '../../components/Homepage';


const Dashboard: React.FC = () => {
  return (
    <>
      <Header />
      <Homepage />
      <Footer />
    </>
  );
};

export default Dashboard;
