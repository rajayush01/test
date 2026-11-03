import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import TheGoodIdentity from './pages/TheGoodIdentity';
import TheGoodExpression from './pages/TheGoodExpression';
import Touchpoints from './pages/Touchpoints';
import TheGoodVoice from './pages/TheGoodVoice';
import GoodEnergyPeople from './pages/GoodEnergyPeople';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/the-good-identity" element={<TheGoodIdentity />} />
        <Route path="/the-good-expression" element={<TheGoodExpression />} />
        <Route path="/touchpoints" element={<Touchpoints />} />
        <Route path="/the-good-voice" element={<TheGoodVoice />} />
        {/* visualidentity.html in the original site is a byte-identical copy of thegoodvoice.html */}
        <Route path="/visual-identity" element={<TheGoodVoice />} />
        <Route path="/good-energy-people" element={<GoodEnergyPeople />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}
