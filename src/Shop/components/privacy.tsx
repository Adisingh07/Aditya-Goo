import React from 'react';
import './style.css'; // Adjust path if using CSS modules or different structure
import { Link } from 'react-router-dom'; // If using React Router for navigation

const PrivacyPolicy: React.FC = () => {
  return (
    <div>
      <header className="header">
        <Link to="/" className="logo">🔍 Aditya Goo</Link>
      </header>

      <main className="container">
        <h2>Privacy Policy</h2>
        <p>We respect your privacy and are committed to protecting your personal data.</p>

        <h3>1. Information Collection</h3>
        <p>We may collect anonymous search data to improve your experience. We do not store personal information without your consent.</p>

        <h3>2. Cookies</h3>
        <p>This site may use cookies to remember preferences and enhance performance.</p>

        <h3>3. Third-party APIs</h3>
        <p>Our search results may be powered by Google and other APIs. Please review their privacy policies separately.</p>

        <h3>4. Your Consent</h3>
        <p>By using our service, you consent to our privacy policy.</p>

        <h3>5. Changes</h3>
        <p>We may update this privacy policy from time to time. Continued use means you accept the new terms.</p>
      </main>

      <footer className="footer">
        <div className="footer-links">
          <div>
            <a href="/terms" target="_blank" rel="noopener noreferrer">Terms</a>
            <a href="/contact" target="_blank" rel="noopener noreferrer">Contact Us</a>
            <a href="/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
          </div>
          <div>
            <a href="/roadmap" target="_blank" rel="noopener noreferrer">Roadmap</a>
            <a href="/feedback" target="_blank" rel="noopener noreferrer">Feedback</a>
          </div>
        </div>
        <p className="footer-text">© 2025 Aditya Goo. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;
