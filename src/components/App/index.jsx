import 'components/App/styles.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from 'components/Footer';
import HomePage from '../HomePage';
import AboutUsPage from 'components/AboutUsPage';
import Navigation from 'components/Navigation';
import RestaurantPage from 'components/RestaurantPage';
import CartPage from 'components/CartPage';


function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/restaurant/:slug" element={<RestaurantPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
