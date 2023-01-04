import React from 'react'
import { Routes, Route } from "react-router-dom";
import CoinDetails from '../Components/CoinDetails';
import Coins from '../Components/Coins';
import Exchanges from '../Components/Exchanges';
import Navbar from '../Components/Navbar';

const AllRoute = () => {
    return (
        <div>
            <Navbar/>
            <Routes>
               
                <Route path="/" element={<Exchanges />} />
                <Route path="/coins" element={<Coins />} />
                <Route path="/coin/:id" element={<CoinDetails />} />
            </Routes>

        </div>
    )
}

export default AllRoute