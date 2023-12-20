
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
import RegisteredTable from "./Pages/RegisteredTable";
function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/log" element={<Login/>}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/desc" element={<Description/>}/>
    <Route path="/descvege" element={<DescriptionVege/>}/>
    <Route path="/fruitdetails/:id" element={<OrangeCart/>} />
    <Route path="/vegetabledetails/:id" element={<VegetableCart/>} />
    <Route path="/faq" element={<FAQ/>}/>
    <Route path="/privacy" element={<PrivacyPolicy/>}/>
    <Route path="/terms" element={<TermsConditions/>}/>
    <Route path="/aboutus" element={<AboutUs/>}/>
    <Route path="/contactus" element={<ContactUs/>}/>
    <Route path="/shipping" element={<ShippingPolicy/>}/>
    <Route path="/cart" element={<Cart/>}/>
    <Route path="/registertable" element={<RegisteredTable/>}/>
    <Route path="/" element={<Homepage data={slides}/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
