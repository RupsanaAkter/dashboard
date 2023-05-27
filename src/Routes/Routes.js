import React from 'react';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Dashboard from '../components/Dashboard/Dashboard';
import Inventory from '../components/Inventory/Inventory';

function AppRoutes()  {
    return (
        <Routes>
                <Route path="/" element={<Dashboard />}></Route>
               <Route path="/inventory" element={<Inventory />}></Route>
              {/* <Route path="/orders" element={<Orders />}></Route>
              <Route path="/customers" element={<Customers />}></Route>    */}
            </Routes>
    );
};

export default AppRoutes;