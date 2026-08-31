import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Touchpoints from "./pages/Touchpoints";
import VisualIdentity from "./pages/VisualIdentity";
import TheGoodVoice from "./pages/TheGoodVoice";
import GoodEnergyPeople from "./pages/GoodEnergyPeople";
import TheGoodIdentity from "./pages/TheGoodIdentity";
import TheGoodIdentityLegacy from "./pages/TheGoodIdentityLegacy";
import StartWithGood from "./pages/StartWithGood";
import LearnCheckApply from "./pages/LearnCheckApply";
import Logo from "./pages/Logo";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/touchpoints" element={<Touchpoints />} />
      <Route path="/visual-identity" element={<VisualIdentity />} />
      <Route path="/speak-with-goodness" element={<TheGoodVoice />} />
      <Route path="/good-energy-people" element={<GoodEnergyPeople />} />
      <Route path="/the-good-identity" element={<TheGoodIdentity />} />
      <Route path="/the-good-identity-legacy" element={<TheGoodIdentityLegacy />} />
      <Route path="/start-with-good" element={<StartWithGood />} />
      <Route path="/learn-check-apply" element={<LearnCheckApply />} />
      <Route path="/the-good-identity/logo" element={<Logo />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
}
