import logo from './logo.svg';
import './App.css';
import Home from './component/home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SolarForm from './component/SolarForm';
import Dashboard from './component/Dashboard';
import CompanyDetails from './component/CompanyDetails';
import Header from './component/Header';
import Footer from './component/Footer';

function App() {
  return (
    <Router>
    <Header/>
    <Routes>
            <Route path="/SolarForm" element={<SolarForm />} />
            <Route path="/" element={<Home />} />
            <Route path="Dashboard" element={<Dashboard />} />
            <Route path="/company/:id" element={<CompanyDetails />} />
        </Routes>
    <Footer/>
    </Router>
  );
}

export default App;
