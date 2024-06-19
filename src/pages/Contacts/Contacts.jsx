import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../../styles/Contacts.css'

const Contacts = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const navigate=useNavigate();
    const faqs = [
        { question: 'How do I track my order?', answer: 'You can track your order by clicking on the tracking link sent to your email.' },
        { question: 'What is the return policy?', answer: 'Our return policy allows you to return products within 30 days of purchase.' },
        { question: 'How do I contact customer support?', answer: 'You can contact customer support through our live chat or contact us page.' },
    ];
    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    const handleLiveChatClick = () => {
        navigate('/contacts/chatbot');
    };

  return (
          <div className="support-container" id='contacts'>
              <h1>Customer Support</h1>
              <p>Welcome to our customer support page. How can we assist you today?</p>

              <div className="support-options">
                  <div className="option">
                      <h2>FAQs</h2>
                  <div className="faq-section">
                      {faqs.map((faq, index) => (
                          <div key={index} className="faq-item">
                              <button onClick={() => toggleFAQ(index)}>
                                  {faq.question}
                              </button>
                              {activeIndex === index && <p className="faq-answer">{faq.answer}</p>}
                          </div>
                      ))}
                  </div>
                  </div>
                  <div className="option">
                      <h2>Contact Us</h2>
                      <p>Get in touch with our support team.</p>
                  </div>
                  <div className="option">
                  <div className="option chat-option" onClick={handleLiveChatClick}>
                      <h2>Live Chat</h2>
                      <p>Chat with a support representative.</p>
                  </div>
                  </div>
              </div>
          </div>
  )
}

export default Contacts