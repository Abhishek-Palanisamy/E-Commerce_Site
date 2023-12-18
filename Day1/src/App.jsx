
import { BrowserRouter, Route, Routes } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar1 from "./Components/Navbar1";
import Description from "./Pages/Description";
import Cart from "./Pages/Cart";
import OrangeCart from "./Pages/OrangeCart"
import PrivacyPolicy from "./Pages/PrivacyPolicy"
import TermsConditions from "./Pages/TermsConditions"
import AboutUs from "./Pages/AboutUs"
import ContactUs from "./Pages/ContactUs"
import ShippingPolicy from "./Pages/ShippingPolicy"
import FAQ from "./Pages/FAQ"
import Footer from './Components/Footer'
function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar1/>
    <Routes>
    
    <Route path="/" element={<Description/>}/>
    <Route path="/fruitdetails/:id" element={<OrangeCart/>} />
    <Route path="/faq" element={<FAQ/>}/>
    <Route path="/privacy" element={<PrivacyPolicy/>}/>
    <Route path="/terms" element={<TermsConditions/>}/>
    <Route path="/aboutus" element={<AboutUs/>}/>
    <Route path="/contactus" element={<ContactUs/>}/>
    <Route path="/shipping" element={<ShippingPolicy/>}/>
    <Route path="/cart" element={<Cart/>}/>
    </Routes>
    </BrowserRouter>
    <Footer/>
    </>
  )
}

export default App
