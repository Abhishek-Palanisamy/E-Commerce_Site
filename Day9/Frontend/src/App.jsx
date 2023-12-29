
import { BrowserRouter, Route, Routes } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar1 from "./Components/Navbar1";
import Description from "./Pages/Description";
import DescriptionVege from "./Pages/DescriptionVege";
import Cart from "./Pages/Cart";
import OrangeCart from "./Pages/OrangeCart"
import PrivacyPolicy from "./Pages/PrivacyPolicy"
import TermsConditions from "./Pages/TermsConditions"
import AboutUs from "./Pages/AboutUs"
import ContactUs from "./Pages/ContactUs"
import ShippingPolicy from "./Pages/ShippingPolicy"
import FAQ from "./Pages/FAQ"
import Footer from './Components/Footer'
import Login from "./Pages/login";
import Signup from "./Pages/Signup";
import {slides} from "./Pages/ImageSlider.json"
import Homepage from "./Pages/Homepage";
import VegetableCart from "./Pages/VegetableCart";
import OFCart from "./Pages/OFCart";
import RegisteredTable from "./Pages/RegisteredTable";
import Myorders from "./Pages/Myorders";
import Profile from "./Pages/Profile";
import Billing from "./Pages/Billing";
import DescriptionPE from "./Pages/DescriptionPE";
import DescriptionOF from "./Pages/DescriptionOF";
import PECart from "./Pages/PECart";
import BeveCart from "./Pages/BeveCart";
import DescriptionBeve from "./Pages/DescriptionBeve";
import DescriptionAmul from "./Pages/DescriptionAmul";
import AmulCart from "./Pages/AmulCart";
import ContactUsTable from "./Pages/ContactUsTable";
import CartTable from "./Pages/CartTable";
function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/log" element={<Login/>}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/desc" element={<Description/>}/>
    <Route path="/descvege" element={<DescriptionVege/>}/>
    <Route path="/descpe" element={<DescriptionPE/>}/>
    <Route path="/descof" element={<DescriptionOF/>}/>
    <Route path="/descamul" element={<DescriptionAmul/>}/>
    <Route path="/descbeve" element={<DescriptionBeve/>}/>
    <Route path="/fruitdetails/:id" element={<OrangeCart/>} />
    <Route path="/vegetabledetails/:id" element={<VegetableCart/>} />
    <Route path="/pedetails/:id" element={<PECart/>} />
    <Route path="/ofdetails/:id" element={<OFCart/>} />
    <Route path="/amuldetails/:id" element={<AmulCart/>} />
    <Route path="/bevedetails/:id" element={<BeveCart/>} />
    <Route path="/faq" element={<FAQ/>}/>
    <Route path="/privacy" element={<PrivacyPolicy/>}/>
    <Route path="/terms" element={<TermsConditions/>}/>
    <Route path="/aboutus" element={<AboutUs/>}/>
    <Route path="/contactus" element={<ContactUs/>}/>
    <Route path="/shipping" element={<ShippingPolicy/>}/>
    <Route path="/cart" element={<Cart/>}/>
    <Route path="/billing" element={<Billing/>}/>
    <Route path="/profile" element={<Profile/>}/>
    <Route path="/myorders" element={<Myorders/>}/>
    <Route path="/registertable" element={<RegisteredTable/>}/>
    <Route path="/contactustable" element={<ContactUsTable/>}/>
    <Route path="/carttable" element={<CartTable/>}/>
    <Route path="/" element={<Homepage data={slides}/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
