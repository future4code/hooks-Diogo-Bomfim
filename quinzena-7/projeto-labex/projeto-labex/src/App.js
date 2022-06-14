import React from 'react';
import { useEffect, useState } from "react"
import HomePage from '../src/Pages/HomePage'; 	
import ListTripsPage from './Pages/ListTripsPage';
import ApplicationFormPage from './Pages/ApplicationFormPage';

const App = () => {
  return (
    <div>
      <ListTripsPage/>
    </div>
  );
}

export default App;
