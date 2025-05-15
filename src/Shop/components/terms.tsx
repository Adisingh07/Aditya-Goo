import React from 'react';
import './style.css';

const Terms: React.FC = () => {
  return (
    <>
      <header className="header">
        <a href="/" className="logo">🔍 Aditya Goo</a>
      </header>

      <main className="container">
        <h2>Terms of Service</h2>
        <p>By using Aditya Goo, you agree to the following terms.</p>

        <h3>1. Usage</h3>
        <p>You agree not to use our service for any illegal or abusive purposes.</p>

        <h3>2. Content</h3>
        <p>Search results are fetched from third-party APIs and we are not responsible for their accuracy or legality.</p>

        <h3>3. Modifications</h3>
        <p>We reserve the right to modify or discontinue the service at any time.</p>

        <h3>4. Limitation of Liability</h3>
        <p>We are not liable for any damages resulting from the use or inability to use our service.</p>

        <h3>5. Contact</h3>
        <p>If you have any questions, please reach out through our contact form.</p>
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
    </>
  );
};

export default Terms;
