import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import WebAndMobileSection from './components/WebAndMobileSection/WebAndMobileSection';
import DigitalStrategyConsultingSection from './components/DigitalStrategyConsultingSection/DigitalStrategyConsultingSection';
import FaqSection from './components/FAQSection/FaqSection';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <>
    {/* Navigation Bar */}
    <Header/>
    
    {/* Hero Section */}
    <Hero/>

    {/* Web & Mobile App Development Section */}
    <WebAndMobileSection/>

    {/* Digital Strategy Consulting Section  */}
    <DigitalStrategyConsultingSection/>

    {/* FAQ Section */}
    <FaqSection/>

    {/* Footer */}
    <Footer/>
    </>
    
  );
}

export default App;
