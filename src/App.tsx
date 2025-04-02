import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import { PricingPage } from './pages/PricingPage';
import { 
  AdvertisingServices,
  ContentServices,
  StrategyServices 
} from './pages/ServicePages';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="services">
          <Route path="advertising" element={<AdvertisingServices />} />
          <Route path="content" element={<ContentServices />} />
          <Route path="strategy" element={<StrategyServices />} />
        </Route>
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="pricing" element={<PricingPage />} />
      </Route>
    </Routes>
  );
}

export default App;