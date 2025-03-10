import React, { useState, useEffect } from 'react';
import { Sun, Battery, Building2, ArrowRight, CheckCircle2, Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Calculator, Shield, Clock, Users, ChevronRight, Globe, Zap, LineChart } from 'lucide-react';

function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
      
      // Update active section based on scroll position
      const sections = ['home', 'services', 'companies', 'benefits', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      title: "Residential Solar",
      icon: <Sun className="w-8 h-8 text-yellow-500" />,
      description: "Custom-designed solar solutions for homes, maximizing energy production and savings",
      features: ["Free consultation", "Custom design", "Professional installation", "25-year warranty"]
    },
    {
      title: "Energy Storage",
      icon: <Battery className="w-8 h-8 text-green-500" />,
      description: "Advanced battery systems for reliable power storage and emergency backup",
      features: ["24/7 power backup", "Smart energy management", "Mobile monitoring", "Scalable capacity"]
    },
    {
      title: "Commercial Solar",
      icon: <Building2 className="w-8 h-8 text-blue-500" />,
      description: "Comprehensive solar solutions for businesses, reducing operational costs",
      features: ["ROI analysis", "Custom engineering", "Project management", "Performance monitoring"]
    }
  ];

  const companies = [
    {
      name: "SolarTech Solutions",
      rating: 4.8,
      reviews: 156,
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&auto=format&fit=crop&q=60",
      description: "Leading provider of solar installations with 10+ years of experience",
      certifications: ["NABCEP Certified", "Tesla Powerwall Certified"],
      stats: { installations: "2.5K+", savings: "$12M+", satisfaction: "99%" }
    },
    {
      name: "GreenPower Systems",
      rating: 4.9,
      reviews: 203,
      image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&auto=format&fit=crop&q=60",
      description: "Specialized in residential and commercial solar solutions",
      certifications: ["NABCEP Certified", "LG Pro Installer"],
      stats: { installations: "3K+", savings: "$15M+", satisfaction: "98%" }
    },
    {
      name: "EcoSolar Innovations",
      rating: 4.7,
      reviews: 178,
      image: "https://images.unsplash.com/photo-1559302995-f1d7e0b9d347?w=800&auto=format&fit=crop&q=60",
      description: "Cutting-edge solar technology with exceptional customer service",
      certifications: ["NABCEP Certified", "SunPower Elite Dealer"],
      stats: { installations: "2K+", savings: "$10M+", satisfaction: "97%" }
    }
  ];

  const stats = [
    { value: "10K+", label: "Installations", icon: <Building2 className="w-6 h-6 text-blue-400" /> },
    { value: "$50M+", label: "Customer Savings", icon: <LineChart className="w-6 h-6 text-green-400" /> },
    { value: "98%", label: "Satisfaction Rate", icon: <CheckCircle2 className="w-6 h-6 text-yellow-400" /> },
    { value: "25+", label: "Years Experience", icon: <Clock className="w-6 h-6 text-purple-400" /> }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Navigation */}


      {/* Hero Section */}
      <div id="home" className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-gray-900/95 to-gray-900"></div>
          {/* <img 
            src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1920&auto=format&fit=crop&q=80"
            alt="Solar Background"
            className="w-full h-full object-cover"
          /> */}
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="lg:w-1/2 space-y-8">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                Transform Your Energy Future
                <span className="block text-blue-400 mt-2">With Solar Power</span>
              </h1>
              <p className="mt-6 text-xl text-gray-300 max-w-3xl">
                Connect with top-rated solar providers and start your journey towards sustainable energy. We help you find the perfect solar solution tailored to your needs.
              </p>
              <div className="flex space-x-4">
                <a href="#contact" className="btn-primary">
                  Get Free Quote <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <a href="#services" className="btn-secondary">
                  Learn More
                </a>
              </div>
              <div className="grid grid-cols-2 gap-8 md:grid-cols-4 mt-12">
                {stats.map((stat, index) => (
                  <div key={index} className="glass-card p-4 text-center">
                    <div className="flex justify-center mb-2">
                      {stat.icon}
                    </div>
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-10 lg:mt-0 lg:w-1/2">
              <div className="relative animate-float">
                <div className="absolute inset-0 bg-blue-500/20 rounded-3xl blur-3xl"></div>
                <img 
                  src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=1200&auto=format&fit=crop&q=80"
                  alt="Solar Installation"
                  className="relative rounded-3xl shadow-2xl border border-gray-700"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div id="services" className="py-24 bg-gray-900/50 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="section-title">Our Solar Services</h2>
            <p className="section-subtitle">Comprehensive solar solutions tailored to your specific needs</p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {services.map((service, index) => (
              <div key={index} className="card group">
                <div className="inline-block p-3 bg-gray-700/50 rounded-lg group-hover:bg-gray-700 transition-colors">
                  {service.icon}
                </div>
                <h3 className="mt-4 text-xl font-semibold text-white">{service.title}</h3>
                <p className="mt-2 text-gray-400">{service.description}</p>
                <ul className="mt-4 space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="mt-6 btn-primary w-full justify-center">
                  Learn More <ChevronRight className="ml-2 w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="section-title">How It Works</h2>
            <p className="section-subtitle">Simple steps to start your solar journey</p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-4">
            {[
              {
                icon: <Calculator className="w-8 h-8 text-blue-400" />,
                title: "Free Assessment",
                description: "Get a customized solar assessment based on your energy needs"
              },
              {
                icon: <Users className="w-8 h-8 text-green-400" />,
                title: "Meet Providers",
                description: "Connect with certified solar installers in your area"
              },
              {
                icon: <Shield className="w-8 h-8 text-yellow-400" />,
                title: "Installation",
                description: "Professional installation with warranty protection"
              },
              {
                icon: <Clock className="w-8 h-8 text-purple-400" />,
                title: "Start Saving",
                description: "Begin saving on your energy bills immediately"
              }
            ].map((step, index) => (
              <div key={index} className="text-center group">
                <div className="inline-block p-4 bg-gray-800 rounded-full group-hover:bg-gray-700 transition-colors">
                  {step.icon}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white">{step.title}</h3>
                <p className="mt-2 text-gray-400">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Companies Section */}
      <div id="companies" className="py-24 bg-gray-900/50 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="section-title">Featured Solar Companies</h2>
            <p className="section-subtitle">Partner with industry-leading solar providers</p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {companies.map((company, index) => (
              <div key={index} className="card overflow-hidden group">
                <div className="relative">
                  <img src={company.image} alt={company.name} className="w-full h-48 object-cover rounded-lg" />
                  <div className="absolute top-4 right-4 glass-card px-3 py-1 rounded-full">
                    <div className="flex items-center">
                      <span className="text-yellow-400">★</span>
                      <span className="ml-1 font-semibold text-white">{company.rating}</span>
                      <span className="ml-1 text-gray-400 text-sm">({company.reviews})</span>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <h3 className="text-xl font-semibold text-white">{company.name}</h3>
                  <p className="mt-2 text-gray-400">{company.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {company.certifications.map((cert, idx) => (
                      <span key={idx} className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-900/50 text-blue-300 border border-blue-800/50">
                        <Shield className="w-4 h-4 mr-1" />
                        {cert}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 grid grid-cols-3 gap-4">
                    {Object.entries(company.stats).map(([key, value]) => (
                      <div key={key} className="text-center p-2 rounded-lg bg-gray-800/50">
                        <div className="text-lg font-semibold text-white">{value}</div>
                        <div className="text-xs text-gray-400">{key}</div>
                      </div>
                    ))}
                  </div>
                  <button className="mt-6 btn-primary w-full justify-center">
                    Request Quote
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div id="benefits" className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="section-title">Why Choose Solar?</h2>
            <p className="section-subtitle">Discover the advantages of switching to solar energy</p>
          </div>
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: <Zap className="w-6 h-6 text-yellow-400" />,
                title: "Reduce Energy Costs",
                description: "Save up to 70% on your electricity bills"
              },
              {
                icon: <Building2 className="w-6 h-6 text-green-400" />,
                title: "Increase Property Value",
                description: "Add significant value to your property"
              },
              {
                icon: <Globe className="w-6 h-6 text-blue-400" />,
                title: "Environmental Benefits",
                description: "Reduce your carbon footprint significantly"
              },
              {
                icon: <Shield className="w-6 h-6 text-purple-400" />,
                title: "Government Incentives",
                description: "Take advantage of tax credits and rebates"
              },
              {
                icon: <Battery className="w-6 h-6 text-red-400" />,
                title: "Energy Independence",
                description: "Generate your own clean, reliable power"
              },
              {
                icon: <Clock className="w-6 h-6 text-indigo-400" />,
                title: "Low Maintenance",
                description: "Minimal upkeep with 25+ years lifespan"
              }
            ].map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 glass-card hover:bg-gray-800/50 transition-colors duration-200">
                <div className="flex-shrink-0">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-white">{benefit.title}</h3>
                  <p className="mt-1 text-gray-400">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="py-24 bg-gray-900/50 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card overflow-hidden">
            <div className="lg:grid lg:grid-cols-2">
              <div className="py-16 px-8 lg:px-12 bg-gradient-to-br from-blue-900 to-blue-700">
                <h2 className="text-3xl font-bold text-white">Ready to Go Solar?</h2>
                <p className="mt-4 text-blue-200">Get in touch with us to start your solar journey today.</p>
                <div className="mt-8 space-y-6">
                  <div className="flex items-center">
                    <Phone className="w-6 h-6 mr-4 text-blue-300" />
                    <span className="text-blue-100">1-800-SOLAR-HELP</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-6 h-6 mr-4 text-blue-300" />
                    <span className="text-blue-100">contact@bpnsolutions.com</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-6 h-6 mr-4 text-blue-300" />
                    <span className="text-blue-100">123 Solar Street, Energy City, EC 12345</span>
                  </div>
                </div>
              </div>
              <div className="py-16 px-8 lg:px-12 bg-gray-800/50">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-300">First Name</label>
                      <input type="text" id="firstName" className="input-field" />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-300">Last Name</label>
                      <input type="text" id="lastName" className="input-field" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
                    <input type="email" id="email" className="input-field" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300">Phone</label>
                    <input type="tel" id="phone" className="input-field" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
                    <textarea id="message" rows={4} className="input-field"></textarea>
                  </div>
                  <button type="submit" className="btn-primary w-full justify-center">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}

    </div>
  );
}

export default Home;