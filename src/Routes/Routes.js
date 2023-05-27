import React from 'react';
import { Route,Routes } from 'react-router-dom';
import Dashboard from '../components/Dashboard/Dashboard';
import Inventory from '../components/Inventory/Inventory';
import Orders from '../components/Orders/Orders';

function AppRoutes()  {
    return (
        <Routes>
                <Route path="/" element={<Dashboard />}></Route>
               <Route path="/inventory" element={<Inventory />}></Route>
             <Route path="/orders" element={<Orders />}></Route>
              {/* <Route path="/customers" element={<Customers />}></Route>     */}
            </Routes>
    );
};

export default AppRoutes;