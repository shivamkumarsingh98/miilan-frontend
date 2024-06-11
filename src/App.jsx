import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/mainpage/Home";
import LiveDashboard from "./component/live/LiveDashbord";
import Dashbord from "./component/dashbord/Dashbord";
import ProtectedRoute from "./Context/ProtectRoute/ProtactedRoute";
import Main from "./component/main/Main";
import Paymentdis from "./component/payment/Payment/Paymentdis";
import Paymentcity from "./component/payment/Payment/Paymentcity";
import Payment from "./component/payment/Payment/Payment";

export const HomePage = () => {};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Main />} />
          <Route element={<ProtectedRoute />}>
            <Route path="livepage/" element={<LiveDashboard />} />
          </Route>
          <Route element={<ProtectedRoute />}>
            <Route path="/PaymentPage" element={<Payment />} />
          </Route>
          <Route element={<ProtectedRoute />}>
            <Route path="/Districtpage" element={<Paymentdis />} />
          </Route>
          <Route element={<ProtectedRoute />}>
            <Route path="/Paymentcitypage" element={<Paymentcity />} />
          </Route>
          <Route element={<ProtectedRoute />}>
            <Route path="/Dashbord" element={<Dashbord />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
