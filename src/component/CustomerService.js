import React, { useState } from "react";
import axios from "axios";
import "../chatbot.css"
import ReactMarkdown from "react-markdown";

const Chatbot = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const API_KEY = "AIzaSyAIvEq7vqxdlRlNWmZkTG1OWETFBUOvJw4"; // Replace with your API key

  const sendMessage = async () => {
    if (!input.trim()) return;

    const CompanyInformation = `
**Company Overview**:
We are a platform that connects manufacturers of solar panels and nano-coatings with hotels, debt-burdened properties, and companies looking to reduce taxes. Our goal is to expand the use of renewable energy without cost to property owners, reduce financial burdens, and create sustainable profits for all participants.

**How the Model Works**:
1. **For Property Owners**: Instead of paying taxes or facing financial difficulties, property owners can allow energy companies to install renewable energy solutions (solar panels or nano-coatings) on their roofs for free.
2. **For Energy Manufacturers**: Energy manufacturers can install their products on properties without upfront costs and benefit from selling the generated energy.
3. **For Consumers**: Consumers (factories, charging stations, etc.) can purchase the generated energy at competitive rates.

**Services Provided**:
1. **Facilitating Installations**: We connect property owners with energy manufacturers and handle the installation process.
2. **Energy Distribution**: We distribute the generated energy to charging stations, factories, and other consumers.
3. **Maintenance**: We provide maintenance services using smart sensors to monitor systems and predict failures before they occur.

**Revenue Model**:
1. **Maintenance Fees**: We charge monthly maintenance fees similar to insurance.
2. **Energy Sales**: We sell the generated electricity to consumers.
3. **Network Expansion**: As more properties join the platform, our profits grow.

**Benefits for Property Owners**:
1. **Financial Relief**: Property owners can reduce their financial burdens by allowing energy installations on their premises.
2. **Compensation**: Owners with unused spaces can receive financial compensation or rent their land to the company for a fixed period.
3. **Ownership Transfer**: After a fixed period, ownership of the land can be transferred to the company.

**Target Audience**:
1. **Hotels, Properties, and Companies**: Our platform is ideal for hotels, debt-burdened properties, and companies looking to reduce taxes.
2. **Individuals with Unused Spaces**: Individuals with unused spaces can also benefit by receiving compensation or renting their land to us.

**Frequently Asked Questions (FAQs)**:
1. **How does the platform work?**
2. **What are the benefits for property owners?**
3. **How is energy distributed?**
4. **What are the maintenance fees?**
5. **How can I join the platform?**

**Contact Information**:
- **Email**: info@yourcompany.com
- **Phone**: +123 456 7890
- **Website**: www.yourcompany.com
`;
    const userMessage = { role: "user", text: input };
    const CompanyPlanContext = `you are client service for the client and you should know the company informaition ${CompanyInformation}, \n\n User's question: ${input}`;
    setMessages((prev) => [...prev, userMessage]);

    try {
      const response = await axios.post(
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyAIvEq7vqxdlRlNWmZkTG1OWETFBUOvJw4",
        {
          contents: [{ role: "user", parts: [{ text: CompanyPlanContext }] }],
        },
        {
          headers: {
            "Content-Type": "application/json",
            "x-goog-api-key": API_KEY,
          },
        }
      );

      const botMessage = {
        role: "bot",
        text: response.data.candidates[0].content.parts[0].text,
      };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error sending message:", error);
    }

    setInput("");
  };

  return (
    

<div className="chatbot-container">
  <div className="messages">
    {messages.map((msg, index) => (
      <div
        key={index}
        className={`message ${msg.role === "user" ? "user" : "bot"}`}
      >
        <ReactMarkdown>{msg.text}</ReactMarkdown>
      </div>
    ))}
  </div>
  <div className="input-area">
    <input
      type="text"
      value={input}
      onChange={(e) => setInput(e.target.value)}
      placeholder="Type your message..."
      onKeyPress={(e) => e.key === "Enter" && sendMessage()}
    />
    <button onClick={sendMessage}>Send</button>
  </div>
</div>
  );
};

export default Chatbot;