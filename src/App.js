import logo from './logo.svg';
import './App.css';
import Home from './component/home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SolarForm from './component/SolarForm';
import Dashboard from './component/Dashboard';
import CompanyDetails from './component/CompanyDetails';
import Header from './component/Header';
import Footer from './component/Footer';
import Chatbot from './component/CustomerService';
import { UserProvider } from './component/UserContext';
import Profile from './component/Profile';

function App() {
  return (
    <UserProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/SolarForm" element={<SolarForm />} />
          <Route path="/" element={<Home />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/company/:id" element={<CompanyDetails />} />
          <Route path="/CustomerService" element={<Chatbot />} />
          <Route path="/Profile" element={<Profile />} />
        </Routes>
        <Footer />
      </Router>
    </UserProvider>
  );
}

export default App;
